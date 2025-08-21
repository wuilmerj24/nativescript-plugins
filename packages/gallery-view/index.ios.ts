import { Application, Color, ObservableArray, Screen, Utils, View } from '@nativescript/core';
import { LanguageController } from './class/language.class';
import { CLog, GalleryViewCommon, GetSetProperty, IFileData, IFiles, TipoFile } from './common';
import { ELanguage } from './language.enum';
import { check as checkPermission, openSettings, request as requestPermission, Status } from '@nativescript-community/perms';
import { MediaStoreiOS } from './class/mediastore.ios';
import { CollectionViewDataSourceDelegate } from './class/uiviewcontroller';
import { ImageModal } from './class/modal.ios';

export interface CollectionViewEvents {
  onItemSelected?: (item: any, position: number, indexPath: NSIndexPath) => void; // Evento cuando se selecciona un ítem
  onScroll?: (offsetX: number, offsetY: number) => void; // Evento cuando se hace scroll
}

export interface CloseModalEvento {
  onClose?: () => boolean;
}

export class GalleryView extends GalleryViewCommon {
  public tapEvent: string = 'tap';
  private spinner: UIButton;
  private contador: UILabel;
  private handler = TapHandler.initWithOwner(new WeakRef(this));
  // private files: Array<IFiles> = new Array();
  private files: ObservableArray<IFiles> = new ObservableArray();
  private mediaStore: MediaStoreiOS;
  private cv: UICollectionView;
  private footer: UIView;
  private btnPreview: UIButton;
  @GetSetProperty()
  public language: ELanguage;
  @GetSetProperty()
  public file_type: TipoFile;
  @GetSetProperty()
  public showHeader: boolean;
  @GetSetProperty()
  public bgColorHeader: string;
  @GetSetProperty()
  public textcolorHeader: string;
  @GetSetProperty()
  public maxItemSelect: number;
  @GetSetProperty()
  public showFooter: boolean;
  @GetSetProperty()
  public bgColorFooter: string;
  @GetSetProperty()
  public textColorFooter: string;
  @GetSetProperty()
  public edit: boolean;
  @GetSetProperty()
  public preview: boolean;
  @GetSetProperty()
  colorRadio: string;
  // VARIABLES locals
  private idioma: LanguageController;
  private events: CollectionViewEvents;
  private dataSource;
  private imageButton: UIImageView;
  private ref = new WeakRef(this);
  constructor() {
    super();
    this.iosIgnoreSafeArea = true;
  }

  createNativeView(): UIView {
    this.idioma = new LanguageController(this.language);
    this.nativeView = UIView.new();
    (this.nativeView as UIView).translatesAutoresizingMaskIntoConstraints = false;
    const isDark = (this.nativeView as UIView).traitCollection.userInterfaceStyle;
    (this.nativeView as UIView).backgroundColor = isDark == 2 ? UIColor.blackColor : UIColor.whiteColor;
    return this.nativeView;
  }

  async onLoaded() {
    super.onLoaded();
    const permissionsGranted = await this.checkPerms();
    if (permissionsGranted) {
      CLog('Ambos permisos concedidos');
      Utils.setTimeout(() => {
        this.renderUI();
      }, 10);
    } else {
      CLog('Uno o ambos permisos denegados');
      await this.solicitarPermisos()
        .then((res) => {
          this.renderUI();
        })
        .catch((err) => {});
    }
  }

  async checkPerms(): Promise<boolean> {
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

  private async renderUI() {
    try {
      this.ref?.get()?.sendEvent(GalleryView.loadedEvent, GalleryView);
      this.mediaStore = new MediaStoreiOS();
      const imagenes = await this.mediaStore.getMedia();
      const screenWidth = (this.nativeView as UIView).bounds.size.width;
      const screenHeight = (this.nativeView as UIView).bounds.size.height;
      this.files = new ObservableArray<IFiles>(imagenes);
      if (this.files.length <= 0) {
        const view = UIView.alloc().initWithFrame(CGRectMake(0, 0, screenWidth, screenHeight));
        const label = UILabel.new();
        const isDark = view.traitCollection.userInterfaceStyle;
        label.text = this.idioma.getTranslation('no_items');
        label.textColor = isDark == 2 ? UIColor.whiteColor : UIColor.blackColor;
        label.textAlignment = NSTextAlignment.Center;
        label.numberOfLines = 0;

        view.addSubview(label);

        // Centrar el label
        label.translatesAutoresizingMaskIntoConstraints = false;
        NSLayoutConstraint.activateConstraints([label.centerXAnchor.constraintEqualToAnchor(view.centerXAnchor), label.centerYAnchor.constraintEqualToAnchor(view.centerYAnchor), label.leadingAnchor.constraintGreaterThanOrEqualToAnchor(view.leadingAnchor), label.trailingAnchor.constraintLessThanOrEqualToAnchor(view.trailingAnchor)]);
        (this.nativeView as UIView).addSubview(view);
        return;
      }

      // Header
      const headerHeight = screenHeight * 0.1;
      const headerView = this.createHeader(screenWidth, headerHeight);
      headerView.backgroundColor = new Color(this.bgColorHeader).ios;
      (this.nativeView as UIView).addSubview(headerView);

      // Body
      const bodyHeight = screenHeight * 0.8;
      const bodyView = this.createBody(screenWidth, bodyHeight, screenHeight);
      (this.nativeView as UIView).addSubview(bodyView);

      // Footer
      const footerHeight = screenHeight * 0.1;
      const footerView = this.createFooter(screenWidth, footerHeight, headerHeight + bodyHeight);
      footerView.backgroundColor = new Color(this.bgColorFooter).ios;
      (this.nativeView as UIView).addSubview(footerView);
    } catch (error) {
      CLog('error renderUI ', error);
    }
  }

  private createHeader(screenWidth: number, headerHeight: number): UIView {
    const headerView = UIView.alloc().initWithFrame(CGRectMake(0, 0, screenWidth, headerHeight));

    const buttonWidth = screenWidth * 0.7;
    this.spinner = UIButton.buttonWithType(UIButtonType.System);
    this.spinner.setTitleForState(this.files.getItem(0).albunName, UIControlState.Normal);
    this.spinner.frame = CGRectMake(0, 0, buttonWidth, headerHeight);
    this.spinner.menu = this.createSpinner();
    this.spinner.showsMenuAsPrimaryAction = true;
    this.spinner.tintColor = null;
    this.spinner.setTitleColorForState(new Color(this.textcolorHeader).ios, UIControlState.Normal);
    const imagePath = this.files.getItem(0).icon?.replace('file://', '');
    if (imagePath && NSFileManager.defaultManager.fileExistsAtPath(imagePath)) {
      const imageData = NSData.dataWithContentsOfFile(imagePath);
      const image = imageData ? UIImage.imageWithData(imageData) : null;

      if (image) {
        this.imageButton = UIImageView.alloc().initWithImage(image);
        const imageSize = headerHeight * 0.8;
        this.imageButton.frame = CGRectMake(5, 5, imageSize, imageSize);
        this.imageButton.layer.cornerRadius = 5;
        this.imageButton.layer.masksToBounds = true;
        this.spinner.addSubview(this.imageButton);
      }
    }
    headerView.addSubview(this.spinner);
    this.contador = this.createContador(screenWidth, buttonWidth, headerHeight);
    headerView.addSubview(this.contador);
    return headerView;
  }

  private createSpinner(): UIMenu {
    const actions = this.files.map((option) => {
      const imageView = UIImageView.alloc().initWithFrame(CGRectMake(0, 0, 30, 30));
      imageView.sd_setImageWithURLCompleted(NSURL.URLWithString(option.icon), null);
      return UIAction.actionWithTitleImageIdentifierHandler(option.albunName, imageView.image, option.id, () => {
        this.files.forEach((value: IFiles) => {
          value.isSelected = false;
          value.data.forEach((data: IFileData) => {
            data.isSelected = false;
          });
        });
        this.contador.text = `0/${this.maxItemSelect}`;
        option.isSelected = true;
        this.spinner.tintColor = null;
        this.spinner.setTitleForState(option.albunName, UIControlState.Normal);
        const imagePath = option.icon?.replace('file://', '');
        if (imagePath && NSFileManager.defaultManager.fileExistsAtPath(imagePath)) {
          const imageData = NSData.dataWithContentsOfFile(imagePath);
          const image = imageData ? UIImage.imageWithData(imageData) : null;

          if (image) {
            const screenHeight = (this.nativeView as UIView).bounds.size.height;
            // Header
            const headerHeight = screenHeight * 0.1;
            this.imageButton = UIImageView.alloc().initWithImage(image);
            const imageSize = headerHeight * 0.8;
            this.imageButton.frame = CGRectMake(5, 5, imageSize, imageSize);
            this.imageButton.layer.cornerRadius = 5;
            this.imageButton.layer.masksToBounds = true;
            this.spinner.addSubview(this.imageButton);
            this.updateCollectionView();
          }
        }
        Utils.setTimeout(() => {
          (this.nativeView as UIView).setNeedsDisplay();
        }, 100);
      });
    });
    const actionsArray = Array.from(actions);

    const imageView = UIImageView.alloc().initWithFrame(CGRectMake(0, 0, 30, 30));
    imageView.sd_setImageWithURLCompleted(NSURL.URLWithString(this.files.getItem(0).icon), null);
    let menu = UIMenu.menuWithTitleImageIdentifierOptionsChildren('', imageView.image, this.files.getItem(0).id, UIMenuOptions.DisplayInline, actionsArray);
    return menu;
  }

  private createContador(screenWidth: number, buttonWidth: number, headerHeight: number): UILabel {
    const labelWidth = screenWidth * 0.3;
    const label = UILabel.alloc().initWithFrame(CGRectMake(buttonWidth, 0, labelWidth, headerHeight));
    if (this.files != null) {
      let cont = Array.from(this.files.filter((item) => item.isSelected))[0]?.data.filter((item) => item.isSelected).length || 0;
      label.text = `${cont}/${this.maxItemSelect}`;
    }
    label.textAlignment = NSTextAlignment.Center;
    label.textColor = new Color(this.textcolorHeader).ios;
    return label;
  }

  private createBody(screenWidth: number, bodyHeight: number, screenHeight: number): UIView {
    const bodyView = UIView.alloc().initWithFrame(CGRectMake(0, screenHeight * 0.1, screenWidth, bodyHeight));
    bodyView.backgroundColor = UIColor.blackColor;

    this.cv = this.createCollectionView(screenWidth, bodyHeight);
    bodyView.addSubview(this.cv);

    return bodyView;
  }

  private createFooter(screenWidth: number, footerHeight: number, yPosition: number): UIView {
    const footerView = UIView.alloc().initWithFrame(CGRectMake(0, yPosition, screenWidth, footerHeight));
    footerView.backgroundColor = new Color(this.bgColorFooter).ios;
    const color = new Color(this.bgColorFooter).ios;
    this.btnPreview = this.createButton(this.idioma.getTranslation('titulo_btn_preview'), color, 0, screenWidth / 2, footerHeight);
    this.btnPreview.addTargetActionForControlEvents(this.handler, 'preview', UIControlEvents.TouchUpInside);
    if (this.preview) {
      footerView.addSubview(this.btnPreview);
    }

    (this.nativeView as UIView).bringSubviewToFront(this.btnPreview);
    const button2 = this.createButton(this.idioma.getTranslation('titulo_btn_edit'), color, screenWidth / 2, screenWidth / 2, footerHeight);
    button2.addTargetActionForControlEvents(this.handler, 'edit', UIControlEvents.TouchUpInside);
    if (this.edit) {
      footerView.addSubview(button2);
    }

    return footerView;
  }

  public openModal() {
    try {
      const data: Array<IFileData> = new Array();
      for (let i: number = 0; i < this.files.length; i++) {
        if (this.files.getItem(i).isSelected) {
          for (let j: number = 0; j < this.files.getItem(i).data.length; j++) {
            if (this.files.getItem(i).data[j].isSelected) {
              const dato = this.files.getItem(i).data[j];
              data.push(dato);
            }
          }
        }
      }

      const modalViewController = new ImageModal(data, {
        onClose() {
          CLog('close modal from main');
          this.btnPreview.addTargetActionForControlEvents(this.handler, 'click', UIControlEvents.TouchUpInside);
          Application.ios.resetRootView();
          return false;
        },
      });
      modalViewController.modalPresentationStyle = UIModalPresentationStyle.FormSheet;
      const rootController = Application.ios.rootController;
      rootController.presentViewControllerAnimatedCompletion(modalViewController, true, () => {
        CLog('abrio');
      });
    } catch (error) {
      CLog('error tap', error);
    }
  }

  private createButton(title: string, color: UIColor, x: number, width: number, height: number): UIButton {
    const button = UIButton.buttonWithType(UIButtonType.System);
    button.frame = CGRectMake(x, 0, width, height);
    button.setTitleForState(title, UIControlState.Normal);
    button.backgroundColor = color;
    button.setTitleColorForState(UIColor.whiteColor, UIControlState.Normal);
    button.layer.cornerRadius = 5;
    button.tag = Math.random();
    button.setTitleColorForState(new Color(this.textColorFooter).ios, UIControlState.Normal);
    return button;
  }

  private createCollectionView(screenWidth: number, bodyHeight: number): UICollectionView {
    try {
      const layout = UICollectionViewFlowLayout.alloc().init();
      const itemSize = (screenWidth - 60) / 5; // 5 ítems por fila
      layout.itemSize = CGSizeMake(itemSize, itemSize);
      layout.minimumInteritemSpacing = 10;
      layout.minimumLineSpacing = 10;
      layout.sectionInset = new UIEdgeInsets({ top: 5, left: 5, bottom: 5, right: 5 });

      const cv = UICollectionView.alloc().initWithFrameCollectionViewLayout(CGRectZero, layout);
      cv.registerClassForCellWithReuseIdentifier(UICollectionViewCell.class(), 'Cell');
      cv.frame = CGRectMake(0, 0, screenWidth, bodyHeight);
      this.events = {
        onItemSelected: (item, position, indexPath) => {
          for (let i: number = 0; i < this.files.length; i++) {
            if (this.files.getItem(i).isSelected) {
              // Cambiar el estado de selección del archivo en la posición dada
              this.files.getItem(i).data[position].isSelected != this.files.getItem(i).data[position].isSelected;

              // Contar los archivos seleccionados dentro de `data`
              const contador: number = this.files.getItem(i).data.filter((item) => item.isSelected).length;
              this.contador.text = `${contador}/${this.maxItemSelect}`;
              break;
            }
          }

          const archivosSeleccionados = this.files
            .map((file) => ({
              ...file,
              data: file.data.filter((item) => item.isSelected), // Solo incluir los elementos seleccionados dentro de `data`
            }))
            .filter((file) => file.data.length > 0); // Filtrar archivos sin elementos seleccionados

          this.ref?.get()?.sendEvent(GalleryView.clickEvent, archivosSeleccionados);
        },
        onScroll: (offsetX, offsetY) => {
          CLog('Posición del scroll en otra parte del código - X:', offsetX, 'Y:', offsetY);
          const archivosSeleccionados = this.files
            .map((file) => ({
              ...file,
              data: file.data.filter((item) => item.isSelected), // Solo incluir los elementos seleccionados dentro de `data`
            }))
            .filter((file) => file.data.length > 0); // Filtrar archivos sin elementos seleccionados

          this.ref?.get()?.sendEvent(GalleryView.scrollEvent, archivosSeleccionados, null, offsetX, offsetY);
        },
      };
      this.dataSource = new CollectionViewDataSourceDelegate(cv, this.files.getItem(0).data, this.events, this.maxItemSelect, this.colorRadio);
      cv.dataSource = this.dataSource;
      cv.delegate = this.dataSource;

      return cv;
    } catch (error) {
      CLog(error);
    }
  }

  private updateCollectionView(): void {
    let index: number = -1;
    for (let i: number = 0; i < this.files.length; i++) {
      if (this.files.getItem(i).isSelected) {
        index = i;
        break;
      }
    }

    this.dataSource = new CollectionViewDataSourceDelegate(this.cv, this.files.getItem(index).data, this.events, this.maxItemSelect, this.colorRadio);
    this.cv.dataSource = this.dataSource;
    this.cv.delegate = this.dataSource;
    this.cv.reloadData();
  }

  disposeNativeView(): void {
    this.spinner = null;
    this.contador = null;
    this.handler = null;
    // this.files=null;
    this.files = null;
    this.mediaStore = null;
    this.cv = null;
    this.footer = null;
    this.btnPreview = null;
    super.disposeNativeView();
  }
}

@NativeClass()
class TapHandler extends NSObject {
  private _ownerRef: WeakRef<any>; // Almacena una referencia débil al owner

  // Método de inicialización que acepta un WeakRef
  public static initWithOwner(ownerRef: WeakRef<any>): TapHandler {
    const handler = TapHandler.new() as TapHandler;
    handler._ownerRef = ownerRef;
    return handler;
  }

  // Método que se ejecuta cuando se hace clic en el botón
  public preview(nativeButton: UIButton, nativeEvent: _UIEvent) {
    // Recuperar el owner desde la referencia débil
    const owner = this._ownerRef?.get();
    if (owner) {
      owner.openModal();
    } else {
      console.log('Owner ya no está disponible (fue liberado de memoria).');
    }
  }

  public edit(nativeButton: UIButton, nativeEvent: _UIEvent) {
    // Recuperar el owner desde la referencia débil
    const owner = this._ownerRef?.get();
    if (owner) {
      console.log('This section is under construction. Coming soon!');
    } else {
      console.log('Owner ya no está disponible (fue liberado de memoria).');
    }
  }

  // Exponer el método `preview` a Objective-C
  public static ObjCExposedMethods = {
    preview: { returns: interop.types.void, params: [interop.types.id, interop.types.id] },
    edit: { returns: interop.types.void, params: [interop.types.id, interop.types.id] },
  };
}
