import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedCountryCode } from '@demo/shared';
import { getCurrentPais, showListPaises } from '@wuilmerj24/country-code';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export function getPais(args: EventData) {
  getCurrentPais(true)
    .then((res) => {
      console.log('res', res);
    })
    .catch((er) => {
      console.log('er', er);
    });
}

export function showLis(args: EventData) {
  showListPaises()
    .then((res) => {
      console.log('res', res);
    })
    .catch((er) => {
      console.log('er', er);
    });
}

export class DemoModel extends DemoSharedCountryCode {}
