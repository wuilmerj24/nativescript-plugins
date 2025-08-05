import { ContentView } from '@nativescript/core';
import { EGalleryViewEvents } from './events';
import { ELanguage } from './language.enum';
export enum TipoFile {
  IMAGE = 'IMAGEN',
  VIDEO = 'VIDEO',
}

export interface IFiles {
  id: string;
  albunName: string;
  data: Array<IFileData>;
  isSelected: boolean;
  icon: string;
}

export interface IFileData {
  id: string;
  uri: string;
  isSelected: boolean;
  info?: any;
  tipo: TipoFile;
}

export class GalleryViewUtil {
  public static debug: boolean = false;
}

export const CLog = (...args: any[]) => {
  if (GalleryViewUtil.debug) {
    console.log('GalleryView ---', args);
  }
};

export class GalleryViewCommon extends ContentView {
  public set debug(value: boolean) {
    GalleryViewUtil.debug = value;
  }

  public static errorEvent = EGalleryViewEvents.ErrorEvent;
  public static scrollEvent = EGalleryViewEvents.OnScrolledEvent;
  public static clickEvent = EGalleryViewEvents.OnClickedEvent;

  @GetSetProperty()
  public language: ELanguage = ELanguage.Spanish;
  @GetSetProperty()
  public bgColorHeader: string = 'red';
  @GetSetProperty()
  public textcolorHeader: string = 'blue';
  @GetSetProperty()
  public maxItemSelect: number = 1;
  @GetSetProperty()
  public bgColorFooter: string = 'green';
  @GetSetProperty()
  public textColorFooter: string = 'black';
  @GetSetProperty()
  public preview: boolean = true;
  @GetSetProperty()
  public edit: boolean = true;
  @GetSetProperty()
  colorRadio: string = 'red';

  public sendEvent(eventName: string, data?: any, msg?: string, dx?: number, dy?: number) {
    this.notify({
      eventName,
      object: this,
      data,
      dx: dx,
      dy: dy,
      message: msg,
    });
  }
}

export function GetSetProperty() {
  return (target, propertyKey: string) => {
    Object.defineProperty(target, propertyKey, {
      get: function () {
        return this['_' + propertyKey];
      },
      set: function (value) {
        if (this['_' + propertyKey] === value) {
          return;
        }
        if (value === 'true') {
          value = true;
        } else if (value === 'false') {
          value = false;
        }
        this['_' + propertyKey] = value;
      },
      enumerable: true,
      configurable: true,
    });
  };
}
