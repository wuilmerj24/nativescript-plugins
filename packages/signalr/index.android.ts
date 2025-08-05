import { Utils } from '@nativescript/core';
import { SignalrCommon } from './common';
import { EStateConn } from './enums/states_conn.enums';
import { TypeTransport } from './enums/types_transport.enums';
import { OptionsConnect } from './interfaces/conn_options.interface';

export class Signalr extends SignalrCommon {
    protected signalr: com.microsoft.signalr.HubConnection;
    private options: OptionsConnect;
    create(options: OptionsConnect): Promise<any> {
        this.options = options;
        return new Promise(async (rs, rj) =>{
            try {
                this.isConnected = EStateConn.CONNECTING;
                const builder = com.microsoft.signalr.HubConnectionBuilder.create(options.url);
                if (options.shouldSkipNegotiate) {
                    builder.shouldSkipNegotiate(options.shouldSkipNegotiate);
                }

                if (options.accessToken) {
                    builder.withAccessTokenProvider(
                        io.reactivex.rxjava3.core.Single.defer(
                            new io.reactivex.rxjava3.functions.Supplier<any>({
                                get() {
                                    return io.reactivex.rxjava3.core.Single.just(options.accessToken);
                                },
                            })
                        )
                    );
                }

                if (options.headers) {
                    const headers: java.util.Map<string, string> = new java.util.HashMap<string, string>();

                    for (let i: number = 0; i < options.headers.length; i++) {
                        headers.put(options.headers[i].name, options.headers[i].value);
                    }
                    builder.withHeaders(headers);
                }

                if (options.handshakeResponseTimeout) {
                    builder.withHandshakeResponseTimeout(options.handshakeResponseTimeout);
                }

                if (options.keepAliveInterval) {
                    builder.withKeepAliveInterval(options.keepAliveInterval);
                }

                if (options.transport) {
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
                    builder.withTransport(transport);
                }
                this.signalr = builder.build();

                await this.signalr.start().subscribe(
                    new io.reactivex.rxjava3.functions.Action({
                        run:()=> {
                            this.isConnected = this.getConnectionState(this.signalr.getConnectionState());
                            rs(this.signalr);
                        },
                    }),
                    new io.reactivex.rxjava3.functions.Consumer<any>({
                        accept:(param0: java.lang.Throwable)=> {
                            rj(param0.getMessage());
                        },
                    })
                );

            } catch (error) {
                console.log(error);
                rj(error);           
            }
        })
    }

    disconnect(): void {
        if (this.isConnected == EStateConn.CONNECTED) {
            this.signalr.stop();
        }
    }

    conectionId(): string {
        return this.signalr.getConnectionId();
    }

    on(event: string, callback: (...payload) => void): () => void {
        console.log("evento ",event);
        // @ts-ignore
        this.signalr.on(
            event,
            new com.microsoft.signalr.Action1({
                invoke:(param0)=>{
                    if (param0 instanceof java.util.ArrayList) {
                        const gson: com.google.gson.Gson = new com.google.gson.Gson();
                        const jsonString: string = gson.toJson(param0);
                        const jsonArray: org.json.JSONArray = new org.json.JSONArray(jsonString);
                        const data: Array<any> = Utils.dataDeserialize(jsonArray);
                        callback(data);
                    } else if (param0 instanceof com.google.gson.internal.LinkedTreeMap) {
                        const gson: com.google.gson.Gson = new com.google.gson.Gson();
                        const jsonString = gson.toJson(param0);
                        const jsonObject: org.json.JSONObject = new org.json.JSONObject(jsonString);
                        const data = Utils.dataDeserialize(jsonObject);
                        callback(data);
                    } else {
                        const data = Utils.dataDeserialize(param0);
                        callback(data);
                    }
                },
            }),
            java.lang.Object.class
        );
        return () => {
            // @ts-ignore
            this.signalr.remove(event);
        };
    }

    off(event: string) {
        // @ts-ignore
        this.signalr.remove(event);
    }


    emit(event: string, payload: any[]) {
        if (!event) {
            throw Error('Emit Failed: No Event argument');
        }
        this.signalr.send(event, payload);
    }
    
    onClose(callback: () => void): () => void {
        this.signalr.onClosed(
            new com.microsoft.signalr.OnClosedCallback({
                invoke:(param0: java.lang.Exception)=> {
                    this.isConnected = this.getConnectionState(this.signalr.getConnectionState());
                    console.log("STATE ", this.isConnected);
                    if (this.options.reconnect) {
                        let intervalo;
                        intervalo = Utils.setInterval(async () => {
                            this.isConnected = this.getConnectionState(this.signalr.getConnectionState());
                            console.log("STATE reconnecting... ", this.isConnected);
                            if (this.signalr.getConnectionState() == com.microsoft.signalr.HubConnectionState.DISCONNECTED) {
                                await this.create(this.options);
                            } else {
                                this.isConnected = this.getConnectionState(this.signalr.getConnectionState());
                                console.log("STATE connected... ", this.isConnected);
                                Utils.clearInterval(intervalo);
                                callback();
                            }
                        }, 5000);
                    } else {
                        callback();
                    }

                },
            })
        );
        return () => {

        }
    }

    private getConnectionState(state: com.microsoft.signalr.HubConnectionState): EStateConn {
        if (state == com.microsoft.signalr.HubConnectionState.DISCONNECTED) {
            return EStateConn.DISCONNECTED;
        } else if (state == com.microsoft.signalr.HubConnectionState.CONNECTED) {
            return EStateConn.CONNECTED;
        } else if (state == com.microsoft.signalr.HubConnectionState.DISCONNECTED) {
            return EStateConn.DISCONNECTED;
        } else {
            return EStateConn.DISCONNECTED;
        }
    }
}
