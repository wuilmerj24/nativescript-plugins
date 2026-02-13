import { EventData, Observable } from '@nativescript/core';
import { TimeRange } from '.';

export enum ETimeRangeEvents {
  OnDragEvent = 'drag',
}

export interface OnDragEvent extends EventData {
  eventName: ETimeRangeEvents.OnDragEvent;
  data?: any;
}

export interface TimeRangerLoadedEvent extends EventData {
  eventName: 'loaded';
  data: any;
  object: Observable & TimeRange;
}
