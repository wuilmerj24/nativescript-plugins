import { ContentView } from '@nativescript/core';
import { OnDragEvent, OnTimeChangeEvent, TimeRangerLoadedEvent, ETimeRangeEvents, OnDragStarEvent, OnDragEndEvent } from './events';

export * from './events';

export declare class TimeRange extends ContainerView {
  public static onDragEvent: ETimeRangeEvents.OnDragEvent;
  public static onTimeChangeEvent: ETimeRangeEvents.OnTimeChangeEvent;
  public static onDragStarEvent = ETimeRangeEvents.OnDragStarEvent;
  public static onDragEndEvent = ETimeRangeEvents.OnDragEndEvent;
}

export interface ITimeRangeEvents {
  onDragEvent: OnDragEvent;
  onDragEndEvent: OnDragEndEvent;
  onDragStarEvent: OnDragStarEvent;
  onTimeChangeEvent: OnTimeChangeEvent;
  onTimeRangeLoad: TimeRangerLoadedEvent;
}

export interface ITimeDataBack {
  start?: string;
  end?: string;
  event?: string;
}
