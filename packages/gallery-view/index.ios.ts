import { Application, Color, Dialogs, ImageSource, Utils, View } from '@nativescript/core';
import { LanguageController } from './class/language.class';
import { CLog, GalleryViewCommon, GetSetProperty, IFileData, IFiles, IGalleryData, TipoFile } from './common';
import { ELanguage } from './language.enum';
import { MediaStoreiOS } from './class/mediastore.ios';
import { check as checkPermission, openSettings, request as requestPermission, Status } from '@nativescript-community/perms';
import { TapHandler, TapHandlerB } from './class/handlers.class';
import { AlbumSelectorViewController } from './class/albunselector.ios.class';
import { GalleryGridView } from './class/uicollectionview.ios.class';
import { ImagePreviewViewController } from './class/modal.ios';

export interface CollectionViewEvents {
  onItemSelected?: (item: any, position: number, indexPath: NSIndexPath) => void; // Evento cuando se selecciona un ítem
  onScroll?: (offsetX: number, offsetY: number) => void; // Evento cuando se hace scroll
}

export class GalleryView extends GalleryViewCommon {
  public tapEvent: string = 'tap';
  private ref = new WeakRef(this);
  private files: Array<IFiles> = [];
  private mediaStore: MediaStoreiOS;

  @GetSetProperty() public language: ELanguage;
  @GetSetProperty() public file_type: TipoFile;
  @GetSetProperty() public bgColorHeader: string;
  @GetSetProperty() public textcolorHeader: string;
  @GetSetProperty() public maxItemSelect: number;
  @GetSetProperty() public showFooter: boolean;
  @GetSetProperty() public bgColorFooter: string;
  @GetSetProperty() public textColorFooter: string;
  @GetSetProperty() public edit: boolean;
  @GetSetProperty() public preview: boolean;
  @GetSetProperty() colorRadio: string;

  private idioma: LanguageController;
  private handlers = TapHandler.initWithOwner(new WeakRef(this));
  // iOS Views
  headerView: UIView;
  bodyView: UIView;
  footerView: UIView;

  iconImageView: UIImageView;
  titleLabel: UILabel;
  subtitleLabel: UILabel;

  leftButton: UIButton;
  rightButton: UIButton;
  galleryGridView: GalleryGridView;
  // -------------------------------------------------
  // ROOT VIEW
  // -------------------------------------------------
  createNativeView(): Object {
    try {
      this.idioma = new LanguageController(this.language);

      const nativeView = UIView.new();
      nativeView.translatesAutoresizingMaskIntoConstraints = true;

      return nativeView;
    } catch (error) {
      this.ref?.get()?.sendEvent(GalleryView.errorEvent, this, error);
    }
  }

  async initNativeView() {
    try {
      super.initNativeView();
      this.ref?.get()?.sendEvent(GalleryView.loadedEvent, GalleryView);
      const permissionsGranted = await this.checkPerms();
      if (permissionsGranted) {
        CLog('Ambos permisos concedidos');
        this.mediaStore = new MediaStoreiOS();
        const imagenes = await this.mediaStore.getMedia();
        this.files = imagenes;
        if (this.files.length <= 0) {
          this.showCenteredMessage(this.idioma.getTranslation('no_items'));
          return;
        }
        this.createHeader();
        this.createBody();
        this.createFooter();
        this.setupConstraints();
      } else {
        CLog('Uno o ambos permisos denegados');
        await this.solicitarPermisos()
          .then((res) => {
            this.showCenteredMessage(this.idioma.getTranslation('no_permisos'));
            this.ref?.get()?.sendEvent(GalleryView.errorEvent, this, null);
            return;
          })
          .catch((err) => {
            this.ref?.get()?.sendEvent(GalleryView.errorEvent, this, err);
          });
      }
    } catch (error) {
      this.ref?.get()?.sendEvent(GalleryView.errorEvent, this, error);
    }
  }

  private showCenteredMessage(text: string) {
    try {
      const emptyLabel = UILabel.new();
      emptyLabel.translatesAutoresizingMaskIntoConstraints = false;
      emptyLabel.text = text;
      emptyLabel.textAlignment = NSTextAlignment.Center;
      emptyLabel.numberOfLines = 0; // text wrap
      emptyLabel.textColor = UIColor.systemBackgroundColor;
      emptyLabel.font = UIFont.systemFontOfSize(16);

      const container = this.nativeView as UIView;
      container.addSubview(emptyLabel);

      NSLayoutConstraint.activateConstraints([emptyLabel.centerXAnchor.constraintEqualToAnchor(container.centerXAnchor), emptyLabel.centerYAnchor.constraintEqualToAnchor(container.centerYAnchor), emptyLabel.leadingAnchor.constraintGreaterThanOrEqualToAnchorConstant(container.leadingAnchor, 24), emptyLabel.trailingAnchor.constraintLessThanOrEqualToAnchorConstant(container.trailingAnchor, -24)]);
    } catch (error) {
      this.ref?.get()?.sendEvent(GalleryView.errorEvent, this, error);
    }
  }

  private async checkPerms(): Promise<boolean> {
    try {
      const videoPermission = await checkPermission('video', { type: 'always' });
      const photoPermission = await checkPermission('photo', { type: 'always' });
      if (videoPermission == Status.Authorized && photoPermission == Status.Authorized) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      CLog('Error al verificar permisos:', error);
      return false; // Retorna false en caso de error
    }
  }

  async solicitarPermisos(): Promise<boolean> {
    try {
      const videoPermission = await requestPermission('photo', { type: 'always' });
      const photoPermission = await requestPermission('video', { type: 'always' });
      if (videoPermission == Status.Authorized && photoPermission == Status.Authorized) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  tapHandler: any;
  // -------------------------------------------------
  // HEADER
  // -------------------------------------------------
  private createHeader() {
    // this.headerView = UIView.new();
    this.headerView = UIView.alloc().init();
    this.headerView.translatesAutoresizingMaskIntoConstraints = false;
    this.headerView.backgroundColor = UIColor.systemBlueColor;
    if (this.bgColorHeader) {
      this.headerView.backgroundColor = new Color(this.bgColorHeader).ios;
    }

    // Icon
    this.iconImageView = UIImageView.new();
    this.iconImageView.translatesAutoresizingMaskIntoConstraints = false;
    this.iconImageView.image = UIImage.systemImageNamed('photo');
    this.iconImageView.contentMode = UIViewContentMode.ScaleAspectFill;
    this.iconImageView.tintColor = UIColor.whiteColor;
    this.setHeaderIconFromAsset(this.files[0].iconIos);
    // Tamaño fijo 50x50
    NSLayoutConstraint.activateConstraints([this.iconImageView.widthAnchor.constraintEqualToConstant(50), this.iconImageView.heightAnchor.constraintEqualToConstant(50)]);

    // Bordes redondeados
    this.iconImageView.layer.cornerRadius = 5;
    this.iconImageView.clipsToBounds = true;

    // Title
    this.titleLabel = UILabel.new();
    this.titleLabel.translatesAutoresizingMaskIntoConstraints = false;
    this.titleLabel.font = UIFont.boldSystemFontOfSize(17);
    this.titleLabel.text = 'Galería';
    this.titleLabel.textColor = UIColor.whiteColor;
    if (this.textcolorHeader) {
      this.titleLabel.textColor = new Color(this.textcolorHeader).ios;
    }
    this.titleLabel.numberOfLines = 1;
    this.titleLabel.lineBreakMode = NSLineBreakMode.ByTruncatingTail;
    this.titleLabel.textAlignment = NSTextAlignment.Left;

    // Subtitle
    this.subtitleLabel = UILabel.new();
    this.subtitleLabel.translatesAutoresizingMaskIntoConstraints = false;
    this.subtitleLabel.font = UIFont.systemFontOfSize(13);
    this.subtitleLabel.text = `0/${this.maxItemSelect}`;
    this.subtitleLabel.textColor = UIColor.whiteColor.colorWithAlphaComponent(0.8);
    if (this.textcolorHeader) {
      this.subtitleLabel.textColor = new Color(this.textcolorHeader).ios;
    }
    this.subtitleLabel.numberOfLines = 1;
    this.subtitleLabel.lineBreakMode = NSLineBreakMode.ByTruncatingTail;
    this.subtitleLabel.textAlignment = NSTextAlignment.Center;

    this.headerView.addSubview(this.iconImageView);
    this.headerView.addSubview(this.titleLabel);
    this.headerView.addSubview(this.subtitleLabel);
    this.nativeView.addSubview(this.headerView);

    NSLayoutConstraint.activateConstraints([
      // ICON
      this.iconImageView.leadingAnchor.constraintEqualToAnchorConstant(this.headerView.leadingAnchor, 16),
      this.iconImageView.centerYAnchor.constraintEqualToAnchor(this.headerView.centerYAnchor),
      this.iconImageView.widthAnchor.constraintEqualToConstant(50),
      this.iconImageView.heightAnchor.constraintEqualToConstant(50),

      // TITLE (50% del header)
      this.titleLabel.leadingAnchor.constraintEqualToAnchorConstant(this.iconImageView.trailingAnchor, 12),
      this.titleLabel.centerYAnchor.constraintEqualToAnchor(this.headerView.centerYAnchor),
      this.titleLabel.widthAnchor.constraintEqualToAnchorMultiplier(this.headerView.widthAnchor, 0.5),

      // SUBTITLE (resto del espacio)
      this.subtitleLabel.leadingAnchor.constraintEqualToAnchorConstant(this.titleLabel.trailingAnchor, 12),
      this.subtitleLabel.centerYAnchor.constraintEqualToAnchor(this.headerView.centerYAnchor),
      this.subtitleLabel.trailingAnchor.constraintEqualToAnchorConstant(this.headerView.trailingAnchor, -16),
    ]);

    this.headerView.userInteractionEnabled = true;
    this.tapHandler = TapHandlerB.initWithCallback((recognizer: UITapGestureRecognizer) => {
      this.onHeaderTap();
    });
    const tapGesture = UITapGestureRecognizer.alloc().initWithTargetAction(this.tapHandler, 'handleTap');

    tapGesture.numberOfTapsRequired = 1;

    this.headerView.addGestureRecognizer(tapGesture);
  }

  onHeaderTap() {
    try {
      const selectorVC = AlbumSelectorViewController.initWithAlbums(this.files, (album) => {
        console.log(album.albunName);
        this.onAlbumSelected(album);
      });

      selectorVC.modalPresentationStyle = UIModalPresentationStyle.FormSheet;

      const rootVC = Application.ios.rootController;
      rootVC.presentViewControllerAnimatedCompletion(selectorVC, true, null);
    } catch (error) {
      console.log(error);
    }
  }

  private onAlbumSelected(album: IFiles) {
    this.setHeaderIconFromAsset(album.iconIos);
    this.titleLabel.text = album.albunName;
    const newItems = album.data ?? [];
    this.galleryGridView.setItems(newItems);
    this.subtitleLabel.text = `0/${this.maxItemSelect}`;
  }

  // -------------------------------------------------
  // BODY
  // -------------------------------------------------
  private createBody() {
    this.bodyView = UIView.new();
    this.bodyView.translatesAutoresizingMaskIntoConstraints = false;
    this.bodyView.backgroundColor = UIColor.redColor;

    this.nativeView.addSubview(this.bodyView);

    // ⚠️ ASEGURAR DATA VÁLIDA
    const items = this.files[0]?.data ?? [];
    console.log('GRID ITEMS:', items.length);

    this.galleryGridView = GalleryGridView.initWithItems(items);
    this.galleryGridView.setRadioColor(new Color(this.colorRadio).ios);
    // 🔴 OBLIGATORIO
    this.galleryGridView.translatesAutoresizingMaskIntoConstraints = false;

    // 🔴 PRIMERO addSubview
    this.bodyView.addSubview(this.galleryGridView);

    // 🔴 DESPUÉS constraints
    NSLayoutConstraint.activateConstraints([this.galleryGridView.topAnchor.constraintEqualToAnchor(this.bodyView.topAnchor), this.galleryGridView.leadingAnchor.constraintEqualToAnchor(this.bodyView.leadingAnchor), this.galleryGridView.trailingAnchor.constraintEqualToAnchor(this.bodyView.trailingAnchor), this.galleryGridView.bottomAnchor.constraintEqualToAnchor(this.bodyView.bottomAnchor)]);
    Utils.executeOnMainThread(() => {
      this.galleryGridView.collectionView.reloadData();
      this.galleryGridView.setMaxSelectable(this.maxItemSelect);
      this.galleryGridView.setEvents({
        onItemSelected: async (item, position, indexPath) => {
          // 1. Actualizar el contador en la UI
          const selectedItems = this.galleryGridView.getSelectedItems() as IFileData[];
          this.subtitleLabel.text = `${selectedItems.length}/${this.maxItemSelect}`;

          try {
            // 2. Crear el array de objetos con ID e ImageSource
            const results = await Promise.all(
              selectedItems.map(async (file) => {
                const imgSource = await this.convertPHAssetToImageSource(file.asset);
                return {
                  id: file.id, // El localIdentifier que guardaste en MediaStoreiOS
                  image: imgSource,
                };
              })
            );

            // 3. Enviar el evento con el nuevo array estructurado
            this.ref?.get()?.sendEvent(GalleryView.clickEvent, results);
          } catch (error) {
            // Enviar el evento de error si algo falla en la conversión
            this.ref?.get()?.sendEvent(GalleryView.errorEvent, {
              message: 'Error al convertir assets',
              error: error,
            });
          }
        },
        onScroll: (offsetX, offsetY) => {
          this.ref?.get()?.sendEvent(GalleryView.scrollEvent, this.galleryGridView.getSelectedItems(), null, offsetX, offsetY);
        },
      });
    });
  }

  private convertPHAssetToImageSource(asset: PHAsset): Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      const manager = PHImageManager.defaultManager();
      const options = PHImageRequestOptions.new();

      options.synchronous = false;
      options.networkAccessAllowed = true; // Importante para fotos en iCloud
      options.deliveryMode = PHImageRequestOptionsDeliveryMode.HighQualityFormat;

      // Pedimos un tamaño de 300x300 para que sea rápido pero se vea bien
      const targetSize = CGSizeMake(300, 300);

      manager.requestImageForAssetTargetSizeContentModeOptionsResultHandler(asset, targetSize, PHImageContentMode.AspectFill, options, (image: UIImage, info: NSDictionary<any, any>) => {
        if (image) {
          resolve(new ImageSource(image));
        } else {
          // Si falla (ej. sin internet para iCloud), devolvemos null o error
          resolve(null);
        }
      });
    });
  }

  // -------------------------------------------------
  // FOOTER
  // -------------------------------------------------
  private createFooter() {
    if (!this.showFooter) return; // Si no hay footer, no hacemos nada aquí

    this.footerView = UIView.new();
    this.footerView.translatesAutoresizingMaskIntoConstraints = false;
    this.footerView.backgroundColor = UIColor.systemBackgroundColor;
    if (this.bgColorFooter) {
      this.footerView.backgroundColor = new Color(this.bgColorFooter).ios;
    }

    this.leftButton = UIButton.buttonWithType(this.preview ? UIButtonType.System : UIButtonType.Plain);
    this.leftButton.translatesAutoresizingMaskIntoConstraints = false;
    this.leftButton.addTargetActionForControlEvents(this.handlers, 'openPreview', UIControlEvents.TouchUpInside);
    this.leftButton.setTitleForState(this.idioma.getTranslation('titulo_btn_preview'), UIControlState.Normal);
    this.leftButton.setTitleColorForState(new Color(this.textColorFooter).ios, UIControlState.Normal);
    if (this.preview) {
      this.footerView.addSubview(this.leftButton);
    }
    this.rightButton = UIButton.buttonWithType(this.edit ? UIButtonType.System : UIButtonType.Plain);
    this.rightButton.translatesAutoresizingMaskIntoConstraints = false;
    this.rightButton.addTargetActionForControlEvents(this.handlers, 'openEdit', UIControlEvents.TouchUpInside);
    this.rightButton.setTitleForState(this.idioma.getTranslation('titulo_btn_edit'), UIControlState.Normal);
    this.rightButton.setTitleColorForState(new Color(this.textColorFooter).ios, UIControlState.Normal);
    if (this.edit) {
      this.footerView.addSubview(this.rightButton);
    }

    this.nativeView.addSubview(this.footerView);
  }

  // -------------------------------------------------
  // CONSTRAINTS
  // -------------------------------------------------

  private setupConstraints() {
    const container = this.nativeView as UIView;

    // 1. HEADER (Este sí suele respetar el Safe Area superior por el notch/isla dinámica)
    NSLayoutConstraint.activateConstraints([this.headerView.topAnchor.constraintEqualToAnchor(container.safeAreaLayoutGuide.topAnchor), this.headerView.leadingAnchor.constraintEqualToAnchor(container.leadingAnchor), this.headerView.trailingAnchor.constraintEqualToAnchor(container.trailingAnchor), this.headerView.heightAnchor.constraintEqualToConstant(70)]);

    if (this.showFooter && this.footerView) {
      // 1. Constraints base del Footer (Borde real de pantalla)
      NSLayoutConstraint.activateConstraints([this.footerView.leadingAnchor.constraintEqualToAnchor(container.leadingAnchor), this.footerView.trailingAnchor.constraintEqualToAnchor(container.trailingAnchor), this.footerView.bottomAnchor.constraintEqualToAnchor(container.bottomAnchor), this.footerView.heightAnchor.constraintEqualToConstant(85)]);

      // 2. Lógica de botones
      if (this.preview && this.edit) {
        // AMBOS BOTONES: 50/50
        NSLayoutConstraint.activateConstraints([this.leftButton.leadingAnchor.constraintEqualToAnchor(this.footerView.leadingAnchor), this.leftButton.topAnchor.constraintEqualToAnchor(this.footerView.topAnchor), this.leftButton.bottomAnchor.constraintEqualToAnchor(this.footerView.safeAreaLayoutGuide.bottomAnchor), this.rightButton.trailingAnchor.constraintEqualToAnchor(this.footerView.trailingAnchor), this.rightButton.topAnchor.constraintEqualToAnchor(this.footerView.topAnchor), this.rightButton.bottomAnchor.constraintEqualToAnchor(this.footerView.safeAreaLayoutGuide.bottomAnchor), this.leftButton.widthAnchor.constraintEqualToAnchor(this.rightButton.widthAnchor), this.rightButton.leadingAnchor.constraintEqualToAnchor(this.leftButton.trailingAnchor)]);
      } else if (this.preview) {
        // SOLO LEFT BUTTON: Anclado a la izquierda, ocupa la mitad
        NSLayoutConstraint.activateConstraints([this.leftButton.leadingAnchor.constraintEqualToAnchor(this.footerView.leadingAnchor), this.leftButton.topAnchor.constraintEqualToAnchor(this.footerView.topAnchor), this.leftButton.bottomAnchor.constraintEqualToAnchor(this.footerView.safeAreaLayoutGuide.bottomAnchor), this.leftButton.widthAnchor.constraintEqualToAnchorMultiplier(this.footerView.widthAnchor, 0.5)]);
      } else if (this.edit) {
        // SOLO RIGHT BUTTON: Anclado a la derecha, ocupa la mitad
        NSLayoutConstraint.activateConstraints([this.rightButton.trailingAnchor.constraintEqualToAnchor(this.footerView.trailingAnchor), this.rightButton.topAnchor.constraintEqualToAnchor(this.footerView.topAnchor), this.rightButton.bottomAnchor.constraintEqualToAnchor(this.footerView.safeAreaLayoutGuide.bottomAnchor), this.rightButton.widthAnchor.constraintEqualToAnchorMultiplier(this.footerView.widthAnchor, 0.5)]);
      }

      // 3. BODY anclado al tope del footer
      NSLayoutConstraint.activateConstraints([this.bodyView.topAnchor.constraintEqualToAnchor(this.headerView.bottomAnchor), this.bodyView.leadingAnchor.constraintEqualToAnchor(container.leadingAnchor), this.bodyView.trailingAnchor.constraintEqualToAnchor(container.trailingAnchor), this.bodyView.bottomAnchor.constraintEqualToAnchor(this.footerView.topAnchor)]);
    }
  }

  // -------------------------------------------------
  // API PÚBLICA
  // -------------------------------------------------

  private setHeaderIconFromAsset(asset: PHAsset) {
    const manager = PHImageManager.defaultManager();
    const options = PHImageRequestOptions.new();
    options.deliveryMode = PHImageRequestOptionsDeliveryMode.HighQualityFormat;
    options.resizeMode = PHImageRequestOptionsResizeMode.Fast;
    options.networkAccessAllowed = true;

    manager.requestImageForAssetTargetSizeContentModeOptionsResultHandler(asset, CGSizeMake(50, 50), PHImageContentMode.AspectFit, options, (image: UIImage, info) => {
      if (image) {
        this.iconImageView.image = image;
      }
    });
  }

  private onPreviewDismissed() {
    Utils.executeOnMainThread(() => {
      // 🔴 CLAVE: el botón invisible se queda capturando el primer tap
      // Forzamos layout
      this.nativeView.layoutIfNeeded();

      const selectedCount = this.galleryGridView.getSelectedIds().length;
      this.subtitleLabel.text = `${selectedCount}/${this.maxItemSelect}`;
    });
  }

  private resetCollectionViewGestures() {
    const gestures = this.galleryGridView.collectionView.gestureRecognizers;
    if (!gestures) {
      return;
    }

    for (let i = 0; i < gestures.count; i++) {
      const g = gestures.objectAtIndex(i) as UIGestureRecognizer;
      g.enabled = false;
      g.enabled = true;
    }
  }

  public openPreview() {
    const selectedItems: IFileData[] = this.galleryGridView.getSelectedItems();

    if (!selectedItems.length) {
      return;
    }
    const previewVC = ImagePreviewViewController.initWithItems(selectedItems);

    previewVC.modalPresentationStyle = UIModalPresentationStyle.FormSheet;
    previewVC.onDismiss = () => {
      console.log('se cerro la modal');
      this.onPreviewDismissed();
    };

    Application.ios.rootController.presentViewControllerAnimatedCompletion(previewVC, true, () => {
      console.log('abrio la modal');
    });
  }
}
