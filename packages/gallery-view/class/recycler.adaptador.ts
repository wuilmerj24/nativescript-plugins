import { Color, Utils } from '@nativescript/core';
import { CLog, IFileData } from '../common';
import { GlideMediaLoader } from './spinner.adaptador';

@NativeClass()
export class ViewHolderForListaAndrooid extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
  public img: android.widget.ImageView;
  public radio: android.widget.RadioButton;

  constructor(view: android.view.View, imgId: number, radioId: number) {
    super(view);
    this.img = view.findViewById(imgId) as android.widget.ImageView;
    this.radio = view.findViewById(radioId) as android.widget.RadioButton;

    this.img.setScaleType(android.widget.ImageView.ScaleType.CENTER_CROP);
    this.img.setAdjustViewBounds(false);
  }
}

@NativeClass()
export class ListaAdaptadorForAndroid extends androidx.recyclerview.widget.RecyclerView.Adapter<ViewHolderForListaAndrooid> {
  private itemSize: number;
  private requestManager: com.bumptech.glide.RequestManager;
  private requestOptions: com.bumptech.glide.request.RequestOptions;
  private transformation: com.bumptech.glide.load.MultiTransformation<any>;

  constructor(private files: Array<IFileData>, private colorRadio: string) {
    super();

    const context = Utils.android.getApplicationContext();
    const displayMetrics = context.getResources().getDisplayMetrics();

    this.itemSize = Math.floor(displayMetrics.widthPixels / 5);

    // Glide manager
    this.requestManager = com.bumptech.glide.Glide.with(context);

    // Transformaciones (UNA VEZ)
    const radiusPx = Math.floor(android.util.TypedValue.applyDimension(android.util.TypedValue.COMPLEX_UNIT_DIP, 10, displayMetrics));
    const transformations = new java.util.ArrayList();

    transformations.add(new com.bumptech.glide.load.resource.bitmap.CenterCrop());

    transformations.add(new com.bumptech.glide.load.resource.bitmap.RoundedCorners(radiusPx));

    this.transformation = new com.bumptech.glide.load.MultiTransformation(transformations);

    // RequestOptions (UNA VEZ)
    this.requestOptions = new com.bumptech.glide.request.RequestOptions().override(this.itemSize, this.itemSize).diskCacheStrategy(com.bumptech.glide.load.engine.DiskCacheStrategy.RESOURCE).skipMemoryCache(false).transform(this.transformation).placeholder(android.R.drawable.ic_menu_gallery).error(android.R.drawable.ic_menu_report_image);
  }

  public getItemCount(): number {
    return this.files?.length || 0;
  }

  public onCreateViewHolder(parent: android.view.ViewGroup, viewType: number): ViewHolderForListaAndrooid {
    const context = parent.getContext();

    const fl = new android.widget.FrameLayout(context);
    fl.setLayoutParams(new android.widget.FrameLayout.LayoutParams(this.itemSize, this.itemSize));

    const img = new android.widget.ImageView(context);
    img.setId(android.view.View.generateViewId());
    img.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT));

    const radio = new android.widget.RadioButton(context);
    const radioParams = new android.widget.FrameLayout.LayoutParams(80, 80);
    radioParams.gravity = android.view.Gravity.TOP | android.view.Gravity.END;
    radio.setLayoutParams(radioParams);
    radio.setId(android.view.View.generateViewId());
    radio.setButtonTintList(android.content.res.ColorStateList.valueOf(new Color(this.colorRadio).android));

    fl.addView(img);
    fl.addView(radio);

    return new ViewHolderForListaAndrooid(fl, img.getId(), radio.getId());
  }

  public onBindViewHolder(holder: ViewHolderForListaAndrooid, position: number): void {
    const item = this.files[position];

    holder.radio.setChecked(item.isSelected);

    this.requestManager.load(item.uri).apply(this.requestOptions).into(holder.img);
  }

  public onViewRecycled(holder: ViewHolderForListaAndrooid): void {
    super.onViewRecycled(holder);
    this.requestManager.clear(holder.img);
  }

  // ⚠️ NO usar siempre notifyDataSetChanged
  updateItem(position: number, selected: boolean) {
    this.files[position].isSelected = selected;
    this.notifyItemChanged(position);
  }

  updateData(newItems: Array<IFileData>) {
    const oldSize = this.files.length;

    this.files = newItems;

    if (oldSize > 0) {
      this.notifyItemRangeRemoved(0, oldSize);
    }

    if (newItems.length > 0) {
      this.notifyItemRangeInserted(0, newItems.length);
    }
  }
}
