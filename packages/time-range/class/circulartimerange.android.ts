import { Color } from '@nativescript/core';

export interface OnTimeChangedListener {
  onTimeChanged(startHour: number, startMinute: number, endHour: number, endMinute: number, totalHours: number, totalMinutes: number): void;
}

@NativeClass()
export class CircularTimeRangePicker extends android.view.View {
  // Paints (Reutilizables)
  private circlePaint: android.graphics.Paint;
  private thumbStartPaint: android.graphics.Paint;
  private thumbEndPaint: android.graphics.Paint;
  private rangePaint: android.graphics.Paint;
  private textPaint: android.graphics.Paint;
  private gradientPaint: android.graphics.Paint;
  private tickPaint: android.graphics.Paint; // Nuevo Paint dedicado para ticks

  // Dimensiones en Caché
  private radius: number;
  private centerX: number;
  private centerY: number;
  private widthCached: number;
  private heightCached: number;

  // Objetos reutilizables para evitar 'new' en onDraw
  private gradientColors: any; // int[]
  private gradientPositions: any; // float[]
  private rotateMatrix: android.graphics.Matrix;
  private sweepGradient: android.graphics.SweepGradient;
  private tempPoint: android.graphics.PointF; // Para evitar crear puntos nuevos

  // Variables de estado
  private startAngle: number = 0;
  private endAngle: number = 0;
  private thumbRadius: number = 30;
  private isDraggingStart: boolean = false;
  private isDraggingEnd: boolean = false;
  private isDraggingRange: boolean = false;
  private lastTouchAngle: number = -1;

  // Recursos
  private startThumbDrawable: android.graphics.drawable.Drawable = null;
  private endThumbDrawable: android.graphics.drawable.Drawable = null;

  // Configuración
  private _circleWidth: number = 10;
  private _circleColor: number = android.graphics.Color.RED;
  private _numberColor: number = android.graphics.Color.RED;
  private _numberSize: number = 20;
  private _rangerSize: number = 100;
  private _rangerColor: number = android.graphics.Color.BLACK;
  private _insideRangeColor: number = android.graphics.Color.CYAN;

  private _showInsideRange: boolean = true;
  private _startColorGradient: number = android.graphics.Color.RED;
  private _middleColorGradient: number = android.graphics.Color.GREEN;
  private _endColorGradient: number = android.graphics.Color.BLUE;
  private _gradientNeedsUpdate: boolean = true; // Flag para recrear el shader solo si es necesario

  private _showGradient: boolean = true;
  private _showTicks: boolean = true;
  private _showLabel: boolean = true;
  private _opacityBase: number = 60;

  private listener: OnTimeChangedListener;

  constructor(private context: android.content.Context) {
    super(context);
    this.init();
  }

  private init() {
    this.setWillNotDraw(false);
    this.tempPoint = new android.graphics.PointF();
    this.rotateMatrix = new android.graphics.Matrix();

    // Inicializar Arrays de Java una sola vez
    this.gradientColors = Array.create('int', 3);
    this.gradientPositions = Array.create('float', 3);
    this.gradientPositions[0] = 0.0;
    this.gradientPositions[1] = 0.5;
    this.gradientPositions[2] = 1.0;

    try {
      // Inicialización de Paints optimizada
      const antiAlias = android.graphics.Paint.ANTI_ALIAS_FLAG;

      this.gradientPaint = new android.graphics.Paint(antiAlias);
      this.gradientPaint.setStrokeCap(android.graphics.Paint.Cap.BUTT);
      this.gradientPaint.setStyle(android.graphics.Paint.Style.STROKE);

      this.circlePaint = new android.graphics.Paint(antiAlias);
      this.circlePaint.setStyle(android.graphics.Paint.Style.STROKE);

      this.thumbStartPaint = new android.graphics.Paint(antiAlias);
      this.thumbEndPaint = new android.graphics.Paint(antiAlias);

      this.rangePaint = new android.graphics.Paint(antiAlias);
      this.rangePaint.setStyle(android.graphics.Paint.Style.STROKE);
      this.rangePaint.setStrokeCap(android.graphics.Paint.Cap.ROUND);

      this.textPaint = new android.graphics.Paint(antiAlias);
      this.textPaint.setTextAlign(android.graphics.Paint.Align.CENTER);

      this.tickPaint = new android.graphics.Paint(antiAlias);
      this.tickPaint.setStyle(android.graphics.Paint.Style.STROKE);
    } catch (error) {
      console.log('Error in init:', error);
    }
  }

  // Se llama cuando la vista cambia de tamaño. Ideal para cálculos pesados.
  public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void {
    super.onSizeChanged(w, h, oldw, oldh);
    this.widthCached = w;
    this.heightCached = h;
    this.centerX = w / 2;
    this.centerY = h / 2;
    this.radius = Math.min(this.centerX, this.centerY) - 80;

    // Requerimos actualizar el gradiente si el tamaño cambia
    this._gradientNeedsUpdate = true;
  }

  // --- GETTERS Y SETTERS OPTIMIZADOS ---
  // Usamos sintaxis estándar de TS y invalidamos solo cuando es necesario

  public get circleWidth(): number {
    return this._circleWidth;
  }
  public set circleWidth(w: number) {
    this._circleWidth = w;
    this.invalidate();
  }

  public get circleColor(): number {
    return this._circleColor;
  }
  public set circleColor(color: number) {
    this._circleColor = color;
    this.invalidate();
  }

  public get numberColor(): number {
    return this._numberColor;
  }
  public set numberColor(color: number) {
    this._numberColor = color;
    this.invalidate();
  }

  public get numberSize(): number {
    return this._numberSize;
  }
  public set numberSize(size: number) {
    this._numberSize = size;
    this.invalidate();
  }

  public get rangerSize(): number {
    return this._rangerSize;
  }
  public set rangerSize(size: number) {
    this._rangerSize = size;
    this._gradientNeedsUpdate = true; // Tamaño afecta el gradiente
    this.invalidate();
  }

  public get rangerColor(): number {
    return this._rangerColor;
  }
  public set rangerColor(color: number) {
    this._rangerColor = color;
    this.invalidate();
  }

  public setThumbStartColor(color: number) {
    this.thumbStartPaint.setColor(color);
    this.invalidate();
  }

  public setThumbStartColorHex(colorHex: string) {
    try {
      this.setThumbStartColor(new Color(colorHex).android);
    } catch (e) {
      console.log(e);
    }
  }

  public setThumbEndColor(color: number) {
    this.thumbEndPaint.setColor(color);
    this.invalidate();
  }

  public setThumbEndColorHex(colorHex: string) {
    try {
      this.setThumbEndColor(new Color(colorHex).android);
    } catch (e) {
      console.log(e);
    }
  }

  public get insideRangeColor(): number {
    return this._insideRangeColor;
  }
  public set insideRangeColor(color: number) {
    this._insideRangeColor = color;
    this.invalidate();
  }

  public get showInsideRange(): boolean {
    return this._showInsideRange;
  }
  public set showInsideRange(show: boolean) {
    this._showInsideRange = show;
    this.invalidate();
  }

  // Gradientes: Marcamos flag para actualizar shader
  public set startColorGradient(color: number) {
    this._startColorGradient = color;
    this._gradientNeedsUpdate = true;
    this.invalidate();
  }
  public set middleColorGradient(color: number) {
    this._middleColorGradient = color;
    this._gradientNeedsUpdate = true;
    this.invalidate();
  }
  public set endColorGradient(color: number) {
    this._endColorGradient = color;
    this._gradientNeedsUpdate = true;
    this.invalidate();
  }

  public get showGradient(): boolean {
    return this._showGradient;
  }
  public set showGradient(show: boolean) {
    this._showGradient = show;
    this.invalidate();
  }

  public get showTicks(): boolean {
    return this._showTicks;
  }
  public set showTicks(show: boolean) {
    this._showTicks = show;
    this.invalidate();
  }

  public get showLabel(): boolean {
    return this._showLabel;
  }
  public set showLabel(show: boolean) {
    this._showLabel = show;
    this.invalidate();
  }

  public get opacityBase(): number {
    return this._opacityBase;
  }
  public set opacityBase(opacity: number) {
    this._opacityBase = opacity;
    this.invalidate();
  }

  public setOnTimeChangedListener(listener: OnTimeChangedListener): void {
    this.listener = listener;
  }

  public onDraw(canvas: android.graphics.Canvas): void {
    // NO llamar super.onDraw(canvas) si es un ViewGroup simple, pero para View custom está bien.
    // super.onDraw(canvas);

    // 1. Configurar Paints (Barato)
    this.circlePaint.setStrokeWidth(this._circleWidth);
    this.circlePaint.setColor(this._circleColor);
    this.circlePaint.setAlpha(this._opacityBase);

    this.textPaint.setColor(this._numberColor);
    this.textPaint.setTextSize(this._numberSize);

    this.rangePaint.setStrokeWidth(this._rangerSize);
    this.rangePaint.setColor(this._rangerColor);

    // 2. Dibujar círculo base
    canvas.drawCircle(this.centerX, this.centerY, this.radius, this.circlePaint);

    // 3. Dibujar Ticks (Optimizado)
    this.drawHourTicks(canvas);

    // 4. Configurar Gradiente (Solo si cambió o rotó)
    if (this._showGradient) {
      this.updateGradientShader(); // Configura el shader y la matriz
      this.gradientPaint.setStrokeWidth(this._rangerSize);
    }

    // 5. Dibujar Arco
    const sweepAngle = this.calculateSweepAngle(this.startAngle, this.endAngle);
    canvas.drawArc(this.centerX - this.radius, this.centerY - this.radius, this.centerX + this.radius, this.centerY + this.radius, this.startAngle - 90, sweepAngle, false, this._showGradient ? this.gradientPaint : this.rangePaint);

    // 6. Dibujar Thumbs (Optimizando llamadas a helpers)
    this.drawThumb(canvas, this.startAngle, this.thumbStartPaint, this.startThumbDrawable);
    this.drawThumb(canvas, this.endAngle, this.thumbEndPaint, this.endThumbDrawable);
  }

  private updateGradientShader() {
    // Actualizar colores solo si es necesario
    if (this._gradientNeedsUpdate) {
      this.gradientColors[0] = this._startColorGradient;
      this.gradientColors[1] = this._middleColorGradient;
      this.gradientColors[2] = this._endColorGradient;

      // SweepGradient es inmutable en sus colores, debemos recrearlo si cambian los colores
      this.sweepGradient = new android.graphics.SweepGradient(this.centerX, this.centerY, this.gradientColors, this.gradientPositions);
      this.gradientPaint.setShader(this.sweepGradient);
      this._gradientNeedsUpdate = false;
    }

    // Calcular rotación (Matrix es mutable, reutilizamos)
    const correctionAngle = (this._rangerSize / (Math.PI * this.radius)) * 180;
    this.rotateMatrix.setRotate(this.startAngle - 90 - correctionAngle, this.centerX, this.centerY);
    this.sweepGradient.setLocalMatrix(this.rotateMatrix);
  }

  private drawThumb(canvas: android.graphics.Canvas, angle: number, paint: android.graphics.Paint, drawable: android.graphics.drawable.Drawable) {
    // Calculo inline para evitar crear PointF
    const rad = ((angle - 90) * Math.PI) / 180;
    const x = this.centerX + this.radius * Math.cos(rad);
    const y = this.centerY + this.radius * Math.sin(rad);

    // Dibujar fondo
    canvas.drawCircle(x, y, this.thumbRadius, paint);

    if (drawable != null) {
      const size = this.thumbRadius * 2;
      const left = x - this.thumbRadius;
      const top = y - this.thumbRadius;
      drawable.setBounds(left, top, left + size, top + size);
      drawable.draw(canvas);
    }
  }

  private drawHourTicks(canvas: android.graphics.Canvas) {
    const totalTicks = 72;
    const mainTickLength = 30;
    const subTickLength = 18;

    // Copiar propiedades base al tickPaint para no instanciar uno nuevo
    this.tickPaint.setColor(this._circleColor);

    const circleStrokeOffset = this._circleWidth / 2;
    const paddingBetweenCircleAndTicks = 25;
    const tickStartRadius = this.radius - circleStrokeOffset - paddingBetweenCircleAndTicks;
    const numberPadding = 50;
    const numberDistance = tickStartRadius - mainTickLength - numberPadding;

    for (let i = 0; i < totalTicks; i++) {
      const angleDeg = i * 5;
      const angleRad = ((angleDeg - 90) * Math.PI) / 180;
      const isHourTick = i % 6 == 0;
      const tickLength = isHourTick ? mainTickLength : subTickLength;

      const isInRange = this.isAngleInRange(angleDeg, this.startAngle, this.endAngle);

      // Configurar el Paint reutilizable
      this.tickPaint.setStrokeWidth(isHourTick ? 6 : 3);
      this.tickPaint.setAlpha(isHourTick ? 255 : 160);

      if (this._showInsideRange && isInRange) {
        this.tickPaint.setColor(this._insideRangeColor);
      } else {
        this.tickPaint.setColor(this._circleColor);
      }

      if (this._showTicks) {
        const startX = this.centerX + tickStartRadius * Math.cos(angleRad);
        const startY = this.centerY + tickStartRadius * Math.sin(angleRad);
        const endX = this.centerX + (tickStartRadius - tickLength) * Math.cos(angleRad);
        const endY = this.centerY + (tickStartRadius - tickLength) * Math.sin(angleRad);
        canvas.drawLine(startX, startY, endX, endY, this.tickPaint);
      }

      if (this._showLabel && isHourTick) {
        let hour = i / 6;
        hour = hour == 0 ? 12 : hour;

        const numberX = this.centerX + numberDistance * Math.cos(angleRad);
        const numberY = this.centerY + numberDistance * Math.sin(angleRad) + 15;

        // Configurar TextPaint reutilizable
        const originalColor = this.textPaint.getColor();
        if (this._showInsideRange && isInRange) {
          this.textPaint.setColor(this._insideRangeColor);
        }

        canvas.drawText(hour.toString(), numberX, numberY, this.textPaint);

        // Restaurar color para la siguiente iteración
        this.textPaint.setColor(originalColor);
      }
    }
  }

  public onTouchEvent(event: android.view.MotionEvent): boolean {
    const touchX = event.getX();
    const touchY = event.getY();

    // Optimización: Solo calcular si es necesario
    const angle = this.pointToAngle(touchX, touchY);

    // Recalcular positions thumb solo para touch (menos crítico que onDraw, pero bueno optimizar)
    const startRad = ((this.startAngle - 90) * Math.PI) / 180;
    const startX = this.centerX + this.radius * Math.cos(startRad);
    const startY = this.centerY + this.radius * Math.sin(startRad);

    const endRad = ((this.endAngle - 90) * Math.PI) / 180;
    const endX = this.centerX + this.radius * Math.cos(endRad);
    const endY = this.centerY + this.radius * Math.sin(endRad);

    switch (event.getAction()) {
      case android.view.MotionEvent.ACTION_DOWN:
        if (this.distance(touchX, touchY, startX, startY) < this.thumbRadius * 2.5) {
          // Aumenté el hit area
          this.isDraggingStart = true;
          return true;
        }
        if (this.distance(touchX, touchY, endX, endY) < this.thumbRadius * 2.5) {
          this.isDraggingEnd = true;
          return true;
        }

        // Lógica de rango
        const distToCenter = this.distance(touchX, touchY, this.centerX, this.centerY);
        const rangeInnerRadius = this.radius - this._rangerSize / 2 - 20;
        const rangeOuterRadius = this.radius + this._rangerSize / 2 + 20;

        if (this.isAngleInRange(angle, this.startAngle, this.endAngle) && distToCenter >= rangeInnerRadius && distToCenter <= rangeOuterRadius) {
          this.isDraggingRange = true;
          this.lastTouchAngle = angle;
          return true;
        }
        break;

      case android.view.MotionEvent.ACTION_MOVE:
        if (this.isDraggingStart) {
          this.startAngle = angle;
          // Lógica para no cruzar
          if (this.calculateSweepAngle(this.startAngle, this.endAngle) > 350) {
            this.startAngle = (this.endAngle - 10 + 360) % 360;
          }
          this.notifyTimeChanged();
          this.invalidate();
          return true;
        }

        if (this.isDraggingEnd) {
          this.endAngle = angle;
          if (this.calculateSweepAngle(this.startAngle, this.endAngle) > 350) {
            this.endAngle = (this.startAngle + 10) % 360;
          }
          this.notifyTimeChanged();
          this.invalidate();
          return true;
        }

        if (this.isDraggingRange) {
          let deltaAngle = angle - this.lastTouchAngle;
          if (Math.abs(deltaAngle) > 180) {
            deltaAngle = deltaAngle - 360 * Math.sign(deltaAngle);
          }
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

  // --- HELPERS OPTIMIZADOS ---

  private angleToTime(angle: number): Array<number> {
    // Lógica matemática pura, no afecta rendimiento gráfico
    const totalMinutes = Math.floor((angle / 360) * 720);
    const hour = Math.floor(totalMinutes / 60);
    const minute = totalMinutes % 60;
    return [hour, minute];
  }

  private calculateSweepAngle(start: number, end: number): number {
    let sweep = end - start;
    if (sweep < 0) {
      sweep += 360;
    }
    return sweep;
  }

  private isAngleInRange(angle: number, start: number, end: number): boolean {
    if (start == end) return false;
    if (start < end) return angle >= start && angle <= end;
    else return angle >= start || angle <= end;
  }

  private distance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.hypot(x2 - x1, y2 - y1);
  }

  private pointToAngle(x: number, y: number): number {
    const dx = x - this.centerX;
    const dy = y - this.centerY;
    let angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
    if (angle < 0) angle += 360;
    return angle;
  }

  // Método para notificar (sin cambios mayores)
  private notifyTimeChanged() {
    if (this.listener) {
      const start = this.angleToTime(this.startAngle);
      const end = this.angleToTime(this.endAngle);
      // Cálculo simplificado
      const sweep = this.calculateSweepAngle(this.startAngle, this.endAngle);
      const totalMins = (sweep / 360) * 720;

      this.listener.onTimeChanged(start[0], start[1], end[0], end[1], totalMins / 60, totalMins % 60);
    }
  }

  // Helpers de Drawables y configuración pública (sin cambios mayores de lógica, solo limpieza)
  public setThumbDrawables(start: android.graphics.drawable.Drawable, end: android.graphics.drawable.Drawable) {
    const size = this.thumbRadius * 2;
    this.startThumbDrawable = this.resizeAndRoundDrawable(start, size);
    this.endThumbDrawable = this.resizeAndRoundDrawable(end, size);
    this.invalidate();
  }

  private resizeAndRoundDrawable(drawable: android.graphics.drawable.Drawable, size: number): android.graphics.drawable.Drawable {
    if (!drawable) return null;
    // Esta función es pesada pero solo se llama al inicio, así que está bien dejar los 'new' aquí
    let originalBitmap = android.graphics.Bitmap.createBitmap(drawable.getIntrinsicWidth(), drawable.getIntrinsicHeight(), android.graphics.Bitmap.Config.ARGB_8888);
    let canvas = new android.graphics.Canvas(originalBitmap);
    drawable.setBounds(0, 0, canvas.getWidth(), canvas.getHeight());
    drawable.draw(canvas);

    let scaledBitmap = android.graphics.Bitmap.createScaledBitmap(originalBitmap, size, size, true);
    let roundedBitmap = android.graphics.Bitmap.createBitmap(size, size, android.graphics.Bitmap.Config.ARGB_8888);
    let roundedCanvas = new android.graphics.Canvas(roundedBitmap);
    let paint = new android.graphics.Paint(android.graphics.Paint.ANTI_ALIAS_FLAG);

    paint.setColor(android.graphics.Color.WHITE);
    roundedCanvas.drawCircle(size / 2, size / 2, size / 2, paint);
    paint.setXfermode(new android.graphics.PorterDuffXfermode(android.graphics.PorterDuff.Mode.SRC_IN));
    roundedCanvas.drawBitmap(scaledBitmap, 0, 0, paint);

    return new android.graphics.drawable.BitmapDrawable(this.context.getResources(), roundedBitmap);
  }

  private timeToAngle(hour: number, minute: number): number {
    return ((hour * 60 + minute) / 720) * 360;
  }

  public setTimeRange(startHour: number, startMinute: number, endHour: number, endMinute: number) {
    this.startAngle = this.timeToAngle(startHour, startMinute);
    this.endAngle = this.timeToAngle(endHour, endMinute);
    this.invalidate();
    this.notifyTimeChanged();
  }

  public getNormalizedThumbPositions(): { start: android.graphics.PointF; end: android.graphics.PointF } {
    const getPointFromAngle = (angle: number): android.graphics.PointF => {
      const rad = ((angle - 90) * Math.PI) / 180;
      const x = this.centerX + this.radius * Math.cos(rad);
      const y = this.centerY + this.radius * Math.sin(rad);
      return new android.graphics.PointF(x, y);
    };

    return {
      start: getPointFromAngle(this.startAngle),
      end: getPointFromAngle(this.endAngle),
    };
  }
}
