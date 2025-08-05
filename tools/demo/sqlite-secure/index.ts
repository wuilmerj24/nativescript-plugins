import { DemoSharedBase } from '../utils';
import { SqliteSecure } from '@wuilmerj24/sqlite-secure';

export class DemoSharedSqliteSecure extends DemoSharedBase {
  sqlite: SqliteSecure = new SqliteSecure('dbname.db', '', 100);
  constructor(

  ) {
    super();
    this.create();
  }
  create() {
    let resCreate = this.sqlite.createDb();
    console.log(resCreate);
  }

  open() {
    let resOPen = this.sqlite.openDb();
    console.log(resOPen);
  }

  isopen() {
    alert(this.sqlite.isOpen());
  }

  deletedb() {
    alert(this.sqlite.deleteDb('dbname.db'));
  }

  changeVersion() {
    this.sqlite.setVersion(2000);
    alert(this.sqlite.getVersion());
  }

  async createTable() {
    const query = `CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,age INTEGER)`;
    let res = this.sqlite.execute(query);
    console.log(await res)
  }

  async innsertData() {
    const query = `INSERT INTO users (name,age) VALUES(?,?)`;
    const res = await this.sqlite.execute(query, ['JOSE', 225]);
    console.log('res insert ', res);
  }

  async selectData() {
    const query = `SELECT * FROM users`;
    // const query = `SELECT COUNT(*) FROM users`;
    const result = await this.sqlite.select(query);
    console.log(result);
  }

  async selectBy() {
    const query = `SELECT * FROM users WHERE id=?`;
    const result = await this.sqlite.select(query, [1]);
    console.log(result);
  }

  async deleteT() {
    const query = `DROP TABLE IF EXISTS users`;
    const result = await this.sqlite.execute(query);
    console.log(result);
  }

  async deleteD() {
    const query = `DELETE FROM users`;
    const result = await this.sqlite.execute(query);
    console.log(result);
  }

  async deleteDone() {
    const query = `DELETE FROM users WHERE id=?`;
    const result = await this.sqlite.execute(query, [1]);
    console.log(result);
  }

  async updateAll() {
    const query = `UPDATE users SET age =?`;
    const result = await this.sqlite.execute(query, [15]);
    console.log(result);
  }

  async update() {
    const query = `UPDATE users SET name =? WHERE id = ?`;
    const result = await this.sqlite.execute(query, ['wuilmer', 4]);
    console.log(result);
  }

  async close() {
    const result = this.sqlite.close();
    console.log(result);
  }
}