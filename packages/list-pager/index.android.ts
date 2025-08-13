import { ChangeType, ContentView, CoreTypes, Device, KeyedTemplate, paddingBottomProperty, paddingLeftProperty, paddingRightProperty, paddingTopProperty, Property, ProxyViewContainer, Utils, View, ViewBase } from '@nativescript/core';
import { ListPagerCommon } from './common';

import { ItemEventData, Orientation, itemTemplatesProperty, itemsProperty, orientationProperty, selectedIndexProperty } from './common';

export * from './common';

const sdkVersion = parseInt(Device.sdkVersion, 10);

export const pagesCountProperty = new Property<ListPager, number>({
  name: 'pagesCount',
  defaultValue: -1,
  valueConverter: parseInt,
});

const PLACEHOLDER = 'PLACEHOLDER';

export class ListPager extends ListPagerCommon {
  nativeViewProtected: androidx.recyclerview.widget.RecyclerView;
  _androidViewId: number = -1;
  public pagesCount: number;
  widthMeasureSpec: number;
  heightMeasureSpec: number;

  public itemTemplateUpdated(oldData: any, newData: any): void {}

  private _listPagerAdapter: PagerRecyclerAdapter;
  private _views: any[];
  private _ListpageListener: any;
  _viewHolders = new Set<PagerViewHolder>();
  public _childrenViewsType = new Map<number, View>();
  public _realizedTemplates = new Map<string, Map<android.view.View, View>>();
  lastEvent = 0;

  constructor() {
    super();
  }

  get views() {
    return this._views;
  }

  set views(value: any[]) {
    this._views = value;
  }

  get pagerAdapter() {
    return this._listPagerAdapter;
  }

  setObservableArrayInstance(value) {
    super.setObservableArrayInstance(value);
  }

  public createNativeView() {
    const nativeView = new androidx.recyclerview.widget.RecyclerView(this._context);
    nativeView.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT));

    const carouseLayout: any = new com.google.android.material.carousel.CarouselLayoutManager(new com.google.android.material.carousel.HeroCarouselStrategy(), androidx.recyclerview.widget.RecyclerView.HORIZONTAL);
    carouseLayout.carouselAlignment = com.google.android.material.carousel.CarouselLayoutManager.ALIGNMENT_START;
    const snapHelper: com.google.android.material.carousel.CarouselSnapHelper = new com.google.android.material.carousel.CarouselSnapHelper();
    snapHelper.attachToRecyclerView(nativeView);
    nativeView.setLayoutManager(carouseLayout);
    nativeView.setLayoutDirection(androidx.recyclerview.widget.LinearLayoutManager.VERTICAL);

    if (sdkVersion >= 21) {
      nativeView.setNestedScrollingEnabled(true);
    }
    if (this.orientation === 'vertical') {
      // nativeView.setOrientation(androidx.viewpager2.widget.ViewPager2.ORIENTATION_VERTICAL);
    } else {
      // nativeView.setOrientation(androidx.viewpager2.widget.ViewPager2.ORIENTATION_HORIZONTAL);
    }

    return nativeView;
  }

  initNativeView(): void {
    this.on(View.layoutChangedEvent, this.onLayoutChange, this);
    super.initNativeView();
    const nativeView = this.nativeViewProtected;
    initPagerRecyclerAdapter();
    this._listPagerAdapter = new PagerRecyclerAdapter(new WeakRef(this));
    // initPagerChangeCallback();
    // this._ListpageListener = new PageChangeCallback(new WeakRef(this));
    nativeView.setAdapter(this._listPagerAdapter);
    if (this._androidViewId < 0) {
      this._androidViewId = android.view.View.generateViewId();
    }
  }

  private enumerateViewHolders<T = any>(cb: (v: PagerViewHolder) => T) {
    let result: T, v: PagerViewHolder;
    for (let it = this._viewHolders.values(), cellItemView: PagerViewHolder = null; (cellItemView = it.next().value); ) {
      if (cellItemView['position'] === undefined) {
        continue;
      }
      result = cb(cellItemView);
      if (result) {
        return result;
      }
    }
    return result;
  }

  getChildView(index: number): View {
    if (this._childrenViews) {
      return this._childrenViews[index]?.view;
    }
    return this.enumerateViewHolders<View>((v) => {
      if (v.getAdapterPosition() === index) {
        return v.view[PLACEHOLDER] === true ? (v.view as ContentView).content : v.view;
      }
      return undefined;
    });
  }

  protected _removeChildView(index: number) {
    const type = this._childrenViews[index].type;
    this._childrenViewsType.delete(type);
    super._removeChildView(index);
  }

  protected _addChildView(view, type) {
    super._addChildView(view, type);
    this._childrenViewsType.set(type, view);
  }

  onLayoutChange(args: any) {}

  protected _observableArrayHandler = (args) => {
    if (this.pagerAdapter) {
      switch (args.action) {
        case ChangeType.Add:
          this.pagerAdapter.notifyItemRangeInserted(args.index, args.addedCount);
          return;
        case ChangeType.Delete:
          this.pagerAdapter.notifyItemRangeRemoved(args.index, args.removed.length);
          return;
        case ChangeType.Splice:
          if (args.removed.length > 0) {
            this.pagerAdapter.notifyItemRangeRemoved(args.index, args.removed.length);
          }
          if (args.addedCount > 0) {
            this.pagerAdapter.notifyItemRangeInserted(args.index, args.addedCount);
          }
          return;
        case ChangeType.Update:
          this.pagerAdapter.notifyItemChanged(args.index);
          return;
        default:
          break;
      }
    }
  };

  disposeViewHolderViews() {
    this.enumerateViewHolders((v) => {
      const view = v.view;
      this.notify({
        eventName: ListPager.itemDisposingEvent,
        index: v.getAdapterPosition(),
        android: v,
        view,
      } as ItemEventData);
      // if (view && view.isLoaded) {
      //     view.callUnloaded();
      // }
      this._removeViewCore(view);
      // view._isAddedToNativeVisualTree = false;
      // //@ts-ignore
      // view.parent = null;
      // view._tearDownUI();
    });
    this._viewHolders = new Set();
  }

  public disposeNativeView() {
    this.off(View.layoutChangedEvent, this.onLayoutChange, this);
    this._childrenViews = null;
    this.disposeViewHolderViews();
    this._realizedTemplates.clear();
    this._ListpageListener = null;
    // setAdapter(null) will destroy views
    this.nativeViewProtected.setAdapter(null);
    this._listPagerAdapter = null;
    super.disposeNativeView();
  }

  get _childrenCount(): number {
    return (this.items && this.items.length) || (this._childrenViews && this._childrenViews.length) || 0;
  }

  [itemsProperty.setNative](value: any) {
    this.setObservableArrayInstance(value);
  }

  private _setPadding(newPadding: { top?: number; right?: number; bottom?: number; left?: number }) {
    const nativeView = this.nativeViewProtected;
    const padding = {
      top: nativeView.getPaddingTop(),
      right: nativeView.getPaddingRight(),
      bottom: nativeView.getPaddingBottom(),
      left: nativeView.getPaddingLeft(),
    };
    // tslint:disable-next-line:prefer-object-spread
    const newValue = Object.assign(padding, newPadding);
    nativeView.setClipToPadding(false);
    nativeView.setPadding(newValue.left, newValue.top, newValue.right, newValue.bottom);
  }

  [paddingTopProperty.getDefault](): CoreTypes.LengthType {
    return { value: this._defaultPaddingTop, unit: 'px' };
  }
  [paddingTopProperty.setNative](value: CoreTypes.LengthType) {
    this._setPadding({ top: this.effectivePaddingTop });
  }

  [paddingRightProperty.getDefault](): CoreTypes.LengthType {
    return { value: this._defaultPaddingRight, unit: 'px' };
  }
  [paddingRightProperty.setNative](value: CoreTypes.LengthType) {
    this._setPadding({ right: this.effectivePaddingRight });
  }

  [paddingBottomProperty.getDefault](): CoreTypes.LengthType {
    return { value: this._defaultPaddingBottom, unit: 'px' };
  }
  [paddingBottomProperty.setNative](value: CoreTypes.LengthType) {
    this._setPadding({ bottom: this.effectivePaddingBottom });
  }

  [paddingLeftProperty.getDefault](): CoreTypes.LengthType {
    return { value: this._defaultPaddingLeft, unit: 'px' };
  }
  [paddingLeftProperty.setNative](value: CoreTypes.LengthType) {
    this._setPadding({ left: this.effectivePaddingLeft });
  }

  private _updateScrollPosition() {
    const index = this.selectedIndex;
    const nativeView = this.nativeViewProtected;
  }

  onLoaded(): void {
    super.onLoaded();
  }

  [selectedIndexProperty.setNative](value: number, animated = true, requestTransform = false) {
    const nativeView = this.nativeViewProtected;
    if (this.isLoaded && nativeView) {
      const index = value;
    }
  }

  public scrollToIndexAnimated(value: number, animate: boolean, requestTransform = false) {
    const nativeView = this.nativeViewProtected;
    if (nativeView) {
      const index = value;
    }
  }

  _onItemsChanged(oldValue: any, newValue: any): void {}

  refresh() {
    const nativeView = this.nativeViewProtected;
    if (nativeView && this._listPagerAdapter) {
      // nativeView.requestLayout();
      nativeView.getAdapter().notifyDataSetChanged();
    }
  }
  bindedViewHolders: Set<number> = new Set();
  refreshVisibleItems() {
    const view = this.nativeViewProtected;
    if (!view) {
      return;
    }
    const ids = Array.from(this.bindedViewHolders).sort((a, b) => a - b);
    this.pagerAdapter.notifyItemRangeChanged(ids[0], ids[ids.length - 1] - ids[0] + 1);
  }

  getViewForItemAtIndex(index: number) {
    return this.getChildView(index);
  }
  onUnloaded() {
    // this._android.setAdapter(null);
    super.onUnloaded();
  }
  eachChild(callback: (child: ViewBase) => boolean) {
    super.eachChild(callback);
    // used for css updates (like theme change)
    this.enumerateViewHolders((v) => {
      const view = v.view;
      if (view) {
        if (view.parent instanceof ListPager) {
          callback(view);
        } else {
          // in some cases (like item is unloaded from another place (like angular) view.parent becomes undefined)
          if (view.parent) {
            callback(view.parent);
          }
        }
      }
    });
  }

  updateAdapter() {
    this._listPagerAdapter.notifyDataSetChanged();
  }

  _selectedIndexUpdatedFromNative(newIndex: number) {}

  [itemTemplatesProperty.setNative](value: KeyedTemplate[]) {
    this._itemTemplatesInternal = new Array<KeyedTemplate>(this._defaultTemplate);
    if (value) {
      this._itemTemplatesInternal = this._itemTemplatesInternal.concat(value);
    }

    this._listPagerAdapter = new PagerRecyclerAdapter(new WeakRef(this));
    this.nativeViewProtected.setAdapter(this._listPagerAdapter);
    this.refresh();
  }

  [itemTemplatesProperty.getDefault](): KeyedTemplate[] {
    return null;
  }

  public [orientationProperty.setNative](value: Orientation) {
    if (value === 'vertical') {
    } else {
    }
  }

  _horizontalOffset: number = 0;
  get horizontalOffset(): number {
    return this._horizontalOffset / Utils.layout.getDisplayDensity();
  }

  _verticalOffset: number = 0;
  get verticalOffset(): number {
    return this._verticalOffset / Utils.layout.getDisplayDensity();
  }

  [pagesCountProperty.setNative](value: number) {
    const nativeView = this.nativeViewProtected;
    if (nativeView && (value === -1 || value > 0)) {
      this._listPagerAdapter.notifyDataSetChanged();
    }
  }

  _nextIndex(): number {
    const next = this.selectedIndex + 1;
    return next;
  }

  get itemCount(): number {
    return this._childrenCount ? this._childrenCount : 0;
  }

  get lastIndex(): number {
    if (this.items && this.items.length === 0) {
      return 0;
    }
    return this.itemCount - 1;
  }

  static getProgress(indicator, position, positionOffset, isRtl) {
    const count = indicator.getCount();
    let selectedPosition = indicator.getSelection();

    if (isRtl) {
      position = count - 1 - position;
    }

    if (position < 0) {
      position = 0;
    } else if (position > count - 1) {
      position = count - 1;
    }

    const isRightOverScrolled = position > selectedPosition;
    let isLeftOverScrolled;

    if (isRtl) {
      isLeftOverScrolled = position - 1 < selectedPosition;
    } else {
      isLeftOverScrolled = position + 1 < selectedPosition;
    }

    if (isRightOverScrolled || isLeftOverScrolled) {
      selectedPosition = position;
    }

    const slideToRightSide = selectedPosition === position && positionOffset !== 0;
    let selectingPosition;
    let selectingProgress;

    if (slideToRightSide) {
      selectingPosition = isRtl ? position - 1 : position + 1;
      selectingProgress = positionOffset;
    } else {
      selectingPosition = position;
      selectingProgress = 1 - positionOffset;
    }

    if (selectingProgress > 1) {
      selectingProgress = 1;
    } else if (selectingProgress < 0) {
      selectingProgress = 0;
    }

    return [selectingPosition, selectingProgress];
  }
}

pagesCountProperty.register(ListPager);

interface PagerRecyclerAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<any> {
  // tslint:disable-next-line:no-misused-new
  new (owner: WeakRef<ListPager>): PagerRecyclerAdapter;
  getPosition(index: number): number;
  lastIndex(): number;
  getIndex(index: number): number;
}

let PagerRecyclerAdapter: PagerRecyclerAdapter;

function initPagerRecyclerAdapter() {
  if (PagerRecyclerAdapter) {
    return;
  }

  @NativeClass
  class PagerRecyclerAdapterImpl extends androidx.recyclerview.widget.RecyclerView.Adapter<any> {
    owner: WeakRef<ListPager>;

    constructor(owner: WeakRef<ListPager>) {
      super();
      this.owner = owner;
      return global.__native(this);
    }

    // helper para dp -> px
    private dpToPx(context: android.content.Context, dp: number) {
      return Math.round(android.util.TypedValue.applyDimension(android.util.TypedValue.COMPLEX_UNIT_DIP, dp, context.getResources().getDisplayMetrics()));
    }

    onCreateViewHolder(parent: android.view.ViewGroup, viewType: number): any {
      const owner = this.owner ? this.owner.get() : null;
      if (!owner) {
        return null;
      }

      // Obtenemos la posible vista síncrona del template (si existe)
      const template = owner._itemTemplatesInternal[viewType];
      let createdView: View = null;
      try {
        createdView = template.createView();
      } catch (e) {
        // ignore
      }
      if (!createdView && owner._itemViewLoader !== undefined) {
        createdView = owner._itemViewLoader(template.key);
      }

      const isNonSync = createdView === undefined || createdView === null || createdView instanceof ProxyViewContainer;

      const context = parent.getContext();

      // 1) Crear MaskableFrameLayout (la vista nativa que exige CarouselLayoutManager)
      const maskableLayout: com.google.android.material.carousel.MaskableFrameLayout = new com.google.android.material.carousel.MaskableFrameLayout(context);
      const matchParent = android.view.ViewGroup.LayoutParams.MATCH_PARENT;
      const layoutParams = new android.view.ViewGroup.MarginLayoutParams(matchParent, matchParent);
      const marginStart = Utils.layout.toDevicePixels(4);
      const marginEnd = Utils.layout.toDevicePixels(4);
      layoutParams.setMarginStart(marginStart);
      layoutParams.setMarginEnd(marginEnd);

      (maskableLayout as any).setLayoutParams(layoutParams);

      try {
        const attrName = 'shapeAppearanceCornerExtraLarge';
        // Primero busca en el package de la app (recursos fusionados). Si no lo encuentra, intenta en el paquete material.
        let attrId = context.getResources().getIdentifier(attrName, 'attr', context.getPackageName());
        if (attrId === 0) {
          attrId = context.getResources().getIdentifier(attrName, 'attr', 'com.google.android.material');
        }

        if (attrId !== 0) {
          // builder(context, defStyleAttr, defStyleRes) — si falla, capturamos
          try {
            const shapeModel = com.google.android.material.shape.ShapeAppearanceModel.builder(context, attrId, 0).build();
            (maskableLayout as any).setShapeAppearanceModel(shapeModel);
          } catch (e) {
            // fallback: crear modelo por defecto (sin estilo)
            try {
              const shapeModel2 = new com.google.android.material.shape.ShapeAppearanceModel();
              (maskableLayout as any).setShapeAppearanceModel(shapeModel2);
            } catch (err) {
              // ignore
            }
          }
        } else {
          // attr no encontrado: opcionalmente puedes crear un ShapeAppearanceModel por código
          // console.log("shapeAppearanceCornerExtraLarge no encontrado en recursos");
        }
      } catch (e) {
        console.log('warning: error aplicando shapeAppearance', e);
      }

      // Foreground selectable (?attr/selectableItemBackground)
      try {
        const attrsArray = java.lang.reflect.Array.newInstance(java.lang.Integer.TYPE, 1);
        attrsArray[0] = android.R.attr.selectableItemBackground;
        const typedArray = context.obtainStyledAttributes(attrsArray);
        const selectableDrawable = typedArray.getDrawable(0);
        typedArray.recycle();
        if (selectableDrawable) {
          (maskableLayout as any).setForeground(selectableDrawable);
        }
      } catch (e) {
        // no crítico si falla
      }

      // Opcional: clip/outline
      try {
        (maskableLayout as any).setClipToOutline(true);
      } catch (e) {
        /* ignore */
      }

      // Si no hay template síncrono (placeholder) añadimos un ImageView de fallback
      if (isNonSync) {
        const imageView = new android.widget.ImageView(context);
        const imgLp = new android.widget.FrameLayout.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT);
        imageView.setLayoutParams(imgLp);
        imageView.setScaleType(android.widget.ImageView.ScaleType.CENTER_CROP);
        // No establecemos imagen fija aquí; lo dejará el itemLoading / onBind
        (maskableLayout as any).addView(imageView);
      }

      // 2) Creamos el ContentView (nsOwner) que actuará como wrapper de NativeScript
      const nsHolder = new ContentView();
      nsHolder.id = 'pagerViewHolder';
      // Asociamos el nativeRoot al ContentView
      nsHolder.nativeViewProtected = maskableLayout;
      // Marcamos si es placeholder para mantener compatibilidad con tu lógica
      nsHolder[PLACEHOLDER] = isNonSync;

      // Si template ya creó la vista sincronamente, la ponemos como content del wrapper
      if (!isNonSync && createdView) {
        try {
          nsHolder.content = createdView;
        } catch (e) {
          // si por alguna razón no se puede asignar, lo dejamos vacío y el event handler podrá reemplazarlo
        }
      }

      // Añadimos el nsHolder al owner para que NativeScript gestione ciclos/medidas
      owner._addView(nsHolder);
      (owner.nativeView as android.view.View).setTransitionName('image');
      // 3) creamos el ViewHolder **pasando la vista nativa (MaskableFrameLayout)**
      initPagerViewHolder();
      const holder = new PagerViewHolder(maskableLayout, new WeakRef(owner));
      // Guardamos la referencia al ContentView para que holder.view devuelva la vista NS
      holder.nsOwner = nsHolder;
      // Registramos el holder en el owner (igual que tu código original)
      owner._viewHolders.add(holder);

      return holder;
    }

    private getAttrResourceId(context: android.content.Context, attr: number): number {
      const typedValue = new android.util.TypedValue();
      if (context.getTheme().resolveAttribute(attr, typedValue, true)) {
        return typedValue.resourceId;
      }
      return 0;
    }

    getPosition(index: number): number {
      const owner = this.owner && this.owner.get();
      let position = index;
      return position;
    }

    getIndex(index: number): number {
      let position = index;
      const owner = this.owner && this.owner.get();
      return position;
    }

    onBindViewHolder(holder: any, index: number): void {
      const owner = this.owner ? this.owner.get() : null;
      if (owner) {
        if (holder['position'] !== undefined) {
          owner.bindedViewHolders.delete(holder['position']);
        }
        holder['position'] = index;
        owner.bindedViewHolders.add(holder['position']);

        const bindingContext = owner._getDataItem(index);

        // Tu código original esperaba holder.view (ContentView) y comprobaba PLACEHOLDER
        let view = holder.view;
        const isNonSync = view && view[PLACEHOLDER] === true;
        view = isNonSync ? view.content : view;

        const args = {
          eventName: ListPager.itemLoadingEvent,
          object: owner,
          android: holder,
          index,
          bindingContext,
          view,
        } as ItemEventData;

        // Notificamos (tu handler puede reemplazar args.view)
        owner.notify(args);

        if (isNonSync && args.view !== view) {
          // reemplazó la vista en el handler -> asignamos el content del ContentView
          try {
            (holder.view as ContentView).content = args.view;
          } catch (e) {
            // ignore
          }
        } else if (view instanceof ContentView) {
          view = view.content;
        }

        // Ejecutamos la preparación del item (bindings, measured, etc.)
        owner._prepareItem(holder.view, index);

        // --- Adicional: si necesitas acceder al ImageView de fallback (cuando placeholder),
        //     lo puedes obtener desde la vista nativa (holder.itemView) y manipularlo aquí.
        try {
          const nativeRoot: any = holder.itemView as com.google.android.material.carousel.MaskableFrameLayout;
          if (nativeRoot && nativeRoot.getChildCoun() && nativeRoot.getChildCount() > 0) {
            const firstChild = nativeRoot.getChildAt(0);
            if (firstChild instanceof android.widget.ImageView) {
              // ejemplo: pintar un color según el bindingContext si tiene "color"
              if (bindingContext && bindingContext.color) {
                try {
                  firstChild.setBackgroundColor(android.graphics.Color.parseColor(bindingContext.color));
                } catch (e) {
                  /* ignore parse errors */
                }
              } else {
                // si tu item tiene URL/imagen la cargarías aquí con tu loader
                // ejemplo placeholder: firstChild.setImageResource(android.R.drawable.ic_menu_gallery);
              }
            }
          }
        } catch (e) {
          // ignore
        }
      }
    }

    onViewRecycled(holder) {
      const owner = this.owner ? this.owner.get() : null;
      if (owner) {
        delete owner.bindedViewHolders[holder['position']];
        holder['position'] = undefined;
      }
    }

    public getItemId(i: number) {
      const owner = this.owner ? this.owner.get() : null;
      let id = i;
      if (owner && owner.items) {
        const item = (owner as any).items.getItem ? (owner as any).items.getItem(i) : owner.items[i];
        if (item) {
          id = owner.itemIdGenerator(item, i, owner.items);
        }
      }
      return long(id);
    }

    public getItemCount(): number {
      const owner = this.owner ? this.owner.get() : null;
      return owner && owner.items && owner.items.length ? owner.items.length : 0;
    }

    public getItemViewType(index: number) {
      const owner = this.owner ? this.owner.get() : null;
      if (owner) {
        const template = owner._getItemTemplate(index);
        return owner._itemTemplatesInternal.indexOf(template);
      }
      return 0;
    }

    lastIndex(): number {
      const owner = this.owner && this.owner.get();
      if (owner) {
        if (owner.items.length === 0) {
          return 0;
        }
      }
      return 0;
    }

    firstDummy() {
      const count = this.getItemCount();
      if (count === 0) {
        return 0;
      }
      return this.getItemCount() - 1;
    }

    lastDummy() {
      return this.lastIndex();
    }

    hasStableIds(): boolean {
      return true;
    }
  }

  PagerRecyclerAdapter = PagerRecyclerAdapterImpl as any;
}

interface PagerViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
  // constructor recibe la vista nativa (MaskableFrameLayout) y la referencia al pager
  // tslint:disable-next-line:no-misused-new
  new (nativeItemView: android.view.View, pager: WeakRef<ListPager>): PagerViewHolder;
  view: View; // debe devolver la View de NativeScript asociada (ContentView)
  nsOwner?: View; // referencia opcional al ContentView que usamos como wrapper
}
let PagerViewHolder: any;

function initPagerViewHolder() {
  if (PagerViewHolder) {
    return;
  }

  @NativeClass
  class PagerViewHolderImpl extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
    public nsOwner: View; // ContentView de NativeScript que actuará como holder.view
    public pager: WeakRef<ListPager>;

    constructor(nativeItemView: android.view.View, pager: WeakRef<ListPager>) {
      super(nativeItemView); // la vista real que RecyclerView ve debe ser MaskableFrameLayout
      this.pager = pager;
      return global.__native(this);
    }

    // Este getter mantiene compatibilidad con el resto de tu código (usaba holder.view)
    get view(): View {
      return this.nsOwner;
    }
  }

  PagerViewHolder = PagerViewHolderImpl as any;
}
