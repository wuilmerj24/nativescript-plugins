import { Folder, File, knownFolders, path as nsPath } from '@nativescript/core';

type Document = { [key: string]: any };

type IndexDef = {
  field: string;
  // valor -> set de PKs
  map: Map<any, Set<string>>;
};

type WalEntry = { op: 'insert'; doc: Document } | { op: 'update'; id: string; set: Partial<Document> } | { op: 'replace'; id: string; doc: Document } | { op: 'delete'; id: string };

const DEFAULT_PK = 'id';
const DEFAULT_COMPACT_THRESHOLD = 200; // compacción tras N ops
const DEFAULT_DEBOUNCE_MS = 150; // guardado diferido

/** --- Utilidad para renombrar carpetas de forma segura --- */
function renameFolderSafely(folder: Folder, newName: string) {
  const parent = folder.parent;
  if (!parent) {
    console.error('No se pudo obtener la carpeta padre');
    return;
  }

  const newFolderPath = nsPath.join(parent.path, newName);
  const newFolder = Folder.fromPath(newFolderPath);

  folder.getEntitiesSync().forEach((entity) => {
    const oldPath = nsPath.join(folder.path, entity.name);
    const newPath = nsPath.join(newFolder.path, entity.name);
    if (entity instanceof File) {
      File.fromPath(oldPath).rename(newPath);
    } else if (entity instanceof Folder) {
      renameFolderSafely(Folder.fromPath(oldPath), entity.name);
    }
  });

  try {
    folder.removeSync();
  } catch (err) {
    console.warn('No se pudo eliminar carpeta original:', err);
  }

  console.log(`Carpeta renombrada a: ${newFolderPath}`);
}

/** --- Clase UUID --- */
class NosqlUUID {
  public generateUUID(version: number): string {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    if (version === 7) {
      const ms = BigInt(Date.now());
      bytes[0] = Number((ms >> 40n) & 0xffn);
      bytes[1] = Number((ms >> 32n) & 0xffn);
      bytes[2] = Number((ms >> 24n) & 0xffn);
      bytes[3] = Number((ms >> 16n) & 0xffn);
      bytes[4] = Number((ms >> 8n) & 0xffn);
      bytes[5] = Number(ms & 0xffn);
      bytes[6] = (bytes[6] & 0x0f) | 0x70;
      bytes[8] = (bytes[8] & 0x3f) | 0x80;
      return this.formatUUID(bytes);
    }
    if (version === 8) {
      bytes[6] = (bytes[6] & 0x0f) | 0x80;
      bytes[8] = (bytes[8] & 0x3f) | 0x80;
      return this.formatUUID(bytes);
    }
    throw new Error('Versión no soportada. Usa 7 u 8.');
  }
  private bytesToHex(bytes: Uint8Array): string {
    return [...bytes].map((b) => b.toString(16).padStart(2, '0')).join('');
  }
  private formatUUID(bytes: Uint8Array): string {
    const hex = this.bytesToHex(bytes);
    return `${hex.substring(0, 8)}-${hex.substring(8, 12)}-${hex.substring(12, 16)}-${hex.substring(16, 20)}-${hex.substring(20)}`;
  }
}

/** --- Clase Table (optimizada) --- */
class Table {
  private file: File; // snapshot .nosql
  private walFile: File; // journal .wal (JSONL)
  private data: Map<string, Document> = new Map(); // en memoria por PK
  private indices: Map<string, IndexDef> = new Map();
  private primaryKey: string;
  private deleted = false;

  // Persistencia diferida
  private saveTimer: any = null;
  private debouncedMs = DEFAULT_DEBOUNCE_MS;

  // Control de compacción
  private opSinceCompact = 0;
  private compactThreshold = DEFAULT_COMPACT_THRESHOLD;

  constructor(private dbFolder: Folder, private tableName: string, primaryKey: string = DEFAULT_PK) {
    this.primaryKey = primaryKey;
    this.file = dbFolder.getFile(`${tableName}.nosql`);
    this.walFile = dbFolder.getFile(`${tableName}.wal`);

    // Cargar snapshot si existe
    if (File.exists(this.file.path)) {
      try {
        const parsed = JSON.parse(this.file.readTextSync() || '{}');
        const arr: Document[] = parsed.data || [];
        const pk = parsed.primaryKey || primaryKey;
        this.primaryKey = pk;
        // reconstruir mapa
        for (const doc of arr) {
          const id = String(doc[this.primaryKey]);
          this.data.set(id, doc);
        }
        // reconstruir definiciones de índices (vacías, se recalculan)
        if (parsed.indices && typeof parsed.indices === 'object') {
          Object.entries(parsed.indices as Record<string, string>).forEach(([name, field]) => {
            this.indices.set(name, { field, map: new Map() });
          });
        }
      } catch (err) {
        console.warn(`Tabla corrupta: ${tableName}. Se renombrará snapshot y continuará con WAL.`);
        this.renameCorruptFile();
      }
    }

    // Reproducir WAL si existe
    if (File.exists(this.walFile.path)) {
      try {
        const content = this.walFile.readTextSync() || '';
        if (content.trim().length) {
          const lines = content.split('\n').filter(Boolean);
          for (const line of lines) {
            const entry = JSON.parse(line) as WalEntry;
            this.applyWalEntry(entry, false); // no volver a escribir al WAL mientras se aplica
          }
        }
      } catch (err) {
        console.warn(`WAL corrupto para ${tableName}. Lo renombro y sigo.`);
        this.renameCorruptWal();
      }
    }

    // Recalcular índices con los datos actuales
    this.rebuildAllIndexes();
    // Después de cargar y re-jugar WAL, conviene compaction inicial ligera si creció mucho
    // (opcional, comentado para no bloquear arranque)
    // this.compactNow();
  }

  private checkDeleted() {
    if (this.deleted) throw new Error(`La tabla '${this.tableName}' ha sido eliminada.`);
  }

  /** ---------- Persistencia y WAL ---------- */

  private schedulePersist() {
    if (this.saveTimer) clearTimeout(this.saveTimer);
    this.saveTimer = setTimeout(() => {
      this.saveTimer = null;
      // política: si aún no supero compaction threshold, solo sync WAL
      if (this.opSinceCompact >= this.compactThreshold) {
        this.compactNow();
      } else {
        this.flushWalBuffer();
      }
    }, this.debouncedMs);
  }

  private walBuffer: WalEntry[] = [];

  private appendToWal(entry: WalEntry) {
    this.walBuffer.push(entry);
    this.opSinceCompact++;
    this.schedulePersist();
  }

  private flushWalBuffer() {
    if (!this.walBuffer.length) return;
    try {
      const existing = File.exists(this.walFile.path) ? this.walFile.readTextSync() || '' : '';
      const add = this.walBuffer.map((e) => JSON.stringify(e)).join('\n') + '\n';
      this.walBuffer = [];
      this.walFile.writeTextSync(existing + add);
    } catch (err) {
      console.error('Error escribiendo WAL:', err);
      // En caso de error, mantenemos walBuffer en memoria para reintentar en próxima operación.
    }
  }

  /** Escribe snapshot .nosql y trunca WAL */
  private compactNow() {
    this.checkDeleted();
    // 1) flush pendiente de WAL por seguridad
    this.flushWalBuffer();

    // 2) construir snapshot
    const snapshot = {
      primaryKey: this.primaryKey,
      data: Array.from(this.data.values()),
      indices: Object.fromEntries(Array.from(this.indices.entries()).map(([name, def]) => [name, def.field])),
    };

    try {
      this.file.writeTextSync(JSON.stringify(snapshot));
      // 3) truncar WAL
      this.walFile.writeTextSync('');
      this.opSinceCompact = 0;
    } catch (err) {
      console.error('Error en compaction:', err);
    }
  }

  private renameCorruptFile() {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '_');
    const newPath = nsPath.join(this.dbFolder.path, `${this.tableName}_corrupt_${timestamp}.nosql`);
    try {
      File.fromPath(this.file.path).renameSync(newPath);
      console.log(`Snapshot corrupto renombrado a: ${newPath}`);
    } catch (err) {
      console.error('No se pudo renombrar snapshot corrupto:', err);
    }
  }

  private renameCorruptWal() {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '_');
    const newPath = nsPath.join(this.dbFolder.path, `${this.tableName}_corrupt_${timestamp}.wal`);
    try {
      File.fromPath(this.walFile.path).renameSync(newPath);
      console.log(`WAL corrupto renombrado a: ${newPath}`);
    } catch (err) {
      console.error('No se pudo renombrar WAL corrupto:', err);
    }
  }

  markDeleted() {
    this.deleted = true;
  }

  /** ---------- Índices ---------- */

  private indexTouchOnInsert(doc: Document) {
    const id = String(doc[this.primaryKey]);
    for (const [, def] of this.indices) {
      const val = doc[def.field];
      const bucket = def.map.get(val) || new Set<string>();
      bucket.add(id);
      def.map.set(val, bucket);
    }
  }

  private indexTouchOnDelete(doc: Document) {
    const id = String(doc[this.primaryKey]);
    for (const [, def] of this.indices) {
      const val = doc[def.field];
      const bucket = def.map.get(val);
      if (bucket) {
        bucket.delete(id);
        if (bucket.size === 0) def.map.delete(val);
      }
    }
  }

  private indexTouchOnUpdate(prev: Document, next: Document) {
    const id = String(next[this.primaryKey]);
    for (const [, def] of this.indices) {
      const oldVal = prev[def.field];
      const newVal = next[def.field];
      if (oldVal === newVal) continue;

      // quitar de old
      const bOld = def.map.get(oldVal);
      if (bOld) {
        bOld.delete(id);
        if (bOld.size === 0) def.map.delete(oldVal);
      }
      // agregar a new
      const bNew = def.map.get(newVal) || new Set<string>();
      bNew.add(id);
      def.map.set(newVal, bNew);
    }
  }

  private rebuildAllIndexes() {
    for (const [, def] of this.indices) {
      def.map.clear();
    }
    for (const doc of this.data.values()) {
      this.indexTouchOnInsert(doc);
    }
  }

  /** ---------- WAL Replay Helpers ---------- */
  private applyWalEntry(entry: WalEntry, alsoAppend = false) {
    switch (entry.op) {
      case 'insert': {
        const doc = entry.doc;
        const id = String(doc[this.primaryKey]);
        if (this.data.has(id)) {
          // si llega un insert duplicado por replay, lo ignoramos
          return;
        }
        this.data.set(id, doc);
        this.indexTouchOnInsert(doc);
        if (alsoAppend) this.appendToWal(entry);
        break;
      }
      case 'update': {
        const id = String(entry.id);
        const prev = this.data.get(id);
        if (!prev) return;
        const next = { ...prev, ...entry.set };
        this.data.set(id, next);
        this.indexTouchOnUpdate(prev, next);
        if (alsoAppend) this.appendToWal(entry);
        break;
      }
      case 'replace': {
        const id = String(entry.id);
        const prev = this.data.get(id);
        if (prev) this.indexTouchOnDelete(prev);
        const next = { ...entry.doc, [this.primaryKey]: id };
        this.data.set(id, next);
        this.indexTouchOnInsert(next);
        if (alsoAppend) this.appendToWal(entry);
        break;
      }
      case 'delete': {
        const id = String(entry.id);
        const prev = this.data.get(id);
        if (!prev) return;
        this.indexTouchOnDelete(prev);
        this.data.delete(id);
        if (alsoAppend) this.appendToWal(entry);
        break;
      }
    }
  }

  /** ---------- CRUD ---------- */

  insert(docs: Document | Document[]) {
    this.checkDeleted();
    const arr = Array.isArray(docs) ? docs : [docs];
    for (let doc of arr) {
      if (!(this.primaryKey in doc)) doc[this.primaryKey] = new NosqlUUID().generateUUID(7);
      const id = String(doc[this.primaryKey]);
      if (this.data.has(id)) throw new Error(`Duplicado: ya existe un documento con ${this.primaryKey}=${id}`);
      // aplicar + WAL
      this.applyWalEntry({ op: 'insert', doc }, true);
    }
    return this;
  }

  update(filterFn: (doc: Document) => boolean, set: Partial<Document>) {
    this.checkDeleted();
    for (const [id, doc] of this.data.entries()) {
      if (filterFn(doc)) {
        const next = { ...doc, ...set };
        this.applyWalEntry({ op: 'update', id, set }, true);
        // Nota: applyWalEntry ya actualizó índices y memoria.
      }
    }
    return this;
  }

  replace(filterFn: (doc: Document) => boolean, newDoc: Document) {
    this.checkDeleted();
    let ensured = { ...newDoc };
    if (!(this.primaryKey in ensured)) ensured[this.primaryKey] = new NosqlUUID().generateUUID(7);

    for (const [id, doc] of this.data.entries()) {
      if (filterFn(doc)) {
        const fixed = { ...ensured, [this.primaryKey]: id };
        this.applyWalEntry({ op: 'replace', id, doc: fixed }, true);
      }
    }
    return this;
  }

  delete(filterFn: (doc: Document) => boolean) {
    this.checkDeleted();
    for (const [id, doc] of this.data.entries()) {
      if (filterFn(doc)) {
        this.applyWalEntry({ op: 'delete', id }, true);
      }
    }
    return this;
  }

  get(id: any) {
    this.checkDeleted();
    return this.data.get(String(id));
  }

  getAll(ids: any[]) {
    this.checkDeleted();
    const set = new Set(ids.map((x) => String(x)));
    return Array.from(this.data.entries())
      .filter(([id]) => set.has(id))
      .map(([, d]) => d);
  }

  filter(filterFn: (doc: Document) => boolean) {
    this.checkDeleted();
    return Array.from(this.data.values()).filter(filterFn);
  }

  all() {
    this.checkDeleted();
    return Array.from(this.data.values());
  }

  /** ---------- Búsqueda por índice ---------- */

  indexCreate(indexName: string, field: string) {
    this.checkDeleted();
    if (this.indices.has(indexName)) throw new Error(`Índice '${indexName}' ya existe`);
    const def: IndexDef = { field, map: new Map() };
    this.indices.set(indexName, def);
    // poblar
    for (const doc of this.data.values()) {
      const v = doc[field];
      const bucket = def.map.get(v) || new Set<string>();
      bucket.add(String(doc[this.primaryKey]));
      def.map.set(v, bucket);
    }
    // snapshot metadata de índices se guarda en compaction
    this.schedulePersist();
    return this;
  }

  indexDrop(indexName: string) {
    this.checkDeleted();
    this.indices.delete(indexName);
    this.schedulePersist();
    return this;
  }

  indexList() {
    this.checkDeleted();
    return Array.from(this.indices.keys());
  }
  indexStatus() {
    this.checkDeleted();
    return Object.fromEntries(Array.from(this.indices.entries()).map(([k, v]) => [k, v.field]));
  }
  indexWait(_indexName: string) {
    this.checkDeleted();
    return true;
  } // inmediato

  /** Buscar por índice: valor exacto */
  findByIndex(indexName: string, value: any) {
    this.checkDeleted();
    const def = this.indices.get(indexName);
    if (!def) throw new Error(`Índice '${indexName}' no existe`);
    const bucket = def.map.get(value);
    if (!bucket || bucket.size === 0) return [];
    return Array.from(bucket.values())
      .map((id) => this.data.get(id)!)
      .filter(Boolean);
  }

  /** Compacción manual opcional */
  compact() {
    this.checkDeleted();
    this.compactNow();
  }

  /** Configuración runtime opcional */
  setDebounce(ms: number) {
    this.debouncedMs = Math.max(0, ms);
  }
  setCompactThreshold(n: number) {
    this.compactThreshold = Math.max(1, n);
  }
}

/** --- Clase Database --- */
class Database {
  private tables: Map<string, Table> = new Map();
  private dbFolder: Folder;
  private metaFile: File;
  private deleted = false;
  private droppedTables: Set<string> = new Set();

  constructor(private dbName: string, createMode: boolean = false) {
    const documents = knownFolders.documents();
    const dbFolderPath = nsPath.join(documents.path, dbName);

    const dbExists = () => {
      if (!Folder.exists(dbFolderPath)) return false;
      const metaFile = nsPath.join(dbFolderPath, '.dbmeta.json');
      if (!File.exists(metaFile)) return false;
      try {
        const content = File.fromPath(metaFile).readTextSync();
        const meta = JSON.parse(content || '{}');
        return meta.type === 'nosql-db' && meta.name === dbName;
      } catch {
        return false;
      }
    };

    if (dbExists()) {
      this.dbFolder = Folder.fromPath(dbFolderPath);
      this.metaFile = this.dbFolder.getFile('.dbmeta.json');
    } else if (createMode) {
      if (Folder.exists(dbFolderPath)) this.renameCorruptDatabase();
      this.dbFolder = Folder.fromPath(dbFolderPath);
      this.metaFile = this.dbFolder.getFile('.dbmeta.json');
      this.initializeMetaFile();
    } else {
      throw new Error(`La base de datos '${dbName}' no existe o es inválida. Usa dbCreate().`);
    }
  }

  private checkDeleted() {
    if (this.deleted) throw new Error(`La base de datos '${this.dbName}' ha sido eliminada.`);
  }

  private initializeMetaFile() {
    this.checkDeleted();
    this.metaFile.writeTextSync(
      JSON.stringify({
        type: 'nosql-db',
        name: this.dbName,
        createdAt: new Date().toISOString(),
      })
    );
  }

  private renameCorruptDatabase() {
    try {
      if (!this.dbFolder) return;
      const timestamp = new Date().toISOString().replace(/[:.]/g, '_');
      const newName = `${this.dbName}_corrupt_${timestamp}`;
      const parentFolder = knownFolders.documents();
      const corruptPath = nsPath.join(parentFolder.path, newName);
      if (Folder.exists(corruptPath)) throw new Error('Ya existe una carpeta con el nombre de corrupto');
      renameFolderSafely(this.dbFolder, newName);
      console.log(`Base de datos corrupta renombrada a: ${corruptPath}`);
      this.dbFolder = Folder.fromPath(nsPath.join(parentFolder.path, this.dbName));
    } catch (err) {
      console.error(`No se pudo renombrar DB corrupta: ${err}`);
      throw err;
    }
  }

  table(tableName: string) {
    this.checkDeleted();

    if (this.droppedTables.has(tableName)) {
      throw new Error(`La tabla '${tableName}' fue eliminada y no puede usarse nuevamente en esta instancia.`);
    }

    if (!this.tables.has(tableName)) {
      const dataFile = this.dbFolder.getFile(`${tableName}.nosql`);
      const walFile = this.dbFolder.getFile(`${tableName}.wal`);
      if (!File.exists(dataFile.path) && !File.exists(walFile.path)) {
        throw new Error(`La tabla '${tableName}' no existe. Usa tableCreate().`);
      }
      this.tables.set(tableName, new Table(this.dbFolder, tableName));
    }

    const table = this.tables.get(tableName)!;
    if ((table as any)['deleted']) throw new Error(`La tabla '${tableName}' ha sido eliminada.`);
    return table;
  }

  tableCreate(tableName: string, options?: { primary_key_name?: string }) {
    this.checkDeleted();

    if (this.droppedTables.has(tableName)) {
      throw new Error(`No se puede volver a crear la tabla '${tableName}' porque fue eliminada (session-locked).`);
    }

    const pk = options?.primary_key_name || DEFAULT_PK;
    if (!this.tables.has(tableName)) {
      // crear instancia; aún no crea archivo hasta primera escritura/compaction
      this.tables.set(tableName, new Table(this.dbFolder, tableName, pk));
      // Hacer una compaction inicial para materializar snapshot vacío con metadata
      this.tables.get(tableName)!.compact();
    }
    return this.tables.get(tableName)!;
  }

  tableDrop(tableName: string) {
    this.checkDeleted();

    const t = this.tables.get(tableName);
    // Aunque no esté en el map, intentamos borrar archivos si existen
    const dataPath = nsPath.join(this.dbFolder.path, `${tableName}.nosql`);
    const walPath = nsPath.join(this.dbFolder.path, `${tableName}.wal`);

    try {
      if (File.exists(dataPath)) File.fromPath(dataPath).removeSync();
      if (File.exists(walPath)) File.fromPath(walPath).removeSync();
      if (t) {
        (t as any).data = new Map();
        t.markDeleted();
        this.tables.delete(tableName);
      }
      this.droppedTables.add(tableName);
      console.log(`Tabla '${tableName}' eliminada correctamente.`);
    } catch (err) {
      console.error(`Error al eliminar tabla '${tableName}':`, err);
    }
    return this;
  }

  tableList() {
    this.checkDeleted();
    // listar por archivos .nosql presentes
    return this.dbFolder
      .getEntitiesSync()
      .filter((f) => f.name.endsWith('.nosql'))
      .map((f) => f.name.replace('.nosql', ''));
  }

  markDeleted() {
    this.deleted = true;
    this.tables.forEach((t) => t.markDeleted());
    this.tables.clear();
  }
}

/** --- Clase NosqlCommon --- */
export abstract class NosqlCommon {
  private dbs: Map<string, Database> = new Map();

  db(dbName: string): Database {
    if (!this.dbs.has(dbName)) this.dbs.set(dbName, new Database(dbName, false));
    return this.dbs.get(dbName)!;
  }

  dbCreate(dbName: string): Database {
    if (this.dbExists(dbName)) {
      console.warn(`La base de datos '${dbName}' ya existe, se abrirá.`);
      return this.db(dbName);
    }
    const db = new Database(dbName, true);
    this.dbs.set(dbName, db);
    return db;
  }

  private dbExists(dbName: string): boolean {
    const documents = knownFolders.documents();
    const dbFolderPath = nsPath.join(documents.path, dbName);
    return Folder.exists(dbFolderPath) && File.exists(nsPath.join(dbFolderPath, '.dbmeta.json'));
  }

  dbDrop(dbName: string) {
    const db = this.dbs.get(dbName);
    const documents = knownFolders.documents();
    const dbFolderPath = nsPath.join(documents.path, dbName);

    if (Folder.exists(dbFolderPath)) {
      try {
        const folder = Folder.fromPath(dbFolderPath);
        folder.getEntitiesSync().forEach((entity) => {
          if (entity instanceof File) {
            File.fromPath(entity.path).removeSync();
          } else if (entity instanceof Folder) {
            Folder.fromPath(entity.path).removeSync();
          }
        });
        folder.removeSync();
        console.log(`Base de datos '${dbName}' eliminada completamente.`);
      } catch (err) {
        console.error(`Error eliminando DB '${dbName}':`, err);
      }
    } else {
      console.warn(`DB '${dbName}' no existe.`);
    }

    if (db) db.markDeleted();
    this.dbs.delete(dbName);
    return this;
  }

  dbList() {
    const documents = knownFolders.documents();
    return documents
      .getEntitiesSync()
      .filter((f) => f instanceof Folder)
      .filter((f) => {
        const metaFile = f.getFile('.dbmeta.json');
        if (!File.exists(metaFile.path)) return false;
        try {
          const meta = JSON.parse(metaFile.readTextSync() || '{}');
          return meta.type === 'nosql-db';
        } catch {
          return false;
        }
      })
      .map((f) => f.name);
  }
}
