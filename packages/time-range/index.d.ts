import { TimeRangeCommon } from './common';
import { OnDragEvent,TimeRangerLoadedEvent, ETimeRangeEvents } from './events';

export * from './events';

export declare class TimeRange extends TimeRangeCommon {
    public static onDragEvent: ETimeRangeEvents.OnDragEvent;
}

export interface ITimeRangeEvents {
    onDragEvent: OnDragEvent;
    onTimeRangeLoad: TimeRangerLoadedEvent;
}

export interface ITimeDataBack {
    start?: { h: string, m: string };
    end?: { h: string, m: string };
    rangeTime:{h:string,m:string},
    thumbsPositions: { start: { x: number, y: number }, end: { x: number, y: number } }
    event?: string;
}