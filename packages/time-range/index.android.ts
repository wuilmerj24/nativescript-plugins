import { Application, Color, Utils } from '@nativescript/core';
import { TimeRangeCommon, startTimeProperty, endTimeProperty, sliderColorProperty, clockLabelColorProperty, clockTickColorProperty, maxDurationMinutesProperty, sliderRangeColorProperty, thumbColorProperty, sliderRangeGradientEndProperty, sliderRangeGradientMiddleProperty, sliderRangeGradientStartProperty, timeStepMinutesProperty, clockVisibleProperty, clockLabelSizeProperty, sliderWidthProperty, thumbIconSizeProperty, thumbSizeProperty, thumbIconStartResProperty, thumbIconEndResProperty, clockFaceProperty, hourFormatProperty } from './common';
import { ETimeRangeEvents } from './events';

export class TimeData {
  _native: nl.joery.timerangepicker.TimeRangePicker.Time;

  static fromNative(value: nl.joery.timerangepicker.TimeRangePicker.Time): TimeData {
    if (value instanceof nl.joery.timerangepicker.TimeRangePicker.Time) {
      const ret = new TimeData();
      ret._native = value;
      return ret;
    }
    return null;
  }

  get native() {
    return this._native;
  }

  get hour() {
    return this.native.getHour();
  }

  get minute() {
    return this.native.getMinute();
  }

  toString() {
    return this.native.toString();
  }
}

export class TimeDurationData {
  _native: nl.joery.timerangepicker.TimeRangePicker.TimeDuration;

  static fromNative(value: nl.joery.timerangepicker.TimeRangePicker.TimeDuration): TimeDurationData {
    if (value instanceof nl.joery.timerangepicker.TimeRangePicker.TimeDuration) {
      const ret = new TimeDurationData();
      ret._native = value;
      return ret;
    }
    return null;
  }

  get native() {
    return this._native;
  }

  get start() {
    return TimeData.fromNative(this.native.getStart());
  }

  get end() {
    return TimeData.fromNative(this.native.getEnd());
  }

  get hour() {
    return this.native.getHour();
  }

  get minute() {
    return this.native.getMinute();
  }

  get duration() {
    return this.native.getDuration().toMillis();
  }

  toString() {
    return this.native.toString();
  }
}

export class TimeRange extends TimeRangeCommon {
  timeRanger: nl.joery.timerangepicker.TimeRangePicker;

  createNativeView(): Object {
    this.timeRanger = new nl.joery.timerangepicker.TimeRangePicker(this._context);

    return this.timeRanger;
  }

  initNativeView(): void {
    super.initNativeView();
    try {
      const ref = new WeakRef(this);
      this.timeRanger.setOnTimeChangeListener(
        new nl.joery.timerangepicker.TimeRangePicker.OnTimeChangeListener({
          onDurationChange(param0) {
            const time = TimeDurationData.fromNative(param0);
            ref?.get()?.sendEvent(TimeRange.dragEvent, { start: time.start.toString(), end: time.end.toString(), event: TimeRange.dragEvent });
          },
          onEndTimeChange(param0) {
            const time = TimeData.fromNative(param0);
            ref?.get()?.sendEvent(TimeRange.dragEvent, { end: time.native.toString(), event: TimeRange.onDragEndEvent });
          },
          onStartTimeChange(param0) {
            const time = TimeData.fromNative(param0);
            ref?.get()?.sendEvent(TimeRange.dragEvent, { start: time.native.toString(), event: TimeRange.onDragStarEvent });
          },
        })
      );
    } catch (error) {
      console.error(`error ${error}`);
    }
  }

  disposeNativeView(): void {
    super.disposeNativeView();
  }

  [startTimeProperty.setNative](value: string) {
    const startTime: Array<string> = value.split(':');
    this.timeRanger.setStartTime(new nl.joery.timerangepicker.TimeRangePicker.Time(parseInt(startTime[0]), parseInt(startTime[1])));
  }

  [endTimeProperty.setNative](value: string) {
    const endTime: Array<string> = value.split(':');
    this.timeRanger.setEndTime(new nl.joery.timerangepicker.TimeRangePicker.Time(parseInt(endTime[0]), parseInt(endTime[1])));
  }

  [sliderColorProperty.setNative](value: string) {
    this.timeRanger.setSliderColor(new Color(value).android);
  }

  [clockLabelColorProperty.setNative](value: string) {
    this.timeRanger.setClockLabelColor(new Color(value).android);
  }

  [clockTickColorProperty.setNative](value: string) {
    this.timeRanger.setClockTickColor(new Color(value).android);
  }

  [clockTickColorProperty.setNative](value: string) {
    this.timeRanger.setClockTickColor(new Color(value).android);
  }

  [maxDurationMinutesProperty.setNative](value: number) {
    this.timeRanger.setMaxDurationMinutes(value);
  }

  [sliderRangeColorProperty.setNative](value: string) {
    this.timeRanger.setSliderRangeColor(new Color(value).android);
  }

  [thumbColorProperty.setNative](value: string) {
    this.timeRanger.setThumbColor(new Color(value).android);
  }

  [sliderRangeGradientEndProperty.setNative](value: string) {
    this.timeRanger.setSliderRangeGradientEnd(new java.lang.Integer(new Color(value).android));
  }

  [sliderRangeGradientMiddleProperty.setNative](value: string) {
    this.timeRanger.setSliderRangeGradientMiddle(new java.lang.Integer(new Color(value).android));
  }

  [sliderRangeGradientStartProperty.setNative](value: string) {
    this.timeRanger.setSliderRangeGradientStart(new java.lang.Integer(new Color(value).android));
  }

  [timeStepMinutesProperty.setNative](value: number) {
    this.timeRanger.setTimeStepMinutes(value);
  }

  [clockVisibleProperty.setNative](value: boolean) {
    this.timeRanger.setClockVisible(value);
  }

  [clockLabelSizeProperty.setNative](value: number) {
    this.timeRanger.setClockLabelSize(value);
  }

  [sliderWidthProperty.setNative](value: number) {
    this.timeRanger.setSliderWidth(value);
  }

  [thumbIconSizeProperty.setNative](value: number) {
    this.timeRanger.setThumbIconSize(new java.lang.Integer(value));
  }

  [thumbSizeProperty.setNative](value: number) {
    this.timeRanger.setThumbSize(value);
  }

  [thumbIconStartResProperty.setNative](value: string) {
    const resId = this._context.getResources().getIdentifier(value, 'drawable', (this._context as android.content.Context).getPackageName());
    try {
      this.timeRanger.setThumbIconStartRes(resId);
    } catch (error) {
      console.error(error);
    }
  }

  [thumbIconEndResProperty.setNative](value: string) {
    const resId = this._context.getResources().getIdentifier(value, 'drawable', (this._context as android.content.Context).getPackageName());
    try {
      this.timeRanger.setThumbIconEndRes(resId);
    } catch (error) {
      console.error(error);
    }
  }

  [clockFaceProperty.setNative](value: string) {
    if (value == 'APPLE') {
      this.timeRanger.setClockFace(nl.joery.timerangepicker.TimeRangePicker.ClockFace.APPLE);
    } else {
      this.timeRanger.setClockFace(nl.joery.timerangepicker.TimeRangePicker.ClockFace.SAMSUNG);
    }
  }

  [hourFormatProperty.setNative](value: string) {
    if (value == 'FORMAT_12') {
      this.timeRanger.setHourFormat(nl.joery.timerangepicker.TimeRangePicker.HourFormat.FORMAT_12);
    } else if (value == 'FORMAT_24') {
      this.timeRanger.setHourFormat(nl.joery.timerangepicker.TimeRangePicker.HourFormat.FORMAT_24);
    } else {
      this.timeRanger.setHourFormat(nl.joery.timerangepicker.TimeRangePicker.HourFormat.FORMAT_SYSTEM);
    }
  }
}
