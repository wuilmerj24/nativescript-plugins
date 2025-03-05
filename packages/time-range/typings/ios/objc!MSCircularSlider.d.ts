declare class MSCircularSlider extends UIControl {
  static alloc(): MSCircularSlider; // inherited from NSObject

  static appearance(): MSCircularSlider; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): MSCircularSlider; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MSCircularSlider; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): MSCircularSlider; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MSCircularSlider; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): MSCircularSlider; // inherited from UIAppearance

  static new(): MSCircularSlider; // inherited from NSObject

  _commaSeparatedLabels: string;

  _currentValue: number;

  _filledColor: UIColor;

  _handleColor: UIColor;

  _handleEnlargementPoints: number;

  _handleHighlightable: boolean;

  _handleImage: UIImage;

  _handleRotatable: boolean;

  _handleType: number;

  _labelColor: UIColor;

  _labelFont: UIFont;

  _labelOffset: number;

  _lineWidth: number;

  _markerColor: UIColor;

  _markerCount: number;

  _markerImage: UIImage;

  _maximumAngle: number;

  _maximumRevolutions: number;

  _maximumValue: number;

  _minimumValue: number;

  _rotationAngle: number;

  _sliderPadding: number;

  _snapToLabels: boolean;

  _snapToMarkers: boolean;

  _unfilledColor: UIColor;
}

declare class MSCircularSliderHandle extends CALayer {
  static alloc(): MSCircularSliderHandle; // inherited from NSObject

  static layer(): MSCircularSliderHandle; // inherited from CALayer

  static new(): MSCircularSliderHandle; // inherited from NSObject

  angle: number;

  currentValue: number;
}

declare var MSCircularSliderVersionNumber: number;

declare var MSCircularSliderVersionString: interop.Reference<number>;

declare class MSDoubleHandleCircularSlider extends MSCircularSlider {
  static alloc(): MSDoubleHandleCircularSlider; // inherited from NSObject

  static appearance(): MSDoubleHandleCircularSlider; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): MSDoubleHandleCircularSlider; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MSDoubleHandleCircularSlider; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): MSDoubleHandleCircularSlider; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MSDoubleHandleCircularSlider; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): MSDoubleHandleCircularSlider; // inherited from UIAppearance

  static new(): MSDoubleHandleCircularSlider; // inherited from NSObject

  _minimumHandlesDistance: number;

  _secondCurrentValue: number;

  _secondHandleColor: UIColor;

  _secondHandleEnlargementPoints: number;

  _secondHandleHighlightable: boolean;

  _secondHandleImage: UIImage;

  _secondHandleRotatable: boolean;

  _secondHandleType: number;
}

declare class MSGradientCircularSlider extends MSCircularSlider {
  static alloc(): MSGradientCircularSlider; // inherited from NSObject

  static appearance(): MSGradientCircularSlider; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): MSGradientCircularSlider; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MSGradientCircularSlider; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): MSGradientCircularSlider; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MSGradientCircularSlider; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): MSGradientCircularSlider; // inherited from UIAppearance

  static new(): MSGradientCircularSlider; // inherited from NSObject

  _firstGradientColor: UIColor;

  _secondGradientColor: UIColor;

  _thirdGradientColor: UIColor;
}
