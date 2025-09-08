import { Application, ApplicationEventData } from '@nativescript/core';
import { MapboxNavigationCommon } from './common';

declare var com;
export class MapboxNavigation extends MapboxNavigationCommon {
  createNativeView(): Object {
    this.nativeView = new android.widget.FrameLayout(this._context);
    (this.nativeView as android.widget.FrameLayout).setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT));
    (this.nativeView as android.widget.FrameLayout).setBackgroundColor(android.graphics.Color.RED);
    if (!com.mapbox.navigation.core.lifecycle.MapboxNavigationApp.isSetup()) {
      com.mapbox.navigation.core.lifecycle.MapboxNavigationApp.setup(new com.mapbox.navigation.base.options.NavigationOptions.Builder(this._context).build());
    }

    return this.nativeView;
  }

  onLoaded(): void {
    super.onLoaded();
    Application.on(
      Application.resumeEvent,
      (args: ApplicationEventData) => {
        com.mapbox.navigation.core.lifecycle.MapboxNavigationApp.attach(args.android);
      },
      this
    );
    Application.on(
      Application.suspendEvent,
      (args: ApplicationEventData) => {
        com.mapbox.navigation.core.lifecycle.MapboxNavigationApp.attach(args.android);
      },
      this
    );
  }
}
