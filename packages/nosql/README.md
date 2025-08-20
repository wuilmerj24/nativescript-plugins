[![npm version](https://img.shields.io/npm/v/@wuilmerj24/nosql.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@wuilmerj24/nosql)
[![npm downloads](https://img.shields.io/npm/dm/@wuilmerj24/nosql.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@wuilmerj24/nosql)
[![NativeScript compatibility](https://img.shields.io/badge/NativeScript-6%2B-blue.svg?style=for-the-badge&logo=nativescript)](https://nativescript.org)
[![Android Support](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white&labelColor=388E3C)](https://developer.android.com)
[![iOS Support](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=apple&logoColor=white&labelColor=111111)](https://developer.apple.com/ios/)

# @wuilmerj24/nosql
This module implements a **NoSQL database system based on JSON files** using the **NativeScript** file system. It allows you to create databases, tables, indexes, and perform CRUD (Create, Read, Update, Delete) operations without relying on external libraries.


## Installation

```bash
npm install @wuilmerj24/nosql
```
---

## 🚀 Características

- 📁 Databases as folders in `documents/`.
- 📄 Tables as `.nosql` files in JSON format.
- ✅ Validation through **signatures (hashes)** to detect corruption.
- 🔎 Support for **simple indexes** on specific fields.
- ✍️ CRUD operations: insert, update, delete, and query data.
- 🔄 Listing and management of **databases** and **tables**.
- 🔑 Unique IDs generated with UUID.
- ⚡ Query options: `limit`, `offset`, `orderBy`, `order`.
- ⚡ Query options: `limit`, `offset`, `orderBy`, `order`.

📚 API

| Method                         | Description                                                     | Exampl                                       |
| ------------------------------ | --------------------------------------------------------------- | --------------------------------------------- |
| `dbList()`                     | Lists all valid databases.                         | `db.dbList()`                           |
| `createDb(dbName,version?)` | Creates a new database, and an optional version can be provided. | `db.createDb("myDb",version?)` |
| `setDbVersion(version)` | Set version. | `db.setDbVersion("1.2.3")` |
| `getDbVersion()` | Get version. | `db.getDbVersion()` |
| `useDb(dbName)` | Select an existing database. | `db.useDb("myDb")` |
| `dropDb(dbName)` | Deletes an entire database. | `db.dropDb("myDb")` |
| `createTable(tableName)` | Crea una nueva tabla. | `db.createTable("users")` |
| `table(tableName)` | Select a table to operate on. | `db.table("users")` |
| `tableDrop(tableName)` | Deletes a specific table. | `db.tableDrop("users")` |
| `tableList()` | Lists all tables in the database. | `db.tableList()` |
| `tableIndex(indexName, field)` | Creates an index on a field. | `db.tableIndex("ageIndex", "age")` |
| `insert(data)` | Inserts a document into the current table. | `db.insert({name: "Alice", age: 25})` |
| `update(id, updates)` | Updates a document by ID. | `db.update(id, {age: 26})` |
| `update(updates)` | Updates all documents with the new fields. | `db.update({active: true})` |
| `delete(id)` | Deletes a document by ID. | `db.delete(id)` |
| `delete()` | Deletes all documents in the table. | `db.delete()` |
| `filter(criteria, options)` | Filters documents by criteria and options (pagination, ordering). | `db.filter({age:25}, {orderBy:"name"})` |
| `get(id)` | Retrieves a document by its ID. | `db.get(id)` |
| `getAll(ids)` | Retrieves multiple documents by their IDs. | `db.getAll([id1, id2])` |
| `getAllData()` | Retrieves all documents in the table. | `db.getAllData()` |
---

### interface 
```typescript
export interface DatabaseConfig {
	name: string;
	version: string;
	createdAt: string;
	signature: string;
	lastMigration?: string,
}
```

### ⚠️ Limitations
- Does not support complex queries (joins, aggregations).
- Indexes are simple (equality-based).
- Not optimized for large volumes of data.
---

### 🛠️ Future improvements
- Support for range queries in indexes.
- File compression and encryption.
- Synchronization with a remote backend.
- Transactions and concurrency control.
---

License

Apache License Version 2.0