import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { UrlPreview } from '@wuilmerj24/url-preview';

@NgModule()
export class NativeScriptUrlPreviewModule {}

// Uncomment this line if the package provides a custom view component
registerElement('UrlPreview', () => UrlPreview);
