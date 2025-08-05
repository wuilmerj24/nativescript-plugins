import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedSignalr } from '@demo/shared';
import { } from '@wuilmerj24/signalr';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedSignalr {
	
}
