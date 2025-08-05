import { SqliteSecureCommon } from './common';

export declare class SqliteSecure extends SqliteSecureCommon {
    createDb();
    deleteDb(dbname: string): boolean;
    openDb(): any;
    isOpen(): boolean;
    setVersion(version: number);
    getVersion(): number;
    execute(query: string, args?: any[]): any;
    select(query, args?: any[]): any;
    close(): boolean;
}
