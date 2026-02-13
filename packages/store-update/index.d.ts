import { StoreUpdateCommon } from './common';

export interface UpdateOptions {
  forceUpdate: boolean;
  message: string;
  messageColor?: string;
  buttonColor?: string;
  screenBackgroundColor?: string;
  titleButton: string;
  titleButtonColor?: string;
  // __debugForceUpdate: boolean
}

export interface UpdateInfo {
  localVersion: string;
  storeVersion: string;
  bundleId: string;
  minimumVersion?: string;
  needsUpdate: boolean;
}

export declare class StoreUpdate extends StoreUpdateCommon {
  constructor(options: UpdateOptions);
  checkUpdate(): Promise<UpdateInfo>;
  updateInApp(): Promise<boolean>;
}
