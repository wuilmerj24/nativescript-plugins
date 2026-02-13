@NativeClass()
export class TapHandler extends NSObject {
  private _callback: Function;

  public static initWithCallback(callback: Function): TapHandler {
    const handler = TapHandler.new() as TapHandler;
    handler._callback = callback;
    return handler;
  }

  // Exponemos el método a Objective-C
  public handleTap(sender: UITapGestureRecognizer): void {
    if (this._callback) {
      this._callback(sender);
    }
  }

  public static ObjCExposedMethods = {
    handleTap: { returns: interop.types.void, params: [interop.types.id] },
  };
}
