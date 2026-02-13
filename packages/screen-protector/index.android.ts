import { Application, Utils } from '@nativescript/core';
import { ScreenProtectorCommon } from './common';

export class ScreenProtector extends ScreenProtectorCommon {
  setScreenshootEvent(callback: any): void {
    console.log('Only for iOS');
  }
  setScreenRecorderEvent(callback: any): void {
    console.log;
  }
  removeScreenShootObserver(): boolean {
    console.log('Only for iOS');
    return false;
  }
  removeScreenRecorderObserver(): boolean {
    console.log('Only for iOS');
    return false;
  }
  private isSecureModeEnabled = false;
  private lifecycleCallbacks: android.app.Application.ActivityLifecycleCallbacks | null = null;

  lockScreenShoots(): boolean {
    try {
      this.isSecureModeEnabled = true;
      this.applySecureFlagToCurrentActivity(true);
      this.setupLifecycleObserver();
      return true;
    } catch (error) {
      console.error('[ScreenProtector] Error locking:', error);
      return false;
    }
  }

  /**
   * Desactiva la protección y remueve los observadores de ciclo de vida.
   */
  unlockScreenShoots(): boolean {
    try {
      this.isSecureModeEnabled = false;
      this.applySecureFlagToCurrentActivity(false);
      this.removeLifecycleObserver();
      return true;
    } catch (error) {
      console.error('[ScreenProtector] Error unlocking:', error);
      return false;
    }
  }

  private applySecureFlagToCurrentActivity(enable: boolean): void {
    const activity = Application.android.foregroundActivity || Application.android.startActivity;
    if (activity && activity.getWindow()) {
      const window = activity.getWindow();
      if (enable) {
        window.addFlags(android.view.WindowManager.LayoutParams.FLAG_SECURE);
      } else {
        window.clearFlags(android.view.WindowManager.LayoutParams.FLAG_SECURE);
      }
    }
  }

  private setupLifecycleObserver(): void {
    if (this.lifecycleCallbacks) return;

    const context = Utils.android.getApplicationContext() as android.app.Application;
    this.lifecycleCallbacks = new android.app.Application.ActivityLifecycleCallbacks({
      onActivityCreated(param0, param1) {
        if (this.isSecureModeEnabled) {
          param0.getWindow().addFlags(android.view.WindowManager.LayoutParams.FLAG_SECURE);
        }
      },
      onActivityDestroyed(param0) {},
      onActivityPaused(param0) {},
      onActivityPostCreated(activity, savedInstanceState) {},
      onActivityPostDestroyed(activity) {},
      onActivityPostPaused(activity) {},
      onActivityPostResumed(activity) {},
      onActivityPostSaveInstanceState(activity, outState) {},
      onActivityPostStarted(activity) {},
      onActivityPostStopped(activity) {},
      onActivityPreCreated(activity, savedInstanceState) {},
      onActivityPreDestroyed(activity) {},
      onActivityPrePaused(activity) {},
      onActivityPreResumed(activity) {},
      onActivityPreSaveInstanceState(activity, outState) {},
      onActivityPreStarted(activity) {},
      onActivityPreStopped(activity) {},
      onActivityResumed(param0) {
        if (this.isSecureModeEnabled) {
          param0.getWindow().addFlags(android.view.WindowManager.LayoutParams.FLAG_SECURE);
        }
      },
      onActivitySaveInstanceState(param0, param1) {},
      onActivityStarted(param0) {},
      onActivityStopped(param0) {},
    });

    context.registerActivityLifecycleCallbacks(this.lifecycleCallbacks);
  }

  private removeLifecycleObserver(): void {
    if (this.lifecycleCallbacks) {
      const context = Utils.android.getApplicationContext() as android.app.Application;
      context.unregisterActivityLifecycleCallbacks(this.lifecycleCallbacks);
      this.lifecycleCallbacks = null;
    }
  }
}
