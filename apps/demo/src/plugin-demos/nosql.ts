import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNosql } from '@demo/shared';
import { } from '@wuilmerj24/nosql';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNosql {
	
}
