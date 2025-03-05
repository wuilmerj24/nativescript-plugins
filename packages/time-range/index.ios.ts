import { Screen, Color, Application, GestureEvents, Utils } from '@nativescript/core';
import { TimeRangeCommon, clockFaceProperty, clockLabelColorProperty, clockLabelSizeProperty, clockTickColorProperty, clockVisibleProperty, endTimeProperty, hourFormatProperty, maxDurationMinutesProperty, sliderColorProperty, sliderRangeColorProperty, sliderRangeGradientEndProperty, sliderRangeGradientMiddleProperty, sliderRangeGradientStartProperty, sliderWidthProperty, startTimeProperty, thumbColorProperty, thumbIconEndResProperty, thumbIconSizeProperty, thumbIconStartResProperty, thumbSizeProperty, timeStepMinutesProperty } from './common';

@NativeClass()
class TimeRangerChangeHandlerImpl extends NSObject {
  private _owner: WeakRef<TimeRange>;
  private previousStartValue: number = 0;
  private previousEndValue: number = 0;
  public static initWithOwner(owner: WeakRef<TimeRange>): TimeRangerChangeHandlerImpl {
    const handler = <TimeRangerChangeHandlerImpl>TimeRangerChangeHandlerImpl.new();
    handler._owner = owner;
    return handler;
  }

  public sliderValueChanged(sender: MSDoubleHandleCircularSlider) {
    let evento: string = '';
    if (sender._currentValue != this.previousStartValue) {
      evento = 'dragStar';
      this.previousStartValue = sender._currentValue;
    }

    if (sender._secondCurrentValue != this.previousEndValue) {
      evento = 'dragEnd';
      this.previousEndValue = sender._secondCurrentValue;
    }

    const start = this.obtenerHorasYMinutosDesdeRadio(sender._currentValue);
    const end = this.obtenerHorasYMinutosDesdeRadio(sender._secondCurrentValue);
    this._owner.get().sendEvent(TimeRange.dragEvent, { start: `${start.horas}:${start.minutos}`, end: `${end.horas}:${end.minutos}`, event: evento });
  }

  public static ObjCExposedMethods = {
    sliderValueChanged: { returns: interop.types.void, params: [MSDoubleHandleCircularSlider] },
  };

  obtenerHorasYMinutosDesdeRadio(radio: number): { horas: number; minutos: number } {
    // Convierte el radio en un ángulo en grados dentro del rango de 0 a 360 grados
    const anguloGrados = (radio / 100) * 360;

    // Calcula las horas completas (cada 30 grados es igual a 1 hora)
    const horasCompletas = Math.floor(anguloGrados / 30);

    // Calcula los minutos adicionales (el residuo de la división por 30)
    const minutosAdicionales = Math.round((anguloGrados % 30) * 2);

    // Convierte las horas en formato de 12 horas y maneja la medianoche
    let horas = horasCompletas % 12;
    horas = horas === 0 ? 12 : horas;

    return { horas, minutos: minutosAdicionales };
  }
}

export class TimeRange extends TimeRangeCommon {
  timeRanger: MSDoubleHandleCircularSlider;
  private labelColors: Color;
  private imageStart: UIImage;
  private imageEnd: UIImage;
  createNativeView(): any {
    this.timeRanger = MSDoubleHandleCircularSlider.new();
    return this.timeRanger;
  }

  initNativeView(): void {
    super.initNativeView();
    try {
      const _changeHandler = TimeRangerChangeHandlerImpl.initWithOwner(new WeakRef(this));
      this.timeRanger.addTargetActionForControlEvents(_changeHandler, 'sliderValueChanged', UIControlEvents.ValueChanged);
    } catch (error) {
      console.log(error);
    }
  }

  disposeNativeView(): void {
    super.disposeNativeView();
  }

  convertirHorasYMinutosARadio(horas: number, minutos: number): number {
    // Calcula el ángulo en grados correspondiente a las horas y minutos
    const anguloHoras = (horas % 12) * 30 + (minutos / 60) * 30;

    // Mapea el ángulo al rango de 0 a 100
    const radio = (anguloHoras / 360) * 100;

    return radio;
  }

  [startTimeProperty.setNative](value: string) {
    const startTime: Array<string> = value.split(':');
    const radio = this.convertirHorasYMinutosARadio(parseInt(startTime[0]), parseInt(startTime[1]));
    this.timeRanger._currentValue = radio;
  }

  [endTimeProperty.setNative](value: string) {
    const endTime: Array<string> = value.split(':');
    const radio = this.convertirHorasYMinutosARadio(parseInt(endTime[0]), parseInt(endTime[1]));
    this.timeRanger._secondCurrentValue = radio;
  }

  [sliderColorProperty.setNative](value: string) {
    this.timeRanger._unfilledColor = new Color(value).ios;
  }

  [clockLabelColorProperty.setNative](value: string) {
    this.labelColors = new Color(value);
    this.timeRanger._labelColor = new Color(value).ios;
  }

  [clockTickColorProperty.setNative](value: string) {
    console.log('clockTickColor Only for android');
  }

  [maxDurationMinutesProperty.setNative](value: number) {
    console.log('maxDurationMinutes Only for android');
  }

  [sliderRangeColorProperty.setNative](value: string) {
    this.timeRanger._filledColor = new Color(value).ios;
  }

  [thumbColorProperty.setNative](value: string) {
    this.timeRanger._handleColor = new Color(value).ios;
    this.timeRanger._secondHandleColor = new Color(value).ios;
  }

  [sliderRangeGradientEndProperty.setNative](value: string) {
    console.log('sliderRangeGradientEnd Only for android');
  }

  [sliderRangeGradientMiddleProperty.setNative](value: string) {
    console.log('sliderRangeGradientMiddle Only for android');
  }

  [sliderRangeGradientStartProperty.setNative](value: string) {
    console.log('sliderRangeGradientStart Only for android');
  }

  [timeStepMinutesProperty.setNative](value: number) {
    console.log('timeStepMinutes Only for android');
  }

  [clockVisibleProperty.setNative](value: boolean) {
    this.timeRanger._labelColor = value ? this.labelColors.ios : new Color('transparent').ios;
  }

  [clockLabelSizeProperty.setNative](value: number) {
    const font: UIFont = UIFont.systemFontOfSize(value);
    this.timeRanger._labelFont = font;
  }

  [sliderWidthProperty.setNative](value: number) {
    this.timeRanger._lineWidth = value;
  }

  [thumbIconSizeProperty.setNative](value: number) {
    console.log('thumbIconSize Only for android. Temp');
  }

  [thumbSizeProperty.setNative](value: number) {
    this.timeRanger._handleEnlargementPoints = value;
    this.timeRanger._secondHandleEnlargementPoints = value;
  }

  [thumbIconStartResProperty.setNative](value: string) {
    this.imageStart = UIImage.imageNamed(value);
    this.timeRanger._handleImage = this.imageStart;
  }

  [thumbIconEndResProperty.setNative](value: string) {
    this.imageEnd = UIImage.imageNamed(value);
    this.timeRanger._secondHandleImage = this.imageEnd;
  }

  [clockFaceProperty.setNative](value: string) {
    if (value == 'APPLE') {
      this.timeRanger._commaSeparatedLabels = '12,3,6,9';
    } else {
      this.timeRanger._commaSeparatedLabels = '12,1,2,3,4,5,6,7,8,9,10,11';
    }
  }

  [hourFormatProperty.setNative](value: string) {
    console.log('hourForma Only for android');
  }
}
