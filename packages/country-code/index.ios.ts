import { Button, GridLayout, GridUnitType, ItemEventData, ItemSpec, ListView, ShowModalOptions, TextView, getCurrentPage } from '@nativescript/core/ui';
import { Codigos, CodigosI, Lista } from './common';
import { Color, EventData, Screen } from '@nativescript/core';

let codigos: Array<any> = new Array();

export function getCurrentPais(addPlus: boolean): Promise<any> {
  return new Promise(async (rs, rj) => {
    try {
      let countryCode: any = Codigos.filter((item) => item.iso2 === NSLocale.currentLocale.countryCode);
      rs({ pais: countryCode[0].name, codigo: addPlus ? `+${countryCode[0].codigo}` : countryCode[0].codigo });
    } catch (error) {
      console.log('err ', error);
      rj({ error: error });
    }
  });
}
export let listaCodigos: Array<CodigosI> = Codigos;

export function showListPaises(): Promise<any> {
  return new Promise((rs, rj) => {
    const options: ShowModalOptions = {
      closeCallback(...args) {
        if (args.length > 0) {
          rs(args);
        } else {
          rj(null);
        }
      },
      context: {},
      animated: true,
      fullscreen: true,
      stretched: true,
    };
    getCurrentPage().showModal(new Lista(), options);
  });
}
