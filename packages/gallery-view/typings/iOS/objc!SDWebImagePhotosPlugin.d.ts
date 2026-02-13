declare class SDImagePhotosLoader extends NSObject implements SDImageLoader {
  static alloc(): SDImagePhotosLoader; // inherited from NSObject

  static new(): SDImagePhotosLoader; // inherited from NSObject

  fetchOptions: PHFetchOptions;

  imageRequestOptions: PHImageRequestOptions;

  requestImageAssetOnly: boolean;

  static readonly sharedLoader: SDImagePhotosLoader;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  /**
   * @since 8.0
   * @deprecated 100000
   */
  canRequestImageForURL(url: NSURL): boolean;

  canRequestImageForURLOptionsContext(url: NSURL, options: SDWebImageOptions, context: NSDictionary<string, any>): boolean;

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  requestImageWithURLOptionsContextProgressCompleted(url: NSURL, options: SDWebImageOptions, context: NSDictionary<string, any>, progressBlock: (p1: number, p2: number, p3: NSURL) => void, completedBlock: (p1: UIImage, p2: NSData, p3: NSError, p4: boolean) => void): SDWebImageOperation;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  /**
   * @since 8.0
   * @deprecated 100000
   */
  shouldBlockFailedURLWithURLError(url: NSURL, error: NSError): boolean;

  shouldBlockFailedURLWithURLErrorOptionsContext(url: NSURL, error: NSError, options: SDWebImageOptions, context: NSDictionary<string, any>): boolean;
}

declare var SDWebImageContextPhotosFetchOptions: string;

declare var SDWebImageContextPhotosImageRequestOptions: string;

declare var SDWebImageContextPhotosRequestImageData: string;

declare const enum SDWebImagePhotosError {
  NotAuthorized = 10001,

  NotImageAsset = 10002,

  InvalidLocalIdentifier = 10003,
}

declare var SDWebImagePhotosErrorDomain: string;

declare var SDWebImagePhotosPixelSize: CGSize;

declare var SDWebImagePhotosPluginVersionNumber: number;

declare var SDWebImagePhotosPluginVersionString: interop.Reference<number>;

declare var SDWebImagePhotosPointSize: CGSize;

declare var SDWebImagePhotosProgressExpectedSize: number;

declare var SDWebImagePhotosScheme: string;
