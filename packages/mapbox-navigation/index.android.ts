import { AndroidApplication, Application, ApplicationEventData, Color, Device, getCurrentPage, Page, Screen, Utils } from '@nativescript/core';
import { GetSetProperty, MapboxNavigationCommon, NavigationProfile } from './common';
import { IWayPoint } from '.';
import { EMapboxNavigationEvents } from './events';

declare var wuilmerj24;

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

  createNativeView(): Object {
    const mapboxNavViewForFrameworks = new wuilmerj24.plugins.ns.MapboxNavViewForFrameworks(this._context);

    // MUY IMPORTANTE: Vincular el ciclo de vida aquí
    const lifecycle = this._context.getLifecycle();
    lifecycle.addObserver(mapboxNavViewForFrameworks);
    mapboxNavViewForFrameworks.setLayoutParams(new androidx.constraintlayout.widget.ConstraintLayout.LayoutParams(androidx.constraintlayout.widget.ConstraintLayout.LayoutParams.MATCH_PARENT, androidx.constraintlayout.widget.ConstraintLayout.LayoutParams.MATCH_PARENT));
    (mapboxNavViewForFrameworks as androidx.constraintlayout.widget.ConstraintLayout).setBackgroundColor(android.graphics.Color.RED);
    return mapboxNavViewForFrameworks;
  }

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

    const waypoints: java.util.List<any> = new java.util.ArrayList<any>();
    for (let i: number = 0; i < this.waypoints.length; i++) {
      let name: string = null;
      let bearing: java.lang.Double = null;
      let bearingTolerance: number = null;
      let color: java.lang.Integer = null;
      let fillColor: java.lang.Integer = null;
      let strokeColor: java.lang.Integer = null;
      let radius: java.lang.Double = null;
      if (this.waypoints[i].name) {
        name = this.waypoints[i].name;
        console.log(`Waypoint ${i} name: ${this.waypoints[i].name}`);
      }
      if (this.waypoints[i].bearing) {
        console.log(`Waypoint ${i} bearing: ${this.waypoints[i].bearing}`);
        bearing = new java.lang.Double(this.waypoints[i].bearing);
      }
      if (this.waypoints[i].bearingTolerance) {
        bearingTolerance = parseFloat(this.waypoints[i].bearingTolerance.toString());

        console.log(`Waypoint ${i} bearingTolerance: ${bearingTolerance}`);
      }
      if (this.waypoints[i].color) {
        color = new java.lang.Integer(new Color(this.waypoints[i].color).android);
        console.log(`Waypoint ${i} color: ${color}`);
      }
      if (this.waypoints[i].fillColor) {
        console.log(`Waypoint ${i} fillColor: ${this.waypoints[i].fillColor}`);
        fillColor = new java.lang.Integer(new Color(this.waypoints[i].fillColor).android);
      }
      if (this.waypoints[i].strokeColor) {
        strokeColor = new java.lang.Integer(new Color(this.waypoints[i].strokeColor).android);
        console.log(`Waypoint ${i} strokeColor: ${this.waypoints[i].strokeColor}`);
      }
      if (this.waypoints[i].radius) {
        console.log(`Waypoint ${i} radius: ${this.waypoints[i].radius}`);
        radius = new java.lang.Double(this.waypoints[i].radius);
      }
      waypoints.add(new wuilmerj24.plugins.ns.MapboxNavViewForFrameworks.WaypointForMapboxLib(this.waypoints[i].latitude, this.waypoints[i].longitude, name, bearing, bearingTolerance, color, fillColor, strokeColor, radius));
    }

    for (let i: number = 0; i < waypoints.size(); i++) {
      console.log(`wayipoints ${waypoints.get(i).toString()}`);
    }

    // waypoints.add(new wuilmerj24.plugins.ns.MapboxNavViewForFrameworks.WaypointForMapboxLib(-0.2551846106933691, -78.5083841691333, 'Origen GPS', null, 45.0, new java.lang.Integer(android.graphics.Color.RED), new java.lang.Integer(android.graphics.Color.RED), new java.lang.Integer(android.graphics.Color.BLACK), 10.0));

    // waypoints.add(new wuilmerj24.plugins.ns.MapboxNavViewForFrameworks.WaypointForMapboxLib(-0.239092, -78.51241, 'Av. Occidental', new java.lang.Double(40.0), 45.0, new java.lang.Integer(android.graphics.Color.RED), new java.lang.Integer(android.graphics.Color.RED), new java.lang.Integer(android.graphics.Color.BLACK), 10.0));

    this.nativeView.setSimulate(this.simulate);

    this.nativeView.setLenguaje(this.lang, '');
    this.nativeView.setWaypoints(waypoints);
    this.nativeView.setNavOptionsEnableSensors(this.enableSensors);
    this.nativeView.setSteps(this.steps);
    const nativeProfile = this.resolveNavigationProfile(this.profile);
    console.log('Native profile:', nativeProfile);
    this.nativeView.setProfile(nativeProfile);
    this.nativeView.setAlternatives(this.alternatives);
    this.nativeView.setVoiceInstructions(java.lang.Boolean.valueOf(this.voiceInstructions));
    this.nativeView.setEnableRefresh(java.lang.Boolean.valueOf(this.enableRefresh));
    this.nativeView.setBannerInstructions(java.lang.Boolean.valueOf(this.bannerInstructions));

    this.nativeView.setRouteCallback(
      new wuilmerj24.plugins.ns.NavRouteCallback({
        onRouteRequestStarted: () => {
          this.nativeView.showLoading();
          console.log('Solicitando ruta...');
          this.ref?.get()?.sendEvent(EMapboxNavigationEvents.OnRouteRequestStarted);
        },

        onRoutesReady: (routes: java.util.List<any>) => {
          this.nativeView.hideLoading();
          console.log('Ruta lista, total:', routes);

          this.ref?.get()?.sendEvent(EMapboxNavigationEvents.OnRoutesReady);
        },

        onRouteFailed: (errorMessage: string) => {
          console.error('Error ruta:', errorMessage);
          this.nativeView.hideLoading();
          this.ref?.get()?.sendEvent(EMapboxNavigationEvents.OnRouteFailed, { error: new Error(errorMessage) });
          getCurrentPage().frame.goBack();
        },

        onRouteCanceled: () => {
          console.error('Ruta cancelada:');
          this.nativeView.hideLoading();
          this.ref?.get()?.sendEvent(EMapboxNavigationEvents.OnRouteCanceled);
          getCurrentPage().frame.goBack();
        },
      })
    );

    this.nativeView.setLocationCallback(
      new wuilmerj24.plugins.ns.NavLocationCallback({
        onLocationChanged: (latitude: number, longitude: number, bearing: number | null, speed: number | null) => {
          console.log(`Location lat=${latitude}, lng=${longitude}, speed=${speed}`);
          this.ref?.get()?.sendEvent(EMapboxNavigationEvents.OnLocationChanged, { latitude, longitude, bearing, speed });
        },
      })
    );

    this.nativeView.setRouteProgressCallback(
      new wuilmerj24.plugins.ns.NavRouteProgressCallback({
        onRouteProgress: (state: any, distanceRemainingMeters: number, durationRemainingSeconds: number, estimatedTimeToArrivalEpochSeconds: number) => {
          console.log('Estado ruta:', state.toString());
          console.log('Distancia restante:', distanceRemainingMeters);
          console.log('Tiempo restante:', durationRemainingSeconds);
          console.log('ETA (epoch):', estimatedTimeToArrivalEpochSeconds);
          this.ref?.get()?.sendEvent(EMapboxNavigationEvents.OnRouteProgress, { state, distanceRemainingMeters, durationRemainingSeconds, estimatedTimeToArrivalEpochSeconds });
        },
      })
    );
    this.nativeView.inicializar(this.accessToken);
    Utils.setTimeout(() => {
      this.nativeView.findRoute(null);
    }, 1000);
  }
}
