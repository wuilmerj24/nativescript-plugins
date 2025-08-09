import { Application, Builder, Color, ContentView, CoreTypes, KeyedTemplate, LayoutBase, ListView, Observable, profile, ProxyViewContainer, StackLayout, unsetValue, Utils, View, ViewBase } from '@nativescript/core';
import { CarouselCommon, itemTemplatesProperty } from './common';
import { ItemEventData, ItemsSource } from '.';

export * from './common';

const ITEMLOADING = CarouselCommon.itemLoadingEvent;
const LOADMOREITEMS = CarouselCommon.loadMoreItemsEvent;
const ITEMTAP = CarouselCommon.itemTapEvent;

interface ItemClickListener {
    new(owner: Carousel): android.widget.AdapterView.OnItemClickListener;
}

let ItemClickListener: ItemClickListener;

function initializeItemClickListener(): void {
    if (ItemClickListener) {
        return;
    }

    @NativeClass
    @Interfaces([android.widget.AdapterView.OnItemClickListener])
    class ItemClickListenerImpl extends java.lang.Object implements android.widget.AdapterView.OnItemClickListener {
        constructor(public owner: Carousel) {
            super();

            return global.__native(this);
        }

        onItemClick<T extends android.widget.Adapter>(parent: android.widget.AdapterView<T>, convertView: android.view.View, index: number, id: number) {
            const owner = this.owner;
            const view = owner._realizedItems.get(convertView).view;
            owner.notify({
                eventName: ITEMTAP,
                object: owner,
                index: index,
                view: view,
            });
        }
    }

    ItemClickListener = ItemClickListenerImpl;
}

export class Carousel extends CarouselCommon {
    nativeViewProtected: androidx.recyclerview.widget.RecyclerView; 
    private _androidViewId = -1;

    public _realizedItems = new Map<
        android.view.View,
        {
            view: View;
            templateKey: string;
        }
    >();
    public _availableViews = new Map<string, Set<android.view.View>>();
    public _realizedTemplates = new Map<string, Map<android.view.View, View>>();

    private _ensureAvailableViews(templateKey: string) {
        if (!this._availableViews.has(templateKey)) {
            this._availableViews.set(templateKey, new Set());
        }
    }

    public _registerViewToTemplate(templateKey: string, nativeView: android.view.View, view: View) {
        this._realizedItems.set(nativeView, {
            view,
            templateKey,
        });
        if (!this._realizedTemplates.has(templateKey)) {
            this._realizedTemplates.set(templateKey, new Map());
        }
        this._realizedTemplates.get(templateKey).set(nativeView, view);
        this._ensureAvailableViews(templateKey);
        const availableViews = this._availableViews.get(templateKey);
        availableViews.add(nativeView);
    }

    public _markViewUsed(nativeView: android.view.View) {
        const viewData = this._realizedItems.get(nativeView);
        if (!viewData) {
            throw new Error('View not registered');
        }
        this._ensureAvailableViews(viewData.templateKey);
        this._availableViews.get(viewData.templateKey).delete(nativeView);
    }
    public _markViewUnused(nativeView: android.view.View) {
        const viewData = this._realizedItems.get(nativeView);
        if (!viewData) {
            throw new Error('View not registered');
        }
        this._ensureAvailableViews(viewData.templateKey);
        this._availableViews.get(viewData.templateKey).add(nativeView);
    }
    public _getKeyFromView(nativeView: android.view.View) {
        return this._realizedItems.get(nativeView).templateKey;
    }
    public _hasAvailableView(templateKey: string) {
        this._ensureAvailableViews(templateKey);
        return this._availableViews.get(templateKey).size > 0;
    }
    public _getAvailableView(templateKey: string) {
        this._ensureAvailableViews(templateKey);
        if (!this._hasAvailableView(templateKey)) {
            return null;
        }
        const view: android.view.View = this._availableViews.get(templateKey).values().next().value;
        this._markViewUsed(view);
        return view;
    }

    createNativeView(): Object {
        this.nativeViewProtected = new androidx.recyclerview.widget.RecyclerView(this._context);
        this.nativeViewProtected.setLayoutParams(new android.widget.FrameLayout.LayoutParams(
            android.widget.FrameLayout.LayoutParams.MATCH_PARENT,
            android.widget.FrameLayout.LayoutParams.MATCH_PARENT
        ));

        const layoutManager:any = new com.google.android.material.carousel.CarouselLayoutManager();
        this.nativeViewProtected.setLayoutManager(layoutManager);
        // const imagelist:Array<any> = new Array();
        // for(let i:number=0;i<10;i++){
        //     imagelist.push("https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg");
        // }
        // const adapter:CarouselItemAdapter = new CarouselItemAdapter(this._context,imagelist);
        // this.nativeViewProtected.setAdapter(adapter);
        return this.nativeViewProtected;
    }

    initNativeView(): void {
        super.initNativeView();
        const nativeView = this.nativeViewProtected;
        nativeView.setId(this._androidViewId);

    }

    public disposeNativeView() {
        const nativeView = this.nativeViewProtected;
        nativeView.setAdapter(null);
        if ((<any>nativeView).itemClickListener) {
            (<any>nativeView).itemClickListener.owner = null;
        }
        if ((<any>nativeView).adapter) {
            (<any>nativeView).adapter.owner = null;
        }
        this.clearRealizedCells();
        super.disposeNativeView();
    }

    public onLoaded() {
        super.onLoaded();
        // Without this call itemClick won't be fired... :(
        this.requestLayout();
    }

    public refresh() {
        const nativeView = this.nativeViewProtected;
        if (!nativeView || !nativeView.getAdapter()) {
            return;
        }

        // clear bindingContext when it is not observable because otherwise bindings to items won't reevaluate
        this._realizedItems.forEach(({ view }, nativeView) => {
            if (!(view.bindingContext instanceof Observable)) {
                view.bindingContext = null;
            }
        });

        
        (<any>nativeView.getAdapter()).notifyDataSetChanged();
    }

    get _childrenCount(): number {
        return this._realizedItems.size;
    }

    public eachChildView(callback: (child: View) => boolean): void {
        this._realizedItems.forEach(({ view }, nativeView) => {
            console.log(view);
            if (view.parent instanceof Carousel) {
                callback(view);
            } else {
                // in some cases (like item is unloaded from another place (like angular) view.parent becomes undefined)
                if (view.parent) {
                    callback(<View>view.parent);
                }
            }
        });
    }

    public _dumpRealizedTemplates() {
        console.log(`Realized Templates:`);
        this._realizedTemplates.forEach((value, index) => {
            console.log(`\t${index}:`);
            value.forEach((value, index) => {
                console.log(`\t\t${index.hashCode()}: ${value}`);
            });
        });
        console.log(`Realized Items Size: ${this._realizedItems.size}`);
    }

    private clearRealizedCells(): void {
        // clear the cache
        this._realizedItems.forEach(({ view }, nativeView) => {
            if (view.parent) {
                // This is to clear the StackLayout that is used to wrap non LayoutBase & ProxyViewContainer instances.
                if (!(view.parent instanceof Carousel)) {
                    this._removeView(view.parent);
                }
                view.parent._removeView(view);
            }
        });

        this._realizedItems.clear();
        this._availableViews.clear();
        this._realizedTemplates.clear();
    }

    public isItemAtIndexVisible(index: number): boolean {
        const nativeView = this.nativeViewProtected;

        // const start = nativeView.getFirstVisiblePosition();
        // const end = nativeView.getLastVisiblePosition();

        // return index >= start && index <= end;
        return false;
    }

    [itemTemplatesProperty.getDefault](): KeyedTemplate[] {
        return null;
    }
    [itemTemplatesProperty.setNative](value: KeyedTemplate[]) {
        this._itemTemplatesInternal = new Array<KeyedTemplate>(this._defaultTemplate);
        if (value) {
            this._itemTemplatesInternal = this._itemTemplatesInternal.concat(value);
        }
        const imagelist: Array<any> = new Array();
        for (let i: number = 0; i < 10; i++) {
            imagelist.push("https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg");
        }
        const adapter: CarouselItemAdapter = new CarouselItemAdapter(this._context);
        // const adapter: any= new ListViewAdapterCarousel(this);
        this.nativeViewProtected.setAdapter(adapter);
        this.refresh();
    }
}

@NativeClass()
class CarouselItemBuilder{
    public static createCarouselItem(context: android.content.Context): com.google.android.material.carousel.MaskableFrameLayout{
        const container: com.google.android.material.carousel.MaskableFrameLayout = new com.google.android.material.carousel.MaskableFrameLayout(context);
        const layoutParams: android.view.ViewGroup.MarginLayoutParams = new android.view.ViewGroup.MarginLayoutParams(
            android.view.ViewGroup.LayoutParams.MATCH_PARENT,
            android.view.ViewGroup.LayoutParams.MATCH_PARENT,
        );
        const marginInPx: number = android.util.TypedValue.applyDimension(android.util.TypedValue.COMPLEX_UNIT_DIP,4,context.getResources().getDisplayMetrics())

        layoutParams.setMarginStart(marginInPx);
        layoutParams.setMarginEnd(marginInPx);
        container.setLayoutParams(layoutParams);

        const outValue: android.util.TypedValue = new android.util.TypedValue();
        context.getTheme().resolveAttribute(android.R.attr.selectableItemBackground, outValue, true);

        const foregroundDrawable:android.graphics.drawable.Drawable = androidx.core.content.res.ResourcesCompat.getDrawable(context.getResources(),outValue.resourceId,context.getTheme());

        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.M) {
            container.setForeground(foregroundDrawable);
        }

        const shapeValue: android.util.TypedValue = new android.util.TypedValue();
        // context.getTheme().resolveAttribute(com.google.android.material.R.attr.shapeAppearanceCornerExtraLarge, shapeValue, true);
        const attrId = context.getResources().getIdentifier(
            "shapeAppearanceCornerExtraLarge",
            "attr",
            "com.google.android.material"
        );

        if (attrId > 0) {
            context.getTheme().resolveAttribute(attrId, shapeValue, true);
            const shapeAppearanceModel = com.google.android.material.shape.ShapeAppearanceModel
                .builder(context, shapeValue.resourceId, 0)
                .build();

            const backgroundDrawable = new com.google.android.material.shape.MaterialShapeDrawable(shapeAppearanceModel);
            container.setBackground(backgroundDrawable);
        }
        const shapeAppearanceModel: com.google.android.material.shape.ShapeAppearanceModel = com.google.android.material.shape.ShapeAppearanceModel.builder(context,shapeValue.resourceId,0).build();
        const backgroundDrawable: com.google.android.material.shape.MaterialShapeDrawable = new com.google.android.material.shape.MaterialShapeDrawable(shapeAppearanceModel);
        container.setBackground(backgroundDrawable);

        // Crear y configurar el ImageView
        const imageView:android.widget.ImageView = new android.widget.ImageView(context);
        imageView.setId(android.view.View.generateViewId());
        imageView.setLayoutParams(new android.view.ViewGroup.LayoutParams(
            android.view.ViewGroup.LayoutParams.MATCH_PARENT,
            android.view.ViewGroup.LayoutParams.MATCH_PARENT
        ));
        imageView.setScaleType(android.widget.ImageView.ScaleType.CENTER_CROP);
        androidx.core.view.ViewCompat.setTransitionName(imageView,"image");
        (container as any).addView(imageView)
        return container;
    }
}

@NativeClass()
class CarouselViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder{
    imageView:android.widget.ImageView;
    view: ContentView;
    // constructor(
    //     public view:android.view.View,
    // ){
    //     super(view);
    //     const container:any = (view as any);
    //     this.imageView = container.getChildAt(0);
    // }
    constructor(view: any) {
        super(view.android);
        this.view = view;
    }
}

@NativeClass()
class CarouselItemAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<CarouselViewHolder>{
    owner: Carousel;
    // constructor(
    //     private context: android.content.Context,
    //     private imageResIds:any[] | ItemsSource,
    // ){
    //     super();
    // }


    // public onCreateViewHolder(parent: android.view.ViewGroup, viewType: number): CarouselViewHolder {
        
    //     let itemView: com.google.android.material.carousel.MaskableFrameLayout = CarouselItemBuilder.createCarouselItem(this.context);
    //     return new CarouselViewHolder(itemView as any);
    // }

    // public onBindViewHolder(holder: CarouselViewHolder, position:number): void {
    //     const imageResId:string = this.imageResIds[position];
       
    //     const policy: android.os.StrictMode.ThreadPolicy = new android.os.StrictMode.ThreadPolicy.Builder().permitAll().build();
    //     android.os.StrictMode.setThreadPolicy(policy);
    //     holder.imageView.setImageURI(android.net.Uri.parse(imageResId));
        
    // }

    // public getItemCount(): number {
    //     return this.imageResIds.length;
    // }

    constructor(owner: Carousel) {
        super();
        this.owner = owner;
        return global.__native(this);
    }

    getItemCount(): number {
        return this.owner.items ? this.owner.items.length : 0;
    }

    public getItemViewType(index: number) {
        if (this.owner) {
            const template = this.owner._getItemTemplate(index);
            return this.owner._itemTemplatesInternal.indexOf(template);
        }
        return 0;
    }

    onCreateViewHolder(parent: android.view.ViewGroup, viewType: number): CarouselViewHolder {
        const template = (this.owner.itemTemplates as any).find(t => t.key === viewType);
        let view;

        if (template) {
            view = template.createView();
        } else {
            view = this.owner.itemTemplate ? (this.owner.itemTemplate as any).createView() : null;
        }

        if (!view) {
            // fallback: si no hay template, usar un Label
            view = Builder.parse('<Label text="No template"/>') as ContentView;
        }

        return new CarouselViewHolder(view);
    }

    onBindViewHolder(holder: CarouselViewHolder, position: number): void {
        const item = this.owner._getDataItem(position);
        this.owner._prepareItem(holder.view, position);
    }
}
