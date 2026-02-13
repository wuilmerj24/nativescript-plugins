//
//  CustomNavigationViewController.swift
//  MapboxNavigationForNS
//
//  Created by wuilmjer on 30/1/26.
//
import MapboxDirections
import MapboxMaps
import MapboxNavigationCore
import MapboxNavigationUIKit
import UIKit
@_spi(Experimental) import MapboxMaps
import Combine



final class CustomNavigationViewController: UIViewController {
  weak var internalDelegate: CustomNavigationInternalDelegate?

    // MARK: - Propiedades Privadas
    
    private let accessToken: String
    private let initialMode: NavigationMode // Almacenamos el modo
    private let locationManager = CLLocationManager()
    
    public var datasetProfileIdentifier: ProfileIdentifier = .automobile
    public var alternativeRoutesDetectionConfig:AlternativeRoutesDetectionConfig?
    public var fasterRouteDetectionConfig:FasterRouteDetectionConfig?
    public var rerouteConfig:RerouteConfig?
    public var initialManeuverAvoidanceRadius:Double?
    public var routeRefreshPeriod:Double?
    public var routingProviderSource:RoutingProviderSource?
    public var prefersOnlineRoute:Bool?
    public var ignoreExpirationTimeInRefresh:Bool?
    
    private var routingConfig:RoutingConfig? = nil
    
    func setRoutingConfig() {

        NSLog("[NS][Routing] setRoutingConfig() called")

        self.routingConfig = .init(
            datasetProfileIdentifier: self.datasetProfileIdentifier
        )

        NSLog(
            "[NS][Routing] datasetProfileIdentifier = %@",
            String(describing: self.datasetProfileIdentifier)
        )

        if let alternative = self.alternativeRoutesDetectionConfig {
            self.routingConfig?.alternativeRoutesDetectionConfig = alternative
            NSLog("[NS][Routing] add alternativeRoutesDetectionConfig")
        }

        if let faster = self.fasterRouteDetectionConfig {
            self.routingConfig?.fasterRouteDetectionConfig = faster
            NSLog("[NS][Routing] add fasterRouteDetectionConfig")
        }

        if let rerouteConfig = self.rerouteConfig {
            let resolvedRerouteConfig: RerouteConfig = rerouteConfig
            self.routingConfig?.rerouteConfig = resolvedRerouteConfig
            NSLog("[NS][Routing] add rerouteConfig")
        }

        if let value = initialManeuverAvoidanceRadius {
            self.routingConfig?.initialManeuverAvoidanceRadius = value
            NSLog(
                "[NS][Routing] add initialManeuverAvoidanceRadius = %.2f",
                value
            )
        }

        if let value = routeRefreshPeriod {
            self.routingConfig?.routeRefreshPeriod = value
            NSLog(
                "[NS][Routing] add routeRefreshPeriod = %.2f",
                value
            )
        }

        if let resolverRouting = self.routingProviderSource {
            let resolvedSource: RoutingProviderSource = resolverRouting
            self.routingConfig?.routingProviderSource = resolvedSource
            NSLog(
                "[NS][Routing] add routingProviderSource = %@",
                String(describing: resolvedSource)
            )
        }

        if let resolverPrefersOnline = self.prefersOnlineRoute {
            self.routingConfig?.prefersOnlineRoute = resolverPrefersOnline
            NSLog(
                "[NS][Routing] add prefersOnlineRoute = %@",
                resolverPrefersOnline ? "true" : "false"
            )
        }

        if let resolverIgnoring = self.ignoreExpirationTimeInRefresh {
            self.routingConfig?.ignoreExpirationTimeInRefresh = resolverIgnoring
            NSLog(
                "[NS][Routing] add ignoreExpirationTimeInRefresh = %@",
                resolverIgnoring ? "true" : "false"
            )
        }

        NSLog("[NS][Routing] setRoutingConfig() completed successfully")
    }
    
    var telemtryData: TelemetryAppMetadata?
    var logLevel:MapboxCommon.LoggingLevel = .warning
    var locationSource:LocationSource = .live
    var copilotEnabled:Bool?
    var unitOfMeasurement:UnitOfMeasurement = .auto
    var localeMapbox:Locale = .current
    var disableBackgroundTrackingLocation:Bool?
    var utilizeSensorData:Bool?
    var navigatorPredictionInterval:Double?
    var historyRecordingConfig:HistoryRecordingConfig?
    var predictiveCacheConfig:PredictiveCacheConfig?
    var electronicHorizonConfig:ElectronicHorizonConfig?
    var liveIncidentsConfig:IncidentsConfig?
    var multilegAdvancing:CoreConfig.MultilegAdvanceMode?
    var tilesVersion:String?
    var tilestoreConfig:TileStoreConfiguration = .default
    var ttsConfig:TTSConfig = .default

    
    public var mapboxNavigationProvider: MapboxNavigationProvider!

    private func buildNavigationProvider() {
        NSLog("🧱 Building MapboxNavigationProvider")
        print("locationSource: ",self.locationSource)

        // 1️⃣ Asegurar routingConfig
        if routingConfig == nil {
            setRoutingConfig()
        }

        let resolvedRoutingConfig = routingConfig
            ?? RoutingConfig(datasetProfileIdentifier: datasetProfileIdentifier)
        
        self.mapboxNavigationProvider = MapboxNavigationProvider(
            coreConfig: .init(
                credentials: NavigationCoreApiConfiguration(
                    accessToken: accessToken
                ),
                routingConfig: resolvedRoutingConfig,
                telemetryAppMetadata: telemtryData,
                logLevel: logLevel,
                locationSource: locationSource,
                copilotEnabled: copilotEnabled ?? false,
                unitOfMeasurement: unitOfMeasurement,
                locale: localeMapbox,
                disableBackgroundTrackingLocation: disableBackgroundTrackingLocation ?? false,
                utilizeSensorData: utilizeSensorData ?? true,
                navigatorPredictionInterval: navigatorPredictionInterval,
                congestionConfig: .default,
                historyRecordingConfig: historyRecordingConfig,
                predictiveCacheConfig: predictiveCacheConfig,
                electronicHorizonConfig: electronicHorizonConfig,
                liveIncidentsConfig: liveIncidentsConfig,
                multilegAdvancing: multilegAdvancing ?? .automatically,
                tilesVersion: tilesVersion ?? .init(),
                tilestoreConfig: tilestoreConfig,
                ttsConfig: ttsConfig
            )
        )

        NSLog("✅ MapboxNavigationProvider creado correctamente")
    }
    
    private var mapboxNavigation: MapboxNavigation {
        guard let provider = mapboxNavigationProvider else {
            fatalError("MapboxNavigationProvider no inicializado")
        }
        return provider.mapboxNavigation
    }


    private var navigationMapView: NavigationMapView! {
        didSet {
            if oldValue != nil { oldValue.removeFromSuperview() }
            navigationMapView.translatesAutoresizingMaskIntoConstraints = false
            view.insertSubview(navigationMapView, at: 0)
            
            NSLayoutConstraint.activate([
                navigationMapView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
                navigationMapView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
                navigationMapView.topAnchor.constraint(equalTo: view.topAnchor),
                navigationMapView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            ])
        }
    }

    private var navigationRoutes: NavigationRoutes? {
        didSet {
            showCurrentRoute()
            // Si el modo es navegación y ya tenemos rutas, iniciamos automáticamente
            if initialMode == .navigation, let _ = navigationRoutes {
                startActiveNavigation()
            }
        }
    }

    private var actionButton: UIButton!
    // MARK: - VARIABLES PARA LA NAVEGACION
    private var waypoints: [Waypoint] = []
    private var allowTurnByTurn:Bool = true
    private var distanceUnit:LengthFormatter.Unit?
    private var directionPriority:DirectionsPriority?
    private var arriveBy:String?
    private var depArriveBy:String?
    private var distanceMeasure:MeasurementSystem?
    private var includeAlternativeRoutes:Bool = false
    private var includesExitRoundaboutManeuver:Bool?
    private var includesSpokenInstructions:Bool = true
    private var includesSteps:Bool = true
    private var includesTollPrices:Bool?
    private var includesVisualInstructions:Bool = true
    private var maximunHeigth:Measurement<UnitLength>?
    private var maximunWidth:Measurement<UnitLength>?
    private var maximunWeight:Measurement<UnitMass>?
    private var refreshingEnabled:Bool = false
    private var mapStyle:String?
    
    // MARK: - Inicializador Actualizado
    
    /// - Parameters:
    ///   - mode: Define si inicia en conducción libre o navegación directa.
    init(
        accessToken: String,
        mode: NavigationMode = .freeDrive,
        rawWaypoints:[Waypoint],
        allowTurnByTurn:Bool?,
        distanceUnit:LengthFormatter.Unit?,
        directionPriority:DirectionsPriority?,
        arriveBy:String?,
        depArriveBy:String?,
        distanceMeasure:MeasurementSystem?,
        includeAlternativeRoutes:Bool?,
        includesExitRoundaboutManeuver:Bool?,
        includesSpokenInstructions:Bool?,
        includesSteps:Bool?,
        includesTollPrices:Bool?,
        includesVisualInstructions:Bool?,
        maximunHeigth:Measurement<UnitLength>?,
        maximunWidth:Measurement<UnitLength>?,
        maximunWeight:Measurement<UnitMass>?,
        refreshingEnabled:Bool?,
        mapStyle:String?
        
        
    ) {
      
        self.accessToken = accessToken
        
        self.initialMode = mode
        self.waypoints = rawWaypoints
        
        if let allowTurnByTurn = allowTurnByTurn {
            self.allowTurnByTurn = allowTurnByTurn
        	NSLog("✅ allowTurnByTurn assigned: %@", allowTurnByTurn.description)
        } else {
        	NSLog("⚠️ allowTurnByTurn is nil, keeping default value")
        }
        
        if let distanceUnit = distanceUnit {
            self.distanceUnit = distanceUnit
            NSLog("✅ distanceUnit assigned: %ld", distanceUnit.rawValue)
        } else {
            NSLog("⚠️ distanceUnit is nil, keeping default value")
        }
        
        if let directionPriority = directionPriority {
            self.directionPriority = directionPriority
            NSLog("✅ directionPriority assigned: %ld", directionPriority.rawValue)
        } else {
            NSLog("⚠️ directionPriority is nil, keeping default value")
        }
        
        if let arriveBy = arriveBy {
            self.arriveBy = arriveBy
            NSLog("✅ arriveBy assigned: %@", arriveBy)
        } else {
        	NSLog("⚠️ arriveBy is nil, keeping default value")
        }
        
        if let depArriveBy = depArriveBy {
            self.depArriveBy = depArriveBy
            NSLog("✅ depArriveBy assigned: %@", depArriveBy)
        } else {
            NSLog("⚠️ depArriveBy is nil, keeping default value")
        }
        
        if let distanceMeasure = distanceMeasure {
            self.distanceMeasure = distanceMeasure
            NSLog("✅ distanceMeasure assigned: %@", "\(distanceMeasure)")
        } else {
            NSLog("⚠️ distanceMeasure is nil, keeping default value")
        }
        
        if let includeAlternativeRoutes = includeAlternativeRoutes {
            self.includeAlternativeRoutes = includeAlternativeRoutes
            NSLog("✅ includeAlternativeRoutes assigned: %@", includeAlternativeRoutes ? "true" : "false")
        } else {
            NSLog("⚠️ includeAlternativeRoutes is nil, keeping default value")
        }
        
        if let value = includesExitRoundaboutManeuver {
            self.includesExitRoundaboutManeuver = value
            NSLog(
                "✅ includesExitRoundaboutManeuver assigned: %@",
                value ? "true" : "false"
            )
        } else {
            NSLog("⚠️ includesExitRoundaboutManeuver is nil, keeping default value")
        }
        
        if let value = includesSpokenInstructions {
            self.includesSpokenInstructions = value
            NSLog(
                "✅ includesSpokenInstructions assigned: %@",
                value ? "true" : "false"
            )
        } else {
            NSLog("⚠️ includesSpokenInstructions is nil, keeping default value")
        }
        
        if let value = includesSteps {
            self.includesSteps = value
            NSLog(
                "✅ includesSteps assigned: %@",
                value ? "true" : "false"
            )
        }else{
            NSLog("⚠️ includesSteps is nil, keeping default value")
        }
        
        if let value = includesTollPrices {
            self.includesTollPrices = value
            NSLog(
                "✅ includesTollPrices assigned: %@",
                value ? "true" : "false"
            )
        } else {
            NSLog("⚠️ includesTollPrices is nil, keeping default value")
        }
        
        if let value = includesVisualInstructions {
            self.includesVisualInstructions = value
            NSLog(
                "✅ includesVisualInstructions assigned: %@",
                value ? "true" : "false"
            )
        }else {
            NSLog("⚠️ includesVisualInstructions is nil, keeping default value")
        }
        
        
        if let maximunHeigth = maximunHeigth {
            self.maximunHeigth = maximunHeigth
        }

        if let maximunWidth = maximunWidth {
            self.maximunWidth = maximunWidth
        }

        if let maximunWeight = maximunWeight {
            self.maximunWeight = maximunWeight
        }

        if let refreshingEnabled = refreshingEnabled {
            self.refreshingEnabled = refreshingEnabled
        }

        if let mapStyle = mapStyle {
            self.mapStyle = mapStyle
        }
        
        
        super.init(nibName: nil, bundle: nil)
        MapboxOptions.accessToken = accessToken
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    // MARK: - Ciclo de Vida

    override func viewDidLoad() {
        super.viewDidLoad()

        LocalizationManager.customLocalizationBundle = .main
        locationManager.requestWhenInUseAuthorization()
        setRoutingConfig()
        buildNavigationProvider()
        setupNavigationMapView()
        setupActionButton()

        // Siempre iniciamos sesión de viaje
        mapboxNavigation.tripSession().startFreeDrive()
        
        // Si hay waypoints, calculamos la ruta independientemente del modo
        // (En Free Drive se verá la línea en el mapa, en Navigation se lanzará la guía)
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.0) { [weak self] in
            self?.calculateRouteFromCurrentLocation()
        }
    }

    private func setupNavigationMapView() {
        navigationMapView = .init(
            location: mapboxNavigation.navigation()
                .locationMatching.map(\.enhancedLocation)
                .eraseToAnyPublisher(),
            routeProgress: mapboxNavigation.navigation()
                .routeProgress.map(\.?.routeProgress)
                .eraseToAnyPublisher(),
            predictiveCacheManager: mapboxNavigationProvider.predictiveCacheManager
        )
        
        navigationMapView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        navigationMapView.delegate = self
        navigationMapView.puckType = .puck3D(.navigationDefault)
        view.addSubview(navigationMapView)
    }

    private func setupActionButton() {
        actionButton = UIButton(type: .system)
        actionButton.setTitle("Iniciar Navegación", for: .normal)
        actionButton.translatesAutoresizingMaskIntoConstraints = false
        actionButton.backgroundColor = .systemBlue
        actionButton.setTitleColor(.white, for: .normal)
        actionButton.layer.cornerRadius = 8
        actionButton.isHidden = true // Solo se muestra en modo FreeDrive cuando hay ruta lista
        actionButton.addTarget(self, action: #selector(tappedButton), for: .touchUpInside)
        
        view.addSubview(actionButton)
        NSLayoutConstraint.activate([
            actionButton.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor, constant: -20),
            actionButton.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            actionButton.widthAnchor.constraint(equalToConstant: 200),
            actionButton.heightAnchor.constraint(equalToConstant: 50)
        ])
    }
    
    // MARK: - Lógica de Navegación

    private func calculateRouteFromCurrentLocation() {
        guard !waypoints.isEmpty else {
            NSLog("⚠️ No hay waypoints definidos desde NativeScript")
            return
        }
        
      internalDelegate?.onRouteRequestStarted?()
      
        let navigationRouteOptions = NavigationRouteOptions(
            waypoints:waypoints
        )
      
      if let distanceUnit = distanceUnit {
        navigationRouteOptions.distanceUnit = distanceUnit
      }
      
      if let directionPriority = directionPriority {
        navigationRouteOptions.alleyPriority = directionPriority
      }
      
      if let arriveBy = arriveBy {
        let formatter = DateFormatter()
        // Ajusta el formato al de tu String, por ejemplo:
        formatter.dateFormat = "yyyy-MM-dd'T'HH:mm"

        // Si tu String está en hora local:
        formatter.timeZone = .current

        if let arriveByDate = formatter.date(from: arriveBy) {
            navigationRouteOptions.arriveBy = arriveByDate
        } else {
            // manejar error de parseo
          NSLog("arriveBy mal format")
        }
        
      }
      
      if let depArriveBy = depArriveBy {
        let formatter = DateFormatter()
        // Ajusta el formato al de tu String, por ejemplo:
        formatter.dateFormat = "yyyy-MM-dd'T'HH:mm"

        // Si tu String está en hora local:
        formatter.timeZone = .current

        if let depArriveByDate = formatter.date(from: depArriveBy) {
            navigationRouteOptions.departAt = depArriveByDate
        } else {
            // manejar error de parseo
          NSLog("departAt mal format")
        }
      }
      
      if let distanceMeasure = distanceMeasure {
        navigationRouteOptions.distanceMeasurementSystem = distanceMeasure
      }
      
      navigationRouteOptions.includesAlternativeRoutes = self.includeAlternativeRoutes
      navigationRouteOptions.includesExitRoundaboutManeuver = includeAlternativeRoutes
      navigationRouteOptions.includesSpokenInstructions = includesSpokenInstructions
      navigationRouteOptions.includesSteps = includesSteps
      navigationRouteOptions.includesTollPrices = includesTollPrices ?? false
      navigationRouteOptions.includesVisualInstructions = includesVisualInstructions
      
      if let maximunHeigth = maximunHeigth {
        navigationRouteOptions.maximumHeight = maximunHeigth
      }

      if let maximunWidth = maximunWidth {
        navigationRouteOptions.maximumWidth = maximunWidth
      }

      if let maximunWeight = maximunWeight {
        navigationRouteOptions.maximumWeight = maximunWeight
      }
      
      navigationRouteOptions.refreshingEnabled = refreshingEnabled
      
      
      if let mapStyle = mapStyle {
        navigationMapView.mapView.mapboxMap.styleURI = StyleURI(rawValue: mapStyle)
      }
      

        let task = mapboxNavigation.routingProvider().calculateRoutes(options: navigationRouteOptions)

        Task { [weak self] in
            switch await task.result {
            case .failure(let error):
                NSLog("Error: \(error)")
              self!.internalDelegate?.onRouteFailed?(errorMessage: error.localizedDescription as NSString)
            case .success(let response):
                self?.navigationRoutes = response
              self!.internalDelegate?.onRoutesReady?(
                                      routes: [
                                          "count": response.allRoutes().count,
                                          "primaryDistance": response.allRoutes().first?.distance ?? 0,
                                          "primaryDuration": response.allRoutes().first?.expectedTravelTime ?? 0
                                      ]
                                  )
                // Solo mostramos el botón si el modo inicial era Free Drive
                if self?.initialMode == .freeDrive {
                    self?.actionButton.isHidden = false
                }
            }
        }
    }

    private func startActiveNavigation() {
        guard let navigationRoutes = navigationRoutes else { return }
        NSLog("se llamo automaticamente: startActiveNavigation")
      
      let styleURI: StyleURI?
      if let mapStyleString = mapStyle {
          styleURI = StyleURI(rawValue: mapStyleString)
      } else {
          styleURI = nil // Si mapStyle es nil, styleURI también lo será
      }

      // 2. Instanciar los estilos
      // Si styleURI es nil, se cargarán los mapas estándar de Mapbox
      let dayStyle = CustomDayStyle(styleURI: styleURI)
      let nightStyle = CustomNightStyle(styleURI: styleURI)

        let navigationOptions = NavigationOptions(
            mapboxNavigation: mapboxNavigation,
            voiceController: mapboxNavigationProvider.routeVoiceController,
            eventsManager: mapboxNavigationProvider.eventsManager(),
            styles:[dayStyle, nightStyle], predictiveCacheManager: mapboxNavigationProvider.predictiveCacheManager,
            navigationMapView: navigationMapView
        )

        let navigationViewController = NavigationViewController(
            navigationRoutes: navigationRoutes,
            navigationOptions: navigationOptions
        )
        
        navigationViewController.delegate = self
        navigationViewController.modalPresentationStyle = .fullScreen
        actionButton.isHidden = true
        present(navigationViewController, animated: true)
    }

    @objc func tappedButton() {
        startActiveNavigation()
    }

    private func showCurrentRoute() {
        guard let navigationRoutes else { return }
        navigationMapView.showcase(navigationRoutes)
    }
}

class CustomDayStyle: StandardDayStyle {
    convenience init(styleURI: StyleURI?) {
        self.init()
        // Solo asignamos si styleURI no es nil
        if let uri = styleURI {
            mapStyleURL = URL(string: uri.rawValue)!
            previewMapStyleURL = URL(string: uri.rawValue)!
        }
        styleType = .day
    }
}

class CustomNightStyle: StandardNightStyle {
    convenience init(styleURI: StyleURI?) {
        self.init()
        if let uri = styleURI {
            mapStyleURL = URL(string: uri.rawValue)!
            previewMapStyleURL = URL(string: uri.rawValue)!
        }
        styleType = .night
    }
}

// MARK: - NavigationMapViewDelegate
extension CustomNavigationViewController: NavigationMapViewDelegate {
    func navigationMapView(_ navigationMapView: NavigationMapView, didSelect alternativeRoute: AlternativeRoute) {
      
        Task {
            guard let selectedRoutes = await self.navigationRoutes?.selecting(alternativeRoute: alternativeRoute) else { return }
            self.navigationRoutes = selectedRoutes
        }
    }
  
  public func navigationViewController(
          _ navigationViewController: NavigationViewController,
          didUpdate progress: RouteProgress,
          with location: CLLocation,
          rawLocation: CLLocation
      ) {
          let state: NSString

          if progress.currentLegProgress.userHasArrivedAtWaypoint {
              state = "complete"
          } else {
              state = "tracking"
          }
        
        internalDelegate?.onRouteProgress?(
                    state: state,
                    distanceRemainingMeters: NSNumber(value: progress.distanceRemaining),
                    durationRemainingSeconds: NSNumber(value: progress.durationRemaining),
                    estimatedTimeToArrivalEpochSeconds: NSNumber(
                        value: Date().timeIntervalSince1970 + progress.durationRemaining
                    )
                )
        
        internalDelegate?.onLocationChanged?(
                    latitude: NSNumber(value: location.coordinate.latitude),
                    longitude: NSNumber(value: location.coordinate.longitude),
                    bearing: NSNumber(value: location.course),
                    speed: NSNumber(value: location.speed)
                )
          
      }
      
      public func navigationViewController(
          _ navigationViewController: NavigationViewController,
          didArriveAt waypoint: Waypoint
      ) -> Bool {
        
        internalDelegate?.onRouteProgress?(
                    state: "complete",
                    distanceRemainingMeters: 0,
                    durationRemainingSeconds: 0,
                    estimatedTimeToArrivalEpochSeconds: NSNumber(value: Date().timeIntervalSince1970)
                )
          return true
      }
}

// MARK: - NavigationViewControllerDelegate
extension CustomNavigationViewController: NavigationViewControllerDelegate {
    
    // Este método se llama cuando el usuario da al botón "X" o termina la navegación
    func navigationViewControllerDidDismiss(
        _ navigationViewController: NavigationViewController,
        byCanceling canceled: Bool
    ) {
      
        navigationViewController.dismiss(animated: true) { [weak self] in
            guard let self = self else { return }
            
            // 1. ELIMINAR LA RUTA VISUALMENTE
            self.navigationMapView.removeRoutes()

            // 1. Mostrar de nuevo el botón para poder volver a navegar si se desea
            self.actionButton.isHidden = false
            
            // 2. Reasignar el delegado al controlador actual (Free Drive mode)
            self.navigationMapView.delegate = self
            
            // 3. Recuperar la instancia del mapa usada en navegación
            self.navigationMapView = navigationViewController.navigationMapView
            
            // 4. Reiniciar Free Drive (Navegación libre sin instrucciones)
            self.mapboxNavigation.tripSession().startFreeDrive()
          
          
            // 5. Volver a pintar la ruta en el mapa
          internalDelegate?.onRouteCanceled?()
          internalDelegate?.navigationDidCancel()
          
          
            
        }
    }
}