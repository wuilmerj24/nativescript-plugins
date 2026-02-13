import { Color, ContentView, Property } from '@nativescript/core';

export class UrlPreviewCommon extends ContentView {
  url: string;
  orientation: 'horizontal' | 'vertical';
  bgColor: Color;
  textColor: Color;
  borderRadius: number;
  openLink: boolean;
  android: androidx.cardview.widget.CardView;
  ios: UIView;
}

export const urlProperty = new Property<UrlPreviewCommon, string>({
  name: 'url',
  valueConverter: (value) => value,
});
urlProperty.register(UrlPreviewCommon);

export const orientationProperty = new Property<UrlPreviewCommon, string>({
  name: 'orientation',
  valueConverter: (value) => value.toString(),
});
orientationProperty.register(UrlPreviewCommon);

export const bgColorProperty = new Property<UrlPreviewCommon, Color>({
  name: 'bgColor',
  valueConverter: (value) => new Color(value),
});
bgColorProperty.register(UrlPreviewCommon);

export const textColorProperty = new Property<UrlPreviewCommon, Color>({
  name: 'textColor',
  valueConverter: (value) => new Color(value),
});
textColorProperty.register(UrlPreviewCommon);

export const borderRadiusProperty = new Property<UrlPreviewCommon, number>({
  name: 'borderRadius',
  valueConverter: (value) => +value,
});
borderRadiusProperty.register(UrlPreviewCommon);

export const openLinkProperty = new Property<UrlPreviewCommon, boolean>({
  name: 'openLink',
  valueConverter: (value) => value === 'true',
});
openLinkProperty.register(UrlPreviewCommon);
