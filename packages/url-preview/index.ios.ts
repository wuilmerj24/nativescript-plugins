import { Color, EventData, Screen, Utils } from '@nativescript/core';
import { bgColorProperty, borderRadiusProperty, openLinkProperty, orientationProperty, textColorProperty, UrlPreviewCommon, urlProperty } from './common';

export class UrlPreview extends UrlPreviewCommon {
  private imageView: UIImageView;
  private titleLabel: UILabel;
  private descriptionLabel: UILabel;
  private metadataProvider: LPMetadataProvider;

  createNativeView(): Object {
    const width = Screen.mainScreen.widthDIPs - 20;
    const container = UIView.alloc().initWithFrame(CGRectMake(10, 30, width, 0));
    container.layer.masksToBounds = false;
    container.accessibilityIdentifier = this.generateId('card');
    container.translatesAutoresizingMaskIntoConstraints = true;
    container.layer.cornerRadius = 12;
    container.layer.masksToBounds = true;
    container.accessibilityIdentifier = this.generateId('card');
    // ===== Imagen =====
    this.imageView = UIImageView.alloc().init();
    this.imageView.translatesAutoresizingMaskIntoConstraints = false;
    this.imageView.contentMode = UIViewContentMode.ScaleToFill;
    this.imageView.clipsToBounds = true;
    // this.imageView.backgroundColor = UIColor.lightGrayColor; // placeholder
    this.imageView.accessibilityIdentifier = this.generateId('image');

    // ===== Título =====
    this.titleLabel = UILabel.alloc().init();
    this.titleLabel.translatesAutoresizingMaskIntoConstraints = false;
    this.titleLabel.font = UIFont.boldSystemFontOfSize(16);
    // this.titleLabel.textColor = UIColor.blackColor;
    this.titleLabel.numberOfLines = 2;
    this.titleLabel.accessibilityIdentifier = this.generateId('title');

    // ===== Descripción =====
    this.descriptionLabel = UILabel.alloc().init();
    this.descriptionLabel.translatesAutoresizingMaskIntoConstraints = false;
    this.descriptionLabel.font = UIFont.systemFontOfSize(13);
    // this.descriptionLabel.textColor = UIColor.darkGrayColor;
    this.descriptionLabel.numberOfLines = 3;
    this.descriptionLabel.accessibilityIdentifier = this.generateId('desc');

    container.addSubview(this.imageView);
    container.addSubview(this.titleLabel);
    container.addSubview(this.descriptionLabel);

    return container;
  }

  private applyVerticalLayout(container: UIView, imageView: UIImageView, titleLabel: UILabel, descriptionLabel: UILabel) {
    console.log('orientation', this.orientation);
    NSLayoutConstraint.activateConstraints([
      // Imagen arriba
      imageView.topAnchor.constraintEqualToAnchor(container.topAnchor),
      imageView.leadingAnchor.constraintEqualToAnchor(container.leadingAnchor),
      imageView.trailingAnchor.constraintEqualToAnchor(container.trailingAnchor),
      imageView.heightAnchor.constraintEqualToConstant(150),

      // Título
      titleLabel.topAnchor.constraintEqualToAnchorConstant(imageView.bottomAnchor, 8),
      titleLabel.leadingAnchor.constraintEqualToAnchorConstant(container.leadingAnchor, 12),
      titleLabel.trailingAnchor.constraintEqualToAnchorConstant(container.trailingAnchor, -12),

      // Descripción
      descriptionLabel.topAnchor.constraintEqualToAnchorConstant(titleLabel.bottomAnchor, 4),
      descriptionLabel.leadingAnchor.constraintEqualToAnchorConstant(container.leadingAnchor, 12),
      descriptionLabel.trailingAnchor.constraintEqualToAnchorConstant(container.trailingAnchor, -12),
      descriptionLabel.bottomAnchor.constraintLessThanOrEqualToAnchorConstant(container.bottomAnchor, -12),
    ]);
  }

  private applyHorizontalLayout(container: UIView, imageView: UIImageView, titleLabel: UILabel, descriptionLabel: UILabel) {
    NSLayoutConstraint.activateConstraints([
      // Imagen izquierda
      imageView.leadingAnchor.constraintEqualToAnchor(container.leadingAnchor),
      imageView.topAnchor.constraintEqualToAnchor(container.topAnchor),
      imageView.bottomAnchor.constraintEqualToAnchor(container.bottomAnchor),
      imageView.widthAnchor.constraintEqualToConstant(120),

      // Título derecha arriba
      titleLabel.topAnchor.constraintEqualToAnchorConstant(container.topAnchor, 12),
      titleLabel.leadingAnchor.constraintEqualToAnchorConstant(imageView.trailingAnchor, 12),
      titleLabel.trailingAnchor.constraintEqualToAnchorConstant(container.trailingAnchor, -12),

      // Descripción debajo del título
      descriptionLabel.topAnchor.constraintEqualToAnchorConstant(titleLabel.bottomAnchor, 4),
      descriptionLabel.leadingAnchor.constraintEqualToAnchorConstant(imageView.trailingAnchor, 12),
      descriptionLabel.trailingAnchor.constraintEqualToAnchorConstant(container.trailingAnchor, -12),
      descriptionLabel.bottomAnchor.constraintLessThanOrEqualToAnchorConstant(container.bottomAnchor, -12),
    ]);
  }

  onUnloaded(): void {
    super.onUnloaded();
    // Cancelar fetch si la vista muere
    if (this.metadataProvider) {
      this.metadataProvider.cancel();
      this.metadataProvider = null;
    }
  }

  private loadUrlPreview(url: string, imageView: UIImageView, titleLabel: UILabel, descriptionLabel: UILabel) {
    if (!LPMetadataProvider) {
      console.log('LPMetadataProvider not available (iOS < 13)');
      return;
    }

    const nsUrl = NSURL.URLWithString(url);
    if (!nsUrl) return;

    // 🔒 RETENER provider (MUY IMPORTANTE)
    this.metadataProvider = LPMetadataProvider.new();

    this.metadataProvider.startFetchingMetadataForURLCompletionHandler(nsUrl, (metadata: LPLinkMetadata, error: NSError) => {
      if (error || !metadata) {
        console.log('LPMetadata error:', error?.localizedDescription);
        return;
      }
      NSOperationQueue.mainQueue.addOperationWithBlock(() => {
        // Título
        if (metadata.title) {
          titleLabel.text = metadata.title;
        }

        // Descripción
        // ===== DESCRIPCIÓN CORRECTA =====
        let descriptionText: string = null;

        // iOS 15+
        if ((metadata as any).summary) {
          descriptionText = (metadata as any).summary;
        }

        // fallback
        if (!descriptionText && metadata.originalURL) {
          descriptionText = metadata.originalURL.host;
        }

        // aplicar
        if (descriptionText) {
          descriptionLabel.text = descriptionText;
        } else {
          descriptionLabel.text = '';
        }

        // Imagen
        if (metadata.imageProvider) {
          metadata.imageProvider.loadObjectOfClassCompletionHandler(UIImage.class(), (image: UIImage, imgError: NSError) => {
            if (image) {
              NSOperationQueue.mainQueue.addOperationWithBlock(() => {
                imageView.image = image;
              });
            }
          });
        }
      });
    });
  }

  // @ts-ignore
  get ios(): UIView {
    return this.nativeView;
  }

  [urlProperty.setNative](value: string) {
    this.url = value;
    this.loadUrlPreview(this.url, this.imageView, this.titleLabel, this.descriptionLabel);
  }

  [orientationProperty.setNative](value: 'horizontal' | 'vertical') {
    this.orientation = value || 'horizontal';
    if (this.orientation == 'horizontal') {
      this.applyHorizontalLayout(this.ios, this.imageView, this.titleLabel, this.descriptionLabel);
    } else if (this.orientation == 'vertical') {
      this.applyVerticalLayout(this.ios, this.imageView, this.titleLabel, this.descriptionLabel);
    }
  }

  [bgColorProperty.setNative](value: Color) {
    this.bgColor = value;
    this.ios.backgroundColor = this.bgColor.ios;
  }

  [textColorProperty.setNative](value: Color) {
    this.textColor = value;
    this.titleLabel.textColor = this.textColor.ios;
    this.descriptionLabel.textColor = this.textColor.ios;
  }

  [borderRadiusProperty.setNative](value: number) {
    this.borderRadius = value;
    this.ios.layer.cornerRadius = this.borderRadius;
  }

  [openLinkProperty.setNative](value: boolean) {
    this.openLink = value;
    if (value) {
      this.addEventListener('tap', (args: EventData) => {
        Utils.openUrl(this.url);
      });
    }
  }

  disposeNativeView(): void {
    super.disposeNativeView();
    this.removeEventListener('tap');
  }

  private generateId(prefix: string): string {
    const random = Math.random().toString(36).substring(2, 10).toUpperCase(); // 8 caracteres
    return `${prefix}_${random}`;
  }
}
