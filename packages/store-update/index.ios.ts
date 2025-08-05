import { ActivityIndicator, Application, Button, Color, confirm, getCurrentPage, GridLayout, Http, HttpResponse, Label, ModalTransition, Screen, ShowModalOptions, StackLayout, TapGestureEventData, Utils } from '@nativescript/core';
import { StoreUpdateCommon } from './common';

export class StoreUpdate extends StoreUpdateCommon {
    getAppId(): string {
        try {
            const version = NSBundle.mainBundle.bundleIdentifier
            return version;
        } catch (error) {
            console.error(error);
        }
    }

    getLocalVersion(): string {
        try {
            let infoDictionary = NSBundle.mainBundle.infoDictionary;
            let versionName = infoDictionary.objectForKey('CFBundleShortVersionString');
            return versionName;
        } catch (error) {
            console.error(error);
        }
    }
    getNubeVersion(country?: string): Promise<string> {
        const bundleId = this.getAppId(); // O el de tu package.json
        return new Promise(async (rs, rj) => {
            const url: string = `https://itunes.apple.com/lookup?bundleId=${bundleId}&country=${country}`;
            await Http.request({
                url: url,
                method: 'GET',
            })
                .then((response:HttpResponse) => {
                    console.log(response);
                    const statusCode = response.statusCode;
                    if (statusCode === 200) {
                        let version = '';
                        const data = response.content.toJSON();
                        version = data.results[0].version;
                        rs(version);
                    }
                    rj(null);
                })
                .catch((err) => {
                    rj(err);
                })
                .finally(() => {
                    rj(null);
                });
        });
    }
    
    updateApp(forceUpdate: boolean, okTextButton?: string, cancelTextButton?: string, message?: string, openAppStore?: boolean, bgColor?: string, textColor?: string, bgBtnColor?: string, textbtnColor?: string) {
        const modalLoading: ModalLoading = new ModalLoading();
        getCurrentPage().showModal(modalLoading, {
            closeCallback(...args) { },
            context: null,
            animated: true,
            cancelable: false,
            fullscreen: false,
            stretched: false,
            ios:{
                presentationStyle:UIModalPresentationStyle.Popover,
            }
        } as ShowModalOptions);
        return new Promise(async (rs, rj) => {
            const version_nube: string = await this.getNubeVersion();
            const version_local: string = this.getLocalVersion();
            const comparison = this.compareVersions(version_nube, version_local);
            if (comparison > 0) {
                modalLoading.closeModal();
                if (forceUpdate) {
                    const modal: ModalUpdateIos = new ModalUpdateIos(message, okTextButton, this.getAppId(), openAppStore, bgColor, textColor, bgBtnColor, textbtnColor);
                    Application.ios.on(Application.iOSApplication.resumeEvent, async (args) => {
                        const version_nube: string = await this.getNubeVersion();
                        const version_local: string = this.getLocalVersion();
                        const comparison = this.compareVersions(version_nube, version_local);
                        if (comparison <= 0) {
                            modal.closeModal();
                            Application.ios.off(Application.iOSApplication.resumeEvent);
                            Application.ios.off(Application.iOSApplication.backgroundEvent);
                        }
                        console.log('activityResumed');
                    });

                    Application.ios.on(Application.iOSApplication.backgroundEvent, (args) => {
                        console.log('activityPaused');
                    });

                    Utils.setTimeout(()=>{
                        getCurrentPage().showModal(modal, {
                            closeCallback(...args) { },
                            context: null,
                            animated: true,
                            cancelable: false,
                            fullscreen: true,
                            stretched: true,
                            ios: {
                                presentationStyle: UIModalPresentationStyle.FormSheet,
                            }
                        } as ShowModalOptions);
                    },1500)
                } else {
                    confirm({
                        cancelable: true,
                        cancelButtonText: cancelTextButton,
                        message: message,
                        neutralButtonText: ' ',
                        okButtonText: okTextButton,
                    }).then((res) => {
                        if (res) {
                            this.openiOSStore(NSBundle.mainBundle.bundleIdentifier);
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

    openiOSStore(id: string) {
        const url: string = `itms-apps://itunes.apple.com/app/id${this.getAppId()}`;
        Utils.openUrl(url);
    }

    checkUpdateNative(): Promise<boolean> {
        throw new Error('Only for android');
    }
}


class ModalLoading extends StackLayout {
    constructor() {
        super();
        const loading: ActivityIndicator = new ActivityIndicator();
        loading.busy = true;
        loading.color = new Color('#FFFFFF');
        (loading.verticalAlignment = 'middle'), (loading.horizontalAlignment = 'center');
        loading.width = (Screen.mainScreen.widthDIPs * 15) / 100;
        loading.height = (Screen.mainScreen.heightDIPs * 15) / 100;
        this.backgroundColor = new Color('#000000');
        this.width = (Screen.mainScreen.widthDIPs * 15) / 100;
        this.height = (Screen.mainScreen.heightDIPs * 10) / 100;
        this.borderRadius = 10;
        this.addChild(loading);
    }
}

class ModalUpdateIos extends GridLayout {
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
            this.btnActualizar.style.fontWeight = "bold"
            this.btnActualizar.width = (Screen.mainScreen.widthDIPs * 90) / 100;
            this.btnActualizar.height = 'auto';
            this.btnActualizar.background = this.bgBtnColor;
            this.btnActualizar.marginBottom = 30;
            this.btnActualizar.on('tap', (args: TapGestureEventData) => {
                const url: string = `itms-apps://itunes.apple.com/app/id${this.idPackage}`;
                Utils.openUrl(url);
            });
            this.addChild(this.btnActualizar);
        }

        Application.ios.on(Application.iOSApplication.suspendEvent, (args) => { });
    }

    disposeNativeView(): void {
        Application.ios.off(Application.iOSApplication.suspendEvent);
        super.disposeNativeView();
    }
}