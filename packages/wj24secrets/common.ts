export abstract class Wj24secretsCommon {
  protected abstract wj24secetsInstance: any;
  protected abstract iniciado: boolean;
  constructor(protected file_name: string, protected is_debug?: boolean) {}

  get instance() {
    return this;
  }

  abstract initSDK(): boolean;
  abstract searchVar(variable: string, version?: number): string;
  protected abstract logs(...data);
}
