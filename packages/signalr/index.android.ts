import { SignalrCommon } from './common';
import { TypeTransport } from './enums/typetransport';
import { SignalROptions } from './interfaces/signalroptions';
import { SignalrState } from './types/signalrstates';
import { Utils } from '@nativescript/core';

export class Signalr extends SignalrCommon {
  private hubConnection: com.microsoft.signalr.HubConnection;
  private wuilemrj24Class;
  constructor(options: SignalROptions) {
    super(options);
    let builder = com.microsoft.signalr.HubConnectionBuilder.create(options.url);
    if (options.accessToken) {
      console.log('Set accesstoken');
      builder = builder.withAccessTokenProvider(
        io.reactivex.rxjava3.core.Single.defer(
          new io.reactivex.rxjava3.functions.Supplier<any>({
            get() {
              return io.reactivex.rxjava3.core.Single.just(options.accessToken);
            },
          })
        )
      );
    }

    if (options.shouldSkipNegotiate) {
      console.log('Set shouldSkipNegotiate');
      builder.shouldSkipNegotiate(options.shouldSkipNegotiate);
    }

    if (options.handshakeResponseTimeout) {
      console.log('Set handshakeResponseTimeout');
      builder.withHandshakeResponseTimeout(options.handshakeResponseTimeout);
    }

    if (options.keepAliveInterval) {
      console.log('Set keepAliveInterval');
      builder.withKeepAliveInterval(options.keepAliveInterval);
    }

    if (options.serverTimeout) {
      console.log('Set serverTimeout');
      builder.withServerTimeout(options.serverTimeout);
    }

    if (options.transport) {
      console.log('Set transport');
      let transport: com.microsoft.signalr.TransportEnum = options.transport;
      switch (options.transport) {
        case TypeTransport.ALL:
          transport = com.microsoft.signalr.TransportEnum.ALL;
          break;
        case TypeTransport.LONG_POLLING:
          transport = com.microsoft.signalr.TransportEnum.LONG_POLLING;
          break;
        case TypeTransport.WEBSOCKETS:
          transport = com.microsoft.signalr.TransportEnum.WEBSOCKETS;
          break;
        default:
          transport = com.microsoft.signalr.TransportEnum.WEBSOCKETS;
          break;
      }
      console.log(transport);
      builder.withTransport(transport);
    }

    if (options.headers) {
      console.log('Set headers');
      const headers: java.util.Map<string, string> = new java.util.HashMap<string, string>();
      Object.entries(options.headers).forEach(([key, value]) => {
        console.log(`Add header| Key: ${key}, value: ${value}`);
        headers.put(key, value);
      });
      builder.withHeaders(headers);
    }

    this.hubConnection = builder.build();
  }

  start(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.hubConnection.start().subscribe(
        new io.reactivex.rxjava3.functions.Action({
          run: () => {
            console.log('conected? ', this.hubConnection.getConnectionState(), this.hubConnection.getConnectionId());
          },
        }),
        new io.reactivex.rxjava3.functions.Consumer<any>({
          accept: (param0: java.lang.Throwable) => {
            console.log(param0.getMessage());
          },
        })
      );
    });
  }

  stop(): Promise<boolean> {
    return new Promise((rs, rj) => {
      this.hubConnection.stop().subscribe(
        new io.reactivex.rxjava3.functions.Action({
          run: () => {
            rs(true);
          },
        }),
        new io.reactivex.rxjava3.functions.Consumer<any>({
          accept(param0: java.lang.Throwable) {
            console.log(param0.getMessage());
            rj(false);
          },
        })
      );
    });
  }

  invoke(method: string, data: any[]): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        console.log(data);
        const finalArgs = this.preparePayloadForJava(data);
        console.log(finalArgs);
        this.hubConnection.invoke(method, finalArgs);

        resolve();
      } catch (err) {
        console.error('⚠️ Error invoking method:', err);
        reject(err);
      }
    });
  }
  preparePayloadForJava(jsArray: any[]): any {
    // 1. Crear la lista nativa que contendrá los objetos
    const javaList = new java.util.ArrayList<any>();

    jsArray.forEach((item) => {
      const hashMap = new java.util.HashMap<any, any>();

      Object.keys(item).forEach((key) => {
        let value = item[key];

        // Conversión explícita para evitar errores de tipos en el bridge
        if (value === null || value === undefined) {
          hashMap.put(key, null);
        } else if (typeof value === 'number') {
          // Forzamos a Double de Java para que el bridge no se confunda
          hashMap.put(key, java.lang.Double.valueOf(value));
        } else if (typeof value === 'boolean') {
          hashMap.put(key, java.lang.Boolean.valueOf(value));
        } else if (typeof value === 'object' && !Array.isArray(value)) {
          // Aquí podrías procesar objetos anidados si fuera necesario
          hashMap.put(key, value.toString());
        } else {
          hashMap.put(key, value);
        }
      });

      javaList.add(hashMap);
    });

    // 2. Crear el contenedor de argumentos (Object[] de tamaño 1)
    // Esto es lo que SignalR Java recibe como 'Object... args'
    const argsForJava = java.lang.reflect.Array.newInstance(java.lang.Object.class, 1);

    // 3. Insertar la lista en la posición 0
    // Usamos java.lang.reflect.Array.set para asegurar la compatibilidad nativa
    java.lang.reflect.Array.set(argsForJava, 0, javaList);

    return argsForJava;
  }

  on(method: string, callback: (...args: any[]) => void): void {
    try {
      this.hubConnection.on(
        method,
        new com.microsoft.signalr.Action1({
          invoke: (jsonString) => {
            try {
              const data = JSON.parse(jsonString); // ✅ Array u objeto
              callback(data);
            } catch (e) {
              console.error('❌ Error parsing SignalR JSON payload', e, jsonString);
            }
          },
        }),
        java.lang.String.class // clave: String.class
      );
    } catch (error) {
      console.error('❌ Error registering hub listener', error);
    }
  }

  off(method: string): void {
    throw new Error('Method not implemented.');
  }
  getId(): string {
    return this.hubConnection.getConnectionId();
  }
  async getConnState(): Promise<SignalrState> {
    let state: SignalrState;
    switch (this.hubConnection.getConnectionState()) {
      case com.microsoft.signalr.HubConnectionState.CONNECTING:
        state = 'CONNECTING';
        break;
      case com.microsoft.signalr.HubConnectionState.CONNECTED:
        state = 'CONNECTED';
        break;
      case com.microsoft.signalr.HubConnectionState.DISCONNECTED:
        state = 'DISCONNECTED';
        break;
    }
    return state;
  }

  private reconnecting = false;
  private reconnectAttempts = 0;
  private readonly MAX_RETRIES = 5;

  onClose(callback: (param: string) => void): void {
    this.hubConnection.onClosed(
      new com.microsoft.signalr.OnClosedCallback({
        invoke: (ex: java.lang.Exception) => {
          const msg = ex?.getMessage() ?? 'Connection closed';
          console.log('SignalR CLOSED:', msg);
          this.reconnect();

          callback(msg);
        },
      })
    );
  }

  private reconnect() {
    if (this.reconnecting) return;
    if (!this.options.reconnect) return;

    this.reconnecting = true;

    const delay = Math.min(1000 * Math.pow(2, this.reconnectAttempts), 10000);

    console.log(`SignalR reconnecting in ${delay}ms`);

    Utils.setInterval(() => {
      if (this.hubConnection.getConnectionState() === com.microsoft.signalr.HubConnectionState.CONNECTED) {
        this.reconnecting = false;
        return;
      }
      console.log('SignalR reconnecting....');
      this.hubConnection.start().subscribe(
        new io.reactivex.rxjava3.functions.Action({
          run: () => {
            console.log('conected? ', this.hubConnection.getConnectionState(), this.hubConnection.getConnectionId());
          },
        }),
        new io.reactivex.rxjava3.functions.Consumer<any>({
          accept: (param0: java.lang.Throwable) => {
            console.log(param0.getMessage());
          },
        })
      );
    }, delay);
  }

  onReconnecting(callback: (param: string) => void): void {
    console.log('onReconnecting only for iOS');
  }

  onReconnected(callback: (param: string) => void): void {
    console.log('onReconnected only for iOS');
  }
}
