import { Observable, Utils } from '@nativescript/core';
import { NavigationApp, NavigationOptions, TransportMode } from '.';

export abstract class LaunchNavigatorCommon extends Observable {
  openApp(appName: NavigationApp, options: NavigationOptions): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        const url = LaunchNavigatorCommon.getUrl(appName, options);

        // --- ANDROID ---
        if (__ANDROID__) {
          const context = Utils.android.getApplicationContext();
          const intent = new android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse(url));

          // Para Android, intentamos forzar el paquete si sabemos cuál es
          // Esto evita que salga el popup de "Elegir aplicación" si el usuario ya eligió una app específica
          const packageName = LaunchNavigatorCommon.getAndroidPackageName(appName);
          if (packageName) {
            intent.setPackage(packageName);
          }

          // Verificar si hay una app que pueda manejar esto
          if (intent.resolveActivity(context.getPackageManager()) !== null) {
            intent.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
            context.startActivity(intent);
            resolve(true);
          } else {
            console.log(`App ${appName} no instalada.`);
            resolve(false);
          }
        }

        // --- IOS ---
        else if (__IOS__) {
          const nsUrl = NSURL.URLWithString(url);
          const app = UIApplication.sharedApplication;

          if (app.canOpenURL(nsUrl)) {
            app.openURLOptionsCompletionHandler(nsUrl, null, (success) => {
              resolve(success);
            });
          } else {
            console.log(`App ${appName} no instalada o no permitida en Info.plist`);
            resolve(false);
          }
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Mapeo de nombres de paquetes Android
   */
  private static getAndroidPackageName(app: NavigationApp): string | null {
    const packages: { [key in NavigationApp]?: string } = {
      google_maps: 'com.google.android.apps.maps',
      waze: 'com.waze',
      citymapper: 'com.citymapper.app.release',
      uber: 'com.ubercab',
      yandex: 'ru.yandex.yandexnavi',
      sygic: 'com.sygic.aura',
      here: 'com.here.app.maps',
      moovit: 'com.tranzmate',
      lyft: 'me.lyft.android',
      maps_me: 'com.mapswithme.maps.pro',
      cabify: 'com.cabify.rider',
      '99taxi': 'com.taxis99',
      baidu: 'com.baidu.BaiduMap',
      gaode: 'com.autonavi.minimap',
    };
    return packages[app] || null;
  }

  private static getUrl(app: NavigationApp, options: NavigationOptions): string {
    const { start, destination, mode, waypoints, language } = options;

    // Helper para coordenadas string
    const destStr = `${destination.lat},${destination.lng}`;
    const startStr = start ? `${start.lat},${start.lng}` : '';

    switch (app) {
      case 'google_maps':
        // Soporta waypoints y modos
        let gParams = `api=1&destination=${destStr}`;
        if (start) gParams += `&origin=${startStr}`;
        if (mode) gParams += `&travelmode=${this.mapGoogleMode(mode)}`;
        if (waypoints && waypoints.length > 0) {
          const wpStr = waypoints.map((w) => `${w.lat},${w.lng}`).join('|');
          gParams += `&waypoints=${wpStr}`;
        }
        if (language) gParams += `&hl=${language}`;

        return __IOS__ ? `comgooglemaps://?${gParams}` : `https://www.google.com/maps/dir/?${gParams}`; // Android maneja bien el link universal

      case 'waze':
        // Waze usa 'll' para destino y 'navigate=yes'
        return `waze://?ll=${destStr}&navigate=yes`;

      case 'apple_maps':
        // Solo iOS
        let aParams = `daddr=${destStr}`;
        if (start) aParams += `&saddr=${startStr}`;
        if (mode) aParams += `&dirflg=${this.mapAppleMode(mode)}`;
        return `http://maps.apple.com/?${aParams}`;

      case 'citymapper':
        return `citymapper://directions?endcoord=${destStr}`;

      case 'uber':
        // Requiere Client ID (opcional para abrir, obligatorio para ganar $)
        let uParams = `action=setPickup&pickup=my_location&dropoff[latitude]=${destination.lat}&dropoff[longitude]=${destination.lng}`;
        return `uber://?${uParams}`;

      case 'lyft':
        return `lyft://ridetype?id=lyft&destination[latitude]=${destination.lat}&destination[longitude]=${destination.lng}`;

      case 'yandex':
        return `yandexnavi://build_route_on_map?lat_to=${destination.lat}&lon_to=${destination.lng}`;

      case 'sygic':
        // Sygic usa una sintaxis extraña llamada Magick URL
        return `com.sygic.aura://coordinate|${destination.lng}|${destination.lat}|drive`;

      case 'here':
        // Here WeGo
        return `share_route://?dlat=${destination.lat}&dlont=${destination.lng}&t=${mode || 'drive'}`;

      case 'moovit':
        return `moovit://directions?dest_lat=${destination.lat}&dest_lon=${destination.lng}&auto_run=true&partner_id=YOUR_PARTNER_ID`;

      case 'maps_me':
        return `mapsme://route?dlat=${destination.lat}&dlon=${destination.lng}&saddr=${startStr}`;

      case 'cabify':
        // Cabify suele usar json en el esquema, es complejo, a veces es mejor geo: genérico
        return `cabify://cabify/journey?json=${JSON.stringify({ destination: { lat: destination.lat, lon: destination.lng } })}`;

      case '99taxi':
        return `taxis99://call?endLat=${destination.lat}&endLng=${destination.lng}`;

      case 'baidu':
        // Baidu usa coordenadas BD09, habría que convertir, pero aceptan coords comunes con corrección automática a veces.
        return `baidumap://map/direction?destination=${destStr}&mode=${mode || 'driving'}&src=ios.nativescript.app`;

      case 'gaode': // Amap
        return `iosamap://path?dlat=${destination.lat}&dlon=${destination.lng}&t=${mode === 'walking' ? 2 : 0}`;

      default:
        // Fallback a Geo genérico (Android) o Apple Maps (iOS)
        return __ANDROID__ ? `geo:${destStr}?q=${destStr}` : `http://maps.apple.com/?daddr=${destStr}`;
    }
  }

  private static mapGoogleMode(mode: TransportMode): string {
    const modes = { driving: 'driving', walking: 'walking', bicycling: 'bicycling', transit: 'transit' };
    return modes[mode] || 'driving';
  }

  private static mapAppleMode(mode: TransportMode): string {
    const modes = { driving: 'd', walking: 'w', transit: 'r' }; // Apple no tiene bici universal en url scheme antiguo
    return modes[mode] || 'd';
  }
}
