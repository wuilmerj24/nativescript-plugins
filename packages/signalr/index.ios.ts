import { Utils } from '@nativescript/core';
import { SignalrCommon } from './common';
import { SignalROptions } from './interfaces/signalroptions';
import { SignalrState } from './types/signalrstates';
import { TypeTransport } from './enums/typetransport';

export class Signalr extends SignalrCommon {
  private signalrWrapper: NSCSwiftSignalrWrapper;
  constructor(options: SignalROptions) {
    super(options);

    this.signalrWrapper = NSCSwiftSignalrWrapper.alloc().init();

    if (options.accessToken) {
      this.signalrWrapper.setAccessToken(options.accessToken);
    }

    if (options.shouldSkipNegotiate) {
      this.signalrWrapper.setSkipNegotiation(options.shouldSkipNegotiate ? 1 : 0);
    }

    if (options.handshakeResponseTimeout) {
      this.signalrWrapper.setHandshakeResponseTime(options.handshakeResponseTimeout);
    }

    if (options.keepAliveInterval) {
      this.signalrWrapper.setKeepAliveInterval(options.keepAliveInterval);
    }

    if (options.serverTimeout) {
      this.signalrWrapper.setServerTimeout(options.serverTimeout);
    }

    let transport = 3;
    if (options.transport) {
      if (options.transport == TypeTransport.ALL) {
        transport = 2;
      } else if (options.transport == TypeTransport.LONG_POLLING) {
        transport = 1;
      } else {
        transport = 3;
      }
    }
    this.signalrWrapper.setTransport(transport);

    if (options.reconnect) {
      this.signalrWrapper.setReconnect(options.reconnect ? 1 : 0);
    }
    if (options.url) {
      this.signalrWrapper.setUrl(options.url);
      this.signalrWrapper.initConnection();
    } else {
      console.log('Url not set');
    }
  }

  start(): Promise<void> {
    return new Promise((rs, rj) => {
      this.signalrWrapper.start((p1?: number, p2?: NSError) => {
        if (p2) {
          console.log(p2.localizedDescription);
          rj(p2.localizedDescription);
        }

        rs();
      });
    });
  }

  stop(): Promise<boolean> {
    return new Promise((rs, rj) => {
      this.signalrWrapper.stop((p1: number, p2: NSError) => {
        if (p2) {
          console.log('error in stop ', p2.localizedDescription);
          rj(p2.localizedDescription);
        }

        rs(true);
      });
    });
  }

  invoke(method: string, args: any[]): Promise<any> {
    return new Promise((rs, rj) => {
      this.signalrWrapper.invokeWithMethodData(method, args, (p1, p2) => {
        if (p2) {
          console.log(p2.localizedDescription);
          rj(p2.localizedDescription);
        }

        console.log(p1);
        rs(p1);
      });
    });
  }
  on(method: string, callback: (...args: any[]) => void): void {
    this.signalrWrapper.onMethod(method, (p1, p2) => {
      if (p2) {
        console.log(p2.localizedDescription);
      }
      console.log('evento ', p1);
      callback(JSON.parse(p1));
    });
  }
  off(method: string): void {
    this.signalrWrapper.offWithMethod(method, (p1, p2) => {
      if (p2) {
        console.log(p2.localizedDescription);
      }
      console.log(p1);
    });
  }
  getId(): string {
    throw new Error('In Construction .');
  }

  private getStateAsync(): Promise<any> {
    return new Promise((rs, rj) => {
      try {
        this.signalrWrapper.getConnState((p1) => {
          rs(p1);
        });
      } catch (error) {
        rj(error);
      }
    });
  }
  async getConnState(): Promise<SignalrState> {
    const state = await this.getStateAsync();

    switch (state) {
      case 'CONNECTING':
        return 'CONNECTING';
      case 'CONNECTED':
        return 'CONNECTED';
      case 'RECONNECTING':
        return 'RECONNECTING';
      default:
        return 'DISCONNECTED';
    }
  }

  onClose(callback: (param: string) => void): void {
    this.signalrWrapper.onClose((p1) => {
      console.log('onClose', p1);
      callback(p1);
    });
  }

  onReconnecting(callback: (param: string) => void): void {
    this.signalrWrapper.onReconnecting((p1) => {
      console.log('onReconnecting ', p1);
      callback(p1);
    });
  }

  onReconnected(callback: (param: string) => void): void {
    this.signalrWrapper.onReconnected((p1) => {
      console.log('onReconnected ', p1);
      callback(p1);
    });
  }
}
