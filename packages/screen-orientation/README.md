[![npm version](https://img.shields.io/npm/v/@wuilmerj24/screen-orientation.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@wuilmerj24/screen-orientation)
[![npm downloads](https://img.shields.io/npm/dm/@wuilmerj24/screen-orientation.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@wuilmerj24/screen-orientation)
[![NativeScript compatibility](https://img.shields.io/badge/NativeScript-6%2B-blue.svg?style=for-the-badge&logo=nativescript)](https://nativescript.org)
[![Android Support](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white&labelColor=388E3C)](https://developer.android.com)
[![iOS Support](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=apple&logoColor=white&labelColor=111111)](https://developer.apple.com/ios/)

# @wuilmerj24/screen-orientation

```javascript
npm install @wuilmerj24/screen-orientation
```


## Use

## API

### Methods

| Method | Description |
| ------ | ----------- |
| getOrientacion() | Gets the current screen orientation. |
| setOrientacion(Orientacion) | Change the screen orientation. Returns a Promise. |

### Supported orientation types

### Orientation

| Orientation | Descriptions |
| ----------- | ----------- |
| ANY | Orientation is unlocked: all orientations are supported. |
| PORTRAIT | Change the screen rotation to PORTRAIT mode. |
| PORTRAIT_REVERSE | Change the screen rotation to PORTRAIT_REVERSE mode. |
| LANDSCAPE | Change the screen rotation to LANDSCAPE mode |
| LANDSCAPE_REVERSE | Change the screen rotation to LANDSCAPE_REVERSE mode |
| UNSPECIFIED | Does not change orientation. |

### Orientation types for Android only.
| Orientation | Description |
| ----------- | ----------- |
| PORTRAIT_SENSOR | Change the screen rotation to PORTRAIT_SENSOR mode when the mobile is rotated in PORTRAIT or PORTRAIT by rotating the screen 180°. |
| LANDSCAPE_SENSOR | Change the screen rotation to LANDSCAPE_SENSOR mode when the mobile is rotated in LANDSCAPE or LANDSCAPE by rotating the screen 270°. |

### Get the screen orientation

```javascript
//Gets the current orientation in string format.
let orientacion = getOrientacion();
```

### Change the screen orientation

```javascript
//change the orientation;
setOrientacion(Orientacion.ANY).then((res:boolean)=>{
  console.log(res)
})
```

## License

Apache License Version 2.0
