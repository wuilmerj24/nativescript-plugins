[![npm version](https://img.shields.io/npm/v/@wuilmerj24/launch-navigator.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@wuilmerj24/launch-navigator)
[![npm downloads](https://img.shields.io/npm/dm/@wuilmerj24/launch-navigator.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@wuilmerj24/launch-navigator)
[![NativeScript compatibility](https://img.shields.io/badge/NativeScript-6%2B-blue.svg?style=for-the-badge&logo=nativescript)](https://nativescript.org)
[![Android Support](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white&labelColor=388E3C)](https://developer.android.com)
[![iOS Support](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=apple&logoColor=white&labelColor=111111)](https://developer.apple.com/ios/)

# @wuilmerj24/launch-navigator

```javascript
npm install @wuilmerj24/launch-navigator
```

## Usage

## API

## Methods

| Method | Description |
| ------ | ----------- |
| checkInstalledApp(packageName: string or SupportedApps) | Checks if the app is installed on Android (com.id.pack) or iOS (urlscheme://). You can also use SupportedApps, which returns a boolean. |
| openGoogleMaps(OpcionesGoogleMaps) | Opens the Google Maps app. Returns a Promise. |
| openWaze(OpcionesWaze) | Opens the Waze app. Returns a Promise. |
| openBaidumap(OpcionesBaidumap) | Opens the BaiduMap app. Returns a Promise. |
| openAppleMaps(OpcionesAppleMaps) | Opens the Apple Maps app. Returns a Promise. |

| SupportedApps | |
| -------------- | - |
| Google Map | Android e iOS |
| Waze | Android e iOS |
| Apple Maps | iOS |

## Response

| Property | Description |
| --------- | ----------- |
| error | Boolean. Indicates whether an error occurred or not. |
| errorText | String error message. |

## TransporteGoogleMaps

| Property | Description |
| --------- | ----------- |
| DRIVING | |
| WALKING | |
| BICYCLING | |
| TRANSIT | |

## Options

### OpcionesGoogleMaps

| Property | Type | Description |
| --------- | ---- | ----------- |
| daddr | string or Array<string> | Destination address |
| saddr? | string or Array<string> | Starting address |
| modoTransporte | TransporteGoogleMaps | Transportation type |
| tipoMapa | TURN_BY_TURN or MAPS | If it's TURN_BY_TURN on Android, it will start navigation automatically |
| avoid? | string | Sets characteristics the route should try to avoid. Values "t", "h", or "f" |

### OpcionesWaze

| Property | Type | Description |
| --------- | ---- | ----------- |
| destino | string or Array<string> | Destination address |
| navigate | string | Values yes or `no, starts or doesn't start navigation in the Waze app |

### OpcionesAppleMaps

| Property | Type | DescrDescriptionipción |
| --------- | ---- | ----------- |
| tipo | string | Values s, k, h, or r. Map type transit, standard, etc. |
| daddr | string or Array<string> | Destination address |
| saddr | string or Array<string> | Starting address |
| dirflg | string | Values d, w, or r. Transportation mode |

## Ejemplos

### Verificar si la app esta instalada

```javascript
checkAppInstalada(AppsSoportadas.WAZE o AppsSoportadas.APPLE_MAPS o AppsSoportadas.BAIDUMAP o AppsSoportadas.GOOGLE_MAPS): boolean
```

### Google Maps

```javascript
openGoogleMaps({
  daddr:"Maracay aragua venezuela",
  modoTransporte:TransporteGoogleMaps.DRIVING,
  tipoMapa:"TURN_BY_TURN",
  saddr:"Villa de cura aragua venezuela",
  avoid:"fth"
 }).then((res)=>{
  //Ok
 }).catch((err)=>{
  //Error
 })  
```

### Waze

```javascript
openWaze({
  destino:"tia el recreo quito pichincha ecuador",
  navigate:"yes"
}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
})
```

### Apple Maps solo para iOS

```javascript
openAppleMaps({
  daddr:"Tia el recreo quito ecuador",
  dirflg:"d",
  tipo:"s",
  saddr:"Maracay aragua veneuzela",
}).then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(err);
})
``

## License

Apache License Version 2.0
