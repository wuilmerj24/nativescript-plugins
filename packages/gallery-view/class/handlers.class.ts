@NativeClass()
export class TapHandler extends NSObject {
  private _ownerRef: WeakRef<any>; // Almacena una referencia débil al owner

  // Método de inicialización que acepta un WeakRef
  public static initWithOwner(ownerRef: WeakRef<any>): TapHandler {
    const handler = TapHandler.new() as TapHandler;
    handler._ownerRef = ownerRef;
    return handler;
  }

  // Método que se ejecuta cuando se hace clic en el botón
  @ObjCMethod('openAction')
  public openAction(nativeButton: UIButton, nativeEvent: _UIEvent) {
    // Recuperar el owner desde la referencia débil
    const owner = this._ownerRef?.get();
    if (owner) {
      owner.onHeaderTap();
    } else {
      console.log('Owner ya no está disponible (fue liberado de memoria).');
    }
  }

  @ObjCMethod('openPreview')
  public openPreview(nativeButton: UIButton, nativeEvent: _UIEvent) {
    const owner = this._ownerRef?.get();
    if (owner) {
      owner.openPreview();
    } else {
      console.log('Owner ya no está disponible (fue liberado de memoria).');
    }
  }

  @ObjCMethod('openEdit')
  public openEdit(nativeButton: UIButton, nativeEvent: _UIEvent) {
    console.log('In constructions');
  }

  // Exponer el método `preview` a Objective-C
  public static ObjCExposedMethods = {
    openAction: { returns: interop.types.void, params: [interop.types.id, interop.types.id] },
    openPreview: { returns: interop.types.void, params: [interop.types.id, interop.types.id] },
    openEdit: { returns: interop.types.void, params: [interop.types.id, interop.types.id] },
  };
}

@NativeClass()
export class TapHandlerB extends NSObject {
  private _callback: Function;

  public static initWithCallback(callback: Function): TapHandlerB {
    const handler = TapHandlerB.new() as TapHandlerB;
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
