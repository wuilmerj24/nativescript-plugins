import { DemoSharedBase } from '../utils';
import { showListPaises, getCurrentPais } from '@wuilmerj24/country-code';

export class DemoSharedCountryCode extends DemoSharedBase {
  testIt() {
    console.log('test country-code!');
  }

  openModal() {
    showListPaises()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getPais() {
    getCurrentPais(true)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
