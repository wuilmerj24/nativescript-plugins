import { Application } from '@nativescript/core';

/**
 * Cambiar la orientacion de la pantalla del dispositivo.
 * @param orientacion - Es requerido para poder establecer la orientacion de la pantalla.
 */

export const Orientacion: {
    ANY: any;
    PORTRAIT: any;
    PORTRAIT_REVERSE: any;
    PORTRAIT_SENSOR: any;
    LANDSCAPE: any;
    LANDSCAPE_REVERSE: any;
    LANDSCAPE_SENSOR: any;
    UNSPECIFIED: any;
};

export function setOrientacion(orientacion: Orientacion): Promise<any>;

export function getOrientacion(): string;