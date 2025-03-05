import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { Wj24secretsComponent } from './wj24secrets.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: Wj24secretsComponent }])],
  declarations: [Wj24secretsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class Wj24secretsModule {}
