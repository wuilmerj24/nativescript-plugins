import { Observable } from '@nativescript/core';

export abstract class ScreenProtectorCommon extends Observable {
    abstract lockScreenShoots():boolean;
    abstract unlockScreenShoots():boolean;
    abstract setScreenshootEvent(callback):void;
    abstract setScreenRecorderEvent(callback):void;
    abstract removeScreenShootObserver():boolean;
    abstract removeScreenRecorderObserver():boolean;
}
