import { getCurrentPage } from '@nativescript/core';
import { IWayPoint } from '.';
import { GetSetProperty, MapboxNavigationCommon, NavigationProfile } from './common';
import { EMapboxNavigationEvents } from './events';

export class MapboxNavigation extends MapboxNavigationCommon {
  @GetSetProperty()
  accessToken: string;
  @GetSetProperty()
  waypoints: Array<IWayPoint>;
  @GetSetProperty()
  lang: string;
  @GetSetProperty()
  simulate: boolean;
  @GetSetProperty()
  enableSensors: boolean;
  @GetSetProperty()
  steps: boolean;
  @GetSetProperty()
  profile: NavigationProfile;
  @GetSetProperty()
  alternatives: boolean;
  @GetSetProperty()
  voiceInstructions: boolean;
  @GetSetProperty()
  enableRefresh: boolean;
  @GetSetProperty()
  bannerInstructions: boolean;

  private ref = new WeakRef(this);
  private wrapper: CustomNavigationWrapper = null;
  private callback: NavigationCallbackImpl = null;

  onLoaded(): void {
    super.onLoaded();
    if (!this.accessToken) {
      console.error('MapboxNavigation: accessToken is required');
      return;
    }

    if (!this.waypoints || this.waypoints.length < 2) {
      console.error('MapboxNavigation: at least 2 waypoints are required');
      return;
    }

    if (this.wrapper == null) {
      this.wrapper = CustomNavigationWrapper.alloc().init();
      this.callback = NavigationCallbackImpl.initWithOwner(this) as any;
      this.wrapper.callback = this.callback;
      // this.wrapper.setLocationSourceWithLocationSourceLatLng(1, -0.180653, -78.467834);
      this.wrapper.setLocationSourceWithLocationSourceLatLng(1, this.waypoints[0].latitude, this.waypoints[0].longitude);
      const locale = NSLocale.alloc().initWithLocaleIdentifier(this.lang);
      this.wrapper.setLocaleWithLocale(locale);
      this.wrapper.utilizeSensorData = this.enableSensors;
      // const waypoints = [
      //     {
      //         latitude: -0.24401420745434482,
      //         longitude: -78.51473766049385,
      //         name: 'Quito',
      //         separatesLegs: true,
      //     },
      //     {
      //         latitude: -0.2540810355466938,
      //         longitude: -78.51306172975468,
      //         name: 'Guayaquil',
      //         separatesLegs: false,
      //     },
      // ];

      // IMPORTANTE: convertir a NSArray
      const nsArray = NSArray.arrayWithArray(this.waypoints);
      const nativeProfile = this.resolveNavigationProfile(this.profile);
      this.wrapper.setDatasetProfileIdentifierWithDatasetProfileIdentifier(nativeProfile);
      // Llamada al plugin
      this.wrapper.setWaypoints(nsArray);
      this.wrapper.includeAlternativeRoutes = this.alternatives;
      this.wrapper.includesSpokenInstructions = this.voiceInstructions;
      this.wrapper.includesSteps = this.steps;
      this.wrapper.includesVisualInstructions = this.bannerInstructions;
      this.wrapper.refreshingEnabled = this.enableRefresh;
      const vc = this.wrapper.createNavigationViewControllerWithAccessTokenMode(this.accessToken, 1);

      vc.modalPresentationStyle = UIModalPresentationStyle.FullScreen;

      UIApplication.sharedApplication.keyWindow.rootViewController.presentViewControllerAnimatedCompletion(vc, true, () => {
        console.log('present: ');
      });
    }
  }

  onRouteRequestStartedFromNative() {
    this.ref?.get()?.sendEvent(EMapboxNavigationEvents.OnRouteRequestStarted);
  }

  onRoutesReadyFromNative(routes: any) {
    this.ref?.get()?.sendEvent(EMapboxNavigationEvents.OnRoutesReady, routes);
  }

  onRouteFailedFromNative(errorMessage: string) {
    this.ref?.get()?.sendEvent(EMapboxNavigationEvents.OnRouteFailed, errorMessage);
  }

  onRouteCanceledFromNative() {
    this.ref?.get()?.sendEvent(EMapboxNavigationEvents.OnRouteCanceled);
    getCurrentPage().frame.goBack();
  }

  onLocationChangedFromNative(lat: number, lng: number, bearing: number, speed: number) {
    this.ref?.get()?.sendEvent(EMapboxNavigationEvents.OnLocationChanged, { latitude: lat, longitude: lng, bearing, speed });
  }

  onRouteProgressFromNative(state: string, distanceRemainingMeters: number, durationRemainingSeconds: number, estimatedTimeToArrivalEpochSeconds: number) {
    this.ref?.get()?.sendEvent(EMapboxNavigationEvents.OnRouteProgress, { state, distanceRemainingMeters, durationRemainingSeconds, estimatedTimeToArrivalEpochSeconds });
  }

  disposeNativeView(): void {
    this.wrapper.dealloc();
    this.wrapper = null;
    this.callback.dealloc();
    super.disposeNativeView();
  }
}

@NativeClass()
class NavigationCallbackImpl extends NSObject implements NSNavigationCallback {
  static ObjCProtocols = [NSNavigationCallback];
  private owner: WeakRef<MapboxNavigation>;

  static initWithOwner(owner: MapboxNavigation): NavigationCallbackImpl {
    const cb = NavigationCallbackImpl.alloc().init() as NavigationCallbackImpl;
    cb.owner = new WeakRef(owner);
    return cb;
  }

  onRouteRequestStarted() {
    const owner = this.owner?.get();
    if (!owner) return;

    owner.onRouteRequestStartedFromNative();
  }

  onRoutesReady(routes: NSDictionary<string, any>) {
    const jsRoutes: any = {};

    routes.enumerateKeysAndObjectsUsingBlock((key, value, stop) => {
      jsRoutes[key.toString()] = value;
    });

    const owner = this.owner?.get();
    if (!owner) return;
    owner.onRoutesReadyFromNative(jsRoutes);
  }

  onRouteFailed(errorMessage: string) {
    const owner = this.owner?.get();
    if (!owner) return;
    owner.onRouteFailedFromNative(errorMessage);
  }

  onRouteCanceled() {
    const owner = this.owner?.get();
    if (!owner) return;
    owner.onRouteCanceledFromNative();
  }

  onLocationChanged(latitude: number, longitude: number, bearing: number, speed: number) {
    const owner = this.owner?.get();
    if (!owner) return;
    owner.onLocationChangedFromNative(latitude, longitude, bearing, speed);
  }

  onRouteProgressDistanceRemainingMetersDurationRemainingSecondsEstimatedTimeToArrivalEpochSeconds(state: string, distanceRemainingMeters: number, durationRemainingSeconds: number, estimatedTimeToArrivalEpochSeconds: number) {
    const owner = this.owner?.get();
    if (!owner) return;
    owner.onRouteProgressFromNative(state, distanceRemainingMeters, durationRemainingSeconds, estimatedTimeToArrivalEpochSeconds);
  }

  onLocationChangedLongitudeBearingSpeed(latitude: number, longitude: number, bearing: number, speed: number): void {
    const owner = this.owner?.get();
    if (!owner) return;
    owner.onLocationChangedFromNative(latitude, longitude, bearing, speed);
  }

  dealloc(): void {
    console.log('destruido ok');
  }
}
