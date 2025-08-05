import { Observable } from '@nativescript/core';
import { EStateConn } from './enums/states_conn.enums';
import { OptionsConnect } from './interfaces/conn_options.interface';

export abstract class SignalrCommon {
    protected abstract signalr: any;
    isConnected: EStateConn;
    abstract create(options: OptionsConnect): Promise<any>;
    abstract disconnect(): void;
    abstract conectionId(): string;
    abstract emit(event: string, payload: any[]): void;
    abstract on(event: string, callback: (...payload) => void): void;
    abstract off(event: string): void;
    abstract onClose(callback: () => void): () => void;
}