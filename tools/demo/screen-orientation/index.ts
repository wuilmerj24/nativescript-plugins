import { DemoSharedBase } from '../utils';
import { getOrientacion, Orientacion, setOrientacion } from '@wuilmerj24/screen-orientation';

export class DemoSharedScreenOrientation extends DemoSharedBase {

  getOrientaicon() {
    let orientacion = getOrientacion();
    console.log("orientacion ", orientacion);
  }

  setOrientationF() {
    setOrientacion(Orientacion.PORTRAIT_REVERSE).then((res: boolean) => {
      console.log(res)
    })
  }
}