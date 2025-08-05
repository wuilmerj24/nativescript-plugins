[![npm version](https://img.shields.io/npm/v/@wuilmerj24/url-preview.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@wuilmerj24/url-preview)
[![npm downloads](https://img.shields.io/npm/dm/@wuilmerj24/url-preview.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@wuilmerj24/url-preview)
[![NativeScript compatibility](https://img.shields.io/badge/NativeScript-6%2B-blue.svg?style=for-the-badge&logo=nativescript)](https://nativescript.org)
[![Android Support](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white&labelColor=388E3C)](https://developer.android.com)
[![iOS Support](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=apple&logoColor=white&labelColor=111111)](https://developer.apple.com/ios/)

# @wuilmerj24/url-preview

```javascript
npm install @wuilmerj24/url-preview
```
## Component Documentation
This component allows you to configure various aspects of the UI, including colors, border radius, and the type of view. Below is a table listing the available attributes and their respective types.

| Attribute | Type | Descriptions |
|-----------|------|--------------|
| url | string | URL of the web page from which information will be fetched. |
| bgColor | string | Background color of the container.|
| titleTextColor | string | Text color used for the title.|
| descriptionTextColor | string | Text color used for the description. |
| borderRadiusImage | number | Border radius applied to the image within the container. |
| loadingColor | string | Color of the loading indicator shown while fetching information. |
| borderRadius | number | Border radius applied to the container, can be a string, number, or specific length units. |

## Examples

### NativeScript Core


To use the component in a NativeScript Core project, add the following XML namespace to your page and use the UrlPreview `xmlns:up="@wuilmerj24/url-preview"` view as shown below:
```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:up="@wuilmerj24/url-preview">
    <ActionBar title="URL Preview Example" />

    <StackLayout>
        <!-- URL Preview Component -->
        <up:UrlPreview url="" />
    </StackLayout>
</Page>
```
### NativeScript Angular
```typescript
import {NativeScriptUrlPreviewModule} from "@wuilmerj24/url-preview/angular"

@NgModule({
  imports: [
    NativeScriptUrlPreviewModule // this line
  ],
  declarations: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
```

```html
<UrlPreview url="" > </UrlPreview>
```

**If you only want to get information and create your own widget, use getData like this.**
```typescript
const urlPreview: UrlPreview = new UrlPreview();
urlPreview.getData("https://www.npmjs.com/package/@wuilmerj24/url-preview").then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
```

## License

Apache License Version 2.0
