/// <reference path="../../references.d.ts" />

interface CustomNavigationInternalDelegate {
  navigationDidCancel(): void;

  onLocationChangedWithLatitudeLongitudeBearingSpeed?(latitude: number, longitude: number, bearing: number, speed: number): void;

  onRouteCanceled?(): void;

  onRouteFailedWithErrorMessage?(errorMessage: string): void;

  onRouteProgressWithStateDistanceRemainingMetersDurationRemainingSecondsEstimatedTimeToArrivalEpochSeconds?(state: string, distanceRemainingMeters: number, durationRemainingSeconds: number, estimatedTimeToArrivalEpochSeconds: number): void;

  onRouteRequestStarted?(): void;

  onRoutesReadyWithRoutes?(routes: NSDictionary<string, any>): void;
}
declare var CustomNavigationInternalDelegate: {
  prototype: CustomNavigationInternalDelegate;
};

declare class CustomNavigationViewController extends UIViewController {
  static alloc(): CustomNavigationViewController; // inherited from NSObject

  static new(): CustomNavigationViewController; // inherited from NSObject

  tappedButton(): void;
}

declare class CustomNavigationWrapper extends NSObject implements CustomNavigationInternalDelegate {
  static alloc(): CustomNavigationWrapper; // inherited from NSObject

  static new(): CustomNavigationWrapper; // inherited from NSObject

  allowTurnByTurn: boolean;

  arriveBy: string;

  callback: NSNavigationCallback;

  copilotEnabled: boolean;

  depBy: string;

  disableBackgroundTrackingLocation: boolean;

  distanceUnit: NSLengthFormatterUnit;

  includeAlternativeRoutes: boolean;

  includesExitRoundaboutManeuver: boolean;

  includesSpokenInstructions: boolean;

  includesSteps: boolean;

  includesTollPrices: boolean;

  includesVisualInstructions: boolean;

  mapStyle: string;

  navigatorPredictionInterval: number;

  refreshingEnabled: boolean;

  tilesVersion: string;

  utilizeSensorData: boolean;

  createNavigationViewControllerWithAccessTokenMode(accessToken: string, mode: NavigationMode): UIViewController;

  dismissNavigationWithAnimated(animated: boolean): void;

  maximunHeigthWithValueUnit(value: number, unit: NSUnitLength): void;

  maximunWeightWithValueUnit(value: number, unit: NSUnitMass): void;

  maximunWidthWithValueUnit(value: number, unit: NSUnitLength): void;

  navigationDidCancel(): void;

  onLocationChangedWithLatitudeLongitudeBearingSpeed(latitude: number, longitude: number, bearing: number, speed: number): void;

  onRouteCanceled(): void;

  onRouteFailedWithErrorMessage(errorMessage: string): void;

  onRouteProgressWithStateDistanceRemainingMetersDurationRemainingSecondsEstimatedTimeToArrivalEpochSeconds(state: string, distanceRemainingMeters: number, durationRemainingSeconds: number, estimatedTimeToArrivalEpochSeconds: number): void;

  onRouteRequestStarted(): void;

  onRoutesReadyWithRoutes(routes: NSDictionary<string, any>): void;

  setDatasetProfileIdentifierWithDatasetProfileIdentifier(datasetProfileIdentifier: number): void;

  setDirectionPriorityWithPriority(priority: number): void;

  setDistanceMeasureWithDistanceMeasure(distanceMeasure: number): void;

  setElectronicHorizonConfigWithLengthExpansionBranchLengthMinTime(length: number, expansion: number, branchLength: number, minTime: number): void;

  setFasterRouteDetectionConfigWithProactiveReroutingIntervalMinimumRouteDurationRemainingMinimumManeuverOffset(proactiveReroutingInterval: number, minimumRouteDurationRemaining: number, minimumManeuverOffset: number): void;

  setHistoryRecordingConfigWithUrl(url: string): void;

  setIgnoreExpirationTimeInRefreshWithIgnoreExpirationTimeInRefresh(ignoreExpirationTimeInRefresh: number): void;

  setInitialManeuverAvoidanceRadiusWithInitialManeuverAvoidanceRadius(initialManeuverAvoidanceRadius: number): void;

  setLiveIncidentsConfigWithGraphApiURL(graph: string, apiURL: string): void;

  setLocaleWithLocale(locale: NSLocale): void;

  setLocationSourceWithLocationSourceLatLng(locationSource: number, lat: number, lng: number): void;

  setLogLevelWithLogLevel(logLevel: number): void;

  setMultilegAdvancingWithValue(value: number): void;

  setPredictiveCacheConfigWithCurrenLocationRadiusRouteBufferRadiusDestinationLocationRadiusMaximunRequestZoomMinZoomMax(currenLocationRadius: number, routeBufferRadius: number, destinationLocationRadius: number, maximunRequest: number, zoomMin: number, zoomMax: number): void;

  setPrefersOnlineRouteWithPrefersOnlineRoute(prefersOnlineRoute: number): void;

  setRerouteConfigWithDetectsReroutesRerouteStrategyForMatchRoute(detectsReroutes: number, rerouteStrategyForMatchRoute: number): void;

  setRouteRefreshPeriodWithRouteRefreshPeriod(routeRefreshPeriod: number): void;

  setRoutingProviderSourceWithRoutingProviderSource(routingProviderSource: number): void;

  setTelemetryDataWithNameVersionUserIdSessionId(name: string, version: string, userId: string, sessionId: string): void;

  setTilestoreConfigWithUrl(url: string): void;

  setTtsConfigWithMutedVolumeLocale(muted: number, volume: number, locale: NSLocale): void;

  setUnitOfMeasurementWithUnitOfMeasurement(unitOfMeasurement: number): void;

  setWaypoints(rawWaypoints: NSArray<any> | any[]): void;

  setalternativeRoutesDetectionConfigWithAcceptionPolicyRefreshIntervalSeconds(acceptionPolicy: number, refreshIntervalSeconds: number): void;

  startNavigation(): void;
}

interface NSNavigationCallback {
  onLocationChangedLongitudeBearingSpeed?(latitude: number, longitude: number, bearing: number, speed: number): void;

  onRouteCanceled?(): void;

  onRouteFailed?(errorMessage: string): void;

  onRouteProgressDistanceRemainingMetersDurationRemainingSecondsEstimatedTimeToArrivalEpochSeconds?(state: string, distanceRemainingMeters: number, durationRemainingSeconds: number, estimatedTimeToArrivalEpochSeconds: number): void;

  onRouteRequestStarted?(): void;

  onRoutesReady?(routes: NSDictionary<any, any>): void;
}

declare var NSNavigationCallback: {
  prototype: NSNavigationCallback;
};

declare const enum NavigationMode {
  FreeDrive = 0,

  Navigation = 1,
}
