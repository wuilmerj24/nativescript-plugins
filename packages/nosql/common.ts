// database.nosql.ts
import { knownFolders, File, Folder, path } from '@nativescript/core';

export interface DatabaseConfig {
  name: string;
  version: string; // Cambiar a número para mejor manejo
  createdAt: string;
  signature: string;
  lastMigration?: string; // Nueva propiedad para tracking
}

export interface Migration {
  version: string;
  description: string;
  up: (db: NosqlCommon) => Promise<boolean>;
  down?: (db: NosqlCommon) => Promise<boolean>;
}

export interface TableHeader {
  name: string;
  createdAt: string;
  lastModified: string;
  indexes: string[];
  signature: string;
}

export interface QueryOptions {
  limit?: number;
  offset?: number;
  orderBy?: string;
  order?: 'asc' | 'desc';
}

export class NosqlCommon {
  private dbPath: string;
  private dbConfig: DatabaseConfig;
  private currentTable: string | null = null;
  private migrations: Migration[] = []; // Registrar migraciones

  constructor() {}

  // Método para generar firma (hash simple)
  private generateSignature(data: string): string {
    let hash = 0;
    for (let i = 0; i < data.length; i++) {
      const char = data.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return hash.toString(16);
  }

  // Método para verificar firma de tabla
  private verifyTableSignature(header: TableHeader): boolean {
    const dataToVerify = `${header.name}${header.createdAt}${header.lastModified}`;
    const expectedSignature = this.generateSignature(dataToVerify);
    return header.signature === expectedSignature;
  }

  // Método para generar firma de tabla
  private generateTableSignature(header: TableHeader): string {
    const dataToSign = `${header.name}${header.createdAt}${header.lastModified}`;
    return this.generateSignature(dataToSign);
  }

  // Verificar si es una base de datos válida
  private async isValidDatabase(folder: Folder): Promise<boolean> {
    try {
      const metaFile = folder.getFile('meta.config');
      if (await File.exists(metaFile.path)) {
        const content = await metaFile.readText();
        const config: DatabaseConfig = JSON.parse(content);

        // Verificar firma
        const dataToVerify = `${config.name}${config.version}${config.createdAt}`;
        const expectedSignature = this.generateSignature(dataToVerify);

        return config.signature === expectedSignature;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  //LIST BASE DE DATOS
  async dbList(): Promise<string[]> {
    try {
      const documents = knownFolders.documents();
      const entities = await documents.getEntities();

      const databases: string[] = [];

      for (const entity of entities) {
        if (entity instanceof Folder) {
          const folder = entity as Folder;

          // Verificar si es una base de datos válida
          if (await this.isValidDatabase(folder)) {
            databases.push(folder.name);
          }
        }
      }

      return databases;
    } catch (error) {
      console.error('Error listing databases:', error);
      return [];
    }
  }

  // Registrar migraciones
  registerMigrations(migrations: Migration[]): void {
    this.migrations = migrations.sort((a, b) => this.compareVersions(a.version, b.version));
  }

  // Comparar versiones semánticas
  private compareVersions(v1: string, v2: string): number {
    const parts1 = v1.split('.').map(Number);
    const parts2 = v2.split('.').map(Number);

    for (let i = 0; i < 3; i++) {
      if (parts1[i] > parts2[i]) return 1;
      if (parts1[i] < parts2[i]) return -1;
    }
    return 0;
  }

  // Método para crear BD con versión específica
  async createDb(dbName: string, version: string = '1.0.0'): Promise<boolean> {
    try {
      const documents = knownFolders.documents();
      const dbPath = path.join(documents.path, dbName);

      if (await File.exists(dbPath)) {
        throw new Error(`Database '${dbName}' already exists`);
      }

      const dbFolder = Folder.fromPath(dbPath);
      const now = new Date().toISOString();

      const config: DatabaseConfig = {
        name: dbName,
        version: version,
        createdAt: now,
        signature: this.generateSignature(`${dbName}${version}${now}`),
      };

      const metaFile = File.fromPath(path.join(dbPath, 'meta.config'));
      await metaFile.writeText(JSON.stringify(config, null, 2));

      this.dbPath = dbPath;
      this.dbConfig = config;

      return true;
    } catch (error) {
      console.error('Error creating database:', error);
      return false;
    }
  }

  // Método para actualizar versión de BD
  async setDbVersion(version: string): Promise<boolean> {
    if (!this.dbPath) {
      throw new Error('No database selected');
    }

    try {
      const metaPath = path.join(this.dbPath, 'meta.config');
      const metaFile = File.fromPath(metaPath);

      if (!(await File.exists(metaPath))) {
        throw new Error('Database configuration not found');
      }

      const content = await metaFile.readText();
      const config: DatabaseConfig = JSON.parse(content);

      // Actualizar versión
      config.version = version;
      config.signature = this.generateSignature(`${config.name}${version}${config.createdAt}`);

      await metaFile.writeText(JSON.stringify(config, null, 2));
      this.dbConfig = config;

      return true;
    } catch (error) {
      console.error('Error setting database version:', error);
      return false;
    }
  }

  // Obtener versión actual de la BD
  async getDbVersion(): Promise<string> {
    if (!this.dbPath) {
      throw new Error('No database selected');
    }

    try {
      const metaPath = path.join(this.dbPath, 'meta.config');
      if (!(await File.exists(metaPath))) {
        throw new Error('Database configuration not found');
      }

      const metaFile = File.fromPath(metaPath);
      const content = await metaFile.readText();
      const config: DatabaseConfig = JSON.parse(content);

      return config.version;
    } catch (error) {
      console.error('Error getting database version:', error);
      return '0.0.0';
    }
  }

  // Ejecutar migraciones
  async migrate(targetVersion?: string): Promise<boolean> {
    if (!this.dbPath) {
      throw new Error('No database selected');
    }

    try {
      const currentVersion = await this.getDbVersion();
      let target = targetVersion || this.migrations[this.migrations.length - 1]?.version;

      if (!target) {
        console.log('No migrations registered or target version specified');
        return true;
      }

      const migrationsToApply = this.migrations.filter((migration) => this.compareVersions(migration.version, currentVersion) > 0 && this.compareVersions(migration.version, target) <= 0);

      for (const migration of migrationsToApply) {
        console.log(`Applying migration: ${migration.version} - ${migration.description}`);

        const success = await migration.up(this);
        if (!success) {
          throw new Error(`Migration ${migration.version} failed`);
        }

        // Actualizar versión de la BD
        await this.setDbVersion(migration.version);
      }

      return true;
    } catch (error) {
      console.error('Error during migration:', error);
      return false;
    }
  }

  // Revertir migración
  async rollback(version: string): Promise<boolean> {
    if (!this.dbPath) {
      throw new Error('No database selected');
    }

    try {
      const migration = this.migrations.find((m) => m.version === version);
      if (!migration || !migration.down) {
        throw new Error(`Migration ${version} not found or cannot be reverted`);
      }

      const success = await migration.down(this);
      if (!success) {
        throw new Error(`Rollback of migration ${version} failed`);
      }

      // Encontrar versión anterior
      const currentIndex = this.migrations.findIndex((m) => m.version === version);
      const previousVersion = currentIndex > 0 ? this.migrations[currentIndex - 1].version : '0.0.0';

      await this.setDbVersion(previousVersion);

      return true;
    } catch (error) {
      console.error('Error during rollback:', error);
      return false;
    }
  }

  // USAR BASE DE DATOS
  async useDb(dbName: string): Promise<boolean> {
    try {
      const documents = knownFolders.documents();
      const dbPath = path.join(documents.path, dbName);

      if (!(await File.exists(dbPath))) {
        throw new Error(`Database '${dbName}' does not exist`);
      }

      const dbFolder = Folder.fromPath(dbPath);
      if (!(await this.isValidDatabase(dbFolder))) {
        throw new Error(`'${dbName}' is not a valid database`);
      }

      this.dbPath = dbPath;

      // Leer configuración
      const metaFile = File.fromPath(path.join(dbPath, 'meta.config'));
      const content = await metaFile.readText();
      this.dbConfig = JSON.parse(content);

      return true;
    } catch (error) {
      console.error('Error using database:', error);
      return false;
    }
  }

  // ELIMINAR BASE DE DATOS
  async dropDb(dbName: string): Promise<boolean> {
    try {
      const documents = knownFolders.documents();
      const dbPath = path.join(documents.path, dbName);

      if (await File.exists(dbPath)) {
        const dbFolder = Folder.fromPath(dbPath);

        // Eliminar todos los archivos
        try {
          const entities = await dbFolder.getEntities();
          for (const entity of entities) {
            await entity.remove();
          }
          await dbFolder.remove();
        } catch (error) {
          console.log('Error removing folder, might already be empty:', error);
        }

        this.dbPath = null;
        this.dbConfig = null;
        this.currentTable = null;
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error dropping database:', error);
      return false;
    }
  }

  // CREAR TABLA
  async createTable(tableName: string): Promise<boolean> {
    if (!this.dbPath) {
      throw new Error('No database selected');
    }

    try {
      const tablePath = path.join(this.dbPath, `${tableName}.nosql`);

      if (await File.exists(tablePath)) {
        throw new Error(`Table '${tableName}' already exists`);
      }

      const now = new Date().toISOString();
      const header: TableHeader = {
        name: tableName,
        createdAt: now,
        lastModified: now,
        indexes: [],
        signature: '',
      };

      // Generar firma
      header.signature = this.generateTableSignature(header);

      const tableData = {
        header,
        data: [],
        indexes: {},
      };

      const tableFile = File.fromPath(tablePath);
      await tableFile.writeText(JSON.stringify(tableData, null, 2));
      return true;
    } catch (error) {
      console.error('Error creating table:', error);
      return false;
    }
  }

  // USAR TABLA
  async table(tableName: string): Promise<NosqlCommon> {
    if (!this.dbPath) {
      throw new Error('No database selected');
    }

    try {
      const tablePath = path.join(this.dbPath, `${tableName}.nosql`);

      if (!(await File.exists(tablePath))) {
        throw new Error(`Table '${tableName}' does not exist`);
      }

      this.currentTable = tableName;
      return this;
    } catch (error) {
      console.error('Error selecting table:', error);
      throw error;
    }
  }

  // ELIMINAR TABLA
  async tableDrop(tableName: string): Promise<boolean> {
    if (!this.dbPath) {
      throw new Error('No database selected');
    }

    try {
      const tablePath = path.join(this.dbPath, `${tableName}.nosql`);

      if (await File.exists(tablePath)) {
        const tableFile = File.fromPath(tablePath);
        await tableFile.remove();

        if (this.currentTable === tableName) {
          this.currentTable = null;
        }

        return true;
      }
      return false;
    } catch (error) {
      console.error('Error dropping table:', error);
      return false;
    }
  }

  // LISTAR TABLAS
  async tableList(): Promise<string[]> {
    if (!this.dbPath) {
      throw new Error('No database selected');
    }

    try {
      const dbFolder = Folder.fromPath(this.dbPath);
      const entities = await dbFolder.getEntities();

      const tables: string[] = [];
      for (const entity of entities) {
        if (entity.name.endsWith('.nosql')) {
          tables.push(entity.name.replace('.nosql', ''));
        }
      }
      return tables;
    } catch (error) {
      console.error('Error listing tables:', error);
      return [];
    }
  }

  // CREAR ÍNDICE
  async tableIndex(indexName: string, field: string): Promise<boolean> {
    if (!this.dbPath || !this.currentTable) {
      throw new Error('No table selected');
    }

    try {
      const tablePath = path.join(this.dbPath, `${this.currentTable}.nosql`);
      const tableFile = File.fromPath(tablePath);

      const content = await tableFile.readText();
      const tableData = JSON.parse(content);

      // Verificar firma
      if (!this.verifyTableSignature(tableData.header)) {
        console.warn('Table signature mismatch, but continuing operation');
        // No lanzar error, solo log warning
      }

      // Agregar índice al header
      if (!tableData.header.indexes.includes(indexName)) {
        tableData.header.indexes.push(indexName);
      }

      // Crear índice
      tableData.indexes[indexName] = {};
      for (const item of tableData.data) {
        if (item[field] !== undefined) {
          if (!tableData.indexes[indexName][item[field]]) {
            tableData.indexes[indexName][item[field]] = [];
          }
          tableData.indexes[indexName][item[field]].push(item.id);
        }
      }

      // Actualizar timestamp y firma
      tableData.header.lastModified = new Date().toISOString();
      tableData.header.signature = this.generateTableSignature(tableData.header);

      await tableFile.writeText(JSON.stringify(tableData, null, 2));
      return true;
    } catch (error) {
      console.error('Error creating index:', error);
      return false;
    }
  }

  // INSERTAR DATOS
  async insert(data: any): Promise<string> {
    if (!this.dbPath || !this.currentTable) {
      throw new Error('No table selected');
    }

    try {
      const tablePath = path.join(this.dbPath, `${this.currentTable}.nosql`);
      const tableFile = File.fromPath(tablePath);

      const content = await tableFile.readText();
      const tableData = JSON.parse(content);

      // Verificar firma (pero no fallar si hay mismatch)
      if (!this.verifyTableSignature(tableData.header)) {
        console.warn('Table signature mismatch, but continuing operation');
      }

      // Generar ID único
      const id = this.generateUUID();
      const document = {
        id,
        ...data,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      // Insertar datos
      tableData.data.push(document);

      // Actualizar índices
      for (const indexName of tableData.header.indexes) {
        for (const field in document) {
          if (document.hasOwnProperty(field)) {
            if (!tableData.indexes[indexName]) {
              tableData.indexes[indexName] = {};
            }
            if (!tableData.indexes[indexName][document[field]]) {
              tableData.indexes[indexName][document[field]] = [];
            }
            tableData.indexes[indexName][document[field]].push(id);
          }
        }
      }

      // Actualizar timestamp y firma
      tableData.header.lastModified = new Date().toISOString();
      tableData.header.signature = this.generateTableSignature(tableData.header);

      await tableFile.writeText(JSON.stringify(tableData, null, 2));
      return id;
    } catch (error) {
      console.error('Error inserting data:', error);
      throw error;
    }
  }

  // ACTUALIZAR DATOS
  async update(id: string, updates: any): Promise<boolean>;
  async update(updates: any): Promise<boolean>;
  async update(arg1: any, arg2?: any): Promise<boolean> {
    if (!this.dbPath || !this.currentTable) {
      throw new Error('No table selected');
    }

    try {
      const tablePath = path.join(this.dbPath, `${this.currentTable}.nosql`);
      const tableFile = File.fromPath(tablePath);

      const content = await tableFile.readText();
      const tableData = JSON.parse(content);

      // Verificar firma (pero no fallar)
      if (!this.verifyTableSignature(tableData.header)) {
        console.warn('Table signature mismatch, but continuing operation');
      }

      let updated = false;

      if (typeof arg1 === 'string') {
        // Update por ID
        const updateId = arg1;
        const updateData = arg2;

        const index = tableData.data.findIndex((item) => item.id === updateId);
        if (index !== -1) {
          tableData.data[index] = {
            ...tableData.data[index],
            ...updateData,
            updatedAt: new Date().toISOString(),
          };
          updated = true;
        }
      } else {
        // Update masivo
        const updateData = arg1;
        tableData.data = tableData.data.map((item) => ({
          ...item,
          ...updateData,
          updatedAt: new Date().toISOString(),
        }));
        updated = true;
      }

      if (updated) {
        // Reconstruir índices
        tableData.indexes = {};
        for (const indexName of tableData.header.indexes) {
          tableData.indexes[indexName] = {};
          for (const item of tableData.data) {
            for (const field in item) {
              if (item.hasOwnProperty(field)) {
                if (!tableData.indexes[indexName][item[field]]) {
                  tableData.indexes[indexName][item[field]] = [];
                }
                tableData.indexes[indexName][item[field]].push(item.id);
              }
            }
          }
        }

        // Actualizar timestamp y firma
        tableData.header.lastModified = new Date().toISOString();
        tableData.header.signature = this.generateTableSignature(tableData.header);

        await tableFile.writeText(JSON.stringify(tableData, null, 2));
      }

      return updated;
    } catch (error) {
      console.error('Error updating data:', error);
      return false;
    }
  }

  // ELIMINAR DATOS
  async delete(id?: string): Promise<boolean> {
    if (!this.dbPath || !this.currentTable) {
      throw new Error('No table selected');
    }

    try {
      const tablePath = path.join(this.dbPath, `${this.currentTable}.nosql`);
      const tableFile = File.fromPath(tablePath);

      const content = await tableFile.readText();
      const tableData = JSON.parse(content);

      // Verificar firma (pero no fallar)
      if (!this.verifyTableSignature(tableData.header)) {
        console.warn('Table signature mismatch, but continuing operation');
      }

      let deleted = false;

      if (id) {
        // Eliminar por ID
        const index = tableData.data.findIndex((item) => item.id === id);
        if (index !== -1) {
          tableData.data.splice(index, 1);
          deleted = true;
        }
      } else {
        // Eliminar todos
        tableData.data = [];
        deleted = true;
      }

      if (deleted) {
        // Reconstruir índices
        tableData.indexes = {};
        for (const indexName of tableData.header.indexes) {
          tableData.indexes[indexName] = {};
          for (const item of tableData.data) {
            for (const field in item) {
              if (item.hasOwnProperty(field)) {
                if (!tableData.indexes[indexName][item[field]]) {
                  tableData.indexes[indexName][item[field]] = [];
                }
                tableData.indexes[indexName][item[field]].push(item.id);
              }
            }
          }
        }

        // Actualizar timestamp y firma
        tableData.header.lastModified = new Date().toISOString();
        tableData.header.signature = this.generateTableSignature(tableData.header);

        await tableFile.writeText(JSON.stringify(tableData, null, 2));
      }

      return deleted;
    } catch (error) {
      console.error('Error deleting data:', error);
      return false;
    }
  }

  // FILTRAR DATOS
  async filter(criteria: any, options?: QueryOptions): Promise<any[]> {
    if (!this.dbPath || !this.currentTable) {
      throw new Error('No table selected');
    }

    try {
      const tablePath = path.join(this.dbPath, `${this.currentTable}.nosql`);
      const tableFile = File.fromPath(tablePath);

      const content = await tableFile.readText();
      const tableData = JSON.parse(content);

      // Verificar firma (pero no fallar)
      if (!this.verifyTableSignature(tableData.header)) {
        console.warn('Table signature mismatch, but continuing operation');
      }

      let results = tableData.data.filter((item) => {
        for (const key in criteria) {
          if (criteria.hasOwnProperty(key)) {
            if (item[key] !== criteria[key]) {
              return false;
            }
          }
        }
        return true;
      });

      // Aplicar opciones
      if (options) {
        if (options.orderBy) {
          results.sort((a, b) => {
            const aVal = a[options.orderBy];
            const bVal = b[options.orderBy];
            if (options.order === 'desc') {
              return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
            }
            return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
          });
        }

        if (options.offset) {
          results = results.slice(options.offset);
        }

        if (options.limit) {
          results = results.slice(0, options.limit);
        }
      }

      return results;
    } catch (error) {
      console.error('Error filtering data:', error);
      return [];
    }
  }

  // OBTENER POR ID
  async get(id: string): Promise<any> {
    if (!this.dbPath || !this.currentTable) {
      throw new Error('No table selected');
    }

    try {
      const tablePath = path.join(this.dbPath, `${this.currentTable}.nosql`);
      const tableFile = File.fromPath(tablePath);

      const content = await tableFile.readText();
      const tableData = JSON.parse(content);

      // Verificar firma (pero no fallar)
      if (!this.verifyTableSignature(tableData.header)) {
        console.warn('Table signature mismatch, but continuing operation');
      }

      return tableData.data.find((item) => item.id === id) || null;
    } catch (error) {
      console.error('Error getting data:', error);
      return null;
    }
  }

  // OBTENER MÚLTIPLES POR ID
  async getAll(ids: string[]): Promise<any[]> {
    if (!this.dbPath || !this.currentTable) {
      throw new Error('No table selected');
    }

    try {
      const tablePath = path.join(this.dbPath, `${this.currentTable}.nosql`);
      const tableFile = File.fromPath(tablePath);

      const content = await tableFile.readText();
      const tableData = JSON.parse(content);

      // Verificar firma (pero no fallar)
      if (!this.verifyTableSignature(tableData.header)) {
        console.warn('Table signature mismatch, but continuing operation');
      }

      return tableData.data.filter((item) => ids.includes(item.id));
    } catch (error) {
      console.error('Error getting multiple data:', error);
      return [];
    }
  }

  // OBTENER TODOS LOS DATOS
  async getAllData(): Promise<any[]> {
    if (!this.dbPath || !this.currentTable) {
      throw new Error('No table selected');
    }

    try {
      const tablePath = path.join(this.dbPath, `${this.currentTable}.nosql`);
      const tableFile = File.fromPath(tablePath);

      const content = await tableFile.readText();
      const tableData = JSON.parse(content);

      // Verificar firma (pero no fallar)
      if (!this.verifyTableSignature(tableData.header)) {
        console.warn('Table signature mismatch, but continuing operation');
      }

      return tableData.data;
    } catch (error) {
      console.error('Error getting all data:', error);
      return [];
    }
  }

  // Generar UUID simple
  private generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
