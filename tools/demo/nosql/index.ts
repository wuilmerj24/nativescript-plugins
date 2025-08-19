import { DemoSharedBase } from '../utils';
import { Folder, knownFolders, path as nsPath, File, Dialogs } from '@nativescript/core';
import { Nosql } from '@wuilmerj24/nosql';
import { check as checkPermission, request as requestPermission } from '@nativescript-community/perms';

export class DemoSharedNosql extends DemoSharedBase {
  private nosql: Nosql;
  private dbName: string = '';
  private tableName: string = '';
  constructor() {
    super();
    try {
      // const documentsFolder: Folder = knownFolders.documents();

      // // Obtener todas las entidades (archivos/carpetas) dentro de 'documents'
      // const entities: any= documentsFolder.getEntitiesSync();

      // entities.forEach((entity) => {
      //   if (entity instanceof Folder) {
      //     // Eliminar la carpeta y su contenido recursivamente
      //     entity.removeSync();
      //     console.log("Carpeta eliminada:", entity.name);
      //   }
      // });

      // console.log("¡Todas las carpetas de 'documents' han sido eliminadas!");

      requestPermission('android.Manifest.permission.READ_EXTERNAL_STORAGE')
        .then((response) => {
          console.log('READ_EXTERNAL_STORAGE  ', response);
          requestPermission('android.Manifest.permission.WRITE_EXTERNAL_STORAGE')
            .then((response) => {
              console.log('WRITE_EXTERNAL_STORAGE  ', response);
              requestPermission('android.Manifest.permission.READ_MEDIA_IMAGES')
                .then((response) => {
                  console.log('READ_MEDIA_IMAGES  ', response);
                  requestPermission('android.Manifest.permission.READ_MEDIA_VIDEO')
                    .then((response) => {
                      console.log('READ_MEDIA_VIDEO  ', response);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }

  init() {
    this.nosql = new Nosql();
    console.log(`Controlador inicializado con DB: '${this.dbName}'`);
  }

  useDB() {
    try {
      Dialogs.prompt({
        title: 'Use db',
        message: '',
        okButtonText: 'Ok',
        neutralButtonText: 'Cancel',
      }).then((result) => {
        if (result.result) {
          this.dbName = result.text;
        }
      });
    } catch (error) {}
  }

  crearBD() {
    try {
      Dialogs.prompt({
        title: 'DBNAME',
        message: '',
        okButtonText: 'OK',
        neutralButtonText: 'Cancel',
      }).then((result) => {
        console.log(result);
        if (result.result) {
          this.dbName = result.text;

          // Crea la DB solo si no existe
          if (!this.nosql.dbList().includes(this.dbName)) {
            this.nosql.dbCreate(this.dbName);
            console.log(`Base de datos '${this.dbName}' creada.`);
          } else {
            console.log(`Base de datos '${this.dbName}' ya existe.`);
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  crearTabla() {
    try {
      Dialogs.prompt({
        title: 'DBNAME',
        message: '',
        okButtonText: 'OK',
        neutralButtonText: 'Cancel',
      }).then((result) => {
        if (result.result) {
          this.tableName = result.text;
          const db = this.nosql.db(this.dbName);
          db.tableCreate(this.tableName, { primary_key_name: 'id' });
          console.log('Tablas en', this.dbName, ':', db.tableList());
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  async insertar() {
    try {
      const db = this.nosql.db(this.dbName);
      const table = db.table(this.tableName);

      const data: any[] = [];
      for (let i = 0; i < 100; i++) {
        data.push({
          name: `wuilmerj2${i}`,
          edad: i,
        });
      }

      const restInsert = await table.insert(data); // Inserción masiva
      console.log('Inserción completada. ', restInsert);
    } catch (error) {
      console.log(error);
    }
  }

  getUser() {
    try {
      if (this.tableName.length > 0) {
        const usuarios = this.nosql.db(this.dbName).table(this.tableName).all();
        console.log('Total :', this.tableName, usuarios.length);
        usuarios.forEach((u, i) => console.log(`${i} | data:`, u));
      }
    } catch (error) {
      console.log(error);
    }
  }

  getLength() {
    try {
      const usuarios = this.nosql.db(this.dbName).table(this.tableName).all();
      console.log('Total :', this.tableName, usuarios.length);
    } catch (error) {
      console.log(error);
    }
  }

  getItem() {
    try {
      this.nosql.db(this.dbName).table(this.tableName).indexCreate('byEdad', 'edad');
      let indexs = this.nosql.db(this.dbName).table(this.tableName).indexList();
      const usuario = this.nosql.db(this.dbName).table(this.tableName).findByIndex('byEdad', 36);
      console.log('usuario filter ', usuario);
    } catch (error) {
      console.log(error);
    }
  }

  dropDb() {
    try {
      this.nosql.dbDrop(this.dbName);
      console.log(`Base de datos '${this.dbName}' eliminada.`);
    } catch (error) {
      console.log(error);
    }
  }

  dropTabla() {
    try {
      const tabla: string = this.tableName;
      this.nosql.db(this.dbName).tableDrop(tabla);
      console.log(`Tabla ${tabla} eliminada.`);
    } catch (error) {
      console.log(error);
    }
  }

  actualizar() {
    try {
      this.nosql
        .db(this.dbName)
        .table(this.tableName)
        .update((d) => d.edad === 36, { name: 'Wj24  actualizado' });
      const usuario = this.nosql.db(this.dbName).table(this.tableName).findByIndex('byEdad', 36);
      console.log('usuario filter update', usuario);
    } catch (error) {
      console.log(error);
    }
  }

  actualizarTodo() {
    try {
      this.nosql
        .db(this.dbName)
        .table(this.tableName)
        .update(
          () => true, // condición: todos
          (doc) => ({ ...doc, edad: doc.edad + 1 })
        );
    } catch (error) {
      console.log(error);
    }
  }

  eliminarItem() {
    try {
      this.nosql
        .db(this.dbName)
        .table(this.tableName)
        .delete((d) => d.edad === 40);
      const usuario = this.nosql.db(this.dbName).table(this.tableName).findByIndex('byEdad', 40);
      console.log('usuario filter update', usuario);
    } catch (error) {
      console.log(error);
    }
  }

  eliminarTodo() {
    try {
      this.nosql
        .db(this.dbName)
        .table(this.tableName)
        .delete(() => true);
      const usuario = this.nosql.db(this.dbName).table(this.tableName).findByIndex('byEdad', 40);
      console.log('usuario filter update', usuario);
    } catch (error) {
      console.log(error);
    }
  }

  replace() {
    try {
      this.nosql
        .db(this.dbName)
        .table(this.tableName)
        .replace(() => true, { name: 'Desconocido', edad: 0 });
    } catch (error) {
      console.log(error);
    }
  }
}
