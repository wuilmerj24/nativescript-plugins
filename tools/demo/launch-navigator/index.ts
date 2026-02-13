import { action } from '@nativescript/core';
import { DemoSharedBase } from '../utils';
import { LaunchNavigator } from '@wuilmerj24/launch-navigator';

export class DemoSharedLaunchNavigator extends DemoSharedBase {
  launchNavigator: LaunchNavigator;
  constructor() {
    super();
    this.launchNavigator = new LaunchNavigator();
  }

  // Función para abrir Waze
  launchWaze() {
    this.launchNavigator
      .openApp('waze', {
        destination: { lat: -0.23787730029130222, lng: -78.51379354475597 }, // Madrid Sol
        start: { lat: -0.2543139830631283, lng: -78.49053284992681 }, // Santiago Bernabeu
        mode: 'driving',
        waypoints: [
          { lat: -0.2507518689008863, lng: -78.50516751791037 }, // Una parada intermedia
        ],
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Función para abrir Google Maps
  launchGoogle() {
    this.launchNavigator
      .openApp('google_maps', {
        destination: { lat: -0.23787730029130222, lng: -78.51379354475597 }, // Madrid Sol
        start: { lat: -0.2543139830631283, lng: -78.49053284992681 }, // Santiago Bernabeu
        mode: 'driving',
        waypoints: [
          { lat: -0.2507518689008863, lng: -78.50516751791037 }, // Una parada intermedia
        ],
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Función para abrir Uber
  launchUber() {
    // Uber ignora waypoints y start (usa ubicación actual para pickup generalmente)
    this.launchNavigator
      .openApp('uber', {
        destination: { lat: -0.23787730029130222, lng: -78.51379354475597 }, // Madrid Sol
        start: { lat: -0.2543139830631283, lng: -78.49053284992681 }, // Santiago Bernabeu
        mode: 'driving',
        waypoints: [
          { lat: -0.2507518689008863, lng: -78.50516751791037 }, // Una parada intermedia
        ],
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  launchNavigatorFN() {
    action({
      message: 'Select one option',
      actions: ['google_maps', 'waze', 'citymapper', 'uber', 'yandex', 'sygic', 'here', 'moovit', 'lyft', 'maps_me', 'cabify', '99taxi', 'baidu', 'gaode', 'apple_maps'],
    }).then((res) => {
      if (res) {
        this.launchNavigator
          .openApp(res as any, {
            destination: { lat: -0.23787730029130222, lng: -78.51379354475597 }, // Madrid Sol
            start: { lat: -0.2543139830631283, lng: -78.49053284992681 }, // Santiago Bernabeu
            mode: 'driving',
            waypoints: [
              { lat: -0.2507518689008863, lng: -78.50516751791037 }, // Una parada intermedia
            ],
          })
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }
}
