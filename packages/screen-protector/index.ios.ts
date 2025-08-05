import { Device, Utils } from '@nativescript/core';
import { ScreenProtectorCommon } from './common';

export class ScreenProtector extends ScreenProtectorCommon {
    shieldView: UIView;
    screenPrevent: UITextField;
    window: UIWindow;
    screenImage: UIImageView;
    screenBlur: UIView;
    screenColor: UIView;
    screenshootObserve: NSObjectProtocol;
    screenRecordObserve: NSObjectProtocol;
    originalSuperLayer: CALayer;
    center: NSNotificationCenter = NSNotificationCenter.defaultCenter;
    constructor(

    ){
        super();
        if(this.screenPrevent==null){
            this.screenPrevent=UITextField.new();
        }

        if(this.window==null){
            this.window = UIApplication.sharedApplication.delegate.window;
        }

        this.originalSuperLayer = this.window.layer.superlayer;

        if(!this.window.subviews.containsObject(this.screenPrevent)){
            this.window.addSubview(this.screenPrevent);
            this.screenPrevent.centerYAnchor.constraintEqualToAnchor(this.window.centerYAnchor).active = true;
            this.screenPrevent.centerXAnchor.constraintEqualToAnchor(this.window.centerXAnchor).active = true;
            this.window.layer.superlayer.addSublayer(this.screenPrevent.layer);
            const osVersion = parseFloat(Device.osVersion);
            this.screenPrevent.backgroundColor=UIColor.redColor;
            if (osVersion > 17.0) {
                this.screenPrevent.layer.sublayers.lastObject.addSublayer(this.window.layer);
            } else {
                this.screenPrevent.layer.sublayers.firstObject.addSublayer(this.window.layer);
            }
        }
        
    }

    lockScreenShoots():boolean {
        try {
            this.screenPrevent.secureTextEntry=true;
            return true;
        } catch (error) {
            console.error(error)
            return false;
        }
    }

    unlockScreenShoots(): boolean {
        try {
            this.screenPrevent.secureTextEntry = false;
            this.screenPrevent.removeFromSuperview();

            // 🔥 Desacoplar cualquier superlayer modificada
            if (this.window.layer.superlayer) {
                this.window.layer.removeFromSuperlayer();
            }

            // ✅ RECREAR LA VENTANA
            const oldWindow = this.window;
            const newWindow = UIWindow.alloc().initWithFrame(UIScreen.mainScreen.bounds);

            // Reasignar el rootViewController
            newWindow.rootViewController = oldWindow.rootViewController;

            // Hacerla clave y visible
            newWindow.makeKeyAndVisible();

            // Guardar nueva referencia
            this.window = newWindow;
            if (this.screenshootObserve!=null){
                this.removeScreenShootObserver();
            }
            
            if (this.screenRecordObserve!=null){
                this.removeScreenRecorderObserver();
            }
            return true;
        } catch (error) {
            console.error('[ScreenProtector] Error al desbloquear:', error);
            return false;
        }
    }
    
    setScreenshootEvent(callback):void{
        this.screenshootObserve = this.center.addObserverForNameObjectQueueUsingBlock(
            UIApplicationUserDidTakeScreenshotNotification,
            null,
            null,
            () => {
                callback()
            }
        );
    }
    
    setScreenRecorderEvent(callback):void{
        this.screenRecordObserve = this.center.addObserverForNameObjectQueueUsingBlock(
            UIScreenCapturedDidChangeNotification,
            null,
            null,
            () => {
                let isCaptured = UIScreen.mainScreen.captured;
                this.onScreenRecord(isCaptured)
                callback()
            }
        );
    }

    removeScreenShootObserver(): boolean {
        try {
            this.center.removeObserver(this.screenshootObserve);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    
    removeScreenRecorderObserver(): boolean {
        try {
            this.center.removeObserver(this.screenRecordObserve);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    onScreenRecord(isCaptured: boolean) {
        if (isCaptured) {
            // Superponer un view
            if (!this.shieldView) {
                this.shieldView = UIView.alloc().initWithFrame(UIScreen.mainScreen.bounds);
                this.shieldView.backgroundColor = UIColor.blackColor;
                this.shieldView.alpha = 1.0;

                this.window.addSubview(this.shieldView);
                this.window.bringSubviewToFront(this.shieldView);
            }
        } else {
            if (this.shieldView) {
                this.shieldView.removeFromSuperview();
                this.shieldView = null;
            }
        }
    }
}