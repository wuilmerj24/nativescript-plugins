import { TapGestureEventData, Button, Page, Label } from '@nativescript/core';
import { DemoSharedBase } from '../utils';
import { AppsSoportadas, checkAppInstalada, openAppleMaps, openGoogleMaps, openWaze, TransporteGoogleMaps } from '@wuilmerj24/launch-navigator';

export class DemoSharedLaunchNavigator extends DemoSharedBase {

  checkApp(args: TapGestureEventData) {
    const btn: Button = args.object as Button;
    const page: Page = btn.page;
    const lbl: Label = page.getViewById('lblInstalled');
    // lbl.text = `App installed ${checkAppInstalada('com.google.android.apps.maps')}`;
    lbl.text = `App installed ${checkAppInstalada(AppsSoportadas.GOOGLE_MAPS)}`;
  }

  fnopenGoogleMaps(args: TapGestureEventData) {
    openGoogleMaps({
      daddr: ['villa de cura, aragua. Venezuela', 'quito, pichincha ecuador'],
      saddr: ['maracay aragua venezuela'],
      modoTransporte: TransporteGoogleMaps.DRIVING,
      tipoMapa: 'MAPS',
      avoid: 't',
    })
      .then((res) => {
        console.log('res ', res);
      })
      .catch((err) => {
        console.log('err ', err);
      });
  }

  fnopenWaze(args: TapGestureEventData) {
    openWaze({
      destino: 'Guayaquil',
      navigate: 'yes',
    })
      .then((res) => {
        console.log('res ', res);
      })
      .catch((err) => {
        console.log('err ', err);
      });
  }

  fnopenApple(args: TapGestureEventData) {
    openAppleMaps({
      daddr: 'cc recreo quito ecuador',
      saddr: 'parque la carolina quito ecuador',
      dirflg: 'd',
      tipo: 'k',
    })
      .then((res) => {
        console.log('res ', res);
      })
      .catch((err) => {
        console.log('err ', err);
      });
  }
}