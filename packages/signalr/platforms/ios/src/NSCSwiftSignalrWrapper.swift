import SignalRClient
import Foundation

@objcMembers
@objc(NSCSwiftSignalrWrapper)
public class NSCSwiftSignalrWrapper: NSObject {
  
  // MARK: - Stored options
  private var url: String?
  private var accessToken: String?
  private var shouldSkipNegotiate: Bool = false
  private var handshakeResponseTime: TimeInterval?
  private var keepAliveInterval: TimeInterval?
  private var serverTimeout: TimeInterval?
  private var transport: HttpTransportType = .webSockets
  private var reconnect: Bool = false
  private var headers: [String: String] = [:]
  
  private var hubConnection: HubConnection?
  
  // MARK: - Setters (NativeScript friendly)
  
  @objc func setUrl(_ value: NSString) {
    self.url = value as String
  }
  
  @objc func setAccessToken(_ value: NSString?) {
    self.accessToken = value as String?
  }
  
  @objc func setSkipNegotiation(_ value: NSNumber) {
    self.shouldSkipNegotiate = value.boolValue
  }
  
  @objc func setHandshakeResponseTime(_ value: NSNumber?) {
    self.handshakeResponseTime = value?.doubleValue
  }
  
  @objc func setKeepAliveInterval(_ value: NSNumber?) {
    self.keepAliveInterval = value?.doubleValue
  }
  
  @objc func setServerTimeout(_ value: NSNumber?) {
    self.serverTimeout = value?.doubleValue
  }
  
  /// 1 = longPolling | 2 = sse | 3 = websockets
  @objc func setTransport(_ value: NSNumber) {
    switch value.intValue {
    case 1: self.transport = .longPolling
    case 2: self.transport = .serverSentEvents
    default: self.transport = .webSockets
    }
  }
  
  @objc func setReconnect(_ value: NSNumber) {
    self.reconnect = value.boolValue
  }
  
  @objc func setHeaders(_ value: NSDictionary?) {
    guard let dict = value else { return }
    var result: [String: String] = [:]
    for (k, v) in dict {
      if let key = k as? String, let val = v as? String {
        result[key] = val
      }
    }
    self.headers = result
  }
  
  // MARK: - Build connection
  
  @objc func initConnection() {
    guard let url = self.url else {
      NSLog("❌ SignalR: URL not set")
      
      return
    }
    
    var options = HttpConnectionOptions()
    
    if let token = accessToken, !token.isEmpty {
      options.accessTokenFactory = { token }
    }
    
    options.skipNegotiation = shouldSkipNegotiate
    options.transport = transport
    options.headers = headers
    options.logLevel = .debug
    
    if let timeout = handshakeResponseTime {
      options.timeout = timeout
    }
    
    let builder = HubConnectionBuilder()
      .withUrl(url: url, options: options)
      .withHubProtocol(hubProtocol: .json)
    
    if let keepAlive = keepAliveInterval {
      builder.withKeepAliveInterval(keepAliveInterval: keepAlive)
    }
    
    if let serverTimeout = serverTimeout {
      builder.withServerTimeout(serverTimeout: serverTimeout)
    }
    
    if reconnect {
      builder.withAutomaticReconnect()
    }
    
    hubConnection = builder.build()
  }
  
  // MARK: - Lifecycle
  
  @objc
  func start(_ callback: @escaping (NSNumber?, Error?) -> Void) {
    Task {
      do {
        try await hubConnection?.start()
        callback(1, nil)
      } catch {
        NSLog("❌ start error:", String(describing: error))
        callback(nil, error)
      }
    }
  }
  
  @objc
  func stop(_ callback: @escaping (NSNumber?, Error?) -> Void) {
    Task {
      await hubConnection?.stop()
      callback(1, nil)
    }
  }
  
  // MARK: - Invoke
  
  @objc
  func invoke(
    method: NSString,
    data: NSArray,
    _ callback: @escaping (NSNumber?, Error?) -> Void
  ) {
    Task {
      do {
        let encodableArgs = data.map { AnyEncodable($0) }
        try await hubConnection?.invoke(
          method: method as String,
          arguments: encodableArgs
        )
        callback(1, nil)
      } catch {
        NSLog("❌ invoke error:", String(describing: error))
        callback(nil, error)
      }
    }
  }
  
  // MARK: - On / Off
  
  @objc
  func on(
    method: NSString,
    _ callback: @escaping (String?, Error?) -> Void
  ) {
    Task {
      await hubConnection?.on(method as String) { (data: String) in
        DispatchQueue.main.async {
          callback(data, nil)
        }
      }
    }
  }
  
  @objc
  func off(method: NSString, _ callback: @escaping (NSNumber?, Error?) -> Void) {
    Task {
      await hubConnection?.off(method: method as String)
      callback(1, nil)
    }
  }
  
  // MARK: - State
  
  @objc
  func getConnState(_ callback: @escaping (NSString) -> Void) {
    Task {
      let state = await hubConnection?.state() ?? .Stopped
      let value: NSString
      
      switch state {
      case .Connecting: value = "CONNECTING"
      case .Connected: value = "CONNECTED"
      case .Reconnecting: value = "RECONNECTING"
      default: value = "DISCONNECTED"
      }
      
      callback(value)
    }
  }
  
  @objc
  func getConnId(_ callback: @escaping (NSString)-> Void){
    
  }
  
  @objc
  func onClose(_ callback: @escaping (NSString)-> Void ){
    Task{
      await hubConnection?.onClosed { error in
        let err = error?.localizedDescription ?? "Connection Closed"
        NSLog("onClose ",err)
        callback(err as NSString)
      }
    }
  }
  
  @objc
  func onReconnecting(_ callback: @escaping (NSString)-> Void ){
    Task{
      await hubConnection?.onReconnecting { error in
        let err = error?.localizedDescription ?? "Reconnecting"
        NSLog("onReconnecting ",err)
        callback(err as NSString)
      }
    }
  }
  
  @objc
  func onReconnected(_ callback: @escaping (NSString)-> Void ){
    Task{
      await hubConnection?.onReconnected {
        let msg = "Reconnected"
        NSLog("onReconnected ",msg)
        callback(msg as NSString)
      }
    }
  }}
// MARK: - AnyEncodable (dinámico para NativeScript)

struct AnyEncodable: Encodable {
    private let value: Any

    init(_ value: Any) {
        self.value = value
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()

        switch value {
        case let v as String: try container.encode(v)
        case let v as Int: try container.encode(v)
        case let v as Double: try container.encode(v)
        case let v as Bool: try container.encode(v)

        case let v as [Any]:
            try container.encode(v.map { AnyEncodable($0) })

        case let v as [String: Any]:
            try container.encode(v.mapValues { AnyEncodable($0) })

        case let v as NSArray:
            try container.encode(v.map { AnyEncodable($0) })

        case let v as NSDictionary:
            var dict: [String: AnyEncodable] = [:]
            for (k, v) in v {
                if let key = k as? String {
                    dict[key] = AnyEncodable(v)
                }
            }
            try container.encode(dict)

        default:
            throw EncodingError.invalidValue(
                value,
                .init(
                    codingPath: encoder.codingPath,
                    debugDescription: "Unsupported type \(type(of: value))"
                )
            )
        }
    }
}
