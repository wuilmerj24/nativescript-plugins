import { Application, Utils } from '@nativescript/core';
import { SqliteSecureCommon } from './common';

java.lang.System.loadLibrary('sqlcipher');

export class SqliteSecure extends SqliteSecureCommon {
    public sqlite: net.zetetic.database.sqlcipher.SQLiteDatabase;
    
    public createDb(): net.zetetic.database.sqlcipher.SQLiteDatabase {
        const context: android.content.Context = Application.android.foregroundActivity || Utils.android.getApplicationContext();
        const databaseFile: java.io.File = context.getDatabasePath(this.dbname);
        this.sqlite = net.zetetic.database.sqlcipher.SQLiteDatabase.openOrCreateDatabase(databaseFile.getAbsolutePath(), this.password, null, new net.zetetic.database.DatabaseErrorHandler({
            onCorruption:(param0: net.zetetic.database.sqlcipher.SQLiteDatabase, param1: globalAndroid.database.sqlite.SQLiteException)=> {
                console.error("Database corrupted!", param1);
            },
        }));
        this.sqlite.setVersion(this.version);
        return this.sqlite;
    }

    public deleteDb(dbname: string): boolean {
        const databaseFile: java.io.File = Application.android.foregroundActivity.getApplicationContext().getDatabasePath(dbname);
        if (databaseFile.exists()) {
            const res: boolean = net.zetetic.database.sqlcipher.SQLiteDatabase.deleteDatabase(databaseFile);
            this.sqlite.close();
            return res;
        } else {
            return false;
        }
    }

    public openDb(): net.zetetic.database.sqlcipher.SQLiteDatabase {
        const databaseFile: java.io.File = Application.android.foregroundActivity.getApplicationContext().getDatabasePath(this.dbname);
        this.sqlite = net.zetetic.database.sqlcipher.SQLiteDatabase.openOrCreateDatabase(databaseFile.getAbsolutePath(), this.password, null, null);
        return this.sqlite;
    }

    public isOpen(): boolean {
        if (!this.sqlite) {
            return false;
        }
        return this.sqlite.isOpen();
    }

    public setVersion(version: number) {
        this.sqlite.setVersion(version);
    }

    public getVersion(): number {
        return this.sqlite.getVersion();
    }

    public async execute(query: string, args: any[]) {
        return new Promise(async (rs, rj) => {
            try {
                let res;
                if (args) {
                    res = this.sqlite.execSQL(query, args);
                } else {
                    res = this.sqlite.execSQL(query);
                }

                if (this.isInsert(query)){
                    rs(this.getLastInsertId());
                }
                rs(res)
            } catch (error) {
                console.error(error);
                rj(error);
            }
        });
    }

    private getLastInsertId():number{
        const cursor:android.database.Cursor= this.sqlite.rawQuery("SELECT last_insert_rowid()",null);
        let id=-1;
        if(cursor.moveToFirst()){
            id = cursor.getLong(0);
        }
        cursor.close();
        return id;
    }

    private isInsert(query: string): boolean {
        const insertRegex = /^\s*(?:\/\*[\s\S]*?\*\/\s*)*insert\s+/i;
        return insertRegex.test(query);
    }

    private getTableNameFromInsertQuery(query: string): string {
        const regex = /INSERT\s+INTO\s+(\w+)\s+/i;
        const match = query.match(regex);
        if (match && match.length > 1) {
            return match[1];
        } else {
            return null;
        }
    }

    public async select(query: string, args: any[]): Promise<any[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const cursor: android.database.Cursor = await this.sqlite.rawQuery(query, args);
                const data: any[] = [];

                if (cursor != null && cursor.moveToFirst()) {
                    const columnCount = cursor.getColumnCount();

                    do {
                        let rowData: any = {};
                        for (let i = 0; i < columnCount; i++) {
                            const columnName: string = cursor.getColumnName(i);
                            switch (cursor.getType(i)) {
                                case android.database.Cursor.FIELD_TYPE_INTEGER:
                                    rowData[columnName] = cursor.getInt(i);
                                    break;
                                case android.database.Cursor.FIELD_TYPE_FLOAT:
                                    rowData[columnName] = cursor.getFloat(i);
                                    break;

                                case android.database.Cursor.FIELD_TYPE_STRING:
                                    rowData[columnName] = cursor.getString(i);
                                    break;

                                case android.database.Cursor.FIELD_TYPE_BLOB:
                                    rowData[columnName] = cursor.getBlob(i);
                                    break;
                            }
                        }
                        data.push(rowData);
                    } while (cursor.moveToNext());
                }
                cursor.close();
                resolve(data);
            } catch (error) {
                console.error(error);
                reject(error);
            }
        });
    }

    close(): boolean {
        this.sqlite.close();
        return this.sqlite.isOpen();
    }
}
