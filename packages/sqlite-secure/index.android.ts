import { Application } from '@nativescript/core';
import { SQLCipherRow, SQLCipherTransaction } from '.';
import { SqliteSecureCommon } from './common';

java.lang.System.loadLibrary('sqlcipher');

export class SqliteSecure extends SqliteSecureCommon {
  private db: net.zetetic.database.sqlcipher.SQLiteDatabase | null = null;

  async open(): Promise<void> {
    if (this.isOpen) return;

    const context = Application.android.foregroundActivity;
    if (!context) {
      throw new Error('[SQLCipher] Android context not available');
    }

    try {
      const path = context.getDatabasePath(this.options.name);

      this.db = net.zetetic.database.sqlcipher.SQLiteDatabase.openOrCreateDatabase(
        path.getAbsolutePath(),
        this.options.password,
        undefined as any,
        new net.zetetic.database.DatabaseErrorHandler({
          onCorruption: (_db, err) => {
            console.log(err.getMessage());
          },
        })
      );

      this.execPragmas();
      this.isOpen = true;
    } catch (error) {
      this.db = null;
      throw new Error(`[SQLCipher][open] ${error}`);
    }
  }

  async close(): Promise<void> {
    if (!this.db) return;

    try {
      this.db.close();
    } finally {
      this.db = null;
      this.isOpen = false;
    }
  }

  async run(sql: string, params?: any[]): Promise<void> {
    this.assertOpen();

    const normalized = sql.trim().toUpperCase();
    if (normalized.startsWith('SELECT')) {
      throw new Error('[SQLCipher][run] SELECT queries must use all()');
    }

    try {
      const stmt = this.db!.compileStatement(sql);
      this.bindParams(stmt, params ?? []);
      stmt.execute();
      stmt.close();
    } catch (e) {
      throw new Error(`[SQLCipher][run] ${e}`);
    }
  }

  async all<T = SQLCipherRow>(sql: string, params?: any[]): Promise<T[]> {
    this.assertOpen();

    const results: T[] = [];

    let cursor: android.database.Cursor | null = null;

    try {
      cursor = this.db!.rawQuery(sql, this.toStringArray(params));

      const columnCount = cursor.getColumnCount();

      while (cursor.moveToNext()) {
        const row: any = {};
        for (let i = 0; i < columnCount; i++) {
          const col = cursor.getColumnName(i);
          switch (cursor.getType(i)) {
            case android.database.Cursor.FIELD_TYPE_INTEGER:
              row[col] = cursor.getLong(i);
              break;
            case android.database.Cursor.FIELD_TYPE_FLOAT:
              row[col] = cursor.getDouble(i);
              break;
            case android.database.Cursor.FIELD_TYPE_STRING:
              row[col] = cursor.getString(i);
              break;
            case android.database.Cursor.FIELD_TYPE_NULL:
              row[col] = null;
              break;
            default:
              row[col] = cursor.getString(i);
          }
        }
        results.push(row);
      }
    } catch (e) {
      throw new Error(`[SQLCipher][all] ${e}`);
    } finally {
      cursor?.close();
    }

    return results;
  }

  async transaction(callback: (tx: SQLCipherTransaction) => Promise<void>): Promise<void> {
    this.assertOpen();

    this.db!.beginTransaction();
    try {
      await callback({
        run: (sql, params) => this.run(sql, params),
        all: (sql, params) => this.all(sql, params),
      });
      this.db!.setTransactionSuccessful();
    } catch (e) {
      throw e;
    } finally {
      this.db!.endTransaction();
    }
  }

  async changePassword(newPassword: string): Promise<void> {
    this.assertOpen();

    let cursor: android.database.Cursor | null = null;

    try {
      cursor = this.db!.rawQuery(`PRAGMA rekey = '${newPassword}'`, null);
      this.options.password = newPassword;
    } catch (e) {
      throw new Error(`[SQLCipher][rekey] ${e}`);
    } finally {
      cursor?.close();
    }
  }

  // ============================
  // INTERNAL HELPERS
  // ============================

  private execPragmas() {
    let cursor: android.database.Cursor | null = null;

    try {
      // 🔐 Seguridad SQLCipher
      cursor = this.db!.rawQuery('PRAGMA cipher_memory_security = ON', null);
      cursor.close();

      cursor = this.db!.rawQuery('PRAGMA foreign_keys = ON', null);
      cursor.close();

      cursor = this.db!.rawQuery('PRAGMA secure_delete = ON', null);
      cursor.close();

      // ⚡ Performance
      if (this.options.enableWAL !== false) {
        cursor = this.db!.rawQuery('PRAGMA journal_mode = WAL', null);
        cursor.close();

        this.db!.execSQL('PRAGMA synchronous = NORMAL');
      }
    } finally {
      cursor?.close();
    }
  }

  private bindParams(stmt: net.zetetic.database.sqlcipher.SQLiteStatement, params: any[]) {
    params.forEach((value, index) => {
      const i = index + 1;
      if (value === null || value === undefined) {
        stmt.bindNull(i);
      } else if (typeof value === 'number') {
        stmt.bindDouble(i, value);
      } else {
        stmt.bindString(i, String(value));
      }
    });
  }

  private toStringArray(params?: any[]): string[] | null {
    if (!params || params.length === 0) {
      return null;
    }

    return params.map((p) => (p === null || p === undefined ? null : String(p))) as any;
  }
}
