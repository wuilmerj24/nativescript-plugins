import Foundation
import SwiftUI
import SwiftSignalRClient
import SwiftyJSON

public typealias CallReturn = (Any) -> Void

@objcMembers
@objc(SignalrForNs)
public class SignalrForNs:NSObject{
    private var signalr: HubConnection
    private var builder:HubConnectionBuilder
    @objc public var onInitCallBack: ((String,String)-> Void)? = nil;
    @objc public var onEventCallBack: ((String,Any)-> Void)? = nil;
    
    init(url:String,accessToken:String,shouldSkipNegotiate:Bool,headers:NSArray,handshakeResponseTimeout:Int,keepAliveInterval:Int,serverTimeout:Int,transport:String,reconnect:Bool) {
        var url_f = URL(string: url)
        builder = HubConnectionBuilder(url: url_f!).withLogging(minLogLevel: .error)
        builder.withHttpConnectionOptions(configureHttpOptions: { options in
            if !accessToken.isEmpty {
                let accessTokenProvider: () -> String = {
                    return accessToken
                }
                options.accessTokenProvider = accessTokenProvider
            }
        
        
//            options.skipNegotiation =
        
            if headers.count > 0 {
                var newDictionary: [String: String] = [:]
                // Recorrer el NSArray y convertir cada elemento
                for case let item as [String: Any] in headers {
                    if let name = item["name"] as? String, let value = item["value"] as? String {
                        newDictionary[name] = value
                    }
                }
                options.headers = newDictionary
        
            }
        
        
            if handshakeResponseTimeout >= 0 {
                options.requestTimeout = TimeInterval(handshakeResponseTimeout)
            }
        })
        
        builder.withHubConnectionOptions(configureHubConnectionOptions: { options in
            if keepAliveInterval >= 0 {
                options.keepAliveInterval = Double(keepAliveInterval)
            }
        })
        if !transport.isEmpty {
            if transport == "ALL" {
                builder.withPermittedTransportTypes(TransportType.all)
            }else if transport == "WEBSOCKETS" {
                builder.withPermittedTransportTypes(TransportType.webSockets)
            }else if transport == "LONG_POLLING" {
                builder.withPermittedTransportTypes(TransportType.longPolling)
            }
        }else {
            builder.withPermittedTransportTypes(TransportType.webSockets)
        }
        
                
        if reconnect {
            builder.withAutoReconnect()
        }
        
        
        self.signalr = builder.build()
    }
    
    public func setOnEvento(eventName:String,completion: @escaping (Any)->Void){
        signalr.on(method: eventName, callback: { (data:JSON) in
            do {
                if data.type == .array {
                    let json = try! JSON(data: data.rawData())
                    if let jsonArray = json.array {
                        let array: [Any] = jsonArray.map { $0.object }
                        let nsArray = NSArray(array: array)
//                        self.onEventCallBack?(eventName,nsArray)
                        completion(nsArray)
                        
                    }
                }

                if data.type == .string {
                    debugPrint("stringKey es un string")
                    let json = try! JSON(data: data.rawData())
                    if let swiftString = json.string {
                        let nsString: NSString = swiftString as NSString
//                        self.onEventCallBack?(eventName,nsString)
                        completion(nsString)
                    }
                }

                if data.type == .number {
                    debugPrint("intKey es un número")
                    let json = try! JSON(data: data.rawData())
                    if let number = json.number {
//                        self.onEventCallBack?(eventName,number)
                        completion(number)
                    }
                }

                if data.type == .bool {
                    debugPrint("boolKey es un booleano")
                    let json = try! JSON(data: data.rawData())
                    if let boolValue = json.bool {
                        let nsBoolean = NSNumber(value: boolValue)
                        if nsBoolean == 1 {
//                            self.onEventCallBack?(eventName,true)
                            completion(true)
                        }else{
//                            self.onEventCallBack?(eventName,false)
                            completion(false)
                        }
                    }
                }

                if data.type == .dictionary {
                    let nsDictionary = self.convertToNSDictionary(data.rawValue as! [String : Any])
//                    self.onEventCallBack?(eventName,nsDictionary)
                    completion(nsDictionary)
                }
            } catch {
                debugPrint("Error al parsear JSON: \(error)")
//                self.onEventCallBack?(eventName,error)
                completion(error)
            }
        })
    }
    
    // Función recursiva para convertir [String: Any] a NSDictionary, manejando diccionarios anidados
    func convertToNSDictionary(_ dictionary: [String: Any]) -> NSDictionary {
        let convertedDictionary = dictionary.mapValues { value -> Any in
            if let nestedDictionary = value as? [String: Any] {
                return convertToNSDictionary(nestedDictionary)
            } else if let nestedArray = value as? [Any] {
                return convertToNSArray(nestedArray)
            } else {
                return value
            }
        }
        return NSDictionary(dictionary: convertedDictionary)
    }

    // Función recursiva para convertir [Any] a NSArray, manejando arrays anidados
    func convertToNSArray(_ array: [Any]) -> NSArray {
        let convertedArray = array.map { element -> Any in
            if let nestedArray = element as? [Any] {
                return convertToNSArray(nestedArray)
            } else if let nestedDictionary = element as? [String: Any] {
                return convertToNSDictionary(nestedDictionary)
            } else {
                return element
            }
        }
        return NSArray(array: convertedArray)
    }
    
    public func setInvoke(eventName:String,data:Any?){
        signalr.invoke(method:eventName,arguments: data as! [any Encodable]){error in
            debugPrint("eventName ",eventName,data)
            
        }
    }
    
    public func setSend(eventName:String,data:Any?,completion: @escaping (Any)->Void){
      var arguments: [Encodable] = []
      print("data \(data)")
         

        // Envía los argumentos como una lista de elementos 'Encodable'
      if let dataArray = data as? [Any] {
        for item in dataArray {
          let jsonData = JSON(item ?? NSNull())
          arguments.append(EncodableJSON(jsonData))
        }
      }

      print("setSend \(arguments)")
        signalr.invoke(method: eventName, arguments: arguments) { error in
            if let error = error {
//                debugPrint("Error al enviar datos: \(error)")
              completion(error)
            } else {
//                debugPrint("Datos enviados con éxito para el evento: \(eventName)")
              completion("OK invoke")
            }
        }
    }
  
    
    public func startConn() {
        do {
            let hubConnectionDelegate = TestHubConnectionDelegate()
            hubConnectionDelegate.connectionDidFailToOpenHandler = { error in
                debugPrint("connectionDidFailToOpenHandler ",error.localizedDescription)
                self.onInitCallBack?("connectionDidFailToOpenHandler", error.localizedDescription)
            }
            
            hubConnectionDelegate.connectionDidOpenHandler = { hubConnection in
                debugPrint("id ",hubConnection.connectionId)
                self.onInitCallBack?("connectionDidOpenHandler", hubConnection.connectionId!)
            }
            
            hubConnectionDelegate.connectionDidCloseHandler = { error in
                debugPrint("connectionDidCloseHandler ", error?.localizedDescription)
                self.onInitCallBack?("connectionDidCloseHandler", "\(error?.localizedDescription)")
            }
            
            builder.withHubConnectionDelegate(delegate: hubConnectionDelegate)
            signalr = builder.build()
            signalr.start()
        } catch let error as Error {
            debugPrint("error ",error.localizedDescription)
        }
    }
    
    public func getIdConn() -> String {
        return signalr.connectionId ?? "0"
    }
    
    public func disconnect() -> Bool {
        do{
            signalr.stop()
            return true
        }catch let error as Error {
            self.onInitCallBack?("disconnect",error.localizedDescription)
            return false
        }
    }
    
}

class TestHubConnectionDelegate: HubConnectionDelegate {
    var connectionDidOpenHandler: ((_ hubConnection: HubConnection) -> Void)?
    var connectionDidFailToOpenHandler: ((_ error: Error) -> Void)?
    var connectionDidCloseHandler: ((_ error: Error?) -> Void)?

    func connectionDidOpen(hubConnection: HubConnection) {
        connectionDidOpenHandler?(hubConnection)
    }

    func connectionDidFailToOpen(error: Error) {
        connectionDidFailToOpenHandler?(error)
    }

    func connectionDidClose(error: Error?) {
        connectionDidCloseHandler?(error)
    }
}

// Define una estructura para manejar datos dinámicos
struct DynamicData: Codable {
    var value: Any

    init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let array = try? container.decode([DynamicData].self) {
            self.value = array
        } else if let dictionary = try? container.decode([String: DynamicData].self) {
            self.value = dictionary
        } else if let string = try? container.decode(String.self) {
            self.value = string
        } else if let int = try? container.decode(Int.self) {
            self.value = int
        } else if let double = try? container.decode(Double.self) {
            self.value = double
        } else if let bool = try? container.decode(Bool.self) {
            self.value = bool
        } else {
            throw DecodingError.typeMismatch(DynamicData.self, DecodingError.Context(codingPath: decoder.codingPath, debugDescription: "Unsupported data type"))
        }
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()

        if let array = value as? [DynamicData] {
            try container.encode(array)
        } else if let dictionary = value as? [String: DynamicData] {
            try container.encode(dictionary)
        } else if let string = value as? String {
            try container.encode(string)
        } else if let int = value as? Int {
            try container.encode(int)
        } else if let double = value as? Double {
            try container.encode(double)
        } else if let bool = value as? Bool {
            try container.encode(bool)
        } else {
            throw EncodingError.invalidValue(value, EncodingError.Context(codingPath: encoder.codingPath, debugDescription: "Unsupported data type"))
        }
    }
}

struct EncodableJSON: Encodable {
    private let json: JSON

    init(_ json: JSON) {
        self.json = json
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()
        switch json.type {
        case .array:
            try container.encode(json.arrayValue.map { EncodableJSON($0) })
        case .dictionary:
            try container.encode(json.dictionaryValue.mapValues { EncodableJSON($0) })
        case .string:
            try container.encode(json.stringValue)
        case .number:
            if let intValue = json.int {
                try container.encode(intValue)
            } else if let doubleValue = json.double {
                try container.encode(doubleValue)
            } else if let floatValue = json.float {
                try container.encode(floatValue)
            }
        case .bool:
            try container.encode(json.boolValue)
        default:
            try container.encodeNil()
        }
    }
}
