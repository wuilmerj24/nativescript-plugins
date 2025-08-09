import { CarouselCommon } from './common';

export declare class Carousel extends View {
    public static itemLoadingEvent: string;
    public static itemTapEvent: string;
    android: any;
    ios: any;
    items: any[] | ItemsSource;
    itemTemplate: string | Template;
    itemTemplates: string | Array<KeyedTemplate>;
    itemTemplateSelector: string | ((item: any, index: number, items: any) => string);
    itemIdGenerator: (item: any, index: number, items: any) => number;
    refresh();
    scrollToIndex(index: number);
    scrollToIndexAnimated(index: number);
    isItemAtIndexVisible(index: number): boolean;
    on(eventName: string, callback: (data: EventData) => void, thisArg?: any): void;
    on(event: 'itemLoading', callback: (args: ItemEventData) => void, thisArg?: any): void;
    on(event: 'itemTap', callback: (args: ItemEventData) => void, thisArg?: any): void;
    on(event: 'loadMoreItems', callback: (args: EventData) => void, thisArg?: any): void;
}


export interface ItemEventData extends EventData{
    index: number;
    view: View;
    ios: any;
    android: any;
}

export interface ItemsSource {
    length: number;
    getItem(index: number): any;
}

export interface TemplatedItemsView {
    items: any[] | ItemsSource;
    itemTemplate: string | Template;
    itemTemplates?: string | Array<KeyedTemplate>;
    refresh(): void;
    on(event: 'itemLoading', callback: (args: ItemEventData) => void, thisArg?: any): void;
    off(event: 'itemLoading', callback: (args: EventData) => void, thisArg?: any): void;
}

export const itemsProperty: Property<Carousel, any[] | ItemsSource>;
export const itemTemplateProperty: Property<Carousel, string | Template>;
export const itemTemplatesProperty: Property<Carousel, string | Array<KeyedTemplate>>;