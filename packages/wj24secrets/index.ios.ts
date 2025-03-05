import { Wj24secretsCommon } from './common';

export class Wj24secrets extends Wj24secretsCommon {
  protected iniciado: boolean;
  protected wj24secetsInstance: Wj24Secrets;
  constructor(protected file_name: string, protected is_debug?: boolean) {
    super(file_name, is_debug);
    this.wj24secetsInstance = Wj24Secrets.alloc().initWithFileNameIs_debug(file_name, true);
  }
  initSDK(): boolean {
    let response: boolean = false;
    this.wj24secetsInstance.iniWithCompletionHandler((res): boolean => {
      console.log('inicializado ', res.error, res.message);
      if (res.error == 200) {
        this.logs('initSDK....Ok');
        this.iniciado = true;
        response = true;
        return true;
      } else {
        this.logs(res.message);
        this.iniciado = true;
        response = false;
        return false;
      }
    });
    return response;
  }

  searchVar(variable: string, version?: number): string {
    var version_send: number = 0;
    if (this.iniciado) {
      if (version > 0) {
        version_send = version;
      }
      let res = this.wj24secetsInstance.search_varWithVariableVersion(variable, version_send);
      if (res.error == 0) {
        return res.variable;
      } else {
        throw new Error(res.message);
      }
    } else {
      throw new Error('Error, not initSDK');
    }
  }

  protected logs(...data: any[]) {
    if (this.is_debug) {
      console.log(data);
    }
  }
}
