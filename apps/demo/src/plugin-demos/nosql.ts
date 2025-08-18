import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNosql } from '@demo/shared';
import { Nosql } from '@wuilmerj24/nosql';
import { check as checkPermission, request as requestPermission } from '@nativescript-community/perms';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNosql {}
