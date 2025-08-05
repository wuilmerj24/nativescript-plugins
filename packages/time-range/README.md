[![npm version](https://img.shields.io/npm/v/@wuilmerj24/time-range.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@wuilmerj24/time-range)
[![npm downloads](https://img.shields.io/npm/dm/@wuilmerj24/time-range.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@wuilmerj24/time-range)
[![NativeScript compatibility](https://img.shields.io/badge/NativeScript-6%2B-blue.svg?style=for-the-badge&logo=nativescript)](https://nativescript.org)
[![Android Support](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white&labelColor=388E3C)](https://developer.android.com)
[![iOS Support](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=apple&logoColor=white&labelColor=111111)](https://developer.apple.com/ios/)

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

## License

Apache License Version 2.0
