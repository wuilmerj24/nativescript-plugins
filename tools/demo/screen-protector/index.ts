import { TapGestureEventData, Button, Color,Image } from '@nativescript/core';
import { DemoSharedBase } from '../utils';
import { ScreenProtector } from '@wuilmerj24/screen-protector';

export class DemoSharedScreenProtector extends DemoSharedBase {

  screenProtector: ScreenProtector;
  private _icono: string = "~/assets/lock_open.png";
  constructor() {
    super();
    this.screenProtector = new ScreenProtector();
    this.notifyPropertyChange("icono", this._icono);
  }

  get icono(): string {
    return this._icono;
  }

  set icono(value: string) {
    if (this._icono !== value) {
      this._icono = value;
      this.notifyPropertyChange("icono", value);
    }
  }

  lockscreen(args: TapGestureEventData) {
    const btn: Button = <Button>args.object;
    const page = btn.page;
    const imagen = page.getViewById("lockImage") as Image;
    imagen.tintColor = new Color("red");
    imagen.animate({ opacity: 0, duration: 200 }).then(() => {
      this.icono = "~/assets/lock.png";
      imagen.animate({ opacity: 1, duration: 200 });
    });
    let res = this.screenProtector.lockScreenShoots();
    console.log(res);
  }

  unlockscreen(args: TapGestureEventData) {
    const btn: Button = <Button>args.object;
    const page = btn.page;
    const imagen = page.getViewById("lockImage") as Image;
    imagen.tintColor = new Color("green");
    imagen.animate({ rotate: 180, duration: 300 }).then(() => {
      this.icono = "~/assets/lock_open.png";
      imagen.rotate = 0; // reset rotation
    });
    let res = this.screenProtector.unlockScreenShoots();
    console.log(res);
  }

  screenshotevent() {
    this.screenProtector.setScreenshootEvent(() => {
      alert("La app no permite screenshot ")
    })
  }
  screenrecordevent() {
    this.screenProtector.setScreenRecorderEvent(() => {
      alert("La app no permite screenshot ")
    })
  }
}