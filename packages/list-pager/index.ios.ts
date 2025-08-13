import { ChangeType, CoreTypes, EventData, ItemEventData, KeyedTemplate, Observable, paddingBottomProperty, paddingLeftProperty, paddingRightProperty, paddingTopProperty, profile, ProxyViewContainer, StackLayout, Utils, View, ViewBase } from '@nativescript/core';
import { itemsProperty, itemTemplatesProperty, ListPagerCommon, orientationProperty, selectedIndexProperty } from './common';
import { Orientation } from '.';

const main_queue = dispatch_get_current_queue();

@NativeClass
class UICellView extends UIView {
  view: WeakRef<View>;
  layoutSubviews() {
    const view = this.view && this.view.get();
    if (!view) {
      return;
    }
    this.frame = this.superview.bounds;
    const size = this.bounds.size;
    View.layoutChild(null, view, 0, 0, Utils.layout.toDevicePixels(size.width), Utils.layout.toDevicePixels(size.height));
  }
}

const PFLAG_FORCE_LAYOUT = 1;

export class ListPager extends ListPagerCommon {
  lastEvent: number = 0;
  mLayout: UICollectionViewFlowLinearLayoutImpl;
  mPreparingCell: boolean = false;
  mDelegate: UICollectionDelegateImpl;
  nativeViewProtected: UICollectionView;
  private mDataSource: UICollectionViewDataSourceImpl;
  mMap: Map<PagerCell, View>;
  borderRadius: number;
  borderWidth: number;
  borderColor: string;
  backgroundColor: any;
  mIsRefreshing: boolean = false;
  mIsInit: boolean = false;

  // public mInnerWidth: number = 0;
  // public mInnerHeight: number = 0;
  mLastLayoutKey: string;
  constructor() {
    super();
    this.mMap = new Map<PagerCell, View>();
  }

  createNativeView(): Object {
    this.mLayout = UICollectionViewFlowLinearLayoutImpl.initWithOwner(new WeakRef(this));
    this.mLayout.scrollDirection = UICollectionViewScrollDirection.Horizontal;
    this.mLayout.minimumInteritemSpacing = 0;
    const nativeView = UICollectionView.alloc().initWithFrameCollectionViewLayout(CGRectZero, this.mLayout);
    nativeView.backgroundColor = UIColor.clearColor;
    nativeView.autoresizesSubviews = false;
    nativeView.autoresizingMask = UIViewAutoresizing.None;
    nativeView.showsHorizontalScrollIndicator = false;
    nativeView.showsVerticalScrollIndicator = false;
    nativeView.decelerationRate = UIScrollViewDecelerationRateFast;
    this._itemTemplatesInternal.forEach((t) => {
      nativeView.registerClassForCellWithReuseIdentifier(PagerCell.class(), t.key);
    });

    return nativeView;
  }

  initNativeView(): void {
    super.initNativeView();
    const nativeView = this.nativeViewProtected;
    nativeView.registerClassForCellWithReuseIdentifier(PagerCell.class(), this._defaultTemplate.key);
    nativeView.backgroundColor = UIColor.clearColor;
    nativeView.autoresizesSubviews = false;
    nativeView.autoresizingMask = 0;
    nativeView.dataSource = this.mDataSource = UICollectionViewDataSourceImpl.initWithOwner(new WeakRef(this));
    nativeView.scrollEnabled = true;
    if (this.orientation === 'vertical') {
      this.mLayout.scrollDirection = UICollectionViewScrollDirection.Vertical;
      nativeView.alwaysBounceVertical = true;
      nativeView.alwaysBounceHorizontal = false;
    } else {
      this.mLayout.scrollDirection = UICollectionViewScrollDirection.Horizontal;
      nativeView.alwaysBounceHorizontal = true;
      nativeView.alwaysBounceVertical = false;
    }
    this.mDelegate = UICollectionDelegateImpl.initWithOwner(new WeakRef(this));
    this._setNativeClipToBounds();
  }

  getChildView(index: number): View {
    if (this._childrenViews) {
      return this._childrenViews[index]?.view;
    }
    let result: View;
    if (this.nativeViewProtected) {
      const cell = this.nativeViewProtected.cellForItemAtIndexPath(NSIndexPath.indexPathForRowInSection(index, 0)) as PagerCell;
      return cell?.view;
    }

    return result;
  }

  getViewForItemAtIndex(index: number) {
    return this.getChildView(index);
  }

  _getRealWidthHeight(): { width: number; height: number } {
    let height = 0;
    let width = 0;
    width = Utils.layout.toDeviceIndependentPixels(this._effectiveItemWidth);
    height = Utils.layout.toDeviceIndependentPixels(this._effectiveItemHeight);
    return { height, width };
  }

  _nextIndex(): number {
    const next = this.selectedIndex + 1;
    return next;
  }

  get itemCount(): number {
    return this._childrenCount ? this._childrenCount : 0;
  }

  get lastIndex(): number {
    return Math.max(0, this.itemCount - 3);
  }

  get firstDummy(): number {
    return Math.max(0, this.itemCount - 1);
  }

  get lastDummy(): number {
    return this.lastIndex;
  }

  public get _childrenCount() {
    return this.items?.length ?? this._childrenViews?.length ?? 0;
  }

  public itemTemplateUpdated(oldData: any, newData: any): void {}

  public _setNativeClipToBounds(): void {
    this.nativeViewProtected.clipsToBounds = true;
  }

  public [orientationProperty.setNative](value: Orientation) {
    if (value === 'horizontal') {
      this.mLayout.scrollDirection = UICollectionViewScrollDirection.Horizontal;
    } else {
      this.mLayout.scrollDirection = UICollectionViewScrollDirection.Vertical;
    }
  }

  public eachChildView(callback: (child: View) => boolean): void {
    this.mMap.forEach((view, key) => callback(view));
  }
  public eachChild(callback: (child: ViewBase) => boolean) {
    this.mMap.forEach((view, key) => callback(view));
  }

  _updateScrollPosition() {
    const view = this.nativeViewProtected;
    if (!view) {
      return;
    }
    const size = this.orientation === 'vertical' ? view.contentSize.height : view.contentSize.width;
    if (size === 0) {
      return;
    }
    this.scrollToIndexAnimated(this.selectedIndex, false);
  }

  [selectedIndexProperty.setNative](value: number, animated = true) {
    if (this.isLoaded) {
      this.scrollToIndexAnimated(value, animated);
    }
  }

  [itemTemplatesProperty.getDefault](): KeyedTemplate[] {
    return null;
  }

  [itemTemplatesProperty.setNative](value: KeyedTemplate[]) {
    this._itemTemplatesInternal = new Array<KeyedTemplate>(this._defaultTemplate);
    if (value) {
      for (let i = 0, length = value.length; i < length; i++) {
        this.nativeViewProtected.registerClassForCellWithReuseIdentifier(PagerCell.class(), value[i].key);
      }
      this._itemTemplatesInternal = this._itemTemplatesInternal.concat(value);
    }
  }

  [itemsProperty.setNative](value: any) {
    this.setObservableArrayInstance(value);

    if (!value) {
      this.mIsInit = false;
    }
  }

  private _setPadding(newPadding: { top?: number; right?: number; bottom?: number; left?: number }) {
    const layout = this.nativeViewProtected;
    const sectionInset = layout['contentInset'];
    const padding = {
      top: sectionInset.top,
      right: sectionInset.right,
      bottom: sectionInset.bottom,
      left: sectionInset.left,
    };
    const newValue = Object.assign(padding, newPadding);
    layout['contentInset'] = newValue;
  }
  [paddingTopProperty.setNative](value: CoreTypes.LengthType) {
    this._setPadding({ top: Utils.layout.toDeviceIndependentPixels(this.effectivePaddingTop) });
  }

  [paddingRightProperty.setNative](value: CoreTypes.LengthType) {
    this._setPadding({ right: Utils.layout.toDeviceIndependentPixels(this.effectivePaddingRight) });
  }

  [paddingBottomProperty.setNative](value: CoreTypes.LengthType) {
    this._setPadding({ bottom: Utils.layout.toDeviceIndependentPixels(this.effectivePaddingBottom) });
  }

  [paddingLeftProperty.setNative](value: CoreTypes.LengthType) {
    this._setPadding({ left: Utils.layout.toDeviceIndependentPixels(this.effectivePaddingLeft) });
  }

  protected _observableArrayHandler = (args) => {
    if (!this.nativeViewProtected) {
      return;
    }

    const collectionView = this.nativeViewProtected;
    if (collectionView) {
      try {
        let offset = 0;
        collectionView.performBatchUpdatesCompletion(
          () => {
            this.mIsRefreshing = true;
            const array = [];
            switch (args.action) {
              case ChangeType.Add:
                for (let i = 0; i < args.addedCount; i++) {
                  array.push(NSIndexPath.indexPathForRowInSection(args.index + i, 0));
                }
                offset = collectionView.contentSize.width - collectionView.contentOffset.x;
                collectionView.insertItemsAtIndexPaths(array);
                break;
              case ChangeType.Delete:
                for (let i = 0; i < args.removed.length; i++) {
                  array.push(NSIndexPath.indexPathForItemInSection(args.index + i, 0));
                }
                collectionView.deleteItemsAtIndexPaths(array);
                break;
              case ChangeType.Splice:
                if (args.removed && args.removed.length > 0) {
                  for (let i = 0; i < args.removed.length; i++) {
                    array.push(NSIndexPath.indexPathForRowInSection(args.index + i, 0));
                  }
                  collectionView.deleteItemsAtIndexPaths(array);
                }

                if (args.addedCount > 0) {
                  const addedArray = [];
                  for (let i = 0; i < args.addedCount; i++) {
                    addedArray.push(NSIndexPath.indexPathForRowInSection(args.index + i, 0));
                  }
                  collectionView.insertItemsAtIndexPaths(addedArray);
                }
                break;
              case ChangeType.Update:
                collectionView.reloadItemsAtIndexPaths([NSIndexPath.indexPathForRowInSection(args.index, 0)]);
                break;
              default:
                break;
            }
            if (this.itemCount === 0) {
              this.mIsInit = false;
              selectedIndexProperty.nativeValueChange(this, -1);
            }
          },
          () => {
            if (collectionView.indexPathsForVisibleItems.count > 0) {
              const currentIndex = collectionView.indexPathsForVisibleItems.objectAtIndex(0).item;
              selectedIndexProperty.nativeValueChange(this, currentIndex);
            }
          }
        );
      } catch (err) {}
    }
  };

  _onItemsChanged(oldValue: any, newValue: any): void {}

  scrollToIndexAnimated(index: number, animate: boolean) {
    if (!this.nativeViewProtected) return;

    const contentSize = this.nativeViewProtected.contentSize;
    const size = this.orientation === 'vertical' ? contentSize.height : contentSize.width;
    if (size === 0) {
      return;
    }
    if (this._childrenCount === 0) {
      return;
    }

    const maxMinIndex = Math.min(Math.max(0, index), this._childrenCount - 1);
    let isNativeValueChanged: boolean = false;

    if (!this.isLoaded) {
      isNativeValueChanged = true;
    } else {
      const page = this.page;
      const frame = page && page.frame;

      if (frame) {
        if (frame._executingContext) {
          isNativeValueChanged = frame._executingContext.entry.resolvedPage !== page;
        } else {
          isNativeValueChanged = frame.currentPage !== page;
        }
      }
    }

    if (isNativeValueChanged) {
      return selectedIndexProperty.nativeValueChange(this, maxMinIndex);
    }

    // dispatch_async(main_queue, () => {
    if (this.mDataSource.collectionViewNumberOfItemsInSection(this.nativeViewProtected, 0) > maxMinIndex) {
      // when we have custom layouts (they don't occupy 100% of the parent) and we use custom transformers we need to call setContentOffsetAnimated to take size into account.
      // Reference: https://stackoverflow.com/a/53798708/6015400
      this.nativeViewProtected.setContentOffsetAnimated(CGPointMake(1, 0), !!animate);
      this.nativeViewProtected.scrollToItemAtIndexPathAtScrollPositionAnimated(NSIndexPath.indexPathForItemInSection(maxMinIndex, 0), this.orientation === 'vertical' ? UICollectionViewScrollPosition.CenteredVertically : UICollectionViewScrollPosition.CenteredHorizontally, !!animate);
    }

    selectedIndexProperty.nativeValueChange(this, maxMinIndex);
    // });
  }

  @profile
  public refresh(delayUpdateScrollPosition = false) {
    if (!this.isLoaded || !this.nativeView) {
      this._isDataDirty = true;
      return;
    }
    this._isDataDirty = false;
    this.mLastLayoutKey = this._effectiveItemWidth + '_' + this._effectiveItemHeight;

    // clear bindingContext when it is not observable because otherwise bindings to items won't reevaluate
    this.mMap.forEach((view, nativeView, map) => {
      if (!(view.bindingContext instanceof Observable)) {
        view.bindingContext = null;
      }
    });

    // TODO: this is ugly look here: https://github.com/nativescript-vue/nativescript-vue/issues/525
    // this.clearRealizedCells();
    // dispatch_async(main_queue, () => {
    this.nativeViewProtected.reloadData();
    this.nativeViewProtected.collectionViewLayout.invalidateLayout();
    if (delayUpdateScrollPosition) {
      setTimeout(() => {
        this._updateScrollPosition();
      }, 0);
    } else {
      this._updateScrollPosition();
    }
  }

  refreshVisibleItems() {
    const view = this.nativeViewProtected;
    if (!view) {
      return;
    }

    const visibles = view.indexPathsForVisibleItems;
    UIView.performWithoutAnimation(() => {
      view.performBatchUpdatesCompletion(() => {
        view.reloadItemsAtIndexPaths(visibles);
      }, null);
    });
  }

  _isDataDirty = false;
  public onLoaded() {
    super.onLoaded();
    if (this._isDataDirty && this._effectiveItemWidth !== undefined && this._effectiveItemHeight !== undefined) {
      this.refresh();
    }

    this.nativeViewProtected.delegate = this.mDelegate;
    if (!this.items && this._childrenCount > 0) {
      selectedIndexProperty.coerce(this);
      this._updateScrollPosition();
    }
  }

  public onUnloaded() {
    if (this.nativeViewProtected) {
      this.nativeViewProtected.delegate = null;
    }
    super.onUnloaded();
  }

  public disposeNativeView() {
    this.mDelegate = null;
    this.mDataSource = null;
    this.nativeViewProtected.delegate = null;
    this.mLayout = null;
    this.clearRealizedCells();
    super.disposeNativeView();
  }

  private clearRealizedCells() {
    this.mMap.forEach((value, key: PagerCell) => {
      this._removeContainer(key);
      this._clearCellViews(key);
    });
    this.mMap.clear();
  }
  private _clearCellViews(cell: PagerCell) {
    // if (cell && cell.view) {
    //     if (cell.view.nativeViewProtected) {
    //         cell.view.nativeViewProtected.removeFromSuperview();
    //     }

    //     cell.owner = undefined;
    // }
    const view = cell.view;
    if (!view) {
      return;
    }
    // This is to clear the StackLayout that is used to wrap ProxyViewContainer instances.
    if (view.parent && !(view.parent instanceof ListPager)) {
      this._removeView(view.parent);
    }
    // No need to request layout when we are removing cells.
    cell.owner = undefined;
    const preparing = this.mPreparingCell;
    this.mPreparingCell = true;
    if (view.parent && !(view.parent instanceof ListPager)) {
      if (!(view.parent instanceof ListPager)) {
        this._removeView(view.parent);
      } else {
        view.parent._removeView(view);
      }
    }
    this.mPreparingCell = preparing;
    this.mMap.delete(cell);
  }

  public _removeContainer(cell: PagerCell, index?: number): void {
    const view = cell.view;

    this.notify({
      eventName: ListPager.itemDisposingEvent,
      index,
      ios: cell,
      view,
    } as ItemEventData);
    if (view && view.parent) {
      // This is to clear the StackLayout that is used to wrap ProxyViewContainer instances.
      if (!(view.parent instanceof ListPager)) {
        this._removeView(view.parent);
      }

      view.parent._removeView(view);
    }
    this.mMap.delete(cell);
  }

  public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void {
    super.onMeasure(widthMeasureSpec, heightMeasureSpec);
    this.mMap.forEach((childView: any, pagerCell) => {
      View.measureChild(this, childView, childView._currentWidthMeasureSpec, childView._currentHeightMeasureSpec);
    });
  }

  public onLayout(left: number, top: number, right: number, bottom: number) {
    super.onLayout(left, top, right, bottom);
    if (this.iosOverflowSafeArea) {
      const safeArea = this.getSafeAreaInsets();
      this._effectiveItemHeight += safeArea.top + safeArea.bottom;
    }
    if (!this.nativeView) {
      return;
    }
    // this.nativeViewProtected.frame = this.nativeView.bounds;
    const layoutView = this.nativeViewProtected.collectionViewLayout;
    if (!layoutView) {
      return;
    }

    layoutView.invalidateLayout();

    const size = this._getSize();
    const width = Utils.layout.toDevicePixels(size.width);
    const height = Utils.layout.toDevicePixels(size.height);
    this.mMap.forEach((childView, pagerCell) => {
      View.layoutChild(this, childView, 0, 0, width, height);
    });

    // there is no need to call refresh if it was triggered before with same size.
    // this refresh is just to handle size change
    const layoutKey = this._effectiveItemWidth + '_' + this._effectiveItemHeight;
    if (this.mLastLayoutKey !== layoutKey) {
      this.refresh(true);
    }
  }

  public requestLayout(): void {
    // When preparing cell don't call super - no need to invalidate our measure when cell desiredSize is changed.
    if (!this.mPreparingCell) {
      super.requestLayout();
    }
  }

  public _prepareCell(cell: PagerCell, indexPath: NSIndexPath) {
    try {
      this.mPreparingCell = true;
      const index = indexPath.row;

      let view = cell.view;
      const template = this._getItemTemplate(indexPath.row);

      if (!view) {
        view = template.createView();
        if (!view && this._itemViewLoader !== undefined) {
          view = this._itemViewLoader(this._getItemTemplateKey(indexPath.row));
        }
      }
      const bindingContext = this._getDataItem(indexPath.row);
      const args = {
        eventName: ListPager.itemLoadingEvent,
        object: this,
        index,
        android: undefined,
        ios: cell,
        view,
        bindingContext,
      } as ItemEventData;

      this.notify(args);

      view = args.view || this._getDefaultItemContent(indexPath.row);

      // Proxy containers should not get treated as layouts.
      // Wrap them in a real layout as well.
      if (view instanceof ProxyViewContainer) {
        const sp = new StackLayout();
        sp.addChild(view);
        view = sp;
      }

      // If cell is reused it have old content - remove it first.
      if (!cell.view) {
        cell.owner = new WeakRef(view);
      } else if (cell.view !== view) {
        this.mMap.delete(cell);
        this._removeContainer(cell, index);
        (cell.view.nativeViewProtected as UIView).removeFromSuperview();
        cell.owner = new WeakRef(view);
      }
      if (view) {
        view.bindingContext = bindingContext;
      }
      this.mMap.set(cell, view);

      if (view && !view.parent) {
        this._addView(view);
        // prevent infinit request layout
        // view['performLayout'] = () => {
        //     this._layoutCell(view, indexPath);
        //     const size = this._getSize();
        //     const width = layout.toDevicePixels(size.width);
        //     const height = layout.toDevicePixels(size.height);
        //     if (view && view.isLayoutRequired) {
        //         View.layoutChild(this, view, 0, 0, width, height);
        //     }
        // };
        if (this.iosOverflowSafeArea) {
          const innerView = UICellView.new() as UICellView;
          innerView.view = new WeakRef(view);
          innerView.addSubview(view.nativeViewProtected);
          cell.contentView.addSubview(innerView);
        } else {
          cell.contentView.addSubview(view.nativeViewProtected);
        }
      }

      this._layoutCell(view, indexPath);
    } finally {
      this.mPreparingCell = false;
    }
  }

  _layoutCell(cellView: View, index: NSIndexPath) {
    if (cellView) {
      const size = this._getSize();
      const width = Utils.layout.toDevicePixels(size.width);
      const height = Utils.layout.toDevicePixels(size.height);
      const widthMeasureSpec = Utils.layout.makeMeasureSpec(width, Utils.layout.EXACTLY);

      const heightMeasureSpec = Utils.layout.makeMeasureSpec(height, Utils.layout.EXACTLY);

      const measured = View.measureChild(this, cellView, widthMeasureSpec, heightMeasureSpec);
    }
  }

  get horizontalOffset(): number {
    return this.nativeViewProtected ? this.nativeViewProtected.contentOffset.x : 0;
  }

  get verticalOffset(): number {
    return this.nativeViewProtected ? this.nativeViewProtected.contentOffset.y : 0;
  }

  _getSize(): { width: number; height: number } {
    let width = Utils.layout.toDeviceIndependentPixels(this._effectiveItemWidth);
    let height = Utils.layout.toDeviceIndependentPixels(this._effectiveItemHeight);
    if (this.orientation === 'vertical') {
      height = height;
    } else {
      width = width;
    }
    if (Number.isNaN(width)) {
      width = 0;
    }

    if (Number.isNaN(height)) {
      height = 0;
    }
    return { width, height };
  }
}

@NativeClass
class PagerCell extends UICollectionViewCell {
  public owner: WeakRef<View>;
  public index: number;

  public get view(): View {
    return this.owner ? this.owner.get() : null;
  }

  public static initWithEmptyBackground(): PagerCell {
    const cell = PagerCell.new() as PagerCell;
    // Clear background by default - this will make cells transparent
    cell.backgroundColor = null;
    return cell;
  }

  public willMoveToSuperview(newSuperview: UIView): void {
    const parent = (this.view ? this.view.parent : null) as ListPager;

    // When inside ListPager and there is no newSuperview this cell is
    // removed from native visual tree so we remove it from our tree too.
    if (parent && !newSuperview) {
      parent._removeContainer(this, this.index);
    }
  }
}

@NativeClass
@ObjCClass(UICollectionViewDelegate, UICollectionViewDelegateFlowLayout)
class UICollectionDelegateImpl extends NSObject implements UICollectionViewDelegate, UICollectionViewDelegateFlowLayout {
  private _owner: WeakRef<ListPager>;
  isScrolling = false;

  public static initWithOwner(owner: WeakRef<ListPager>): UICollectionDelegateImpl {
    const delegate = UICollectionDelegateImpl.alloc().init() as UICollectionDelegateImpl;
    delegate._owner = owner;
    return delegate;
  }

  public collectionViewLayoutInsetForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): UIEdgeInsets {
    const owner = this._owner ? this._owner.get() : null;
    if (owner) {
      if (owner.orientation === 'vertical') {
        return new UIEdgeInsets({
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
        });
      }

      return new UIEdgeInsets({
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      });
    }
    return new UIEdgeInsets({ bottom: 0, left: 0, right: 0, top: 0 });
  }

  public collectionViewLayoutSizeForItemAtIndexPath(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, indexPath: NSIndexPath): CGSize {
    const owner = this._owner && this._owner.get();
    if (!owner) return CGSizeZero;
    const size = owner._getSize();
    return CGSizeMake(size.width, size.height);
  }

  public collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath) {
    const owner = this._owner && this._owner.get();
    if (owner) {
      if (!owner.mIsInit) {
        owner._updateScrollPosition();
        collectionView.collectionViewLayout.invalidateLayout();
        owner.mIsInit = true;
      }
      if (owner.items && indexPath.row === owner.lastIndex - owner.loadMoreCount) {
        owner.notify<EventData>({
          eventName: ListPager.loadMoreItemsEvent,
          object: owner,
        });
      }
    }

    if (cell.preservesSuperviewLayoutMargins) {
      cell.preservesSuperviewLayoutMargins = false;
    }

    if (cell.layoutMargins) {
      cell.layoutMargins = UIEdgeInsetsZero;
    }
  }

  public collectionViewLayoutMinimumLineSpacingForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number {
    return 0;
  }

  public scrollViewWillBeginDragging(scrollView: UIScrollView): void {
    const owner = this._owner && this._owner.get();
    if (owner) {
      if (owner.lastEvent === 0) {
        owner.notify({
          eventName: ListPager.swipeStartEvent,
          object: owner,
        });
        owner.lastEvent = 1;
      }
    }
  }

  public scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void {
    const owner = this._owner ? this._owner.get() : null;
    if (owner) {
      owner.notify({
        eventName: ListPager.swipeEvent,
        object: owner,
      });
    }
  }

  public scrollViewDidScroll(scrollView: UIScrollView): void {
    const owner = this._owner.get();
    if (owner) {
      let width: number;
      let offset: number;
      const size = owner._getRealWidthHeight();
      let total: number;
      if (owner.orientation === 'vertical') {
        width = size.height;
        offset = scrollView.contentOffset.y;
        total = scrollView.contentSize.height - scrollView.bounds.size.height;
      } else {
        width = size.width;
        offset = scrollView.contentOffset.x;
        total = scrollView.contentSize.width - scrollView.bounds.size.width;
      }
      const percent = offset / total;
      const progress = percent * (owner.itemCount - 1);
      // if (owner.indicatorView && owner.indicatorView.setWithProgressAnimated && !Number.isNaN(progress)) {
      //     owner.indicatorView.progress = progress;
      // }
      const index = parseInt(progress.toFixed(0), 10);

      owner.notify({
        object: owner,
        eventName: ListPager.scrollEvent,
        selectedIndex: Math.floor(progress),
        currentPosition: progress,
        scrollX: owner.horizontalOffset,
        scrollY: owner.verticalOffset,
      });

      if (owner.lastEvent === 1) {
        owner.notify({
          eventName: ListPager.swipeOverEvent,
          object: owner,
        });
        owner.lastEvent = 1;
      }
    }
  }

  scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void {}

  public scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>) {
    const owner = this._owner ? this._owner.get() : null;

    if (!owner) return;

    if (owner.lastEvent === 1) {
      owner.notify({
        eventName: ListPager.swipeEndEvent,
        object: owner,
      });
      owner.lastEvent = 0;
    }
  }
}

@NativeClass
@ObjCClass(UICollectionViewDataSource)
class UICollectionViewDataSourceImpl extends NSObject implements UICollectionViewDataSource {
  _owner: WeakRef<ListPager>;

  public static initWithOwner(owner: WeakRef<ListPager>): UICollectionViewDataSourceImpl {
    const delegate = UICollectionViewDataSourceImpl.alloc().init() as UICollectionViewDataSourceImpl;
    delegate._owner = owner;
    return delegate;
  }

  public collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell {
    const owner = this._owner ? this._owner.get() : null;
    let cell;
    let count = 0;
    if (owner) {
      count = owner._childrenCount;
    }
    if (owner && !owner.items && count > 0) {
      const index = indexPath.row;
      const data = owner._childrenViews[index];
      const viewType = data.type;
      owner.mPreparingCell = true;
      collectionView.registerClassForCellWithReuseIdentifier(PagerCell.class(), `static-${viewType}`);
      cell = collectionView.dequeueReusableCellWithReuseIdentifierForIndexPath(`static-${viewType}`, indexPath) || PagerCell.initWithEmptyBackground();
      cell.index = index;
      const view = data.view;

      const firstRender = !cell.view;
      if (!cell.view) {
        cell.owner = new WeakRef(view);
      } else if (cell.view !== view) {
        owner._removeView(view);
        // (cell.view.nativeViewProtected as UIView).removeFromSuperview();
        cell.owner = new WeakRef(view);
      }

      if (view && !view.parent) {
        owner._addView(view);
        const innerView = UICellView.new() as UICellView;
        innerView.view = new WeakRef(view);
        innerView.addSubview(view.nativeViewProtected);
        cell.contentView.addSubview(innerView);
        owner.mMap.set(cell, view);
      }

      if (firstRender) {
        view['iosIgnoreSafeArea'] = true;
      }
      owner._layoutCell(view, indexPath);
      const size = owner._getSize();
      const width = Utils.layout.toDevicePixels(size.width);
      const height = Utils.layout.toDevicePixels(size.height);
      if (view && (view as any).isLayoutRequired) {
        View.layoutChild(owner, view, 0, 0, width, height);
      }
      owner.mPreparingCell = false;
      return cell;
    }

    const template = owner && owner._getItemTemplate(indexPath.row);
    cell = collectionView.dequeueReusableCellWithReuseIdentifierForIndexPath(template.key, indexPath) || PagerCell.initWithEmptyBackground();
    cell.index = indexPath;
    const firstRender = !cell.view;
    if (owner) {
      const size = owner._getSize();
      owner._prepareCell(cell, indexPath);
      const cellView: any = (cell as PagerCell).view;
      if (firstRender) {
        cellView['iosIgnoreSafeArea'] = true;
      }
      if (cellView && cellView.isLayoutRequired) {
        View.layoutChild(owner, cellView, 0, 0, Utils.layout.toDevicePixels(size.width), Utils.layout.toDevicePixels(size.height));
      }
    }

    return cell;
  }

  public collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number {
    const owner = this._owner ? this._owner.get() : null;
    // make sure we dont start to load static view if the pager is not loaded.
    // otherwise static items wont "load"
    if (!owner || !owner.isLoaded) return 0;
    return owner._childrenCount;
  }

  public numberOfSectionsInCollectionView(collectionView: UICollectionView): number {
    return 1;
  }
}

@NativeClass
class UICollectionViewFlowLinearLayoutImpl extends UICollectionViewFlowLayout {
  _owner: WeakRef<ListPager>;
  _curl: CATransition;

  public static initWithOwner(owner: WeakRef<ListPager>): UICollectionViewFlowLinearLayoutImpl {
    const layout = UICollectionViewFlowLinearLayoutImpl.new() as UICollectionViewFlowLinearLayoutImpl;
    layout._owner = owner;
    layout._curl = CATransition.animation();
    layout.scrollDirection = UICollectionViewScrollDirection.Horizontal;
    layout.minimumLineSpacing = 16; // separación entre items
    layout.sectionInset = { top: 0, left: 32, bottom: 0, right: 32 };

    return layout;
  }

  public layoutAttributesForElementsInRect(rect: CGRect) {
    // const owner = this._owner ? this._owner.get() : null;
    // const originalLayoutAttribute = super.layoutAttributesForElementsInRect(rect);
    // const visibleLayoutAttributes = NSMutableArray.alloc().init();
    // return originalLayoutAttribute;

    const attributes = super.layoutAttributesForElementsInRect(rect).mutableCopy() as NSMutableArray<UICollectionViewLayoutAttributes>;
    const collectionViewCenter = this.collectionView!.bounds.size.width / 2;
    const offset = this.collectionView!.contentOffset.x;

    for (let i = 0; i < attributes.count; i++) {
      const attr = attributes.objectAtIndex(i);
      const distanceFromCenter = Math.abs(attr.center.x - offset - collectionViewCenter);
      const maxDistance = this.itemSize.width + this.minimumLineSpacing;
      const scale = Math.max(0.85, 1 - (distanceFromCenter / maxDistance) * 0.15);
      attr.transform = CGAffineTransformMakeScale(scale, scale);
      attr.zIndex = Math.round(scale * 10);
      attr.alpha = scale; // Opcional: desvanecer un poco los que están lejos
    }
    return attributes;
  }

  public shouldInvalidateLayoutForBoundsChange(newBounds: CGRect): boolean {
    return true;
  }

  public initialLayoutAttributesForAppearingItemAtIndexPath(itemIndexPath: NSIndexPath): UICollectionViewLayoutAttributes {
    const attrs = super.initialLayoutAttributesForAppearingItemAtIndexPath(itemIndexPath);
    attrs.alpha = 1;
    return attrs;
  }

  public finalLayoutAttributesForDisappearingItemAtIndexPath(itemIndexPath: NSIndexPath): UICollectionViewLayoutAttributes {
    const attrs = super.finalLayoutAttributesForDisappearingItemAtIndexPath(itemIndexPath);
    attrs.alpha = 1;
    return attrs;
  }

  targetContentOffsetForProposedContentOffsetWithScrollingVelocity(proposedContentOffset: CGPoint, velocity: CGPoint) {
    const owner = this._owner ? this._owner.get() : null;
    if (!this.collectionView || !owner) {
      return super.targetContentOffsetForProposedContentOffsetWithScrollingVelocity(proposedContentOffset, velocity);
    }
    const size = owner._getRealWidthHeight();
    if (this.scrollDirection === UICollectionViewScrollDirection.Horizontal) {
      const pageWidth = size.width + this.minimumInteritemSpacing;
      const approximatePage = this.collectionView.contentOffset.x / pageWidth;
      const currentPage = velocity.x === 0 ? Math.round(approximatePage) : velocity.x < 0.0 ? Math.floor(approximatePage) : Math.ceil(approximatePage);
      const flickVelocity = velocity.x * 0.3;
      const flickedPages = Math.abs(Math.round(flickVelocity)) <= 1 ? 0 : Math.round(flickVelocity);
      const newPageIndex = currentPage + flickedPages;
      const actualIndex = Math.min(Math.max(newPageIndex, 0), owner._childrenCount - 1);
      selectedIndexProperty.nativeValueChange(owner, actualIndex);
      const newHorizontalOffset = newPageIndex * pageWidth - this.collectionView.contentInset.left;

      return CGPointMake(newHorizontalOffset, proposedContentOffset.y);
    } else {
      const pageHeight = size.height;
      const approximatePage = Math.max(0, this.collectionView.contentOffset.y / pageHeight);

      const currentPage = velocity.y === 0 ? Math.round(approximatePage) : velocity.y < 0.0 ? Math.floor(approximatePage) : Math.ceil(approximatePage);
      const flickVelocity = velocity.y * 0.3;
      const flickedPages = Math.abs(Math.round(flickVelocity)) <= 1 ? 0 : Math.round(flickVelocity);
      const newPageIndex = currentPage + flickedPages;
      selectedIndexProperty.nativeValueChange(owner, Math.min(Math.max(newPageIndex, 0), owner._childrenCount - 1));
      const newVerticalOffset = newPageIndex * pageHeight - this.collectionView.contentInset.top;
      return CGPointMake(proposedContentOffset.x, newVerticalOffset);
    }
  }
}

@NativeClass()
export class Material3CarouselFlowLayout extends UICollectionViewFlowLayout {
  static new(): Material3CarouselFlowLayout {
    return <Material3CarouselFlowLayout>super.new();
  }

  prepareLayout(): void {
    super.prepareLayout();
    this.scrollDirection = UICollectionViewScrollDirection.Horizontal;
    this.minimumLineSpacing = 16;
    this.itemSize = CGSizeMake(this.collectionView.bounds.size.width * 0.7, this.collectionView.bounds.size.height * 0.85);
    // this.sectionInset = UIEdgeInsetsMake(0, (this.collectionView.bounds.size.width - this.itemSize.width) / 2, 0, (this.collectionView.bounds.size.width - this.itemSize.width) / 2);
    this.collectionView.decelerationRate = UIScrollViewDecelerationRateFast;
  }

  layoutAttributesForElementsInRect(rect: CGRect): NSArray<UICollectionViewLayoutAttributes> {
    const attributesArray = NSArray.arrayWithArray<UICollectionViewLayoutAttributes>(super.layoutAttributesForElementsInRect(rect));

    if (!attributesArray) return attributesArray;

    const visibleRect = CGRectMake(this.collectionView.contentOffset.x, this.collectionView.contentOffset.y, this.collectionView.bounds.size.width, this.collectionView.bounds.size.height);

    const centerX = CGRectGetMidX(visibleRect);

    for (let i = 0; i < attributesArray.count; i++) {
      const attributes = attributesArray.objectAtIndex(i);
      const distance = Math.abs(attributes.center.x - centerX);
      const normalizedDistance = distance / this.itemSize.width;

      if (distance < this.itemSize.width) {
        // Escala (entre 0.85 y 1.0)
        const zoom = 1 - 0.15 * normalizedDistance;
        attributes.transform3D = CATransform3DMakeScale(zoom, zoom, 1.0);

        // Alpha (entre 0.5 y 1.0)
        attributes.alpha = 1 - 0.5 * normalizedDistance;

        // Efecto profundidad (Z)
        attributes.zIndex = Math.round((1 - normalizedDistance) * 10);
      } else {
        attributes.alpha = 0.5;
        attributes.transform3D = CATransform3DMakeScale(0.85, 0.85, 1.0);
        attributes.zIndex = 0;
      }
    }

    return attributesArray;
  }

  shouldInvalidateLayoutForBoundsChange(newBounds: CGRect): boolean {
    return true;
  }

  targetContentOffsetForProposedContentOffsetWithScrollingVelocity(proposedContentOffset: CGPoint, velocity: CGPoint): CGPoint {
    const targetRect = CGRectMake(proposedContentOffset.x, 0, this.collectionView.bounds.size.width, this.collectionView.bounds.size.height);

    const attributesArray = super.layoutAttributesForElementsInRect(targetRect);
    const centerX = proposedContentOffset.x + this.collectionView.bounds.size.width / 2;

    let offsetAdjustment = Number.MAX_VALUE;

    for (let i = 0; i < attributesArray.count; i++) {
      const layoutAttributes = attributesArray.objectAtIndex(i);
      const itemCenterX = layoutAttributes.center.x;
      if (Math.abs(itemCenterX - centerX) < Math.abs(offsetAdjustment)) {
        offsetAdjustment = itemCenterX - centerX;
      }
    }

    return CGPointMake(proposedContentOffset.x + offsetAdjustment, proposedContentOffset.y);
  }
}
