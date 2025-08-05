declare class SignalrForNs extends NSObject {

    static alloc(): SignalrForNs; // inherited from NSObject

    static new(): SignalrForNs; // inherited from NSObject

    onEventCallBack: (p1: string, p2: any) => void;

    onInitCallBack: (p1: string, p2: string) => void;

    constructor(o: { url: string; accessToken: string; shouldSkipNegotiate: boolean; headers: NSArray<any> | any[]; handshakeResponseTimeout: number; keepAliveInterval: number; serverTimeout: number; transport: string; reconnect: boolean; });

    convertToNSArray(array: NSArray<any> | any[]): NSArray<any>;

    convertToNSDictionary(dictionary: NSDictionary<string, any>): NSDictionary<any, any>;

    disconnect(): boolean;

    getIdConn(): string;

    initWithUrlAccessTokenShouldSkipNegotiateHeadersHandshakeResponseTimeoutKeepAliveIntervalServerTimeoutTransportReconnect(url: string, accessToken: string, shouldSkipNegotiate: boolean, headers: NSArray<any> | any[], handshakeResponseTimeout: number, keepAliveInterval: number, serverTimeout: number, transport: string, reconnect: boolean): this;

    setInvokeWithEventNameData(eventName: string, data: any): void;

    setOnEventoWithEventNameCompletion(eventName: string, completion: (p1: any) => void): void;

    setSendWithEventNameDataCompletion(eventName: string, data: any, completion: (p1: any) => void): void;

    startConn(): void;
}