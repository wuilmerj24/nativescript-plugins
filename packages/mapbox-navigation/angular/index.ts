import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { MapboxNavigation } from '@wuilmerj24/mapbox-navigation';

@NgModule()
export class NativeScriptMapboxNavigationModule {}

// Uncomment this line if the package provides a custom view component
registerElement('MapboxNavigation', () => MapboxNavigation);
