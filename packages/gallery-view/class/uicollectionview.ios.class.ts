import { Color, ImageSource, Utils } from '@nativescript/core';
import { IFileData, IFiles } from '../common';
import { CollectionViewEvents } from '../index.ios';

const CELL_ID = 'GridCell';
const SELECT_OVERLAY_TAG = 9001;
const SELECT_RADIO_TAG = 9002;
const RADIO_SIZE = 22;

@NativeClass()
export class GalleryGridView extends UIView implements UICollectionViewDataSource, UICollectionViewDelegate, UICollectionViewDelegateFlowLayout {
  static ObjCProtocols = [UICollectionViewDataSource, UICollectionViewDelegate, UICollectionViewDelegateFlowLayout];

  private events: CollectionViewEvents;

  public collectionView: UICollectionView;
  private items: IFileData[] = [];
  private selectedIds;
  private maxSelectable = Infinity;
  private radioColor: UIColor = UIColor.blueColor;

  public setMaxSelectable(max: number) {
    this.maxSelectable = max > 0 ? max : Infinity;
  }

  public setEvents(events: CollectionViewEvents) {
    this.events = events;
  }

  public setRadioColor(color: UIColor) {
    this.radioColor = color;
  }

  public getSelectedItems(): any[] {
    return this.items.filter((item) => this.selectedIds.has(item.id));
  }

  static initWithItems(items: IFileData[]): GalleryGridView {
    const view = GalleryGridView.new() as GalleryGridView;
    view.items = items;
    console.log('INIT ITEMS:', items.length);
    if (!view.selectedIds) {
      view.selectedIds = new Set<string>();
    }

    return view;
  }

  didMoveToSuperview() {
    super.didMoveToSuperview();
    if (this.collectionView) return;
    this.setup();
  }

  public syncSelectionState() {
    const collectionView = this.collectionView;
    const selectedIds = this.getSelectedIds();

    const indexPaths = collectionView.indexPathsForSelectedItems;
    if (!indexPaths) {
      return;
    }

    const count = indexPaths.count;

    for (let i = 0; i < count; i++) {
      const indexPath = indexPaths.objectAtIndex(i) as NSIndexPath;
      const item = this.items[indexPath.item];

      if (!item || !selectedIds.includes(item.id)) {
        collectionView.deselectItemAtIndexPathAnimated(indexPath, false);
      }
    }
  }

  public refreshVisibleCells() {
    const indexPaths = this.collectionView.indexPathsForVisibleItems;
    if (!indexPaths) {
      return;
    }

    const count = indexPaths.count;

    for (let i = 0; i < count; i++) {
      const indexPath = indexPaths.objectAtIndex(i) as NSIndexPath;
      this.collectionView.reloadItemsAtIndexPaths(NSArray.arrayWithObject(indexPath));
    }
  }

  public clearUIKitSelectionState() {
    const collectionView = this.collectionView;
    const indexPaths = collectionView.indexPathsForSelectedItems;

    if (!indexPaths) {
      return;
    }

    for (let i = 0; i < indexPaths.count; i++) {
      const indexPath = indexPaths.objectAtIndex(i) as NSIndexPath;
      collectionView.deselectItemAtIndexPathAnimated(indexPath, false);
    }

    collectionView.layoutIfNeeded();
  }

  private setup() {
    this.translatesAutoresizingMaskIntoConstraints = false;
    this.backgroundColor = UIColor.clearColor;

    const layout = UICollectionViewFlowLayout.new();
    layout.minimumInteritemSpacing = 4;
    layout.minimumLineSpacing = 4;
    layout.sectionInset = {
      top: 8,
      left: 8,
      bottom: 8,
      right: 8,
    };

    this.collectionView = UICollectionView.alloc().initWithFrameCollectionViewLayout(CGRectZero, layout);

    this.collectionView.translatesAutoresizingMaskIntoConstraints = false;
    this.collectionView.dataSource = this;
    this.collectionView.delegate = this;
    this.collectionView.allowsMultipleSelection = true;

    this.collectionView.registerClassForCellWithReuseIdentifier(UICollectionViewCell.class(), CELL_ID);

    this.addSubview(this.collectionView);

    NSLayoutConstraint.activateConstraints([this.collectionView.topAnchor.constraintEqualToAnchor(this.topAnchor), this.collectionView.leadingAnchor.constraintEqualToAnchor(this.leadingAnchor), this.collectionView.trailingAnchor.constraintEqualToAnchor(this.trailingAnchor), this.collectionView.bottomAnchor.constraintEqualToAnchor(this.bottomAnchor)]);
  }

  // --------------------------------------------------
  // DATASOURCE
  // --------------------------------------------------

  collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number {
    console.log('ITEMS COUNT:', this.items.length);
    return this.items.length;
  }

  collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell {
    const cell = collectionView.dequeueReusableCellWithReuseIdentifierForIndexPath(CELL_ID, indexPath);

    // LIMPIEZA CORRECTA
    while (cell.contentView.subviews.count > 0) {
      cell.contentView.subviews.lastObject.removeFromSuperview();
    }

    const item = this.items[indexPath.row];

    // -----------------------------------------
    // IMAGE
    // -----------------------------------------
    const imageView = UIImageView.new();
    imageView.frame = cell.contentView.bounds;
    imageView.autoresizingMask = UIViewAutoresizing.FlexibleWidth | UIViewAutoresizing.FlexibleHeight;
    imageView.contentMode = UIViewContentMode.ScaleAspectFill;
    imageView.clipsToBounds = true;
    cell.contentView.addSubview(imageView);

    const options = PHImageRequestOptions.new();
    options.resizeMode = PHImageRequestOptionsResizeMode.Fast;
    options.deliveryMode = PHImageRequestOptionsDeliveryMode.Opportunistic;
    options.networkAccessAllowed = true;

    PHImageManager.defaultManager().requestImageForAssetTargetSizeContentModeOptionsResultHandler(item.asset, CGSizeMake(300, 300), PHImageContentMode.AspectFill, options, (image) => {
      if (image) {
        imageView.image = image;
      }
    });

    // -----------------------------------------
    // SELECTION RADIO
    // -----------------------------------------

    let radio = cell.contentView.viewWithTag(SELECT_RADIO_TAG) as UIView;

    if (!radio) {
      radio = UIView.new();
      radio.tag = SELECT_RADIO_TAG;

      radio.frame = CGRectMake(cell.contentView.bounds.size.width - RADIO_SIZE - 6, 6, RADIO_SIZE, RADIO_SIZE);

      radio.autoresizingMask = UIViewAutoresizing.FlexibleLeftMargin | UIViewAutoresizing.FlexibleBottomMargin;

      radio.layer.cornerRadius = RADIO_SIZE / 2;
      radio.layer.borderWidth = 2;
      if (this.radioColor) {
        radio.backgroundColor = this.radioColor.colorWithAlphaComponent(0.6);
        radio.layer.borderColor = this.radioColor.CGColor;
      }

      cell.contentView.addSubview(radio);
    }

    // mostrar / ocultar según selección
    radio.hidden = !this.selectedIds.has(item.id);

    // -----------------------------------------
    // CELL STYLE
    // -----------------------------------------
    cell.layer.cornerRadius = 6;
    cell.clipsToBounds = true;

    return cell;
  }

  collectionViewLayoutSizeForItemAtIndexPath(collectionView: UICollectionView, layout: UICollectionViewLayout, indexPath: NSIndexPath): CGSize {
    const width = collectionView.bounds.size.width;
    if (width <= 0) {
      return CGSizeMake(60, 60);
    }

    const columns = 5;
    const spacing = 4;
    const inset = 8;

    const totalSpacing = inset * 2 + spacing * (columns - 1);

    const itemSize = Math.floor((width - totalSpacing) / columns);

    return CGSizeMake(itemSize, itemSize);
  }

  public setItems(items: IFileData[]) {
    this.items = items ?? [];

    // reset de selección
    this.selectedIds.clear();

    if (!this.collectionView) {
      return;
    }

    Utils.executeOnMainThread(() => {
      this.collectionView.reloadData();
      this.collectionView.setContentOffsetAnimated(CGPointZero, false);
    });
  }

  private emitSelection(item: any, indexPath: NSIndexPath) {
    if (this.events?.onItemSelected) {
      this.events.onItemSelected(item, indexPath.row, indexPath);
    }
  }

  // --------------------------------------------------
  // SELECTION
  // --------------------------------------------------

  collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath) {
    const item = this.items[indexPath.row];
    const id = item.id;
    if (this.selectedIds.size >= this.maxSelectable) {
      // opcional: vibración o feedback
      return;
    }

    if (this.selectedIds.has(id)) {
      this.selectedIds.delete(id);
    } else {
      this.selectedIds.add(id);
    }

    // 🔴 FUERZA REDIBUJO DE LA CELDA
    collectionView.reloadItemsAtIndexPaths([indexPath]);

    this.events?.onItemSelected?.(item, indexPath.row, indexPath);
  }

  scrollViewDidScroll(scrollView: UIScrollView): void {
    const offsetX = scrollView.contentOffset.x;
    const offsetY = scrollView.contentOffset.y;

    if (this.events.onScroll) {
      this.events.onScroll(offsetX, offsetY);
    }
  }

  collectionViewDidDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath) {
    const item = this.items[indexPath.row];
    if (this.events.onItemSelected) {
      this.events.onItemSelected(item, indexPath.row, indexPath);
    }
    this.selectedIds.delete(item.id);
    this.updateCell(indexPath, false);
  }

  private updateCell(indexPath: NSIndexPath, selected: boolean) {
    const cell = this.collectionView.cellForItemAtIndexPath(indexPath);
    if (!cell) return;

    const radio = cell.contentView.viewWithTag(SELECT_RADIO_TAG);
    if (radio) {
      radio.hidden = !selected;
    }
  }

  // --------------------------------------------------
  // API
  // --------------------------------------------------

  getSelectedIds(): string[] {
    return Array.from(this.selectedIds);
  }
}
