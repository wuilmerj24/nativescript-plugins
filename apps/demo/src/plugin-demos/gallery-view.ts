import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedGalleryView } from '@demo/shared';
import { GalleryView, GalleryViewLoadedEvent, OnClickedEvent, OnScrolledEvent } from '@wuilmerj24/gallery-view';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
  // page.actionBarHidden=true;
}

export function onLoad(args: GalleryViewLoadedEvent) {
  console.log('load ');
}

export function onError(args: ErrorEvent) {
  console.log('error ');
}

export function onClick(args: OnClickedEvent) {
  console.log('click ', JSON.stringify(args.data));
}

export function onScroll(args: OnScrolledEvent) {
  console.log('scroll ', JSON.stringify(args.dx));
}

export class DemoModel extends DemoSharedGalleryView {}
