//
//  CustomNavigationWrapper.swift
//  MapboxNavigationForNS
//
//  Created by wuilmjer on 30/1/26.
//


import UIKit
import CoreLocation
internal import MapKit
import MapboxDirections
import MapboxNavigationCore
import MapboxCommon
import Combine
import AVFAudio
import MapboxNavigationUIKit

@objc public protocol NSNavigationCallback: AnyObject {
    @objc optional func onRouteRequestStarted()
    @objc optional func onRoutesReady(_ routes: NSDictionary)
    @objc optional func onRouteCanceled()
    @objc optional func onRouteFailed(_ errorMessage: NSString)

    @objc optional func onLocationChanged(
        _ latitude: NSNumber,
        longitude: NSNumber,
        bearing: NSNumber,
        speed: NSNumber
    )

    @objc optional func onRouteProgress(
        _ state: NSString,
        distanceRemainingMeters: NSNumber,
        durationRemainingSeconds: NSNumber,
        estimatedTimeToArrivalEpochSeconds: NSNumber
    )
}


@objc protocol CustomNavigationInternalDelegate: AnyObject {
  func navigationDidCancel()
  //NAVROUTES CALLBACK
  @objc optional func onRouteRequestStarted()
  @objc optional func onRoutesReady(routes:[String: Any])
  @objc optional func onRouteCanceled()
  @objc optional func onRouteFailed(errorMessage:NSString)
  //LOCATIONS CALLBACKS
  @objc optional func onLocationChanged(latitude:NSNumber,longitude:NSNumber,bearing:NSNumber?,speed:NSNumber?)
  //POROGRESS CALLBACKS
  @objc optional func onRouteProgress(
      state:NSString,
      distanceRemainingMeters:NSNumber,
      durationRemainingSeconds:NSNumber,
      estimatedTimeToArrivalEpochSeconds:NSNumber
  )
}

@objcMembers
@objc(CustomNavigationWrapper)
public final class CustomNavigationWrapper: NSObject{
  @objc public weak var callback: NSNavigationCallback?

    private var navigationVC: CustomNavigationViewController?
    
  
    private var datasetProfileIdentifier:ProfileIdentifier?
    @objc func setDatasetProfileIdentifier(
        datasetProfileIdentifier: NSNumber
    ) {
        NSLog("📍 setDatasetProfileIdentifier called with value: %@", datasetProfileIdentifier)

        switch datasetProfileIdentifier.intValue {
        case 0: 
            self.datasetProfileIdentifier = .automobile
        case 1:
            self.datasetProfileIdentifier = .automobileAvoidingTraffic
            NSLog("✅ datasetProfileIdentifier set to: automobileAvoidingTraffic")

        case 2:
            self.datasetProfileIdentifier = .cycling
            NSLog("✅ datasetProfileIdentifier set to: cycling")

        case 3:
            self.datasetProfileIdentifier = .walking
            NSLog("✅ datasetProfileIdentifier set to: walking (case 3)")
        default:
            NSLog("⚠️ Unknown datasetProfileIdentifier value: %@", datasetProfileIdentifier)
        }
    }
    
    private var alternativeRoutesDetectionConfig:AlternativeRoutesDetectionConfig?
    @objc func setalternativeRoutesDetectionConfig(
        acceptionPolicy: NSNumber ,
        refreshIntervalSeconds: NSNumber
    ) {
        NSLog(
            "📍 setalternativeRoutesDetectionConfig called | acceptionPolicy=%@ | refreshIntervalSeconds=%@",
            acceptionPolicy,
            refreshIntervalSeconds
        )

        var acceptionPolicyParam: AlternativeRoutesDetectionConfig.AcceptionPolicy = .fasterRoutes

        switch acceptionPolicy.intValue {
        case 1:
            acceptionPolicyParam = .fasterRoutes
            NSLog("✅ AcceptionPolicy set to: fasterRoutes")

        case 2:
            acceptionPolicyParam = .shorterRoutes
            NSLog("✅ AcceptionPolicy set to: shorterRoutes")

        default:
            NSLog("⚠️ Unknown acceptionPolicy value %@, defaulting to fasterRoutes", acceptionPolicy)
        }

        self.alternativeRoutesDetectionConfig = .init(
            acceptionPolicy: acceptionPolicyParam,
            refreshIntervalSeconds: refreshIntervalSeconds.doubleValue
        )

        NSLog(
            "🚀 alternativeRoutesDetectionConfig initialized | policy=%@ | refreshInterval=%.2f",
            String(describing: acceptionPolicyParam),
            refreshIntervalSeconds.doubleValue
        )
    }
    
    private var fasterRouteDetectionConfig:FasterRouteDetectionConfig?
    @objc func setFasterRouteDetectionConfig(
        proactiveReroutingInterval: NSNumber,
        minimumRouteDurationRemaining: NSNumber,
        minimumManeuverOffset: NSNumber
    ) {
        NSLog(
            "📍 setFasterRouteDetectionConfig called | proactiveReroutingInterval=%@ | minimumRouteDurationRemaining=%@ | minimumManeuverOffset=%@",
            proactiveReroutingInterval,
            minimumRouteDurationRemaining,
            minimumManeuverOffset
        )

        self.fasterRouteDetectionConfig = .init(
            fasterRouteApproval: .automatically,
            proactiveReroutingInterval: proactiveReroutingInterval.doubleValue,
            minimumRouteDurationRemaining: minimumRouteDurationRemaining.doubleValue,
            minimumManeuverOffset: minimumManeuverOffset.doubleValue
        )

        NSLog(
            "🚀 fasterRouteDetectionConfig initialized | proactiveReroutingInterval=%.2f | minimumRouteDurationRemaining=%.2f | minimumManeuverOffset=%.2f",
            proactiveReroutingInterval.doubleValue,
            minimumRouteDurationRemaining.doubleValue,
            minimumManeuverOffset.doubleValue
        )
    }

    private var rerouteConfig:RerouteConfig? = nil
    @objc func setRerouteConfig(
        detectsReroutes: NSNumber,
        rerouteStrategyForMatchRoute: NSNumber
    ) {
        NSLog(
            "📍 setRerouteConfig called | detectsReroutes=%@ | rerouteStrategyForMatchRoute=%@",
            detectsReroutes,
            rerouteStrategyForMatchRoute
        )

        var rerouteStrategyForMatchRouteParam: RerouteStrategyForMatchRoute = .rerouteDisabled

        switch rerouteStrategyForMatchRoute.intValue {
        case 1:
            rerouteStrategyForMatchRouteParam = .navigateToFinalDestination
            NSLog("✅ rerouteStrategyForMatchRoute set to: navigateToFinalDestination")

        default:
            NSLog("⚠️ rerouteStrategyForMatchRoute defaulted to: rerouteDisabled")
        }

        self.rerouteConfig = .init(
            detectsReroute: detectsReroutes.boolValue,
            rerouteStrategyForMatchRoute: rerouteStrategyForMatchRouteParam
        )

        NSLog(
            "🚀 rerouteConfig initialized | detectsReroute=%@ | strategy=%@",
            detectsReroutes.boolValue.description,
            String(describing: rerouteStrategyForMatchRouteParam)
        )
    }
    
    
    private var initialManeuverAvoidanceRadius:Double?
    @objc func setInitialManeuverAvoidanceRadius(
        initialManeuverAvoidanceRadius: NSNumber
    ) {
        NSLog(
            "📍 setInitialManeuverAvoidanceRadius called | value=%@",
            initialManeuverAvoidanceRadius
        )

        let resolvedValue = initialManeuverAvoidanceRadius.doubleValue
        self.initialManeuverAvoidanceRadius = resolvedValue

        NSLog(
            "✅ initialManeuverAvoidanceRadius set | resolvedValue=%f",
            resolvedValue
        )
    }

    private var routeRefreshPeriod:Double?
    @objc func setRouteRefreshPeriod(
        routeRefreshPeriod: NSNumber
    ) {
        NSLog(
            "🔄 setRouteRefreshPeriod called | value=%@",
            routeRefreshPeriod
        )

        let resolvedValue = routeRefreshPeriod.doubleValue
        self.routeRefreshPeriod = resolvedValue

        NSLog(
            "✅ routeRefreshPeriod set | resolvedValue=%f seconds",
            resolvedValue
        )
    }

    private var routingProviderSource:RoutingProviderSource? = nil
    @objc func setRoutingProviderSource(
        routingProviderSource: NSNumber
    ) {
        NSLog(
            "🌐 setRoutingProviderSource called | rawValue=%@",
            routingProviderSource
        )

        let resolvedValue = routingProviderSource.intValue
        let resolvedSource: RoutingProviderSource

        if resolvedValue == 0 {
            resolvedSource = .online
        } else if resolvedValue == 1 {
            resolvedSource = .offline
        } else {
            resolvedSource = .hybrid
        }

        self.routingProviderSource = resolvedSource

        NSLog(
            "✅ routingProviderSource set | resolved=%@",
            String(describing: resolvedSource)
        )
    }
    
    private var prefersOnlineRoute:Bool? = nil
    @objc func setPrefersOnlineRoute(
        prefersOnlineRoute: NSNumber
    ) {
        NSLog(
            "🌍 setPrefersOnlineRoute called | rawValue=%@",
            prefersOnlineRoute
        )

        let resolvedValue = prefersOnlineRoute.boolValue
        self.prefersOnlineRoute = resolvedValue

        NSLog(
            "✅ prefersOnlineRoute set | resolved=%@",
            resolvedValue ? "true" : "false"
        )
    }
    
    private var ignoreExpirationTimeInRefresh:Bool? = nil
    @objc func setIgnoreExpirationTimeInRefresh(
        ignoreExpirationTimeInRefresh: NSNumber
    ) {
        NSLog(
            "⏱️ setIgnoreExpirationTimeInRefresh called | rawValue=%@",
            ignoreExpirationTimeInRefresh
        )

        let resolvedValue = ignoreExpirationTimeInRefresh.boolValue
        self.ignoreExpirationTimeInRefresh = resolvedValue

        NSLog(
            "✅ ignoreExpirationTimeInRefresh set | resolved=%@",
            resolvedValue ? "true" : "false"
        )
    }
    
    private var telemetryData:TelemetryAppMetadata?
    @objc func setTelemetryData(
        name: NSString,
        version: NSString,
        userId: NSString,
        sessionId: NSString
    ) {
        NSLog(
            "📡 setTelemetryData called | name=%@ | version=%@ | userId=%@ | sessionId=%@",
            name,
            version,
            userId,
            sessionId
        )

        let resolvedName = name as String
        let resolvedVersion = version as String

        self.telemetryData = .init(
            name: resolvedName,
            version: resolvedVersion
        )


        NSLog(
            "✅ telemetryData set | name=%@ | version=%@",
            resolvedName,
            resolvedVersion
        )
    }

    private var logLevel:MapboxCommon.LoggingLevel = .warning
    @objc func setLogLevel(
        logLevel: NSNumber
    ) {
        let level = logLevel.intValue

        switch level {
        case 0:
            self.logLevel = .warning
        case 1:
            self.logLevel = .info
        case 2:
            self.logLevel = .error
        default:
            self.logLevel = .debug
        }

        NSLog("🪵 setLogLevel called | raw=%d | resolved=%@", level, "\(self.logLevel)")
    }
    
    private var locationSource:LocationSource = .live
    @objc func setLocationSource(
        locationSource: NSNumber,
        lat: NSNumber?,
        lng: NSNumber?
    ) {
        let source = locationSource.intValue

        switch source {
        case 0:
            self.locationSource = .live
            NSLog("📍 setLocationSource | source=live")

        case 1:
            guard let lat = lat?.doubleValue,
                  let lng = lng?.doubleValue else {
                NSLog("❌ setLocationSource | simulation selected but lat/lng are nil")
                return
            }

            let location = CLLocation(latitude: lat, longitude: lng)
            self.locationSource = .simulation(initialLocation: location)

            NSLog(
                "🧪 setLocationSource | source=simulation | lat=%.6f | lng=%.6f",
                lat,
                lng
            )

        default:
            self.locationSource = .live
            NSLog("⚠️ setLocationSource | unknown source=%d → fallback=live", source)
        }
    }

    @objc var copilotEnabled:Bool = false
    
    private var unitOfMeasurement:UnitOfMeasurement?
    @objc func setUnitOfMeasurement(
        unitOfMeasurement: NSNumber
    ) {
        let value = unitOfMeasurement.intValue

        switch value {
        case 0:
            self.unitOfMeasurement = .auto
            NSLog("📏 setUnitOfMeasurement | auto")

        case 1:
            self.unitOfMeasurement = .imperial
            NSLog("📏 setUnitOfMeasurement | imperial")

        case 2:
            self.unitOfMeasurement = .metric
            NSLog("📏 setUnitOfMeasurement | metric")

        default:
            self.unitOfMeasurement = .auto
            NSLog(
                "⚠️ setUnitOfMeasurement | unknown value=%d → fallback=auto",
                value
            )
        }
    }

    private var localeMapbox:Locale?
    @objc func setLocale(
        locale: NSLocale
    ) {
        self.localeMapbox = locale as Locale

        NSLog(
            "🌍 setLocale | identifier=%@",
            locale.localeIdentifier
        )
    }
    
    @objc var disableBackgroundTrackingLocation:Bool = false
        
    @objc var utilizeSensorData:Bool = true
        
    @objc var navigatorPredictionInterval:NSNumber?
    
    private var historyRecordingConfig:HistoryRecordingConfig?
    @objc func setHistoryRecordingConfig(
        url: NSString
    ) {
        let urlString = url as String

        NSLog("📜 setHistoryRecordingConfig | input=%@", urlString)

        guard let resolvedURL = URL(string: urlString) else {
            NSLog("❌ setHistoryRecordingConfig | invalid URL")
            return
        }

        self.historyRecordingConfig = .init(
            historyDirectoryURL: resolvedURL
        )

        NSLog(
            "✅ setHistoryRecordingConfig | resolvedURL=%@",
            resolvedURL.absoluteString
        )
    }

    private var predictiveCacheConfig:PredictiveCacheConfig?
    @objc func setPredictiveCacheConfig(
        currenLocationRadius: NSNumber,
        routeBufferRadius: NSNumber,
        destinationLocationRadius: NSNumber,
        maximunRequest: NSNumber,
        zoomMin: NSNumber,
        zoomMax: NSNumber
    ) {
        NSLog(
            "🗺️ setPredictiveCacheConfig | currentRadius=%.2f | routeBuffer=%.2f | destinationRadius=%.2f | maxRequests=%d | zoomMin=%d | zoomMax=%d",
            currenLocationRadius.doubleValue,
            routeBufferRadius.doubleValue,
            destinationLocationRadius.doubleValue,
            maximunRequest.intValue,
            zoomMin.intValue,
            zoomMax.intValue
        )

        let locationConfig: PredictiveCacheLocationConfig = .init(
            currentLocationRadius: currenLocationRadius.doubleValue,
            routeBufferRadius: routeBufferRadius.doubleValue,
            destinationLocationRadius: destinationLocationRadius.doubleValue
        )

        NSLog("✅ PredictiveCacheLocationConfig creado")

        let predictiveCacheNavigationConfig: PredictiveCacheNavigationConfig = .init(
            locationConfig: locationConfig
        )

        NSLog("✅ PredictiveCacheNavigationConfig creado")

        let predictiveCacheLocationConfig: PredictiveCacheLocationConfig = .init(
            currentLocationRadius: currenLocationRadius.doubleValue,
            routeBufferRadius: routeBufferRadius.doubleValue,
            destinationLocationRadius: destinationLocationRadius.doubleValue
        )

        let zoomRange: ClosedRange<UInt8> =
            UInt8(zoomMin.intValue)...UInt8(zoomMax.intValue)

        NSLog("🔍 ZoomRange configurado: %d → %d", zoomRange.lowerBound, zoomRange.upperBound)

        let predictiveCacheMapsConfig: PredictiveCacheMapsConfig = .init(
            locationConfig: predictiveCacheLocationConfig,
            maximumConcurrentRequests: maximunRequest.uint32Value,
            zoomRange: zoomRange
        )

        NSLog("✅ PredictiveCacheMapsConfig creado")

        self.predictiveCacheConfig = .init(
            predictiveCacheNavigationConfig: predictiveCacheNavigationConfig,
            predictiveCacheMapsConfig: predictiveCacheMapsConfig,
            predictiveCacheSearchConfig: nil
        )

        NSLog("🚀 setPredictiveCacheConfig aplicado correctamente")
    }
    
    private var electronicHorizonConfig:ElectronicHorizonConfig?
    @objc func setElectronicHorizonConfig(
        length: NSNumber,
        expansion: NSNumber,
        branchLength: NSNumber,
        minTime: NSNumber
    ) {
        NSLog(
            "🛰️ setElectronicHorizonConfig | length=%.2f | expansion=%d | branchLength=%.2f | minTime=%.2f",
            length.doubleValue,
            expansion.intValue,
            branchLength.doubleValue,
            minTime.doubleValue
        )

        self.electronicHorizonConfig = .init(
            length: length.doubleValue,
            expansionLevel: expansion.uintValue,
            branchLength: branchLength.doubleValue,
            minTimeDeltaBetweenUpdates: minTime.doubleValue
        )

        NSLog("✅ ElectronicHorizonConfig aplicado correctamente")
    }
    
    private var liveIncidentsConfig:IncidentsConfig?
    @objc func setLiveIncidentsConfig(
        graph: NSString,
        apiURL: NSString
    ) {
        let graphValue = graph as String
        let apiURLString = apiURL as String

        NSLog(
            "🚨 setLiveIncidentsConfig | graph=%@ | apiURL=%@",
            graphValue,
            apiURLString
        )

        guard let resolvedURL = URL(string: apiURLString) else {
            NSLog("❌ setLiveIncidentsConfig | invalid apiURL")
            return
        }

        self.liveIncidentsConfig = .init(
            graph: graphValue,
            apiURL: resolvedURL
        )

        NSLog(
            "✅ LiveIncidentsConfig aplicado | graph=%@ | apiURL=%@",
            graphValue,
            resolvedURL.absoluteString
        )
    }
    
    private var multilegAdvancing:CoreConfig.MultilegAdvanceMode?
    @objc func setMultilegAdvancing( value:NSNumber ){
    }
    
    @objc var tilesVersion:NSString?
    
    private var tilestoreConfig:TileStoreConfiguration?
    @objc func setTilestoreConfig(
        url: NSString
    ) {
        let urlString = url as String

        NSLog("🗺️ setTilestoreConfig | input=%@", urlString)

        guard let resolvedURL = URL(string: urlString) else {
            NSLog("❌ setTilestoreConfig | invalid URL")
            return
        }

        self.tilestoreConfig = .custom(resolvedURL)

        NSLog(
            "✅ TilestoreConfig aplicado | url=%@",
            resolvedURL.absoluteString
        )
    }

    private var ttsConfig:TTSConfig = .default

    @MainActor
    @objc func setTtsConfig(
        muted: NSNumber,
        volume: NSNumber,
        locale: NSLocale
    ) {
        NSLog(
            "🔊 setTtsConfig | muted=%@ | volume=%.2f | locale=%@",
            muted.boolValue ? "true" : "false",
            volume.doubleValue,
            locale.localeIdentifier
        )

        let resolvedLocale = locale as Locale

        let speech = PluginSpeechSynthesizer(
            muted: muted.boolValue,
            volume: .system, // Mapbox controla el volumen del sistema
            locale: resolvedLocale,
            managesAudioSession: false
        )

        self.ttsConfig = .custom(
            speechSynthesizer: speech
        )

        NSLog("✅ TTS Config aplicado correctamente")
    }

    private var waypoints: [Waypoint] = []
    @objc func setWaypoints(_ rawWaypoints: NSArray) {
        NSLog("📍 setWaypoints llamado | rawWaypoints count=%ld", rawWaypoints.count)

        guard let array = rawWaypoints as? [[String: Any]] else {
            NSLog("❌ setWaypoints | formato inválido, se esperaba [[String: Any]]")
            return
        }

        let parsedWaypoints = array.compactMap { item -> Waypoint? in
            let waypoint = Self.parseWaypoint(item)

            if waypoint == nil {
                NSLog("⚠️ setWaypoints | waypoint inválido: %@", item.description)
            }

            return waypoint
        }

        self.waypoints = parsedWaypoints

        NSLog(
            "✅ setWaypoints | waypoints válidos almacenados=%ld",
            self.waypoints.count
        )
    }
    
    private static func parseWaypoint(_ dict: [String: Any]) -> Waypoint? {
        guard let lat = dict["latitude"] as? NSNumber,
        	let lon = dict["longitude"] as? NSNumber
        else { return nil }
        let coordinate = CLLocationCoordinate2D( latitude: lat.doubleValue, longitude: lon.doubleValue )
        var waypoint = Waypoint(coordinate: coordinate)
        // name
        if let name = dict["name"] as? String { waypoint.name = name }
        // bearing
        if let bearing = dict["bearing"] as? NSNumber { waypoint.heading = bearing.doubleValue }
        // bearing tolerance
        if let tolerance = dict["bearingTolerance"] as? NSNumber { waypoint.headingAccuracy = tolerance.doubleValue }
        // radius
        if let radius = dict["radius"] as? NSNumber { waypoint.coordinateAccuracy = radius.doubleValue }
        return waypoint
    }
    
    @objc var allowTurnByTurn:Bool = true
    
    @objc var distanceUnit:LengthFormatter.Unit = .kilometer
    
    private var directionPriority:DirectionsPriority?
    @objc func setDirectionPriority(priority:NSNumber){
        switch(priority){
            case 0: self.directionPriority = .high
            case 1: self.directionPriority = .medium
            default: self.directionPriority = .low
        }
    }
    
    @objc var arriveBy:NSString?
    @objc var depBy:NSString?
    
    private var distanceMeasure:MeasurementSystem?
    @objc func setDistanceMeasure(distanceMeasure:NSNumber){
        if(distanceMeasure==0){
            self.distanceMeasure = .imperial
            return
        }
        self.distanceMeasure = .metric
    }
    
    @objc var includeAlternativeRoutes:Bool = true
    @objc var includesExitRoundaboutManeuver:Bool = false
    @objc var includesSpokenInstructions:Bool = true
    @objc var includesSteps:Bool = true
    @objc var includesTollPrices:Bool = false
    @objc var includesVisualInstructions:Bool = true
    private var maximunHeigth:Measurement<UnitLength>?
    @objc func maximunHeigth(value:NSNumber,unit:UnitLength){
        self.maximunHeigth = Measurement(value: value.doubleValue, unit: unit)
    }
            
    private var maximunWidth:Measurement<UnitLength>?
    @objc func maximunWidth(value:NSNumber,unit:UnitLength){
        self.maximunWidth = Measurement(value: value.doubleValue, unit: unit)
    }
    
    private var maximunWeight:Measurement<UnitMass>?
    @objc func maximunWeight(value:NSNumber,unit:UnitMass){
        self.maximunWeight = Measurement(value: value.doubleValue, unit: unit)
    }
    @objc var refreshingEnabled:Bool = false
    @objc var mapStyle:NSString?
    
    @objc public override init() {
        super.init()
    }

    // MARK: - Factory principal (para NativeScript)

    /// waypoints: [NSValue] donde cada NSValue contiene CLLocationCoordinate2D
    @objc public func createNavigationViewController(
        accessToken: String,
        mode: NavigationMode
    ) -> UIViewController {


        let vc = CustomNavigationViewController(
            accessToken: accessToken,
            mode: mode,
            rawWaypoints:self.waypoints,
            allowTurnByTurn:self.allowTurnByTurn,
            distanceUnit: self.distanceUnit,
            directionPriority: self.directionPriority,
            arriveBy:self.arriveBy as String?,
            depArriveBy:self.depBy as String?,
            distanceMeasure: self.distanceMeasure,
            includeAlternativeRoutes: self.includeAlternativeRoutes,
            includesExitRoundaboutManeuver: self.includesExitRoundaboutManeuver,
            includesSpokenInstructions: self.includesSpokenInstructions,
            includesSteps: self.includesSteps,
            includesTollPrices: self.includesTollPrices,
            includesVisualInstructions: self.includesVisualInstructions,
            maximunHeigth: self.maximunHeigth,
            maximunWidth: self.maximunWidth,
            maximunWeight: self.maximunWeight,
            refreshingEnabled: self.refreshingEnabled,
            mapStyle: self.mapStyle as String?
        )
      
      
      vc.internalDelegate = self
        
      
      vc.datasetProfileIdentifier = self.datasetProfileIdentifier ?? .automobile
      vc.alternativeRoutesDetectionConfig = self.alternativeRoutesDetectionConfig
      vc.fasterRouteDetectionConfig = self.fasterRouteDetectionConfig
      vc.rerouteConfig = self.rerouteConfig
      vc.initialManeuverAvoidanceRadius = self.initialManeuverAvoidanceRadius
      vc.routeRefreshPeriod = self.routeRefreshPeriod
      vc.routingProviderSource = self.routingProviderSource
      vc.prefersOnlineRoute = self.prefersOnlineRoute
      vc.ignoreExpirationTimeInRefresh = self.ignoreExpirationTimeInRefresh
      
      
      vc.telemtryData = self.telemetryData
      vc.logLevel = self.logLevel
      vc.locationSource = locationSource
      vc.copilotEnabled = self.copilotEnabled
      vc.unitOfMeasurement = self.unitOfMeasurement ?? .auto
      vc.localeMapbox = self.localeMapbox ?? .current
      vc.disableBackgroundTrackingLocation = self.disableBackgroundTrackingLocation
      vc.utilizeSensorData = self.utilizeSensorData
      vc.navigatorPredictionInterval = self.navigatorPredictionInterval as? Double
      vc.historyRecordingConfig = self.historyRecordingConfig
      vc.predictiveCacheConfig = self.predictiveCacheConfig
      vc.electronicHorizonConfig = self.electronicHorizonConfig
      vc.liveIncidentsConfig = self.liveIncidentsConfig
      vc.multilegAdvancing = self.multilegAdvancing
      vc.tilesVersion = self.tilesVersion as? String
      vc.tilestoreConfig = self.tilestoreConfig ?? .default
      vc.ttsConfig = self.ttsConfig
      
      self.navigationVC = vc
        
      return vc
    }

    // MARK: - Helpers

    private func mapMode(_ mode: NavigationMode) -> NavigationMode {
        switch mode {
            case .freeDrive:
                return .freeDrive
            case .navigation:
                return .navigation
        }
    }

    // MARK: - Control opcional desde NativeScript

    @objc public func startNavigation() {
        navigationVC?.perform(
            Selector(("startActiveNavigation"))
        )
    }

    @objc public func dismissNavigation(animated: Bool) {
        navigationVC?.dismiss(animated: animated)
    }
  
  
}



extension CustomNavigationWrapper: CustomNavigationInternalDelegate {
    func navigationDidCancel() {
        NSLog("⚠️ La ruta fue cancelada. Ejecutando lógica interna en el Wrapper...")
      self.navigationVC?.dismiss(animated: true, completion: {
        self.navigationVC?.mapboxNavigationProvider = nil
        self.navigationVC = nil
      })
    }
  func onRouteRequestStarted() {
    DispatchQueue.main.async {
      self.callback?.onRouteRequestStarted?()
    }
  }
  
  func onRoutesReady(routes: [String : Any]) {
    DispatchQueue.main.async {
      self.callback?.onRoutesReady?(routes as NSDictionary)
    }
  }
  
  func onRouteFailed(errorMessage: NSString) {
    DispatchQueue.main.async {
      self.callback?.onRouteFailed?(errorMessage)
    }
  }
  
  func onLocationChanged(latitude: NSNumber, longitude: NSNumber, bearing: NSNumber?, speed: NSNumber?) {
    DispatchQueue.main.async {
      self.callback?.onLocationChanged?(
                  latitude,
                  longitude: longitude,
                  bearing: bearing ?? 0,
                  speed: speed ?? 0
              )
    }
  }
  
  func onRouteProgress(state: NSString, distanceRemainingMeters: NSNumber, durationRemainingSeconds: NSNumber, estimatedTimeToArrivalEpochSeconds: NSNumber) {
    
    DispatchQueue.main.async {
      self.callback?.onRouteProgress?(
        state,
        distanceRemainingMeters: distanceRemainingMeters,
        durationRemainingSeconds: durationRemainingSeconds,
        estimatedTimeToArrivalEpochSeconds: estimatedTimeToArrivalEpochSeconds
    )
    }
  }
  
  func onRouteCanceled() {
    DispatchQueue.main.async {
      self.callback?.onRouteCanceled?()
    }
  }
}

final class PluginSpeechSynthesizer: SpeechSynthesizing {
    // MARK: Protocol requirements
    let voiceInstructions: AnyPublisher<any VoiceInstructionEvent, Never>
    var muted: Bool
    var volume: VolumeMode
    var isSpeaking: Bool = false
    var locale: Locale?
    var managesAudioSession: Bool
    // MARK: - Private
    private let synthesizer = AVSpeechSynthesizer()
    private let subject = PassthroughSubject<any VoiceInstructionEvent, Never>()
    // MARK: - Init
    init( muted: Bool = false, volume: VolumeMode = .system, locale: Locale? = nil, managesAudioSession: Bool = true ) {
        self.muted = muted
        self.volume = volume
        self.locale = locale
        self.managesAudioSession = managesAudioSession
        self.voiceInstructions = subject.eraseToAnyPublisher()
    }
    // MARK: - SpeechSynthesizing
    func prepareIncomingSpokenInstructions( _ instructions: [SpokenInstruction], locale: Locale? ) {
        // NO-OP (válido)
    }
    
    func speak( _ instruction: SpokenInstruction, during legProgress: RouteLegProgress, locale: Locale? ) {
        guard !muted
        else { return }
        let utterance = AVSpeechUtterance(string: instruction.text)
        utterance.voice = AVSpeechSynthesisVoice( language: locale?.identifier ?? self.locale?.identifier
        )
        switch volume {
        case .system: utterance.volume = 1.0
        case .override(_): utterance.volume = 0
        @unknown default: utterance.volume = 1.0
        }
        isSpeaking = true
        synthesizer.speak(utterance)
    }
    func stopSpeaking() {
        isSpeaking = false
        synthesizer.stopSpeaking(at: .immediate)
    }
    
    func interruptSpeaking() {
        stopSpeaking()
    }
}