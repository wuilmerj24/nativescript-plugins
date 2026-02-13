import { SqliteSecureCommon } from './common';

export interface SQLCipherOptions {
  name: string;
  password: string;
  version?: number;
  enableWAL?: boolean;
}

export interface SQLCipherRow {
  [key: string]: any;
}

export interface SQLCipherTransaction {
  run(sql: string, params?: any[]): Promise<void>;
  all<T = SQLCipherRow>(sql: string, params?: any[]): Promise<T[]>;
}

export declare class SqliteSecure extends SqliteSecureCommon {
  constructor(options: SQLCipherOptions) {
    super(options);
  }
}
