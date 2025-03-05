<a href="https://www.npmjs.com/package/@wuilmerj24/time-range">
    <img src="https://img.shields.io/npm/dt/@wuilmerj24/time-range.svg?label=npm%20downloads" alt="npm">
</a>

# @wuilmerj24/time-range

```javascript
npm install @wuilmerj24/time-range
```

### Usage

#### Plain NativeScript

<p>IMPORTANT: Make sure you include xmlns:tr="@wuilmerj24/time-range" on the Page element</p>

```xml
<Page xmlns:tr="@wuilmerj24/time-range">
    <StackLayout class="p-20">
      <tr:TimeRange width="100%" height="100%" drag="onDrag"/>
    </StackLayout>
</Page>
```

```javascript
onDrag(ev) {
    console.log('onDrag ', ev.data);
  }
```

#### Nativescript Angular

```typescript
import { NativeScriptTimeRangeModule } from '@wuilmerj24/time-range/angular';

//addd NativeScriptTimeRangeModule to angular NgModule>imports
@NgModule({
    imports: [
        NativeScriptTimeRangeModule,
    ],
})
```

```html
<TimeRange (drag)="onDrag($event)"></TimeRange>
```

```typescript
onDrag(ev) {
    console.log('onDrag ', ev.data);
  }
```

### Properties

| Property | Type | Default value | Description | iOS | Android |
| -------- | ---- | ------------- | ----------- | --- | ------- |
| startTime | string | 00:00 | The time format is Hh:Mm, for example, 12:00. startTime defines the start time, it is not required.| ✓ | ✓ |
| endTime | string | 00:00 | The time format is Hh:Mm, for example, 12:00. endTime defines the end time, it is not required.| ✓ | ✓ |
| sliderColor | string | gray | sliderColor defines the background color of the slider. Default is gray.| ✓ | ✓ |
| clockLabelColor | string | white | clockLabelColor defines the color of the numbers.| ✓ | ✓ |
| clockTickColor | string | white | clockTickColor defines the color of the lines not numbers (in the case of Android, also the lines. iOS not have lines).| ❌ | ✓ |
| maxDurationMinutes | number | 0 | Set the maximum selectable duration by providing minutes between 0 and 1440 | ❌ | ✓ |
| sliderRangeColor | string | gray | The color of the active part of the slider wheel. | ✓ | ✓ |
| thumbColor | string | gray | The background color of the thumbs. | ✓ | ✓ |
| sliderRangeGradientStart | string | gray | Set the starting gradient color of the active part of the slider wheel. Please note that both sliderRangeGradientStart and sliderRangeGradientEnd need to be configured. | ❌ | ✓ |
| sliderRangeGradientMiddle | string | gray | Optional for gradient: set the middle gradient color of the active part of the slider wheel. | ❌ | ✓ |
| sliderRangeGradientEnd | string | gray | Set the ending gradient color of the active part of the slider wheel.Please note that both sliderRangeGradientStart and trp_sliderRangeGradientEnd need to be configured. | ❌ | ✓ |
| timeStepMinutes | number | 0 | Determines at what interval the time should be rounded. Setting it to a less accurate number (e.g. 10 minutes) makes it easier for a user to select his desired time. | ❌ | ✓ |
| clockVisible | boolean | true | Whether the clock face in the middle should be visible. | ✓ | ✓ |
| clockLabelSize | number | 16 | Whether the clock face in the middle should be visibleThe text size of the hour labels in the clock (1, 2, 3, etc.). This value is recommended to be set as scale-independent pixels (sp). | ✓ | ✓ |
| sliderWidth | number | 10 | The width of the slider wheel. | ✓ | ✓ |
| thumbIconSize | number | 24 | The size of the thumb icons. | ❌ | ✓ |
| thumbSize | number | 28 | The size of both the starting and ending thumb. | ✓ | ✓ |
| thumbIconStartRes | string | null | Set the start thumb icon. | ✓ | ✓ |
| thumbIconEndRes | string | null | Set the end thumb icon. | ✓ | ✓ |
| clockFace | string | APPLE | There a two different clock faces (appearance of the inner clock) you can use, both mimicking the Clock apps: APPLE and SAMSUNG | ✓ | ✓ |

## License

Apache License Version 2.0
