import { Color } from '@nativescript/core';
import { IFiles } from '../common';

@NativeClass()
export class SpinnerDataAdapter extends android.widget.BaseAdapter {
  private drawableError: number = -1;
  private drawablePlaceholder: number = -1;
  private mediaLoader: MediaLoader;
  constructor(private files: Array<IFiles>, private context: android.content.Context, private bgColor: string, private textColor: string) {
    super();

    this.drawableError = context.getResources().getIdentifier('error', 'drawable', context.getPackageName());
    this.drawablePlaceholder = context.getResources().getIdentifier('images', 'drawable', context.getPackageName());
    this.mediaLoader = GlideMediaLoader.getInstance();
  }

  public getItemId(param0: number): number {
    return 0;
  }

  public getItem(param0: number) {
    this.files[param0];
  }

  public getCount(): number {
    return this.files.length;
  }

  public getView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View {
    const linearL: android.widget.LinearLayout = new android.widget.LinearLayout(this.context);
    const image: android.widget.ImageView = new android.widget.ImageView(this.context);
    const txt: android.widget.TextView = new android.widget.TextView(this.context);
    linearL.setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
    linearL.setOrientation(android.widget.LinearLayout.HORIZONTAL);
    linearL.setGravity(android.view.Gravity.CENTER_VERTICAL);
    linearL.setBackgroundColor(new Color(this.bgColor).android);
    linearL.addView(image);

    txt.setText(java.lang.String.valueOf(` ${this.files[position].albunName}`));
    txt.setTextSize(19);
    txt.setTextColor(new Color(this.textColor).android);
    this.mediaLoader.loadImage(parent.getContext(), this.files[position].icon, image, 100, 100);
    linearL.addView(txt);
    return linearL;
  }

  public getDropDownView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View {
    const linearL: android.widget.LinearLayout = new android.widget.LinearLayout(this.context);
    const image: android.widget.ImageView = new android.widget.ImageView(this.context);
    const txt: android.widget.TextView = new android.widget.TextView(this.context);
    linearL.setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, 120));
    linearL.setOrientation(android.widget.LinearLayout.HORIZONTAL);
    linearL.setGravity(android.view.Gravity.CENTER_VERTICAL);
    linearL.setBackgroundColor(new Color(this.bgColor).android);
    this.mediaLoader.loadImage(parent.getContext(), this.files[position].icon, image, 100, 100);

    txt.setText(java.lang.String.valueOf(` ${this.files[position].albunName}`));
    txt.setTextSize(19);
    txt.setTextColor(new Color(this.textColor).android);
    linearL.addView(image);
    linearL.addView(txt);
    return linearL;
  }
}

interface MediaLoader {
  loadImage(context: android.content.Context, url: string, imageView: android.widget.ImageView, maxWidt: number, maxHeigth: number);
  loadVideoThumbnail(context: android.content.Context, url: string, imageView: android.widget.ImageView);
  loadGridImage(context: android.content.Context, url: string, imageView: android.widget.ImageView);
  pauseRequests(context: android.content.Context);
  resumeRequests(context: android.content.Context);
}

@NativeClass()
export class GlideMediaLoader implements MediaLoader {
  private static instance: GlideMediaLoader;

  public static getInstance(): GlideMediaLoader {
    if (this.instance == null) {
      this.instance = new GlideMediaLoader();
    }
    return this.instance;
  }

  loadImage(context: android.content.Context, url: string, imageView: android.widget.ImageView, maxWidt: number, maxHeigth: number) {
    com.bumptech.glide.Glide.with(context).load(url).override(maxWidt, maxHeigth).into(imageView);
  }

  loadVideoThumbnail(context: android.content.Context, url: string, imageView: android.widget.ImageView) {
    const drawablePlaceholder = context.getResources().getIdentifier('images', 'drawable', context.getPackageName());
    com.bumptech.glide.Glide.with(context).asBitmap().load(url).override(180, 180).sizeMultiplier(0.5).transform(new com.bumptech.glide.load.resource.bitmap.CenterCrop(), new com.bumptech.glide.load.resource.bitmap.RoundedCorners(20)).placeholder(drawablePlaceholder).into(imageView);
  }

  loadGridImage(context: android.content.Context, url: string, imageView: android.widget.ImageView) {
    const drawablePlaceholder = context.getResources().getIdentifier('images', 'drawable', context.getPackageName());
    com.bumptech.glide.Glide.with(context).load(url).override(200, 200).centerCrop().placeholder(drawablePlaceholder).diskCacheStrategy(com.bumptech.glide.load.engine.DiskCacheStrategy.ALL).skipMemoryCache(false).into(imageView);
  }

  pauseRequests(context: android.content.Context) {
    com.bumptech.glide.Glide.with(context).pauseRequests();
  }

  resumeRequests(context: android.content.Context) {
    com.bumptech.glide.Glide.with(context).resumeRequests();
  }

  clearAll(context: android.content.Context, rv: androidx.recyclerview.widget.RecyclerView) {
    com.bumptech.glide.Glide.with(context).clear(rv);
  }
}
