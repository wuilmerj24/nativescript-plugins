import { Utils } from '@nativescript/core';
import { CircularTimeRangePicker } from './class/circulartimerange.android';
import { circleColorProperty, circleWidthProperty, endGradiantColorProperty, endImageProperty, insideRangeColorProperty, middleGradiantColorProperty, numberColorProperty, numberSizeProperty, opacityProperty, rangerColorProperty, rangerSizeProperty, setTimeRangeProperty, showGradiantColorProperty, showInsideRangeProperty, showLabelProperty, showTicksProperty, startGradiantColorProperty, startImageProperty, thumbEndColorProperty, thumbStartColorProperty, TimeRangeCommon } from './common';

export class TimeRange extends TimeRangeCommon {
  private timeRange: CircularTimeRangePicker;
  private startDrawable;
  private endDrawable;
  createNativeView(): any {
    this.timeRange = new CircularTimeRangePicker(this._context);
    return this.timeRange;
  }

  [circleWidthProperty.setNative](value: number) {
    this.timeRange.circleWidth = value;
  }

  [circleColorProperty.setNative](value: number) {
    this.timeRange.circleColor = value;
  }

  [numberColorProperty.setNative](value: number) {
    this.timeRange.numberColor = value;
  }

  [numberSizeProperty.setNative](value: number) {
    this.timeRange.numberSize = value;
  }

  [rangerSizeProperty.setNative](value: number) {
    this.timeRange.rangerSize = value;
  }

  [rangerColorProperty.setNative](value: number) {
    this.timeRange.rangerColor = value;
  }

  [thumbStartColorProperty.setNative](value: number) {
    this.timeRange.setThumbStartColor(value);
  }

  [thumbEndColorProperty.setNative](value: number) {
    this.timeRange.setThumbEndColor(value);
  }

  [insideRangeColorProperty.setNative](value: number) {
    this.timeRange.insideRangeColor = value;
  }

  [startImageProperty.setNative](value: number) {
    const startDrawable = this._context.getDrawable(this._context.getResources().getIdentifier(value, 'drawable', this._context.getPackageName()));
    this.startDrawable = startDrawable;
  }

  [endImageProperty.setNative](value: number) {
    const endDrawable = this._context.getDrawable(this._context.getResources().getIdentifier(value, 'drawable', this._context.getPackageName()));
    this.endDrawable = endDrawable;
  }

  [showInsideRangeProperty.setNative](value: boolean) {
    this.timeRange.showInsideRange = value;
  }

  [setTimeRangeProperty.setNative](value: string) {
    let data: string[] = value.split(',');
    this.timeRange.setTimeRange(parseInt(data[0]), parseInt(data[1]), parseInt(data[2]), parseInt(data[3]));
  }

  [startGradiantColorProperty.setNative](value: number) {
    this.timeRange.startColorGradient = value;
  }

  [middleGradiantColorProperty.setNative](value: number) {
    this.timeRange.middleColorGradient = value;
  }

  [endGradiantColorProperty.setNative](value: number) {
    this.timeRange.endColorGradient = value;
  }

  [showGradiantColorProperty.setNative](value: boolean) {
    this.timeRange.showGradient = value;
  }

  [showTicksProperty.setNative](value: boolean) {
    this.timeRange.showTicks = value;
  }

  [showLabelProperty.setNative](value: boolean) {
    this.timeRange.showLabel = value;
  }

  [opacityProperty.setNative](value: number) {
    this.timeRange.opacityBase = parseInt(value.toString());
  }

  initNativeView(): void {
    super.initNativeView();
    const ref = new WeakRef(this);
    Utils.setTimeout(() => {
      this.timeRange.setThumbDrawables(this.startDrawable, this.endDrawable);
    }, 50);
    this.timeRange.setOnTimeChangedListener({
      onTimeChanged: (startHour, startMinute, endHour, endMinute, totalHours, totalMinutes) => {
        const thumbPositions = this.timeRange.getNormalizedThumbPositions();
        const start: android.graphics.PointF = thumbPositions['start'];
        const end: android.graphics.PointF = thumbPositions['end'];
        ref?.get()?.sendEvent(TimeRange.dragEvent, {
          start: {
            h: startHour.toString(),
            m: startMinute.toString(),
          },
          end: {
            h: endHour.toString(),
            m: endMinute.toString(),
          },
          rangeTime: {
            h: totalHours.toString(),
            m: totalMinutes.toString(),
          },
          thumbsPositions: {
            start: {
              x: start.x,
              y: start.y,
            },
            end: {
              x: end.x,
              y: end.y,
            },
          },
          event: TimeRange.dragEvent,
        });
      },
    });
  }
}
