import { Utils } from '@nativescript/core';
import { OpcionesAppleMaps, OpcionesGoogleMaps, OpcionesWaze, Response } from '.';

export const AppsSoportadas = Object.freeze({
    GOOGLE_MAPS: 'comgooglemaps://',
    WAZE: 'waze://',
    BAIDUMAP: 'baidumap://',
    APPLE_MAPS: 'http://maps.apple.com',
});

export const TransporteGoogleMaps = Object.freeze({
    DRIVING: 'driving',
    WALKING: 'walking',
    BICYCLING: 'bicycling',
    TRANSIT: 'transit',
});

export let checkAppInstalada = (packageName: string): boolean => {
    try {
        let check: boolean = UIApplication.sharedApplication.canOpenURL(NSURL.URLWithString(packageName));
        return check;
    } catch (error) {
        return false;
    }
};

export let openGoogleMaps = (opciones: OpcionesGoogleMaps): Promise<Response> => {
    return new Promise<Response>((rs, rj) => {
        try {
            if (!checkAppInstalada(AppsSoportadas.GOOGLE_MAPS)) {
                console.log('No open');
                rj({ error: true, errorText: 'App no instalada' });
            }
            let url: string;

            url = 'comgooglemaps://?daddr=';

            if (opciones.daddr === null || opciones.daddr === undefined) {
                rj({ error: true, errorText: 'daddr null | undefined' });
            }

            if (typeof opciones.daddr == 'string') {
                url += encodeURI(opciones.daddr);
            } else if (typeof opciones.daddr == 'object') {
                url += `${opciones.daddr[0]},${opciones.daddr[1]}`;
            }

            if (opciones.saddr && opciones.tipoMapa == 'MAPS') {
                if (typeof opciones.saddr == 'string') {
                    url += `&saddr=${encodeURI(opciones.saddr)}`;
                } else if (typeof opciones.saddr == 'object') {
                    url += `&saddr=${opciones.saddr[0]},${opciones.saddr[1]}`;
                }
            }

            url += `&directionsmode=${opciones.modoTransporte}`;

            UIApplication.sharedApplication.openURL(NSURL.URLWithString(url));
            console.log(url);
            rs({ error: false });
        } catch (error) {
            rj({ error: true, errorText: error });
        }
    });
};

export let openWaze = (opciones: OpcionesWaze): Promise<Response> => {
    return new Promise<Response>((rs, rj) => {
        try {
            if (!checkAppInstalada(AppsSoportadas.WAZE)) {
                console.log('No open');
                rj({ error: true, errorText: 'App no instalada' });
            }
            let url: string = 'waze://?q=';
            if (opciones.destino) {
                if (typeof opciones.destino == 'string') {
                    url += encodeURI(opciones.destino);
                } else if (typeof opciones.destino == 'object') {
                    url += opciones.destino[0] + ',' + opciones.destino[1];
                }
            }

            if (opciones.navigate) {
                url += '&navigate=' + opciones.navigate;
            }
            console.log(url);
            UIApplication.sharedApplication.openURL(NSURL.URLWithString(url));
            rs({ error: false });
        } catch (error) {
            rj({ error: true, errorText: error });
        }
    });
};

export let openAppleMaps = (opciones: OpcionesAppleMaps): Promise<Response> => {
    return new Promise<Response>((rs, rj) => {
        try {
            if (!checkAppInstalada(AppsSoportadas.APPLE_MAPS)) {
                rj({ error: true, errorText: 'App no instalada Apple' });
            }

            let url: string = 'http://maps.apple.com/?daddr=';
            if (!opciones.daddr) {
                rj({ error: true, errorText: 'daddr undefined' });
            }

            if (opciones.daddr) {
                if (typeof opciones.daddr == 'string') {
                    url += encodeURI(opciones.daddr);
                } else if (typeof opciones.daddr == 'object') {
                    url += opciones.daddr[0] + ',' + opciones.daddr[1];
                }
            }

            if (opciones.saddr) {
                if (typeof opciones.saddr == 'string') {
                    url += '&saddr=' + encodeURI(opciones.saddr);
                } else if (typeof opciones.saddr == 'object') {
                    url += '&saddr=' + opciones.saddr[0] + ',' + opciones.saddr[1];
                }
            }

            if (opciones.tipo) {
                url += '&t=' + opciones.tipo;
            }

            if (opciones.dirflg) {
                url += '&dirflg=' + opciones.dirflg;
            }

            console.log(url);
            UIApplication.sharedApplication.openURL(NSURL.URLWithString(url));
        } catch (error) { }
    });
};