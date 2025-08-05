[![npm version](https://img.shields.io/npm/v/@wuilmerj24/screen-protector.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@wuilmerj24/screen-protector)
[![npm downloads](https://img.shields.io/npm/dm/@wuilmerj24/screen-protector.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@wuilmerj24/screen-protector)
[![NativeScript compatibility](https://img.shields.io/badge/NativeScript-6%2B-blue.svg?style=for-the-badge&logo=nativescript)](https://nativescript.org)
[![Android Support](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white&labelColor=388E3C)](https://developer.android.com)
[![iOS Support](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=apple&logoColor=white&labelColor=111111)](https://developer.apple.com/ios/)

# @wuilmerj24/screen-protector

A NativeScript plugin to protect sensitive content from screen capture and recording.  
This plugin provides API methods to block screenshots and detect screen recording events — with native support for both **iOS** and **Android**.

---

## 📦 Installation

```javascript
npm install @wuilmerj24/screen-protector
```


---

## 📱 Platform Support

| Feature                    | Android | iOS     |
|---------------------------|:-------:|:-------:|
| Block Screenshots         | ✅      | ✅ |
| Block Screen Recording    | ✅      | ✅ |
| Detect Screenshots        | ❌      | ✅ |
| Detect Screen Recording   | ❌      | ✅ |

---

## 🚀 Usage

### Import the plugin

```ts
import { ScreenProtector } from '@wuilmerj24/screen-protector';
```

### Initialize and use

```ts
const protector = new ScreenProtector();

// Block screenshots
protector.lockScreenShoots();

// Optionally set up listeners (iOS only)
protector.setScreenshootEvent(() => {
  console.log('📸 Screenshot detected (iOS)');
});

protector.setScreenRecorderEvent((isRecording: boolean) => {
  console.log('📹 Screen recording changed:', isRecording);
});
```

### To remove protection

```ts
protector.unlockScreenShoots();

// Remove observers (iOS only)
protector.removeScreenShootObserver();
protector.removeScreenRecorderObserver();
```

---

## 🧪 API

### `lockScreenShoots(): boolean`

Blocks screenshots and screen recordings:
- On **iOS**, it uses a secure UITextField to force the system to blur the screen.
- On **Android**, it sets `FLAG_SECURE` to prevent all screen capture mechanisms.

---

### `unlockScreenShoots(): boolean`

Restores the normal behavior, allowing screenshots again.

---

### `setScreenshootEvent(callback: () => void): void`  
**iOS only**

Registers a listener that fires when the user takes a screenshot.

---

### `setScreenRecorderEvent(callback: (isRecording: boolean) => void): void`  
**iOS only**

Registers a listener that tracks whether screen recording is active (`true` or `false`).

---

### `removeScreenShootObserver(): void`  
**iOS only**

Removes the screenshot observer.

---

### `removeScreenRecorderObserver(): void`  
**iOS only**

Removes the screen recording observer.

---

## 📝 License

Apache License Version 2.0

---

## 👨‍💻 Author

Maintained by [@wuilmerj24](https://github.com/wuilmerj24)

## License

Apache License Version 2.0
