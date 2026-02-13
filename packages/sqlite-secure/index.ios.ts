import { SQLCipherRow, SQLCipherTransaction } from '.';
import { SqliteSecureCommon } from './common';
import { knownFolders, path } from '@nativescript/core';

export class SqliteSecure extends SqliteSecureCommon {
  private dbPtr: interop.Pointer | null = null;

  async open(): Promise<void> {
    if (this.isOpen) return;

    const documents = knownFolders.documents();
    const dbPath = path.join(documents.path, this.options.name);

    const dbPtrRef = new interop.Reference<interop.Pointer>();
    const flags = 0x00000004 | 0x00000002; // SQLITE_OPEN_CREATE | SQLITE_OPEN_READWRITE

    const rc = sqlite3_open_v2(dbPath, dbPtrRef, flags, null);
    if (rc !== 0) {
      throw new Error(`[SQLCipher][open] Cannot open database (code ${rc})`);
    }

    this.dbPtr = dbPtrRef.value;

    // Set encryption key
    this.executeSQL(`PRAGMA key = '${this.options.password}'`);

    this.execPragmas();
    this.isOpen = true;
  }

  async close(): Promise<void> {
    if (!this.dbPtr) return;
    sqlite3_close(this.dbPtr);
    this.dbPtr = null;
    this.isOpen = false;
  }

  async run(sql: string, params?: any[]): Promise<void> {
    this.assertOpen();
    if (sql.trim().toUpperCase().startsWith('SELECT')) {
      throw new Error('[SQLCipher][run] SELECT queries must use all()');
    }
    this.executeSQL(sql, params);
  }

  async all<T = SQLCipherRow>(sql: string, params?: any[]): Promise<T[]> {
    this.assertOpen();

    const results: T[] = [];

    const stmtPtrRef = new interop.Reference<interop.Pointer>();
    if (sqlite3_prepare_v2(this.dbPtr, sql, -1, stmtPtrRef, null) !== 0) {
      throw new Error(`[SQLCipher][all] Error preparing statement`);
    }
    const stmt = stmtPtrRef.value;

    // Bind parameters if needed (Te faltaba esto en la función all original)
    if (params) {
      for (let i = 0; i < params.length; i++) {
        const val = params[i];
        if (val === null || val === undefined) {
          sqlite3_bind_null(stmt, i + 1);
        } else if (typeof val === 'number') {
          sqlite3_bind_double(stmt, i + 1, val);
        } else {
          sqlite3_bind_text(stmt, i + 1, String(val), -1, null);
        }
      }
    }

    let rc = sqlite3_step(stmt);
    const columnCount = sqlite3_column_count(stmt);

    while (rc === 100) {
      // SQLITE_ROW
      const row: any = {};
      for (let i = 0; i < columnCount; i++) {
        // 1. CORRECCIÓN: Obtener el puntero del nombre y convertirlo a String JS
        const namePtr = sqlite3_column_name(stmt, i);
        const name = NSString.stringWithUTF8String(namePtr).toString();

        const type = sqlite3_column_type(stmt, i);

        switch (type) {
          case 1: // SQLITE_INTEGER
            row[name] = sqlite3_column_int64(stmt, i);
            break;
          case 2: // SQLITE_FLOAT
            row[name] = sqlite3_column_double(stmt, i);
            break;
          case 3: // SQLITE_TEXT
            // 2. CORRECCIÓN: Usar column_text y convertir puntero a String
            const textPtr = sqlite3_column_text(stmt, i);
            if (textPtr) {
              row[name] = NSString.stringWithUTF8String(textPtr).toString();
            } else {
              row[name] = null;
            }
            break;
          case 4: // SQLITE_BLOB
            // Nota: Los blobs a veces requieren manejo especial de punteros/tamaño
            const blobPtr = sqlite3_column_blob(stmt, i);
            const size = sqlite3_column_bytes(stmt, i);
            // Aquí podrías necesitar interop.bufferFromData si quieres un ArrayBuffer
            row[name] = blobPtr;
            break;
          case 5: // SQLITE_NULL
            row[name] = null;
            break;
          default:
            // Fallback a texto
            const defPtr = sqlite3_column_text(stmt, i);
            row[name] = defPtr ? NSString.stringWithUTF8String(defPtr).toString() : null;
        }
      }
      results.push(row);
      rc = sqlite3_step(stmt);
    }

    sqlite3_finalize(stmt);
    return results;
  }

  async transaction(callback: (tx: SQLCipherTransaction) => Promise<void>): Promise<void> {
    this.assertOpen();
    this.executeSQL('BEGIN TRANSACTION');
    try {
      await callback({
        run: (sql, params) => this.run(sql, params),
        all: (sql, params) => this.all(sql, params),
      });
      this.executeSQL('COMMIT');
    } catch (e) {
      this.executeSQL('ROLLBACK');
      throw e;
    }
  }

  async changePassword(newPassword: string): Promise<void> {
    this.assertOpen();
    this.executeSQL(`PRAGMA rekey = '${newPassword}'`);
    this.options.password = newPassword;
  }

  private execPragmas() {
    this.executeSQL('PRAGMA foreign_keys = ON');
    this.executeSQL('PRAGMA secure_delete = ON');
    this.executeSQL('PRAGMA journal_mode = WAL');
    this.executeSQL('PRAGMA synchronous = NORMAL');
  }

  private executeSQL(sql: string, params?: any[]) {
    const stmtPtrRef = new interop.Reference<interop.Pointer>();
    if (sqlite3_prepare_v2(this.dbPtr, sql, -1, stmtPtrRef, null) !== 0) {
      throw new Error(`[SQLCipher][executeSQL] Error preparing statement: ${sql}`);
    }
    const stmt = stmtPtrRef.value;
    if (params) {
      for (let i = 0; i < params.length; i++) {
        const val = params[i];
        if (val === null || val === undefined) {
          sqlite3_bind_null(stmt, i + 1);
        } else if (typeof val === 'number') {
          sqlite3_bind_double(stmt, i + 1, val);
        } else {
          sqlite3_bind_text(stmt, i + 1, String(val), -1, null);
        }
      }
    }

    let rc = sqlite3_step(stmt);
    if (rc !== 101 && rc !== 100) {
      // SQLITE_DONE or SQLITE_ROW
      sqlite3_finalize(stmt);
      throw new Error(`[SQLCipher][executeSQL] Step failed: ${rc}`);
    }

    sqlite3_finalize(stmt);
  }
}
