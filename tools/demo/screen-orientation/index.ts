import { action } from '@nativescript/core';
import { DemoSharedBase } from '../utils';
import { ScreenOrientation } from '@wuilmerj24/screen-orientation';
import { TOrientation } from '@wuilmerj24/screen-orientation/common';

export class DemoSharedScreenOrientation extends DemoSharedBase {
  private screenOrientation: ScreenOrientation;

  constructor() {
    super();
    this.screenOrientation = new ScreenOrientation();
    this.screenOrientation.startMonitoring((orientation: TOrientation) => {
      console.log('Orientation changed to:', orientation);
    });
  }

  getOrientacion() {
    const orientation = this.screenOrientation.getOrientation();
    console.log('Current Orientation:', orientation);
  }

  changeOrientacion() {
    action({
      message: 'Select Orientation',
      cancelButtonText: 'Cancel',
      actions: ['portrait', 'landscape', 'portraitUpsideDown', 'landscapeLeft', 'landscapeRight', 'unlock'],
    }).then((result) => {
      console.log('Selected Orientation:', result);
      if (result) {
        this.screenOrientation.lock(result as any);
      }
    });
  }
}
