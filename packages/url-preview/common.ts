import { Observable } from '@nativescript/core';

import { ActivityIndicator, Color, CoreTypes, CSSType, GestureTypes, GridLayout, GridUnitType, Image, ItemSpec, Label, Screen, TapGestureEventData, Utils, View } from '@nativescript/core';

@CSSType('UrlPreview')
export class UrlPreviewCommon extends View {
    @GetSetProperty()
    public url: string = "";
    @GetSetProperty()
    bgColor: string = "red";
    @GetSetProperty()
    titleTextColor: string = "blue";
    @GetSetProperty()
    descriptionTextColor: string = "blue";
    @GetSetProperty()
    borderRadiusImage: number = 10;
    @GetSetProperty()
    loadingColor: string = "red";
    @GetSetProperty()
    borderRadius: number = 0;

}

export function GetSetProperty() {
    return (target, propertyKey: string) => {
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return this['_' + propertyKey];
            },
            set: function (value) {
                if (this['_' + propertyKey] === value) {
                    return;
                }
                if (value === 'true') {
                    value = true;
                } else if (value === 'false') {
                    value = false;
                }
                this['_' + propertyKey] = value;
            },
            enumerable: true,
            configurable: true,
        });
    };
}

