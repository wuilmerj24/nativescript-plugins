import { TimeRange } from './index.ios';

@NativeClass()
export class PanHandler extends NSObject {
  private _owner: WeakRef<TimeRange>;

  public static initWithOwner(owner: WeakRef<TimeRange>): PanHandler {
    const handler = <PanHandler>PanHandler.new();
    handler._owner = owner;
    return handler;
  }

  @ObjCMethod('handlePan:')
  handlePan(gesture: UIPanGestureRecognizer): void {
    const owner = this._owner.get();
    if (!owner || !gesture) return;

    const point = gesture.locationInView(owner.iosView);
    const center = {
      x: owner.iosView.bounds.size.width / 2,
      y: owner.iosView.bounds.size.height / 2,
    };
    const angle = Math.atan2(point.y - center.y, point.x - center.x);

    const distToStart = owner['distance'](point, owner.startThumbCenter);
    const distToEnd = owner['distance'](point, owner.endThumbCenter);

    if (gesture.state === UIGestureRecognizerState.Began) {
      if (distToStart < 30) {
        owner['draggingStartThumb'] = true;
      } else if (distToEnd < 30) {
        owner['draggingEndThumb'] = true;
      } else {
        // Detectar si el punto está cerca del arco
        const angleDiff = Math.abs(owner.startAngle - owner.endAngle);
        const radius = owner.radius - owner._circleWidth / 2;
        const arcPoint = {
          x: center.x + Math.cos(angle) * radius,
          y: center.y + Math.sin(angle) * radius,
        };
        const distToArc = owner['distance'](point, arcPoint);
        if (distToArc < owner.thumbRadius * 2) {
          owner['draggingWholeRange'] = true;
          owner['lastDragAngle'] = angle;
        }
      }
    } else if (gesture.state === UIGestureRecognizerState.Changed) {
      if (owner['draggingStartThumb']) {
        owner.startAngle = angle;
        owner.iosView.setNeedsDisplay();
        owner['notifyChange']();
      } else if (owner['draggingEndThumb']) {
        owner.endAngle = angle;
        owner.iosView.setNeedsDisplay();
        owner['notifyChange']();
      } else if (owner['draggingWholeRange'] && owner['lastDragAngle'] != null) {
        const delta = angle - owner['lastDragAngle'];
        const twoPi = Math.PI * 2;

        owner.startAngle = (((owner.startAngle + delta) % twoPi) + twoPi) % twoPi;
        owner.endAngle = (((owner.endAngle + delta) % twoPi) + twoPi) % twoPi;

        owner['lastDragAngle'] = angle;
        owner.iosView.setNeedsDisplay();
        owner['notifyChange']();
      }
    } else {
      owner['draggingStartThumb'] = false;
      owner['draggingEndThumb'] = false;
      owner['draggingWholeRange'] = false;
      owner['lastDragAngle'] = null;
    }
  }

  public static ObjCExposedMethods = {
    handlePan: { returns: interop.types.void, params: [UIPanGestureRecognizer] },
  };
}
