import { DemoSharedBase } from '../utils';
import { getCurrentPais, showListPaises } from '@wuilmerj24/country-code';

export class DemoSharedCountryCode extends DemoSharedBase {
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
  testIt() {
    console.log('test country-code!');
  }
}