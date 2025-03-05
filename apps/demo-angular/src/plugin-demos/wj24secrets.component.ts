import { Component, NgZone } from '@angular/core';
import { DemoSharedWj24secrets } from '@demo/shared';
import { Wj24secrets } from '@wuilmerj24/wj24secrets';

@Component({
  selector: 'demo-wj24secrets',
  templateUrl: 'wj24secrets.component.html',
})
export class Wj24secretsComponent {
  demoShared: DemoSharedWj24secrets;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedWj24secrets();
  }
}
