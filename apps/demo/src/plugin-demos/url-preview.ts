import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedUrlPreview } from '@demo/shared';
import { } from '@wuilmerj24/url-preview';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedUrlPreview {
	
}
