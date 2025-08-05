import { StoreUpdateCommon } from './common';
import { ActivityIndicator, Application, ApplicationEventData, Button, CancelableOptions, Color, confirm, Dialogs, getCurrentPage, GridLayout, Http, Label, ModalTransition, Screen, ShowModalOptions, StackLayout, TapGestureEventData, Utils } from '@nativescript/core';

export class StoreUpdate extends StoreUpdateCommon {
    
    private context:android.content.Context;
    constructor(){
        super();
        this.context = Application.android.foregroundActivity || Application.android.context || Utils.android.getApplicationContext();
    }
    getAppId(): string {
        return Utils.android.getPackageName();
    }

    getLocalVersion(): string {
        try {
            const versionName: string = this.context.getPackageManager().getPackageInfo(this.getAppId(), 0).versionName;
            return versionName;
        } catch (error) {
            console.error(error);
        }
    }

    getNubeVersion(country?:string): Promise<any> {
        return new Promise(async (rs, rj) => {
            let manager: android.telephony.TelephonyManager = this.context.getSystemService(android.content.Context.TELEPHONY_SERVICE);
            let locale: string = manager.getNetworkCountryIso();
            const url: string = `https://play.google.com/store/apps/details?id=${this.getAppId()}&hl=es&gl=${locale}`;
            await Http.getString(url).then((response: string) => {
                const notFoundMessage = 'No se ha podido encontrar la URL solicitada en este servidor.';
                if (response.includes(notFoundMessage)) {
                    // throw new Error(notFoundMessage);
                    console.log('AppId not found.');
                    rj(null);
                    return null;
                }
                try {
                    const version: string = response.match(/\[\[\["([\d-.]+?)"\]\]/)[1].trim();
                    rs(version);
                    return version;
                } catch (error) {
                    rj(error);
                    return error;
                }
            })
            .catch((error) => {
                rj(error);
                return error;
            })
            .finally(() => {
                rj(null);
                return null;
            });
        });
    }

    updateApp(forceUpdate: boolean, okTextButton?: string, cancelTextButton?: string, message?: string, openAppStore?: boolean, bgColor?: string, textColor?: string, bgBtnColor?: string,textbtnColor?:string) {
        const modalLoading: ModalLoading = new ModalLoading();
        getCurrentPage().showModal(modalLoading, {
            closeCallback(...args) { },
            context: null,
            animated: true,
            cancelable: false,
            fullscreen: false,
            stretched: false,
            transition: ModalTransition.AndroidTransitionType.enter,
        } as ShowModalOptions);
        return new Promise(async (rs, rj) => {
            const version_nube: string = await this.getNubeVersion()
                .then((version) => {
                    modalLoading.closeModal();
                    return version;
                })
                .catch((err) => {
                    modalLoading.closeModal();
                });

            const version_local: string = this.getLocalVersion();
            const comparison = this.compareVersions(version_nube, version_local);
            if (comparison > 0) {
                if (forceUpdate) {
                    const modal: ModalUpdateAndroid = new ModalUpdateAndroid(message, okTextButton, this.getAppId(), openAppStore,bgColor,textColor,bgBtnColor,textbtnColor);
                    Application.android.on('activityResumed', async (args) => {
                        const version_nube: string = await this.getNubeVersion();
                        const version_local: string = this.getLocalVersion();
                        const comparison = this.compareVersions(version_nube, version_local);
                        if (comparison <= 0) {
                            modal.closeModal();
                            Application.android.off('activityResumed');
                            Application.android.off('activityPaused');
                        }
                    });

                    Application.android.on('activityPaused', (args) => { });

                    getCurrentPage().showModal(modal, {
                        closeCallback(...args) { },
                        context: null,
                        animated: true,
                        cancelable: false,
                        fullscreen: true,
                        stretched: true,
                        transition: ModalTransition.AndroidTransitionType.enter,
                    } as ShowModalOptions);
                } else {
                    confirm({
                        cancelable: true,
                        cancelButtonText: cancelTextButton,
                        message: message,
                        neutralButtonText: ' ',
                        okButtonText: okTextButton,

                    }).then((res) => {
                        if (res) {
                            this.openGooglePlay(this.getAppId());
                        }
                    });
                }
            }
            modalLoading.closeModal();
        });
    }

    compareVersions(version1: string, version2: string): number {
        const v1Parts = version1.split('.').map(Number);
        const v2Parts = version2.split('.').map(Number);

        for (let i = 0; i < Math.max(v1Parts.length, v2Parts.length); i++) {
            const v1 = v1Parts[i] || 0;
            const v2 = v2Parts[i] || 0;

            if (v1 > v2) {
                return 1;
            } else if (v1 < v2) {
                return -1;
            }
        }

        return 0;
    }

    openGooglePlay(id: string) {
        const intent: android.content.Intent = new android.content.Intent(android.content.Intent.ACTION_VIEW);
        intent.setData(android.net.Uri.parse(`market://details?id=${id}`));
        this.context.startActivity(intent);
    }

    checkUpdateNative(): Promise<boolean> {
        return new Promise<any>((rs, rj) => {
            const appUpdateManager: com.google.android.play.core.appupdate.AppUpdateManager = com.google.android.play.core.appupdate.AppUpdateManagerFactory.create(this.context);
            const appUpdateInfoTask: com.google.android.gms.tasks.Task<any> = appUpdateManager.getAppUpdateInfo();
            const activity = Application.android.startActivity || Application.android.foregroundActivity;
            Application.on(Application.android.activityPausedEvent, (args: ApplicationEventData) => {
                Application.off(Application.android.activityPausedEvent);
            });
            Application.on(Application.android.activityResumedEvent, (args: ApplicationEventData) => {
                Application.off(Application.android.activityResumedEvent);
                appUpdateInfoTask.addOnSuccessListener(
                    new com.google.android.gms.tasks.OnSuccessListener<any>({
                        onSuccess(appUpdateInfo) {
                            if (appUpdateInfo.updateAvailability() == com.google.android.play.core.install.model.UpdateAvailability.UPDATE_AVAILABLE && appUpdateInfo.isUpdateTypeAllowed(com.google.android.play.core.install.model.AppUpdateType.IMMEDIATE)) {
                                appUpdateManager.startUpdateFlow(appUpdateInfo, activity, com.google.android.play.core.appupdate.AppUpdateOptions.defaultOptions(com.google.android.play.core.install.model.AppUpdateType.IMMEDIATE));
                                rs(true);
                            }
                            {
                                rj(false);
                            }
                        },
                    })
                );
            });
            appUpdateInfoTask.addOnSuccessListener(
                new com.google.android.gms.tasks.OnSuccessListener<any>({
                    onSuccess(appUpdateInfo) {
                        if (appUpdateInfo.updateAvailability() == com.google.android.play.core.install.model.UpdateAvailability.UPDATE_AVAILABLE && appUpdateInfo.isUpdateTypeAllowed(com.google.android.play.core.install.model.AppUpdateType.IMMEDIATE)) {
                            appUpdateManager.startUpdateFlow(appUpdateInfo, activity, com.google.android.play.core.appupdate.AppUpdateOptions.defaultOptions(com.google.android.play.core.install.model.AppUpdateType.IMMEDIATE));
                            rs(true);
                        }
                        {
                            rj(false);
                        }
                    },
                })
            );
            appUpdateInfoTask.addOnCanceledListener(
                activity,
                new com.google.android.gms.tasks.OnCanceledListener({
                    onCanceled() {
                        rj(false);
                    },
                })
            );
            appUpdateInfoTask.addOnFailureListener(
                new com.google.android.gms.tasks.OnFailureListener({
                    onFailure(param0) {
                        console.log(param0.getMessage());
                        rj(false);
                    },
                })
            );
        });
    }
}


class ModalLoading extends StackLayout {
    constructor(

    ) {
        super();
        const loading: ActivityIndicator = new ActivityIndicator();
        loading.busy = true;
        loading.color = new Color('#FFFFFF');
        (loading.verticalAlignment = 'middle'), (loading.horizontalAlignment = 'center');
        loading.width = (Screen.mainScreen.widthDIPs * 15) / 100;
        loading.height = (Screen.mainScreen.heightDIPs * 15) / 100;
        this.backgroundColor = new Color('#000000');
        this.width = (Screen.mainScreen.widthDIPs * 90) / 100;
        this.height = (Screen.mainScreen.heightDIPs * 20) / 100;
        this.addChild(loading);
    }
}

class ModalUpdateAndroid extends GridLayout {
    private btnActualizar: Button;
    constructor(
        private message: string, 
        private okBtnText: string, 
        private idPackage: string, 
        private openAppStore?: boolean,
        private bgColor?: string,
        private textColor?: string,
        private bgBtnColor?: string,
        private textbtnColor?: string,
    ) {
        super();
        this.backgroundColor = new Color(this.bgColor);
        this.color = new Color(this.textColor);
        const msj: Label = new Label();
        msj.text = message;
        msj.verticalAlignment = 'middle';
        msj.horizontalAlignment = 'center';
        msj.color = new Color(this.textColor);
        msj.fontSize = 18;
        msj.style.fontWeight = 'bold';
        this.addChild(msj);

        if (this.openAppStore) {
            this.btnActualizar = new Button();
            this.btnActualizar.text = okBtnText;
            this.btnActualizar.color = new Color(this.textbtnColor);
            this.btnActualizar.horizontalAlignment = 'center';
            this.btnActualizar.verticalAlignment = 'bottom';
            this.btnActualizar.style.fontWeight="bold"
            this.btnActualizar.width = (Screen.mainScreen.widthDIPs * 90) / 100;
            this.btnActualizar.height = 'auto';
            this.btnActualizar.background = this.bgBtnColor;
            this.btnActualizar.androidElevation=0;
            this.btnActualizar.marginBottom = 30;
            this.btnActualizar.on('tap', (args: TapGestureEventData) => {
                // openGooglePlay(this.idPackage);
                const intent: android.content.Intent = new android.content.Intent(android.content.Intent.ACTION_VIEW);
                intent.setData(android.net.Uri.parse(`market://details?id=${this.idPackage}`));
                const context: android.content.Context = Application.android.foregroundActivity || Application.android.context || Utils.android.getApplicationContext();
                context.startActivity(intent);
            });
            this.addChild(this.btnActualizar);
        }

        Application.android.on(Application.AndroidApplication.activityBackPressedEvent, (args) => {
            args.cancel = true;
        });
    }

    disposeNativeView(): void {
        Application.android.off(Application.AndroidApplication.activityBackPressedEvent);
        super.disposeNativeView();
    }
}