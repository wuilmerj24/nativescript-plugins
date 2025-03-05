import { ContainerView, Property, booleanConverter } from '@nativescript/core';
import { ETimeRangeEvents } from './events';
import { ITimeDataBack, OnDragEvent, TimeRange } from '.';

export abstract class TimeRangeCommon extends ContainerView implements TimeRange {
  public static dragEvent = ETimeRangeEvents.OnDragEvent;
  public static onDragEndEvent = ETimeRangeEvents.OnDragEndEvent;
  public static onDragStarEvent = ETimeRangeEvents.OnDragStarEvent;
  public sendEvent(eventName: string, data?: ITimeDataBack, msg?: string) {
    this.notify({
      eventName,
      object: this,
      data,
      message: msg,
    });
  }
}

export interface ITimeRangeEvents {
  onDragEvent: any;
  onDragEndEvent: any;
  onDragStarEvent: any;
  onTimeChangeEvent: any;
  onTimeRangeLoad: any;
}

// PROPIEDADES DE LA VISTA
// starttime
export const startTimeProperty = new Property<TimeRangeCommon, string>({
  name: 'startTime',
});
startTimeProperty.register(TimeRangeCommon);

// endTime
export const endTimeProperty = new Property<TimeRangeCommon, string>({
  name: 'endTime',
});
endTimeProperty.register(TimeRangeCommon);

// sliderColor
export const sliderColorProperty = new Property<TimeRangeCommon, string>({
  name: 'sliderColor',
});
sliderColorProperty.register(TimeRangeCommon);

// clockLabelColor
export const clockLabelColorProperty = new Property<TimeRangeCommon, string>({
  name: 'clockLabelColor',
});
clockLabelColorProperty.register(TimeRangeCommon);

// clockTickColor
export const clockTickColorProperty = new Property<TimeRangeCommon, string>({
  name: 'clockTickColor',
});
clockTickColorProperty.register(TimeRangeCommon);

// maxDurationMinutes
export const maxDurationMinutesProperty = new Property<TimeRangeCommon, number>({
  name: 'maxDurationMinutes',
  defaultValue: 1,
  valueConverter(value) {
    return parseInt(value);
  },
});
maxDurationMinutesProperty.register(TimeRangeCommon);

// sliderRangeColor
export const sliderRangeColorProperty = new Property<TimeRangeCommon, string>({
  name: 'sliderRangeColor',
});
sliderRangeColorProperty.register(TimeRangeCommon);

// thumbColor
export const thumbColorProperty = new Property<TimeRangeCommon, string>({
  name: 'thumbColor',
});
thumbColorProperty.register(TimeRangeCommon);

// sliderRangeGradientEnd
export const sliderRangeGradientEndProperty = new Property<TimeRangeCommon, string>({
  name: 'sliderRangeGradientEnd',
});
sliderRangeGradientEndProperty.register(TimeRangeCommon);

// sliderRangeGradientMiddle
export const sliderRangeGradientMiddleProperty = new Property<TimeRangeCommon, string>({
  name: 'sliderRangeGradientMiddle',
});
sliderRangeGradientMiddleProperty.register(TimeRangeCommon);

// sliderRangeGradientStart
export const sliderRangeGradientStartProperty = new Property<TimeRangeCommon, string>({
  name: 'sliderRangeGradientStart',
});
sliderRangeGradientStartProperty.register(TimeRangeCommon);

// timeStepMinutes
export const timeStepMinutesProperty = new Property<TimeRangeCommon, number>({
  name: 'timeStepMinutes',
  defaultValue: 0,
  valueConverter(value) {
    return parseInt(value);
  },
});
timeStepMinutesProperty.register(TimeRangeCommon);

// clockVisible
export const clockVisibleProperty = new Property<TimeRangeCommon, boolean>({
  name: 'clockVisible',
  valueConverter: booleanConverter,
});
clockVisibleProperty.register(TimeRangeCommon);

// clockLabelSize
export const clockLabelSizeProperty = new Property<TimeRangeCommon, number>({
  name: 'clockLabelSize',
  valueConverter(value) {
    return parseFloat(value);
  },
});
clockLabelSizeProperty.register(TimeRangeCommon);

// sliderWidth
export const sliderWidthProperty = new Property<TimeRangeCommon, number>({
  name: 'sliderWidth',
  valueConverter(value) {
    return parseFloat(value);
  },
});
sliderWidthProperty.register(TimeRangeCommon);

// thumbIconSize
export const thumbIconSizeProperty = new Property<TimeRangeCommon, number>({
  name: 'thumbIconSize',
  valueConverter(value) {
    return parseFloat(value);
  },
});
thumbIconSizeProperty.register(TimeRangeCommon);

// thumbSize
export const thumbSizeProperty = new Property<TimeRangeCommon, number>({
  name: 'thumbSize',
  valueConverter(value) {
    return parseFloat(value);
  },
});
thumbSizeProperty.register(TimeRangeCommon);

// thumbIconStartRes
export const thumbIconStartResProperty = new Property<TimeRangeCommon, string>({
  name: 'thumbIconStartRes',
});
thumbIconStartResProperty.register(TimeRangeCommon);

// thumbIconEndRes
export const thumbIconEndResProperty = new Property<TimeRangeCommon, string>({
  name: 'thumbIconEndRes',
});
thumbIconEndResProperty.register(TimeRangeCommon);

// clockFace
export const clockFaceProperty = new Property<TimeRangeCommon, string>({
  name: 'clockFace',
});
clockFaceProperty.register(TimeRangeCommon);

// hourFormat
export const hourFormatProperty = new Property<TimeRangeCommon, string>({
  name: 'hourFormat',
});
hourFormatProperty.register(TimeRangeCommon);
