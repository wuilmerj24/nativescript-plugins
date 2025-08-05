import { DemoSharedBase } from '../utils';
import { StoreUpdate } from '@wuilmerj24/store-update';

export class DemoSharedStoreUpdate extends DemoSharedBase {

  store: StoreUpdate = new StoreUpdate();
  async testIt() {
    console.log('appid version ', this.store.getAppId());
    console.log('local version ', this.store.getLocalVersion());
    console.log('nube version ', await this.store.getNubeVersion());

  }

  actualizar() {
    this.store.updateApp(true, "Update", "Cancel", "Need update app", true, "red", "green", "yellow", "blue");
  }

  nativeupdate() {
    this.store.checkUpdateNative();
  }
}