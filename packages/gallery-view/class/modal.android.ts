@NativeClass()
export class ImagePagerAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<ViewHolder> {
  private images: string[];

  constructor(images: string[]) {
    super();
    this.images = images;
  }

  public onCreateViewHolder(parent: android.view.ViewGroup, viewType: number): ViewHolder {
    const imageView = new android.widget.ImageView(parent.getContext());
    imageView.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT));
    imageView.setScaleType(android.widget.ImageView.ScaleType.CENTER_CROP);
    return new ViewHolder(imageView);
  }

  public onBindViewHolder(holder: ViewHolder, position: number): void {
    com.bumptech.glide.Glide.with(holder.itemView.getContext()).load(this.images[position]).into(holder.imageView);
  }

  public getItemCount(): number {
    return this.images.length;
  }
}

@NativeClass()
class ViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
  public imageView: android.widget.ImageView;

  constructor(itemView: android.view.View) {
    super(itemView);
    this.imageView = itemView as android.widget.ImageView;
  }
}
