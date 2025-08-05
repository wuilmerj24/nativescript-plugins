import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { GalleryView } from '@wuilmerj24/gallery-view';

@NgModule()
export class NativeScriptGalleryViewModule {}

// Uncomment this line if the package provides a custom view component
registerElement('GalleryView', () => GalleryView);
