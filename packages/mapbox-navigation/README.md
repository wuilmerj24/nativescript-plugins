[![npm version](https://img.shields.io/npm/v/@wuilmerj24/mapbox-navigation.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@wuilmerj24/mapbox-navigation)
[![npm downloads](https://img.shields.io/npm/dm/@wuilmerj24/mapbox-navigation.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@wuilmerj24/mapbox-navigation)
[![NativeScript compatibility](https://img.shields.io/badge/NativeScript-6%2B-blue.svg?style=for-the-badge&logo=nativescript)](https://nativescript.org)
[![Android Support](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white&labelColor=388E3C)](https://developer.android.com)
[![iOS Support](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=apple&logoColor=white&labelColor=111111)](https://developer.apple.com/ios/)

# @wuilmerj24/mapbox-navigation
## is a NativeScript plugin that provides turn-by-turn navigation powered by Mapbox Directions and Navigation APIs for Android and iOS.

⚠️ Beta Notice

This plugin is currently in BETA.
The first goal is to stabilize the core navigation flow on Android and iOS.
After the initial stable release, the plugin will progressively adapt and expose all remaining features of the Mapbox Navigation SDK for Android and iOS.

```javascript
npm install @wuilmerj24/mapbox-navigation
```

## Platform Setup Requirements
Android Setup

To allow Mapbox dependencies to be resolved correctly on Android, you must add the following repository configuration to your `app.gradle` file.
```ts
repositories {
    google {
        content {
            includeGroupByRegex("com\\.android.*")
            includeGroupByRegex("com\\.google.*")
            includeGroupByRegex("androidx.*")
        }
    }
    mavenCentral()
    gradlePluginPortal()
    maven {
        url "https://api.mapbox.com/downloads/v2/releases/maven"
        authentication {
            basic(BasicAuthentication)
        }
        credentials {
            username = "mapbox"
            password = ""
        }
    }
}
```
**⚠️ Important
The password field must contain a Mapbox Secret Access Token with download permissions.**

## iOS Setup

On iOS, Mapbox dependencies are downloaded via authenticated requests.
You must create a `.netrc` file in your home directory with the following content:
```text
machine api.mapbox.com
login mapbox
password <INSERT SECRET ACCESS TOKEN>
```
After this file is created, Mapbox SDKs will be installed correctly during the build process.
**⚠️ Make sure the .netrc file has proper permissions:**
```bash
chmod 600 ~/.netrc
```



## Supported Navigation Profiles
The following navigation profiles are currently supported and exposed via TypeScript:
```ts
export type NavigationProfile =
  | 'driving'
  | 'driving-traffic'
  | 'walking'
  | 'cycling';
```

| Profile Value | Description | Android Mapping | iOS Mapping |
|---------------|-------------|-----------------|-------------|
| driving | Car navigation (fast routes) | mapbox/driving | ProfileIdentifier.automobile |
| driving-traffic | Car navigation with traffic avoidance | mapbox/driving-traffic | ProfileIdentifier.automobileAvoidingTraffic |
| walking | Pedestrian navigation | mapbox/walking | ProfileIdentifier.walking |
| cycling | Bicycle navigation | mapbox/cycling | ProfileIdentifier.cycling |

## Supported Navigation Events
The plugin currently emits the following navigation-related events:
| Event Constant | Description |
|----------------|-------------|
| ErrorEvent | Fired when a navigation error occurs |
| OnLocationChanged | Triggered when the user location changes |
| OnRouteProgress | Provides route progress updates |
| OnRouteCanceled | Fired when navigation is canceled |
| OnRoutesReady | Fired when routes are successfully calculated |
| OnRouteFailed | Fired when route calculation fails |
| OnRouteRequestStarted | Fired when a route request is initiated |

## Supported Navigation Options (Current)

The following configuration options are currently supported:
| Option Name          | Type               | Description                     |
| -------------------- | ------------------ | ------------------------------- |
| `accessToken`        | `string`           | Mapbox access token             |
| `waypoints`          | `Array<IWayPoint>` | List of navigation waypoints    |
| `lang`               | `string`           | Language used for instructions  |
| `simulate`           | `boolean`          | Enables simulated navigation    |
| `enableSensors`      | `boolean`          | Enables device sensors          |
| `steps`              | `boolean`          | Enables step-by-step navigation |
| `profile`            | `string`           | Navigation profile (see above)  |
| `alternatives`       | `boolean`          | Enables alternative routes      |
| `voiceInstructions`  | `boolean`          | Enables voice guidance          |
| `enableRefresh`      | `boolean`          | Enables route refresh           |
| `bannerInstructions` | `boolean`          | Enables banner instructions     |


## 🚧 Roadmap (Post-Beta)
After stabilizing this first beta version, future releases will focus on:

- Full feature parity with Mapbox Navigation SDK Android
- Full feature parity with Mapbox Navigation SDK iOS
- Advanced rerouting and off-route detection
- Lane guidance, speed limits, and traffic-aware ETA
- Additional UI customization and extensibility


## Example:
### Nativescript Core:
Add `xmlns:mn="@wuilmerj24/mapbox-navigation"` on `my_map_screen.xml`
`xml`
```xml
<mn:MapboxNavigation
  width="100%"
  height="100%"
  accessToken=""
  simulate="true"
  enableSensors="false"
  profile="walking"
  waypoints="{{ markers }}"
  loaded="{{ loadEvent }}"
  errorEvent="{{ onError }}"
  onRouteRequestStarted="{{ onRouteRequestStarted }}"
/>
```

```ts
markers = [
  {
    name: "Origen",
    latitude: -0.2297083270624009,
    longitude: -78.52256260424409,
    bearing: 45.0,
    bearingTolerance: 15.0,
    color: "#FF0000",
    fillColor: "#FF0000",
    strokeColor: "#990000",
    radius: 300
  },
  {
    name: "Parada A",
    latitude: -0.2445234608304803,
    longitude: -78.52189123293384,
    bearing: 120.0,
    bearingTolerance: 20.0,
    color: "#00FF00",
    fillColor: "#00FF00",
    strokeColor: "#009900",
    radius: 300
  },
  {
    name: "Parada B",
    latitude: -0.26934698359937276,
    longitude: -78.51457970983493,
    bearing: 270.0,
    bearingTolerance: 10.0,
    color: "#0000FF",
    fillColor: "#0000FF",
    strokeColor: "#000099",
    radius: 300
  },
  {
    name: "Destino",
    latitude: -0.2724064474699286,
    longitude: -78.48378875114899,
    bearing: 180.0,
    bearingTolerance: 25.0,
    color: "#FFA500",
    fillColor: "#FFA500",
    strokeColor: "#CC8400",
    radius: 300
  }
];

loadEvent(args) {
  const obj: MapboxNavigation = args.object;
  console.log('MapboxNavigation loaded', obj);
}

onError(args) {
  console.log('MapboxNavigation error', args);
}

onRouteRequestStarted(args) {
  console.log('MapboxNavigation route request started', args);
}
```

## NativeScript + Angular
Import the Module

Import `NativeScriptMapboxNavigationModule` in your feature module or `AppModule`.
```ts
import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { NativeScriptMapboxNavigationModule } from '@wuilmerj24/mapbox-navigation/angular';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptMapboxNavigationModule
  ]
})
export class MapScreenModule {}
```

`html`
```html
<MapboxNavigation
  width="100%"
  height="100%"
  [accessToken]="accessToken"
  [simulate]="true"
  [enableSensors]="false"
  profile="walking"
  [waypoints]="markers"
  (loaded)="onLoaded($event)"
  (errorEvent)="onError($event)"
  (onRouteRequestStarted)="onRouteRequestStarted($event)">
</MapboxNavigation>
```

```ts
import { Component } from '@angular/core';
import { MapboxNavigation } from '@wuilmerj24/mapbox-navigation';

@Component({
  selector: 'ns-map-screen',
  templateUrl: './map-screen.component.xml'
})
export class MapScreenComponent {

  accessToken = '';

  markers = [
    {
      name: 'Origen',
      latitude: -0.2297083270624009,
      longitude: -78.52256260424409,
      bearing: 45.0,
      bearingTolerance: 15.0,
      color: '#FF0000',
      fillColor: '#FF0000',
      strokeColor: '#990000',
      radius: 300
    },
    {
      name: 'Parada A',
      latitude: -0.2445234608304803,
      longitude: -78.52189123293384,
      bearing: 120.0,
      bearingTolerance: 20.0,
      color: '#00FF00',
      fillColor: '#00FF00',
      strokeColor: '#009900',
      radius: 300
    },
    {
      name: 'Parada B',
      latitude: -0.26934698359937276,
      longitude: -78.51457970983493,
      bearing: 270.0,
      bearingTolerance: 10.0,
      color: '#0000FF',
      fillColor: '#0000FF',
      strokeColor: '#000099',
      radius: 300
    },
    {
      name: 'Destino',
      latitude: -0.2724064474699286,
      longitude: -78.48378875114899,
      bearing: 180.0,
      bearingTolerance: 25.0,
      color: '#FFA500',
      fillColor: '#FFA500',
      strokeColor: '#CC8400',
      radius: 300
    }
  ];

  onLoaded(event: any) {
    const navigation: MapboxNavigation = event.object;
    console.log('MapboxNavigation loaded', navigation);
  }

  onError(event: any) {
    console.log('MapboxNavigation error', event);
  }

  onRouteRequestStarted(event: any) {
    console.log('MapboxNavigation route request started', event);
  }
}
```

## License

Apache License Version 2.0
