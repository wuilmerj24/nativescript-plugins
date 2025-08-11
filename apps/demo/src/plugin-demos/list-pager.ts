import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedListPager } from '@demo/shared';
import {ListPager } from '@wuilmerj24/list-pager';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedListPager {
	
}
