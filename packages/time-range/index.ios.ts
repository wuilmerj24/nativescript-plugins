import { Application, Color, iOSApplication, opacityProperty, Utils } from '@nativescript/core';
import { circleColorProperty, circleWidthProperty, endGradiantColorProperty, endImageProperty, insideRangeColorProperty, middleGradiantColorProperty, numberColorProperty, numberSizeProperty, rangerColorProperty, rangerSizeProperty, setTimeRangeProperty, showGradiantColorProperty, showInsideRangeProperty, showLabelProperty, showTicksProperty, startGradiantColorProperty, startImageProperty, thumbEndColorProperty, thumbStartColorProperty, TimeRangeCommon } from './common';
import { CircularSliderView } from './class/circularsliderview.ios';
import { PanHandler } from './class/handler.ios';

export class TimeRange extends TimeRangeCommon {
  public radius = 120;
  public thumbRadius = 16;
  public tickCount = 12;
  public startAngle = -Math.PI / 2;
  public endAngle = Math.PI / 2;

  public startThumbCenter: CGPoint;
  public endThumbCenter: CGPoint;

  private draggingStartThumb = false;
  private draggingEndThumb = false;

  public _circleColor: UIColor = UIColor.grayColor;
  public _circleWidth: number = 10;

  public _numberColor: UIColor = UIColor.blueColor;
  public _numberSize: number = 20;

  public _rangerSize: number = 20;
  public _rangerColor: UIColor = UIColor.blackColor;

  private _startThumbColor: UIColor = UIColor.redColor;
  private _endThumbColor: UIColor = UIColor.blueColor;

  public _insideRangeColor: UIColor = UIColor.greenColor;

  public startThumbImage: UIImage = null;
  public endThumbImage: UIImage = null;

  public highlightTicksInRange: boolean = true;

  public _showGradiantColor: boolean = true;
  public _startGradiantColor: UIColor = UIColor.blackColor;
  public _middleGradiantColor: UIColor = UIColor.redColor;
  public _endGradiantColor: UIColor = UIColor.greenColor;

  private _thumbColor = UIColor.systemBlueColor;
  private _thumbImage: UIImage = null;
  private draggingWholeRange = false;
  private lastDragAngle: number = null;
  public showTicks: boolean = true;
  public showNumbers: boolean = true;
  public opacityBase: number = 0.5;
  public iosView: CircularSliderView;
  createNativeView(): Object {
    const view = CircularSliderView.initWithOwner(new WeakRef(this));
    view.frame = CGRectMake(0, 0, 500, 500);
    view.contentMode = UIViewContentMode.Redraw;

    Utils.setTimeout(() => {
      view.setNeedsDisplay();
      view.layoutIfNeeded?.();
    }, 10);
    view.backgroundColor = UIColor.clearColor;
    this.iosView = view;
    (this.iosView || this.nativeView)?.setNeedsDisplay();

    return view;
  }

  initNativeView(): void {
    super.initNativeView();
    Utils.setTimeout(() => {
      try {
        (this.nativeView as UIView).userInteractionEnabled = true;
        const handler = PanHandler.initWithOwner(new WeakRef(this));

        const panGesture = UIPanGestureRecognizer.alloc().initWithTargetAction(handler, 'handlePan:');
        (this as any)._panHandler = handler;
        (this.nativeView as UIView).addGestureRecognizer(panGesture);
      } catch (error) {
        console.log(error);
      }
    }, 10);
  }

  [circleColorProperty.setNative](value: UIColor) {
    this._circleColor = value;
  }

  [circleWidthProperty.setNative](value: number) {
    this._circleWidth = value;
  }

  [numberColorProperty.setNative](value: UIColor) {
    this._numberColor = value;
  }

  [numberSizeProperty.setNative](value: number) {
    this._numberSize = value;
  }

  [rangerSizeProperty.setNative](value: number) {
    this._rangerSize = value;
  }

  [rangerColorProperty.setNative](value: UIColor) {
    this._rangerColor = value;
  }

  [thumbStartColorProperty.setNative](value: UIColor) {
    this._startThumbColor = value;
  }

  [thumbEndColorProperty.setNative](value: UIColor) {
    this._endThumbColor = value;
  }

  [insideRangeColorProperty.setNative](value: UIColor) {
    this._insideRangeColor = value;
  }

  [startImageProperty.setNative](value: string) {
    const path = NSBundle.mainBundle.pathForResourceOfType(value, 'png');
    if (path) {
      this.startThumbImage = UIImage.imageWithContentsOfFile(path);
      console.log('Imagen cargada en thumb END:', path);
    } else {
      console.log('Imagen fallback en thumb END:', this.startThumbImage ? 'cargada' : 'no encontrada');
    }
  }

  [endImageProperty.setNative](value: string) {
    console.log('Cargando imagen del thumb END con valor:', value);
    const path = NSBundle.mainBundle.pathForResourceOfType(value, 'png');
    if (path) {
      this.endThumbImage = UIImage.imageWithContentsOfFile(path);
      console.log('Imagen cargada en thumb END:', path);
    } else {
      console.log('Imagen fallback en thumb END:', this.endThumbImage ? 'cargada' : 'no encontrada');
    }
  }

  [showInsideRangeProperty.setNative](value: boolean) {
    this.highlightTicksInRange = value;
  }

  [setTimeRangeProperty.setNative](value: string) {
    try {
      const [startHour, startMin, endHour, endMin] = value.split(',').map(Number);

      const totalMinutes = 12 * 60;
      const startTotal = (startHour % 12) * 60 + startMin;
      const endTotal = (endHour % 12) * 60 + endMin;

      const startFraction = startTotal / totalMinutes;
      const endFraction = endTotal / totalMinutes;

      // startAngle y endAngle relativos al ángulo base (-π/2)
      this.startAngle = -Math.PI / 2 + startFraction * 2 * Math.PI;
      this.endAngle = -Math.PI / 2 + endFraction * 2 * Math.PI;

      this.iosView?.setNeedsDisplay?.();
    } catch (error) {
      console.log('Error seteando timeRange:', error);
    }
  }

  [showGradiantColorProperty.setNative](value: boolean) {
    this._showGradiantColor = value;
  }

  [startGradiantColorProperty.setNative](value: UIColor) {
    this._startGradiantColor = value;
  }

  [middleGradiantColorProperty.setNative](value: UIColor) {
    this._middleGradiantColor = value;
  }

  [endGradiantColorProperty.setNative](value: UIColor) {
    this._endGradiantColor = value;
  }

  [showTicksProperty.setNative](value: boolean) {
    this.showTicks = value;
    (this.nativeView as CircularSliderView).invalidateIntrinsicContentSize();
  }

  [showLabelProperty.setNative](value: boolean) {
    this.showNumbers = value;
  }

  [opacityProperty.setNative](value: number) {
    this.opacityBase = parseFloat(value.toString());
  }

  set thumbColor(color: UIColor) {
    this._thumbColor = color;
    this.nativeView.setNeedsDisplay();
  }

  set thumbImage(image: UIImage) {
    this._thumbImage = image;
    this.iosView.setNeedsDisplay();
  }

  private distance(p1: CGPoint, p2: CGPoint): number {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  }

  private notifyChange(): void {
    const time = this.getSelectedTime();
    const ref = new WeakRef(this);

    // Calcular duración total en minutos
    const normalize = (angle: number) => ((angle - -Math.PI / 2 + Math.PI * 2) % (Math.PI * 2)) / (Math.PI * 2);

    const startFraction = normalize(this.startAngle);
    const endFraction = normalize(this.endAngle);
    const totalMinutes = 12 * 60;

    let selectedMinutes = 0;
    if (endFraction >= startFraction) {
      selectedMinutes = Math.round((endFraction - startFraction) * totalMinutes);
    } else {
      selectedMinutes = Math.round((1 - startFraction + endFraction) * totalMinutes);
    }

    const rangeHours = Math.floor(selectedMinutes / 60);
    const rangeMinutes = selectedMinutes % 60;

    // Enviar evento
    this.notify({
      eventName: 'valueChanged',
      object: this,
      data: time,
    });

    const positions = this.getNormalizedThumbPositions();

    ref?.get()?.sendEvent(TimeRange.dragEvent, {
      start: { h: time.startHour.toString(), m: time.startMinute.toString() },
      end: { h: time.endHour.toString(), m: time.endMinute.toString() },
      rangeTime: { h: rangeHours.toString(), m: rangeMinutes.toString() },
      thumbsPositions: positions,
      event: TimeRange.dragEvent,
    });
  }

  drawThumb(center: CGPoint, ctx: any, isStart: boolean): void {
    try {
      const thumbRect = CGRectMake(center.x - this.thumbRadius, center.y - this.thumbRadius, this.thumbRadius * 2, this.thumbRadius * 2);

      const image = isStart ? this.startThumbImage : this.endThumbImage;
      const color = isStart ? this._startThumbColor : this._endThumbColor;

      if (image) {
        // Crear una imagen redondeada redimensionada manualmente
        const thumbSize = CGSizeMake(this.thumbRadius * 2, this.thumbRadius * 2);
        UIGraphicsBeginImageContextWithOptions(thumbSize, false, 0.0);
        const ctx = UIGraphicsGetCurrentContext();

        const path = UIBezierPath.bezierPathWithOvalInRect(CGRectMake(0, 0, thumbSize.width, thumbSize.height));
        path.addClip();
        image.drawInRect(CGRectMake(0, 0, thumbSize.width, thumbSize.height));

        const clippedImage = UIGraphicsGetImageFromCurrentImageContext();
        UIGraphicsEndImageContext();

        // Ahora dibuja la imagen ya redondeada en la posición correcta
        clippedImage.drawInRect(thumbRect);
      } else {
        const thumbPath = UIBezierPath.bezierPathWithOvalInRect(thumbRect);
        color.setFill();
        thumbPath.fill();
      }
    } catch (error) {
      console.log('Error dibujando thumb:', error);
    }
  }

  getSelectedTime(): { startHour: number; startMinute: number; endHour: number; endMinute: number } {
    const normalize = (angle: number) => ((angle - -Math.PI / 2 + Math.PI * 2) % (Math.PI * 2)) / (Math.PI * 2); // 12:00 = top

    const startFraction = normalize(this.startAngle);
    const endFraction = normalize(this.endAngle);

    const totalMinutes = 12 * 60; // 720 minutos = 12 horas

    const startTotalMinutes = Math.round(startFraction * totalMinutes);
    const endTotalMinutes = Math.round(endFraction * totalMinutes);

    const startHour = Math.floor(startTotalMinutes / 60);
    const startMinute = startTotalMinutes % 60;

    const endHour = Math.floor(endTotalMinutes / 60);
    const endMinute = endTotalMinutes % 60;

    return {
      startHour: startHour === 0 ? 12 : startHour,
      startMinute,
      endHour: endHour === 0 ? 12 : endHour,
      endMinute,
    };
  }

  getNormalizedThumbPositions(): {
    start: { x: number; y: number };
    end: { x: number; y: number };
  } {
    const viewSize = this.iosView?.frame?.size;
    if (!viewSize) {
      return { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } };
    }

    const centerX = viewSize.width / 2;
    const centerY = viewSize.height / 2;

    return {
      start: {
        x: (this.startThumbCenter?.x ?? centerX) - centerX,
        y: (this.startThumbCenter?.y ?? centerY) - centerY,
      },
      end: {
        x: (this.endThumbCenter?.x ?? centerX) - centerX,
        y: (this.endThumbCenter?.y ?? centerY) - centerY,
      },
    };
  }
}
