
export abstract class StoreUpdateCommon {
    abstract getAppId():string;
    abstract getLocalVersion():string;
    abstract getNubeVersion(country?: string):Promise<string>;
    abstract updateApp(forceUpdate: boolean, okTextButton?: string, cancelTextButton?: string, message?: string, openAppStore?: boolean, bgColor?: string, textColor?: string, bgBtnColor?: string, textbtnColor?: string);
    abstract checkUpdateNative():Promise<boolean>;
}
