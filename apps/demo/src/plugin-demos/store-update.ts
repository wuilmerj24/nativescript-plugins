import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedStoreUpdate } from '@demo/shared';
import { } from '@wuilmerj24/store-update';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedStoreUpdate {
	
}
