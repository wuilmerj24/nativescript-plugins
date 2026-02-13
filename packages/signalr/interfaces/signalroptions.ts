import { TypeTransport } from '../enums/typetransport';

export interface SignalROptions {
  url: string;
  accessToken?: string;
  shouldSkipNegotiate?: boolean;
  handshakeResponseTimeout?: number;
  keepAliveInterval?: number;
  serverTimeout?: number;
  transport?: TypeTransport;
  reconnect?: boolean;
  headers?: Record<string, string>;
}
