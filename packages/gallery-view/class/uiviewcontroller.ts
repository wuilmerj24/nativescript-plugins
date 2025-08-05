import { CLog, IFileData, TipoFile } from '../common';
import { CollectionViewEvents } from '../index.ios';
import { Color, Screen } from '@nativescript/core';

@NativeClass()
export class CollectionViewDataSourceDelegate extends NSObject implements UICollectionViewDataSource, UICollectionViewDelegate {
  static ObjCProtocols = [UICollectionViewDataSource, UICollectionViewDelegate];

  private collectionView: UICollectionView;
  private imageManager: SDWebImageManager;
  private images: Array<IFileData>;
  private events: CollectionViewEvents;

  constructor(collectionView: UICollectionView, images: Array<IFileData>, events: CollectionViewEvents, private maxItemSelect: number, private colorRadio: string) {
    super();
    this.collectionView = collectionView;
    this.images = images;
    this.events = events;

    this.collectionView.registerClassForCellWithReuseIdentifier(UICollectionViewCell.class(), 'cell');
    SDImageLoadersManager.sharedManager.loaders = NSArray.arrayWithArray([SDWebImageDownloader.sharedDownloader, SDImagePhotosLoader.sharedLoader]);

    this.imageManager = SDWebImageManager.sharedManager;
  }

  collectionViewNumberOfItemsInSection(collectionView, section) {
    return this.images.length;
  }

  collectionViewCellForItemAtIndexPath(collectionView, indexPath) {
    try {
      const cell = collectionView.dequeueReusableCellWithReuseIdentifierForIndexPath('cell', indexPath);
      const item = this.images[indexPath.row];

      // Remover vistas anteriores para evitar duplicados
      const subviews = cell.contentView.subviews;
      for (let i = 0; i < subviews.count; i++) {
        subviews.objectAtIndex(i).removeFromSuperview();
      }

      const imageView = UIImageView.alloc().initWithFrame(cell.contentView.bounds);
      imageView.contentMode = UIViewContentMode.ScaleAspectFill;
      imageView.clipsToBounds = true;
      imageView.layer.cornerRadius = 8; // Esquinas redondeadas
      imageView.layer.masksToBounds = true;
      const placeholderImage = UIImage.systemImageNamed('photo.on.rectangle.angled');
      if (item.uri) {
        const imageUrl = NSURL.URLWithString(item.uri);
        if (imageUrl) {
          // imageView.sd_setImageWithURLPlaceholderImageOptionsProgressCompleted(
          imageView.sd_setImageWithURLPlaceholderImageOptionsProgressCompleted(
            imageUrl,
            placeholderImage, // Placeholder mientras se carga
            SDWebImageOptions.RefreshCached, // Cargar desde caché si está disponible
            null,
            (image, error, cacheType, url) => {
              if (error) {
                CLog('Error al cargar imagen con SDWebImage:', error.localizedDescription);
              }
            }
          );
        } else {
          CLog('URL de imagen inválida:', item.uri);
        }
      }

      // Crear el radio button (checkmark)
      const radioButton = UIImageView.alloc().init();
      radioButton.image = UIImage.systemImageNamed('checkmark.circle.fill'); // Ícono nativo de iOS
      radioButton.tintColor = new Color(this.colorRadio).ios;
      radioButton.hidden = !item.isSelected; // Mostrar solo si el ítem está seleccionado

      // Agregar subviews a la celda
      cell.contentView.addSubview(imageView);
      cell.contentView.addSubview(radioButton);

      // Posicionar radio button en la esquina superior derecha
      const size = 20; // Tamaño del radio button
      radioButton.frame = CGRectMake(cell.contentView.frame.size.width - size - 2, 2, size, size);

      return cell;
    } catch (error) {
      CLog('Error en cell:', error);
    }
  }

  private imageFromBase64(base64: string): UIImage | null {
    try {
      const imageData = NSData.alloc().initWithBase64EncodedStringOptions(base64, NSDataBase64DecodingOptions.IgnoreUnknownCharacters);
      return UIImage.imageWithData(imageData);
    } catch (error) {
      CLog('Error al convertir Base64 a UIImage:', error);
      return null;
    }
  }

  public collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void {
    const selectedItem = this.images[indexPath.row];

    const selectedCount = this.images.filter((item) => item.isSelected).length;

    if (selectedCount >= this.maxItemSelect && !selectedItem.isSelected) {
      return; // Bloquear selección si ya se alcanzó el límite
    }

    selectedItem.isSelected = !selectedItem.isSelected;

    if (this.events.onItemSelected) {
      this.events.onItemSelected(selectedItem, indexPath.row, indexPath);
    }

    // Recargar solo la celda seleccionada para mejor rendimiento
    collectionView.reloadItemsAtIndexPaths([indexPath]);
  }

  public scrollViewDidScroll(scrollView: UIScrollView): void {
    const offsetX = scrollView.contentOffset.x;
    const offsetY = scrollView.contentOffset.y;

    if (this.events.onScroll) {
      this.events.onScroll(offsetX, offsetY);
    }
  }

  public collectionViewLayoutSizeForItemAtIndexPath(collectionView: UICollectionView, layout: UICollectionViewLayout, indexPath: NSIndexPath): CGSize {
    const screenWidth = Screen.mainScreen.widthDIPs;
    const itemsPerRow = this.getItemsPerRow();
    return this.getItemSize(screenWidth, itemsPerRow);
  }

  private getItemsPerRow(): number {
    const screenWidth = Screen.mainScreen.widthDIPs;
    return screenWidth > 600 ? 5 : 3; // Más ítems en pantallas grandes
  }

  private getItemSize(screenWidth: number, itemsPerRow: number): CGSize {
    const padding = 5; // Espaciado entre ítems
    const availableWidth = screenWidth - (itemsPerRow - 1) * padding;
    const itemWidth = availableWidth / itemsPerRow;
    return CGSizeMake(itemWidth, itemWidth); // Ítems cuadrados
  }
}
