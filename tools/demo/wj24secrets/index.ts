import { DemoSharedBase } from '../utils';
import { Wj24secrets } from '@wuilmerj24/wj24secrets';

export class DemoSharedWj24secrets extends DemoSharedBase {
  wj24secrets: Wj24secrets;
  constructor() {
    super();
    this.wj24secrets = new Wj24secrets('test', true);
  }
  testIt() {
    console.log('test wj24secrets!');
  }

  iniciar() {
    console.log('iniciar');
    this.wj24secrets.initSDK();
  }

  buscar() {
    console.log('buscar');
    let variable = this.wj24secrets.searchVar('CLIENT_ID', 0);
    console.log('buscar:', variable.trim());
  }
}
