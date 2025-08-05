declare module net {
    export module zetetic {
        export module database {
            export abstract class AbstractCursor {
                public static class: java.lang.Class<net.zetetic.database.AbstractCursor>;
                public mPos: number;
                public mClosed: boolean;
                public mContentResolver: globalAndroid.content.ContentResolver;
                public getColumnCount(): number;
                public requery(): boolean;
                public fillWindow(position: number, window: net.zetetic.database.CursorWindow): void;
                public getDouble(param0: number): number;
                public moveToPrevious(): boolean;
                public getExtras(): globalAndroid.os.Bundle;
                public getString(param0: number): string;
                public getShort(param0: number): number;
                public onMove(param0: number, param1: number): boolean;
                public getBlob(column: number): androidNative.Array<number>;
                public finalize(): void;
                public getPosition(): number;
                public getColumnIndex(i: string): number;
                public constructor();
                public isAfterLast(): boolean;
                public copyStringToBuffer(this_: number, columnIndex: globalAndroid.database.CharArrayBuffer): void;
                public respond(extras: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
                public setExtras(extras: globalAndroid.os.Bundle): void;
                public getLong(param0: number): number;
                public getInt(param0: number): number;
                public getColumnNames(): androidNative.Array<string>;
                public isFirst(): boolean;
                public moveToNext(): boolean;
                public close(): void;
                public isNull(param0: number): boolean;
                public getColumnName(columnIndex: number): string;
                public getNotificationUri(): globalAndroid.net.Uri;
                public getColumnIndexOrThrow(columnName: string): number;
                public isClosed(): boolean;
                public getCount(): number;
                public onDeactivateOrClose(): void;
                public registerContentObserver(observer: globalAndroid.database.ContentObserver): void;
                public unregisterDataSetObserver(observer: globalAndroid.database.DataSetObserver): void;
                public setNotificationUri(cr: globalAndroid.content.ContentResolver, notifyUri: globalAndroid.net.Uri): void;
                public getWantsAllOnMoveCalls(): boolean;
                public isLast(): boolean;
                public checkPosition(): void;
                public registerDataSetObserver(observer: globalAndroid.database.DataSetObserver): void;
                public getType(param0: number): number;
                public moveToPosition(position: number): boolean;
                public move(offset: number): boolean;
                public moveToLast(): boolean;
                public moveToFirst(): boolean;
                public unregisterContentObserver(observer: globalAndroid.database.ContentObserver): void;
                public getFloat(param0: number): number;
                public deactivate(): void;
                public isBeforeFirst(): boolean;
                public onChange(selfChange: boolean): void;
            }
            export module AbstractCursor {
                export class SelfContentObserver {
                    public static class: java.lang.Class<net.zetetic.database.AbstractCursor.SelfContentObserver>;
                    public constructor(cursor: net.zetetic.database.AbstractCursor);
                    public onChange(selfChange: boolean): void;
                    public deliverSelfNotifications(): boolean;
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export abstract class AbstractWindowedCursor extends net.zetetic.database.AbstractCursor {
                public static class: java.lang.Class<net.zetetic.database.AbstractWindowedCursor>;
                public mWindow: net.zetetic.database.CursorWindow;
                public isNull(columnIndex: number): boolean;
                public getInt(columnIndex: number): number;
                public getBlob(columnIndex: number): androidNative.Array<number>;
                public getString(columnIndex: number): string;
                public getShort(columnIndex: number): number;
                public getType(columnIndex: number): number;
                public onDeactivateOrClose(): void;
                public constructor();
                public setWindow(window: net.zetetic.database.CursorWindow): void;
                public getFloat(columnIndex: number): number;
                public checkPosition(): void;
                public hasWindow(): boolean;
                public closeWindow(): void;
                public getWindow(): net.zetetic.database.CursorWindow;
                public getLong(columnIndex: number): number;
                public copyStringToBuffer(columnIndex: number, buffer: globalAndroid.database.CharArrayBuffer): void;
                public getDouble(columnIndex: number): number;
                public clearOrCreateWindow(name: string): void;
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export class CursorWindow extends net.zetetic.database.sqlcipher.SQLiteClosable {
                public static class: java.lang.Class<net.zetetic.database.CursorWindow>;
                public static PREFERRED_CURSOR_WINDOW_SIZE: number;
                public static DEFAULT_CURSOR_WINDOW_SIZE: number = 16384;
                public mWindowPtr: number;
                public getDouble(row: number, column: number): number;
                public constructor(name: string);
                public getFloat(row: number, column: number): number;
                public finalize(): void;
                public freeLastRow(): void;
                public putBlob(value: androidNative.Array<number>, row: number, column: number): boolean;
                public constructor();
                public getInt(row: number, column: number): number;
                public putDouble(value: number, row: number, column: number): boolean;
                public setNumColumns(columnNum: number): boolean;
                public clear(): void;
                public getBlob(row: number, column: number): androidNative.Array<number>;
                public getType(row: number, column: number): number;
                public isBlob(row: number, column: number): boolean;
                public isNull(row: number, column: number): boolean;
                public getNumRows(): number;
                public getWindowSizeBytes(): number;
                public onAllReferencesReleased(): void;
                public allocRow(): boolean;
                public putLong(value: number, row: number, column: number): boolean;
                public constructor(name: string, windowSizeBytes: number);
                public getName(): string;
                public getStartPosition(): number;
                public toString(): string;
                public getShort(row: number, column: number): number;
                public putString(value: string, row: number, column: number): boolean;
                public getString(row: number, column: number): string;
                public setStartPosition(pos: number): void;
                public copyStringToBuffer(row: number, column: number, buffer: globalAndroid.database.CharArrayBuffer): void;
                public putNull(row: number, column: number): boolean;
                public getLong(row: number, column: number): number;
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export class CursorWindowAllocationException {
                public static class: java.lang.Class<net.zetetic.database.CursorWindowAllocationException>;
                public constructor(description: string);
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export class DatabaseErrorHandler {
                public static class: java.lang.Class<net.zetetic.database.DatabaseErrorHandler>;
                /**
                 * Constructs a new instance of the net.zetetic.database.DatabaseErrorHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    onCorruption(param0: net.zetetic.database.sqlcipher.SQLiteDatabase, param1: globalAndroid.database.sqlite.SQLiteException): void;
                });
                public constructor();
                public onCorruption(param0: net.zetetic.database.sqlcipher.SQLiteDatabase, param1: globalAndroid.database.sqlite.SQLiteException): void;
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export class DatabaseUtils {
                public static class: java.lang.Class<net.zetetic.database.DatabaseUtils>;
                public static STATEMENT_SELECT: number = 1;
                public static STATEMENT_UPDATE: number = 2;
                public static STATEMENT_ATTACH: number = 3;
                public static STATEMENT_BEGIN: number = 4;
                public static STATEMENT_COMMIT: number = 5;
                public static STATEMENT_ABORT: number = 6;
                public static STATEMENT_PRAGMA: number = 7;
                public static STATEMENT_DDL: number = 8;
                public static STATEMENT_UNPREPARED: number = 9;
                public static STATEMENT_OTHER: number = 99;
                public static cursorPickFillWindowStartPosition(cursorPosition: number, cursorWindowCapacity: number): number;
                public static getSqlStatementType(sql: string): number;
                public static cursorDoubleToCursorValues(cursor: globalAndroid.database.Cursor, field: string, values: globalAndroid.content.ContentValues): void;
                public static createDbFromSqlStatements(statement: globalAndroid.content.Context, context: string, dbName: number, dbVersion: string): void;
                public constructor();
                public static stringForQuery(prog: net.zetetic.database.sqlcipher.SQLiteStatement, selectionArgs: androidNative.Array<string>): string;
                public static cursorIntToContentValuesIfPresent(cursor: globalAndroid.database.Cursor, values: globalAndroid.content.ContentValues, column: string): void;
                public static cursorFloatToContentValuesIfPresent(cursor: globalAndroid.database.Cursor, values: globalAndroid.content.ContentValues, column: string): void;
                public static cursorStringToContentValues(cursor: globalAndroid.database.Cursor, field: string, values: globalAndroid.content.ContentValues, key: string): void;
                public static writeExceptionToParcel(reply: globalAndroid.os.Parcel, e: java.lang.Exception): void;
                public static bindObjectToProgram(bool: net.zetetic.database.sqlcipher.SQLiteProgram, prog: number, index: any): void;
                public static appendEscapedSQLString(c: java.lang.StringBuilder, i: string): void;
                public static dumpCursor(startPos: globalAndroid.database.Cursor, cursor: java.io.PrintStream): void;
                public static blobFileDescriptorForQuery(prog: net.zetetic.database.sqlcipher.SQLiteStatement, selectionArgs: androidNative.Array<string>): globalAndroid.os.ParcelFileDescriptor;
                public static getTypeOfObject(obj: any): number;
                public static cursorStringToContentValuesIfPresent(cursor: globalAndroid.database.Cursor, values: globalAndroid.content.ContentValues, column: string): void;
                public static dumpCurrentRow(value: globalAndroid.database.Cursor, e: java.lang.StringBuilder): void;
                public static cursorIntToContentValues(cursor: globalAndroid.database.Cursor, field: string, values: globalAndroid.content.ContentValues, key: string): void;
                public static cursorDoubleToContentValuesIfPresent(cursor: globalAndroid.database.Cursor, values: globalAndroid.content.ContentValues, column: string): void;
                public static cursorRowToContentValues(i: globalAndroid.database.Cursor, cursor: globalAndroid.content.ContentValues): void;
                public static dumpCursorToString(cursor: globalAndroid.database.Cursor): string;
                public static sqlEscapeString(value: string): string;
                public static cursorStringToContentValues(cursor: globalAndroid.database.Cursor, field: string, values: globalAndroid.content.ContentValues): void;
                public static appendValueToSql(bool: java.lang.StringBuilder, sql: any): void;
                public static cursorShortToContentValuesIfPresent(cursor: globalAndroid.database.Cursor, values: globalAndroid.content.ContentValues, column: string): void;
                public static findRowIdColumnIndex(i: androidNative.Array<string>): number;
                public static appendSelectionArgs(originalValues: androidNative.Array<string>, newValues: androidNative.Array<string>): androidNative.Array<string>;
                public static getHexCollationKey(name: string): string;
                public static dumpCurrentRow(value: globalAndroid.database.Cursor, e: java.io.PrintStream): void;
                public static dumpCurrentRow(cursor: globalAndroid.database.Cursor): void;
                public static getCollationKey(ex: string): string;
                public static blobFileDescriptorForQuery(db: net.zetetic.database.sqlcipher.SQLiteDatabase, query: string, selectionArgs: androidNative.Array<string>): globalAndroid.os.ParcelFileDescriptor;
                public static concatenateWhere(a: string, b: string): string;
                public static cursorDoubleToContentValues(cursor: globalAndroid.database.Cursor, field: string, values: globalAndroid.content.ContentValues, key: string): void;
                public static queryNumEntries(db: net.zetetic.database.sqlcipher.SQLiteDatabase, table: string, selection: string, selectionArgs: androidNative.Array<string>): number;
                public static queryNumEntries(db: net.zetetic.database.sqlcipher.SQLiteDatabase, table: string, selection: string): number;
                public static longForQuery(db: net.zetetic.database.sqlcipher.SQLiteDatabase, query: string, selectionArgs: androidNative.Array<string>): number;
                public static dumpCurrentRowToString(cursor: globalAndroid.database.Cursor): string;
                public static dumpCursor(startPos: globalAndroid.database.Cursor, cursor: java.lang.StringBuilder): void;
                public static cursorLongToContentValuesIfPresent(cursor: globalAndroid.database.Cursor, values: globalAndroid.content.ContentValues, column: string): void;
                public static cursorLongToContentValues(value: globalAndroid.database.Cursor, cursor: string, field: globalAndroid.content.ContentValues, values: string): void;
                public static queryNumEntries(db: net.zetetic.database.sqlcipher.SQLiteDatabase, table: string): number;
                public static queryIsEmpty(db: net.zetetic.database.sqlcipher.SQLiteDatabase, table: string): boolean;
                public static cursorFillWindow(success: globalAndroid.database.Cursor, success: number, success: net.zetetic.database.CursorWindow): void;
                public static dumpCursor(cursor: globalAndroid.database.Cursor): void;
                public static cursorIntToContentValues(cursor: globalAndroid.database.Cursor, field: string, values: globalAndroid.content.ContentValues): void;
                public static stringForQuery(db: net.zetetic.database.sqlcipher.SQLiteDatabase, query: string, selectionArgs: androidNative.Array<string>): string;
                public static cursorLongToContentValues(cursor: globalAndroid.database.Cursor, field: string, values: globalAndroid.content.ContentValues): void;
                public static cursorStringToInsertHelper(cursor: globalAndroid.database.Cursor, field: string, inserter: net.zetetic.database.DatabaseUtils.InsertHelper, index: number): void;
                public static longForQuery(prog: net.zetetic.database.sqlcipher.SQLiteStatement, selectionArgs: androidNative.Array<string>): number;
            }
            export module DatabaseUtils {
                export class InsertHelper {
                    public static class: java.lang.Class<net.zetetic.database.DatabaseUtils.InsertHelper>;
                    public static TABLE_INFO_PRAGMA_COLUMNNAME_INDEX: number = 1;
                    public static TABLE_INFO_PRAGMA_DEFAULT_INDEX: number = 4;
                    public execute(): number;
                    public insert(values: globalAndroid.content.ContentValues): number;
                    public constructor(db: net.zetetic.database.sqlcipher.SQLiteDatabase, tableName: string);
                    public bind(index: number, value: number): void;
                    public prepareForReplace(): void;
                    public bindNull(index: number): void;
                    public bind(index: number, value: string): void;
                    public replace(values: globalAndroid.content.ContentValues): number;
                    public close(): void;
                    public getColumnIndex(key: string): number;
                    public prepareForInsert(): void;
                    public bind(index: number, value: androidNative.Array<number>): void;
                    public bind(index: number, value: boolean): void;
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export class DefaultDatabaseErrorHandler extends net.zetetic.database.DatabaseErrorHandler {
                public static class: java.lang.Class<net.zetetic.database.DefaultDatabaseErrorHandler>;
                public onCorruption(param0: net.zetetic.database.sqlcipher.SQLiteDatabase, param1: globalAndroid.database.sqlite.SQLiteException): void;
                public onCorruption(p: net.zetetic.database.sqlcipher.SQLiteDatabase, this_: globalAndroid.database.sqlite.SQLiteException): void;
                public constructor();
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export class LogTarget {
                public static class: java.lang.Class<net.zetetic.database.LogTarget>;
                /**
                 * Constructs a new instance of the net.zetetic.database.LogTarget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    isLoggable(param0: string, param1: number): boolean;
                    log(param0: number, param1: string, param2: string, param3: java.lang.Throwable): void;
                });
                public constructor();
                public isLoggable(param0: string, param1: number): boolean;
                public log(param0: number, param1: string, param2: string, param3: java.lang.Throwable): void;
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export class LogcatTarget extends net.zetetic.database.LogTarget {
                public static class: java.lang.Class<net.zetetic.database.LogcatTarget>;
                public isLoggable(param0: string, param1: number): boolean;
                public log(priority: number, tag: string, message: string, throwable: java.lang.Throwable): void;
                public log(param0: number, param1: string, param2: string, param3: java.lang.Throwable): void;
                public constructor();
                public isLoggable(tag: string, priority: number): boolean;
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export class Logger {
                public static class: java.lang.Class<net.zetetic.database.Logger>;
                public static VERBOSE: number = 2;
                public static DEBUG: number = 3;
                public static INFO: number = 4;
                public static WARN: number = 5;
                public static ERROR: number = 6;
                public static ASSERT: number = 7;
                public static wtf(tag: string, message: string, throwable: java.lang.Throwable): void;
                public static w(tag: string, message: string): void;
                public static e(tag: string, message: string): void;
                public static d(tag: string, message: string): void;
                public static isLoggable(tag: string, priority: number): boolean;
                public constructor();
                public static d(tag: string, message: string, throwable: java.lang.Throwable): void;
                public static e(tag: string, message: string, throwable: java.lang.Throwable): void;
                public static wtf(tag: string, message: string): void;
                public static w(tag: string, message: string, throwable: java.lang.Throwable): void;
                public static v(tag: string, message: string): void;
                public static v(tag: string, message: string, throwable: java.lang.Throwable): void;
                public static setTarget(target: net.zetetic.database.LogTarget): void;
                public static i(tag: string, message: string, throwable: java.lang.Throwable): void;
                public static i(tag: string, message: string): void;
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export class MatrixCursor extends net.zetetic.database.AbstractCursor {
                public static class: java.lang.Class<net.zetetic.database.MatrixCursor>;
                public addRow(columnValues: androidNative.Array<any>): void;
                public getString(column: number): string;
                public fillWindow(position: number, window: net.zetetic.database.CursorWindow): void;
                public getDouble(column: number): number;
                public addRow(this_: java.lang.Iterable<any>): void;
                public getLong(column: number): number;
                public onMove(oldPosition: number, newPosition: number): boolean;
                public getFloat(column: number): number;
                public getCount(): number;
                public isNull(column: number): boolean;
                public getInt(column: number): number;
                public constructor();
                public getShort(column: number): number;
                public constructor(columnNames: androidNative.Array<string>, initialCapacity: number);
                public newRow(): net.zetetic.database.MatrixCursor.RowBuilder;
                public getColumnNames(): androidNative.Array<string>;
                public getType(column: number): number;
                public constructor(columnNames: androidNative.Array<string>);
            }
            export module MatrixCursor {
                export class RowBuilder {
                    public static class: java.lang.Class<net.zetetic.database.MatrixCursor.RowBuilder>;
                    public add(columnValue: any): net.zetetic.database.MatrixCursor.RowBuilder;
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export class NoopTarget extends net.zetetic.database.LogTarget {
                public static class: java.lang.Class<net.zetetic.database.NoopTarget>;
                public isLoggable(param0: string, param1: number): boolean;
                public log(priority: number, tag: string, message: string, throwable: java.lang.Throwable): void;
                public log(param0: number, param1: string, param2: string, param3: java.lang.Throwable): void;
                public constructor();
                public isLoggable(tag: string, priority: number): boolean;
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export module sqlcipher {
                export class CloseGuard {
                    public static class: java.lang.Class<net.zetetic.database.sqlcipher.CloseGuard>;
                    public static setEnabled(enabled: boolean): void;
                    public static getReporter(): net.zetetic.database.sqlcipher.CloseGuard.Reporter;
                    public warnIfOpen(): void;
                    public static setReporter(reporter: net.zetetic.database.sqlcipher.CloseGuard.Reporter): void;
                    public close(): void;
                    public static get(): net.zetetic.database.sqlcipher.CloseGuard;
                    public open(closer: string): void;
                }
                export module CloseGuard {
                    export class DefaultReporter extends net.zetetic.database.sqlcipher.CloseGuard.Reporter {
                        public static class: java.lang.Class<net.zetetic.database.sqlcipher.CloseGuard.DefaultReporter>;
                        public report(param0: string, param1: java.lang.Throwable): void;
                        public report(message: string, allocationSite: java.lang.Throwable): void;
                    }
                    export class Reporter {
                        public static class: java.lang.Class<net.zetetic.database.sqlcipher.CloseGuard.Reporter>;
                        /**
                         * Constructs a new instance of the net.zetetic.database.sqlcipher.CloseGuard$Reporter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            report(param0: string, param1: java.lang.Throwable): void;
                        });
                        public constructor();
                        public report(param0: string, param1: java.lang.Throwable): void;
                    }
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export module sqlcipher {
                export class DatabaseObjectNotClosedException {
                    public static class: java.lang.Class<net.zetetic.database.sqlcipher.DatabaseObjectNotClosedException>;
                    public constructor();
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export module sqlcipher {
                export abstract class SQLiteClosable {
                    public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteClosable>;
                    public acquireReference(): void;
                    /** @deprecated */
                    public releaseReferenceFromContainer(): void;
                    public constructor();
                    public releaseReference(): void;
                    public close(): void;
                    public onAllReferencesReleased(): void;
                    /** @deprecated */
                    public onAllReferencesReleasedFromContainer(): void;
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export module sqlcipher {
                export class SQLiteConnection {
                    public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteConnection>;
                    public isPrimaryConnection(): boolean;
                    public executeForBlobFileDescriptor(statement: string, ex: androidNative.Array<any>, this_: globalAndroid.os.CancellationSignal): globalAndroid.os.ParcelFileDescriptor;
                    public static hasCodec(): boolean;
                    public execute(ex: string, this_: androidNative.Array<any>, sql: globalAndroid.os.CancellationSignal): void;
                    public finalize(): void;
                    public executeForCursorWindow(statement: string, ex: androidNative.Array<any>, actualPos: net.zetetic.database.CursorWindow, countedRows: number, filledRows: number, cookie: boolean, this_: globalAndroid.os.CancellationSignal): number;
                    public executeRaw(ex: string, this_: androidNative.Array<any>, sql: globalAndroid.os.CancellationSignal): void;
                    public executeForLastInsertedRowId(ex: string, this_: androidNative.Array<any>, sql: globalAndroid.os.CancellationSignal): number;
                    public prepare(columnCount: string, statement: net.zetetic.database.sqlcipher.SQLiteStatementInfo): void;
                    public executeForChangedRowCount(ex: string, this_: androidNative.Array<any>, sql: globalAndroid.os.CancellationSignal): number;
                    public executeForLong(ex: string, this_: androidNative.Array<any>, sql: globalAndroid.os.CancellationSignal): number;
                    public toString(): string;
                    public getConnectionId(): number;
                    public dump(printer: globalAndroid.util.Printer, verbose: boolean): void;
                    public executeForString(ex: string, this_: androidNative.Array<any>, sql: globalAndroid.os.CancellationSignal): string;
                    public onCancel(): void;
                    public enableLocalizedCollators(): void;
                }
                export module SQLiteConnection {
                    export class Operation {
                        public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteConnection.Operation>;
                        public mStartWallTime: number;
                        public mStartTime: number;
                        public mEndTime: number;
                        public mKind: string;
                        public mSql: string;
                        public mBindArgs: java.util.ArrayList<any>;
                        public mFinished: boolean;
                        public mException: java.lang.Exception;
                        public mCookie: number;
                        public describe(i: java.lang.StringBuilder, count: boolean): void;
                    }
                    export class OperationLog {
                        public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteConnection.OperationLog>;
                        public endOperation(cookie: number): void;
                        public failOperation(this_: number, cookie: java.lang.Exception): void;
                        public endOperationDeferLog(cookie: number): boolean;
                        public dump(n: globalAndroid.util.Printer, index: boolean): void;
                        public logOperation(cookie: number, detail: string): void;
                        public describeCurrentOperation(): string;
                        public beginOperation(i: string, index: string, operation: androidNative.Array<any>): number;
                    }
                    export class PreparedStatement {
                        public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteConnection.PreparedStatement>;
                        public mPoolNext: net.zetetic.database.sqlcipher.SQLiteConnection.PreparedStatement;
                        public mSql: string;
                        public mStatementPtr: number;
                        public mNumParameters: number;
                        public mType: number;
                        public mReadOnly: boolean;
                        public mInCache: boolean;
                        public mInUse: boolean;
                    }
                    export class PreparedStatementCache extends globalAndroid.util.LruCache<string, net.zetetic.database.sqlcipher.SQLiteConnection.PreparedStatement> {
                        public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteConnection.PreparedStatementCache>;
                        public constructor(size: net.zetetic.database.sqlcipher.SQLiteConnection, param1: number);
                        public dump(statement: globalAndroid.util.Printer): void;
                        public entryRemoved(evicted: boolean, key: string, oldValue: net.zetetic.database.sqlcipher.SQLiteConnection.PreparedStatement, newValue: net.zetetic.database.sqlcipher.SQLiteConnection.PreparedStatement): void;
                    }
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export module sqlcipher {
                export class SQLiteConnectionPool {
                    public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteConnectionPool>;
                    public static CONNECTION_FLAG_READ_ONLY: number = 1;
                    public static CONNECTION_FLAG_PRIMARY_CONNECTION_AFFINITY: number = 2;
                    public static CONNECTION_FLAG_INTERACTIVE: number = 4;
                    public reconfigure(walModeChanged: net.zetetic.database.sqlcipher.SQLiteDatabaseConfiguration): void;
                    public toString(): string;
                    public static open(configuration: net.zetetic.database.sqlcipher.SQLiteDatabaseConfiguration): net.zetetic.database.sqlcipher.SQLiteConnectionPool;
                    public finalize(): void;
                    public close(): void;
                    public collectDbStats(connection: java.util.ArrayList<net.zetetic.database.sqlcipher.SQLiteDebug.DbStats>): void;
                    public acquireConnection(sql: string, connectionFlags: number, cancellationSignal: globalAndroid.os.CancellationSignal): net.zetetic.database.sqlcipher.SQLiteConnection;
                    public shouldYieldConnection(connection: net.zetetic.database.sqlcipher.SQLiteConnection, connectionFlags: number): boolean;
                    public dump(count: globalAndroid.util.Printer, connection: boolean): void;
                    public enableLocalizedCollators(): void;
                    public releaseConnection(this_: net.zetetic.database.sqlcipher.SQLiteConnection): void;
                }
                export module SQLiteConnectionPool {
                    export class AcquiredConnectionStatus {
                        public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteConnectionPool.AcquiredConnectionStatus>;
                        public static NORMAL: net.zetetic.database.sqlcipher.SQLiteConnectionPool.AcquiredConnectionStatus;
                        public static RECONFIGURE: net.zetetic.database.sqlcipher.SQLiteConnectionPool.AcquiredConnectionStatus;
                        public static DISCARD: net.zetetic.database.sqlcipher.SQLiteConnectionPool.AcquiredConnectionStatus;
                        public static valueOf(name: string): net.zetetic.database.sqlcipher.SQLiteConnectionPool.AcquiredConnectionStatus;
                        public static values(): androidNative.Array<net.zetetic.database.sqlcipher.SQLiteConnectionPool.AcquiredConnectionStatus>;
                    }
                    export class ConnectionWaiter {
                        public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteConnectionPool.ConnectionWaiter>;
                        public mNext: net.zetetic.database.sqlcipher.SQLiteConnectionPool.ConnectionWaiter;
                        public mThread: java.lang.Thread;
                        public mStartTime: number;
                        public mPriority: number;
                        public mWantPrimaryConnection: boolean;
                        public mSql: string;
                        public mConnectionFlags: number;
                        public mAssignedConnection: net.zetetic.database.sqlcipher.SQLiteConnection;
                        public mException: java.lang.RuntimeException;
                        public mNonce: number;
                    }
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export module sqlcipher {
                export class SQLiteCursor extends net.zetetic.database.AbstractWindowedCursor {
                    public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteCursor>;
                    public static PREFERRED_CURSOR_WINDOW_SIZE: number;
                    public static resetCursorWindowSize(): void;
                    public getCount(): number;
                    public requery(): boolean;
                    public finalize(): void;
                    public deactivate(): void;
                    public onMove(oldPosition: number, newPosition: number): boolean;
                    /** @deprecated */
                    public constructor(db: net.zetetic.database.sqlcipher.SQLiteDatabase, driver: net.zetetic.database.sqlcipher.SQLiteCursorDriver, editTable: string, query: net.zetetic.database.sqlcipher.SQLiteQuery);
                    public constructor(driver: net.zetetic.database.sqlcipher.SQLiteCursorDriver, editTable: string, query: net.zetetic.database.sqlcipher.SQLiteQuery);
                    public static setCursorWindowSize(size: number): void;
                    public constructor();
                    public getColumnNames(): androidNative.Array<string>;
                    public close(): void;
                    public getColumnIndex(columns: string): number;
                    public setWindow(window: net.zetetic.database.CursorWindow): void;
                    public getDatabase(): net.zetetic.database.sqlcipher.SQLiteDatabase;
                    public setSelectionArguments(selectionArgs: androidNative.Array<string>): void;
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export module sqlcipher {
                export class SQLiteCursorDriver {
                    public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteCursorDriver>;
                    /**
                     * Constructs a new instance of the net.zetetic.database.sqlcipher.SQLiteCursorDriver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        query(param0: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param1: androidNative.Array<string>): globalAndroid.database.Cursor;
                        cursorDeactivated(): void;
                        cursorRequeried(param0: globalAndroid.database.Cursor): void;
                        cursorClosed(): void;
                        setBindArguments(param0: androidNative.Array<string>): void;
                    });
                    public constructor();
                    public cursorClosed(): void;
                    public setBindArguments(param0: androidNative.Array<string>): void;
                    public query(param0: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param1: androidNative.Array<string>): globalAndroid.database.Cursor;
                    public cursorDeactivated(): void;
                    public cursorRequeried(param0: globalAndroid.database.Cursor): void;
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export module sqlcipher {
                export class SQLiteCustomFunction {
                    public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteCustomFunction>;
                    public name: string;
                    public numArgs: number;
                    public callback: net.zetetic.database.sqlcipher.SQLiteDatabase.CustomFunction;
                    public constructor(name: string, numArgs: number, callback: net.zetetic.database.sqlcipher.SQLiteDatabase.CustomFunction);
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export module sqlcipher {
                export class SQLiteDatabase extends net.zetetic.database.sqlcipher.SQLiteClosable {
                    public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteDatabase>;
                    public static CONFLICT_ROLLBACK: number = 1;
                    public static CONFLICT_ABORT: number = 2;
                    public static CONFLICT_FAIL: number = 3;
                    public static CONFLICT_IGNORE: number = 4;
                    public static CONFLICT_REPLACE: number = 5;
                    public static CONFLICT_NONE: number = 0;
                    public static SQLITE_MAX_LIKE_PATTERN_LENGTH: number = 50000;
                    public static OPEN_READWRITE: number = 0;
                    public static OPEN_READONLY: number = 1;
                    public static NO_LOCALIZED_COLLATORS: number = 16;
                    public static CREATE_IF_NECESSARY: number = 268435456;
                    public static ENABLE_WRITE_AHEAD_LOGGING: number = 536870912;
                    public static MAX_SQL_CACHE_SIZE: number = 100;
                    public query(distinct: boolean, table: string, columns: androidNative.Array<string>, selection: string, selectionArgs: androidNative.Array<string>, groupBy: string, having: string, orderBy: string, limit: string, cancellationSignal: globalAndroid.os.CancellationSignal): globalAndroid.database.Cursor;
                    public static hasCodec(): boolean;
                    public finalize(): void;
                    public static openOrCreateDatabase(path: string, password: androidNative.Array<number>, factory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, errorHandler: net.zetetic.database.DatabaseErrorHandler): net.zetetic.database.sqlcipher.SQLiteDatabase;
                    public static openOrCreateDatabase(path: string, password: androidNative.Array<number>, factory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, errorHandler: net.zetetic.database.DatabaseErrorHandler, databaseHook: net.zetetic.database.sqlcipher.SQLiteDatabaseHook): net.zetetic.database.sqlcipher.SQLiteDatabase;
                    public delete(this_: string, table: string, whereClause: androidNative.Array<string>): number;
                    public beginTransactionWithListener(transactionListener: net.zetetic.database.sqlcipher.SQLiteTransactionListener): void;
                    public validateSql(sql: string, cancellationSignal: globalAndroid.os.CancellationSignal): void;
                    public beginTransactionNonExclusive(): void;
                    public isDatabaseIntegrityOk(): boolean;
                    public update(table: string, values: globalAndroid.content.ContentValues, whereClause: string, whereArgs: androidNative.Array<string>): number;
                    public static openOrCreateDatabase(path: string, password: string, factory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, errorHandler: net.zetetic.database.DatabaseErrorHandler): net.zetetic.database.sqlcipher.SQLiteDatabase;
                    public addCustomFunction(this_: string, name: number, numArgs: net.zetetic.database.sqlcipher.SQLiteDatabase.CustomFunction): void;
                    public queryWithFactory(cursorFactory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, distinct: boolean, table: string, columns: androidNative.Array<string>, selection: string, selectionArgs: androidNative.Array<string>, groupBy: string, having: string, orderBy: string, limit: string): globalAndroid.database.Cursor;
                    public getVersion(): number;
                    /** @deprecated */
                    public setLockingEnabled(lockingEnabled: boolean): void;
                    public static openOrCreateDatabase(file: java.io.File, password: androidNative.Array<number>, factory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, errorHandler: net.zetetic.database.DatabaseErrorHandler): net.zetetic.database.sqlcipher.SQLiteDatabase;
                    public rawQuery(sql: string, selectionArgs: androidNative.Array<string>, cancellationSignal: globalAndroid.os.CancellationSignal): globalAndroid.database.Cursor;
                    public insertWithOnConflict(i: string, sql: string, bindArgs: globalAndroid.content.ContentValues, size: number): number;
                    public setLocale(oldLocale: java.util.Locale): void;
                    public static openDatabase(path: string, password: androidNative.Array<number>, factory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, flags: number, errorHandler: net.zetetic.database.DatabaseErrorHandler, databaseHook: net.zetetic.database.sqlcipher.SQLiteDatabaseHook): net.zetetic.database.sqlcipher.SQLiteDatabase;
                    public static openOrCreateDatabase(file: java.io.File, password: androidNative.Array<number>, factory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, errorHandler: net.zetetic.database.DatabaseErrorHandler, databaseHook: net.zetetic.database.sqlcipher.SQLiteDatabaseHook): net.zetetic.database.sqlcipher.SQLiteDatabase;
                    /** @deprecated */
                    public isDbLockedByOtherThreads(): boolean;
                    public static openDatabase(path: string, factory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, flags: number, errorHandler: net.zetetic.database.DatabaseErrorHandler): net.zetetic.database.sqlcipher.SQLiteDatabase;
                    public isDbLockedByCurrentThread(): boolean;
                    public query(query: string): globalAndroid.database.Cursor;
                    public static openOrCreateDatabase(file: java.io.File, password: string, factory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, errorHandler: net.zetetic.database.DatabaseErrorHandler, databaseHook: net.zetetic.database.sqlcipher.SQLiteDatabaseHook): net.zetetic.database.sqlcipher.SQLiteDatabase;
                    public query(driver: androidx.sqlite.db.SupportSQLiteQuery, sqliteQuery: globalAndroid.os.CancellationSignal): globalAndroid.database.Cursor;
                    public endTransaction(): void;
                    public isOpen(): boolean;
                    public static deleteDatabase(masterJournal: java.io.File): boolean;
                    /** @deprecated */
                    public markTableSyncable(table: string, foreignKey: string, updateTable: string): void;
                    public query(distinct: boolean, table: string, columns: androidNative.Array<string>, selection: string, selectionArgs: androidNative.Array<string>, groupBy: string, having: string, orderBy: string, limit: string): globalAndroid.database.Cursor;
                    public rawQuery(sql: string, selectionArgs: androidNative.Array<string>): globalAndroid.database.Cursor;
                    public insert(this_: string, table: string, nullColumnHack: globalAndroid.content.ContentValues): number;
                    public static openOrCreateDatabase(file: java.io.File, factory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory): net.zetetic.database.sqlcipher.SQLiteDatabase;
                    public beginTransactionWithListener(transactionListener: globalAndroid.database.sqlite.SQLiteTransactionListener): void;
                    public changePassword(originalPassword: androidNative.Array<number>): void;
                    public isInMemoryDatabase(): boolean;
                    public onAllReferencesReleased(): void;
                    public static openDatabase(path: string, password: string, factory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, flags: number, errorHandler: net.zetetic.database.DatabaseErrorHandler, databaseHook: net.zetetic.database.sqlcipher.SQLiteDatabaseHook): net.zetetic.database.sqlcipher.SQLiteDatabase;
                    public setTransactionSuccessful(): void;
                    public execSQL(sql: string, bindArgs: androidNative.Array<any>): void;
                    public static openDatabase(path: string, password: string, factory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, flags: number, databaseHook: net.zetetic.database.sqlcipher.SQLiteDatabaseHook): net.zetetic.database.sqlcipher.SQLiteDatabase;
                    public compileStatement(sql: string): net.zetetic.database.sqlcipher.SQLiteStatement;
                    public static openOrCreateDatabase(file: java.io.File, password: string, factory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, errorHandler: net.zetetic.database.DatabaseErrorHandler): net.zetetic.database.sqlcipher.SQLiteDatabase;
                    public needUpgrade(newVersion: number): boolean;
                    public static openOrCreateDatabase(path: string, factory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, errorHandler: net.zetetic.database.DatabaseErrorHandler): net.zetetic.database.sqlcipher.SQLiteDatabase;
                    public changePassword(newPassword: string): void;
                    /** @deprecated */
                    public markTableSyncable(table: string, deletedTable: string): void;
                    public rawQuery(this_: string, sql: androidNative.Array<any>): globalAndroid.database.Cursor;
                    public rawQueryWithFactory(this_: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, cursorFactory: string, sql: androidNative.Array<string>, selectionArgs: string, editTable: globalAndroid.os.CancellationSignal): globalAndroid.database.Cursor;
                    public rawQueryWithFactory(cursorFactory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, sql: string, selectionArgs: androidNative.Array<string>, editTable: string): globalAndroid.database.Cursor;
                    public static openDatabase(path: string, password: androidNative.Array<number>, factory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, flags: number, databaseHook: net.zetetic.database.sqlcipher.SQLiteDatabaseHook): net.zetetic.database.sqlcipher.SQLiteDatabase;
                    public setForeignKeyConstraintsEnabled(this_: boolean): void;
                    public insertOrThrow(table: string, nullColumnHack: string, values: globalAndroid.content.ContentValues): number;
                    public beginTransactionWithListenerNonExclusive(transactionListener: net.zetetic.database.sqlcipher.SQLiteTransactionListener): void;
                    public static openDatabase(path: string, factory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, flags: number): net.zetetic.database.sqlcipher.SQLiteDatabase;
                    public query(table: string, columns: androidNative.Array<string>, selection: string, selectionArgs: androidNative.Array<string>, groupBy: string, having: string, orderBy: string, limit: string): globalAndroid.database.Cursor;
                    public static releaseMemory(): number;
                    public static create(factory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory): net.zetetic.database.sqlcipher.SQLiteDatabase;
                    public static openOrCreateDatabase(path: string, password: string, factory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, errorHandler: net.zetetic.database.DatabaseErrorHandler, databaseHook: net.zetetic.database.sqlcipher.SQLiteDatabaseHook): net.zetetic.database.sqlcipher.SQLiteDatabase;
                    public getAttachedDbs(): java.util.List<globalAndroid.util.Pair<string, string>>;
                    public getPageSize(): number;
                    public insert(table: string, conflictAlgorithm: number, values: globalAndroid.content.ContentValues): number;
                    public replaceOrThrow(table: string, nullColumnHack: string, initialValues: globalAndroid.content.ContentValues): number;
                    public isReadOnly(): boolean;
                    public setPageSize(numBytes: number): void;
                    public queryWithFactory(this_: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, cursorFactory: boolean, distinct: string, table: androidNative.Array<string>, columns: string, selection: androidNative.Array<string>, selectionArgs: string, groupBy: string, having: string, orderBy: string, limit: globalAndroid.os.CancellationSignal): globalAndroid.database.Cursor;
                    public setMaximumSize(numBytes: number): number;
                    public query(query: string, bindArgs: androidNative.Array<any>): globalAndroid.database.Cursor;
                    public execSQL(sql: string): void;
                    public static openOrCreateDatabase(path: string, factory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory): net.zetetic.database.sqlcipher.SQLiteDatabase;
                    public inTransaction(): boolean;
                    /** @deprecated */
                    public yieldIfContended(): boolean;
                    public isWriteAheadLoggingEnabled(): boolean;
                    public setVersion(version: number): void;
                    public delete(this_: string, table: string, whereClause: androidNative.Array<any>): number;
                    public static findEditTable(spacepos: string): string;
                    public toString(): string;
                    public query(table: string, columns: androidNative.Array<string>, selection: string, selectionArgs: androidNative.Array<string>, groupBy: string, having: string, orderBy: string): globalAndroid.database.Cursor;
                    public query(query: androidx.sqlite.db.SupportSQLiteQuery): globalAndroid.database.Cursor;
                    public rawExecSQL(this_: string, sql: androidNative.Array<any>): void;
                    public beginTransactionWithListenerNonExclusive(transactionListener: globalAndroid.database.sqlite.SQLiteTransactionListener): void;
                    public disableWriteAheadLogging(): void;
                    public reopenReadWrite(): void;
                    public setMaxSqlCacheSize(oldMaxSqlCacheSize: number): void;
                    public enableWriteAheadLogging(): boolean;
                    public updateWithOnConflict(sql: string, setValuesSize: globalAndroid.content.ContentValues, bindArgsSize: string, bindArgs: androidNative.Array<string>, i: number): number;
                    public update(this_: string, table: number, conflictAlgorithm: globalAndroid.content.ContentValues, values: string, whereClause: androidNative.Array<any>): number;
                    public getMaximumSize(): number;
                    public beginTransaction(): void;
                    public getPath(): string;
                    public yieldIfContendedSafely(sleepAfterYieldDelay: number): boolean;
                    public yieldIfContendedSafely(): boolean;
                    /** @deprecated */
                    public getSyncedTables(): java.util.Map<string, string>;
                    public enableLocalizedCollators(): void;
                    public replace(this_: string, table: string, nullColumnHack: globalAndroid.content.ContentValues): number;
                }
                export module SQLiteDatabase {
                    export class CursorFactory {
                        public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory>;
                        /**
                         * Constructs a new instance of the net.zetetic.database.sqlcipher.SQLiteDatabase$CursorFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            newCursor(param0: net.zetetic.database.sqlcipher.SQLiteDatabase, param1: net.zetetic.database.sqlcipher.SQLiteCursorDriver, param2: string, param3: net.zetetic.database.sqlcipher.SQLiteQuery): globalAndroid.database.Cursor;
                        });
                        public constructor();
                        public newCursor(param0: net.zetetic.database.sqlcipher.SQLiteDatabase, param1: net.zetetic.database.sqlcipher.SQLiteCursorDriver, param2: string, param3: net.zetetic.database.sqlcipher.SQLiteQuery): globalAndroid.database.Cursor;
                    }
                    export class CustomFunction {
                        public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteDatabase.CustomFunction>;
                        /**
                         * Constructs a new instance of the net.zetetic.database.sqlcipher.SQLiteDatabase$CustomFunction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            callback(param0: androidNative.Array<string>): void;
                        });
                        public constructor();
                        public callback(param0: androidNative.Array<string>): void;
                    }
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export module sqlcipher {
                export class SQLiteDatabaseConfiguration {
                    public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteDatabaseConfiguration>;
                    public static MEMORY_DB_PATH: string = ":memory:";
                    public path: string;
                    public label: string;
                    public openFlags: number;
                    public maxSqlCacheSize: number;
                    public locale: java.util.Locale;
                    public foreignKeyConstraintsEnabled: boolean;
                    public password: androidNative.Array<number>;
                    public databaseHook: net.zetetic.database.sqlcipher.SQLiteDatabaseHook;
                    public customFunctions: java.util.ArrayList<net.zetetic.database.sqlcipher.SQLiteCustomFunction>;
                    public constructor(path: string, openFlags: number);
                    public constructor(path: string, openFlags: number, password: androidNative.Array<number>, databaseHook: net.zetetic.database.sqlcipher.SQLiteDatabaseHook);
                    public constructor(other: net.zetetic.database.sqlcipher.SQLiteDatabaseConfiguration);
                    public updateParametersFrom(other: net.zetetic.database.sqlcipher.SQLiteDatabaseConfiguration): void;
                    public isInMemoryDb(): boolean;
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export module sqlcipher {
                export class SQLiteDatabaseHook {
                    public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteDatabaseHook>;
                    /**
                     * Constructs a new instance of the net.zetetic.database.sqlcipher.SQLiteDatabaseHook interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        preKey(param0: net.zetetic.database.sqlcipher.SQLiteConnection): void;
                        postKey(param0: net.zetetic.database.sqlcipher.SQLiteConnection): void;
                    });
                    public constructor();
                    public preKey(param0: net.zetetic.database.sqlcipher.SQLiteConnection): void;
                    public postKey(param0: net.zetetic.database.sqlcipher.SQLiteConnection): void;
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export module sqlcipher {
                export class SQLiteDebug {
                    public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteDebug>;
                    public static DEBUG_SQL_LOG: boolean;
                    public static DEBUG_SQL_STATEMENTS: boolean;
                    public static DEBUG_SQL_TIME: boolean;
                    public static DEBUG_LOG_SLOW_QUERIES: boolean = 0;
                    public static shouldLogSlowQuery(elapsedTimeMillis: number): boolean;
                    public static getDatabaseInfo(): net.zetetic.database.sqlcipher.SQLiteDebug.PagerStats;
                    public static dump(arg: globalAndroid.util.Printer, printer: androidNative.Array<string>): void;
                }
                export module SQLiteDebug {
                    export class DbStats {
                        public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteDebug.DbStats>;
                        public dbName: string;
                        public pageSize: number;
                        public dbSize: number;
                        public lookaside: number;
                        public cache: string;
                        public constructor(dbName: string, pageCount: number, pageSize: number, lookaside: number, hits: number, misses: number, cachesize: number);
                    }
                    export class PagerStats {
                        public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteDebug.PagerStats>;
                        public memoryUsed: number;
                        public pageCacheOverflow: number;
                        public largestMemAlloc: number;
                        public dbStats: java.util.ArrayList<net.zetetic.database.sqlcipher.SQLiteDebug.DbStats>;
                        public constructor();
                    }
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export module sqlcipher {
                export class SQLiteDirectCursorDriver extends net.zetetic.database.sqlcipher.SQLiteCursorDriver {
                    public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteDirectCursorDriver>;
                    public cursorRequeried(cursor: globalAndroid.database.Cursor): void;
                    public constructor(db: net.zetetic.database.sqlcipher.SQLiteDatabase, sql: string, editTable: string, cancellationSignal: globalAndroid.os.CancellationSignal);
                    public toString(): string;
                    public query(cursor: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, ex: androidNative.Array<string>): globalAndroid.database.Cursor;
                    public cursorClosed(): void;
                    public setBindArguments(param0: androidNative.Array<string>): void;
                    public cursorDeactivated(): void;
                    public query(param0: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param1: androidNative.Array<string>): globalAndroid.database.Cursor;
                    public cursorRequeried(param0: globalAndroid.database.Cursor): void;
                    public query(cursor: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, ex: androidNative.Array<any>): globalAndroid.database.Cursor;
                    public setBindArguments(bindArgs: androidNative.Array<string>): void;
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export module sqlcipher {
                export class SQLiteGlobal {
                    public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteGlobal>;
                    public static getJournalSizeLimit(): number;
                    public static setWALConnectionPoolSize(value: number): void;
                    public static getDefaultJournalMode(): string;
                    public static releaseMemory(): number;
                    public static getDefaultSyncMode(): string;
                    public static getWALConnectionPoolSize(): number;
                    public static getWALSyncMode(): string;
                    public static getWALAutoCheckpoint(): number;
                    public static getDefaultPageSize(): number;
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export module sqlcipher {
                export class SQLiteNotADatabaseException {
                    public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteNotADatabaseException>;
                    public constructor();
                    public constructor(error: string);
                    public constructor(error: string, cause: java.lang.Throwable);
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export module sqlcipher {
                export abstract class SQLiteOpenHelper {
                    public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteOpenHelper>;
                    public constructor(context: globalAndroid.content.Context, name: string, factory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, version: number, errorHandler: net.zetetic.database.DatabaseErrorHandler);
                    public getWritableDatabase(): net.zetetic.database.sqlcipher.SQLiteDatabase;
                    public getReadableDatabase(): net.zetetic.database.sqlcipher.SQLiteDatabase;
                    public onOpen(db: net.zetetic.database.sqlcipher.SQLiteDatabase): void;
                    public constructor(context: globalAndroid.content.Context, name: string, password: string, factory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, version: number, minimumSupportedVersion: number, errorHandler: net.zetetic.database.DatabaseErrorHandler, databaseHook: net.zetetic.database.sqlcipher.SQLiteDatabaseHook, enableWriteAheadLogging: boolean);
                    public onConfigure(db: net.zetetic.database.sqlcipher.SQLiteDatabase): void;
                    public constructor(context: globalAndroid.content.Context, name: string, factory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, version: number, minimumSupportedVersion: number, errorHandler: net.zetetic.database.DatabaseErrorHandler);
                    public constructor(context: globalAndroid.content.Context, name: string, factory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, version: number);
                    public close(): void;
                    public getDatabaseName(): string;
                    public onBeforeDelete(db: net.zetetic.database.sqlcipher.SQLiteDatabase): void;
                    public onDowngrade(db: net.zetetic.database.sqlcipher.SQLiteDatabase, oldVersion: number, newVersion: number): void;
                    public constructor(context: globalAndroid.content.Context, name: string, password: androidNative.Array<number>, factory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, version: number, minimumSupportedVersion: number, errorHandler: net.zetetic.database.DatabaseErrorHandler, databaseHook: net.zetetic.database.sqlcipher.SQLiteDatabaseHook, enableWriteAheadLogging: boolean);
                    public setWriteAheadLoggingEnabled(enabled: boolean): void;
                    public onCreate(param0: net.zetetic.database.sqlcipher.SQLiteDatabase): void;
                    public onUpgrade(param0: net.zetetic.database.sqlcipher.SQLiteDatabase, param1: number, param2: number): void;
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export module sqlcipher {
                export abstract class SQLiteProgram extends net.zetetic.database.sqlcipher.SQLiteClosable {
                    public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteProgram>;
                    public bindBlob(index: number, value: androidNative.Array<number>): void;
                    public bindAllArgsAsStrings(this_: androidNative.Array<string>): void;
                    /** @deprecated */
                    public getUniqueId(): number;
                    public getSession(): net.zetetic.database.sqlcipher.SQLiteSession;
                    public bindNull(index: number): void;
                    public getConnectionFlags(): number;
                    public bindLong(index: number, value: number): void;
                    public onAllReferencesReleased(): void;
                    public bindAllArgs(this_: androidNative.Array<any>): void;
                    public onCorruption(exception: globalAndroid.database.sqlite.SQLiteException): void;
                    public bindDouble(index: number, value: number): void;
                    public bindString(index: number, value: string): void;
                    public clearBindings(): void;
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export module sqlcipher {
                export class SQLiteQuery extends net.zetetic.database.sqlcipher.SQLiteProgram {
                    public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteQuery>;
                    public toString(): string;
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export module sqlcipher {
                export class SQLiteQueryBuilder {
                    public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteQueryBuilder>;
                    public getTables(): string;
                    public query(this_: net.zetetic.database.sqlcipher.SQLiteDatabase, db: androidNative.Array<string>, projectionIn: string, selection: androidNative.Array<string>, selectionArgs: string, groupBy: string, having: string, sortOrder: string, limit: globalAndroid.os.CancellationSignal): globalAndroid.database.Cursor;
                    public buildQuery(projectionIn: androidNative.Array<string>, selection: string, groupBy: string, having: string, sortOrder: string, limit: string): string;
                    /** @deprecated */
                    public buildUnionSubQuery(typeDiscriminatorColumn: string, unionColumns: androidNative.Array<string>, columnsPresentInTable: java.util.Set<string>, computedColumnsOffset: number, typeDiscriminatorValue: string, selection: string, selectionArgs: androidNative.Array<string>, groupBy: string, having: string): string;
                    public setCursorFactory(factory: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory): void;
                    public buildUnionQuery(this_: androidNative.Array<string>, subQueries: string, sortOrder: string): string;
                    public setProjectionMap(columnMap: java.util.Map<string, string>): void;
                    public appendWhereEscapeString(inWhere: string): void;
                    public setTables(inTables: string): void;
                    public constructor();
                    public static appendColumns(column: java.lang.StringBuilder, i: androidNative.Array<string>): void;
                    public setDistinct(distinct: boolean): void;
                    public query(db: net.zetetic.database.sqlcipher.SQLiteDatabase, projectionIn: androidNative.Array<string>, selection: string, selectionArgs: androidNative.Array<string>, groupBy: string, having: string, sortOrder: string): globalAndroid.database.Cursor;
                    public query(db: net.zetetic.database.sqlcipher.SQLiteDatabase, projectionIn: androidNative.Array<string>, selection: string, selectionArgs: androidNative.Array<string>, groupBy: string, having: string, sortOrder: string, limit: string): globalAndroid.database.Cursor;
                    public static buildQueryString(distinct: boolean, tables: string, columns: androidNative.Array<string>, where: string, groupBy: string, having: string, orderBy: string, limit: string): string;
                    /** @deprecated */
                    public buildQuery(projectionIn: androidNative.Array<string>, selection: string, selectionArgs: androidNative.Array<string>, groupBy: string, having: string, sortOrder: string, limit: string): string;
                    public appendWhere(inWhere: string): void;
                    public buildUnionSubQuery(i: string, this_: androidNative.Array<string>, typeDiscriminatorColumn: java.util.Set<string>, unionColumns: number, columnsPresentInTable: string, computedColumnsOffset: string, typeDiscriminatorValue: string, selection: string): string;
                    public setStrict(flag: boolean): void;
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export module sqlcipher {
                export class SQLiteSession {
                    public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteSession>;
                    public static TRANSACTION_MODE_DEFERRED: number = 0;
                    public static TRANSACTION_MODE_IMMEDIATE: number = 1;
                    public static TRANSACTION_MODE_EXCLUSIVE: number = 2;
                    public executeForChangedRowCount(sql: string, bindArgs: androidNative.Array<any>, connectionFlags: number, cancellationSignal: globalAndroid.os.CancellationSignal): number;
                    public executeRaw(sql: string, bindArgs: androidNative.Array<any>, connectionFlags: number, cancellationSignal: globalAndroid.os.CancellationSignal): void;
                    public constructor(connectionPool: net.zetetic.database.sqlcipher.SQLiteConnectionPool);
                    public executeForCursorWindow(sql: string, bindArgs: androidNative.Array<any>, window: net.zetetic.database.CursorWindow, startPos: number, requiredPos: number, countAllRows: boolean, connectionFlags: number, cancellationSignal: globalAndroid.os.CancellationSignal): number;
                    public hasConnection(): boolean;
                    public executeForString(sql: string, bindArgs: androidNative.Array<any>, connectionFlags: number, cancellationSignal: globalAndroid.os.CancellationSignal): string;
                    public prepare(sql: string, connectionFlags: number, cancellationSignal: globalAndroid.os.CancellationSignal, outStatementInfo: net.zetetic.database.sqlcipher.SQLiteStatementInfo): void;
                    public hasNestedTransaction(): boolean;
                    public executeForLastInsertedRowId(sql: string, bindArgs: androidNative.Array<any>, connectionFlags: number, cancellationSignal: globalAndroid.os.CancellationSignal): number;
                    public executeForLong(sql: string, bindArgs: androidNative.Array<any>, connectionFlags: number, cancellationSignal: globalAndroid.os.CancellationSignal): number;
                    public endTransaction(cancellationSignal: globalAndroid.os.CancellationSignal): void;
                    public yieldTransaction(sleepAfterYieldDelayMillis: number, throwIfUnsafe: boolean, cancellationSignal: globalAndroid.os.CancellationSignal): boolean;
                    public execute(sql: string, bindArgs: androidNative.Array<any>, connectionFlags: number, cancellationSignal: globalAndroid.os.CancellationSignal): void;
                    public beginTransaction(transactionMode: number, transactionListener: net.zetetic.database.sqlcipher.SQLiteTransactionListener, connectionFlags: number, cancellationSignal: globalAndroid.os.CancellationSignal): void;
                    public executeForBlobFileDescriptor(sql: string, bindArgs: androidNative.Array<any>, connectionFlags: number, cancellationSignal: globalAndroid.os.CancellationSignal): globalAndroid.os.ParcelFileDescriptor;
                    public hasTransaction(): boolean;
                    public setTransactionSuccessful(): void;
                }
                export module SQLiteSession {
                    export class Transaction {
                        public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteSession.Transaction>;
                        public mParent: net.zetetic.database.sqlcipher.SQLiteSession.Transaction;
                        public mMode: number;
                        public mListener: net.zetetic.database.sqlcipher.SQLiteTransactionListener;
                        public mMarkedSuccessful: boolean;
                        public mChildFailed: boolean;
                    }
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export module sqlcipher {
                export class SQLiteStatement extends net.zetetic.database.sqlcipher.SQLiteProgram {
                    public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteStatement>;
                    public toString(): string;
                    public executeInsert(): number;
                    public execute(): void;
                    public simpleQueryForString(): string;
                    public executeRaw(): void;
                    public simpleQueryForLong(): number;
                    public simpleQueryForBlobFileDescriptor(): globalAndroid.os.ParcelFileDescriptor;
                    public executeUpdateDelete(): number;
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export module sqlcipher {
                export class SQLiteStatementInfo {
                    public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteStatementInfo>;
                    public numParameters: number;
                    public columnNames: androidNative.Array<string>;
                    public readOnly: boolean;
                    public constructor();
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export module sqlcipher {
                export class SQLiteTransactionListener {
                    public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteTransactionListener>;
                    /**
                     * Constructs a new instance of the net.zetetic.database.sqlcipher.SQLiteTransactionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onBegin(): void;
                        onCommit(): void;
                        onRollback(): void;
                    });
                    public constructor();
                    public onRollback(): void;
                    public onBegin(): void;
                    public onCommit(): void;
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export module sqlcipher {
                export class SupportHelper {
                    public static class: java.lang.Class<net.zetetic.database.sqlcipher.SupportHelper>;
                    public close(): void;
                    public constructor(configuration: androidx.sqlite.db.SupportSQLiteOpenHelper.Configuration, password: androidNative.Array<number>, hook: net.zetetic.database.sqlcipher.SQLiteDatabaseHook, enableWriteAheadLogging: boolean);
                    public getDatabaseName(): string;
                    public setWriteAheadLoggingEnabled(enabled: boolean): void;
                    public getReadableDatabase(): androidx.sqlite.db.SupportSQLiteDatabase;
                    public constructor(configuration: androidx.sqlite.db.SupportSQLiteOpenHelper.Configuration, password: androidNative.Array<number>, hook: net.zetetic.database.sqlcipher.SQLiteDatabaseHook, enableWriteAheadLogging: boolean, minimumSupportedVersion: number);
                    public getWritableDatabase(): androidx.sqlite.db.SupportSQLiteDatabase;
                }
            }
        }
    }
}

declare module net {
    export module zetetic {
        export module database {
            export module sqlcipher {
                export class SupportOpenHelperFactory {
                    public static class: java.lang.Class<net.zetetic.database.sqlcipher.SupportOpenHelperFactory>;
                    public constructor(password: androidNative.Array<number>);
                    public constructor(password: androidNative.Array<number>, hook: net.zetetic.database.sqlcipher.SQLiteDatabaseHook, enableWriteAheadLogging: boolean, minimumSupportedVersion: number);
                    public create(configuration: androidx.sqlite.db.SupportSQLiteOpenHelper.Configuration): androidx.sqlite.db.SupportSQLiteOpenHelper;
                    public constructor(password: androidNative.Array<number>, hook: net.zetetic.database.sqlcipher.SQLiteDatabaseHook, enableWriteAheadLogging: boolean);
                }
            }
        }
    }
}

//Generics information:

