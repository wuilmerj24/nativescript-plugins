import { DemoSharedBase } from '../utils';
import { GalleryViewLoadedEvent, OnClickedEvent, OnScrolledEvent } from '@wuilmerj24/gallery-view';

export class DemoSharedGalleryView extends DemoSharedBase {

onLoad(args: GalleryViewLoadedEvent) {
  console.log('load ');
}

onError(args: ErrorEvent) {
  console.log('error ');
}

onClick(args: OnClickedEvent) {
  console.log('click ', JSON.stringify(args.data));
}

onScroll(args: OnScrolledEvent) {
  console.log('scroll ', JSON.stringify(args.dx));
}
  testIt() {
    console.log('test gallery-view!');
  }
}