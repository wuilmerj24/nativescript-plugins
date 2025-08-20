import { DemoSharedBase } from '../utils';
import { Folder, knownFolders, path as nsPath, File, Dialogs } from '@nativescript/core';
import { Nosql } from '@wuilmerj24/nosql';
import { check as checkPermission, request as requestPermission } from '@nativescript-community/perms';

export class DemoSharedNosql extends DemoSharedBase {
  private nosql: Nosql;
  private currentTable: string;
  constructor(private dbName: string, private tablesNames: string[]) {
    super();
    this.nosql = new Nosql();
    console.log(`Controlador inicializado con DB: '${this.dbName}'`);
  }

  // 1. Inicializar base de datos
  async initializeDatabase(): Promise<boolean> {
    try {
      console.log('=== INICIALIZANDO BASE DE DATOS ===');

      await this.nosql.createDb(this.dbName);
      await this.nosql.useDb(this.dbName);
      let version = await this.nosql.getDbVersion();
      console.log('version ', version);
      await this.nosql.setDbVersion('2.0.1');
      version = await this.nosql.getDbVersion();
      console.log('version ', version);
      await this.createDefaultTables();

      console.log('✅ Base de datos lista');
      return true;
    } catch (error) {
      console.error('❌ Error inicializando base de datos:', error);
      return false;
    }
  }

  // 2. Crear tablas por defecto
  private async createDefaultTables(): Promise<void> {
    const defaultTables = ['usuarios', 'productos', 'pedidos', 'clientes'];

    for (const table of defaultTables) {
      try {
        await this.nosql.createTable(table);
        console.log(`✅ Tabla ${table} creada`);
      } catch (error) {
        console.log(`ℹ️ Tabla ${table} ya existe`);
      }
    }
  }

  // 3. Seleccionar tabla automáticamente
  private async autoSelectTable(): Promise<boolean> {
    try {
      const tables = await this.nosql.tableList();

      if (tables.length === 0) {
        console.log('⚠️ No hay tablas disponibles');
        return false;
      }

      // Seleccionar la primera tabla disponible
      this.currentTable = tables[0];
      await this.nosql.table(this.currentTable);
      console.log(`✅ Tabla seleccionada: ${this.currentTable}`);
      return true;
    } catch (error) {
      console.error('Error seleccionando tabla:', error);
      return false;
    }
  }

  // 4. Obtener IDs existentes dinámicamente
  private async getRandomItemId(): Promise<string | null> {
    try {
      const allData = await this.nosql.getAllData();

      if (allData.length === 0) {
        console.log('⚠️ No hay datos en la tabla');
        return null;
      }

      // Seleccionar un ID aleatorio
      const randomIndex = Math.floor(Math.random() * allData.length);
      return allData[randomIndex].id;
    } catch (error) {
      console.error('Error obteniendo ID:', error);
      return null;
    }
  }

  // 5. Obtener múltiples IDs
  private async getMultipleItemIds(count: number = 2): Promise<string[]> {
    try {
      const allData = await this.nosql.getAllData();

      if (allData.length === 0) {
        console.log('⚠️ No hay datos en la tabla');
        return [];
      }

      // Tomar hasta 'count' IDs disponibles
      return allData.slice(0, Math.min(count, allData.length)).map((item) => item.id);
    } catch (error) {
      console.error('Error obteniendo IDs:', error);
      return [];
    }
  }

  // 6. Insertar datos de ejemplo automáticamente
  async insertSampleData(): Promise<string[]> {
    try {
      if (!(await this.autoSelectTable())) {
        return [];
      }

      const sampleDataMap: { [key: string]: any[] } = {
        usuarios: [
          { nombre: 'Juan Pérez', email: 'juan@email.com', edad: 30, activo: true },
          { nombre: 'María García', email: 'maria@email.com', edad: 25, activo: true },
          { nombre: 'Carlos López', email: 'carlos@email.com', edad: 35, activo: false },
        ],
        productos: [
          { nombre: 'Laptop', precio: 999.99, categoria: 'tecnologia', stock: 15 },
          { nombre: 'Smartphone', precio: 499.99, categoria: 'tecnologia', stock: 30 },
          { nombre: 'Tablet', precio: 299.99, categoria: 'tecnologia', stock: 20 },
        ],
        pedidos: [
          { cliente: 'Cliente A', total: 150.5, estado: 'completado' },
          { cliente: 'Cliente B', total: 89.99, estado: 'pendiente' },
          { cliente: 'Cliente C', total: 245.75, estado: 'enviado' },
        ],
        clientes: [
          { nombre: 'Ana Rodriguez', telefono: '123-456-7890', ciudad: 'Madrid' },
          { nombre: 'Luis Martinez', telefono: '098-765-4321', ciudad: 'Barcelona' },
          { nombre: 'Elena Sanchez', telefono: '555-123-4567', ciudad: 'Valencia' },
        ],
      };

      const sampleData = sampleDataMap[this.currentTable] || [{ campo1: 'valor1', campo2: 'valor2', campo3: 100 }];

      const insertedIds: string[] = [];
      for (const data of sampleData) {
        const id = await this.nosql.insert(data);
        insertedIds.push(id);
        console.log(`✅ Insertado en ${this.currentTable} - ID: ${id}`);
      }

      return insertedIds;
    } catch (error) {
      console.error('Error insertando datos de ejemplo:', error);
      return [];
    }
  }

  // 7. Mostrar todos los datos de la tabla actual
  async showAllData(): Promise<void> {
    try {
      if (!(await this.autoSelectTable())) {
        return;
      }

      const allData = await this.nosql.getAllData();
      console.log(`\n=== DATOS EN ${this.currentTable.toUpperCase()} ===`);
      console.log(`Total registros: ${allData.length}`);

      if (allData.length > 0) {
        allData.forEach((item, index) => {
          console.log(`\nRegistro ${index + 1}:`);
          console.log(JSON.stringify(item, null, 2));
        });
      } else {
        console.log('ℹ️ La tabla está vacía');
      }
    } catch (error) {
      console.error('Error mostrando datos:', error);
    }
  }

  // 8. Obtener un registro aleatorio
  async getRandomRecord(): Promise<void> {
    try {
      if (!(await this.autoSelectTable())) {
        return;
      }

      const randomId = await this.getRandomItemId();
      if (!randomId) {
        console.log('⚠️ No hay registros para obtener');
        return;
      }

      const record = await this.nosql.get(randomId);
      console.log(`\n=== REGISTRO ALEATORIO EN ${this.currentTable.toUpperCase()} ===`);
      console.log(JSON.stringify(record, null, 2));
    } catch (error) {
      console.error('Error obteniendo registro aleatorio:', error);
    }
  }

  // 9. Actualizar un registro aleatorio
  async updateRandomRecord(): Promise<void> {
    try {
      if (!(await this.autoSelectTable())) {
        return;
      }

      const randomId = await this.getRandomItemId();
      if (!randomId) {
        console.log('⚠️ No hay registros para actualizar');
        return;
      }

      const updateFields: { [key: string]: any } = {
        usuarios: { ultimaActualizacion: new Date().toISOString(), puntos: Math.random() * 100 },
        productos: { ultimaActualizacion: new Date().toISOString(), precio: Math.random() * 1000 },
        pedidos: { ultimaActualizacion: new Date().toISOString(), estado: 'actualizado' },
        clientes: { ultimaActualizacion: new Date().toISOString(), categoria: 'VIP' },
      };

      const updates = updateFields[this.currentTable] || {
        ultimaActualizacion: new Date().toISOString(),
        campoActualizado: Math.random() * 100,
      };

      const updated = await this.nosql.update(randomId, updates);
      if (updated) {
        console.log(`✅ Registro ${randomId} actualizado en ${this.currentTable}`);

        // Mostrar el registro actualizado
        const updatedRecord = await this.nosql.get(randomId);
        console.log('Registro actualizado:');
        console.log(JSON.stringify(updatedRecord, null, 2));
      } else {
        console.log('❌ No se pudo actualizar el registro');
      }
    } catch (error) {
      console.error('Error actualizando registro:', error);
    }
  }

  // 10. Eliminar un registro aleatorio
  async deleteRandomRecord(): Promise<void> {
    try {
      if (!(await this.autoSelectTable())) {
        return;
      }

      const randomId = await this.getRandomItemId();
      if (!randomId) {
        console.log('⚠️ No hay registros para eliminar');
        return;
      }

      const deleted = await this.nosql.delete(randomId);
      if (deleted) {
        console.log(`✅ Registro ${randomId} eliminado de ${this.currentTable}`);
      } else {
        console.log('❌ No se pudo eliminar el registro');
      }
    } catch (error) {
      console.error('Error eliminando registro:', error);
    }
  }

  async deleteAllData(): Promise<void> {
    try {
      if (!(await this.autoSelectTable())) {
        return;
      }

      const randomId = await this.getRandomItemId();
      if (!randomId) {
        console.log('⚠️ No hay registros para eliminar');
        return;
      }

      const deleted = await this.nosql.delete();
      if (deleted) {
        console.log(`✅ Registro all eliminado de ${this.currentTable}`);
      } else {
        console.log('❌ No se pudo eliminar el registro');
      }
    } catch (error) {
      console.error('Error eliminando registro:', error);
    }
  }

  // 11. Filtrar datos automáticamente
  async filterDataAutomatically(): Promise<void> {
    try {
      if (!(await this.autoSelectTable())) {
        return;
      }

      const filterCriteria: { [key: string]: any } = {
        usuarios: { activo: true },
        productos: { stock: { $gt: 10 } },
        pedidos: { estado: 'completado' },
        clientes: { ciudad: 'Madrid' },
      };

      const criteria = filterCriteria[this.currentTable] || { campo1: 'valor1' };
      const filteredData = await this.nosql.filter(criteria);

      console.log(`\n=== DATOS FILTRADOS EN ${this.currentTable.toUpperCase()} ===`);
      console.log(`Criterio: ${JSON.stringify(criteria)}`);
      console.log(`Resultados: ${filteredData.length} registros`);

      if (filteredData.length > 0) {
        filteredData.forEach((item, index) => {
          console.log(`\nResultado ${index + 1}:`);
          console.log(JSON.stringify(item, null, 2));
        });
      } else {
        console.log('ℹ️ No se encontraron resultados');
      }
    } catch (error) {
      console.error('Error filtrando datos:', error);
    }
  }

  // 12. Crear índices automáticamente
  async createAutomaticIndexes(): Promise<void> {
    try {
      if (!(await this.autoSelectTable())) {
        return;
      }

      const indexFields: { [key: string]: string[] } = {
        usuarios: ['email', 'edad'],
        productos: ['categoria', 'precio'],
        pedidos: ['cliente', 'estado'],
        clientes: ['ciudad', 'telefono'],
      };

      const fields = indexFields[this.currentTable] || ['campo1', 'campo2'];

      for (const field of fields) {
        try {
          await this.nosql.tableIndex(`${field}_index`, field);
          console.log(`✅ Índice creado en campo: ${field}`);
        } catch (error) {
          console.log(`ℹ️ Índice en ${field} ya existe o no se pudo crear`);
        }
      }
    } catch (error) {
      console.error('Error creando índices:', error);
    }
  }

  // 13. Obtener múltiples registros
  async getMultipleRecords(): Promise<void> {
    try {
      if (!(await this.autoSelectTable())) {
        return;
      }

      const ids = await this.getMultipleItemIds(3);
      if (ids.length === 0) {
        console.log('⚠️ No hay suficientes registros');
        return;
      }

      const records = await this.nosql.getAll(ids);
      console.log(`\n=== MÚLTIPLES REGISTROS EN ${this.currentTable.toUpperCase()} ===`);
      console.log(`IDs consultados: ${ids.join(', ')}`);
      console.log(`Registros encontrados: ${records.length}`);

      records.forEach((record, index) => {
        console.log(`\nRegistro ${index + 1}:`);
        console.log(JSON.stringify(record, null, 2));
      });
    } catch (error) {
      console.error('Error obteniendo múltiples registros:', error);
    }
  }

  // 14. Ejecutar todas las operaciones automáticamente
  async runAutomaticDemo(): Promise<void> {
    try {
      console.log('=== DEMO AUTOMÁTICA INICIADA ===\n');

      // Inicializar
      await this.initializeDatabase();

      // Insertar datos de ejemplo
      console.log('\n1. Insertando datos de ejemplo...');
      await this.insertSampleData();

      const dbList = await this.nosql.dbList();
      console.log('dblist ', dbList);
      // Mostrar datos
      console.log('\n2. Mostrando todos los datos...');
      await this.showAllData();

      // Crear índices
      console.log('\n3. Creando índices...');
      await this.createAutomaticIndexes();

      // Obtener registro aleatorio
      console.log('\n4. Obteniendo registro aleatorio...');
      await this.getRandomRecord();

      // Filtrar datos
      console.log('\n5. Filtrando datos...');
      await this.filterDataAutomatically();

      // Obtener múltiples registros
      console.log('\n6. Obteniendo múltiples registros...');
      await this.getMultipleRecords();

      // Actualizar registro
      console.log('\n7. Actualizando registro aleatorio...');
      await this.updateRandomRecord();

      // Mostrar datos después de actualizar
      console.log('\n8. Mostrando datos después de actualizar...');
      await this.showAllData();

      // Eliminar registro (opcional, comentado para no perder datos)
      console.log('\n9. Eliminando registro aleatorio...');
      await this.deleteRandomRecord();
      await this.showAllData();

      // Eliminar all (opcional, comentado para no perder datos)
      console.log('\n9. Eliminando registros...');
      await this.deleteAllData();
      await this.showAllData();

      console.log('\n9. Table Drop...');
      await this.nosql.tableDrop(this.tablesNames[0]);
      await this.showAllData();

      console.log('\n9. DBB Drop...');
      await this.nosql.dropDb(this.dbName);

      console.log('\n9. DB list...');
      const dbbList = await this.nosql.dbList();
      console.log('dblist ', dbbList);

      console.log('\n=== DEMO AUTOMÁTICA COMPLETADA ===');
    } catch (error) {
      console.error('❌ Error en demo automática:', error);
    }
  }
}
