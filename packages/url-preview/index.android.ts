import { Color, EventData, Utils } from '@nativescript/core';
import { bgColorProperty, borderRadiusProperty, openLinkProperty, orientationProperty, textColorProperty, UrlPreviewCommon, urlProperty } from './common';

declare var wuilmerj24;

export class UrlPreview extends UrlPreviewCommon {
  private root: android.widget.LinearLayout;

  private image: android.widget.ImageView;
  private title: android.widget.TextView;
  private desc: android.widget.TextView;
  private footer: android.widget.TextView;
  private textCol: android.widget.LinearLayout;
  private skeletons: android.view.View[] = [];
  private shimmerAnim: android.animation.ValueAnimator;

  createNativeView(): Object {
    const card = new androidx.cardview.widget.CardView(this._context);
    card.setCardElevation(this.dp(2));
    card.setUseCompatPadding(true);
    this.root = new android.widget.LinearLayout(this._context);
    this.root.setPadding(this.dp(8), this.dp(8), this.dp(8), this.dp(8));
    this.root.setBackgroundColor(android.graphics.Color.TRANSPARENT);
    card.addView(this.root);

    // IMAGE
    this.image = new android.widget.ImageView(this._context);
    this.image.setScaleType(android.widget.ImageView.ScaleType.CENTER_CROP);

    const imageRadius = new android.graphics.drawable.GradientDrawable();
    imageRadius.setCornerRadius(this.dp(8));
    imageRadius.setColor(android.graphics.Color.parseColor('#2f3136'));
    this.image.setBackground(imageRadius);
    this.image.setClipToOutline(true);

    // TEXT COLUMN
    this.textCol = new android.widget.LinearLayout(this._context);
    this.textCol.setOrientation(android.widget.LinearLayout.VERTICAL);

    this.title = new android.widget.TextView(this._context);
    this.title.setTextColor(android.graphics.Color.WHITE);
    this.title.setTextSize(15);
    this.title.setTypeface(null, android.graphics.Typeface.BOLD);
    this.title.setMaxLines(2);
    this.textCol.addView(this.title);

    this.desc = new android.widget.TextView(this._context);
    this.desc.setTextColor(android.graphics.Color.parseColor('#b9bbbe'));
    this.desc.setTextSize(13);
    this.desc.setMaxLines(3);
    this.textCol.addView(this.desc);

    this.footer = new android.widget.TextView(this._context);
    this.footer.setTextSize(12);
    this.footer.setTextColor(android.graphics.Color.parseColor('#72767d'));
    this.footer.setPadding(0, this.dp(4), 0, 0);
    this.textCol.addView(this.footer);
    // ---------- SKELETONS ----------
    const imgSkeleton = this.createSkeleton(this._context, this.dp(72), this.dp(72));
    const titleSkeleton = this.createSkeleton(this._context, this.dp(180), this.dp(14));
    const descSkeleton = this.createSkeleton(this._context, this.dp(220), this.dp(12));

    this.skeletons.push(imgSkeleton, titleSkeleton, descSkeleton);

    // Ocultamos contenido real al inicio
    this.image.setVisibility(android.view.View.INVISIBLE);
    this.title.setVisibility(android.view.View.INVISIBLE);
    this.desc.setVisibility(android.view.View.INVISIBLE);
    this.footer.setVisibility(android.view.View.INVISIBLE);

    return card;
  }

  private dp(v: number): number {
    return Math.round(v * android.content.res.Resources.getSystem().getDisplayMetrics().density);
  }

  private createSkeleton(ctx: android.content.Context, w: number, h: number): android.view.View {
    const v = new android.view.View(ctx);
    const bg = new android.graphics.drawable.GradientDrawable();
    bg.setCornerRadius(this.dp(6));
    bg.setColor(android.graphics.Color.parseColor('#1e1f22'));
    v.setBackground(bg);
    v.setLayoutParams(new android.widget.LinearLayout.LayoutParams(w, h));
    return v;
  }

  private applyOrientation() {
    if (!this.root || !this.image || !this.textCol) return;

    this.root.removeAllViews();

    if (this.orientation === 'vertical') {
      // ===== VERTICAL =====
      this.root.setOrientation(android.widget.LinearLayout.VERTICAL);
      this.root.setGravity(android.view.Gravity.CENTER_HORIZONTAL);

      this.image.setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, this.dp(180)));

      this.textCol.setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));

      this.textCol.setPadding(0, this.dp(10), 0, 0);
      this.textCol.setGravity(android.view.Gravity.CENTER_HORIZONTAL);

      this.title.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
      this.desc.setGravity(android.view.Gravity.CENTER_HORIZONTAL);

      this.root.addView(this.image);
      this.root.addView(this.textCol);
      this.footer.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
    } else {
      // ===== HORIZONTAL =====
      this.root.setOrientation(android.widget.LinearLayout.HORIZONTAL);
      this.root.setGravity(android.view.Gravity.CENTER_VERTICAL);

      this.image.setLayoutParams(new android.widget.LinearLayout.LayoutParams(this.dp(72), this.dp(72)));

      this.textCol.setLayoutParams(new android.widget.LinearLayout.LayoutParams(0, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1));

      this.textCol.setPadding(this.dp(12), 0, 0, 0);
      this.textCol.setGravity(android.view.Gravity.CENTER_VERTICAL);

      this.title.setGravity(android.view.Gravity.START);
      this.desc.setGravity(android.view.Gravity.START);

      this.root.addView(this.image);
      this.root.addView(this.textCol);
      this.footer.setGravity(android.view.Gravity.START);
    }
  }
  private fetcher;

  onLoaded(): void {
    super.onLoaded();
    this.fetcher = new wuilmerj24.plugins.ns.UrlPreviewFetcher();
  }

  onUnloaded() {
    super.onUnloaded();
    // limpiar shimmer
    this.shimmerAnim?.cancel();
    this.skeletons.forEach((v) => v.setVisibility(android.view.View.GONE));
    this.skeletons = [];
  }

  // ---------- SHIMMER ----------
  private startShimmer() {
    this.shimmerAnim = android.animation.ValueAnimator.ofFloat(Array.create('float', 2));

    this.shimmerAnim.setDuration(900);
    this.shimmerAnim.setRepeatCount(android.animation.ValueAnimator.INFINITE);

    this.shimmerAnim.addUpdateListener(
      new android.animation.ValueAnimator.AnimatorUpdateListener({
        onAnimationUpdate: (anim) => {
          const v = anim.getAnimatedValue() as number;

          this.skeletons.forEach((view) => {
            const w = view.getWidth() || 200;

            const colors = Array.create('int', 3);
            colors[0] = android.graphics.Color.parseColor('#1e1f22');
            colors[1] = android.graphics.Color.parseColor('#2b2d31');
            colors[2] = android.graphics.Color.parseColor('#1e1f22');

            const positions = Array.create('float', 3);

            positions[0] = 0.0;
            positions[1] = 0.5;
            positions[2] = 1.0;

            const shader = new android.graphics.LinearGradient(-w + 2 * w * v, 0, 2 * w * v, 0, colors, positions, android.graphics.Shader.TileMode.CLAMP);

            const paint = new android.graphics.Paint();
            paint.setShader(shader);

            view.setLayerType(android.view.View.LAYER_TYPE_HARDWARE, paint);
          });
        },
      })
    );

    this.shimmerAnim.start();
  }

  private stopShimmer() {
    this.shimmerAnim?.cancel();
    this.skeletons.forEach((v) => v.setVisibility(android.view.View.GONE));
  }

  private showContent() {
    this.stopShimmer();
    this.title.setVisibility(android.view.View.VISIBLE);
    this.desc.setVisibility(android.view.View.VISIBLE);
    this.footer.setVisibility(android.view.View.VISIBLE);
  }

  private loadImage(view: android.widget.ImageView, url: string) {
    const transition = com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions.withCrossFade(300);

    com.bumptech.glide.Glide.with(view.getContext()).load(url).transition(transition).centerCrop().into(view);

    view.setVisibility(android.view.View.VISIBLE);
  }

  // @ts-ignore
  get android(): androidx.cardview.widget.CardView {
    return this.nativeView;
  }

  [urlProperty.setNative](value: string) {
    this.url = value;
    Utils.setTimeout(() => {
      this.fetcher.fetch(
        this.url,
        new wuilmerj24.plugins.ns.UrlPreviewFetcher.Callback({
          onResult: (result: any, error: string) => {
            if (error) return;

            const data = Utils.dataDeserialize(result);

            // IMAGE
            if (data.image) {
              this.loadImage(this.image, data.image);
            } else {
              this.image.setVisibility(android.view.View.GONE);
            }

            this.title.setText(data.title || '');
            // this.title.setTextColor(this.textColor);
            let description = data.description;

            if (!description && data.isVideo && data.siteName?.toLowerCase().includes('youtube')) {
              description = 'Toca para ver el video';
            }

            if (description) {
              this.desc.setText(description);
              this.desc.setVisibility(android.view.View.VISIBLE);
            } else {
              this.desc.setVisibility(android.view.View.GONE);
            }

            // this.desc.setTextColor(this.textColor);

            const footer = [];
            if (data.isVideo) footer.push('🎥 Video');
            if (data.siteName) footer.push(data.siteName);
            this.footer.setText(footer.join(' • '));
            // this.footer.setTextColor(this.textColor);
            this.showContent();

            const ctx = this._context;
            const target = data.videoUrl || data.url || this.url;
          },
        })
      );
    }, 500);
  }

  [orientationProperty.setNative](value: string) {
    if (value == 'vertical') {
      this.orientation = 'vertical';
    } else if (value == 'horizontal') {
      this.orientation = 'horizontal';
    }
    this.applyOrientation();
  }

  [bgColorProperty.setNative](value: Color) {
    this.bgColor = value;
    this.android.setCardBackgroundColor(this.bgColor.android);
  }

  [textColorProperty.setNative](value: Color) {
    this.textColor = value;
    this.title.setTextColor(this.textColor.android);
    this.desc.setTextColor(this.textColor.android);
  }

  [borderRadiusProperty.setNative](value: number) {
    this.borderRadius = value;
    this.android.setCardElevation(10);
    this.android.setRadius(this.dp(this.borderRadius));
  }

  [openLinkProperty.setNative](value: boolean) {
    this.openLink = value;
    this.off('tap');

    if (value) {
      this.on('tap', (args: EventData) => {
        if (this.url) {
          Utils.openUrl(this.url);
        }
      });
    }
  }
}
