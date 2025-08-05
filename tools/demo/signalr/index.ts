import { TypeTransport } from '@wuilmerj24/signalr/enums/types_transport.enums';
import { DemoSharedBase } from '../utils';
import { Signalr } from '@wuilmerj24/signalr';

export class DemoSharedSignalr extends DemoSharedBase {

  signalR: Signalr;
  constructor() {
    super();
  }
  async conectar() {
    this.signalR = new Signalr();
    await this.signalR.create({
      url: 'http://192.168.1.100:5000/chat',
      shouldSkipNegotiate: false,
      headers: [{ name: 'Content-Type', value: 'application/json' }],
      transport: TypeTransport.WEBSOCKETS,
      reconnect: true,
    }).then((res) => {
      console.log(res)
      this.signalR.onClose(() => {
        console.log("Se desconecto");
      });
    }).catch((err) => {
      console.error(err)
    })
  }

  async desconectar() {
    await this.signalR.disconnect();
  }

  async getStaateConn() {
    alert(this.signalR.isConnected);
    console.log("id", this.signalR.conectionId());
  }

  async invoke() {
    this.signalR.emit('Broadcast', ["wuilmer", "Mensaje"]);
  }

  async ons() {
    this.signalR.on('NewMessage', (data) => {
      console.log(data);
    });
  }
}