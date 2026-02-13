import { UpdateInfo } from '.';

export abstract class StoreUpdateCommon {
  protected options;

  constructor(options) {
    this.options = options;
  }

  abstract checkUpdate(): Promise<UpdateInfo>;
  abstract updateInApp(): Promise<boolean>;
}
