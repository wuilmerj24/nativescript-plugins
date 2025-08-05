import { Application, Color, Utils } from '@nativescript/core';
import { OpcionesAppleMaps, OpcionesGoogleMaps, OpcionesWaze, Response } from '.';

export const AppsSoportadas = Object.freeze({
    GOOGLE_MAPS: 'com.google.android.apps.maps',
    WAZE: 'com.waze',
    BAIDUMAP: 'com.baidu.BaiduMap',
});

export const TransporteGoogleMaps = Object.freeze({
    DRIVING: 'd',
    WALKING: 'w',
    BICYCLING: 'b',
    TRANSIT: 't',
});

export let checkAppInstalada = (packageName: string): boolean => {
    try {
        let packageManager: android.content.pm.PackageManager = Utils.android.getApplicationContext().getPackageManager();
        packageManager.getPackageInfo(packageName, 0);
        return true;
    } catch (error) {
        return false;
    }
};

export let openGoogleMaps = (opciones: OpcionesGoogleMaps): Promise<Response> => {
    return new Promise<Response>((rs, rj) => {
        console.log(opciones);
        try {
            if (!checkAppInstalada(AppsSoportadas.GOOGLE_MAPS)) {
                rj({ error: true, errorText: 'App no instalada' });
            }

            let intent: android.content.Intent;
            let url: string;

            if (opciones.tipoMapa == 'MAPS') {
                url = 'http://maps.google.com/maps?daddr=';
            } else if (opciones.tipoMapa == 'TURN_BY_TURN') {
                url = 'google.navigation:q=';
            }

            if (opciones.daddr === null || opciones.daddr === undefined) {
                rj({ error: true, errorText: 'daddr null | undefined' });
            }

            if (typeof opciones.daddr == 'string') {
                url += `${opciones.daddr}`;
            } else if (typeof opciones.daddr == 'object') {
                url += `${opciones.daddr[0]},${opciones.daddr[1]}`;
            }

            if (opciones.saddr && opciones.tipoMapa == 'MAPS') {
                if (typeof opciones.saddr == 'string') {
                    url += `&saddr=${opciones.saddr}`;
                } else if (typeof opciones.saddr == 'object') {
                    url += `&saddr=${opciones.saddr[0]},${opciones.saddr[1]}`;
                }
            }

            if (opciones.avoid && opciones.tipoMapa == 'TURN_BY_TURN') {
                if (opciones.avoid.search(/t/) > -1 || opciones.avoid.search(/h/) > -1 || opciones.avoid.search(/f/) > -1) {
                    url += `&avoid=${opciones.avoid}`;
                } else {
                    rj({ error: true, errorText: 'avoid acepta solo t,h o f' });
                }
            }

            console.log(url);
            intent = new android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse(url));
            intent.setPackage(AppsSoportadas.GOOGLE_MAPS);
            intent.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
            (Application.android.foregroundActivity || Application.android.startActivity).startActivityForResult(intent, 0);
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
                rj({ error: true, errorText: 'App no instalada' });
            }
            let intent: android.content.Intent;
            let url: string = 'waze://?q=';
            if (opciones.destino) {
                if (typeof opciones.destino == 'string') {
                    url += `${opciones.destino}`;
                } else if (typeof opciones.destino == 'object') {
                    url += `${opciones.destino[0]},${opciones.destino[1]}`;
                }
            }

            if (opciones.navigate) {
                url += `&navigate=${opciones.navigate}`;
            }
            console.log(url);
            intent = new android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse(url));
            intent.setPackage(AppsSoportadas.WAZE);
            intent.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
            (Application.android.foregroundActivity || Application.android.startActivity).startActivityForResult(intent, 0);
            rs({ error: false });
        } catch (error) {
            rs({ error: true, errorText: error });
        }
    });
};

export let openAppleMaps = (opciones: OpcionesAppleMaps): Promise<Response> => {
    return new Promise((rs, rj) => {
        rj({ error: true, errorText: 'only for iOS' });
    });
};