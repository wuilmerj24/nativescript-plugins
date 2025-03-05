import { Wj24secretsCommon } from './common';
import { Utils } from '@nativescript/core';

export class Wj24secrets extends Wj24secretsCommon {
  protected iniciado: boolean = false;

  public wj24secetsInstance: upinn.tech.wj24secrets_android.Wj24Secrets;
  constructor(protected file_name: string, protected is_debug?: boolean) {
    super(file_name, is_debug);
    this.wj24secetsInstance = new upinn.tech.wj24secrets_android.Wj24Secrets(Utils.android.getApplicationContext(), this.file_name, this.is_debug);
  }

  initSDK(): boolean {
    this.logs('initSDK....', this.file_name);
    let res: upinn.tech.wj24secrets_android.SimpleErrorResponse = this.wj24secetsInstance.init() as upinn.tech.wj24secrets_android.SimpleErrorResponse;
    if (res.getError() == 200) {
      this.logs('initSDK....Ok');
      this.iniciado = true;
      return true;
    } else {
      this.logs(res.getMessage());
      this.iniciado = true;
      return false;
    }
  }

  searchVar(variable: string, version?: number): string {
    var version_send: java.lang.Integer = java.lang.Integer.valueOf(0);
    if (this.iniciado) {
      if (version) {
        version_send = java.lang.Integer.valueOf(version);
      }
      let res = this.wj24secetsInstance.search_vars(variable, version_send);
      if (res.getError() == 0) {
        return res.getVariable();
      } else {
        throw new Error(res.getMessage());
      }
    } else {
      throw new Error('Error, not initSDK');
    }
  }

  protected logs(...data: any) {
    if (this.is_debug) {
      console.log(data);
    }
  }
}
