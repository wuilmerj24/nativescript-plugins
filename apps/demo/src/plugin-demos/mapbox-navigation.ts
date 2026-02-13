import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedMapboxNavigation } from '@demo/shared';
import {} from '@wuilmerj24/mapbox-navigation';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
  page.actionBarHidden = true;
}

export class DemoModel extends DemoSharedMapboxNavigation {}
