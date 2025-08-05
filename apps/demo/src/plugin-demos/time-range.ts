import { Observable, EventData, Page, StackLayout, Utils } from '@nativescript/core';
import { DemoSharedTimeRange } from '@demo/shared';
import { TimeRange } from '@wuilmerj24/time-range';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedTimeRange {
	
}
