import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedScreenOrientation } from '@demo/shared';
import { } from '@wuilmerj24/screen-orientation';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedScreenOrientation {
	
}
