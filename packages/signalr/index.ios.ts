import { Utils } from '@nativescript/core';
import { SignalrCommon } from './common';
import { EStateConn } from './enums/states_conn.enums';
import { OptionsConnect } from './interfaces/conn_options.interface';

export class Signalr extends SignalrCommon {
  protected signalr: any;
  isConnected: EStateConn;
  private signalrController: SignalrForNs;
  async create(options: OptionsConnect): Promise<any> {
    return new Promise(async (rs, rj) => {
      this.isConnected = EStateConn.CONNECTING;
      this.signalrController = new SignalrForNs({
        url: options.url,
        accessToken: options.accessToken,
        shouldSkipNegotiate: options.shouldSkipNegotiate,
        headers: options.headers,
        handshakeResponseTimeout: options.handshakeResponseTimeout,
        keepAliveInterval: options.keepAliveInterval,
        serverTimeout: options.serverTimeout,
        transport: options.transport,
        reconnect: options.reconnect,
      });

      this.signalrController.startConn();
      this.signalrController.onInitCallBack = (p1: string, p2: any) => {
        if (p1 == 'connectionDidFailToOpenHandler') {
          this.isConnected = EStateConn.DISCONNECTED;

          rj(p2);
        } else if (p1 == 'connectionDidOpenHandler') {
          this.isConnected = EStateConn.CONNECTED;
          console.log(this.signalrController.getIdConn());
          rs(this.signalrController);
        }
      };
    });
  }

  disconnect(): void {
    if ((this.signalrController != null || this.signalrController != undefined) && this.isConnected == EStateConn.CONNECTED) {
      if (this.signalrController.disconnect()) {
        this.isConnected = EStateConn.DISCONNECTED;
      }
    }
  }

  conectionId() {
    if (this.isConnected) {
      return this.signalrController.getIdConn();
    }
  }

  on(event: string, callback: (...payload: any[]) => void): () => void {
    if (this.signalrController != null || this.signalrController != undefined) {
      this.signalrController.setOnEventoWithEventNameCompletion(event, (data: any) => {
        const datos = Utils.dataDeserialize(data);
        callback(datos);
      });

      return () => {
        // @ts-ignore
      };
    }
  }

  emit(event: string, ...payload: any[]): void {
    if (this.signalrController != null || this.signalrController != undefined) {
      this.signalrController.setSendWithEventNameDataCompletion(event, payload,(p1:any)=>{});
    }
  }

  off(event: string): void {
    if (this.signalrController != null || this.signalrController != undefined) {
    }
  }

  onClose(callback: () => void): () => void {
    return () => {

    }
  }
}
