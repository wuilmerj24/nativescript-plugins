import { DemoSharedBase } from '../utils';
import { Nosql } from '@wuilmerj24/nosql';

export class DemoSharedNosql extends DemoSharedBase {
  private nosql: Nosql;
  private currentTable: string;
  constructor(private dbName: string, private tablesNames: string[]) {
    super();
    console.log(`Controlador inicializado con DB: '${this.dbName}'`);
  }

  async runFullTest() {
    const db = new Nosql();
    const DB_NAME = 'test_db_nosql';
    const TABLE = 'usuarios';

    /* ===========================
           CLEAN START
        =========================== */

    await db.dropDb(DB_NAME);

    console.log('==============================');
    console.log('INICIANDO PRUEBA COMPLETA');
    console.log('==============================');

    /* ===========================
           DB + BASE STRUCTURE
        =========================== */

    await db.createDb(DB_NAME, 1);
    await db.useDb(DB_NAME);

    // Tabla base ANTES de migraciones
    await db.createTable(TABLE);

    // Schema inicial (v1)
    await db.defineTableSchema(TABLE, {
      nombre: 'string',
      edad: 'number',
      activo: 'boolean',
    });

    /* ===========================
           MIGRATIONS
        =========================== */

    const migrations = {
      2: async (db: Nosql) => {
        console.log('[MIGRATION v2]');

        // Nueva tabla
        await db.createTableIfNotExists('roles');

        // Campo nuevo en usuarios
        await db.addFieldToTable('usuarios', 'role', 'user');

        // Actualización de esquema
        await db.defineTableSchema('usuarios', {
          nombre: 'string',
          edad: 'number',
          activo: 'boolean',
          role: 'string',
        });
      },

      3: async (db: Nosql) => {
        console.log('[MIGRATION v3]');
        await db.createTableIfNotExists('logs');
      },
    };

    // Ejecuta migraciones con snapshot + rollback
    await db.useDb(DB_NAME, migrations, 3);

    console.log('DB version:', db.getDbVersion());

    /* ===========================
           CRUD + VALIDATION TESTS
        =========================== */

    await db.table(TABLE);

    const id = await db.insert({
      nombre: 'Juan',
      edad: 25,
      activo: true,
    });

    const row = await db.get(id);

    console.log('Row:', row);
    console.log('role migrado:', row.role === 'user');
    console.log('schema OK:', typeof row.role === 'string');

    /* ===========================
           VERSION ASSERT
        =========================== */

    db.assertDbVersion(3);
    console.log('Version OK');

    /* ===========================
           CLEANUP
        =========================== */

    await db.dropDb(DB_NAME);

    console.log('==============================');
    console.log('PRUEBA FINALIZADA OK');
    console.log('==============================');
  }
}
