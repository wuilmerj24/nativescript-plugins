import { knownFolders, File, Folder, path } from '@nativescript/core';

/* ===========================
   Interfaces
=========================== */
export type FieldType = 'string' | 'number' | 'boolean' | 'object' | 'array' | 'date';

export type TableSchema = Record<string, FieldType>;

export interface DatabaseConfig {
  name: string;
  version: number;
  createdAt: string;
  updatedAt: string;
  signature: string;
}

export interface TableHeader {
  name: string;
  createdAt: string;
  lastModified: string;
  indexes: Record<string, string>;
  defaults?: Record<string, any>;
  schema?: TableSchema;
  signature: string;
}

export interface QueryOptions {
  limit?: number;
  offset?: number;
  orderBy?: string;
  order?: 'asc' | 'desc';
}

interface TableFile {
  header: TableHeader;
  data: any[];
  indexes: Record<string, Record<string, string[]>>;
}

export type MigrationFn = (db: NosqlCommon) => Promise<void>;

export interface MigrationMap {
  [version: number]: MigrationFn;
}

/* ===========================
   Core
=========================== */

export class NosqlCommon {
  protected dbPath!: string;
  protected currentTable!: string;
  protected dbConfig!: DatabaseConfig;
  protected readonly DB_META_FILE = 'db.meta.json';
  protected tableCache = new Map<string, TableFile>();
  protected dirtyTables = new Set<string>();
  protected migrationsRunning = false;
  /* ===========================
       Utils
    =========================== */

  protected generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  protected async loadTable(name: string): Promise<TableFile> {
    if (this.tableCache.has(name)) {
      return this.tableCache.get(name)!;
    }

    const tablePath = path.join(this.dbPath, `${name}.nosql`);
    const content = await File.fromPath(tablePath).readText();
    const parsed = JSON.parse(content) as TableFile;

    this.tableCache.set(name, parsed);
    return parsed;
  }

  protected async persistTable(name: string): Promise<void> {
    if (!this.dirtyTables.has(name)) return;

    const table = this.tableCache.get(name);
    if (!table) return;

    table.header.lastModified = new Date().toISOString();
    table.header.signature = this.generateUUID();

    const tablePath = path.join(this.dbPath, `${name}.nosql`);
    await this.writeAtomic(tablePath, JSON.stringify(table));
    //await File.fromPath(tablePath).writeText(JSON.stringify(table));

    this.dirtyTables.delete(name);
  }

  protected markDirty(name: string): void {
    this.dirtyTables.add(name);
  }

  /* ===========================
       MIGRATIONS
    =========================== */
  protected getSnapshotDir(): string {
    return path.join(this.dbPath, '_snapshots');
  }

  protected async createSnapshot(version: number): Promise<void> {
    const snapDir = this.getSnapshotDir();
    Folder.fromPath(snapDir);

    const snapshot: any = {
      meta: this.dbConfig,
      tables: {},
    };

    const tables = await this.tableList();
    for (const table of tables) {
      const file = path.join(this.dbPath, `${table}.nosql`);
      snapshot.tables[table] = await File.fromPath(file).readText();
    }

    const snapPath = path.join(snapDir, `snapshot_v${version}.json`);
    await this.writeAtomic(snapPath, JSON.stringify(snapshot));
  }

  protected async restoreSnapshot(version: number): Promise<void> {
    const snapPath = path.join(this.getSnapshotDir(), `snapshot_v${version}.json`);

    if (!(await File.exists(snapPath))) {
      throw new Error('Snapshot not found');
    }

    const snapshot = JSON.parse(await File.fromPath(snapPath).readText());

    // Restore meta
    this.dbConfig = snapshot.meta;
    await this.writeAtomic(path.join(this.dbPath, this.DB_META_FILE), JSON.stringify(snapshot.meta));

    // Restore tables
    for (const [name, content] of Object.entries(snapshot.tables)) {
      const tablePath = path.join(this.dbPath, `${name}.nosql`);
      await this.writeAtomic(tablePath, content as string);
    }

    this.tableCache.clear();
    this.dirtyTables.clear();
  }

  async migrate(migrations: MigrationMap): Promise<void> {
    if (this.migrationsRunning) {
      throw new Error('Migration already running');
    }

    this.migrationsRunning = true;

    const initialVersion = this.getDbVersion();

    try {
      const versions = Object.keys(migrations)
        .map(Number)
        .filter((v) => v > initialVersion)
        .sort((a, b) => a - b);

      if (versions.length > 0) {
        await this.createSnapshot(initialVersion);
      }

      for (const version of versions) {
        console.log(`[DB MIGRATION] Applying v${version}`);
        await migrations[version](this);

        this.tableCache.clear();
        this.dirtyTables.clear();

        await this.setDbVersion(version);
        console.log(`[DB MIGRATION] v${version} applied`);
      }
    } catch (err) {
      console.error('[DB MIGRATION] Failed, restoring snapshot');
      await this.restoreSnapshot(initialVersion);
      throw err;
    } finally {
      this.migrationsRunning = false;
    }
  }

  protected validateValue(type: FieldType, value: any): boolean {
    if (value === null || value === undefined) return true;

    switch (type) {
      case 'string':
        return typeof value === 'string';
      case 'number':
        return typeof value === 'number';
      case 'boolean':
        return typeof value === 'boolean';
      case 'object':
        return typeof value === 'object' && !Array.isArray(value);
      case 'array':
        return Array.isArray(value);
      case 'date':
        return !isNaN(Date.parse(value));
      default:
        return false;
    }
  }

  protected validateSchema(schema: TableSchema, data: any): void {
    for (const [field, type] of Object.entries(schema)) {
      if (!this.validateValue(type, data[field])) {
        throw new Error(`Schema validation failed: field "${field}" expected ${type}`);
      }
    }
  }

  async defineTableSchema(tableName: string, schema: TableSchema): Promise<void> {
    const table = await this.loadTable(tableName);
    table.header.schema = schema;
    this.markDirty(tableName);
    await this.persistTable(tableName);
  }

  /* ===========================
       Migration helpers
    =========================== */
  protected async writeAtomic(filePath: string, content: string): Promise<void> {
    const file = File.fromPath(filePath);

    // Escribir directamente (NativeScript es síncrono a nivel FS)
    await file.writeText(content);

    // Verificación defensiva
    const verify = await file.readText();
    if (!verify || !verify.trim()) {
      throw new Error(`Atomic write failed for ${filePath}`);
    }
  }

  async createTableIfNotExists(name: string): Promise<boolean> {
    const tablePath = path.join(this.dbPath, `${name}.nosql`);
    if (await File.exists(tablePath)) return false;
    return this.createTable(name);
  }

  async addFieldToTable(tableName: string, field: string, defaultValue: any): Promise<void> {
    const table = await this.loadTable(tableName);

    table.header.defaults ??= {};
    table.header.defaults[field] = defaultValue;

    for (const row of table.data) {
      if (!(field in row)) {
        row[field] = defaultValue;
        row.updatedAt = new Date().toISOString();
      }
    }

    this.markDirty(tableName);
    await this.persistTable(tableName);
  }

  async renameField(tableName: string, from: string, to: string): Promise<void> {
    const table = await this.loadTable(tableName);

    for (const row of table.data) {
      if (from in row) {
        row[to] = row[from];
        delete row[from];
        row.updatedAt = new Date().toISOString();
      }
    }

    this.markDirty(tableName);
    await this.persistTable(tableName);
  }

  /* ===========================
       Database
    =========================== */

  async createDb(name: string, version: number = 1): Promise<boolean> {
    const base = knownFolders.documents().path;
    const dbPath = path.join(base, name);

    if (await File.exists(dbPath)) {
      throw new Error('Database already exists');
    }

    Folder.fromPath(dbPath);

    const now = new Date().toISOString();

    const config: DatabaseConfig = {
      name,
      version,
      createdAt: now,
      updatedAt: now,
      signature: this.generateUUID(),
    };

    const metaPath = path.join(dbPath, this.DB_META_FILE);
    await this.writeAtomic(metaPath, JSON.stringify(config));

    //await File.fromPath(metaPath).writeText(JSON.stringify(config));

    this.dbPath = dbPath;
    this.dbConfig = config;

    return true;
  }

  async useDb(name: string, migrations?: MigrationMap, targetVersion?: number): Promise<boolean> {
    const base = knownFolders.documents().path;
    const dbPath = path.join(base, name);

    if (!(await File.exists(dbPath))) {
      throw new Error('Database not found');
    }

    const metaPath = path.join(dbPath, this.DB_META_FILE);
    if (!(await File.exists(metaPath))) {
      throw new Error('Database metadata not found');
    }

    const content = await File.fromPath(metaPath).readText();

    if (!content || !content.trim()) {
      throw new Error('Database metadata is corrupted or empty. Delete the database and recreate it.');
    }
    this.dbConfig = JSON.parse(content) as DatabaseConfig;

    this.dbPath = dbPath;
    this.tableCache.clear();
    this.dirtyTables.clear();
    // ✅ Ejecutar migraciones automáticamente
    if (migrations) {
      await this.migrate(migrations);
    }

    // ✅ Validar versión final
    if (targetVersion !== undefined) {
      this.assertDbVersion(targetVersion);
    }

    return true;
  }

  getDbVersion(): number {
    if (!this.dbConfig) {
      throw new Error('No database selected');
    }
    return this.dbConfig.version;
  }

  async setDbVersion(version: number): Promise<boolean> {
    if (!this.dbConfig) {
      throw new Error('No database selected');
    }

    this.dbConfig.version = version;
    this.dbConfig.updatedAt = new Date().toISOString();
    this.dbConfig.signature = this.generateUUID();

    const metaPath = path.join(this.dbPath, this.DB_META_FILE);
    await this.writeAtomic(metaPath, JSON.stringify(this.dbConfig));
    //await File.fromPath(metaPath).writeText(JSON.stringify(this.dbConfig));

    return true;
  }

  assertDbVersion(minVersion: number): void {
    if (!this.dbConfig) {
      throw new Error('No database selected');
    }

    if (this.dbConfig.version < minVersion) {
      throw new Error(`Database version ${this.dbConfig.version} is lower than required ${minVersion}`);
    }
  }

  async dropDb(name: string): Promise<boolean> {
    const base = knownFolders.documents().path;
    const dbPath = path.join(base, name);

    if (!(await File.exists(dbPath))) return false;

    await Folder.fromPath(dbPath).remove();
    this.tableCache.clear();
    this.dirtyTables.clear();
    return true;
  }

  async dbList(): Promise<string[]> {
    const base = knownFolders.documents();
    return (await base.getEntities()).filter((e) => e instanceof Folder).map((e) => e.name);
  }

  /* ===========================
       Tables
    =========================== */

  async createTable(name: string): Promise<boolean> {
    const tablePath = path.join(this.dbPath, `${name}.nosql`);
    if (await File.exists(tablePath)) {
      throw new Error('Table exists');
    }

    const now = new Date().toISOString();
    const table: TableFile = {
      header: {
        name,
        createdAt: now,
        lastModified: now,
        indexes: {},
        defaults: {},
        signature: this.generateUUID(),
      },
      data: [],
      indexes: {},
    };

    await this.writeAtomic(tablePath, JSON.stringify(table));

    //await File.fromPath(tablePath).writeText(JSON.stringify(table));
    return true;
  }

  async table(name: string): Promise<this> {
    this.currentTable = name;
    await this.loadTable(name);
    return this;
  }

  async tableList(): Promise<string[]> {
    const dir = Folder.fromPath(this.dbPath);
    return (await dir.getEntities()).filter((e) => e instanceof File && e.name.endsWith('.nosql')).map((e) => e.name.replace('.nosql', ''));
  }

  async tableDrop(name: string): Promise<boolean> {
    const tablePath = path.join(this.dbPath, `${name}.nosql`);
    if (!(await File.exists(tablePath))) return false;

    await File.fromPath(tablePath).remove();
    this.tableCache.delete(name);
    this.dirtyTables.delete(name);
    return true;
  }

  /* ===========================
       Indexes
    =========================== */

  async tableIndex(indexName: string, field: string): Promise<boolean> {
    const table = await this.loadTable(this.currentTable);

    table.header.indexes[indexName] = field;
    table.indexes[indexName] = {};

    for (const row of table.data) {
      const key = row[field];
      if (key === undefined) continue;
      table.indexes[indexName][key] ??= [];
      table.indexes[indexName][key].push(row.id);
    }

    this.markDirty(this.currentTable);
    await this.persistTable(this.currentTable);
    return true;
  }

  /* ===========================
       CRUD
    =========================== */

  async insert(data: any): Promise<string> {
    const table = await this.loadTable(this.currentTable);
    const defaults = table.header.defaults ?? {};
    const doc = {
      id: this.generateUUID(),
      ...defaults,
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    if (table.header.schema) {
      this.validateSchema(table.header.schema, doc);
    }

    table.data.push(doc);

    for (const [index, field] of Object.entries(table.header.indexes)) {
      const key = doc[field];
      if (key === undefined) continue;
      table.indexes[index][key] ??= [];
      table.indexes[index][key].push(doc.id);
    }

    this.markDirty(this.currentTable);
    await this.persistTable(this.currentTable);
    return doc.id;
  }

  async get(id: string): Promise<any | null> {
    const table = await this.loadTable(this.currentTable);
    return table.data.find((r) => r.id === id) ?? null;
  }

  async getAll(ids?: string[]): Promise<any[]> {
    const table = await this.loadTable(this.currentTable);
    if (!ids) return [...table.data];
    return table.data.filter((r) => ids.includes(r.id));
  }

  async update(id: string, changes: any): Promise<boolean> {
    const table = await this.loadTable(this.currentTable);
    const row = table.data.find((r) => r.id === id);
    if (!row) return false;

    const updated = { ...row, ...changes };

    if (table.header.schema) {
      this.validateSchema(table.header.schema, updated);
    }

    Object.assign(row, changes, { updatedAt: new Date().toISOString() });

    this.markDirty(this.currentTable);
    await this.persistTable(this.currentTable);
    return true;
  }

  async delete(id?: string): Promise<boolean> {
    const table = await this.loadTable(this.currentTable);

    if (!id) {
      table.data = [];
      table.indexes = {};
      this.markDirty(this.currentTable);
      await this.persistTable(this.currentTable);
      return true;
    }

    const idx = table.data.findIndex((r) => r.id === id);
    if (idx === -1) return false;

    const removed = table.data.splice(idx, 1)[0];

    for (const [index, field] of Object.entries(table.header.indexes)) {
      const key = removed[field];
      if (key !== undefined) {
        table.indexes[index][key] = table.indexes[index][key]?.filter((x) => x !== id) ?? [];
      }
    }

    this.markDirty(this.currentTable);
    await this.persistTable(this.currentTable);
    return true;
  }

  /* ===========================
       Filter
    =========================== */

  async filter(criteria: any, options?: QueryOptions): Promise<any[]> {
    const table = await this.loadTable(this.currentTable);

    const matches = (row: any): boolean => {
      return Object.entries(criteria).every(([field, cond]) => {
        const value = row[field];

        if (typeof cond !== 'object') {
          return value === cond;
        }

        if ('$gt' in cond) return value > cond.$gt;
        if ('$lt' in cond) return value < cond.$lt;
        if ('$eq' in cond) return value === cond.$eq;
        if ('$ne' in cond) return value !== cond.$ne;
        if ('$in' in cond) return cond.$in.includes(value);

        return false;
      });
    };

    let result = table.data.filter(matches);

    if (options?.orderBy) {
      result.sort((a, b) => (options.order === 'desc' ? b[options.orderBy] - a[options.orderBy] : a[options.orderBy] - b[options.orderBy]));
    }

    if (options?.offset) result = result.slice(options.offset);
    if (options?.limit) result = result.slice(0, options.limit);

    return result;
  }
}
