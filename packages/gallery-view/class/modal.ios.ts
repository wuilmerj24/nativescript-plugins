import { CLog, IFileData, TipoFile } from '../common';
import { CloseModalEvento } from '../index.ios';
@NativeClass()
export class ImageModal extends UIViewController implements UICollectionViewDataSource, UICollectionViewDelegate {
  public static ObjCProtocols = [UICollectionViewDataSource, UICollectionViewDelegate]; // Exponer los protocolos

  private images: IFileData[]; // Lista de imágenes
  private currentIndex: number = 0; // Índice de la imagen actual
  private titleLabel: UILabel; // Título en el header
  private carousel: UICollectionView; // Carrusel de imágenes
  private handler = TapHandler.initWithOwner(new WeakRef(this));

  constructor(images: IFileData[], private evento: CloseModalEvento) {
    super(null);
    this.images = images;
  }

  viewDidLoad(): void {
    super.viewDidLoad();

    // Configurar el fondo de la vista
    this.view.backgroundColor = UIColor.blackColor;

    // Header
    this.setupHeader();

    // Body con carrusel horizontal
    this.setupCarousel();
  }

  // Configurar el header
  private setupHeader(): void {
    const headerView = UIView.alloc().initWithFrame(CGRectMake(0, 0, this.view.frame.size.width, 60));
    headerView.backgroundColor = UIColor.blackColor;
    this.view.addSubview(headerView);

    // Botón de cerrar (solo el botón, sin callback)
    const closeButton = UIButton.buttonWithType(UIButtonType.System);
    closeButton.frame = CGRectMake(10, 15, 40, 40);
    closeButton.setTitleForState('X', UIControlState.Normal); // Símbolo de cerrar
    closeButton.setTitleColorForState(UIColor.whiteColor, UIControlState.Normal);
    closeButton.addTargetActionForControlEvents(this.handler, 'closeModal', UIControlEvents.TouchUpInside);
    headerView.addSubview(closeButton);

    // Título en el centro (posición de la imagen y contador)
    this.titleLabel = UILabel.alloc().initWithFrame(CGRectMake(0, 15, this.view.frame.size.width, 30));
    this.titleLabel.text = `1 / ${this.images.length}`; // Inicializar con la primera imagen
    this.titleLabel.textAlignment = NSTextAlignment.Center;
    this.titleLabel.textColor = UIColor.whiteColor;

    headerView.addSubview(this.titleLabel);
  }

  public closeModal() {
    this.dismissViewControllerAnimatedCompletion(true, () => {
      this.evento.onClose();
    });
  }

  // Configurar el carrusel horizontal
  private setupCarousel(): void {
    const layout = UICollectionViewFlowLayout.alloc().init();
    layout.scrollDirection = UICollectionViewScrollDirection.Horizontal; // Desplazamiento horizontal
    layout.itemSize = CGSizeMake(this.view.frame.size.width, this.view.frame.size.height - 60); // Tamaño de cada celda
    layout.minimumLineSpacing = 0; // Espaciado entre celdas
    layout.minimumInteritemSpacing = 0;

    this.carousel = UICollectionView.alloc().initWithFrameCollectionViewLayout(CGRectMake(0, 60, this.view.frame.size.width, this.view.frame.size.height - 60), layout);
    this.carousel.backgroundColor = UIColor.blackColor;

    // Registrar la celda personalizada
    this.carousel.registerClassForCellWithReuseIdentifier(UICollectionViewCell.class(), 'ImageCell');

    // Asignar el dataSource y delegate a esta clase
    this.carousel.dataSource = this;
    this.carousel.delegate = this;

    this.carousel.pagingEnabled = true; // Habilitar paginación
    this.view.addSubview(this.carousel);
  }

  // Método para actualizar el título (posición de la imagen y contador)
  private updateTitle(index: number): void {
    this.titleLabel.text = `${index + 1} / ${this.images.length}`;
  }

  // Implementación de UICollectionViewDataSource

  // Número de ítems en el carrusel
  collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number {
    return this.images.length;
  }

  // Configurar cada celda con SDWebImage
  collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell {
    // Obtener la celda
    const cell = collectionView.dequeueReusableCellWithReuseIdentifierForIndexPath('ImageCell', indexPath);

    // Remover vistas previas para evitar duplicados
    const subviews = cell.contentView.subviews;
    for (let i = 0; i < subviews.count; i++) {
      subviews.objectAtIndex(i).removeFromSuperview();
    }

    // Configurar la imagen con SDWebImage
    const imageView = UIImageView.alloc().initWithFrame(cell.contentView.bounds);
    imageView.contentMode = UIViewContentMode.ScaleAspectFit;
    imageView.clipsToBounds = true;

    const item = this.images[indexPath.item];

    if (item.tipo === TipoFile.IMAGE) {
      const imageURL = NSURL.URLWithString(item.uri);
      imageView.sd_setImageWithURLPlaceholderImageOptionsProgressCompleted(
        imageURL,
        null, // No placeholder
        SDWebImageOptions.HighPriority,
        null,
        (image, error, cacheType, url) => {
          if (error) {
            console.error('Error cargando imagen con SDWebImage:', error.localizedDescription);
          }
        }
      );
    }

    cell.contentView.addSubview(imageView);
    return cell;
  }

  // Implementación de UICollectionViewDelegate

  // Actualizar el título cuando el usuario se desplaza
  scrollViewDidEndDecelerating(scrollView: UIScrollView): void {
    const currentIndex = Math.round(scrollView.contentOffset.x / scrollView.frame.size.width);
    this.updateTitle(currentIndex);
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
  public closeModal(nativeButton: UIButton, nativeEvent: _UIEvent) {
    // Recuperar el owner desde la referencia débil
    const owner = this._ownerRef?.get();
    if (owner) {
      owner.closeModal();
    } else {
      console.log('Owner ya no está disponible (fue liberado de memoria).');
    }
  }

  // Exponer el método `click` a Objective-C
  public static ObjCExposedMethods = {
    closeModal: { returns: interop.types.void, params: [interop.types.id, interop.types.id] },
  };
}
