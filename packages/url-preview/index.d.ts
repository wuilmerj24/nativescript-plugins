import { ContentView } from '@nativescript/core';

export declare class UrlPreview extends ContentView {
  url: string;
  orientation: 'horizontal' | 'vertical';
  bgColor: Color;
  textColor: Color;
  borderRadius: number;
  openLink: boolean;
  android: androidx.cardview.widget.CardView;
  ios: UIView;
}
