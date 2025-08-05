import { Color, opacityProperty, Utils } from '@nativescript/core';
import { circleColorProperty, circleWidthProperty, endGradiantColorProperty, endImageProperty, insideRangeColorProperty, middleGradiantColorProperty, numberColorProperty, numberSizeProperty, rangerColorProperty, rangerSizeProperty, setTimeRangeProperty, showGradiantColorProperty, showInsideRangeProperty, showLabelProperty, showTicksProperty, startGradiantColorProperty, startImageProperty, thumbEndColorProperty, thumbStartColorProperty, TimeRangeCommon } from './common';

declare var upinn;

export class TimeRange extends TimeRangeCommon {
    private timeRange:CircularTimeRangePicker;
    private startDrawable;
    private endDrawable;
    createNativeView(): any {
        this.timeRange = new CircularTimeRangePicker(this._context);
        return this.timeRange;
    }

    [circleWidthProperty.setNative](value: number) {
        this.timeRange.setCircleWidth=value;
    }
    
    [circleColorProperty.setNative](value: number) {
        this.timeRange.setCircleColor=value;
    }
    
    [numberColorProperty.setNative](value: number) {
        this.timeRange.setNumberColor=value;
    }
    
    [numberSizeProperty.setNative](value: number) {
        this.timeRange.setNumberSize=value;
    }
    
    [rangerSizeProperty.setNative](value: number) {
        this.timeRange.setRangerSize=value;
    }
    
    [rangerColorProperty.setNative](value: number) {
        this.timeRange.setRangerColor=value;
    }
    
    [thumbStartColorProperty.setNative](value: number) {
        this.timeRange.setThumbStartColor=value;
    }
    
    [thumbEndColorProperty.setNative](value: number) {
        this.timeRange.setThumbEndColor=value;
    }
    
    [insideRangeColorProperty.setNative](value: number) {
        this.timeRange.setInsideRangeColor=value;
    }
    
    [startImageProperty.setNative](value: number) {
        const startDrawable = this._context.getDrawable(this._context.getResources().getIdentifier(value, "drawable", this._context.getPackageName()));
        this.startDrawable=startDrawable
    }
    
    [endImageProperty.setNative](value: number) {
        const endDrawable = this._context.getDrawable(this._context.getResources().getIdentifier(value, "drawable", this._context.getPackageName()));
        this.endDrawable = endDrawable
    }

    [showInsideRangeProperty.setNative](value: boolean) {
        this.timeRange.setShowInsideRange=value;
    }

    [setTimeRangeProperty.setNative](value: string) {
        let data:string[]=value.split(",");
        this.timeRange.setTimeRange(parseInt(data[0]), parseInt(data[1]), parseInt(data[2]), parseInt(data[3]));
    }
    
    [startGradiantColorProperty.setNative](value: number) {
        this.timeRange.setStartColorGradiant=value;
    }
    
    [middleGradiantColorProperty.setNative](value: number) {
        this.timeRange.setMiddleColorGradiant=value;
    }

    [endGradiantColorProperty.setNative](value: number) {
        this.timeRange.setEndColorGradiant=value;
    }
    
    [showGradiantColorProperty.setNative](value: boolean) {
        this.timeRange.setShowGradiant=value
    }
    
    [showTicksProperty.setNative](value: boolean) {
        this.timeRange.setShowTicks=value
    }

    [showLabelProperty.setNative](value: boolean) {
        this.timeRange.setShowLabel=value
    }
    
    [opacityProperty.setNative](value:number) {
        this.timeRange.setOpacityBase=parseInt(value.toString());
    }

    initNativeView(): void {
        super.initNativeView();
        const ref = new WeakRef(this);
        Utils.setTimeout(()=>{
            this.timeRange.setThumbDrawables(this.startDrawable, this.endDrawable)
        },50);
        this.timeRange.setOnTimeChangedListener({
            onTimeChanged:(startHour, startMinute, endHour, endMinute, totalHours, totalMinutes)=> {
                const thumbPositions = this.timeRange.getNormalizedThumbPositions();
                const start: android.graphics.PointF = thumbPositions["start"];
                const end: android.graphics.PointF = thumbPositions["end"]
                ref?.get()?.sendEvent(
                    TimeRange.dragEvent,
                    {
                        start: {
                            h: startHour.toString(),
                            m: startMinute.toString()
                        },
                        end: {
                            h: endHour.toString(),
                            m: endMinute.toString()
                        },
                        rangeTime: {
                            h: totalHours.toString(),
                            m: totalMinutes.toString()
                        },
                        thumbsPositions: {
                            start: {
                                x: start.x,
                                y: start.y,
                            },
                            end: {
                                x: end.x,
                                y: end.y,
                            },
                        },
                        event: TimeRange.dragEvent
                    }
                );

            },
        })
    }
}

interface OnTimeChangedListener {
    onTimeChanged(
        startHour: number,
        startMinute: number,
        endHour: number,
        endMinute: number,
        totalHours: number,
        totalMinutes: number
    ): void;
}

@NativeClass()
class CircularTimeRangePicker extends android.view.View {
    private circlePaint: android.graphics.Paint;
    private thumbStart: android.graphics.Paint;
    private thumbEnd: android.graphics.Paint;
    private rangePaint: android.graphics.Paint;
    private textPaint: android.graphics.Paint;
    private gradientPaint: android.graphics.Paint;

    private radius:number;
    private centerX:number;
    private centerY:number;

    private startAngle:number=0;
    private endAngle:number=0;
    private thumbRadius:number=30;

    private isDraggingStart:boolean=false;
    private isDraggingEnd:boolean=false;

    private startThumbDrawable: android.graphics.drawable.Drawable=null;
    private endThumbDrawable: android.graphics.drawable.Drawable=null;

    private isDraggingRange:boolean=false;

    private lastTouchAngle:number=-1;

    private circleWidth:number=10;
    private circleColor:number=android.graphics.Color.RED;
    private numberColor:number=android.graphics.Color.RED;

    private numberSize:number=20;

    private rangerSize:number=100;
    private rangerColor:number=android.graphics.Color.BLACK;
    private insideRangeColor:number=android.graphics.Color.CYAN;
    
    private showInsideRange:boolean=true;
    private startColorGradiant:number=android.graphics.Color.RED;
    private middleColorGradiant:number=android.graphics.Color.GREEN;
    private endColorGradiant:number=android.graphics.Color.BLUE;

    private showGradiant:boolean=true;
    private showTicks:boolean=true;
    private showLabel:boolean=true;
    private opacityBase:number=60;

    public get getCircleWidth():number{
        return this.circleWidth;
    }

    public set setCircleWidth(w:number){
        this.circleWidth=w;
        this.invalidate();
    }

    public get getCircleColor():number{
        return this.circleColor
    }

    public set setCircleColor(color:number){
        this.circleColor =  color;
        this.invalidate();
    }

    public get getNumberColor():number{
        return this.numberColor
    }

    public set setNumberColor(color:number){
        this.numberColor=color;
        this.invalidate();
    }

    public get getNumberSize():number{
        return this.numberSize;
    }

    public set setNumberSize(size:number){
        this.numberSize = size;
        this.invalidate();
    }

    public get getRangerSize():number{
        return this.rangerSize;
    }

    public set setRangerSize(size:number){
        this.rangerSize = size;
        this.invalidate();
    }

    public get getRangerColor():number{
        return this.rangerColor;
    }

    public set setRangerColor(color:number){
        this.rangerColor = color;
        this.invalidate();
    }

    public set setThumbStartColor(color:number){
        if(this.thumbStart!=null){
            this.thumbStart.setColor(color)
            this.invalidate()
        }
    }

    public set setThumbStartColorHex(colorHex:string){
        try {
            const color:number = new Color(colorHex).android;
            this.setThumbStartColor=color
        } catch (error) {
            console.log(error);            
        }
    }

    public set setThumbEndColor(color:number){
        if (this.thumbEnd!=null){
            this.thumbEnd.setColor(color);
            this.invalidate();
        }
    }

    public set setThumbEndColorHex(colorHex:string){
        try {
            const color: number = new Color(colorHex).android;
            this.setThumbEndColor = color
        } catch (error) {
            console.log(error);
        }
    }

    public get getInsideRangeColor():number{
        return this.insideRangeColor;
    }

    public set setInsideRangeColor(color:number){
        this.insideRangeColor = color;
        this.invalidate();
    }

    public get isShowInsideRange():boolean{
        return this.showInsideRange;
    }

    public set setShowInsideRange(show:boolean){
        this.showInsideRange=show;
        this.invalidate();
    }

    public get getStartColorGradiant():number{
        return this.startColorGradiant;
    }

    public set setStartColorGradiant(color:number){
        this.startColorGradiant = color;
        this.invalidate();
    }

    public get getMiddleColorGradiant():number{
        return this.middleColorGradiant;
    }

    public set setMiddleColorGradiant(color:number){
        this.middleColorGradiant=color;
        this.invalidate();
    }

    public get getEndColorGradiant():number{
        return this.endColorGradiant;
    }

    public set setEndColorGradiant(color:number){
        this.endColorGradiant = color;
        this.invalidate();
    }

    public get isShowGradiant():boolean{
        return this.showGradiant;
    }

    public set setShowGradiant(show:boolean){
        this.showGradiant = show;
        this.invalidate();
    }

    public get isShowTicks():boolean{
        return this.showTicks;
    }

    public set setShowTicks(show:boolean){
        this.showTicks=show;
        this.invalidate();
    }

    public get isShowLabel():boolean{
        return this.showLabel;
    }

    public set setShowLabel(show:boolean){
        this.showLabel = show;
        this.invalidate();
    }

    public get getOpacityBase():number{
        return this.opacityBase;
    }

    public set setOpacityBase(opacity:number){
        this.opacityBase = opacity;
        this.invalidate();
    }

    private listener: OnTimeChangedListener; 

    public setOnTimeChangedListener(listener: OnTimeChangedListener): void {
        this.listener = listener;
    }

    constructor(
        private context:android.content.Context,
    ){
        super(context);
    }

    private init(){
        this.setWillNotDraw(false);
        try {
            this.gradientPaint = new android.graphics.Paint(android.graphics.Paint.ANTI_ALIAS_FLAG);
            this.gradientPaint.setStrokeCap(android.graphics.Paint.Cap.BUTT);

            this.circlePaint = new android.graphics.Paint(android.graphics.Paint.ANTI_ALIAS_FLAG);
            this.circlePaint.setStyle(android.graphics.Paint.Style.STROKE);

            this.thumbStart = new android.graphics.Paint(android.graphics.Paint.ANTI_ALIAS_FLAG);
            this.thumbEnd = new android.graphics.Paint(android.graphics.Paint.ANTI_ALIAS_FLAG);

            this.rangePaint = new android.graphics.Paint(android.graphics.Paint.ANTI_ALIAS_FLAG);
            this.rangePaint.setStyle(android.graphics.Paint.Style.STROKE);
            this.rangePaint.setStrokeCap(android.graphics.Paint.Cap.ROUND);

            this.textPaint = new android.graphics.Paint(android.graphics.Paint.ANTI_ALIAS_FLAG);
            this.textPaint.setTextAlign(android.graphics.Paint.Align.CENTER);
        } catch (error) {
            console.log("error in constructor ", error);
        }
    }

    public onDraw(canvas: android.graphics.Canvas): void {
        super.onDraw(canvas);
        try {
            this.circlePaint.setStrokeWidth(this.getCircleWidth);
            this.circlePaint.setColor(this.getCircleColor);
            this.circlePaint.setAlpha(this.getOpacityBase);

            this.textPaint.setColor(this.numberColor);
            this.textPaint.setTextSize(this.getNumberSize);

            this.rangePaint.setStrokeWidth(this.getRangerSize);
            this.rangePaint.setColor(this.getRangerColor);

            this.invalidate();
            this.centerX = this.getMeasuredWidth() / 2;
            this.centerY = this.getMeasuredHeight() / 2;
            this.radius = Math.min(this.centerX, this.centerY) - 80;

            canvas.drawCircle(this.centerX, this.centerY, this.radius, this.circlePaint);
            this.drawHourTicks(canvas);
            const sweepAngle: number = this.calculateSweepAngle(this.startAngle, this.endAngle);

            const colors = Array.create('int', 3);
            colors[0] = this.getStartColorGradiant;
            colors[1] = this.getMiddleColorGradiant;
            colors[2] = this.getEndColorGradiant;

            const positions = Array.create('float', 3);
            positions[0] = 0.0;
            positions[1] = 0.5;
            positions[2] = 1.0;

            const correctionAngle: number = (this.rangerSize / (float)(Math.PI * this.radius)) * 180;
            const sweepGradient: android.graphics.SweepGradient = new android.graphics.SweepGradient(this.centerX, this.centerY, colors, positions);
            const rotateMatrix: android.graphics.Matrix = new android.graphics.Matrix();
            rotateMatrix.postRotate(this.startAngle - 90 - correctionAngle, this.centerX, this.centerY);
            sweepGradient.setLocalMatrix(rotateMatrix);

            this.gradientPaint.setShader(sweepGradient);
            this.gradientPaint.setStrokeWidth(this.rangerSize);
            this.gradientPaint.setStyle(android.graphics.Paint.Style.STROKE);
            this.gradientPaint.setStrokeCap(android.graphics.Paint.Cap.ROUND);

            canvas.drawArc(
                this.centerX - this.radius, this.centerY - this.radius,
                this.centerX + this.radius, this.centerY + this.radius,
                this.startAngle - 90,
                this.calculateSweepAngle(this.startAngle, this.endAngle),
                false,
                this.isShowGradiant ? this.gradientPaint : this.rangePaint
            );

            const start: android.graphics.PointF = this.angleToPoint(this.startAngle);
            const end: android.graphics.PointF = this.angleToPoint(this.endAngle);

            if (this.startThumbDrawable != null) {
                const size: number = (this.thumbRadius * 2);
                const left: number = (start.x - this.thumbRadius);
                const top: number = (start.y - this.thumbRadius);

                // Dibuja fondo de color
                canvas.drawCircle(start.x, start.y, this.thumbRadius, this.thumbStart); // Agrega esta línea

                this.startThumbDrawable.setBounds(left, top, left + size, top + size);
                this.startThumbDrawable.draw(canvas);
            } else {
                canvas.drawCircle(start.x, start.y, this.thumbRadius, this.thumbStart);
            }

            if (this.endThumbDrawable != null) {
                const size: number = (this.thumbRadius * 2);
                const left: number = (end.x - this.thumbRadius);
                const top: number = (end.y - this.thumbRadius);

                // Dibuja fondo de color
                canvas.drawCircle(end.x, end.y, this.thumbRadius, this.thumbEnd); // Agrega esta línea

                this.endThumbDrawable.setBounds(left, top, left + size, top + size);
                this.endThumbDrawable.draw(canvas);
            } else {
                canvas.drawCircle(end.x, end.y, this.thumbRadius, this.thumbEnd);
            }
        } catch (error) {
            console.log(error)
        }

    }

    // private animateAngleChange(isStart:boolean, fromAngle:number, toAngle:number){
    //     const animator: android.animation.ValueAnimator = android.animation.ValueAnimator.ofFloat([fromAngle, toAngle]);
    //     animator.setDuration(100); // duración en ms
    //     animator.setInterpolator(new android.view.animation.DecelerateInterpolator());
    //     animator.addUpdateListener(new android.animation.ValueAnimator.AnimatorUpdateListener({
    //         onAnimationUpdate:(animation) =>{
    //             const angle:number =animation.getAnimatedValue();
    //             if (isStart) {
    //                 this.startAngle = angle;
    //             } else {
    //                 this.endAngle = angle;
    //             }
    //             this.notifyTimeChanged();
    //             this.invalidate();
    //         },
    //     }));

    //     animator.start();
    // }

    private animateAngleChange(targetAngle: number, isStart: boolean) {
        const animator = android.animation.ValueAnimator.ofFloat([isStart ? this.startAngle : this.endAngle, targetAngle]);
        animator.setDuration(200);
        animator.setInterpolator(new android.view.animation.DecelerateInterpolator());

        animator.addUpdateListener(new android.animation.ValueAnimator.AnimatorUpdateListener({
            onAnimationUpdate: (animation) => {
                const angle = animation.getAnimatedValue();
                if (isStart) {
                    this.startAngle = angle;
                } else {
                    this.endAngle = angle;
                }
                this.invalidate();
            }
        }));

        animator.start();
    }

    private angleToPoint(angle: number): android.graphics.PointF{
        const rad = (angle - 90) * Math.PI / 180; // Math.toRadians(angle - 90)
        const x = this.centerX + this.radius * Math.cos(rad);
        const y = this.centerY + this.radius * Math.sin(rad);
        return new android.graphics.PointF(x, y);
    }

    private pointToAngle(x: number,y:number):number{
        const dx = x - this.centerX;
        const dy = y - this.centerY;
        let angle = Math.atan2(dy, dx) * 180 / Math.PI + 90; // Math.toDegrees + 90

        if (angle < 0) {
            angle += 360;
        }

        return angle; // float no es necesario, JS usa solo number
    }

    private angleToTime(angle: number): Array<number>{
        const totalMinutes = Math.floor((angle / 360) * 720); // 12 horas = 720 minutos
        const hour = Math.floor(totalMinutes / 60);
        const minute = totalMinutes % 60;
        return [hour, minute];
    }

    private formatTime(hour: number,minute:number):string{
        const hh = hour.toString().padStart(2, '0');
        const mm = minute.toString().padStart(2, '0');
        return `${hh}:${mm}`;
    }

    private calculateSweepAngle(start:number, end:number):number{
        let sweep:number = end - start;
        if (sweep < 0){
            return sweep += 360;
        }
        return sweep;
    }

    drawHourTicks(canvas:android.graphics.Canvas){
        let totalTicks = 72;
        let mainTickLength = 30;
        let subTickLength = 18;

        let circleStrokeOffset = this.circlePaint.getStrokeWidth() / 2;
        let paddingBetweenCircleAndTicks = 25;

        let tickStartRadius = this.radius - circleStrokeOffset - paddingBetweenCircleAndTicks;
        let numberPadding = 50; // margen constante para los números
        let numberDistance = tickStartRadius - mainTickLength - numberPadding;

        for (let i:number= 0; i < totalTicks; i++) {
            let angleDeg:number = i * 5;
            // const rad = (angle - 90) * Math.PI / 180;

            let angleRad = (angleDeg - 90) * Math.PI / 180;
            let isHourTick:boolean = (i % 6 == 0);
            let tickLength:number = isHourTick ? mainTickLength : subTickLength;

            let isInRange: boolean = this.isAngleInRange(angleDeg, this.startAngle, this.endAngle);

            let paint: android.graphics.Paint = new android.graphics.Paint(this.circlePaint);
            paint.setStrokeWidth(isHourTick ? 6 : 3);
            if (this.isShowInsideRange) {
                if (isInRange) {
                    paint.setColor(this.getInsideRangeColor);
                }
            }

            paint.setAlpha(isHourTick ? 255 : 160);

            // Tick start & end
            let startX:number = (this.centerX + tickStartRadius * Math.cos(angleRad));
            let startY:number = (this.centerY + tickStartRadius * Math.sin(angleRad));
            let endX:number = (this.centerX + (tickStartRadius - tickLength) * Math.cos(angleRad));
            let endY:number = (this.centerY + (tickStartRadius - tickLength) * Math.sin(angleRad));
            if (this.isShowTicks) {
                canvas.drawLine(startX, startY, endX, endY, paint);
            }

            if (this.isShowLabel) {
                if (isHourTick) {
                    let hour:number = i / 6;
                    hour = (hour == 0) ? 12 : hour;

                    let numberX:number = (this.centerX + numberDistance * Math.cos(angleRad));
                    let numberY:number = (this.centerY + numberDistance * Math.sin(angleRad)) + 15;

                    let numberPaint: android.graphics.Paint = new android.graphics.Paint(this.textPaint);
                    if (this.isShowInsideRange) {
                        if (isInRange) {
                            numberPaint.setColor(this.getInsideRangeColor);
                        }
                    }
                    canvas.drawText(hour.toString(), numberX, numberY, numberPaint);
                }
            }
        }
    }

    // public onTouchEvent(event: android.view.MotionEvent): boolean {
    //     let touchX = event.getX();
    //     let touchY = event.getY();
    //     let angle = this.pointToAngle(touchX, touchY);
    //     let start: android.graphics.PointF = this.angleToPoint(this.startAngle);
    //     let end: android.graphics.PointF = this.angleToPoint(this.endAngle);

    //     switch (event.getAction()){
    //         case android.view.MotionEvent.ACTION_DOWN:
    //             if (this.distance(touchX, touchY, start.x, start.y) < this.thumbRadius * 2) {
    //                 this.isDraggingStart = true;
    //             } else if (this.distance(touchX, touchY, end.x, end.y) < this.thumbRadius * 2) {
    //                 this.isDraggingEnd = true;
    //             } else {
    //                 // Detectar toque sobre el arco del rango
    //                 let sweep:number = this.calculateSweepAngle(this.startAngle, this.endAngle);
    //                 let isTouchInRangeArc:boolean = this.isAngleInRange(angle, this.startAngle, this.endAngle);
    //                 let distToCenter: number = this.distance(touchX, touchY, this.centerX, this.centerY);
    //                 let isTouchNearCircle:boolean = Math.abs(distToCenter - this.radius) <= 80; // tolerancia

    //                 if (isTouchInRangeArc && isTouchNearCircle) {
    //                     this.isDraggingRange = true;
    //                     this.lastTouchAngle = angle;
    //                     return true;
    //                 }
    //             }
    //             return true;
    //         case android.view.MotionEvent.ACTION_MOVE:
    //             if (this.isDraggingStart) {
    //                 this.startAngle = angle;
    //                 this.notifyTimeChanged();
    //                 this.invalidate();
    //             } else if (this.isDraggingEnd) {
    //                 this.endAngle = angle;
    //                 this.notifyTimeChanged();
    //                 this.invalidate();
    //             } else if (this.isDraggingRange) {
    //                 let deltaAngle: number = angle - this.lastTouchAngle;

    //                 // Corregir salto al pasar por 0°/360°
    //                 if (deltaAngle < -180)
    //                     deltaAngle += 360;
    //                 else if (deltaAngle > 180)
    //                     deltaAngle -= 360;

    //                 this.startAngle = (this.startAngle + deltaAngle + 360) % 360;
    //                 this.endAngle = (this.endAngle + deltaAngle + 360) % 360;

    //                 this.lastTouchAngle = angle;

    //                 this.notifyTimeChanged();
    //                 this.invalidate();
    //                 return true;
    //             }
    //             return true;
    //         case android.view.MotionEvent.ACTION_UP:
    //             if (this.isDraggingStart) {
    //                 this.animateAngleChange(true, this.startAngle, this.startAngle); // puedes animar desde startAngleOld si lo guardas
    //             } else if (this.isDraggingEnd) {
    //                 this.animateAngleChange(false, this.endAngle, this.endAngle);
    //             }
            
    //         case android.view.MotionEvent.ACTION_CANCEL:
    //             this.isDraggingStart = false;
    //             this.isDraggingEnd = false;
    //             this.isDraggingRange = false;
    //             this.lastTouchAngle = -1;
    //             return true;
    //     }
    //     return super.onTouchEvent(event);
    // }

    public onTouchEvent(event: android.view.MotionEvent): boolean {
        const touchX = event.getX();
        const touchY = event.getY();
        const angle = this.pointToAngle(touchX, touchY);
        const start = this.angleToPoint(this.startAngle);
        const end = this.angleToPoint(this.endAngle);

        switch (event.getAction()) {
            case android.view.MotionEvent.ACTION_DOWN:
                // Prioridad a los thumbs
                if (this.distance(touchX, touchY, start.x, start.y) < this.thumbRadius * 2) {
                    this.isDraggingStart = true;
                    return true;
                }
                if (this.distance(touchX, touchY, end.x, end.y) < this.thumbRadius * 2) {
                    this.isDraggingEnd = true;
                    return true;
                }

                // Si no es un thumb, verificar si toca el rango
                const isTouchInRangeArc = this.isAngleInRange(angle, this.startAngle, this.endAngle);
                const distToCenter = this.distance(touchX, touchY, this.centerX, this.centerY);
                const rangeInnerRadius = this.radius - this.rangerSize / 2 - 20;
                const rangeOuterRadius = this.radius + this.rangerSize / 2 + 20;

                if (isTouchInRangeArc && distToCenter >= rangeInnerRadius && distToCenter <= rangeOuterRadius) {
                    this.isDraggingRange = true;
                    this.lastTouchAngle = angle;
                    return true;
                }
                break;

            case android.view.MotionEvent.ACTION_MOVE:
                if (this.isDraggingStart) {
                    this.startAngle = angle;
                    // Asegurar que el start no pase al end
                    if (this.calculateSweepAngle(this.startAngle, this.endAngle) > 350) {
                        this.startAngle = (this.endAngle - 10 + 360) % 360;
                    }
                    this.notifyTimeChanged();
                    this.invalidate();
                    return true;
                }

                if (this.isDraggingEnd) {
                    this.endAngle = angle;
                    // Asegurar que el end no pase al start
                    if (this.calculateSweepAngle(this.startAngle, this.endAngle) > 350) {
                        this.endAngle = (this.startAngle + 10) % 360;
                    }
                    this.notifyTimeChanged();
                    this.invalidate();
                    return true;
                }

                if (this.isDraggingRange) {
                    let deltaAngle = angle - this.lastTouchAngle;

                    // Manejar correctamente el paso por 0°/360°
                    if (Math.abs(deltaAngle) > 180) {
                        deltaAngle = deltaAngle - (360 * Math.sign(deltaAngle));
                    }

                    // Mover ambos ángulos manteniendo la misma separación
                    this.startAngle = (this.startAngle + deltaAngle + 360) % 360;
                    this.endAngle = (this.endAngle + deltaAngle + 360) % 360;
                    this.lastTouchAngle = angle;

                    this.notifyTimeChanged();
                    this.invalidate();
                    return true;
                }
                break;

            case android.view.MotionEvent.ACTION_UP:
            case android.view.MotionEvent.ACTION_CANCEL:
                this.isDraggingStart = false;
                this.isDraggingEnd = false;
                this.isDraggingRange = false;
                this.lastTouchAngle = -1;
                return true;
        }

        return super.onTouchEvent(event);
    }

    private notifyTimeChanged(){
        if(this.listener!=null){
            const startTime = this.angleToTime(this.startAngle); // [hour, minute]
            const endTime = this.angleToTime(this.endAngle);     // [hour, minute]
            const range = this.getSelectedTimeRange();           // [totalHours, totalMinutes]

            if (this.listener) {
                this.listener.onTimeChanged(
                    startTime[0], startTime[1],
                    endTime[0], endTime[1],
                    range[0], range[1]
                );
            }
        }
    }

    private distance(x1:number, y1:number, x2:number, y2:number):number{
        return Math.hypot(x2 - x1, y2 - y1);
    }

    private angleToTimeString(angle:number):Array<string>{
        const totalMinutes = Math.floor((angle / 360) * 720); // 12h * 60min = 720
        const hour = Math.floor(totalMinutes / 60);
        const minute = totalMinutes % 60;

        // Asegurar que 0h sea 12h en formato 12h
        const displayHour = (hour === 0) ? 12 : hour;
        const amPm = angle < 180 ? "AM" : "PM";

        // Formatear con ceros a la izquierda
        const formattedTime = `${displayHour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        return [formattedTime, amPm];
    }

    private getSelectedTimeRange(): Array<number>{
        let sweep: number = this.calculateSweepAngle(this.startAngle, this.endAngle);
        let totalMinutes:number = ((sweep / 360) * 720); // 12h = 720 min
        let hours:number = totalMinutes / 60;
        let minutes:number = totalMinutes % 60;
        return [hours, minutes];
    }

    private isAngleInRange(angle:number, start:number, end:number):boolean{
        if (start == end)
            return false; // no hay rango
        if (start < end) {
            return angle >= start && angle <= end;
        } else {
            return angle >= start || angle <= end; // cuando el rango cruza las 12
        }
    }

    public setThumbDrawables(startDrawable:android.graphics.drawable.Drawable, endDrawable:android.graphics.drawable.Drawable) {
        const size:number = (this.thumbRadius * 2);

        this.startThumbDrawable = this.resizeAndRoundDrawable(startDrawable, size);
        this.endThumbDrawable = this.resizeAndRoundDrawable(endDrawable, size);

        this.invalidate();
    }

    private resizeAndRoundDrawable(drawable: android.graphics.drawable.Drawable, size: number): android.graphics.drawable.Drawable {
        if (drawable == null)
            return null;

        let originalBitmap: android.graphics.Bitmap = android.graphics.Bitmap.createBitmap(
            drawable.getIntrinsicWidth(),
            drawable.getIntrinsicHeight(),
            android.graphics.Bitmap.Config.ARGB_8888);
        let canvas:android.graphics.Canvas = new android.graphics.Canvas(originalBitmap);
        drawable.setBounds(0, 0, canvas.getWidth(), canvas.getHeight());
        drawable.draw(canvas);

        let scaledBitmap: android.graphics.Bitmap = android.graphics.Bitmap.createScaledBitmap(originalBitmap, size, size, true);

        let roundedBitmap: android.graphics.Bitmap = android.graphics.Bitmap.createBitmap(size, size, android.graphics.Bitmap.Config.ARGB_8888);
        let roundedCanvas: android.graphics.Canvas = new android.graphics.Canvas(roundedBitmap);

        let paint: android.graphics.Paint = new android.graphics.Paint(android.graphics.Paint.ANTI_ALIAS_FLAG);
        paint.setColor(android.graphics.Color.WHITE);

        roundedCanvas.drawCircle(size / 2, size / 2, size / 2, paint);

        paint.setXfermode(new android.graphics.PorterDuffXfermode(android.graphics.PorterDuff.Mode.SRC_IN));
        roundedCanvas.drawBitmap(scaledBitmap, 0, 0, paint);
        return new android.graphics.drawable.BitmapDrawable(this.context.getResources(), roundedBitmap);
    }

    private timeToAngle(hour:number, minute:number):number {
        let totalMinutes:number = (hour * 60) + minute;
        return (totalMinutes / 720) * 360; // 720 min = 12h
    }

    public setTimeRange(startHour:number, startMinute:number, endHour:number, endMinute:number) {
        this.startAngle = this.timeToAngle(startHour, startMinute);
        this.endAngle = this.timeToAngle(endHour, endMinute);
        this.invalidate();
        this.notifyTimeChanged();
    }

    public getNormalizedThumbPositions(): Record<string, android.graphics.PointF> {
        const result: Record<string, android.graphics.PointF> = {};

        if (this.getWidth() === 0 || this.getHeight() === 0) {
            result["start"] = new android.graphics.PointF(0, 0);
            result["end"] = new android.graphics.PointF(0, 0);
            return result;
        }

        const centerX = this.getWidth() / 2;
        const centerY = this.getHeight() / 2;

        const start = this.angleToPoint(this.startAngle); // devuelve android.graphics.PointF
        const end = this.angleToPoint(this.endAngle);

        const normalizedStart = new android.graphics.PointF(start.x - centerX, start.y - centerY);
        const normalizedEnd = new android.graphics.PointF(end.x - centerX, end.y - centerY);

        result["start"] = normalizedStart;
        result["end"] = normalizedEnd;

        return result;
    }
}