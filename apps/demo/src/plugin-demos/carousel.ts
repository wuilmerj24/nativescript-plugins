import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedCarousel } from '@demo/shared';
import { Carousel} from '@wuilmerj24/carousel';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
	
}

export class DemoModel extends DemoSharedCarousel {
	
}
