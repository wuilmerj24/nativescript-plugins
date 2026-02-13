import { ContentView } from '@nativescript/core';
import { knownFolders, path as nsPath } from '@nativescript/core';
import { EMapboxNavigationEvents } from './events';
import { IWayPoint } from '.';

export type NavigationProfile = 'driving' | 'driving-traffic' | 'walking' | 'cycling';

export class MapboxNavigationCommon extends ContentView {
  public static errorEvent = EMapboxNavigationEvents.ErrorEvent;
  public static onLocationChanged = EMapboxNavigationEvents.OnLocationChanged;
  public static onRouteProgress = EMapboxNavigationEvents.OnRouteProgress;
  public static onRouteCanceled = EMapboxNavigationEvents.OnRouteCanceled;
  public static onRoutesReady = EMapboxNavigationEvents.OnRoutesReady;
  public static onRouteFailed = EMapboxNavigationEvents.OnRouteFailed;
  public static onRouteRequestStarted = EMapboxNavigationEvents.OnRouteRequestStarted;

  @GetSetProperty()
  accessToken: string = '';
  @GetSetProperty()
  waypoints: Array<IWayPoint> = new Array<IWayPoint>();
  @GetSetProperty()
  lang: string = 'es';
  @GetSetProperty()
  simulate: boolean = false;
  @GetSetProperty()
  enableSensors: boolean = true;
  @GetSetProperty()
  steps: boolean = true;
  @GetSetProperty()
  profile: NavigationProfile = 'driving';
  @GetSetProperty()
  alternatives: boolean = true;
  @GetSetProperty()
  voiceInstructions: boolean = true;
  @GetSetProperty()
  enableRefresh: boolean = true;
  @GetSetProperty()
  bannerInstructions: boolean = true;

  public sendEvent(eventName: string, data?: any, msg?: string, dx?: number, dy?: number) {
    this.notify({
      eventName,
      object: this,
      data,
      dx: dx,
      dy: dy,
      message: msg,
    });
  }

  resolveNavigationProfile(profile: string): any {
    const normalized = profile?.toLowerCase?.() ?? 'driving';

    // ---------- ANDROID ----------
    if (__ANDROID__) {
      switch (normalized) {
        case 'driving-traffic':
          return 'mapbox/driving-traffic';

        case 'walking':
          return 'mapbox/walking';

        case 'cycling':
          return 'mapbox/cycling';

        case 'driving':
        default:
          return 'mapbox/driving';
      }
    }

    // ---------- iOS ----------
    if (__IOS__) {
      /*
              ProfileIdentifier enum (Swift):
        
              automobile = 0
              automobileAvoidingTraffic = 1
              cycling = 2
              walking = 3
            */

      let enumValue: number;

      switch (normalized) {
        case 'driving-traffic':
          enumValue = 1; // automobileAvoidingTraffic
          break;

        case 'cycling':
          enumValue = 2;
          break;

        case 'walking':
          enumValue = 3;
          break;

        case 'driving':
        default:
          enumValue = 0; // automobile
          break;
      }

      return NSNumber.numberWithInt(enumValue);
    }

    return null;
  }
}

export function GetSetProperty() {
  return (target, propertyKey: string) => {
    Object.defineProperty(target, propertyKey, {
      get: function () {
        return this['_' + propertyKey];
      },
      set: function (value) {
        if (this['_' + propertyKey] === value) {
          return;
        }
        if (value === 'true') {
          value = true;
        } else if (value === 'false') {
          value = false;
        }
        this['_' + propertyKey] = value;
      },
      enumerable: true,
      configurable: true,
    });
  };
}
