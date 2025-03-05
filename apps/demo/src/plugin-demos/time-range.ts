import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedTimeRange } from '@demo/shared';
import { TimeRange } from '@wuilmerj24/time-range';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export function onDrag(args) {
  console.log(args.data);
}

export class DemoModel extends DemoSharedTimeRange {}
