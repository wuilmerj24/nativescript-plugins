import { Application, Observable } from '@nativescript/core';

export type TOrientation = 'portrait' | 'landscape' | 'portraitUpsideDown' | 'landscapeLeft' | 'landscapeRight' | 'unknown';

export interface OrientationChangeEvent {
  oldOrientation: TOrientation;
  newOrientation: TOrientation;
}

export abstract class ScreenOrientationCommon extends Observable {
  protected _currentOrientation: TOrientation = 'unknown';
  private _listening = false;

  get currentOrientation(): TOrientation {
    return this._currentOrientation;
  }

  protected normalizeOrientation(value: string): TOrientation {
    if (value === 'portrait') return 'portrait';
    if (value === 'landscape') return 'landscape';
    return 'unknown';
  }

  startMonitoring(cb: (orientation: TOrientation) => void): void {
    if (this._listening) return;
    this._listening = true;

    this._currentOrientation = this.getOrientation();

    Application.on(Application.orientationChangedEvent, (args) => {
      const newOrientation = this.normalizeOrientation(args.newValue);
      const oldOrientation = this._currentOrientation;

      if (newOrientation !== oldOrientation) {
        this._currentOrientation = newOrientation;

        cb(newOrientation);
      }
    });
  }

  stopMonitoring(): void {
    if (!this._listening) return;
    this._listening = false;

    Application.off(Application.orientationChangedEvent);
  }

  abstract lock(orientation: TOrientation): void;
  abstract unlock(): void;
  abstract getOrientation(): TOrientation;
}
