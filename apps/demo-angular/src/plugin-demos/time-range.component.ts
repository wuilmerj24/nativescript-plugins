import { Component, NgZone } from '@angular/core';
import { DemoSharedTimeRange } from '@demo/shared';
import {} from '@wuilmerj24/time-range';

@Component({
  selector: 'demo-time-range',
  templateUrl: 'time-range.component.html',
})
export class TimeRangeComponent {
  demoShared: DemoSharedTimeRange;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedTimeRange();
  }
}
