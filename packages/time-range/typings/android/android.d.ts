/// <reference path="android-declarations.d.ts"/>

declare module nl {
  export module joery {
    export module timerangepicker {
      export class BuildConfig {
        public static class: java.lang.Class<nl.joery.timerangepicker.BuildConfig>;
        public static DEBUG: boolean;
        public static LIBRARY_PACKAGE_NAME: string;
        public static BUILD_TYPE: string;
        public constructor();
      }
    }
  }
}

declare module nl {
  export module joery {
    export module timerangepicker {
      export class ClockRenderer {
        public static class: java.lang.Class<nl.joery.timerangepicker.ClockRenderer>;
        public updatePaint(): void;
        public render(param0: globalAndroid.graphics.Canvas, param1: number): void;
        public constructor(param0: nl.joery.timerangepicker.TimeRangePicker);
      }
      export module ClockRenderer {
        export class WhenMappings {
          public static class: java.lang.Class<nl.joery.timerangepicker.ClockRenderer.WhenMappings>;
        }
      }
    }
  }
}

declare module nl {
  export module joery {
    export module timerangepicker {
      export class SavedState {
        public static class: java.lang.Class<nl.joery.timerangepicker.SavedState>;
        public static CREATOR: globalAndroid.os.Parcelable.Creator<nl.joery.timerangepicker.SavedState>;
        public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
        public getAngleStart(): number;
        public setAngleEnd(param0: number): void;
        public setAngleStart(param0: number): void;
        public constructor(param0: globalAndroid.os.Parcelable);
        public constructor(param0: globalAndroid.os.Parcel);
        public getAngleEnd(): number;
      }
      export module SavedState {
        export class Companion {
          public static class: java.lang.Class<nl.joery.timerangepicker.SavedState.Companion>;
        }
      }
    }
  }
}

declare module nl {
  export module joery {
    export module timerangepicker {
      export class TimeRangePicker {
        public static class: java.lang.Class<nl.joery.timerangepicker.TimeRangePicker>;
        public setMaxDurationMinutes(param0: number): void;
        public getSliderRangeGradientStart(): java.lang.Integer;
        public getClockLabelSize(): number;
        public getThumbIconSize(): java.lang.Integer;
        public getClockLabelColor(): number;
        public getEndTimeMinutes(): number;
        public getThumbColorAuto(): boolean;
        public setClockVisible(param0: boolean): void;
        public setMinDurationMinutes(param0: number): void;
        public setSliderRangeGradientEnd(param0: java.lang.Integer): void;
        public getThumbIconEnd(): globalAndroid.graphics.drawable.Drawable;
        public setSliderColorRes(param0: number): void;
        public getThumbColor(): number;
        public setThumbIconEnd(param0: globalAndroid.graphics.drawable.Drawable): void;
        public setThumbIconColorRes(param0: number): void;
        public getDurationMinutes(): number;
        public getSliderColor(): number;
        public getSliderRangeColor(): number;
        public setThumbIconSize(param0: java.lang.Integer): void;
        public setHourFormat(param0: nl.joery.timerangepicker.TimeRangePicker.HourFormat): void;
        public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
        public setSliderWidth(param0: number): void;
        public getHourFormat(): nl.joery.timerangepicker.TimeRangePicker.HourFormat;
        public getSliderRangeGradientEnd(): java.lang.Integer;
        public setSliderRangeGradientMiddleRes(param0: number): void;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
        public setSliderColor(param0: number): void;
        public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
        public setOnTimeChangeListener(param0: nl.joery.timerangepicker.TimeRangePicker.OnTimeChangeListener): void;
        public setOnDragChangeListener(param0: nl.joery.timerangepicker.TimeRangePicker.OnDragChangeListener): void;
        public setClockLabelColorRes(param0: number): void;
        public setThumbColorAuto(param0: boolean): void;
        public setThumbSize(param0: number): void;
        public getEndTime(): nl.joery.timerangepicker.TimeRangePicker.Time;
        public getTimeStepMinutes(): number;
        public getStartTime(): nl.joery.timerangepicker.TimeRangePicker.Time;
        public setStartTime(param0: nl.joery.timerangepicker.TimeRangePicker.Time): void;
        public setThumbColor(param0: number): void;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
        public getMaxDurationMinutes(): number;
        public setSliderRangeGradientEndRes(param0: number): void;
        public getMinDuration(): nl.joery.timerangepicker.TimeRangePicker.Time;
        public getThumbIconStart(): globalAndroid.graphics.drawable.Drawable;
        public setMaxDuration(param0: nl.joery.timerangepicker.TimeRangePicker.Time): void;
        public setSliderRangeGradientStartRes(param0: number): void;
        public getSliderWidth(): number;
        public setTimeStepMinutes(param0: number): void;
        public getDuration(): nl.joery.timerangepicker.TimeRangePicker.TimeDuration;
        public getSliderRangeGradientMiddle(): java.lang.Integer;
        public constructor(param0: globalAndroid.content.Context);
        public setSliderRangeGradientStart(param0: java.lang.Integer): void;
        public getMinDurationMinutes(): number;
        public setClockLabelSize(param0: number): void;
        public getClockVisible(): boolean;
        public getMaxDuration(): nl.joery.timerangepicker.TimeRangePicker.Time;
        public setSliderRangeGradientMiddle(param0: java.lang.Integer): void;
        public getClockTickColor(): number;
        public setEndTime(param0: nl.joery.timerangepicker.TimeRangePicker.Time): void;
        public setThumbSizeActiveGrow(param0: number): void;
        public setThumbIconStartRes(param0: number): void;
        public onSaveInstanceState(): globalAndroid.os.Parcelable;
        public setSliderRangeColorRes(param0: number): void;
        public getThumbIconColor(): java.lang.Integer;
        public setEndTimeMinutes(param0: number): void;
        public setThumbIconStart(param0: globalAndroid.graphics.drawable.Drawable): void;
        public getThumbSize(): number;
        public setStartTimeMinutes(param0: number): void;
        public getThumbSizeActiveGrow(): number;
        public setClockTickColor(param0: number): void;
        public setClockFace(param0: nl.joery.timerangepicker.TimeRangePicker.ClockFace): void;
        public onDraw(param0: globalAndroid.graphics.Canvas): void;
        public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
        public setThumbIconColor(param0: java.lang.Integer): void;
        public setMinDuration(param0: nl.joery.timerangepicker.TimeRangePicker.Time): void;
        public onMeasure(param0: number, param1: number): void;
        public setThumbColorRes(param0: number): void;
        public setClockTickColorRes(param0: number): void;
        public getStartTimeMinutes(): number;
        public setThumbIconEndRes(param0: number): void;
        public getClockFace(): nl.joery.timerangepicker.TimeRangePicker.ClockFace;
        public setSliderRangeColor(param0: number): void;
        public setClockLabelColor(param0: number): void;
      }
      export module TimeRangePicker {
        export class ClockFace {
          public static class: java.lang.Class<nl.joery.timerangepicker.TimeRangePicker.ClockFace>;
          public static APPLE: nl.joery.timerangepicker.TimeRangePicker.ClockFace;
          public static SAMSUNG: nl.joery.timerangepicker.TimeRangePicker.ClockFace;
          public static values(): androidNative.Array<nl.joery.timerangepicker.TimeRangePicker.ClockFace>;
          public static valueOf(param0: string): nl.joery.timerangepicker.TimeRangePicker.ClockFace;
          public getId(): number;
        }
        export module ClockFace {
          export class Companion {
            public static class: java.lang.Class<nl.joery.timerangepicker.TimeRangePicker.ClockFace.Companion>;
            public fromId(param0: number): nl.joery.timerangepicker.TimeRangePicker.ClockFace;
          }
        }
        export class HourFormat {
          public static class: java.lang.Class<nl.joery.timerangepicker.TimeRangePicker.HourFormat>;
          public static FORMAT_SYSTEM: nl.joery.timerangepicker.TimeRangePicker.HourFormat;
          public static FORMAT_12: nl.joery.timerangepicker.TimeRangePicker.HourFormat;
          public static FORMAT_24: nl.joery.timerangepicker.TimeRangePicker.HourFormat;
          public static values(): androidNative.Array<nl.joery.timerangepicker.TimeRangePicker.HourFormat>;
          public static valueOf(param0: string): nl.joery.timerangepicker.TimeRangePicker.HourFormat;
          public getId(): number;
        }
        export module HourFormat {
          export class Companion {
            public static class: java.lang.Class<nl.joery.timerangepicker.TimeRangePicker.HourFormat.Companion>;
            public fromId(param0: number): nl.joery.timerangepicker.TimeRangePicker.HourFormat;
          }
        }
        export class OnDragChangeListener {
          public static class: java.lang.Class<nl.joery.timerangepicker.TimeRangePicker.OnDragChangeListener>;
          /**
           * Constructs a new instance of the nl.joery.timerangepicker.TimeRangePicker$OnDragChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onDragStart(param0: nl.joery.timerangepicker.TimeRangePicker.Thumb): boolean; onDragStop(param0: nl.joery.timerangepicker.TimeRangePicker.Thumb): void });
          public constructor();
          public onDragStop(param0: nl.joery.timerangepicker.TimeRangePicker.Thumb): void;
          public onDragStart(param0: nl.joery.timerangepicker.TimeRangePicker.Thumb): boolean;
        }
        export class OnTimeChangeListener {
          public static class: java.lang.Class<nl.joery.timerangepicker.TimeRangePicker.OnTimeChangeListener>;
          /**
           * Constructs a new instance of the nl.joery.timerangepicker.TimeRangePicker$OnTimeChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onStartTimeChange(param0: nl.joery.timerangepicker.TimeRangePicker.Time): void; onEndTimeChange(param0: nl.joery.timerangepicker.TimeRangePicker.Time): void; onDurationChange(param0: nl.joery.timerangepicker.TimeRangePicker.TimeDuration): void });
          public constructor();
          public onStartTimeChange(param0: nl.joery.timerangepicker.TimeRangePicker.Time): void;
          public onEndTimeChange(param0: nl.joery.timerangepicker.TimeRangePicker.Time): void;
          public onDurationChange(param0: nl.joery.timerangepicker.TimeRangePicker.TimeDuration): void;
        }
        export class Thumb {
          public static class: java.lang.Class<nl.joery.timerangepicker.TimeRangePicker.Thumb>;
          public static NONE: nl.joery.timerangepicker.TimeRangePicker.Thumb;
          public static START: nl.joery.timerangepicker.TimeRangePicker.Thumb;
          public static END: nl.joery.timerangepicker.TimeRangePicker.Thumb;
          public static BOTH: nl.joery.timerangepicker.TimeRangePicker.Thumb;
          public static valueOf(param0: string): nl.joery.timerangepicker.TimeRangePicker.Thumb;
          public static values(): androidNative.Array<nl.joery.timerangepicker.TimeRangePicker.Thumb>;
        }
        export class Time {
          public static class: java.lang.Class<nl.joery.timerangepicker.TimeRangePicker.Time>;
          public toString(): string;
          public getHour(): number;
          public getMinute(): number;
          public getCalendar(): java.util.Calendar;
          public getTotalMinutes(): number;
          public constructor(param0: number);
          public constructor(param0: number, param1: number);
          public getLocalTime(): java.time.LocalTime;
        }
        export class TimeDuration {
          public static class: java.lang.Class<nl.joery.timerangepicker.TimeRangePicker.TimeDuration>;
          public toString(): string;
          public getHour(): number;
          public getEnd(): nl.joery.timerangepicker.TimeRangePicker.Time;
          public getDuration(): java.time.Duration;
          public constructor(param0: nl.joery.timerangepicker.TimeRangePicker.Time, param1: nl.joery.timerangepicker.TimeRangePicker.Time);
          public getMinute(): number;
          public getStart(): nl.joery.timerangepicker.TimeRangePicker.Time;
          public getDurationMinutes(): number;
          public getClassicDuration(): javax.xml.datatype.Duration;
        }
      }
    }
  }
}

declare module nl {
  export module joery {
    export module timerangepicker {
      export module utils {
        export class MathUtils {
          public static class: java.lang.Class<nl.joery.timerangepicker.utils.MathUtils>;
          public static INSTANCE: nl.joery.timerangepicker.utils.MathUtils;
          public isPointInCircle(param0: number, param1: number, param2: number, param3: number, param4: number): boolean;
          public distanceBetweenPoints(param0: number, param1: number, param2: number, param3: number): number;
          public angleToPreciseMinutes(param0: number, param1: nl.joery.timerangepicker.TimeRangePicker.HourFormat): number;
          public simpleMinutesToAngle(param0: number, param1: nl.joery.timerangepicker.TimeRangePicker.HourFormat): number;
          public minutesToAngle(param0: number, param1: nl.joery.timerangepicker.TimeRangePicker.HourFormat): number;
          public differenceBetweenAngles(param0: number, param1: number): number;
          public angleTo720(param0: number): number;
          public angleToMinutes(param0: number, param1: nl.joery.timerangepicker.TimeRangePicker.HourFormat): number;
          public snapMinutes(param0: number, param1: number): number;
          public angleTo360(param0: number): number;
          public durationBetweenMinutes(param0: number, param1: number): number;
        }
      }
    }
  }
}

//Generics information:
