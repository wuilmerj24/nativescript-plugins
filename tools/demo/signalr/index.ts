import { TypeTransport } from '@wuilmerj24/signalr/enums/typetransport';
import { DemoSharedBase } from '../utils';
import { Signalr } from '@wuilmerj24/signalr';
import { Utils } from '@nativescript/core';

export class DemoSharedSignalr extends DemoSharedBase {
  signalr: Signalr;
  constructor() {
    super();
    this.signalr = new Signalr({
      url: 'http://192.168.18.8:5000/chat',
      reconnect: true,
      transport: TypeTransport.WEBSOCKETS,
      shouldSkipNegotiate: false,
    });
  }
  async conectar() {
    this.signalr.onClose((p) => {
      console.log('onClose ', p);
    });
    this.signalr.onReconnected((p) => {
      console.log('onReconnected ', p);
    });
    await this.signalr.start();
  }

  getID() {
    const id = this.signalr.getId();
    console.log(id);
  }

  async getState() {
    const state = await this.signalr.getConnState();
    console.log(state);
  }

  async stop() {
    await this.signalr.stop();
  }

  async invoke() {
    const batch = {
      messages: [
        { sender: 'wuilmerj24', message: 'Hola' },
        { sender: 'user2', message: 'Hi' },
      ],
    };
    const payload = [
      { sender: 'wuilmerj24', message: 'Hola' },
      { sender: 'user2', message: 'Hi', otro: 's' },
    ];
    // await this.signalr.invoke("Broadcast", batch);
    await this.signalr.invoke('BroadcastObject', payload);
  }

  async setOn() {
    console.log('evento: OnObjectArray');
    await this.signalr.on('OnObjectArray', (params) => {
      console.log('evento OnObjectArray', params[0].sender);
    });
  }
}
