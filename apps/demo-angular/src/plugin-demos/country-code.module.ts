import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { CountryCodeComponent } from './country-code.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: CountryCodeComponent }])],
  declarations: [CountryCodeComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CountryCodeModule {}
