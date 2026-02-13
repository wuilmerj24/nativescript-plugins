import { NativeScriptConfig } from '@nativescript/core';

export default {
  ios: {
    SPMPackages: [
      {
        name: 'mapbox-navigation-ios',
        repositoryURL: 'https://github.com/mapbox/mapbox-navigation-ios.git',
        version: '3.18.0',
        libs: ['MapboxDirections', 'MapboxNavigationCore', 'MapboxNavigationUIKit', '_MapboxNavigationLocalization', 'mapbox-directions-swift'],
      },
    ],
  },
} as NativeScriptConfig;
