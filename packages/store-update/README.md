[![npm version](https://img.shields.io/npm/v/@wuilmerj24/store-update.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@wuilmerj24/store-update)
[![npm downloads](https://img.shields.io/npm/dm/@wuilmerj24/store-update.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@wuilmerj24/store-update)
[![NativeScript compatibility](https://img.shields.io/badge/NativeScript-6%2B-blue.svg?style=for-the-badge&logo=nativescript)](https://nativescript.org)
[![Android Support](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white&labelColor=388E3C)](https://developer.android.com)
[![iOS Support](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=apple&logoColor=white&labelColor=111111)](https://developer.apple.com/ios/)

# @wuilmerj24/store-update

```javascript
npm install @wuilmerj24/store-update
```
# App Version Utilities

Este módulo proporciona métodos útiles para obtener información de versión y verificar actualizaciones en aplicaciones NativeScript (Android e iOS).

## Métodos Disponibles

| Method | Description | Android | iOS |
|--------|-------------|---------|-----|
| `getAppId()` | Retrieves the installed app's package ID. | ✓ | ✓ |
| `getLocalVersion()` | Retrieves the installed app's `versionName` (Android) or `CFBundleShortVersionString` (iOS). | ✓ | ✓ |
| `getNubeVersion(country?)` | Gets the latest available version from the Play Store (Android) or the App Store (iOS). The optional `country` parameter is **iOS-only** and specifies the country where the app should be looked up. | ✓ | ✓ |
| `updateApp(forceUpdate: boolean, okTextButton?: string, cancelTextButton?: string, message?: string, openAppStore?: boolean, bgColor?: string, textColor?: string, bgBtnColor?: string, textbtnColor?: string)` | Checks for a new version available in the app stores. If `forceUpdate=true`, it forces the user to update. | ✓ | ✓ |
| `checkUpdateNative()` | **Android only**: Updates the app without leaving it (using In-App Updates). | ✓ | ✗ |


## Uso Básico

```typescript
import { StoreUpdate } from '@wuilmerj24/store-update';
const store:StoreUpdate=new StoreUpdate();
// Obtener información de versión
console.log('Version:', store.getAppId());

// Verificar actualizaciones
store.checkUpdateNative(); // Con alerta interactiva

## License

Apache License Version 2.0
