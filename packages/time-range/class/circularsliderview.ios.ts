import { TimeRange } from '../index.ios';

@NativeClass()
export class CircularSliderView extends UIView {
  private owner: WeakRef<TimeRange>;

  // ======== CACHES ========
  private font: UIFont;
  private textAttributes: NSMutableDictionary<string, any>;
  private gradient: any;
  private colorSpace: any;
  private lastGradientColors: string = '';

  // Paths reutilizables (Optimización de memoria y GPU)
  private tickPathMinorInactive: UIBezierPath;
  private tickPathMinorActive: UIBezierPath;
  private tickPathMajorInactive: UIBezierPath;
  private tickPathMajorActive: UIBezierPath;

  static initWithOwner(owner: WeakRef<TimeRange>): CircularSliderView {
    const view = <CircularSliderView>super.new();
    view.owner = owner;
    view.opaque = false;
    view.contentMode = UIViewContentMode.Redraw;
    view.initPaths();
    return view;
  }

  private initPaths() {
    this.tickPathMinorInactive = UIBezierPath.new();
    this.tickPathMinorActive = UIBezierPath.new();
    this.tickPathMajorInactive = UIBezierPath.new();
    this.tickPathMajorActive = UIBezierPath.new();
  }

  private resetPaths() {
    this.tickPathMinorInactive.removeAllPoints();
    this.tickPathMinorActive.removeAllPoints();
    this.tickPathMajorInactive.removeAllPoints();
    this.tickPathMajorActive.removeAllPoints();
  }

  private normalizeAngle(a: number): number {
    const twoPi = Math.PI * 2;
    return ((a % twoPi) + twoPi) % twoPi;
  }

  private isAngleInRange(angle: number, start: number, end: number): boolean {
    if (start <= end) {
      return angle >= start && angle <= end;
    }
    return angle >= start || angle <= end;
  }

  private updateGradientCache(owner: TimeRange) {
    if (!owner._showGradiantColor) return;
    const colorsKey = `${owner._startGradiantColor.CIColor}_${owner._middleGradiantColor.CIColor}_${owner._endGradiantColor.CIColor}`;

    if (this.gradient && this.lastGradientColors === colorsKey) return;

    this.colorSpace = CGColorSpaceCreateDeviceRGB();
    const colors = [owner._startGradiantColor.CGColor, owner._middleGradiantColor.CGColor, owner._endGradiantColor.CGColor];
    const cfArray = NSArray.arrayWithArray(colors as any);
    this.gradient = CGGradientCreateWithColors(this.colorSpace, cfArray, null);
    this.lastGradientColors = colorsKey;
  }

  private ensureTextAttributes(owner: TimeRange) {
    if (!this.font) {
      this.font = UIFont.boldSystemFontOfSize(owner._numberSize);
    }
    if (!this.textAttributes) {
      this.textAttributes = NSMutableDictionary.new();
      this.textAttributes.setObjectForKey(this.font, NSFontAttributeName);
    }
  }

  // ======== DRAW ========
  drawRect(rect: CGRect): void {
    const owner = this.owner?.get();
    if (!owner) return;

    const ctx = UIGraphicsGetCurrentContext();
    this.ensureTextAttributes(owner);
    this.updateGradientCache(owner);
    this.resetPaths();

    const bounds = this.bounds;
    const cx = bounds.size.width * 0.5;
    const cy = bounds.size.height * 0.5;
    const center = { x: cx, y: cy };

    const TWO_PI = Math.PI * 2;
    const HALF_PI = Math.PI / 2;

    const radius = owner.radius;
    const trackWidth = owner._circleWidth;
    const trackCenterRadius = radius - trackWidth * 0.5;

    // 1. TRACK BASE
    owner._circleColor.setStroke();
    CGContextSetAlpha(ctx, owner.opacityBase);
    const trackPath = UIBezierPath.bezierPathWithArcCenterRadiusStartAngleEndAngleClockwise(center, trackCenterRadius, 0, TWO_PI, true);
    trackPath.lineWidth = trackWidth;
    trackPath.stroke();
    CGContextSetAlpha(ctx, 1.0);

    // 2. CÁLCULO DE TICKS Y NÚMEROS
    const startAngleNorm = this.normalizeAngle(owner.startAngle);
    const endAngleNorm = this.normalizeAngle(owner.endAngle);
    const showTicks = owner.showTicks;
    const showNumbers = owner.showNumbers;
    const highlightTicks = owner.highlightTicksInRange;

    if (showTicks || showNumbers) {
      const fullTickCount = 60;
      const tickLength = 8;
      const marginTrackTicks = trackWidth * 0.6;
      const marginTicksLabels = 25;
      const tickOuterRadius = trackCenterRadius - marginTrackTicks;
      const tickInnerRadius = tickOuterRadius - tickLength;
      const labelRadius = tickInnerRadius - marginTicksLabels;

      for (let i = 0; i < fullTickCount; i++) {
        const angle = (TWO_PI * i) / fullTickCount - HALF_PI;
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        const isHourTick = i % 5 === 0;

        let inRange = false;
        if (highlightTicks || (showNumbers && isHourTick)) {
          const angleNorm = this.normalizeAngle(angle);
          inRange = this.isAngleInRange(angleNorm, startAngleNorm, endAngleNorm);
        }

        // ---- TICKS (Agrupar en paths) ----
        if (showTicks) {
          const p1 = { x: cx + cosA * tickInnerRadius, y: cy + sinA * tickInnerRadius };
          const p2 = { x: cx + cosA * tickOuterRadius, y: cy + sinA * tickOuterRadius };

          if (isHourTick) {
            const path = highlightTicks && inRange ? this.tickPathMajorActive : this.tickPathMajorInactive;
            path.moveToPoint(p1);
            path.addLineToPoint(p2);
          } else {
            const path = highlightTicks && inRange ? this.tickPathMinorActive : this.tickPathMinorInactive;
            path.moveToPoint(p1);
            path.addLineToPoint(p2);
          }
        }

        // ---- LABELS (Números) ----
        if (showNumbers && isHourTick) {
          const hour = i === 0 ? 12 : i / 5;

          // LÓGICA CORREGIDA AQUÍ:
          // Si está en rango -> insideRangeColor
          // Si NO está en rango -> numberColor
          const textColor = inRange && owner._insideRangeColor ? owner._insideRangeColor : owner._numberColor;

          this.textAttributes.setObjectForKey(textColor, NSForegroundColorAttributeName);

          const labelStr = NSString.stringWithString(hour.toString());
          const size = labelStr.sizeWithAttributes(this.textAttributes);

          labelStr.drawAtPointWithAttributes(
            {
              x: cx + cosA * labelRadius - size.width * 0.5,
              y: cy + sinA * labelRadius - size.height * 0.5,
            },
            this.textAttributes
          );
        }
      }

      // 3. PINTAR TICKS (Stroke)
      if (showTicks) {
        CGContextSetLineCap(ctx, CGLineCap.kCGLineCapRound);

        // --- TICKS INACTIVOS (FUERA DE RANGO) ---
        // AQUÍ ESTÁ EL CAMBIO IMPORTANTE: Usamos circleColor para los ticks inactivos
        // en lugar de numberColor.
        owner._circleColor.setStroke();

        this.tickPathMinorInactive.lineWidth = 1;
        this.tickPathMinorInactive.stroke();

        this.tickPathMajorInactive.lineWidth = 2.5;
        this.tickPathMajorInactive.stroke();

        // --- TICKS ACTIVOS (DENTRO DE RANGO) ---
        if (highlightTicks && owner._insideRangeColor) {
          owner._insideRangeColor.setStroke();

          this.tickPathMinorActive.lineWidth = 1;
          this.tickPathMinorActive.stroke();

          this.tickPathMajorActive.lineWidth = 2.5;
          this.tickPathMajorActive.stroke();
        }
      }
    }

    // 4. ARCO DE RANGO
    const arcPath = UIBezierPath.bezierPathWithArcCenterRadiusStartAngleEndAngleClockwise(center, trackCenterRadius, owner.startAngle, owner.endAngle, true);

    if (owner._showGradiantColor && this.gradient) {
      CGContextSaveGState(ctx);
      CGContextSetLineCap(ctx, CGLineCap.kCGLineCapRound);
      CGContextSetLineWidth(ctx, owner._rangerSize);
      CGContextAddPath(ctx, arcPath.CGPath);
      CGContextReplacePathWithStrokedPath(ctx);
      CGContextClip(ctx);

      CGContextDrawLinearGradient(ctx, this.gradient, { x: cx + Math.cos(owner.startAngle) * trackCenterRadius, y: cy + Math.sin(owner.startAngle) * trackCenterRadius }, { x: cx + Math.cos(owner.endAngle) * trackCenterRadius, y: cy + Math.sin(owner.endAngle) * trackCenterRadius }, 1);
      CGContextRestoreGState(ctx);
    } else {
      owner._rangerColor.setStroke();
      arcPath.lineWidth = owner._rangerSize;
      arcPath.lineCapStyle = CGLineCap.kCGLineCapRound;
      arcPath.stroke();
    }

    // 5. THUMBS
    owner.startThumbCenter = {
      x: cx + Math.cos(owner.startAngle) * trackCenterRadius,
      y: cy + Math.sin(owner.startAngle) * trackCenterRadius,
    };
    owner.endThumbCenter = {
      x: cx + Math.cos(owner.endAngle) * trackCenterRadius,
      y: cy + Math.sin(owner.endAngle) * trackCenterRadius,
    };
    owner.drawThumb(owner.startThumbCenter, ctx, true);
    owner.drawThumb(owner.endThumbCenter, ctx, false);
  }
}
