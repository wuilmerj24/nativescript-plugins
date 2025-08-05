import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedSqliteSecure } from '@demo/shared';
import { } from '@wuilmerj24/sqlite-secure';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedSqliteSecure {
	
}
