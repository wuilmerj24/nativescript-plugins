import { DemoSharedBase } from '../utils';
import { StoreUpdate, UpdateOptions } from '@wuilmerj24/store-update';

export class DemoSharedStoreUpdate extends DemoSharedBase {
  private storeUpdate: StoreUpdate;
  async testIt() {
    this.storeUpdate = new StoreUpdate({
      // __debugForceUpdate:true,
      forceUpdate: true,
      message: 'MESSA',
      titleButton: 'TITULO',
      buttonColor: 'red',
      messageColor: 'blue',
      screenBackgroundColor: 'green',
      titleButtonColor: 'yellow',
    });
    const data = await this.storeUpdate.checkUpdate();
  }

  async updateAndroid() {
    if (__ANDROID__) {
      console.log('is android');
      const d = await this.storeUpdate.updateInApp();
      console.log(d);
    }
  }
}
