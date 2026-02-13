import { Application } from '@nativescript/core';
import { TOrientation, ScreenOrientationCommon } from './common';

export class ScreenOrientation extends ScreenOrientationCommon {
  lock(orientation: TOrientation): void {
    const activity = Application.android.foregroundActivity || Application.android.startActivity;

    if (!activity) return;

    switch (orientation) {
      case 'portrait':
        activity.setRequestedOrientation(android.content.pm.ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
        break;

      case 'portraitUpsideDown':
        activity.setRequestedOrientation(android.content.pm.ActivityInfo.SCREEN_ORIENTATION_REVERSE_PORTRAIT);
        break;

      case 'landscape':
        activity.setRequestedOrientation(android.content.pm.ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);
        break;

      case 'landscapeLeft':
        activity.setRequestedOrientation(android.content.pm.ActivityInfo.SCREEN_ORIENTATION_REVERSE_LANDSCAPE);
        break;

      case 'landscapeRight':
        activity.setRequestedOrientation(android.content.pm.ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);
        break;

      default:
        this.unlock();
    }
  }
  unlock(): void {
    const activity = Application.android.foregroundActivity || Application.android.startActivity;

    activity?.setRequestedOrientation(android.content.pm.ActivityInfo.SCREEN_ORIENTATION_UNSPECIFIED);
  }

  getOrientation(): TOrientation {
    const wm = Application.android.context.getSystemService(android.content.Context.WINDOW_SERVICE) as android.view.WindowManager;

    const rotation = wm.getDefaultDisplay().getRotation();

    switch (rotation) {
      case android.view.Surface.ROTATION_0:
        return 'portrait';

      case android.view.Surface.ROTATION_180:
        return 'portraitUpsideDown';

      case android.view.Surface.ROTATION_90:
        return 'landscapeRight';

      case android.view.Surface.ROTATION_270:
        return 'landscapeLeft';

      default:
        return 'unknown';
    }
  }
}
