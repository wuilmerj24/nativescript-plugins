import { Component, NgZone } from '@angular/core';
import { DemoSharedGalleryView } from '@demo/shared';
import {} from '@wuilmerj24/gallery-view';

@Component({
  selector: 'demo-gallery-view',
  templateUrl: 'gallery-view.component.html',
})
export class GalleryViewComponent {
  demoShared: DemoSharedGalleryView;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedGalleryView();
  }
}
