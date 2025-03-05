import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'country-code', loadChildren: () => import('./plugin-demos/country-code.module').then((m) => m.CountryCodeModule) },
  { path: 'gallery-view', loadChildren: () => import('./plugin-demos/gallery-view.module').then((m) => m.GalleryViewModule) },
  { path: 'time-range', loadChildren: () => import('./plugin-demos/time-range.module').then((m) => m.TimeRangeModule) },
  { path: 'wj24secrets', loadChildren: () => import('./plugin-demos/wj24secrets.module').then((m) => m.Wj24secretsModule) },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
