[![npm version](https://img.shields.io/npm/v/@wuilmerj24/gallery-view.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@wuilmerj24/gallery-view)
[![npm downloads](https://img.shields.io/npm/dm/@wuilmerj24/gallery-view.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@wuilmerj24/gallery-view)
[![NativeScript compatibility](https://img.shields.io/badge/NativeScript-6%2B-blue.svg?style=for-the-badge&logo=nativescript)](https://nativescript.org)
[![Android Support](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white&labelColor=388E3C)](https://developer.android.com)
[![iOS Support](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=apple&logoColor=white&labelColor=111111)](https://developer.apple.com/ios/)

# @wuilmerj24/gallery-view

```javascript
npm install @wuilmerj24/gallery-view
```
## Note: For the moment, it only supports images

## Usage

Core: Add ```xmlns:gv="@wuilmerj24/gallery-view"``` to ```you_view.xml```
example:

```
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:gv="@wuilmerj24/gallery-view" navigatingTo="navigatingTo" class="page">
    <Page.actionBar>
        <ActionBar title="gallery-view" icon="" class="action-bar">
        </ActionBar>
    </Page.actionBar>
    <StackLayout>
      <gv:GalleryView
          width="100%"
          height="100%"
          albunInit="camera"
          debug="true"
          language="es"
          file_type="image"
          showHeader="true"
          bgColorHeader="gray"
          textcolorHeader="white"
          maxItemSelect="5"
          showFooter="true"
          bgColorFooter="gray"
          textColorFooter="white"
          edit="true"
          preview="true"
          loaded="onLoad"
          errorEvent="onError"
          scroll="onScroll"
            click="onClick"
      />
    </StackLayout>
</Page>

```

Angular
Import in your component module or app module

```typescript
import {NativeScriptGalleryViewModule} from "@wuilmerj24/gallery-view/angular"

@NgModule({
  imports: [
    NativeScriptGalleryViewModule // this line
  ],
  declarations: [GalleryViewComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}

```

```html
<GalleryView 
    width="100%" 
    height="100%"
    debug="true"
    language="es"
    file_type="image"
    showHeader="true"
    bgColorHeader="gray"
    textcolorHeader="white"
    maxItemSelect="5"
    showFooter="true"
    bgColorFooter="gray"
    textColorFooter="white"
    edit="true"
    preview="true"
    (loaded)="onLoad($event)"
    (errorEvent)="onError($event)"
    (scroll)="onScroll($event)"
    (click)="onClick($event)"
  >

  </GalleryView>
```

### Attributes

| Attribute | Type | Default |
| --------- | ---- | ------- |
| debug | ```boolean``` | ```false``` |
| language | ```ELanguage``` | ```es``` |
| file_type | ```EFileType``` | ```image``` |  
| showHeader | ```boolean``` | ```true```|
| bgColorHeader | ```string``` | ```hex color``` or ```string color```|
| textcolorHeader | ```string``` | ```hex color``` or ```string color```|
| maxItemSelect | ```number``` | ```1```|
| showFooter | ```boolean``` | ```true```|
| bgColorFooter | ```string``` | ```hex color``` or ```string color```|
| textColorFooter | ```string``` | ```hex color``` or ```string color```|
| edit | ```boolean``` | ```false```|
| preview | ```boolean``` | ```true```|

### Events

| Event | Params | Description |
| ----- | ------ | ----------- |
| loaded | ```onLoad(args: GalleryViewLoadedEvent)``` | Fired on GalleryView is loaded |
| errorEvent | ```onError(args: ErrorEvent)``` | Fired error on show GalleryView |
| scroll | ```onScroll(args: OnScrolledEvent)``` | Fired to scroll event and return array all files |
| click | ```onClick(args: OnClickedEvent)``` | Fired on click inside item |

### Interfaces

```typescript
export interface IFiles {
  id: string;
  albunName: string;
  data: Array<IFileData>;
  isSelected: boolean;
  icon: string;
}

export interface IFileData {
  id: string;
  uri: string;
  isSelected: boolean;
  info?: any;
}

```

### Examples use

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:gv="@wuilmerj24/gallery-view" navigatingTo="navigatingTo" class="page">
    <Page.actionBar>
        <ActionBar title="gallery-view" icon="" class="action-bar">
        </ActionBar>
    </Page.actionBar>
    <StackLayout>
      <gv:GalleryView 
          width="100%" 
          height="100%"
          debug="true"
          language="es"
          file_type="image"
          showHeader="true"
          bgColorHeader="gray"
          textcolorHeader="white"
          maxItemSelect="5"
          showFooter="true"
          bgColorFooter="gray"
          textColorFooter="white"
          edit="true"
          preview="true"
          loaded="onLoad"
          errorEvent="onError"
          scroll="onScroll"
            click="onClick"
      />
    </StackLayout>
</Page>
```

```typescript
export function onLoad(args: GalleryViewLoadedEvent) {
  console.log('load ');
}

export function onError(args: ErrorEvent) {
  console.log('error ');
}

export function onClick(args: OnClickedEvent) {
  console.log('click ',args.data);
}

export function onScroll(args: OnScrolledEvent) {
  console.log('scroll ',args.data);
}
```

## License

Apache License Version 2.0
