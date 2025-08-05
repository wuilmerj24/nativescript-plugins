import { GalleryViewCommon, TipoFile } from './common';

export declare class GalleryView extends GalleryViewCommon {
  /**
   * Evento que se dispara cuando ocurre un error en la galería.
   *
   * @type {EGalleryViewEvents.ErrorEvent}
   */
  public static errorEvent: EGalleryViewEvents.ErrorEvent;

  /**
   * Evento que se dispara cuando se hace scroll.
   *
   * @type {EGalleryViewEvents.OnScrolledEvent}
   */
  public static scrollEvent: EGalleryViewEvents.OnScrolledEvent;

  /**
   * Evento que se dispara cuando se selecciona un item.
   *
   * @type {EGalleryViewEvents.OnClickedEvent}
   */
  public static clickEvent: EGalleryViewEvents.OnClickedEvent;

  /**
   * Evento que se dispara cuando se excede el maximo de items establecidos.
   *
   * @type {EGalleryViewEvents.maxItemSelectEvent}
   */
  public static onMaxItemSelectEvent: EGalleryViewEvents.OnMaxItemSelectEvent;

  language: ELanguage;
  bgColorHeader: string;
  textcolorHeader: string;
  maxItemSelect: number;
  bgColorFooter: string;
  textColorFooter: string;
  preview: boolean;
  edit: boolean;
  colorRadio: string;
}

export interface ErrorEvent extends EventData {
  eventName: EGalleryViewEvents.ErrorEvent;
  data?: Error;
  message?: string;
}

export interface OnScrolledEvent extends EventData {
  eventName: EGalleryViewEvents.OnScrolledEvent;
  dx: number;
  dy: number;
  data: Array<IFiles>;
}

export interface OnClickedEvent extends EventData {
  eventName: EGalleryViewEvents.OnClickedEvent;
  data: Array<IFiles>;
}

export interface GalleryViewLoadedEvent extends EventData {
  eventName: 'loaded';
  data: any;
  object: GalleryView;
}
