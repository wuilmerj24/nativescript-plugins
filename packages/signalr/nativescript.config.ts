import { NativeScriptConfig } from '@nativescript/core';

export default {
  ios: {
    SPMPackages: [
      {
        name: 'signalr-client-swift',
        repositoryURL: 'https://github.com/dotnet/signalr-client-swift',
        version: 'dev',
        libs: ['SignalRClient'],
      },
    ],
  },
} as NativeScriptConfig;
