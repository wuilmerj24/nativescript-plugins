import { TypeTransport } from '../enums/types_transport.enums';
import { IHeaders } from './headers.interface';

export interface OptionsConnect {
    url: string;
    accessToken?: string;
    shouldSkipNegotiate?: boolean;
    headers?: Array<IHeaders>;
    handshakeResponseTimeout?: number;
    keepAliveInterval?: number;
    serverTimeout?: number;
    transport?: TypeTransport;
    reconnect?: boolean;
}