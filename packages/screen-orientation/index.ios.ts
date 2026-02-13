import { Application, Utils } from '@nativescript/core';
import { ScreenOrientationCommon, TOrientation } from './common';

export class ScreenOrientation extends ScreenOrientationCommon {
  private nscswiftOrientation: NSCSwiftOrientation;
  constructor() {
    super();
    Utils.setTimeout(() => {
      this.nscswiftOrientation = NSCSwiftOrientation.alloc().init();
    }, 1000);
  }

  lock(orientation: TOrientation): void {
    let value: number | null = null;
    switch (orientation) {
      case 'portrait':
        value = UIInterfaceOrientation.Portrait;
        this.nscswiftOrientation.changeRotationWithRotation(UIInterfaceOrientationMask.Portrait);
        break;

      case 'portraitUpsideDown':
        value = UIInterfaceOrientation.PortraitUpsideDown;
        this.nscswiftOrientation.changeRotationWithRotation(UIInterfaceOrientationMask.PortraitUpsideDown);
        break;

      case 'landscapeLeft':
        value = UIInterfaceOrientation.LandscapeLeft;
        this.nscswiftOrientation.changeRotationWithRotation(UIInterfaceOrientationMask.LandscapeLeft);
        break;

      case 'landscapeRight':
      case 'landscape':
        value = UIInterfaceOrientation.LandscapeRight;
        this.nscswiftOrientation.changeRotationWithRotation(UIInterfaceOrientationMask.LandscapeRight);
        break;
    }
  }

  unlock(): void {
    UIDevice.currentDevice.setValueForKey(NSNumber.numberWithInt(UIInterfaceOrientation.Unknown), 'orientation');
  }

  getOrientation(): TOrientation {
    const orientation = UIDevice.currentDevice.orientation;
    console.log('Current orientation:', orientation);
    switch (orientation) {
      case UIDeviceOrientation.Portrait:
        return 'portrait';

      case UIDeviceOrientation.PortraitUpsideDown:
        return 'portraitUpsideDown';

      case UIDeviceOrientation.LandscapeLeft:
        return 'landscapeLeft';

      case UIDeviceOrientation.LandscapeRight:
        return 'landscapeRight';

      default:
        return 'unknown';
    }
  }
}
