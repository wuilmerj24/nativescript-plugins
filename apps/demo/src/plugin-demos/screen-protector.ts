import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedScreenProtector } from '@demo/shared';
import { } from '@wuilmerj24/screen-protector';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedScreenProtector {
	
}
