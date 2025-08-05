import { Application, Color, iOSApplication, opacityProperty, Utils } from '@nativescript/core';
import { circleColorProperty, circleWidthProperty, endGradiantColorProperty, endImageProperty, insideRangeColorProperty, middleGradiantColorProperty, numberColorProperty, numberSizeProperty, rangerColorProperty, rangerSizeProperty, setTimeRangeProperty, showGradiantColorProperty, showInsideRangeProperty, showLabelProperty, showTicksProperty, startGradiantColorProperty, startImageProperty, thumbEndColorProperty, thumbStartColorProperty, TimeRangeCommon } from './common';


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

    public _circleColor:UIColor=UIColor.grayColor;
    public _circleWidth:number=10;

    public _numberColor:UIColor = UIColor.blueColor;
    public _numberSize:number = 20;

    public _rangerSize:number=20;
    public _rangerColor: UIColor = UIColor.blackColor;

    private _startThumbColor: UIColor = UIColor.redColor;
    private _endThumbColor: UIColor = UIColor.blueColor;

    public _insideRangeColor:UIColor=UIColor.greenColor;
    
    public startThumbImage: UIImage = null;
    public endThumbImage: UIImage = null;


    public highlightTicksInRange: boolean = true;

    public _showGradiantColor:boolean=true;
    public _startGradiantColor:UIColor=UIColor.blackColor;
    public _middleGradiantColor:UIColor=UIColor.redColor;
    public _endGradiantColor:UIColor=UIColor.greenColor;

    private _thumbColor = UIColor.systemBlueColor;
    private _thumbImage: UIImage = null;
    private draggingWholeRange = false;
    private lastDragAngle: number = null;
    public showTicks: boolean = true;
    public showNumbers: boolean = true;
    public opacityBase:number=0.5;
    public iosView: CircularSliderView;
    createNativeView(): Object {
        const view = CircularSliderView.initWithOwner(new WeakRef(this));
        view.frame = CGRectMake(0,0,500,500);
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
        Utils.setTimeout(()=>{
            try {
                (this.nativeView as UIView).userInteractionEnabled = true;
                const handler = PanHandler.initWithOwner(new WeakRef(this));
               
                const panGesture = UIPanGestureRecognizer.alloc().initWithTargetAction(
                    handler,
                    'handlePan:'
                );
                (this as any)._panHandler = handler;
                (this.nativeView as UIView).addGestureRecognizer(panGesture);  
            } catch (error) {
                console.log(error)
            }
        },10)
    }
    
    [circleColorProperty.setNative](value:UIColor) {
        this._circleColor = value;
    }
    
    [circleWidthProperty.setNative](value:number) {
        this._circleWidth = value;
    }
    
    [numberColorProperty.setNative](value:UIColor) {
        this._numberColor = value;
    }
    
    [numberSizeProperty.setNative](value:number) {
        this._numberSize = value;
    }
    
    [rangerSizeProperty.setNative](value:number) {
        this._rangerSize = value;
    }
    
    [rangerColorProperty.setNative](value:UIColor) {
        this._rangerColor = value;
    }
    
    [thumbStartColorProperty.setNative](value:UIColor) {
        this._startThumbColor = value;
    }
    
    [thumbEndColorProperty.setNative](value:UIColor) {
        this._endThumbColor = value;
    }
    
    [insideRangeColorProperty.setNative](value:UIColor) {
        this._insideRangeColor = value;
    }
    
    [startImageProperty.setNative](value:string) {
        const path = NSBundle.mainBundle.pathForResourceOfType(value, "png");
        if (path) {
            this.startThumbImage = UIImage.imageWithContentsOfFile(path);
            console.log("Imagen cargada en thumb END:", path);
        } else {
            console.log("Imagen fallback en thumb END:", this.startThumbImage ? "cargada" : "no encontrada");
        }
    }
    
    [endImageProperty.setNative](value: string) {
        console.log("Cargando imagen del thumb END con valor:", value);
        const path = NSBundle.mainBundle.pathForResourceOfType(value, "png");
        if (path) {
            this.endThumbImage = UIImage.imageWithContentsOfFile(path);
            console.log("Imagen cargada en thumb END:", path);
        } else {
            console.log("Imagen fallback en thumb END:", this.endThumbImage ? "cargada" : "no encontrada");
        }
    }

    [showInsideRangeProperty.setNative](value:boolean) {
        this.highlightTicksInRange = value;
    }
    
    [setTimeRangeProperty.setNative](value:string) {
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
            console.log("Error seteando timeRange:", error);
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
    }

    [showLabelProperty.setNative](value: boolean) {
        this.showNumbers = value;
    }

    [opacityProperty.setNative](value: number) {
        this.opacityBase=parseFloat(value.toString());
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
        const normalize = (angle: number) =>
            ((angle - (-Math.PI / 2) + Math.PI * 2) % (Math.PI * 2)) / (Math.PI * 2);

        const startFraction = normalize(this.startAngle);
        const endFraction = normalize(this.endAngle);
        const totalMinutes = 12 * 60;

        let selectedMinutes = 0;
        if (endFraction >= startFraction) {
            selectedMinutes = Math.round((endFraction - startFraction) * totalMinutes);
        } else {
            selectedMinutes = Math.round(((1 - startFraction) + endFraction) * totalMinutes);
        }

        const rangeHours = Math.floor(selectedMinutes / 60);
        const rangeMinutes = selectedMinutes % 60;

        // Enviar evento
        this.notify({
            eventName: 'valueChanged',
            object: this,
            data: time
        });

        const positions = this.getNormalizedThumbPositions();

        ref?.get()?.sendEvent(TimeRange.dragEvent, {
            start: { h: time.startHour.toString(), m: time.startMinute.toString() },
            end: { h: time.endHour.toString(), m: time.endMinute.toString() },
            rangeTime: { h: rangeHours.toString(), m: rangeMinutes.toString() },
            thumbsPositions:positions,
            event: TimeRange.dragEvent
        });
    }


    drawThumb(center: CGPoint, ctx: any, isStart: boolean): void {
        try {
            const thumbRect = CGRectMake(
                center.x - this.thumbRadius,
                center.y - this.thumbRadius,
                this.thumbRadius * 2,
                this.thumbRadius * 2
            );

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
            console.log("Error dibujando thumb:", error);
        }
    }




    getSelectedTime(): { startHour: number, startMinute: number, endHour: number, endMinute: number } {
        const normalize = (angle: number) => ((angle - (-Math.PI / 2) + Math.PI * 2) % (Math.PI * 2)) / (Math.PI * 2); // 12:00 = top

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
            endMinute
        };
    }

    getNormalizedThumbPositions(): {
        start: { x: number, y: number },
        end: { x: number, y: number }
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
                y: (this.startThumbCenter?.y ?? centerY) - centerY
            },
            end: {
                x: (this.endThumbCenter?.x ?? centerX) - centerX,
                y: (this.endThumbCenter?.y ?? centerY) - centerY
            }
        };
    }


}

@NativeClass()
class CircularSliderView extends UIView {
    private owner: WeakRef<TimeRange>;
    static initWithOwner(owner: WeakRef<TimeRange>): CircularSliderView {
        const view = <CircularSliderView>super.new();
        view.owner = owner;
        return view;
    }

    private distance(p1: CGPoint, p2: CGPoint): number {
        return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    }

    drawRect(rect: CGRect): void {
        try {
            const owner = this.owner.get();
            if (!owner) return;

            const ctx = UIGraphicsGetCurrentContext();
            UIGraphicsPushContext(ctx);

            const bounds = this.bounds;
            const center = {
                x: bounds.size.width / 2,
                y: bounds.size.height / 2
            };

            const radius = owner.radius;
            const fullTickCount = 60;

            const trackWidth = owner._circleWidth;
            const arcRadius = radius;

            // Ajustes para espacio visual
            const tickLength = 8;
            const hourTickExtra = 0;

            const marginBetweenTrackAndTicks = owner._circleWidth * 0.6; // Dinámico
            const marginBetweenTicksAndLabels = Math.min(owner._circleWidth * 0.3, 25);


            const tickOuterRadius = arcRadius - trackWidth / 2 - marginBetweenTrackAndTicks;
            const tickInnerRadius = tickOuterRadius - tickLength;
            const hourTickInnerRadius = tickOuterRadius - (tickLength + hourTickExtra);
            const labelRadius = hourTickInnerRadius - marginBetweenTicksAndLabels;

            const trackCenterRadius = arcRadius - trackWidth / 2;

            // Dibuja el track
            owner._circleColor.setStroke();
            CGContextSetAlpha(ctx, owner.opacityBase);
            const track = UIBezierPath.bezierPathWithArcCenterRadiusStartAngleEndAngleClockwise(
                center,
                trackCenterRadius,
                0,
                Math.PI * 2,
                true
            );
            track.lineWidth = trackWidth;
            track.stroke();
            CGContextSetAlpha(ctx, 1);

            
            for (let i = 0; i < fullTickCount; i++) {
                const angle = (Math.PI * 2 * i) / fullTickCount - Math.PI / 2;
                const isHourTick = i % 5 === 0;
                const isAngleInRange = (angle: number): boolean => {
                    const start = owner.startAngle < 0 ? owner.startAngle + Math.PI * 2 : owner.startAngle;
                    const end = owner.endAngle < 0 ? owner.endAngle + Math.PI * 2 : owner.endAngle;
                    const normalized = angle < 0 ? angle + Math.PI * 2 : angle;

                    return start < end
                        ? normalized >= start && normalized <= end
                        : normalized >= start || normalized <= end;
                };
                if (owner.showTicks) {
                    const innerRadius = isHourTick ? hourTickInnerRadius : tickInnerRadius;

                    const inner = {
                        x: center.x + Math.cos(angle) * innerRadius,
                        y: center.y + Math.sin(angle) * innerRadius
                    };
                    const outer = {
                        x: center.x + Math.cos(angle) * tickOuterRadius,
                        y: center.y + Math.sin(angle) * tickOuterRadius
                    };

                    const tickPath = UIBezierPath.bezierPath();
                    tickPath.moveToPoint(inner);
                    tickPath.addLineToPoint(outer);
                    tickPath.lineWidth = isHourTick ? 2.5 : 1;

                    

                    let tickColor = isHourTick ? owner._numberColor : owner._numberColor;
                    if (owner.highlightTicksInRange && isAngleInRange(angle)) {
                        tickColor = owner._insideRangeColor ?? owner._numberColor;
                    }

                    tickColor.setStroke();
                    tickPath.stroke();
                }
                
                if (owner.showNumbers && isHourTick) {
                    const hour = i === 0 ? 12 : i / 5;
                    const label = NSString.stringWithString(hour.toString());
                    const font = UIFont.boldSystemFontOfSize(owner._numberSize);
                    let labelColor = owner._numberColor;
                    
                    if (owner.highlightTicksInRange && isAngleInRange(angle)) {
                        labelColor = owner._insideRangeColor ?? owner._numberColor;
                    }

                    const attributes = NSMutableDictionary.alloc().init();
                    attributes.setObjectForKey(font, NSFontAttributeName);
                    attributes.setObjectForKey(labelColor, NSForegroundColorAttributeName);

                    const size = label.sizeWithAttributes(attributes);
                    const labelPoint = {
                        x: center.x + Math.cos(angle) * labelRadius - size.width / 2,
                        y: center.y + Math.sin(angle) * labelRadius - size.height / 2
                    };

                    label.drawAtPointWithAttributes(labelPoint, attributes);
                }
            }


            const arc = UIBezierPath.bezierPathWithArcCenterRadiusStartAngleEndAngleClockwise(
                center,
                trackCenterRadius,
                owner.startAngle,
                owner.endAngle,
                true
            );

            if (owner._showGradiantColor) {
                CGContextSaveGState(ctx);

                // Configurar puntas redondeadas
                CGContextSetLineCap(ctx, CGLineCap.kCGLineCapRound);
                CGContextSetLineWidth(ctx, owner._rangerSize);

                // Crear máscara del arco
                CGContextAddPath(ctx, arc.CGPath);
                CGContextReplacePathWithStrokedPath(ctx);
                CGContextClip(ctx);

                // Crear gradiente sin locations explícitas
                const gradient = CGGradientCreateWithColors(
                    CGColorSpaceCreateDeviceRGB(),
                    NSArray.arrayWithArray([
                        owner._startGradiantColor.CGColor,
                        owner._middleGradiantColor.CGColor,
                        owner._endGradiantColor.CGColor
                    ]),
                    null // Sin locations específicas
                );

                // Dibujar gradiente
                CGContextDrawLinearGradient(
                    ctx,
                    gradient,
                    CGPointMake(
                        center.x + Math.cos(owner.startAngle) * trackCenterRadius,
                        center.y + Math.sin(owner.startAngle) * trackCenterRadius
                    ),
                    CGPointMake(
                        center.x + Math.cos(owner.endAngle) * trackCenterRadius,
                        center.y + Math.sin(owner.endAngle) * trackCenterRadius
                    ),
                    1 | 2
                );

                CGContextRestoreGState(ctx);
            } else {
                // Versión sin gradiente con puntas redondeadas
                owner._rangerColor.setStroke();
                arc.lineWidth = owner._rangerSize;
                arc.lineCapStyle = CGLineCap.kCGLineCapRound;
                arc.stroke();
            }

            // Coordenadas de los thumbs
            const thumbRadiusAligned = trackCenterRadius;
            owner.startThumbCenter = {
                x: center.x + Math.cos(owner.startAngle) * thumbRadiusAligned,
                y: center.y + Math.sin(owner.startAngle) * thumbRadiusAligned
            };
            owner.endThumbCenter = {
                x: center.x + Math.cos(owner.endAngle) * thumbRadiusAligned,
                y: center.y + Math.sin(owner.endAngle) * thumbRadiusAligned
            };

            owner.drawThumb(owner.startThumbCenter, ctx,true);
            owner.drawThumb(owner.endThumbCenter, ctx,false);

            UIGraphicsPopContext();
        } catch (error) {
            console.log("drawRect error:", error);
        }
    }

    
}

@NativeClass()
class PanHandler extends NSObject {
    private _owner: WeakRef<TimeRange>;

    public static initWithOwner(owner: WeakRef<TimeRange>): PanHandler {
        const handler = <PanHandler>PanHandler.new();
        handler._owner = owner;
        return handler;
    }

    @ObjCMethod('handlePan:')
    handlePan(gesture: UIPanGestureRecognizer):void {
        const owner = this._owner.get();
        if (!owner || !gesture) return;

        const point = gesture.locationInView(owner.iosView);
        const center = {
            x: owner.iosView.bounds.size.width / 2,
            y: owner.iosView.bounds.size.height / 2
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
                    y: center.y + Math.sin(angle) * radius
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
                owner.startAngle += delta;
                owner.endAngle += delta;
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
