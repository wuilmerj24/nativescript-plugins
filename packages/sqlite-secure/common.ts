import { Observable } from '@nativescript/core';
import { SQLCipherOptions, SQLCipherRow, SQLCipherTransaction } from '.';

export abstract class SqliteSecureCommon extends Observable {
  protected options: SQLCipherOptions;
  protected isOpen = false;

  constructor(options: SQLCipherOptions) {
    super();
    if (!options?.name) {
      throw new Error('[SQLCipher] Database name is required');
    }
    if (!options?.password) {
      throw new Error('[SQLCipher] Database password is required');
    }

    this.options = {
      enableWAL: true,
      ...options,
    };
  }

  abstract open(): Promise<void>;
  abstract close(): Promise<void>;

  abstract run(sql: string, params?: any[]): Promise<void>;
  abstract all<T = SQLCipherRow>(sql: string, params?: any[]): Promise<T[]>;

  abstract transaction(callback: (tx: SQLCipherTransaction) => Promise<void>): Promise<void>;

  abstract changePassword(newPassword: string): Promise<void>;

  protected assertOpen() {
    if (!this.isOpen) {
      throw new Error('[SQLCipher] Database is not open');
    }
  }
}
