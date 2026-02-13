import { Color } from '@nativescript/core';
import { MapboxNavigationCommon } from './common';
import { EMapboxNavigationEvents } from './events';

export interface IWayPoint {
  latitude: number;
  longitude: number;
  name: string;
  bearing?: number;
  bearingTolerance?: number;
  color?: string;
  fillColor?: string;
  strokeColor?: string;
  radius?: number;
}

export declare class MapboxNavigation extends MapboxNavigationCommon {
  public static errorEvent: EMapboxNavigationEvents.ErrorEvent;
  public static onLocationChanged: EMapboxNavigationEvents.OnLocationChanged;
  public static onRouteProgress: EMapboxNavigationEvents.OnRouteProgress;
  public static onRouteCanceled: EMapboxNavigationEvents.OnRouteCanceled;
  public static onRoutesReady: EMapboxNavigationEvents.OnRoutesReady;
  public static onRouteFailed: EMapboxNavigationEvents.OnRouteFailed;
  public static onRouteRequestStarted: EMapboxNavigationEvents.OnRouteRequestStarted;
  accessToken: string;
  waypoints: Array<IWayPoint>;
  lang: string;
  simulate: boolean;
  enableSensors: boolean;
  steps: boolean;
  profile: string;
  alternatives: boolean;
  voiceInstructions: boolean;
  enableRefresh: boolean;
  bannerInstructions: boolean;
}

export interface MapboxNavigationLoadedEvent extends EventData {
  eventName: 'loaded';
  data: any;
  object: MapboxNavigation;
}

export interface ErrorEvent extends EventData {
  eventName: EMapboxNavigationEvents.ErrorEvent;
  data?: Error;
  message?: string;
}

export interface OnRouteRequestStarted extends EventData {
  eventName: EMapboxNavigationEvents.OnRouteRequestStarted;
}

export interface OnRoutesReady extends EventData {
  eventName: EMapboxNavigationEvents.OnRoutesReady;
  data: Array<any>;
}

export interface OnRouteFailed extends EventData {
  eventName: EMapboxNavigationEvents.OnRouteFailed;
  message: string;
}

export interface OnRouteCanceled extends EventData {
  eventName: EMapboxNavigationEvents.OnRouteCanceled;
}

export interface OnLocationChanged extends EventData {
  eventName: EMapboxNavigationEvents.OnLocationChanged;
  data: { latitude: number; longitude: number; bearing: number | null; speed: number | null };
}

export interface OnRouteProgress extends EventData {
  eventName: EMapboxNavigationEvents.OnRouteProgress;
  data: { state: any; distanceRemainingMeters: number; durationRemainingSeconds: number; estimatedTimeToArrivalEpochSeconds: number };
}
