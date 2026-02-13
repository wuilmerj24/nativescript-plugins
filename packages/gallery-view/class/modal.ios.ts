import { IFileData } from '../common';

const PREVIEW_CELL = 'PreviewCell';
const THUMB_CELL = 'ThumbCell';

@NativeClass()
export class ImagePreviewViewController extends UIViewController implements UICollectionViewDataSource, UICollectionViewDelegate, UICollectionViewDelegateFlowLayout, UIAdaptivePresentationControllerDelegate {
  static ObjCProtocols = [UICollectionViewDataSource, UICollectionViewDelegate, UICollectionViewDelegateFlowLayout, UIAdaptivePresentationControllerDelegate];

  // DATA
  private items: IFileData[] = [];
  private currentIndex = 0;

  // UI
  private headerView: UIView;
  private titleLabel: UILabel;
  private bodyCollection: UICollectionView;
  private footerCollection: UICollectionView;

  public onDismiss?: () => void;

  // ---------------------------------------
  // INIT
  // ---------------------------------------
  static initWithItems(items: IFileData[], startIndex = 0) {
    const vc = ImagePreviewViewController.new() as ImagePreviewViewController;
    vc.items = items;
    vc.currentIndex = startIndex;
    return vc;
  }

  // ---------------------------------------
  // LIFECYCLE
  // ---------------------------------------
  viewDidLoad() {
    super.viewDidLoad();

    this.modalPresentationStyle = UIModalPresentationStyle.FullScreen;
    if (this.presentationController) {
      this.presentationController.delegate = this;
    }
    this.view.backgroundColor = UIColor.blackColor;

    this.buildHeader();
    this.buildFooter(); // primero footer
    this.buildBody(); // body depende del footer

    this.updateTitle();
  }

  viewDidAppear(animated: boolean) {
    super.viewDidAppear(animated);
    this.bodyCollection.reloadData();
    this.footerCollection.reloadData();
  }

  viewWillDisappear(animated: boolean) {
    super.viewWillDisappear(animated);
  }

  presentationControllerShouldDismiss(presentationController: UIPresentationController): boolean {
    return false;
  }

  // ---------------------------------------
  // HEADER
  // ---------------------------------------
  private buildHeader() {
    this.headerView = UIView.new();
    this.headerView.translatesAutoresizingMaskIntoConstraints = false;
    this.view.addSubview(this.headerView);

    const closeButton = UIButton.buttonWithType(UIButtonType.System);
    closeButton.setTitleForState('✕', UIControlState.Normal);
    closeButton.setTitleColorForState(UIColor.whiteColor, UIControlState.Normal);
    closeButton.titleLabel.font = UIFont.systemFontOfSize(22);
    closeButton.translatesAutoresizingMaskIntoConstraints = false;
    closeButton.addTargetActionForControlEvents(this, 'closeModal', UIControlEvents.TouchUpInside);

    this.titleLabel = UILabel.new();
    this.titleLabel.translatesAutoresizingMaskIntoConstraints = false;
    this.titleLabel.textColor = UIColor.whiteColor;
    this.titleLabel.font = UIFont.systemFontOfSize(14);
    this.titleLabel.textAlignment = NSTextAlignment.Center;

    this.headerView.addSubview(closeButton);
    this.headerView.addSubview(this.titleLabel);

    NSLayoutConstraint.activateConstraints([this.headerView.topAnchor.constraintEqualToAnchor(this.view.safeAreaLayoutGuide.topAnchor), this.headerView.leadingAnchor.constraintEqualToAnchor(this.view.leadingAnchor), this.headerView.trailingAnchor.constraintEqualToAnchor(this.view.trailingAnchor), this.headerView.heightAnchor.constraintEqualToConstant(44), closeButton.leadingAnchor.constraintEqualToAnchorConstant(this.headerView.leadingAnchor, 16), closeButton.centerYAnchor.constraintEqualToAnchor(this.headerView.centerYAnchor), this.titleLabel.centerXAnchor.constraintEqualToAnchor(this.headerView.centerXAnchor), this.titleLabel.centerYAnchor.constraintEqualToAnchor(this.headerView.centerYAnchor)]);
  }

  @ObjCMethod()
  closeModal() {
    this.dismissViewControllerAnimatedCompletion(true, () => {
      this.onDismiss?.();
    });
  }

  private updateTitle() {
    this.titleLabel.text = `${this.currentIndex + 1} / ${this.items.length}`;
  }

  // ---------------------------------------
  // BODY (MAIN CAROUSEL)
  // ---------------------------------------
  private buildBody() {
    const layout = UICollectionViewFlowLayout.new();
    layout.scrollDirection = UICollectionViewScrollDirection.Horizontal;
    layout.minimumLineSpacing = 0;
    layout.estimatedItemSize = CGSizeZero;

    this.bodyCollection = UICollectionView.alloc().initWithFrameCollectionViewLayout(CGRectZero, layout);
    this.bodyCollection.translatesAutoresizingMaskIntoConstraints = false;
    this.bodyCollection.pagingEnabled = true;
    this.bodyCollection.showsHorizontalScrollIndicator = false;
    this.bodyCollection.backgroundColor = UIColor.blackColor;

    this.view.addSubview(this.bodyCollection);

    NSLayoutConstraint.activateConstraints([this.bodyCollection.topAnchor.constraintEqualToAnchor(this.headerView.bottomAnchor), this.bodyCollection.leadingAnchor.constraintEqualToAnchor(this.view.leadingAnchor), this.bodyCollection.trailingAnchor.constraintEqualToAnchor(this.view.trailingAnchor), this.bodyCollection.bottomAnchor.constraintEqualToAnchor(this.footerCollection.topAnchor)]);

    this.bodyCollection.registerClassForCellWithReuseIdentifier(UICollectionViewCell.class(), PREVIEW_CELL);
    this.bodyCollection.dataSource = this;
    this.bodyCollection.delegate = this;
  }

  // Este método asegura que cada celda ocupe todo el tamaño del bodyCollection
  viewDidLayoutSubviews() {
    super.viewDidLayoutSubviews();

    if (!this.bodyCollection) return;

    const layout = this.bodyCollection.collectionViewLayout as UICollectionViewFlowLayout;

    if (layout.itemSize.width !== this.bodyCollection.bounds.size.width || layout.itemSize.height !== this.bodyCollection.bounds.size.height) {
      layout.itemSize = CGSizeMake(this.bodyCollection.bounds.size.width, this.bodyCollection.bounds.size.height);
      layout.invalidateLayout();

      // Asegura que el carousel quede en la posición correcta después de un layout
      const indexPath = NSIndexPath.indexPathForRowInSection(this.currentIndex, 0);
      this.bodyCollection.scrollToItemAtIndexPathAtScrollPositionAnimated(indexPath, UICollectionViewScrollPosition.CenteredHorizontally, false);
    }
  }

  // ---------------------------------------
  // FOOTER (THUMBNAILS)
  // ---------------------------------------
  private buildFooter() {
    const layout = UICollectionViewFlowLayout.new();
    layout.scrollDirection = UICollectionViewScrollDirection.Horizontal;
    layout.minimumLineSpacing = 8;
    layout.minimumInteritemSpacing = 8;
    layout.itemSize = CGSizeMake(60, 60);
    layout.estimatedItemSize = CGSizeZero;

    this.footerCollection = UICollectionView.alloc().initWithFrameCollectionViewLayout(CGRectZero, layout);
    this.footerCollection.translatesAutoresizingMaskIntoConstraints = false;
    this.footerCollection.backgroundColor = UIColor.blackColor;
    this.footerCollection.showsHorizontalScrollIndicator = false;

    this.view.addSubview(this.footerCollection);

    NSLayoutConstraint.activateConstraints([this.footerCollection.leadingAnchor.constraintEqualToAnchorConstant(this.view.leadingAnchor, 8), this.footerCollection.trailingAnchor.constraintEqualToAnchorConstant(this.view.trailingAnchor, -8), this.footerCollection.bottomAnchor.constraintEqualToAnchor(this.view.safeAreaLayoutGuide.bottomAnchor), this.footerCollection.heightAnchor.constraintEqualToConstant(80)]);

    this.footerCollection.registerClassForCellWithReuseIdentifier(UICollectionViewCell.class(), THUMB_CELL);
    this.footerCollection.dataSource = this;
    this.footerCollection.delegate = this;
  }

  // ---------------------------------------
  // DATASOURCE
  // ---------------------------------------
  collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number {
    return this.items.length;
  }

  collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell {
    const identifier = collectionView === this.bodyCollection ? PREVIEW_CELL : THUMB_CELL;
    const cell = collectionView.dequeueReusableCellWithReuseIdentifierForIndexPath(identifier, indexPath);
    if (!cell || !cell.contentView) return UICollectionViewCell.new();

    while (cell.contentView.subviews.count > 0) {
      cell.contentView.subviews.lastObject.removeFromSuperview();
    }

    const imageView = UIImageView.new();
    imageView.frame = cell.contentView.bounds;
    imageView.autoresizingMask = UIViewAutoresizing.FlexibleWidth | UIViewAutoresizing.FlexibleHeight;
    imageView.contentMode = collectionView === this.bodyCollection ? UIViewContentMode.ScaleAspectFit : UIViewContentMode.ScaleAspectFill;
    imageView.clipsToBounds = true;

    cell.contentView.addSubview(imageView);

    PHImageManager.defaultManager().requestImageForAssetTargetSizeContentModeOptionsResultHandler(this.items[indexPath.row].asset, CGSizeMake(800, 800), PHImageContentMode.AspectFill, null, (image) => {
      if (image) imageView.image = image;
    });

    return cell;
  }

  // ---------------------------------------
  // DELEGATE
  // ---------------------------------------
  scrollViewDidEndDecelerating(scrollView: UIScrollView) {
    if (scrollView === this.bodyCollection) {
      const page = Math.round(scrollView.contentOffset.x / scrollView.bounds.size.width);
      this.currentIndex = page;
      this.updateTitle();

      const thumbIndex = NSIndexPath.indexPathForRowInSection(page, 0);
      this.footerCollection.scrollToItemAtIndexPathAtScrollPositionAnimated(thumbIndex, UICollectionViewScrollPosition.CenteredHorizontally, true);
    }
  }

  collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath) {
    if (collectionView === this.footerCollection) {
      this.currentIndex = indexPath.row;
      this.updateTitle();

      const target = NSIndexPath.indexPathForRowInSection(indexPath.row, 0);
      this.bodyCollection.scrollToItemAtIndexPathAtScrollPositionAnimated(target, UICollectionViewScrollPosition.CenteredHorizontally, true);
    }
  }
}
