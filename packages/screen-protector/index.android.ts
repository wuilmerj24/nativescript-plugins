import { Application } from '@nativescript/core';
import { ScreenProtectorCommon } from './common';

export class ScreenProtector extends ScreenProtectorCommon {
    lockScreenShoots(): boolean {
        try {
            const activity = Application.android.foregroundActivity || Application.android.startActivity;
            activity.getWindow().addFlags(android.view.WindowManager.LayoutParams.FLAG_SECURE);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    unlockScreenShoots(): boolean {
        try {
            const activity = Application.android.foregroundActivity || Application.android.startActivity;
            activity.getWindow().clearFlags(android.view.WindowManager.LayoutParams.FLAG_SECURE);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    setScreenshootEvent(callback: any): void {
        console.log("Only for iOS")
    }
    setScreenRecorderEvent(callback: any): void {
        console.log("Only for iOS")
    }
    removeScreenShootObserver(): boolean {
        console.log("Only for iOS")
        return false;
    }
    removeScreenRecorderObserver(): boolean {
        console.log("Only for iOS")
        return false;
    }

}
