import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { TimeRangeComponent } from './time-range.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: TimeRangeComponent }])],
  declarations: [TimeRangeComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TimeRangeModule {}
