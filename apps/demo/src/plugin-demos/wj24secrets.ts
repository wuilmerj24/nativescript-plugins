import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedWj24secrets } from '@demo/shared';
import { Wj24secrets } from '@wuilmerj24/wj24secrets';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedWj24secrets {}
