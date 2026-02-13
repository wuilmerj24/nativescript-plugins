import { DemoSharedBase } from '../utils';
import { SqliteSecure } from '@wuilmerj24/sqlite-secure';

export class DemoSharedSqliteSecure extends DemoSharedBase {
  db: SqliteSecure;
  constructor() {
    super();

    this.db = new SqliteSecure({
      name: 'secure_test.db',
      password: 'new_secret_456',
      enableWAL: true,
    });
  }
  async testIt() {
    console.log('test sqlite-secure!');

    try {
      console.log('🔐 Opening database...');
      await this.db.open();

      console.log('📦 Creating table...');
      await this.db.run(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                email TEXT
            )
        `);

      console.log('✍️ Inserting data...');
      await this.db.run(`INSERT INTO users (name, email) VALUES (?, ?)`, ['Wuilmer', 'wuilmer@test.com']);

      console.log('🔁 Transaction test...');
      await this.db.transaction(async (tx) => {
        await tx.run(`INSERT INTO users (name, email) VALUES (?, ?)`, ['Alice', 'alice@test.com']);
        await tx.run(`INSERT INTO users (name, email) VALUES (?, ?)`, ['Bob', 'bob@test.com']);
      });

      console.log('📤 Querying data...');
      const users = await this.db.all<{ id: number; name: string; email: string }>(`SELECT * FROM users`);

      console.log('✅ Users:', JSON.stringify(users, null, 2));

      console.log('🔑 Changing password...');
      await this.db.changePassword('new_secret_456');

      console.log('🔒 Closing database...');
      await this.db.close();

      console.log('🎉 SQLCipher test completed successfully');
    } catch (e) {
      console.error('❌ SQLCipher test failed:', e);
    }
  }
}
