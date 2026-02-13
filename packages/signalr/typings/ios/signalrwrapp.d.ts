declare class NSCSwiftSignalrWrapper extends NSObject {
  static alloc(): NSCSwiftSignalrWrapper; // inherited from NSObject

  static new(): NSCSwiftSignalrWrapper; // inherited from NSObject

  getConnId(callback: (p1: string) => void): void;

  getConnState(callback: (p1: string) => void): void;

  initConnection(): void;

  invokeWithMethodData(method: string, data: NSArray<any> | any[], callback: (p1: number, p2: NSError) => void): void;

  offWithMethod(method: string, callback: (p1: number, p2: NSError) => void): void;

  onClose(callback: (p1: string) => void): void;

  onMethod(method: string, callback: (p1: string, p2: NSError) => void): void;

  onReconnected(callback: (p1: string) => void): void;

  onReconnecting(callback: (p1: string) => void): void;

  setAccessToken(value: string): void;

  setHandshakeResponseTime(value: number): void;

  setHeaders(value: NSDictionary<any, any>): void;

  setKeepAliveInterval(value: number): void;

  setReconnect(value: number): void;

  setServerTimeout(value: number): void;

  setSkipNegotiation(value: number): void;

  setTransport(value: number): void;

  setUrl(value: string): void;

  start(callback: (p1: number, p2: NSError) => void): void;

  stop(callback: (p1: number, p2: NSError) => void): void;
}
