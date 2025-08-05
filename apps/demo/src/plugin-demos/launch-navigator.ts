import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedLaunchNavigator } from '@demo/shared';
import { } from '@wuilmerj24/launch-navigator';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedLaunchNavigator {
	
}
