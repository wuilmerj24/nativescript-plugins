import { AddChildFromBuilder, Builder, CoercibleProperty, CoreTypes, CSSType, GridLayout, ItemsSource, KeyedTemplate, Label, makeParser, makeValidator, Observable, ObservableArray, Property, Template, Trace, Utils, View, ViewBase } from '@nativescript/core';

export type Orientation = 'horizontal' | 'vertical';

export namespace knownTemplates {
    export const itemTemplate = 'itemTemplate';
}

export namespace knownMultiTemplates {
    export const itemTemplates = 'itemTemplates';
}

export namespace knownCollections {
    export const items = 'items';
}

export const ListPagerTraceCategory = 'ns-pager';

export function PagerLog(message: string): void {
    Trace.write(message, ListPagerTraceCategory);
}

export function PagerError(message: string): void {
    Trace.write(message, ListPagerTraceCategory, Trace.messageType.error);
}

export interface ItemEventData {
    eventName: string;
    object: any;
    index: number;
    view: View;
    android?: any;
    ios?: any;
}

const autoEffectiveItemHeight = 100;
const autoEffectiveItemWidth = 100;

const booleanConverter = (v: any): boolean => String(v) === 'true';

let UNIQUE_VIEW_TYPE = 0;

@CSSType('ListPager')
export abstract class ListPagerCommon extends View implements AddChildFromBuilder {
    public static scrollEvent = 'scroll';
    public static swipeEvent = 'swipe';
    public static swipeStartEvent = 'swipeStart';
    public static swipeOverEvent = 'swipeOver';
    public static swipeEndEvent = 'swipeEnd';
    public static loadMoreItemsEvent = 'loadMoreItems';
    public static itemLoadingEvent = 'itemLoading';
    public static itemDisposingEvent = 'itemDisposing';

    public static knownFunctions = ['itemTemplateSelector', 'itemIdGenerator']; // See component-builder.ts isKnownFunction

    public items: any[] | ItemsSource;
    public selectedIndex: number;
    public itemTemplate: string | Template;
    public itemTemplates: string | KeyedTemplate[];
    public orientation: Orientation;
    public loadMoreCount: number = 1;
    public preserveIndexOnItemsChange: boolean = false;

    abstract readonly _childrenCount: number;

    protected _effectiveItemHeight: number;
    protected _effectiveItemWidth: number;
    public _childrenViews: { view: PagerItem; type: number }[];

    protected mObservableArrayInstance: ObservableArray<any>;

    get padding(): string | CoreTypes.LengthType {
        return this.style.padding;
    }
    set padding(value: string | CoreTypes.LengthType) {
        this.style.padding = value;
    }

    get paddingTop(): CoreTypes.LengthType {
        return this.style.paddingTop;
    }
    set paddingTop(value: CoreTypes.LengthType) {
        this.style.paddingTop = value;
    }

    get paddingRight(): CoreTypes.LengthType {
        return this.style.paddingRight;
    }
    set paddingRight(value: CoreTypes.LengthType) {
        this.style.paddingRight = value;
    }

    get paddingBottom(): CoreTypes.LengthType {
        return this.style.paddingBottom;
    }
    set paddingBottom(value: CoreTypes.LengthType) {
        this.style.paddingBottom = value;
    }

    get paddingLeft(): CoreTypes.LengthType {
        return this.style.paddingLeft;
    }
    set paddingLeft(value: CoreTypes.LengthType) {
        this.style.paddingLeft = value;
    }

    abstract refresh(): void;

    disposeNativeView() {
        this._childrenViews = [];
        if (this.mObservableArrayInstance) {
            this.mObservableArrayInstance.off(ObservableArray.changeEvent, this._observableArrayHandler);
            this.mObservableArrayInstance = null;
        }
        super.disposeNativeView();
    }

    protected abstract _observableArrayHandler(arg): void;

    setObservableArrayInstance(value) {
        if (this.mObservableArrayInstance) {
            this.mObservableArrayInstance.off(ObservableArray.changeEvent, this._observableArrayHandler);
            this.mObservableArrayInstance = null;
        }
        if (value instanceof ObservableArray) {
            this.mObservableArrayInstance = value as any;
            this.mObservableArrayInstance.on(ObservableArray.changeEvent, this._observableArrayHandler);
            // } else {
        }
        this.refresh();
        if (this.preserveIndexOnItemsChange) {
            this[selectedIndexProperty.setNative](this.selectedIndex, false /* disableAnimation */, true /* requestTransform(Android) */);
        } else {
            selectedIndexProperty.coerce(this);
        }
    }

    getChildView(index: number): View {
        return this._childrenViews && this._childrenViews[index]?.view;
    }

    _removeView(view: ViewBase) {
        // inside the recyclerview we wrap the PagerItem in a StackLayout
        // so we need to call remove on that stacklayout
        super._removeView(view);
        if (view instanceof PagerItem && this._childrenViews) {
            const index = this._childrenViews.findIndex((s) => s.view === view);
            if (index !== -1) {
                // this._removeChildView(index);
                if (this.isLoaded && this._isAddedToNativeVisualTree) {
                    this.refresh();
                }
            }
        }
    }
    protected _removeChildView(index: number) {
        this._childrenViews.splice(index, 1);
    }
    protected _addChildView(view, type) {
        this._childrenViews.push({ view, type });
    }

    _addChildFromBuilder(name: string, value: any): void {
        if (value instanceof PagerItem && value.parent !== this) {
            if (!this._childrenViews) {
                this._childrenViews = [];
            }
            this._addChildView(value, UNIQUE_VIEW_TYPE++);
            if (this.isLoaded) {
                this.refresh();
            }
        }
    }

    private _itemTemplateSelector: (item: any, index: number, items: any) => string;
    private _itemTemplateSelectorBindable = new Label();
    public _defaultTemplate: KeyedTemplate = {
        key: 'default',
        createView: () => {
            if (this.itemTemplate) {
                return Builder.parse(this.itemTemplate, this);
            }
            return undefined;
        }
    };

    public _itemTemplatesInternal = new Array<KeyedTemplate>(this._defaultTemplate);

    private _itemIdGenerator: (item: any, index: number, items: any) => number = (_item: any, index: number) => index;

    get itemIdGenerator(): (item: any, index: number, items: any) => number {
        return this._itemIdGenerator;
    }

    set itemIdGenerator(generatorFn: (item: any, index: number, items: any) => number) {
        this._itemIdGenerator = generatorFn;
    }

    get itemTemplateSelector(): string | ((item: any, index: number, items: any) => string) {
        return this._itemTemplateSelector;
    }

    set itemTemplateSelector(value: string | ((item: any, index: number, items: any) => string)) {
        if (typeof value === 'string') {
            this._itemTemplateSelectorBindable.bind({
                sourceProperty: null,
                targetProperty: 'templateKey',
                expression: value
            });
            this._itemTemplateSelector = (item: any, index: number, items: any) => {
                item['$index'] = index;
                if (this._itemTemplateSelectorBindable.bindingContext === item) {
                    this._itemTemplateSelectorBindable.bindingContext = null;
                }
                this._itemTemplateSelectorBindable.bindingContext = item;
                return this._itemTemplateSelectorBindable.get('templateKey');
            };
        } else if (typeof value === 'function') {
            this._itemTemplateSelector = value;
        }
    }

    onItemViewLoaderChanged() { }
    _itemViewLoader: Function;

    get itemViewLoader() {
        return this._itemViewLoader;
    }
    set itemViewLoader(value) {
        if (this._itemViewLoader !== value) {
            this._itemViewLoader = value;
            this.onItemViewLoaderChanged();
        }
    }

    public _getItemTemplateKey(index: number): string {
        let templateKey = 'default';
        if (this.itemTemplateSelector) {
            const dataItem = this._getDataItem(index);
            templateKey = this._itemTemplateSelector(dataItem, index, this.items);
        }
        return templateKey;
    }
    public _getItemTemplate(index: number): KeyedTemplate {
        const templateKey = this._getItemTemplateKey(index);

        const length = this._itemTemplatesInternal.length;
        for (let i = 0; i < length; i++) {
            if (this._itemTemplatesInternal[i].key === templateKey) {
                return this._itemTemplatesInternal[i];
            }
        }

        // This is the default template
        return this._itemTemplatesInternal[0];
    }

    public _prepareItem(item: View, index: number) {
        if (this.items && item) {
            item.bindingContext = this._getDataItem(index);
        }
    }

    _getDataItem(index: number): any {
        const thisItems = this.items;
        if (thisItems) {
            return thisItems && (thisItems as ItemsSource).getItem ? (thisItems as ItemsSource).getItem(index) : thisItems[index];
        }
    }

    public _getDefaultItemContent(index: number): View {
        const lbl = new Label();
        lbl.bind({
            targetProperty: 'text',
            sourceProperty: '$value'
        });
        return lbl;
    }

    public abstract itemTemplateUpdated(oldData, newData): void;

    public onLayout(left: number, top: number, right: number, bottom: number) {
        super.onLayout(left, top, right, bottom);
        this._effectiveItemWidth = this.getMeasuredWidth() - this.effectivePaddingLeft - this.effectivePaddingRight;
        this._effectiveItemHeight = this.getMeasuredHeight() - this.effectivePaddingTop - this.effectivePaddingBottom;
    }

    public convertToSize(length): number {
        let size = 0;
        if (this.orientation === 'horizontal') {
            size = __IOS__ ? Utils.layout.getMeasureSpecSize((this as any)._currentWidthMeasureSpec) : this.getMeasuredWidth();
        } else {
            size = __IOS__ ? Utils.layout.getMeasureSpecSize((this as any)._currentHeightMeasureSpec) : this.getMeasuredHeight();
        }

        let converted = 0;
        if (length && length.unit === 'px') {
            converted = length.value;
        } else if (length && length.unit === 'dip') {
            converted = Utils.layout.toDevicePixels(length.value);
        } else if (length && length.unit === '%') {
            converted = size * length.value;
        } else if (typeof length === 'string') {
            if (length.indexOf('px') > -1) {
                converted = parseFloat(length.replace('px', ''));
            } else if (length.indexOf('dip') > -1) {
                converted = Utils.layout.toDevicePixels(parseInt(length.replace('dip', ''), 10));
            } else if (length.indexOf('%') > -1) {
                converted = size * (parseFloat(length.replace('%', '')) / 100);
            } else {
                converted = Utils.layout.toDevicePixels(parseFloat(length));
            }
        } else if (typeof length === 'number') {
            converted = Utils.layout.toDevicePixels(length);
        }

        if (isNaN(converted)) {
            return 0;
        }
        return converted;
    }
}

export class PagerItem extends GridLayout { }

function onItemTemplateChanged(pager: ListPagerCommon, oldValue, newValue) {
    pager.itemTemplateUpdated(oldValue, newValue);
}

export const selectedIndexProperty = new CoercibleProperty<ListPagerCommon, number>({
    name: 'selectedIndex',
    defaultValue: -1,
    // affectsLayout: __IOS__,
    coerceValue: (target, value) => {
        const items = target._childrenCount;
        if (items) {
            const max = items - 1;
            if (value < 0) {
                value = 0;
            }
            if (value > max) {
                value = max;
            }
        } else {
            value = -1;
        }

        return value;
    },
    valueConverter: (v) => parseInt(v, 10)
});
selectedIndexProperty.register(ListPagerCommon);

export const itemsProperty = new Property<ListPagerCommon, any>({
    name: 'items',
    affectsLayout: true,
    // valueChanged: onItemsChanged
});
itemsProperty.register(ListPagerCommon);

export const itemTemplateProperty = new Property<ListPagerCommon, string | Template>({
    name: 'itemTemplate',
    affectsLayout: true,
    valueChanged: (target) => {
        target.refresh();
    }
});
itemTemplateProperty.register(ListPagerCommon);

export const itemTemplatesProperty = new Property<ListPagerCommon, string | KeyedTemplate[]>({
    name: 'itemTemplates',
    affectsLayout: true,
    valueConverter: (value) => {
        if (typeof value === 'string') {
            return Builder.parseMultipleTemplates(value);
        }
        return value;
    }
});
itemTemplatesProperty.register(ListPagerCommon);

const converter = makeParser<Orientation>(makeValidator('horizontal', 'vertical'));

export const orientationProperty = new Property<ListPagerCommon, Orientation>({
    name: 'orientation',
    defaultValue: 'horizontal',
    affectsLayout: true,
    valueChanged: (target: ListPagerCommon, oldValue: Orientation, newValue: Orientation) => {
        target.refresh();
    },
    valueConverter: converter
});
orientationProperty.register(ListPagerCommon);