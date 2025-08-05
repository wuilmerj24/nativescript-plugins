import { Application, Device, Frame, Utils, getCurrentPage } from '@nativescript/core';

export const Orientacion = Object.freeze({
    ANY: UIInterfaceOrientation.Unknown,
    PORTRAIT: UIInterfaceOrientation.Portrait,
    PORTRAIT_REVERSE: UIInterfaceOrientation.PortraitUpsideDown,
    LANDSCAPE: UIInterfaceOrientation.LandscapeRight,
    LANDSCAPE_REVERSE: UIInterfaceOrientation.LandscapeLeft,
    UNSPECIFIED: UIInterfaceOrientation.Unknown,
});

export const setOrientacion = async function (orientacion: number): Promise<any> {
    return new Promise((rs, rj) => {
        try {
            console.log(Device.sdkVersion);
            if (parseInt(Device.sdkVersion) >= 16.0) {
                console.log('Es mayor a 16');
                const nSCSwiftOrientation = NSCSwiftOrientation.new();

                Utils.setTimeout(() => {
                    nSCSwiftOrientation.changeRotationWithRotation(changeToMask(orientacion));
                    rs(true);
                }, 500);
            } else {
                UIDevice.currentDevice.setValueForKey(NSNumber.numberWithInteger(orientacion), 'orientation');
                rs(true);
            }
        } catch (e) {
            console.log(e);
            if (rj) {
                rj(e);
            }
        }
    });
};

export let getOrientacion = () => {
    if (parseInt(Device.sdkVersion) >= 16.0) {
        const window = UIApplication.sharedApplication.keyWindow;
        return nombreOrientacion(window.windowScene.interfaceOrientation);
    } else {
        return nombreOrientacion(UIDevice.currentDevice.orientation);
    }
};

function changeToMask(orientacion: UIInterfaceOrientation): UIInterfaceOrientationMask {
    if (orientacion === UIInterfaceOrientation.Unknown) {
        return UIInterfaceOrientationMask.All;
    } else if (orientacion === UIInterfaceOrientation.Portrait) {
        return UIInterfaceOrientationMask.Portrait;
    } else if (orientacion === UIInterfaceOrientation.PortraitUpsideDown) {
        return UIInterfaceOrientationMask.PortraitUpsideDown;
    } else if (orientacion === UIInterfaceOrientation.LandscapeRight) {
        return UIInterfaceOrientationMask.LandscapeRight;
    } else if (orientacion === UIInterfaceOrientation.LandscapeLeft) {
        return UIInterfaceOrientationMask.LandscapeLeft;
    } else {
        return UIInterfaceOrientationMask.All;
    }
}

function nombreOrientacion(orientacion: number): string {
    switch (orientacion) {
        case UIDeviceOrientation.Unknown:
            return 'ANY';
            break;
        case UIDeviceOrientation.Portrait:
            return 'PORTRAIT';
            break;
        case UIDeviceOrientation.PortraitUpsideDown:
            return 'PORTRAIT_REVERSE';
            break;
        case UIDeviceOrientation.LandscapeLeft:
            return 'LANDSCAPE';
            break;
        case UIDeviceOrientation.LandscapeRight:
            return 'LANDSCAPE_REVERSE';
            break;
        default:
            return 'SIN ESPECIFICAR';
            break;
    }
}