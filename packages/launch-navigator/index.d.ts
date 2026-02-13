import { LaunchNavigatorCommon } from './common';
export type TransportMode = 'driving' | 'walking' | 'bicycling' | 'transit';
export interface LatLng {
  lat: number;
  lng: number;
}

export interface NavigationOptions {
  destination: LatLng;
  start?: LatLng; // Si es null, usa GPS actual
  waypoints?: LatLng[]; // No todas las apps soportan esto
  mode?: TransportMode;
  language?: string; // e.g., 'es', 'en' (Soporte limitado por app)
}

// Lista de Apps soportadas
export type NavigationApp = 'google_maps' | 'waze' | 'citymapper' | 'uber' | 'yandex' | 'sygic' | 'here' | 'moovit' | 'lyft' | 'maps_me' | 'cabify' | '99taxi' | 'baidu' | 'gaode' | 'apple_maps';

export declare class LaunchNavigator extends LaunchNavigatorCommon {}
