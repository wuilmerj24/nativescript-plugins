import { SignalROptions } from './interfaces/signalroptions';
import { SignalrState } from './types/signalrstates';

export abstract class SignalrCommon {
  protected options: SignalROptions;
  constructor(options: SignalROptions) {
    this.options = options;
  }

  abstract start(): Promise<void>;
  abstract stop(): Promise<boolean>;
  abstract invoke(method: string, args: any[]): Promise<any>;
  abstract on(method: string, callback: (...args: any[]) => void): void;
  abstract off(method: string): void;
  abstract getId(): string;
  abstract getConnState(): Promise<SignalrState>;
  abstract onClose(callback: (param: string) => void): void;
  //only ios
  abstract onReconnecting(callback: (param: string) => void): void;
  abstract onReconnected(callback: (param: string) => void): void;
}
