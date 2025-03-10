import { Color, Utils } from '@nativescript/core';
import { CLog, IFileData } from '../common';
import { GlideMediaLoader } from './spinner.adaptador';

@NativeClass()
export class ViewHolderForListaAndrooid extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
  public img: android.widget.ImageView;
  public radio: android.widget.RadioButton;
  constructor(private view: android.view.View, private imgId: number, private radioId: number) {
    super(view);
    this.img = this.itemView.findViewById(imgId) as android.widget.ImageView;
    this.radio = this.itemView.findViewById(radioId) as android.widget.RadioButton;
  }
}
@NativeClass()
export class ListaAdaptadorForAndroid extends androidx.recyclerview.widget.RecyclerView.Adapter<ViewHolderForListaAndrooid> {
  private drawablePlaceholder: number = -1;
  private itemSize: number;
  private mediaLoader: GlideMediaLoader;
  constructor(private files: Array<IFileData>, private colorRadio: string) {
    super();
    const displayMetrics = Utils.android.getApplicationContext().getResources().getDisplayMetrics();
    this.itemSize = Math.floor(displayMetrics.widthPixels / 5) - 10; // Calcula el tamaño del item
    this.mediaLoader = GlideMediaLoader.getInstance();
  }

  public getItemCount(): number {
    return this.files?.length || 0;
  }

  public onCreateViewHolder(parent: android.view.ViewGroup, viewType: number): ViewHolderForListaAndrooid {
    const context = parent.getContext();

    // Crear contenedor FrameLayout
    const fl = new android.widget.FrameLayout(context);
    const layoutParams = new android.widget.FrameLayout.LayoutParams(this.itemSize, this.itemSize);
    fl.setLayoutParams(layoutParams);
    fl.setPadding(5, 5, 5, 5);
    fl.setBackgroundColor(android.graphics.Color.BLACK);

    // Imagen con Glide
    const img = new android.widget.ImageView(context);
    img.setId(android.view.View.generateViewId());
    img.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT));
    img.setScaleType(android.widget.ImageView.ScaleType.CENTER_CROP);

    // RadioButton en la esquina superior derecha
    const radiobtn = new android.widget.RadioButton(context);
    const radioParams = new android.widget.FrameLayout.LayoutParams(80, 80);
    radioParams.gravity = android.view.Gravity.TOP | android.view.Gravity.END;
    radiobtn.setLayoutParams(radioParams);
    radiobtn.setId(android.view.View.generateViewId());
    radiobtn.setButtonTintList(android.content.res.ColorStateList.valueOf(new Color(this.colorRadio).android));

    // Agregar vistas al FrameLayout
    fl.addView(img);
    fl.addView(radiobtn);

    return new ViewHolderForListaAndrooid(fl, img.getId(), radiobtn.getId());
  }

  public onBindViewHolder(holder: ViewHolderForListaAndrooid, position: number): void {
    try {
      const item = this.files[position];

      // Setear selección del RadioButton
      holder.radio.setChecked(item.isSelected);

      this.mediaLoader.loadGridImage(holder.itemView.getContext(), item.uri, holder.img);
    } catch (error) {
      CLog('Error en Glide:', error);
    }
  }

  public onDetachedFromRecyclerView(param0: androidx.recyclerview.widget.RecyclerView): void {
    super.onDetachedFromRecyclerView(param0);
  }

  updateData(newItems: any[]) {
    this.files = newItems;
    this.notifyDataSetChanged(); // Recarga toda la lista
  }
}
