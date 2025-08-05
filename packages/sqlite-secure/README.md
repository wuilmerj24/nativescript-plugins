[![npm version](https://img.shields.io/npm/v/@wuilmerj24/sqlite-secure.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@wuilmerj24/sqlite-secure)
[![npm downloads](https://img.shields.io/npm/dm/@wuilmerj24/sqlite-secure.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@wuilmerj24/sqlite-secure)
[![NativeScript compatibility](https://img.shields.io/badge/NativeScript-6%2B-blue.svg?style=for-the-badge&logo=nativescript)](https://nativescript.org)
[![Android Support](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white&labelColor=388E3C)](https://developer.android.com)
[![iOS Support](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=apple&logoColor=white&labelColor=111111)](https://developer.apple.com/ios/)

### This a library for nativescript, compatible whit Android and iOS that provides transparent 256-bit AES encryption for SQLite database files. It ensures that data stored in the database is secure and protected from unauthorized access.

# @wuilmerj24/sqlite-secure

```javascript
npm install @wuilmerj24/sqlite-secure
```

## Usage
| Method | Params | Description |
| ------ | ------ | ----------- |
| createDb():SqliteSecure | ```null``` | Initializes the creation of a new database. |
| deleteDb(dbname:string) | ```dbname:string``` | Deletes the specified database. Returns true if the database was successfully deleted, otherwise returns false |
| openDb(): any | ```null``` | For open database connection | 
| isOpen(): boolean | ```null``` | Check state connection.|
| setVersion(version: number) | ```version:number``` | Change the version of db. |
| getVersion():number | ```null``` | Get the current version of db |
| execute(query: string, args?: any[]): any | ```query:string,args?: any[]``` | Executes a SQL query on the database. This method is used for running queries that modify data or schema, such as ```INSERT```, ```UPDATE```, or ```DELETE```
| select(query, args?: any[]):any | ```query, args?: any[]``` | Executes a SQL ```SELECT``` query on the database and returns the results. This method is used for retrieving data from the database based on the specified query. |
| close():boolean | ```null``` | To close de connection db |

### Examples

```ts
import { SqliteSecure } from '@wuilmerj24/sqlite-secure';
//Use
const sqlite: SqliteSecure = new SqliteSecure('dbname.db', 'password', 100);

//create db
sqlite.createDb();

// If need
sqlite.openDb();

// check connection to db is open
sqlite.isOpen();

// delete db
const delete_res = sqlite.deleteDb('dbname.db'); //return a boolean

// change db version
sqlite.setVersion(2000);

// get current db version
const version=sqlite.getVersion() // return number

// execute sql
const query = `CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,age INTEGER)`;
sqlite.execute(query);

// insert 
const query = `INSERT INTO users (name,age) VALUES(?,?)`;
const res =await sqlite.execute(query, ['name', 25]);

// select
const query = `SELECT * FROM users`;
const result = await sqlite.select(query);

//select whit params 
const query = `SELECT * FROM users WHERE id=?`;
const result = await sqlite.select(query, [1]);

// execute sql
const query = `DROP TABLE IF EXISTS users`;
const result = await sqlite.execute(query);

// execute sql 
const query = `DELETE FROM users`;
const result = await sqlite.execute(query);

// execute sql
const query = `DELETE FROM users WHERE id=?`;
const result = await sqlite.execute(query, [1]);

// execute sql
const query = `UPDATE users SET age =?`;
const result = await sqlite.execute(query, [15]);

// execute sql 
const query = `UPDATE users SET name =? WHERE id = ?`;
const result = await sqlite.execute(query, ['name', 4]);

// close 
const result = sqlite.close() return a boolean;
```

## License

Apache License Version 2.0
