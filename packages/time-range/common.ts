import { booleanConverter, Color, ContentView, Property } from '@nativescript/core';
import { ITimeDataBack } from '.';
import { ETimeRangeEvents } from './events';

export class TimeRangeCommon extends ContentView {
    public static dragEvent = ETimeRangeEvents.OnDragEvent;
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
    onTimeRangeLoad: any;
}

export const circleWidthProperty = new Property<TimeRangeCommon, number>({
    name: 'circleWidth',
    valueConverter(value) {
        return parseFloat(value);
    },
})

circleWidthProperty.register(TimeRangeCommon)

export const circleColorProperty = new Property<TimeRangeCommon, number>({
    name: 'circleColor',
    valueConverter(value) {
        if (__ANDROID__) {
            return new Color(value).android;
        } else {
            return new Color(value).ios;
        }
    },
})

circleColorProperty.register(TimeRangeCommon)

export const numberColorProperty = new Property<TimeRangeCommon, number>({
    name: 'numberColor',
    valueConverter(value) {
        if(__ANDROID__){
            return new Color(value).android;
        }else{
            return new Color(value).ios;
        }
    },
})

numberColorProperty.register(TimeRangeCommon)

export const numberSizeProperty = new Property<TimeRangeCommon, number>({
    name: 'numberSize',
    valueConverter(value) {
        return parseInt(value);
    },
})

numberSizeProperty.register(TimeRangeCommon)

export const rangerSizeProperty = new Property<TimeRangeCommon, number>({
    name: 'rangerSize',
    valueConverter(value) {
        return parseInt(value);
    },
})

rangerSizeProperty.register(TimeRangeCommon)

export const rangerColorProperty = new Property<TimeRangeCommon, number>({
    name: 'rangerColor',
    valueConverter(value) {
        if (__ANDROID__) {
            return new Color(value).android;
        } else {
            return new Color(value).ios;
        }
    },
})

rangerColorProperty.register(TimeRangeCommon)

export const thumbStartColorProperty = new Property<TimeRangeCommon, number>({
    name: 'thumbStartColor',
    valueConverter(value) {
        if(__ANDROID__){
            return new Color(value).android;
        }else{
            return new Color(value).ios;
        }
    },
})

thumbStartColorProperty.register(TimeRangeCommon)

export const thumbEndColorProperty = new Property<TimeRangeCommon, number>({
    name: 'thumbEndColor',
    valueConverter(value) {
        if (__ANDROID__) {
            return new Color(value).android;
        } else {
            return new Color(value).ios;
        }
    },
})

thumbEndColorProperty.register(TimeRangeCommon)

export const insideRangeColorProperty = new Property<TimeRangeCommon, number>({
    name: 'insideRangeColor',
    valueConverter(value) {
        if (__ANDROID__) {
            return new Color(value).android;
        } else {
            return new Color(value).ios;
        }
    },
})

insideRangeColorProperty.register(TimeRangeCommon)

export const startImageProperty = new Property<TimeRangeCommon, string>({
    name: 'startImage',
})

startImageProperty.register(TimeRangeCommon)

export const endImageProperty = new Property<TimeRangeCommon, number>({
    name: 'endImage',
})

endImageProperty.register(TimeRangeCommon)

export const showInsideRangeProperty = new Property<TimeRangeCommon, boolean>({
    name: 'showInsideRange',
    valueConverter(value) {
        return booleanConverter(value);
    },
})

showInsideRangeProperty.register(TimeRangeCommon)

export const setTimeRangeProperty = new Property<TimeRangeCommon, string>({
    name: 'setTimeRange',
})

setTimeRangeProperty.register(TimeRangeCommon)

export const showGradiantColorProperty = new Property<TimeRangeCommon, boolean>({
    name: 'showGradiantColor',
    valueConverter(value) {
        return booleanConverter(value);
    },
})

showGradiantColorProperty.register(TimeRangeCommon)

export const startGradiantColorProperty = new Property<TimeRangeCommon, number>({
    name: 'startGradiantColor',
    valueConverter(value) {
        if (__ANDROID__) {
            return new Color(value).android;
        } else {
            return new Color(value).ios;
        }
    },
})

startGradiantColorProperty.register(TimeRangeCommon)

export const middleGradiantColorProperty = new Property<TimeRangeCommon, number>({
    name: 'middleGradiantColor',
    valueConverter(value) {
        if (__ANDROID__) {
            return new Color(value).android;
        } else {
            return new Color(value).ios;
        }
    },
})

middleGradiantColorProperty.register(TimeRangeCommon)

export const endGradiantColorProperty = new Property<TimeRangeCommon, number>({
    name: 'endGradiantColor',
    valueConverter(value) {
        if (__ANDROID__) {
            return new Color(value).android;
        } else {
            return new Color(value).ios;
        }
    },
})

endGradiantColorProperty.register(TimeRangeCommon);

export const showTicksProperty = new Property<TimeRangeCommon, boolean>({
    name: 'showTicks',
    valueConverter(value) {
        return booleanConverter(value);
    },
});

showTicksProperty.register(TimeRangeCommon);

export const showLabelProperty = new Property<TimeRangeCommon, boolean>({
    name: 'showLabel',
    valueConverter(value) {
        return booleanConverter(value);
    },
});

showLabelProperty.register(TimeRangeCommon);

export const opacityProperty = new Property<TimeRangeCommon, number>({
    name: 'opacityCircle',
    valueConverter(value) {
        return parseFloat(value);
    },
})