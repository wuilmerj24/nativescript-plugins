[![npm version](https://img.shields.io/npm/v/@wuilmerj24/nosql.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@wuilmerj24/nosql)
[![npm downloads](https://img.shields.io/npm/dm/@wuilmerj24/nosql.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@wuilmerj24/nosql)
[![NativeScript compatibility](https://img.shields.io/badge/NativeScript-6%2B-blue.svg?style=for-the-badge&logo=nativescript)](https://nativescript.org)
[![Android Support](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white&labelColor=388E3C)](https://developer.android.com)
[![iOS Support](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=apple&logoColor=white&labelColor=111111)](https://developer.apple.com/ios/)

# @wuilmerj24/nosql

A lightweight NoSQL database engine for NativeScript applications, built with TypeScript. Provides simple document storage with file-based persistence.

## Features
- Create and drop databases
- Create and drop tables
- Insert, update, replace, delete, and query documents
- Create, list, drop, rename, and check indices
- Primary key support
- Basic corruption handling
- Lightweight and fully written in TypeScript
- Works with NativeScript File and Folder APIs

## Installation

```bash
npm install @wuilmerj24/nosql
```

## API Documentation

### Database Methods
| Method | Description | 
|--------|-------------|
| `db(name)` | Access existing database |
| `dbCreate(name)` | Create new database |
| `dbDrop(name)` | Delete database |
| `dbList()` | List all databases |


### Table Methods
| Method | Description |
|--------|-------------|
| `table(name)` | Access existing table  |
| `tableCreate(name, options)`| Create new table  |
| `tableDrop(name)` | Delete table |
| `tableList()` | List all tables |

### Document Operations
| Method | Description |
|--------|-------------|
|`insert(docs)` | Add documents|
|`update(filter, updateFn)` | Modify documents|
|`replace(filter, newDoc)` | Replace documents|
|`delete(filter)` | Remove documents |
|`get(id)` | Get by primary key |
|`filter(fn)` | Query with function |
|`all()` | Get all documents |


## Example
```typescript

export class DemoSharedNosql{
    private nosql:Nosql;
    private dbName:string=""
    private tableName:string=""
      this.nosql = new Nosql();
    console.log(`Controlador inicializado con DB: '${this.dbName}'`);
  }

  useDB(){
    try {
      Dialogs.prompt({
        title:"Use db",
        message:"",
        okButtonText:"Ok",
        neutralButtonText:"Cancel",
      }).then((result)=>{
        if (result.result){
          this.dbName=result.text;
        }
      })
    } catch (error) {
      
    }
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
        if(result.result){
          this.dbName = result.text;

          // Crea la DB solo si no existe
          if (!this.nosql.dbList().includes(this.dbName)) {
            this.nosql.dbCreate(this.dbName);
            console.log(`Base de datos '${this.dbName}' creada.`);
          } else {
            console.log(`Base de datos '${this.dbName}' ya existe.`);
          }
        }
      })
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
      }).then((result)=>{
        if(result.result){
          this.tableName = result.text;
          const db = this.nosql.db(this.dbName);
          db.tableCreate(this.tableName, { primary_key_name: "id" });
          console.log("Tablas en", this.dbName, ":", db.tableList());
          this.nosql.db(this.dbName).table(this.tableName).indexCreate('byEdad', 'edad');
          let indexs = this.nosql.db(this.dbName).table(this.tableName).indexList();
          console.log("indexs ", indexs);
          this.nosql.db(this.dbName).table(this.tableName).indexDrop('byEdad');
          indexs = this.nosql.db(this.dbName).table(this.tableName).indexList();
          console.log("indexs ", indexs);
        }
      })
      
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
          name: `name${i}`,
          edad: i,
        });
      }

      table.insert(data); // Inserción masiva
      console.log("Inserción completada.");
    } catch (error) {
      console.log(error);
    }
  }


  getUser() {
    try {
      if(this.tableName.length>0){
        const usuarios = this.nosql.db(this.dbName).table(this.tableName).all();
        console.log("Total :", this.tableName, usuarios.length);
        usuarios.forEach((u, i) => console.log(`${i} | data:`, u));
        const usuario=this.nosql.db(this.dbName).table(this.tableName).findByIndex("byEdad",36);        
        console.log("usuario filter ",usuario);
      }
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
      const tabla: string = this.tableName
      this.nosql.db(this.dbName).tableDrop(tabla);
      console.log(`Tabla ${tabla} eliminada.`);
    } catch (error) {
      console.log(error);
    }
  }

  actualizar(){
    try {
      this.nosql.db(this.dbName).table(this.tableName).update(d=>d.edad === 36,{name:"Wj24  actualizado"});
      const usuario = this.nosql.db(this.dbName).table(this.tableName).findByIndex("byEdad", 36);
      console.log("usuario filter update", usuario);
    } catch (error) {
      console.log(error)
    }
  }
  
  actualizarTodo(){
    try {
      this.nosql.db(this.dbName).table(this.tableName).update(
        () => true, // condición: todos
        doc => ({ ...doc, edad: doc.edad + 1 })
      );

    } catch (error) {
      console.log(error)
    }
  }
  
  eliminarItem(){
    try {
      this.nosql.db(this.dbName).table(this.tableName).delete(d=>d.edad === 40);
      const usuario = this.nosql.db(this.dbName).table(this.tableName).findByIndex("byEdad", 40);
      console.log("usuario filter update", usuario);
    } catch (error) {
      console.log(error)
    }
  }
  
  eliminarTodo(){
    try {
      this.nosql.db(this.dbName).table(this.tableName).delete(()=>true);
      const usuario = this.nosql.db(this.dbName).table(this.tableName).findByIndex("byEdad", 40);
      console.log("usuario filter update", usuario);
    } catch (error) {
      console.log(error)
    }
  }
  
  replace(){
    try {
     
      this.nosql.db(this.dbName).table(this.tableName).replace(
        () => true,
        { name: "Desconocido", edad: 0 }
      );

    } catch (error) {
      console.log(error)
    }
  }
}

```

License

Apache License Version 2.0