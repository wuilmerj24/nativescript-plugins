import { Observable } from '@nativescript/core';

export class SqliteSecureCommon{
    constructor(public dbname: string, public password?: string, public version?: number) {}
}
