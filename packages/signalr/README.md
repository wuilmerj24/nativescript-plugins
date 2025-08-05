[![npm version](https://img.shields.io/npm/v/@wuilmerj24/signalr.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@wuilmerj24/signalr)
[![npm downloads](https://img.shields.io/npm/dm/@wuilmerj24/signalr.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@wuilmerj24/signalr)
[![NativeScript compatibility](https://img.shields.io/badge/NativeScript-6%2B-blue.svg?style=for-the-badge&logo=nativescript)](https://nativescript.org)
[![Android Support](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white&labelColor=388E3C)](https://developer.android.com)
[![iOS Support](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=apple&logoColor=white&labelColor=111111)](https://developer.apple.com/ios/)



# @wuilmerj24/signalr

```javascript
npm install @wuilmerj24/signalr
```


## Usage

| Methods | Params |  |
|--------|--------|--------|
| create | `OptionsConnect` | Return `Promise<any>` |
| disconnect | `None` | `None` |
| conectionId | `None` | `string` |
| on | event name type `string` and `callback` | `None` |
| onClose | `callback` | `None` |
| off | `string` | `None` |
| emit | `string` and `payload[]` | `None` |

### `OptionsConnect`
```typescript
interface OptionsConnect {
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
```

### Examples
```typescript
const signalR: Signalr = new Signalr();
signalR.create({
      url: 'URL',
      shouldSkipNegotiate: false,
      headers: [{ name: 'Content-Type', value: 'application/json' }],
      transport: TypeTransport.WEBSOCKETS,
      reconnect: true,
    }).then((res) => {
      console.log(res)
      this.signalR.onClose(() => {
        console.log("Se desconecto");
      });
    }).catch((err) => {
      console.error(err)
    })

async desconectar() {
    await this.signalR.disconnect();
  }

  async getStaateConn() {
    alert(this.signalR.isConnected);
    console.log("id", this.signalR.conectionId());
  }

  async invoke() {
    this.signalR.emit('Broadcast', ["Example", "Mensaje"]);
  }

  async ons() {
    this.signalR.on('NewMessage', (data) => {
      console.log(data);
    });
  }
```


## License

Apache License Version 2.0
