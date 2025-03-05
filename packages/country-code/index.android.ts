import { action, ActionBar, ActionItem, ActionItems, Application, Builder, Button, Color, CoreTypes, Frame, getCurrentPage, getRootLayout, GridLayout, GridUnitType, ItemSpec, Label, Page, RootLayout, Screen, SearchBar, ShowModalOptions, StackLayout, View, Image, ListView, ItemEventData, EventData, TextField, Utils, TextView, AndroidActivityRequestPermissionsEventData, AndroidApplication } from '@nativescript/core';
import { Codigos, CodigosI, Lista } from './common';

let codigos: Array<any> = new Array();

export function getCurrentPais(addPlus: boolean): Promise<any> {
  return new Promise((rs, rj) => {
    let cod: Array<CodigosI> = Codigos;
    console.log(checkPermisos());
    if (checkPermisos()) {
      let context: android.content.Context = Application.android.foregroundActivity || Application.android.context;
      let manager: android.telephony.TelephonyManager = context.getSystemService(android.content.Context.TELEPHONY_SERVICE);
      let locale: string = manager.getNetworkCountryIso();
      let countryCode: Array<CodigosI> = cod.filter((item) => item.iso2.toUpperCase() === locale.toUpperCase());
      if (countryCode.length > 0) {
        rs({ pais: countryCode[0].nombre, codigo: addPlus ? `+${countryCode[0].codigo}` : countryCode[0].codigo, numCell: addPlus ? manager.getLine1Number() : manager.getLine1Number().substring(1) });
      } else {
        rj({ error: 'Pais no encontrado' });
      }
    } else {
      solicitarPermiso().then((res) => {
        if (res) {
          let context: android.content.Context = Application.android.foregroundActivity || Application.android.context;
          let manager: android.telephony.TelephonyManager = context.getSystemService(android.content.Context.TELEPHONY_SERVICE);
          let locale: string = manager.getNetworkCountryIso();
          let countryCode: Array<CodigosI> = cod.filter((item) => item.iso2.toUpperCase() === locale.toUpperCase());
          if (countryCode.length > 0) {
            rs({ pais: countryCode[0].nombre, codigo: addPlus ? `+${countryCode[0].codigo}` : countryCode[0].codigo, numCell: addPlus ? manager.getLine1Number() : manager.getLine1Number().substring(1) });
          } else {
            rj({ error: 'Pais no encontrado' });
          }
        }
      });
    }
  });
}

function checkPermisos(): any {
  let permisos: Array<any> = new Array();
  if (android.os.Build.VERSION.SDK_INT >= 33) {
    permisos = [android.Manifest.permission.READ_PHONE_NUMBERS, android.Manifest.permission.READ_PHONE_STATE, android.Manifest.permission.READ_SMS];
  } else {
    permisos = [android.Manifest.permission.READ_PHONE_NUMBERS, android.Manifest.permission.READ_PHONE_STATE, android.Manifest.permission.READ_SMS];
  }
  const granted = android.content.pm.PackageManager.PERMISSION_GRANTED;
  const permisos_respuesta: Array<any> = new Array();
  for (let i: number = 0; i < permisos.length; i++) {
    if (android.os.Build.VERSION.SDK_INT < 23) {
      permisos_respuesta.push((Application.android.foregroundActivity || (Application.android.context as android.content.Context)).checkPermission(permisos[i], android.os.Process.myPid(), android.os.Process.myUid()) === android.content.pm.PackageManager.PERMISSION_GRANTED ? 'authorized' : 'denied');
    } else {
      permisos_respuesta.push((Application.android.foregroundActivity || (Application.android.context as android.content.Context)).checkSelfPermission(permisos[i]));
    }
  }
  if (permisos_respuesta.some((elemento) => elemento === -1)) {
    return false;
  } else if (permisos_respuesta.some((elemento) => elemento === 0)) {
    return true;
  } else {
    return false;
  }
}

function solicitarPermiso(): Promise<any> {
  let permisos: Array<any> = new Array();
  if (android.os.Build.VERSION.SDK_INT >= 33) {
    permisos = [android.Manifest.permission.READ_PHONE_NUMBERS, android.Manifest.permission.READ_PHONE_STATE, android.Manifest.permission.READ_SMS];
  } else {
    permisos = [android.Manifest.permission.READ_PHONE_NUMBERS, android.Manifest.permission.READ_PHONE_STATE, android.Manifest.permission.READ_SMS];
  }

  const activity: android.app.Activity = Application.android.foregroundActivity || Application.android.startActivity;
  return new Promise<any>((rs, rj) => {
    try {
      activity.requestPermissions(permisos, 1001);
      const onActivityResult = (args: AndroidActivityRequestPermissionsEventData) => {
        let grantedPermissions: Array<any> = new Array();
        if (args.requestCode === 1001) {
          Application.off(AndroidApplication.activityRequestPermissionsEvent, onActivityResult);
          const results = args.grantResults;
          for (let j = 0; j < permisos.length; j++) {
            const permission = permisos[j];
            if (results.length > j && results[j] === android.content.pm.PackageManager.PERMISSION_GRANTED) {
              grantedPermissions.push('authorized');
            } else {
              if (activity.shouldShowRequestPermissionRationale(permission)) {
                grantedPermissions.push('denied');
              } else {
                grantedPermissions.push('never_ask_again');
              }
            }
          }

          if (grantedPermissions.some((elemento) => elemento === 'denied')) {
            // CLog('se mete en denied');
            rj(false);
          } else if (grantedPermissions.some((elemento) => elemento === 'authorized')) {
            // CLog('se mete en authorized');
            rs(true);
          }
        }
      };
      AndroidApplication.on(AndroidApplication.activityRequestPermissionsEvent, onActivityResult);
    } catch (error) {
      rj(error);
    }
  });
}

export let listaCodigos: Array<CodigosI> = Codigos;

export function showListPaises(): Promise<any> {
  return new Promise((rs, rj) => {
    const options: ShowModalOptions = {
      closeCallback(...args) {
        if (args.length > 0) {
          rs(args);
        } else {
          rj(null);
        }
      },
      context: {},
      animated: true,
      fullscreen: true,
      stretched: true,
    };
    getCurrentPage().showModal(new Lista(), options);
  });
}
