import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedCountryCode } from '@demo/shared';
import {} from '@wuilmerj24/country-code';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedCountryCode {}
