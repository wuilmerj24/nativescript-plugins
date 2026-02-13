declare class NSCSwiftOrientation extends NSObject {
  static alloc(): NSCSwiftOrientation; // inherited from NSObject

  static new(): NSCSwiftOrientation; // inherited from NSObject

  changeRotationWithRotation(rotation: UIInterfaceOrientationMask): void;
}
