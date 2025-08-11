declare module com {
    export module google {
        export module android {
            export module material {
                export module animation {
                    export class AnimatableView {
                        public static class: java.lang.Class<com.google.android.material.animation.AnimatableView>;
                        /**
                         * Constructs a new instance of the com.google.android.material.animation.AnimatableView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            startAnimation(param0: com.google.android.material.animation.AnimatableView.Listener): void;
                            stopAnimation(): void;
                        });
                        public constructor();
                        public startAnimation(param0: com.google.android.material.animation.AnimatableView.Listener): void;
                        public stopAnimation(): void;
                    }
                    export module AnimatableView {
                        export class Listener {
                            public static class: java.lang.Class<com.google.android.material.animation.AnimatableView.Listener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.animation.AnimatableView$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onAnimationEnd(): void;
                            });
                            public constructor();
                            public onAnimationEnd(): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module animation {
                    export class AnimationUtils {
                        public static class: java.lang.Class<com.google.android.material.animation.AnimationUtils>;
                        public static LINEAR_INTERPOLATOR: globalAndroid.animation.TimeInterpolator;
                        public static FAST_OUT_SLOW_IN_INTERPOLATOR: globalAndroid.animation.TimeInterpolator;
                        public static FAST_OUT_LINEAR_IN_INTERPOLATOR: globalAndroid.animation.TimeInterpolator;
                        public static LINEAR_OUT_SLOW_IN_INTERPOLATOR: globalAndroid.animation.TimeInterpolator;
                        public static DECELERATE_INTERPOLATOR: globalAndroid.animation.TimeInterpolator;
                        public static lerp(startValue: number, endValue: number, fraction: number): number;
                        public constructor();
                        public static lerp(outputMin: number, outputMax: number, inputMin: number, inputMax: number, value: number): number;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module animation {
                    export class AnimatorSetCompat {
                        public static class: java.lang.Class<com.google.android.material.animation.AnimatorSetCompat>;
                        public constructor();
                        public static playTogether(animator: globalAndroid.animation.AnimatorSet, i: java.util.List<globalAndroid.animation.Animator>): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module animation {
                    export class ArgbEvaluatorCompat extends globalAndroid.animation.TypeEvaluator<java.lang.Integer> {
                        public static class: java.lang.Class<com.google.android.material.animation.ArgbEvaluatorCompat>;
                        public static getInstance(): com.google.android.material.animation.ArgbEvaluatorCompat;
                        public constructor();
                        public evaluate(fraction: number, startValue: java.lang.Integer, endValue: java.lang.Integer): java.lang.Integer;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module animation {
                    export class ChildrenAlphaProperty extends globalAndroid.util.Property<globalAndroid.view.ViewGroup, java.lang.Float> {
                        public static class: java.lang.Class<com.google.android.material.animation.ChildrenAlphaProperty>;
                        public static CHILDREN_ALPHA: globalAndroid.util.Property<globalAndroid.view.ViewGroup, java.lang.Float>;
                        public get(object: globalAndroid.view.ViewGroup): java.lang.Float;
                        public set(i: globalAndroid.view.ViewGroup, count: java.lang.Float): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module animation {
                    export class DrawableAlphaProperty extends globalAndroid.util.Property<globalAndroid.graphics.drawable.Drawable, java.lang.Integer> {
                        public static class: java.lang.Class<com.google.android.material.animation.DrawableAlphaProperty>;
                        public static DRAWABLE_ALPHA_COMPAT: globalAndroid.util.Property<globalAndroid.graphics.drawable.Drawable, java.lang.Integer>;
                        public get(object: globalAndroid.graphics.drawable.Drawable): java.lang.Integer;
                        public set(object: globalAndroid.graphics.drawable.Drawable, value: java.lang.Integer): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module animation {
                    export class ImageMatrixProperty extends globalAndroid.util.Property<globalAndroid.widget.ImageView, globalAndroid.graphics.Matrix> {
                        public static class: java.lang.Class<com.google.android.material.animation.ImageMatrixProperty>;
                        public constructor();
                        public get(object: globalAndroid.widget.ImageView): globalAndroid.graphics.Matrix;
                        public set(object: globalAndroid.widget.ImageView, value: globalAndroid.graphics.Matrix): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module animation {
                    export class MatrixEvaluator extends globalAndroid.animation.TypeEvaluator<globalAndroid.graphics.Matrix> {
                        public static class: java.lang.Class<com.google.android.material.animation.MatrixEvaluator>;
                        public constructor();
                        public evaluate(i: number, this_: globalAndroid.graphics.Matrix, fraction: globalAndroid.graphics.Matrix): globalAndroid.graphics.Matrix;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module animation {
                    export class MotionSpec {
                        public static class: java.lang.Class<com.google.android.material.animation.MotionSpec>;
                        public getAnimator(name: string, target: any, property: globalAndroid.util.Property<any, any>): globalAndroid.animation.ObjectAnimator;
                        public getTiming(name: string): com.google.android.material.animation.MotionTiming;
                        public getPropertyValues(name: string): androidNative.Array<globalAndroid.animation.PropertyValuesHolder>;
                        public constructor();
                        public hasPropertyValues(name: string): boolean;
                        public setTiming(name: string, timing: com.google.android.material.animation.MotionTiming): void;
                        public static createFromAttribute(resourceId: globalAndroid.content.Context, context: globalAndroid.content.res.TypedArray, attributes: number): com.google.android.material.animation.MotionSpec;
                        public hashCode(): number;
                        public setPropertyValues(name: string, values: androidNative.Array<globalAndroid.animation.PropertyValuesHolder>): void;
                        public toString(): string;
                        public getTotalDuration(): number;
                        public hasTiming(name: string): boolean;
                        public equals(o: any): boolean;
                        public static createFromResource(set: globalAndroid.content.Context, animators: number): com.google.android.material.animation.MotionSpec;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module animation {
                    export class MotionTiming {
                        public static class: java.lang.Class<com.google.android.material.animation.MotionTiming>;
                        public getDelay(): number;
                        public getInterpolator(): globalAndroid.animation.TimeInterpolator;
                        public apply(animator: globalAndroid.animation.Animator): void;
                        public getDuration(): number;
                        public getRepeatCount(): number;
                        public hashCode(): number;
                        public getRepeatMode(): number;
                        public equals(o: any): boolean;
                        public constructor(delay: number, duration: number);
                        public toString(): string;
                        public constructor(delay: number, duration: number, interpolator: globalAndroid.animation.TimeInterpolator);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module animation {
                    export class Positioning {
                        public static class: java.lang.Class<com.google.android.material.animation.Positioning>;
                        public gravity: number;
                        public xAdjustment: number;
                        public yAdjustment: number;
                        public constructor(gravity: number, xAdjustment: number, yAdjustment: number);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module animation {
                    export class TransformationCallback<T> extends java.lang.Object {
                        public static class: java.lang.Class<com.google.android.material.animation.TransformationCallback<any>>;
                        /**
                         * Constructs a new instance of the com.google.android.material.animation.TransformationCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            onTranslationChanged(param0: T): void;
                            onScaleChanged(param0: T): void;
                        });
                        public constructor();
                        public onTranslationChanged(param0: T): void;
                        public onScaleChanged(param0: T): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module appbar {
                    export class AppBarLayout {
                        public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout>;
                        public getBehavior(): androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<com.google.android.material.appbar.AppBarLayout>;
                        public onLayout(topInset: boolean, child: number, childLp: number, interpolator: number, i: number): void;
                        public draw(this_: globalAndroid.graphics.Canvas): void;
                        public generateLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): com.google.android.material.appbar.AppBarLayout.LayoutParams;
                        public addLiftOnScrollListener(liftOnScrollListener: com.google.android.material.appbar.AppBarLayout.LiftOnScrollListener): void;
                        public setOrientation(orientation: number): void;
                        public constructor(materialShapeDrawable: globalAndroid.content.Context, this_: globalAndroid.util.AttributeSet, context: number);
                        public addOnOffsetChangedListener(listener: com.google.android.material.appbar.AppBarLayout.OnOffsetChangedListener): void;
                        public onAttachedToWindow(): void;
                        public removeOnOffsetChangedListener(listener: com.google.android.material.appbar.AppBarLayout.BaseOnOffsetChangedListener<any>): void;
                        /** @deprecated */
                        public setTargetElevation(elevation: number): void;
                        public drawableStateChanged(): void;
                        public onCreateDrawableState(extraSpace: number): androidNative.Array<number>;
                        public setLiftable(liftable: boolean): boolean;
                        public isLiftOnScroll(): boolean;
                        public removeLiftOnScrollListener(liftOnScrollListener: com.google.android.material.appbar.AppBarLayout.LiftOnScrollListener): boolean;
                        public setStatusBarForegroundColor(color: number): void;
                        public checkLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): boolean;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public getLiftOnScrollTargetViewId(): number;
                        public setLiftableOverrideEnabled(enabled: boolean): void;
                        public getMinimumHeightForVisibleOverlappingContent(): number;
                        public setStatusBarForegroundResource(resId: number): void;
                        public getTotalScrollRange(): number;
                        public verifyDrawable(who: globalAndroid.graphics.drawable.Drawable): boolean;
                        /** @deprecated */
                        public getTargetElevation(): number;
                        public setElevation(elevation: number): void;
                        public onDetachedFromWindow(): void;
                        public setLiftOnScrollTargetView(liftOnScrollTargetView: globalAndroid.view.View): void;
                        public setStatusBarForeground(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public removeOnOffsetChangedListener(listener: com.google.android.material.appbar.AppBarLayout.OnOffsetChangedListener): void;
                        public generateDefaultLayoutParams(): com.google.android.material.appbar.AppBarLayout.LayoutParams;
                        public setExpanded(expanded: boolean): void;
                        public isLifted(): boolean;
                        public addOnOffsetChangedListener(listener: com.google.android.material.appbar.AppBarLayout.BaseOnOffsetChangedListener<any>): void;
                        public clearLiftOnScrollListener(): void;
                        public setLifted(lifted: boolean): boolean;
                        public setLiftOnScrollTargetViewId(liftOnScrollTargetViewId: number): void;
                        public onMeasure(this_: number, widthMeasureSpec: number): void;
                        public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): com.google.android.material.appbar.AppBarLayout.LayoutParams;
                        public setLiftOnScroll(liftOnScroll: boolean): void;
                        public setExpanded(expanded: boolean, animate: boolean): void;
                        public getStatusBarForeground(): globalAndroid.graphics.drawable.Drawable;
                        public setVisibility(visibility: number): void;
                        public constructor(context: globalAndroid.content.Context);
                    }
                    export module AppBarLayout {
                        export class BaseBehavior<T> extends com.google.android.material.appbar.HeaderBehavior<any> {
                            public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.BaseBehavior<any>>;
                            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                            public constructor();
                            public setDragCallback(callback: com.google.android.material.appbar.AppBarLayout.BaseBehavior.BaseDragCallback<any>): void;
                            public onStartNestedScroll(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, directTargetChild: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number, type: number): boolean;
                            public onStopNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, abl: any, target: globalAndroid.view.View, type: number): void;
                            public onLayoutChild(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, layoutDirection: number): boolean;
                            public onNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number, consumed: androidNative.Array<number>): void;
                            public onRestoreInstanceState(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, appBarLayout: any, state: globalAndroid.os.Parcelable): void;
                            public onLayoutChild(offset: androidx.coordinatorlayout.widget.CoordinatorLayout, offset: any, animate: number): boolean;
                            public onNestedPreScroll(max: androidx.coordinatorlayout.widget.CoordinatorLayout, min: any, max: globalAndroid.view.View, this_: number, coordinatorLayout: number, child: androidNative.Array<number>, target: number): void;
                            public onMeasureChild(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, parentWidthMeasureSpec: number, widthUsed: number, parentHeightMeasureSpec: number, heightUsed: number): boolean;
                            public onSaveInstanceState(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, abl: any): globalAndroid.os.Parcelable;
                        }
                        export module BaseBehavior {
                            export abstract class BaseDragCallback<T> extends java.lang.Object {
                                public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.BaseBehavior.BaseDragCallback<any>>;
                                public canDrag(param0: T): boolean;
                                public constructor();
                            }
                            export class SavedState {
                                public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.BaseBehavior.SavedState>;
                                public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.appbar.AppBarLayout.BaseBehavior.SavedState>;
                                public constructor(source: globalAndroid.os.Parcel, loader: java.lang.ClassLoader);
                                public constructor(superState: globalAndroid.os.Parcelable);
                                public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
                            }
                        }
                        export class BaseOnOffsetChangedListener<T> extends java.lang.Object {
                            public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.BaseOnOffsetChangedListener<any>>;
                            /**
                             * Constructs a new instance of the com.google.android.material.appbar.AppBarLayout$BaseOnOffsetChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onOffsetChanged(param0: T, param1: number): void;
                            });
                            public constructor();
                            public onOffsetChanged(param0: T, param1: number): void;
                        }
                        export class Behavior extends com.google.android.material.appbar.AppBarLayout.BaseBehavior<com.google.android.material.appbar.AppBarLayout> {
                            public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.Behavior>;
                            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                            public constructor();
                        }
                        export module Behavior {
                            export abstract class DragCallback extends com.google.android.material.appbar.AppBarLayout.BaseBehavior.BaseDragCallback<com.google.android.material.appbar.AppBarLayout> {
                                public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.Behavior.DragCallback>;
                                public constructor();
                            }
                        }
                        export abstract class ChildScrollEffect {
                            public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.ChildScrollEffect>;
                            public constructor();
                            public onOffsetChanged(param0: com.google.android.material.appbar.AppBarLayout, param1: globalAndroid.view.View, param2: number): void;
                        }
                        export class CompressChildScrollEffect extends com.google.android.material.appbar.AppBarLayout.ChildScrollEffect {
                            public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.CompressChildScrollEffect>;
                            public constructor();
                            public onOffsetChanged(offsetY: com.google.android.material.appbar.AppBarLayout, easeOutQuad: globalAndroid.view.View, distance: number): void;
                        }
                        export class LayoutParams {
                            public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.LayoutParams>;
                            public static SCROLL_FLAG_NO_SCROLL: number = 0;
                            public static SCROLL_FLAG_SCROLL: number = 1;
                            public static SCROLL_FLAG_EXIT_UNTIL_COLLAPSED: number = 2;
                            public static SCROLL_FLAG_ENTER_ALWAYS: number = 4;
                            public static SCROLL_FLAG_ENTER_ALWAYS_COLLAPSED: number = 8;
                            public static SCROLL_FLAG_SNAP: number = 16;
                            public static SCROLL_FLAG_SNAP_MARGINS: number = 32;
                            public static SCROLL_EFFECT_NONE: number = 0;
                            public static SCROLL_EFFECT_COMPRESS: number = 1;
                            public setScrollFlags(flags: number): void;
                            public setScrollEffect(scrollEffect: com.google.android.material.appbar.AppBarLayout.ChildScrollEffect): void;
                            public constructor(width: number, height: number, weight: number);
                            public constructor(source: globalAndroid.view.ViewGroup.MarginLayoutParams);
                            public constructor(source: com.google.android.material.appbar.AppBarLayout.LayoutParams);
                            public constructor(width: number, height: number);
                            public constructor(this_: globalAndroid.content.Context, c: globalAndroid.util.AttributeSet);
                            public setScrollInterpolator(interpolator: globalAndroid.view.animation.Interpolator): void;
                            public getScrollInterpolator(): globalAndroid.view.animation.Interpolator;
                            public getScrollFlags(): number;
                            public constructor(p: globalAndroid.view.ViewGroup.LayoutParams);
                            public getScrollEffect(): com.google.android.material.appbar.AppBarLayout.ChildScrollEffect;
                            public setScrollEffect(scrollEffect: number): void;
                            public constructor(source: globalAndroid.widget.LinearLayout.LayoutParams);
                        }
                        export module LayoutParams {
                            export class ScrollEffect {
                                public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.LayoutParams.ScrollEffect>;
                                /**
                                 * Constructs a new instance of the com.google.android.material.appbar.AppBarLayout$LayoutParams$ScrollEffect interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                                 */
                                public constructor(implementation: {
                                });
                                public constructor();
                            }
                            export class ScrollFlags {
                                public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.LayoutParams.ScrollFlags>;
                                /**
                                 * Constructs a new instance of the com.google.android.material.appbar.AppBarLayout$LayoutParams$ScrollFlags interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                                 */
                                public constructor(implementation: {
                                });
                                public constructor();
                            }
                        }
                        export class LiftOnScrollListener {
                            public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.LiftOnScrollListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.appbar.AppBarLayout$LiftOnScrollListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onUpdate(param0: number, param1: number): void;
                            });
                            public constructor();
                            public onUpdate(param0: number, param1: number): void;
                        }
                        export class OnOffsetChangedListener extends com.google.android.material.appbar.AppBarLayout.BaseOnOffsetChangedListener<com.google.android.material.appbar.AppBarLayout> {
                            public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.OnOffsetChangedListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.appbar.AppBarLayout$OnOffsetChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onOffsetChanged(param0: com.google.android.material.appbar.AppBarLayout, param1: number): void;
                                onOffsetChanged(param0: any, param1: number): void;
                            });
                            public constructor();
                            public onOffsetChanged(param0: com.google.android.material.appbar.AppBarLayout, param1: number): void;
                            public onOffsetChanged(param0: any, param1: number): void;
                        }
                        export class ScrollingViewBehavior extends com.google.android.material.appbar.HeaderScrollingViewBehavior {
                            public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.ScrollingViewBehavior>;
                            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                            public constructor();
                            public layoutDependsOn(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: globalAndroid.view.View, dependency: globalAndroid.view.View): boolean;
                            public onDependentViewRemoved(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: globalAndroid.view.View, dependency: globalAndroid.view.View): void;
                            public onRequestChildRectangleOnScreen(parentRect: androidx.coordinatorlayout.widget.CoordinatorLayout, this_: globalAndroid.view.View, parent: globalAndroid.graphics.Rect, child: boolean): boolean;
                            public onDependentViewChanged(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: globalAndroid.view.View, dependency: globalAndroid.view.View): boolean;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module appbar {
                    export class CollapsingToolbarLayout {
                        public static class: java.lang.Class<com.google.android.material.appbar.CollapsingToolbarLayout>;
                        public static TITLE_COLLAPSE_MODE_SCALE: number = 0;
                        public static TITLE_COLLAPSE_MODE_FADE: number = 1;
                        public getScrimVisibleHeightTrigger(): number;
                        public setContentScrim(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public setCollapsedTitleGravity(gravity: number): void;
                        public setRtlTextDirectionHeuristicsEnabled(rtlTextDirectionHeuristicsEnabled: boolean): void;
                        public setStatusBarScrimColor(color: number): void;
                        public isTitleEnabled(): boolean;
                        public drawChild(canvas: globalAndroid.graphics.Canvas, child: globalAndroid.view.View, drawingTime: number): boolean;
                        public getScrimAnimationDuration(): number;
                        public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
                        public setStatusBarScrim(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public setTitlePositionInterpolator(interpolator: globalAndroid.animation.TimeInterpolator): void;
                        public setCollapsedTitleTextColor(color: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public draw(topInset: globalAndroid.graphics.Canvas): void;
                        public setExpandedTitleMarginEnd(margin: number): void;
                        public setContentScrimColor(color: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public setExpandedTitleTextSize(textSize: number): void;
                        public setStaticLayoutBuilderConfigurer(staticLayoutBuilderConfigurer: com.google.android.material.appbar.CollapsingToolbarLayout.StaticLayoutBuilderConfigurer): void;
                        public setExpandedTitleColor(color: number): void;
                        public setCollapsedTitleTextSize(textSize: number): void;
                        public generateLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.widget.FrameLayout.LayoutParams;
                        public getHyphenationFrequency(): number;
                        public setExpandedTitleGravity(gravity: number): void;
                        public setContentScrimResource(resId: number): void;
                        public verifyDrawable(who: globalAndroid.graphics.drawable.Drawable): boolean;
                        public getTitleTextEllipsize(): globalAndroid.text.TextUtils.TruncateAt;
                        public setCollapsedTitleTextAppearance(resId: number): void;
                        public setScrimVisibleHeightTrigger(height: number): void;
                        public setCollapsedTitleTextColor(colors: globalAndroid.content.res.ColorStateList): void;
                        public setCollapsedTitleTypeface(typeface: globalAndroid.graphics.Typeface): void;
                        public setLineSpacingMultiplier(spacingMultiplier: number): void;
                        public setExpandedTitleMargin(start: number, top: number, end: number, bottom: number): void;
                        public getExpandedTitleMarginBottom(): number;
                        public getLineCount(): number;
                        public setExpandedTitleTextColor(colors: globalAndroid.content.res.ColorStateList): void;
                        public isRtlTextDirectionHeuristicsEnabled(): boolean;
                        public setScrimsShown(shown: boolean): void;
                        public getLineSpacingMultiplier(): number;
                        public setTitleEllipsize(ellipsize: globalAndroid.text.TextUtils.TruncateAt): void;
                        public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): globalAndroid.widget.FrameLayout.LayoutParams;
                        public setLineSpacingAdd(spacingAdd: number): void;
                        public onLayout(i: boolean, z: number, insetTop: number, i: number, z: number): void;
                        public setVisibility(visibility: number): void;
                        public getTitlePositionInterpolator(): globalAndroid.animation.TimeInterpolator;
                        public getExpandedTitleTextSize(): number;
                        public setExtraMultilineHeightEnabled(extraMultilineHeightEnabled: boolean): void;
                        public setHyphenationFrequency(hyphenationFrequency: number): void;
                        public setTitle(title: string): void;
                        public setExpandedTitleTypeface(typeface: globalAndroid.graphics.Typeface): void;
                        public getExpandedTitleMarginTop(): number;
                        public setExpandedTitleTextAppearance(resId: number): void;
                        public onAttachedToWindow(): void;
                        public getMaxLines(): number;
                        public setForceApplySystemWindowInsetTop(forceApplySystemWindowInsetTop: boolean): void;
                        public onMeasure(expandedTextHeight: number, newHeight: number): void;
                        public drawableStateChanged(): void;
                        public getExpandedTitleMarginEnd(): number;
                        public getContentScrim(): globalAndroid.graphics.drawable.Drawable;
                        public setExpandedTitleMarginTop(margin: number): void;
                        public isExtraMultilineHeightEnabled(): boolean;
                        public checkLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): boolean;
                        public setStatusBarScrimResource(resId: number): void;
                        public getCollapsedTitleTextSize(): number;
                        public setMaxLines(maxLines: number): void;
                        public getCollapsedTitleGravity(): number;
                        public getExpandedTitleTypeface(): globalAndroid.graphics.Typeface;
                        public setScrimAnimationDuration(duration: number): void;
                        public isForceApplySystemWindowInsetTop(): boolean;
                        public onDetachedFromWindow(): void;
                        public setTitleCollapseMode(scrimColor: number): void;
                        public getCollapsedTitleTypeface(): globalAndroid.graphics.Typeface;
                        public setExpandedTitleMarginBottom(margin: number): void;
                        public setScrimsShown(shown: boolean, animate: boolean): void;
                        public getTitle(): string;
                        public getExpandedTitleMarginStart(): number;
                        public generateDefaultLayoutParams(): com.google.android.material.appbar.CollapsingToolbarLayout.LayoutParams;
                        public setTitleEnabled(enabled: boolean): void;
                        public getExpandedTitleGravity(): number;
                        public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
                        public setExpandedTitleMarginStart(margin: number): void;
                        public getLineSpacingAdd(): number;
                        public getStatusBarScrim(): globalAndroid.graphics.drawable.Drawable;
                        public getTitleCollapseMode(): number;
                        public constructor(context: globalAndroid.content.Context);
                    }
                    export module CollapsingToolbarLayout {
                        export class LayoutParams {
                            public static class: java.lang.Class<com.google.android.material.appbar.CollapsingToolbarLayout.LayoutParams>;
                            public static COLLAPSE_MODE_OFF: number = 0;
                            public static COLLAPSE_MODE_PIN: number = 1;
                            public static COLLAPSE_MODE_PARALLAX: number = 2;
                            public constructor(c: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                            public constructor(source: com.google.android.material.appbar.CollapsingToolbarLayout.LayoutParams);
                            public constructor(p: globalAndroid.view.ViewGroup.LayoutParams);
                            public constructor(source: globalAndroid.widget.FrameLayout.LayoutParams);
                            public getCollapseMode(): number;
                            public setParallaxMultiplier(multiplier: number): void;
                            public constructor(source: globalAndroid.view.ViewGroup.MarginLayoutParams);
                            public getParallaxMultiplier(): number;
                            public constructor(width: number, height: number, gravity: number);
                            public setCollapseMode(collapseMode: number): void;
                            public constructor(width: number, height: number);
                        }
                        export class OffsetUpdateListener extends com.google.android.material.appbar.AppBarLayout.OnOffsetChangedListener {
                            public static class: java.lang.Class<com.google.android.material.appbar.CollapsingToolbarLayout.OffsetUpdateListener>;
                            public onOffsetChanged(param0: com.google.android.material.appbar.AppBarLayout, param1: number): void;
                            public onOffsetChanged(param0: any, param1: number): void;
                            public onOffsetChanged(lp: com.google.android.material.appbar.AppBarLayout, offsetHelper: number): void;
                        }
                        export class StaticLayoutBuilderConfigurer extends com.google.android.material.internal.StaticLayoutBuilderConfigurer {
                            public static class: java.lang.Class<com.google.android.material.appbar.CollapsingToolbarLayout.StaticLayoutBuilderConfigurer>;
                            /**
                             * Constructs a new instance of the com.google.android.material.appbar.CollapsingToolbarLayout$StaticLayoutBuilderConfigurer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                configure(param0: globalAndroid.text.StaticLayout.Builder): void;
                            });
                            public constructor();
                            public configure(param0: globalAndroid.text.StaticLayout.Builder): void;
                        }
                        export class TitleCollapseMode {
                            public static class: java.lang.Class<com.google.android.material.appbar.CollapsingToolbarLayout.TitleCollapseMode>;
                            /**
                             * Constructs a new instance of the com.google.android.material.appbar.CollapsingToolbarLayout$TitleCollapseMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module appbar {
                    export abstract class HeaderBehavior<V> extends com.google.android.material.appbar.ViewOffsetBehavior<any> {
                        public static class: java.lang.Class<com.google.android.material.appbar.HeaderBehavior<any>>;
                        public constructor();
                        public onTouchEvent(y: androidx.coordinatorlayout.widget.CoordinatorLayout, dy: any, newIndex: globalAndroid.view.MotionEvent): boolean;
                        public onInterceptTouchEvent(y: androidx.coordinatorlayout.widget.CoordinatorLayout, yDiff: any, x: globalAndroid.view.MotionEvent): boolean;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                    }
                    export module HeaderBehavior {
                        export class FlingRunnable {
                            public static class: java.lang.Class<com.google.android.material.appbar.HeaderBehavior.FlingRunnable>;
                            public run(): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module appbar {
                    export abstract class HeaderScrollingViewBehavior extends com.google.android.material.appbar.ViewOffsetBehavior<globalAndroid.view.View> {
                        public static class: java.lang.Class<com.google.android.material.appbar.HeaderScrollingViewBehavior>;
                        public constructor();
                        public shouldHeaderOverlapScrollingChild(): boolean;
                        public getOverlayTop(): number;
                        public onMeasureChild(availableHeight: androidx.coordinatorlayout.widget.CoordinatorLayout, height: globalAndroid.view.View, headerHeight: number, heightMeasureSpec: number, dependencies: number, header: number): boolean;
                        public layoutChild(available: androidx.coordinatorlayout.widget.CoordinatorLayout, parentInsets: globalAndroid.view.View, out: number): void;
                        public setOverlayTop(overlayTop: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module appbar {
                    export class MaterialToolbar {
                        public static class: java.lang.Class<com.google.android.material.appbar.MaterialToolbar>;
                        public getLogoScaleType(): globalAndroid.widget.ImageView.ScaleType;
                        public getNavigationIconTint(): java.lang.Integer;
                        public setSubtitleCentered(subtitleCentered: boolean): void;
                        public onAttachedToWindow(): void;
                        public isLogoAdjustViewBounds(): boolean;
                        public setElevation(elevation: number): void;
                        public setTitleCentered(titleCentered: boolean): void;
                        public isTitleCentered(): boolean;
                        public setNavigationIcon(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public setNavigationIconTint(navigationIconTint: number): void;
                        public setLogoAdjustViewBounds(logoAdjustViewBounds: boolean): void;
                        public clearNavigationIconTint(): void;
                        public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public setLogoScaleType(logoScaleType: globalAndroid.widget.ImageView.ScaleType): void;
                        public isSubtitleCentered(): boolean;
                        public constructor(context: globalAndroid.content.Context);
                        public inflateMenu(i: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module appbar {
                    export class ViewOffsetBehavior<V> extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any> {
                        public static class: java.lang.Class<com.google.android.material.appbar.ViewOffsetBehavior<any>>;
                        public constructor();
                        public setHorizontalOffsetEnabled(horizontalOffsetEnabled: boolean): void;
                        public isVerticalOffsetEnabled(): boolean;
                        public layoutChild(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, layoutDirection: number): void;
                        public setLeftAndRightOffset(offset: number): boolean;
                        public onLayoutChild(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, layoutDirection: number): boolean;
                        public getLeftAndRightOffset(): number;
                        public setVerticalOffsetEnabled(verticalOffsetEnabled: boolean): void;
                        public isHorizontalOffsetEnabled(): boolean;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public getTopAndBottomOffset(): number;
                        public setTopAndBottomOffset(offset: number): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module appbar {
                    export class ViewOffsetHelper {
                        public static class: java.lang.Class<com.google.android.material.appbar.ViewOffsetHelper>;
                        public getLayoutTop(): number;
                        public getLayoutLeft(): number;
                        public setHorizontalOffsetEnabled(horizontalOffsetEnabled: boolean): void;
                        public constructor(view: globalAndroid.view.View);
                        public isVerticalOffsetEnabled(): boolean;
                        public setLeftAndRightOffset(offset: number): boolean;
                        public getLeftAndRightOffset(): number;
                        public setVerticalOffsetEnabled(verticalOffsetEnabled: boolean): void;
                        public isHorizontalOffsetEnabled(): boolean;
                        public getTopAndBottomOffset(): number;
                        public setTopAndBottomOffset(offset: number): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module appbar {
                    export class ViewUtilsLollipop {
                        public static class: java.lang.Class<com.google.android.material.appbar.ViewUtilsLollipop>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module badge {
                    export class BadgeDrawable implements com.google.android.material.internal.TextDrawableHelper.TextDrawableDelegate {
                        public static class: java.lang.Class<com.google.android.material.badge.BadgeDrawable>;
                        public static TOP_END: number = 8388661;
                        public static TOP_START: number = 8388659;
                        public static BOTTOM_END: number = 8388693;
                        public static BOTTOM_START: number = 8388691;
                        public getMaxCharacterCount(): number;
                        public setVerticalOffsetWithoutText(px: number): void;
                        public static create(context: globalAndroid.content.Context): com.google.android.material.badge.BadgeDrawable;
                        public setColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): void;
                        public getBadgeTextColor(): number;
                        public isStateful(): boolean;
                        public setBadgeWithTextShapeAppearance(id: number): void;
                        public getCustomBadgeParent(): globalAndroid.widget.FrameLayout;
                        public setContentDescriptionExceedsMaxBadgeNumberStringResource(stringsResource: number): void;
                        public setVerticalOffsetWithText(px: number): void;
                        public getNumber(): number;
                        public getVerticalOffsetWithText(): number;
                        public getVerticalOffsetWithoutText(): number;
                        public getContentDescription(): string;
                        public getHorizontalOffsetWithText(): number;
                        public setBadgeTextColor(badgeTextColor: number): void;
                        public setBadgeNumberLocale(locale: java.util.Locale): void;
                        public getBackgroundColor(): number;
                        public setContentDescriptionNumberless(charSequence: string): void;
                        public getBadgeGravity(): number;
                        public hasNumber(): boolean;
                        public onStateChange(param0: androidNative.Array<number>): boolean;
                        public onTextSizeChange(): void;
                        public setBadgeWithTextShapeAppearanceOverlay(id: number): void;
                        public setTextAppearance(id: number): void;
                        public clearNumber(): void;
                        public setMaxCharacterCount(maxCharacterCount: number): void;
                        public setNumber(number: number): void;
                        public setVerticalOffset(px: number): void;
                        public getVerticalOffset(): number;
                        public setHorizontalOffset(px: number): void;
                        public setBackgroundColor(backgroundColor: number): void;
                        public draw(canvas: globalAndroid.graphics.Canvas): void;
                        public getAlpha(): number;
                        public static createFromResource(context: globalAndroid.content.Context, id: number): com.google.android.material.badge.BadgeDrawable;
                        public setHorizontalOffsetWithText(px: number): void;
                        public getHorizontalOffset(): number;
                        public setVisible(visible: boolean): void;
                        public getState(): androidNative.Array<number>;
                        public updateBadgeCoordinates(anchorView: globalAndroid.view.View, customBadgeParent: globalAndroid.widget.FrameLayout): void;
                        public onStateChange(state: androidNative.Array<number>): boolean;
                        public setAlpha(alpha: number): void;
                        public getIntrinsicWidth(): number;
                        public getIntrinsicHeight(): number;
                        public getBadgeNumberLocale(): java.util.Locale;
                        public setBadgeWithoutTextShapeAppearanceOverlay(id: number): void;
                        public getOpacity(): number;
                        /** @deprecated */
                        public updateBadgeCoordinates(anchorView: globalAndroid.view.View, customBadgeParent: globalAndroid.view.ViewGroup): void;
                        public setBadgeWithoutTextShapeAppearance(id: number): void;
                        public setBadgeGravity(gravity: number): void;
                        public updateBadgeCoordinates(anchorView: globalAndroid.view.View): void;
                        public setContentDescriptionQuantityStringsResource(stringsResource: number): void;
                        public setHorizontalOffsetWithoutText(px: number): void;
                        public getHorizontalOffsetWithoutText(): number;
                    }
                    export module BadgeDrawable {
                        export class BadgeGravity {
                            public static class: java.lang.Class<com.google.android.material.badge.BadgeDrawable.BadgeGravity>;
                            /**
                             * Constructs a new instance of the com.google.android.material.badge.BadgeDrawable$BadgeGravity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module badge {
                    export class BadgeState {
                        public static class: java.lang.Class<com.google.android.material.badge.BadgeState>;
                    }
                    export module BadgeState {
                        export class State {
                            public static class: java.lang.Class<com.google.android.material.badge.BadgeState.State>;
                            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.badge.BadgeState.State>;
                            public constructor();
                            public describeContents(): number;
                            public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module badge {
                    export class BadgeUtils {
                        public static class: java.lang.Class<com.google.android.material.badge.BadgeUtils>;
                        public static USE_COMPAT_PARENT: boolean;
                        public static attachBadgeDrawable(badgeDrawable: com.google.android.material.badge.BadgeDrawable, anchor: globalAndroid.view.View, customBadgeParent: globalAndroid.widget.FrameLayout): void;
                        public static detachBadgeDrawable(badgeDrawable: com.google.android.material.badge.BadgeDrawable, toolbar: androidx.appcompat.widget.Toolbar, menuItemId: number): void;
                        public static setBadgeDrawableBounds(badgeDrawable: com.google.android.material.badge.BadgeDrawable, anchor: globalAndroid.view.View, compatBadgeParent: globalAndroid.widget.FrameLayout): void;
                        public static updateBadgeBounds(rect: globalAndroid.graphics.Rect, centerX: number, centerY: number, halfWidth: number, halfHeight: number): void;
                        public static createBadgeDrawablesFromSavedStates(key: globalAndroid.content.Context, savedState: com.google.android.material.internal.ParcelableSparseArray): globalAndroid.util.SparseArray<com.google.android.material.badge.BadgeDrawable>;
                        public static createParcelableBadgeStates(key: globalAndroid.util.SparseArray<com.google.android.material.badge.BadgeDrawable>): com.google.android.material.internal.ParcelableSparseArray;
                        public static attachBadgeDrawable(badgeDrawable: com.google.android.material.badge.BadgeDrawable, toolbar: androidx.appcompat.widget.Toolbar, menuItemId: number, customBadgeParent: globalAndroid.widget.FrameLayout): void;
                        public static attachBadgeDrawable(badgeDrawable: com.google.android.material.badge.BadgeDrawable, anchor: globalAndroid.view.View): void;
                        public static detachBadgeDrawable(badgeDrawable: com.google.android.material.badge.BadgeDrawable, anchor: globalAndroid.view.View): void;
                        public static attachBadgeDrawable(badgeDrawable: com.google.android.material.badge.BadgeDrawable, toolbar: androidx.appcompat.widget.Toolbar, menuItemId: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module badge {
                    export class ExperimentalBadgeUtils {
                        public static class: java.lang.Class<com.google.android.material.badge.ExperimentalBadgeUtils>;
                        /**
                         * Constructs a new instance of the com.google.android.material.badge.ExperimentalBadgeUtils interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                        });
                        public constructor();
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module behavior {
                    export class HideBottomViewOnScrollBehavior<V> extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any> {
                        public static class: java.lang.Class<com.google.android.material.behavior.HideBottomViewOnScrollBehavior<any>>;
                        public static STATE_SCROLLED_DOWN: number = 1;
                        public static STATE_SCROLLED_UP: number = 2;
                        public addOnScrollStateChangedListener(listener: com.google.android.material.behavior.HideBottomViewOnScrollBehavior.OnScrollStateChangedListener): void;
                        public removeOnScrollStateChangedListener(listener: com.google.android.material.behavior.HideBottomViewOnScrollBehavior.OnScrollStateChangedListener): void;
                        public onNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number, consumed: androidNative.Array<number>): void;
                        public constructor();
                        public setAdditionalHiddenOffsetY(child: any, offset: number): void;
                        public onLayoutChild(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, layoutDirection: number): boolean;
                        public slideUp(child: any): void;
                        public isScrolledUp(): boolean;
                        public onStartNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, directTargetChild: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number, type: number): boolean;
                        public isScrolledDown(): boolean;
                        public slideDown(child: any): void;
                        public slideUp(child: any, animate: boolean): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public clearOnScrollStateChangedListeners(): void;
                        public slideDown(child: any, animate: boolean): void;
                    }
                    export module HideBottomViewOnScrollBehavior {
                        export class OnScrollStateChangedListener {
                            public static class: java.lang.Class<com.google.android.material.behavior.HideBottomViewOnScrollBehavior.OnScrollStateChangedListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.behavior.HideBottomViewOnScrollBehavior$OnScrollStateChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onStateChanged(param0: globalAndroid.view.View, param1: number): void;
                            });
                            public constructor();
                            public onStateChanged(param0: globalAndroid.view.View, param1: number): void;
                        }
                        export class ScrollState {
                            public static class: java.lang.Class<com.google.android.material.behavior.HideBottomViewOnScrollBehavior.ScrollState>;
                            /**
                             * Constructs a new instance of the com.google.android.material.behavior.HideBottomViewOnScrollBehavior$ScrollState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module behavior {
                    export class SwipeDismissBehavior<V> extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any> {
                        public static class: java.lang.Class<com.google.android.material.behavior.SwipeDismissBehavior<any>>;
                        public static STATE_IDLE: number = 0;
                        public static STATE_DRAGGING: number = 1;
                        public static STATE_SETTLING: number = 2;
                        public static SWIPE_DIRECTION_START_TO_END: number = 0;
                        public static SWIPE_DIRECTION_END_TO_START: number = 1;
                        public static SWIPE_DIRECTION_ANY: number = 2;
                        public constructor();
                        public canSwipeDismissView(view: globalAndroid.view.View): boolean;
                        public setDragDismissDistance(distance: number): void;
                        public onLayoutChild(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, layoutDirection: number): boolean;
                        public setSwipeDirection(direction: number): void;
                        public setStartAlphaSwipeDistance(fraction: number): void;
                        public getListener(): com.google.android.material.behavior.SwipeDismissBehavior.OnDismissListener;
                        public onTouchEvent(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, event: globalAndroid.view.MotionEvent): boolean;
                        public getDragState(): number;
                        public setEndAlphaSwipeDistance(fraction: number): void;
                        public setListener(listener: com.google.android.material.behavior.SwipeDismissBehavior.OnDismissListener): void;
                        public setSensitivity(sensitivity: number): void;
                        public onInterceptTouchEvent(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, event: globalAndroid.view.MotionEvent): boolean;
                    }
                    export module SwipeDismissBehavior {
                        export class OnDismissListener {
                            public static class: java.lang.Class<com.google.android.material.behavior.SwipeDismissBehavior.OnDismissListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.behavior.SwipeDismissBehavior$OnDismissListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onDismiss(param0: globalAndroid.view.View): void;
                                onDragStateChanged(param0: number): void;
                            });
                            public constructor();
                            public onDismiss(param0: globalAndroid.view.View): void;
                            public onDragStateChanged(param0: number): void;
                        }
                        export class SettleRunnable {
                            public static class: java.lang.Class<com.google.android.material.behavior.SwipeDismissBehavior.SettleRunnable>;
                            public run(): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module bottomappbar {
                    export class BottomAppBar {
                        public static class: java.lang.Class<com.google.android.material.bottomappbar.BottomAppBar>;
                        public static FAB_ALIGNMENT_MODE_CENTER: number = 0;
                        public static FAB_ALIGNMENT_MODE_END: number = 1;
                        public static FAB_ANCHOR_MODE_EMBED: number = 0;
                        public static FAB_ANCHOR_MODE_CRADLE: number = 1;
                        public static FAB_ANIMATION_MODE_SCALE: number = 0;
                        public static FAB_ANIMATION_MODE_SLIDE: number = 1;
                        public static MENU_ALIGNMENT_MODE_AUTO: number = 0;
                        public static MENU_ALIGNMENT_MODE_START: number = 1;
                        public addOnScrollStateChangedListener(listener: com.google.android.material.behavior.HideBottomViewOnScrollBehavior.OnScrollStateChangedListener): void;
                        public removeOnScrollStateChangedListener(listener: com.google.android.material.behavior.HideBottomViewOnScrollBehavior.OnScrollStateChangedListener): void;
                        public setTitle(title: string): void;
                        public setFabAlignmentModeEndMargin(margin: number): void;
                        public replaceMenu(newMenu: number): void;
                        public setCradleVerticalOffset(verticalOffset: number): void;
                        public performHide(animate: boolean): void;
                        public setFabCradleRoundedCornerRadius(roundedCornerRadius: number): void;
                        public onAttachedToWindow(): void;
                        public performShow(animate: boolean): void;
                        public getFabAnchorMode(): number;
                        public setFabAnchorMode(fabAnchorMode: number): void;
                        public setNavigationIcon(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public isScrolledUp(): boolean;
                        public getBehavior(): com.google.android.material.bottomappbar.BottomAppBar.Behavior;
                        public getHideOnScroll(): boolean;
                        public setBackgroundTint(backgroundTint: globalAndroid.content.res.ColorStateList): void;
                        public performShow(): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public onLayout(this_: boolean, changed: number, l: number, t: number, r: number): void;
                        public getFabAnimationMode(): number;
                        public getFabAlignmentModeEndMargin(): number;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public getFabCradleMargin(): number;
                        public setHideOnScroll(hide: boolean): void;
                        public createFabDefaultXAnimation(targetMode: number, animators: java.util.List<globalAndroid.animation.Animator>): void;
                        public getBackgroundTint(): globalAndroid.content.res.ColorStateList;
                        public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
                        public performHide(): void;
                        public setElevation(elevation: number): void;
                        public getFabAlignmentMode(): number;
                        public getMenuAlignmentMode(): number;
                        public getActionMenuViewTranslationX(isAlignedToStart: androidx.appcompat.widget.ActionMenuView, i: number, horizontalMargin: boolean): number;
                        public setNavigationIconTint(navigationIconTint: number): void;
                        public setFabAlignmentModeAndReplaceMenu(fabAlignmentMode: number, newMenu: number): void;
                        public setMenuAlignmentMode(this_: number): void;
                        public getFabCradleRoundedCornerRadius(): number;
                        public setSubtitle(subtitle: string): void;
                        public setFabAnimationMode(fabAnimationMode: number): void;
                        public getCradleVerticalOffset(): number;
                        public isScrolledDown(): boolean;
                        public onSaveInstanceState(): globalAndroid.os.Parcelable;
                        public setFabCradleMargin(cradleMargin: number): void;
                        public clearOnScrollStateChangedListeners(): void;
                        public constructor(context: globalAndroid.content.Context);
                        public setFabAlignmentMode(fabAlignmentMode: number): void;
                    }
                    export module BottomAppBar {
                        export class AnimationListener {
                            public static class: java.lang.Class<com.google.android.material.bottomappbar.BottomAppBar.AnimationListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.bottomappbar.BottomAppBar$AnimationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onAnimationStart(param0: com.google.android.material.bottomappbar.BottomAppBar): void;
                                onAnimationEnd(param0: com.google.android.material.bottomappbar.BottomAppBar): void;
                            });
                            public constructor();
                            public onAnimationEnd(param0: com.google.android.material.bottomappbar.BottomAppBar): void;
                            public onAnimationStart(param0: com.google.android.material.bottomappbar.BottomAppBar): void;
                        }
                        export class Behavior extends com.google.android.material.behavior.HideBottomViewOnScrollBehavior<com.google.android.material.bottomappbar.BottomAppBar> {
                            public static class: java.lang.Class<com.google.android.material.bottomappbar.BottomAppBar.Behavior>;
                            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                            public constructor();
                            public onStartNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, directTargetChild: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number, type: number): boolean;
                            public onLayoutChild(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, layoutDirection: number): boolean;
                            public onStartNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: com.google.android.material.bottomappbar.BottomAppBar, directTargetChild: globalAndroid.view.View, target: globalAndroid.view.View, axes: number, type: number): boolean;
                            public onLayoutChild(fabLayoutParams: androidx.coordinatorlayout.widget.CoordinatorLayout, this_: com.google.android.material.bottomappbar.BottomAppBar, parent: number): boolean;
                        }
                        export class FabAlignmentMode {
                            public static class: java.lang.Class<com.google.android.material.bottomappbar.BottomAppBar.FabAlignmentMode>;
                            /**
                             * Constructs a new instance of the com.google.android.material.bottomappbar.BottomAppBar$FabAlignmentMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class FabAnchorMode {
                            public static class: java.lang.Class<com.google.android.material.bottomappbar.BottomAppBar.FabAnchorMode>;
                            /**
                             * Constructs a new instance of the com.google.android.material.bottomappbar.BottomAppBar$FabAnchorMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class FabAnimationMode {
                            public static class: java.lang.Class<com.google.android.material.bottomappbar.BottomAppBar.FabAnimationMode>;
                            /**
                             * Constructs a new instance of the com.google.android.material.bottomappbar.BottomAppBar$FabAnimationMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class MenuAlignmentMode {
                            public static class: java.lang.Class<com.google.android.material.bottomappbar.BottomAppBar.MenuAlignmentMode>;
                            /**
                             * Constructs a new instance of the com.google.android.material.bottomappbar.BottomAppBar$MenuAlignmentMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class SavedState {
                            public static class: java.lang.Class<com.google.android.material.bottomappbar.BottomAppBar.SavedState>;
                            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.bottomappbar.BottomAppBar.SavedState>;
                            public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
                            public constructor(in_: globalAndroid.os.Parcel, loader: java.lang.ClassLoader);
                            public constructor(superState: globalAndroid.os.Parcelable);
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module bottomappbar {
                    export class BottomAppBarTopEdgeTreatment extends com.google.android.material.shape.EdgeTreatment {
                        public static class: java.lang.Class<com.google.android.material.bottomappbar.BottomAppBarTopEdgeTreatment>;
                        public constructor();
                        public getHorizontalOffset(): number;
                        /** @deprecated */
                        public getEdgePath(length: number, interpolation: number, shapePath: com.google.android.material.shape.ShapePath): void;
                        public getFabCornerRadius(): number;
                        public getEdgePath(this_: number, length: number, center: number, interpolation: com.google.android.material.shape.ShapePath): void;
                        public getFabDiameter(): number;
                        public setFabDiameter(fabDiameter: number): void;
                        public setFabCornerSize(size: number): void;
                        public constructor(fabMargin: number, roundedCornerRadius: number, cradleVerticalOffset: number);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module bottomnavigation {
                    export class BottomNavigationItemView extends com.google.android.material.navigation.NavigationBarItemView {
                        public static class: java.lang.Class<com.google.android.material.bottomnavigation.BottomNavigationItemView>;
                        public getItemLayoutResId(): number;
                        public getItemDefaultMarginResId(): number;
                        public constructor(context: globalAndroid.content.Context);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module bottomnavigation {
                    export class BottomNavigationMenuView extends com.google.android.material.navigation.NavigationBarMenuView {
                        public static class: java.lang.Class<com.google.android.material.bottomnavigation.BottomNavigationMenuView>;
                        public onMeasure(i: number, activeChild: number): void;
                        public isItemHorizontalTranslationEnabled(): boolean;
                        public setItemHorizontalTranslationEnabled(itemHorizontalTranslationEnabled: boolean): void;
                        public onLayout(i: boolean, this_: number, changed: number, left: number, top: number): void;
                        public createNavigationBarItemView(context: globalAndroid.content.Context): com.google.android.material.navigation.NavigationBarItemView;
                        public constructor(context: globalAndroid.content.Context);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module bottomnavigation {
                    export class BottomNavigationView extends com.google.android.material.navigation.NavigationBarView {
                        public static class: java.lang.Class<com.google.android.material.bottomnavigation.BottomNavigationView>;
                        public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
                        public createNavigationBarMenuView(context: globalAndroid.content.Context): com.google.android.material.navigation.NavigationBarMenuView;
                        public isItemHorizontalTranslationEnabled(): boolean;
                        public constructor(itemActiveIndicatorWidth: globalAndroid.content.Context, itemActiveIndicatorHeight: globalAndroid.util.AttributeSet, itemActiveIndicatorMarginHorizontal: number, itemActiveIndicatorColor: number);
                        public setItemHorizontalTranslationEnabled(itemHorizontalTranslationEnabled: boolean): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public getMaxItemCount(): number;
                        /** @deprecated */
                        public setOnNavigationItemSelectedListener(listener: com.google.android.material.bottomnavigation.BottomNavigationView.OnNavigationItemSelectedListener): void;
                        public constructor(context: globalAndroid.content.Context);
                        /** @deprecated */
                        public setOnNavigationItemReselectedListener(listener: com.google.android.material.bottomnavigation.BottomNavigationView.OnNavigationItemReselectedListener): void;
                    }
                    export module BottomNavigationView {
                        export class OnNavigationItemReselectedListener extends com.google.android.material.navigation.NavigationBarView.OnItemReselectedListener {
                            public static class: java.lang.Class<com.google.android.material.bottomnavigation.BottomNavigationView.OnNavigationItemReselectedListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.bottomnavigation.BottomNavigationView$OnNavigationItemReselectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onNavigationItemReselected(param0: globalAndroid.view.MenuItem): void;
                            });
                            public constructor();
                            public onNavigationItemReselected(param0: globalAndroid.view.MenuItem): void;
                        }
                        export class OnNavigationItemSelectedListener extends com.google.android.material.navigation.NavigationBarView.OnItemSelectedListener {
                            public static class: java.lang.Class<com.google.android.material.bottomnavigation.BottomNavigationView.OnNavigationItemSelectedListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.bottomnavigation.BottomNavigationView$OnNavigationItemSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onNavigationItemSelected(param0: globalAndroid.view.MenuItem): boolean;
                            });
                            public constructor();
                            public onNavigationItemSelected(param0: globalAndroid.view.MenuItem): boolean;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module bottomnavigation {
                    export class LabelVisibilityMode {
                        public static class: java.lang.Class<com.google.android.material.bottomnavigation.LabelVisibilityMode>;
                        /**
                         * Constructs a new instance of the com.google.android.material.bottomnavigation.LabelVisibilityMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                        });
                        public constructor();
                        public static LABEL_VISIBILITY_AUTO: number = -1;
                        public static LABEL_VISIBILITY_SELECTED: number = 0;
                        public static LABEL_VISIBILITY_LABELED: number = 1;
                        public static LABEL_VISIBILITY_UNLABELED: number = 2;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module bottomsheet {
                    export class BottomSheetBehavior<V> extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any> {
                        public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetBehavior<any>>;
                        public static STATE_DRAGGING: number = 1;
                        public static STATE_SETTLING: number = 2;
                        public static STATE_EXPANDED: number = 3;
                        public static STATE_COLLAPSED: number = 4;
                        public static STATE_HIDDEN: number = 5;
                        public static STATE_HALF_EXPANDED: number = 6;
                        public static PEEK_HEIGHT_AUTO: number = -1;
                        public static SAVE_PEEK_HEIGHT: number = 1;
                        public static SAVE_FIT_TO_CONTENTS: number = 2;
                        public static SAVE_HIDEABLE: number = 4;
                        public static SAVE_SKIP_COLLAPSED: number = 8;
                        public static SAVE_ALL: number = -1;
                        public static SAVE_NONE: number = 0;
                        public setPeekHeight(peekHeight: number, animate: boolean): void;
                        public onNestedPreScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, target: globalAndroid.view.View, dx: number, dy: number, consumed: androidNative.Array<number>, type: number): void;
                        public shouldSkipSmoothAnimation(): boolean;
                        public setHideableInternal(hideable: boolean): void;
                        public onSaveInstanceState(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any): globalAndroid.os.Parcelable;
                        public onDetachedFromLayoutParams(): void;
                        public getLastStableState(): number;
                        public getMaxWidth(): number;
                        public onTouchEvent(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, event: globalAndroid.view.MotionEvent): boolean;
                        public setGestureInsetBottomIgnored(gestureInsetBottomIgnored: boolean): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public setHideable(hideable: boolean): void;
                        public constructor();
                        public onAttachedToLayoutParams(layoutParams: androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams): void;
                        public shouldSkipHalfExpandedStateWhenDragging(): boolean;
                        public setSkipCollapsed(skipCollapsed: boolean): void;
                        public onStopNestedScroll(targetState: androidx.coordinatorlayout.widget.CoordinatorLayout, currentTop: any, targetState: globalAndroid.view.View, targetState: number): void;
                        public isGestureInsetBottomIgnored(): boolean;
                        public getExpandedOffset(): number;
                        public setSignificantVelocityThreshold(significantVelocityThreshold: number): void;
                        public onNestedPreFling(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
                        public isHideable(): boolean;
                        public setMaxHeight(maxHeight: number): void;
                        public getState(): number;
                        public shouldExpandOnUpwardDrag(dragDurationMillis: number, yPositionPercentage: number): boolean;
                        public getPeekHeight(): number;
                        public setPeekHeight(peekHeight: number): void;
                        public setDraggable(draggable: boolean): void;
                        public isDraggable(): boolean;
                        public setHalfExpandedRatio(ratio: number): void;
                        /** @deprecated */
                        public setBottomSheetCallback(callback: com.google.android.material.bottomsheet.BottomSheetBehavior.BottomSheetCallback): void;
                        public onStartNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, directTargetChild: globalAndroid.view.View, target: globalAndroid.view.View, axes: number, type: number): boolean;
                        public disableShapeAnimations(): void;
                        public setMaxWidth(maxWidth: number): void;
                        public getSaveFlags(): number;
                        public addBottomSheetCallback(callback: com.google.android.material.bottomsheet.BottomSheetBehavior.BottomSheetCallback): void;
                        public static from(view: globalAndroid.view.View): com.google.android.material.bottomsheet.BottomSheetBehavior<any>;
                        public setState(child: number): void;
                        public getMaxHeight(): number;
                        public onInterceptTouchEvent(initialX: androidx.coordinatorlayout.widget.CoordinatorLayout, this_: any, parent: globalAndroid.view.MotionEvent): boolean;
                        public getHalfExpandedRatio(): number;
                        public getSignificantVelocityThreshold(): number;
                        public onMeasureChild(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, parentWidthMeasureSpec: number, widthUsed: number, parentHeightMeasureSpec: number, heightUsed: number): boolean;
                        public onNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number, consumed: androidNative.Array<number>): void;
                        public isFitToContents(): boolean;
                        public getSkipCollapsed(): boolean;
                        public onLayoutChild(this_: androidx.coordinatorlayout.widget.CoordinatorLayout, parent: any, child: number): boolean;
                        public setSaveFlags(flags: number): void;
                        public isNestedScrollingCheckEnabled(): boolean;
                        public setHideFriction(hideFriction: number): void;
                        public getHideFriction(): number;
                        public setFitToContents(fitToContents: boolean): void;
                        public calculateSlideOffset(): number;
                        public setExpandedOffset(offset: number): void;
                        public setUpdateImportantForAccessibilityOnSiblings(updateImportantForAccessibilityOnSiblings: boolean): void;
                        public onRestoreInstanceState(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, state: globalAndroid.os.Parcelable): void;
                        public isHideableWhenDragging(): boolean;
                        public removeBottomSheetCallback(callback: com.google.android.material.bottomsheet.BottomSheetBehavior.BottomSheetCallback): void;
                    }
                    export module BottomSheetBehavior {
                        export abstract class BottomSheetCallback {
                            public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetBehavior.BottomSheetCallback>;
                            public constructor();
                            public onSlide(param0: globalAndroid.view.View, param1: number): void;
                            public onStateChanged(param0: globalAndroid.view.View, param1: number): void;
                        }
                        export class SaveFlags {
                            public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetBehavior.SaveFlags>;
                            /**
                             * Constructs a new instance of the com.google.android.material.bottomsheet.BottomSheetBehavior$SaveFlags interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class SavedState {
                            public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetBehavior.SavedState>;
                            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.bottomsheet.BottomSheetBehavior.SavedState>;
                            public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
                            public constructor(source: globalAndroid.os.Parcel);
                            /** @deprecated */
                            public constructor(superstate: globalAndroid.os.Parcelable, state: number);
                            public constructor(source: globalAndroid.os.Parcel, loader: java.lang.ClassLoader);
                            public constructor(superState: globalAndroid.os.Parcelable, behavior: com.google.android.material.bottomsheet.BottomSheetBehavior<any>);
                        }
                        export class StableState {
                            public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetBehavior.StableState>;
                            /**
                             * Constructs a new instance of the com.google.android.material.bottomsheet.BottomSheetBehavior$StableState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class State {
                            public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetBehavior.State>;
                            /**
                             * Constructs a new instance of the com.google.android.material.bottomsheet.BottomSheetBehavior$State interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class StateSettlingTracker {
                            public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetBehavior.StateSettlingTracker>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module bottomsheet {
                    export class BottomSheetDialog {
                        public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetDialog>;
                        public getEdgeToEdgeEnabled(): boolean;
                        public cancel(): void;
                        public onAttachedToWindow(): void;
                        /** @deprecated */
                        public static setLightStatusBar(flags: globalAndroid.view.View, view: boolean): void;
                        public onDetachedFromWindow(): void;
                        public setContentView(view: globalAndroid.view.View): void;
                        public setCancelable(cancelable: boolean): void;
                        public setDismissWithAnimation(dismissWithAnimation: boolean): void;
                        public setContentView(layoutResId: number): void;
                        public setCanceledOnTouchOutside(cancel: boolean): void;
                        public getDismissWithAnimation(): boolean;
                        public constructor(context: globalAndroid.content.Context, theme: number);
                        public getBehavior(): com.google.android.material.bottomsheet.BottomSheetBehavior<globalAndroid.widget.FrameLayout>;
                        public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
                        public constructor(context: globalAndroid.content.Context, cancelable: boolean, cancelListener: globalAndroid.content.DialogInterface.OnCancelListener);
                        public setContentView(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
                        public constructor(context: globalAndroid.content.Context);
                        public onStart(): void;
                    }
                    export module BottomSheetDialog {
                        export class EdgeToEdgeCallback extends com.google.android.material.bottomsheet.BottomSheetBehavior.BottomSheetCallback {
                            public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetDialog.EdgeToEdgeCallback>;
                            public onStateChanged(bottomSheet: globalAndroid.view.View, newState: number): void;
                            public onSlide(bottomSheet: globalAndroid.view.View, slideOffset: number): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module bottomsheet {
                    export class BottomSheetDialogFragment {
                        public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetDialogFragment>;
                        public constructor();
                        public onCreateDialog(savedInstanceState: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
                        public constructor(contentLayoutId: number);
                        public dismiss(): void;
                        public dismissAllowingStateLoss(): void;
                    }
                    export module BottomSheetDialogFragment {
                        export class BottomSheetDismissCallback extends com.google.android.material.bottomsheet.BottomSheetBehavior.BottomSheetCallback {
                            public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetDialogFragment.BottomSheetDismissCallback>;
                            public onStateChanged(bottomSheet: globalAndroid.view.View, newState: number): void;
                            public onSlide(bottomSheet: globalAndroid.view.View, slideOffset: number): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module bottomsheet {
                    export class BottomSheetDragHandleView {
                        public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetDragHandleView>;
                        public onAccessibilityStateChanged(enabled: boolean): void;
                        public onAttachedToWindow(): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public onDetachedFromWindow(): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public constructor(context: globalAndroid.content.Context);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module bottomsheet {
                    export class InsetsAnimationCallback {
                        public static class: java.lang.Class<com.google.android.material.bottomsheet.InsetsAnimationCallback>;
                        public constructor(view: globalAndroid.view.View);
                        public onPrepare(windowInsetsAnimationCompat: androidx.core.view.WindowInsetsAnimationCompat): void;
                        public onEnd(windowInsetsAnimationCompat: androidx.core.view.WindowInsetsAnimationCompat): void;
                        public onStart(windowInsetsAnimationCompat: androidx.core.view.WindowInsetsAnimationCompat, boundsCompat: androidx.core.view.WindowInsetsAnimationCompat.BoundsCompat): androidx.core.view.WindowInsetsAnimationCompat.BoundsCompat;
                        public onProgress(animation: androidx.core.view.WindowInsetsCompat, this_: java.util.List<androidx.core.view.WindowInsetsAnimationCompat>): androidx.core.view.WindowInsetsCompat;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module button {
                    export class MaterialButton implements com.google.android.material.shape.Shapeable {
                        public static class: java.lang.Class<com.google.android.material.button.MaterialButton>;
                        public static ICON_GRAVITY_START: number = 1;
                        public static ICON_GRAVITY_TEXT_START: number = 2;
                        public static ICON_GRAVITY_END: number = 3;
                        public static ICON_GRAVITY_TEXT_END: number = 4;
                        public static ICON_GRAVITY_TOP: number = 16;
                        public static ICON_GRAVITY_TEXT_TOP: number = 32;
                        public getIconSize(): number;
                        public setStrokeWidth(strokeWidth: number): void;
                        public getInsetTop(): number;
                        public setChecked(this_: boolean): void;
                        public getIcon(): globalAndroid.graphics.drawable.Drawable;
                        public performClick(): boolean;
                        public setCornerRadius(cornerRadius: number): void;
                        public setSupportBackgroundTintList(tint: globalAndroid.content.res.ColorStateList): void;
                        public getIconTintMode(): globalAndroid.graphics.PorterDuff.Mode;
                        public onCreateDrawableState(extraSpace: number): androidNative.Array<number>;
                        public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
                        public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
                        public onTextChanged(charSequence: string, i: number, i1: number, i2: number): void;
                        public setIcon(icon: globalAndroid.graphics.drawable.Drawable): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public setBackgroundColor(color: number): void;
                        public setBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public getInsetBottom(): number;
                        public setInsetTop(insetTop: number): void;
                        public setBackgroundDrawable(background: globalAndroid.graphics.drawable.Drawable): void;
                        public setIconTintMode(iconTintMode: globalAndroid.graphics.PorterDuff.Mode): void;
                        public setTextAlignment(textAlignment: number): void;
                        public setStrokeWidthResource(strokeWidthResourceId: number): void;
                        public getIconGravity(): number;
                        public setPressed(pressed: boolean): void;
                        public setRippleColorResource(rippleColorResourceId: number): void;
                        public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public removeOnCheckedChangeListener(listener: com.google.android.material.button.MaterialButton.OnCheckedChangeListener): void;
                        public setToggleCheckedStateOnClick(toggleCheckedStateOnClick: boolean): void;
                        public getRippleColor(): globalAndroid.content.res.ColorStateList;
                        public getIconPadding(): number;
                        public setIconTint(iconTint: globalAndroid.content.res.ColorStateList): void;
                        public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
                        public onInitializeAccessibilityNodeInfo(info: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
                        public setBackgroundResource(backgroundResourceId: number): void;
                        public toggle(): void;
                        public setIconTintResource(iconTintResourceId: number): void;
                        public getCornerRadius(): number;
                        public onAttachedToWindow(): void;
                        public setRippleColor(rippleColor: globalAndroid.content.res.ColorStateList): void;
                        public setStrokeColor(strokeColor: globalAndroid.content.res.ColorStateList): void;
                        public setStrokeColorResource(strokeColorResourceId: number): void;
                        public setIconResource(iconResourceId: number): void;
                        public clearOnCheckedChangeListeners(): void;
                        public getStrokeColor(): globalAndroid.content.res.ColorStateList;
                        public isCheckable(): boolean;
                        public setInsetBottom(insetBottom: number): void;
                        public getStrokeWidth(): number;
                        public isChecked(): boolean;
                        public onInitializeAccessibilityEvent(accessibilityEvent: globalAndroid.view.accessibility.AccessibilityEvent): void;
                        public getBackgroundTintList(): globalAndroid.content.res.ColorStateList;
                        public setSupportBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
                        public getIconTint(): globalAndroid.content.res.ColorStateList;
                        public setCheckable(checkable: boolean): void;
                        public setBackgroundTintList(tintList: globalAndroid.content.res.ColorStateList): void;
                        public setBackground(background: globalAndroid.graphics.drawable.Drawable): void;
                        public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
                        public setShapeAppearanceModel(shapeAppearanceModel: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public setElevation(elevation: number): void;
                        public setIconPadding(iconPadding: number): void;
                        public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
                        public refreshDrawableState(): void;
                        public setCornerRadiusResource(cornerRadiusResourceId: number): void;
                        public addOnCheckedChangeListener(listener: com.google.android.material.button.MaterialButton.OnCheckedChangeListener): void;
                        public getBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
                        public setIconSize(iconSize: number): void;
                        public onSaveInstanceState(): globalAndroid.os.Parcelable;
                        public isToggleCheckedStateOnClick(): boolean;
                        public setIconGravity(iconGravity: number): void;
                        public constructor(context: globalAndroid.content.Context);
                    }
                    export module MaterialButton {
                        export class IconGravity {
                            public static class: java.lang.Class<com.google.android.material.button.MaterialButton.IconGravity>;
                            /**
                             * Constructs a new instance of the com.google.android.material.button.MaterialButton$IconGravity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class OnCheckedChangeListener {
                            public static class: java.lang.Class<com.google.android.material.button.MaterialButton.OnCheckedChangeListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.button.MaterialButton$OnCheckedChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onCheckedChanged(param0: com.google.android.material.button.MaterialButton, param1: boolean): void;
                            });
                            public constructor();
                            public onCheckedChanged(param0: com.google.android.material.button.MaterialButton, param1: boolean): void;
                        }
                        export class OnPressedChangeListener {
                            public static class: java.lang.Class<com.google.android.material.button.MaterialButton.OnPressedChangeListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.button.MaterialButton$OnPressedChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onPressedChanged(param0: com.google.android.material.button.MaterialButton, param1: boolean): void;
                            });
                            public constructor();
                            public onPressedChanged(param0: com.google.android.material.button.MaterialButton, param1: boolean): void;
                        }
                        export class SavedState {
                            public static class: java.lang.Class<com.google.android.material.button.MaterialButton.SavedState>;
                            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.button.MaterialButton.SavedState>;
                            public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
                            public constructor(source: globalAndroid.os.Parcel, loader: java.lang.ClassLoader);
                            public constructor(superState: globalAndroid.os.Parcelable);
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module button {
                    export class MaterialButtonHelper {
                        public static class: java.lang.Class<com.google.android.material.button.MaterialButtonHelper>;
                        public setInsetTop(newInsetTop: number): void;
                        public getInsetTop(): number;
                        public setInsetBottom(newInsetBottom: number): void;
                        public getMaskDrawable(): com.google.android.material.shape.Shapeable;
                        public getInsetBottom(): number;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module button {
                    export class MaterialButtonToggleGroup {
                        public static class: java.lang.Class<com.google.android.material.button.MaterialButtonToggleGroup>;
                        public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
                        public uncheck(id: number): void;
                        public clearOnButtonCheckedListeners(): void;
                        public setSingleSelection(id: number): void;
                        public check(id: number): void;
                        public getCheckedButtonIds(): java.util.List<java.lang.Integer>;
                        public onFinishInflate(): void;
                        public getCheckedButtonId(): number;
                        public clearChecked(): void;
                        public setEnabled(i: boolean): void;
                        public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
                        public setSelectionRequired(selectionRequired: boolean): void;
                        public removeOnButtonCheckedListener(listener: com.google.android.material.button.MaterialButtonToggleGroup.OnButtonCheckedListener): void;
                        public onViewRemoved(child: globalAndroid.view.View): void;
                        public setSingleSelection(singleSelection: boolean): void;
                        public isSingleSelection(): boolean;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public onInitializeAccessibilityNodeInfo(info: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
                        public addOnButtonCheckedListener(listener: com.google.android.material.button.MaterialButtonToggleGroup.OnButtonCheckedListener): void;
                        public isSelectionRequired(): boolean;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public dispatchDraw(canvas: globalAndroid.graphics.Canvas): void;
                        public getChildDrawingOrder(childCount: number, i: number): number;
                        public constructor(context: globalAndroid.content.Context);
                    }
                    export module MaterialButtonToggleGroup {
                        export class CornerData {
                            public static class: java.lang.Class<com.google.android.material.button.MaterialButtonToggleGroup.CornerData>;
                            public static left(orig: com.google.android.material.button.MaterialButtonToggleGroup.CornerData): com.google.android.material.button.MaterialButtonToggleGroup.CornerData;
                            public static top(orig: com.google.android.material.button.MaterialButtonToggleGroup.CornerData): com.google.android.material.button.MaterialButtonToggleGroup.CornerData;
                            public static bottom(orig: com.google.android.material.button.MaterialButtonToggleGroup.CornerData): com.google.android.material.button.MaterialButtonToggleGroup.CornerData;
                            public static right(orig: com.google.android.material.button.MaterialButtonToggleGroup.CornerData): com.google.android.material.button.MaterialButtonToggleGroup.CornerData;
                            public static end(orig: com.google.android.material.button.MaterialButtonToggleGroup.CornerData, view: globalAndroid.view.View): com.google.android.material.button.MaterialButtonToggleGroup.CornerData;
                            public static start(orig: com.google.android.material.button.MaterialButtonToggleGroup.CornerData, view: globalAndroid.view.View): com.google.android.material.button.MaterialButtonToggleGroup.CornerData;
                        }
                        export class OnButtonCheckedListener {
                            public static class: java.lang.Class<com.google.android.material.button.MaterialButtonToggleGroup.OnButtonCheckedListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.button.MaterialButtonToggleGroup$OnButtonCheckedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onButtonChecked(param0: com.google.android.material.button.MaterialButtonToggleGroup, param1: number, param2: boolean): void;
                            });
                            public constructor();
                            public onButtonChecked(param0: com.google.android.material.button.MaterialButtonToggleGroup, param1: number, param2: boolean): void;
                        }
                        export class PressedStateTracker extends com.google.android.material.button.MaterialButton.OnPressedChangeListener {
                            public static class: java.lang.Class<com.google.android.material.button.MaterialButtonToggleGroup.PressedStateTracker>;
                            public onPressedChanged(param0: com.google.android.material.button.MaterialButton, param1: boolean): void;
                            public onPressedChanged(button: com.google.android.material.button.MaterialButton, isPressed: boolean): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module canvas {
                    export class CanvasCompat {
                        public static class: java.lang.Class<com.google.android.material.canvas.CanvasCompat>;
                        public static saveLayerAlpha(canvas: globalAndroid.graphics.Canvas, bounds: globalAndroid.graphics.RectF, alpha: number): number;
                        public static saveLayerAlpha(canvas: globalAndroid.graphics.Canvas, left: number, top: number, right: number, bottom: number, alpha: number): number;
                    }
                    export module CanvasCompat {
                        export class CanvasOperation {
                            public static class: java.lang.Class<com.google.android.material.canvas.CanvasCompat.CanvasOperation>;
                            /**
                             * Constructs a new instance of the com.google.android.material.canvas.CanvasCompat$CanvasOperation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                run(param0: globalAndroid.graphics.Canvas): void;
                            });
                            public constructor();
                            public run(param0: globalAndroid.graphics.Canvas): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module card {
                    export class MaterialCardView implements com.google.android.material.shape.Shapeable {
                        public static class: java.lang.Class<com.google.android.material.card.MaterialCardView>;
                        public static CHECKED_ICON_GRAVITY_TOP_START: number = 8388659;
                        public static CHECKED_ICON_GRAVITY_BOTTOM_START: number = 8388691;
                        public static CHECKED_ICON_GRAVITY_TOP_END: number = 8388661;
                        public static CHECKED_ICON_GRAVITY_BOTTOM_END: number = 8388693;
                        public setCheckedIconGravity(checkedIconGravity: number): void;
                        public setStrokeWidth(strokeWidth: number): void;
                        public getCheckedIconTint(): globalAndroid.content.res.ColorStateList;
                        public getRadius(): number;
                        public setBackground(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public getCheckedIcon(): globalAndroid.graphics.drawable.Drawable;
                        public setRadius(radius: number): void;
                        public isDragged(): boolean;
                        public onCreateDrawableState(extraSpace: number): androidNative.Array<number>;
                        public getContentPaddingTop(): number;
                        public setPreventCornerOverlap(preventCornerOverlap: boolean): void;
                        public setCardForegroundColor(foregroundColor: globalAndroid.content.res.ColorStateList): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public setStrokeColor(strokeColor: number): void;
                        public getProgress(): number;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public setCheckedIconSizeResource(checkedIconSizeResId: number): void;
                        public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
                        public setRippleColorResource(rippleColorResourceId: number): void;
                        public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public getCardBackgroundColor(): globalAndroid.content.res.ColorStateList;
                        public setCheckedIconMargin(checkedIconMargin: number): void;
                        public setContentPadding(left: number, top: number, right: number, bottom: number): void;
                        public getContentPaddingBottom(): number;
                        public getRippleColor(): globalAndroid.content.res.ColorStateList;
                        public setUseCompatPadding(useCompatPadding: boolean): void;
                        public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
                        public onInitializeAccessibilityNodeInfo(info: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
                        public toggle(): void;
                        public setCheckedIconResource(id: number): void;
                        public getContentPaddingLeft(): number;
                        public setMaxCardElevation(maxCardElevation: number): void;
                        public onAttachedToWindow(): void;
                        public setChecked(checked: boolean): void;
                        public setRippleColor(rippleColor: globalAndroid.content.res.ColorStateList): void;
                        public setStrokeColor(strokeColor: globalAndroid.content.res.ColorStateList): void;
                        public setCheckedIconMarginResource(checkedIconMarginResId: number): void;
                        public isCheckable(): boolean;
                        public setCardElevation(elevation: number): void;
                        public getStrokeWidth(): number;
                        public getCardForegroundColor(): globalAndroid.content.res.ColorStateList;
                        public isChecked(): boolean;
                        public onInitializeAccessibilityEvent(accessibilityEvent: globalAndroid.view.accessibility.AccessibilityEvent): void;
                        public setBackgroundDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public setCardBackgroundColor(color: number): void;
                        public setCheckable(checkable: boolean): void;
                        public getStrokeColorStateList(): globalAndroid.content.res.ColorStateList;
                        public setCardBackgroundColor(color: globalAndroid.content.res.ColorStateList): void;
                        public setCheckedIconSize(checkedIconSize: number): void;
                        public getContentPaddingRight(): number;
                        public setShapeAppearanceModel(shapeAppearanceModel: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public setOnCheckedChangeListener(listener: com.google.android.material.card.MaterialCardView.OnCheckedChangeListener): void;
                        public setDragged(dragged: boolean): void;
                        public setCheckedIconTint(checkedIconTint: globalAndroid.content.res.ColorStateList): void;
                        public setCheckedIcon(checkedIcon: globalAndroid.graphics.drawable.Drawable): void;
                        public setClickable(clickable: boolean): void;
                        public getCheckedIconMargin(): number;
                        public getCheckedIconGravity(): number;
                        public setProgress(progress: number): void;
                        /** @deprecated */
                        public getStrokeColor(): number;
                        public constructor(context: globalAndroid.content.Context);
                        public getCheckedIconSize(): number;
                    }
                    export module MaterialCardView {
                        export class CheckedIconGravity {
                            public static class: java.lang.Class<com.google.android.material.card.MaterialCardView.CheckedIconGravity>;
                            /**
                             * Constructs a new instance of the com.google.android.material.card.MaterialCardView$CheckedIconGravity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class OnCheckedChangeListener {
                            public static class: java.lang.Class<com.google.android.material.card.MaterialCardView.OnCheckedChangeListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.card.MaterialCardView$OnCheckedChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onCheckedChanged(param0: com.google.android.material.card.MaterialCardView, param1: boolean): void;
                            });
                            public constructor();
                            public onCheckedChanged(param0: com.google.android.material.card.MaterialCardView, param1: boolean): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module card {
                    export class MaterialCardViewHelper {
                        public static class: java.lang.Class<com.google.android.material.card.MaterialCardViewHelper>;
                        public static DEFAULT_FADE_ANIM_DURATION: number = 300;
                        public setChecked(checked: boolean, animate: boolean): void;
                        public animateCheckedIcon(checked: boolean): void;
                        public setChecked(checked: boolean): void;
                        public constructor(card: com.google.android.material.card.MaterialCardView, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module carousel {
                    export class Carousel {
                        public static class: java.lang.Class<com.google.android.material.carousel.Carousel>;
                        /**
                         * Constructs a new instance of the com.google.android.material.carousel.Carousel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            getContainerWidth(): number;
                        });
                        public constructor();
                        public getContainerWidth(): number;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module carousel {
                    export class CarouselLayoutManager implements com.google.android.material.carousel.Carousel {
                        public static class: java.lang.Class<com.google.android.material.carousel.CarouselLayoutManager>;
                        public onLayoutCompleted(state: androidx.recyclerview.widget.RecyclerView.State): void;
                        public constructor();
                        public generateDefaultLayoutParams(): androidx.recyclerview.widget.RecyclerView.LayoutParams;
                        public onLayoutChildren(keylineState: androidx.recyclerview.widget.RecyclerView.Recycler, this_: androidx.recyclerview.widget.RecyclerView.State): void;
                        public onInitializeAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
                        public requestChildRectangleOnScreen(parent: androidx.recyclerview.widget.RecyclerView, child: globalAndroid.view.View, rect: globalAndroid.graphics.Rect, immediate: boolean, focusedChildVisible: boolean): boolean;
                        public computeHorizontalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
                        public scrollToPosition(position: number): void;
                        public canScrollHorizontally(): boolean;
                        public scrollHorizontallyBy(dx: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
                        public measureChildWithMargins(child: globalAndroid.view.View, widthUsed: number, heightUsed: number): void;
                        public computeHorizontalScrollExtent(state: androidx.recyclerview.widget.RecyclerView.State): number;
                        public getContainerWidth(): number;
                        public computeHorizontalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
                        public setDebuggingEnabled(recyclerView: androidx.recyclerview.widget.RecyclerView, enabled: boolean): void;
                        public setCarouselStrategy(carouselStrategy: com.google.android.material.carousel.CarouselStrategy): void;
                        public getDecoratedBoundsWithMargins(view: globalAndroid.view.View, outBounds: globalAndroid.graphics.Rect): void;
                        public smoothScrollToPosition(recyclerView: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State, position: number): void;
                    }
                    export module CarouselLayoutManager {
                        export class ChildCalculations {
                            public static class: java.lang.Class<com.google.android.material.carousel.CarouselLayoutManager.ChildCalculations>;
                        }
                        export class DebugItemDecoration {
                            public static class: java.lang.Class<com.google.android.material.carousel.CarouselLayoutManager.DebugItemDecoration>;
                            public onDrawOver(this_: globalAndroid.graphics.Canvas, c: androidx.recyclerview.widget.RecyclerView, parent: androidx.recyclerview.widget.RecyclerView.State): void;
                        }
                        export class KeylineRange {
                            public static class: java.lang.Class<com.google.android.material.carousel.CarouselLayoutManager.KeylineRange>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module carousel {
                    export abstract class CarouselStrategy {
                        public static class: java.lang.Class<com.google.android.material.carousel.CarouselStrategy>;
                        public constructor();
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module carousel {
                    export class KeylineState {
                        public static class: java.lang.Class<com.google.android.material.carousel.KeylineState>;
                    }
                    export module KeylineState {
                        export class Builder {
                            public static class: java.lang.Class<com.google.android.material.carousel.KeylineState.Builder>;
                        }
                        export class Keyline {
                            public static class: java.lang.Class<com.google.android.material.carousel.KeylineState.Keyline>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module carousel {
                    export class KeylineStateList {
                        public static class: java.lang.Class<com.google.android.material.carousel.KeylineStateList>;
                        public getShiftedState(interpolation: number, this_: number, scrollOffset: number): com.google.android.material.carousel.KeylineState;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module carousel {
                    export class Maskable {
                        public static class: java.lang.Class<com.google.android.material.carousel.Maskable>;
                        /**
                         * Constructs a new instance of the com.google.android.material.carousel.Maskable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            setMaskXPercentage(param0: number): void;
                            getMaskXPercentage(): number;
                            getMaskRectF(): globalAndroid.graphics.RectF;
                            setOnMaskChangedListener(param0: com.google.android.material.carousel.OnMaskChangedListener): void;
                        });
                        public constructor();
                        public getMaskXPercentage(): number;
                        public setMaskXPercentage(param0: number): void;
                        public setOnMaskChangedListener(param0: com.google.android.material.carousel.OnMaskChangedListener): void;
                        public getMaskRectF(): globalAndroid.graphics.RectF;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module carousel {
                    export class MaskableFrameLayout implements com.google.android.material.carousel.Maskable, com.google.android.material.shape.Shapeable {
                        public static class: java.lang.Class<com.google.android.material.carousel.MaskableFrameLayout>;
                        public setOnMaskChangedListener(onMaskChangedListener: com.google.android.material.carousel.OnMaskChangedListener): void;
                        public onAttachedToWindow(): void;
                        public setShapeAppearanceModel(shapeAppearanceModel: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public onDetachedFromWindow(): void;
                        public setForceCompatClipping(forceCompatClipping: boolean): void;
                        public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public setMaskXPercentage(param0: number): void;
                        public setOnMaskChangedListener(param0: com.google.android.material.carousel.OnMaskChangedListener): void;
                        public getMaskRectF(): globalAndroid.graphics.RectF;
                        public getMaskXPercentage(): number;
                        public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
                        public setMaskXPercentage(percentage: number): void;
                        public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public dispatchDraw(canvas: globalAndroid.graphics.Canvas): void;
                        public constructor(context: globalAndroid.content.Context);
                        public onTouchEvent(y: globalAndroid.view.MotionEvent): boolean;
                    }
                    export module MaskableFrameLayout {
                        export abstract class MaskableDelegate {
                            public static class: java.lang.Class<com.google.android.material.carousel.MaskableFrameLayout.MaskableDelegate>;
                        }
                        export class MaskableDelegateV14 extends com.google.android.material.carousel.MaskableFrameLayout.MaskableDelegate {
                            public static class: java.lang.Class<com.google.android.material.carousel.MaskableFrameLayout.MaskableDelegateV14>;
                        }
                        export class MaskableDelegateV22 extends com.google.android.material.carousel.MaskableFrameLayout.MaskableDelegate {
                            public static class: java.lang.Class<com.google.android.material.carousel.MaskableFrameLayout.MaskableDelegateV22>;
                            public shouldUseCompatClipping(): boolean;
                        }
                        export class MaskableDelegateV33 extends com.google.android.material.carousel.MaskableFrameLayout.MaskableDelegate {
                            public static class: java.lang.Class<com.google.android.material.carousel.MaskableFrameLayout.MaskableDelegateV33>;
                            public shouldUseCompatClipping(): boolean;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module carousel {
                    export class MultiBrowseCarouselStrategy extends com.google.android.material.carousel.CarouselStrategy {
                        public static class: java.lang.Class<com.google.android.material.carousel.MultiBrowseCarouselStrategy>;
                        public constructor();
                        public constructor(forceCompactArrangement: boolean);
                    }
                    export module MultiBrowseCarouselStrategy {
                        export class Arrangement {
                            public static class: java.lang.Class<com.google.android.material.carousel.MultiBrowseCarouselStrategy.Arrangement>;
                            public toString(): string;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module carousel {
                    export class OnMaskChangedListener {
                        public static class: java.lang.Class<com.google.android.material.carousel.OnMaskChangedListener>;
                        /**
                         * Constructs a new instance of the com.google.android.material.carousel.OnMaskChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            onMaskChanged(param0: globalAndroid.graphics.RectF): void;
                        });
                        public constructor();
                        public onMaskChanged(param0: globalAndroid.graphics.RectF): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module checkbox {
                    export class MaterialCheckBox {
                        public static class: java.lang.Class<com.google.android.material.checkbox.MaterialCheckBox>;
                        public static STATE_UNCHECKED: number = 0;
                        public static STATE_CHECKED: number = 1;
                        public static STATE_INDETERMINATE: number = 2;
                        public setButtonIconTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
                        public setUseMaterialThemeColors(useMaterialThemeColors: boolean): void;
                        public setStateDescription(stateDescription: string): void;
                        public onAttachedToWindow(): void;
                        public setChecked(checked: boolean): void;
                        public setButtonIconTintList(tintList: globalAndroid.content.res.ColorStateList): void;
                        public getButtonDrawable(): globalAndroid.graphics.drawable.Drawable;
                        public clearOnErrorChangedListeners(): void;
                        public getErrorAccessibilityLabel(): string;
                        public getButtonIconTintList(): globalAndroid.content.res.ColorStateList;
                        public onCreateDrawableState(extraSpace: number): androidNative.Array<number>;
                        public setButtonDrawable(resId: number): void;
                        public addOnCheckedStateChangedListener(listener: com.google.android.material.checkbox.MaterialCheckBox.OnCheckedStateChangedListener): void;
                        public isChecked(): boolean;
                        public setButtonTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
                        public getButtonTintList(): globalAndroid.content.res.ColorStateList;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public setOnCheckedChangeListener(listener: globalAndroid.widget.CompoundButton.OnCheckedChangeListener): void;
                        public isErrorShown(): boolean;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public onDraw(direction: globalAndroid.graphics.Canvas): void;
                        public isUseMaterialThemeColors(): boolean;
                        public removeOnCheckedStateChangedListener(listener: com.google.android.material.checkbox.MaterialCheckBox.OnCheckedStateChangedListener): void;
                        public setErrorAccessibilityLabelResource(resId: number): void;
                        public setButtonDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public removeOnErrorChangedListener(listener: com.google.android.material.checkbox.MaterialCheckBox.OnErrorChangedListener): void;
                        public setCenterIfNoTextEnabled(centerIfNoTextEnabled: boolean): void;
                        public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
                        public setButtonIconDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public setCheckedState(autofillManager: number): void;
                        public clearOnCheckedStateChangedListeners(): void;
                        public getButtonIconDrawable(): globalAndroid.graphics.drawable.Drawable;
                        public isCenterIfNoTextEnabled(): boolean;
                        public setEnabled(enabled: boolean): void;
                        public setButtonIconDrawableResource(resId: number): void;
                        public toggle(): void;
                        public onInitializeAccessibilityNodeInfo(info: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
                        public setErrorAccessibilityLabel(errorAccessibilityLabel: string): void;
                        public onSaveInstanceState(): globalAndroid.os.Parcelable;
                        public setErrorShown(this_: boolean): void;
                        public addOnErrorChangedListener(listener: com.google.android.material.checkbox.MaterialCheckBox.OnErrorChangedListener): void;
                        public constructor(context: globalAndroid.content.Context);
                        public getCheckedState(): number;
                        public setButtonTintList(tintList: globalAndroid.content.res.ColorStateList): void;
                        public getButtonIconTintMode(): globalAndroid.graphics.PorterDuff.Mode;
                    }
                    export module MaterialCheckBox {
                        export class CheckedState {
                            public static class: java.lang.Class<com.google.android.material.checkbox.MaterialCheckBox.CheckedState>;
                            /**
                             * Constructs a new instance of the com.google.android.material.checkbox.MaterialCheckBox$CheckedState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class OnCheckedStateChangedListener {
                            public static class: java.lang.Class<com.google.android.material.checkbox.MaterialCheckBox.OnCheckedStateChangedListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.checkbox.MaterialCheckBox$OnCheckedStateChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onCheckedStateChangedListener(param0: com.google.android.material.checkbox.MaterialCheckBox, param1: number): void;
                            });
                            public constructor();
                            public onCheckedStateChangedListener(param0: com.google.android.material.checkbox.MaterialCheckBox, param1: number): void;
                        }
                        export class OnErrorChangedListener {
                            public static class: java.lang.Class<com.google.android.material.checkbox.MaterialCheckBox.OnErrorChangedListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.checkbox.MaterialCheckBox$OnErrorChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onErrorChanged(param0: com.google.android.material.checkbox.MaterialCheckBox, param1: boolean): void;
                            });
                            public constructor();
                            public onErrorChanged(param0: com.google.android.material.checkbox.MaterialCheckBox, param1: boolean): void;
                        }
                        export class SavedState {
                            public static class: java.lang.Class<com.google.android.material.checkbox.MaterialCheckBox.SavedState>;
                            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.checkbox.MaterialCheckBox.SavedState>;
                            public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
                            public toString(): string;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module chip {
                    export class Chip extends androidx.appcompat.widget.AppCompatCheckBox {
                        public static class: java.lang.Class<com.google.android.material.chip.Chip>;
                        /** @deprecated */
                        public isCheckedIconEnabled(): boolean;
                        public setInternalOnCheckedChangeListener(param0: com.google.android.material.internal.MaterialCheckable.OnCheckedChangeListener<any>): void;
                        public setTextAppearanceResource(id: number): void;
                        public getCheckedIconTint(): globalAndroid.content.res.ColorStateList;
                        /** @deprecated */
                        public setChipCornerRadius(chipCornerRadius: number): void;
                        public setShowMotionSpec(showMotionSpec: com.google.android.material.animation.MotionSpec): void;
                        public setAccessibilityClassName(className: string): void;
                        public onCreateDrawableState(extraSpace: number): androidNative.Array<number>;
                        public setHideMotionSpec(hideMotionSpec: com.google.android.material.animation.MotionSpec): void;
                        public getChipIcon(): globalAndroid.graphics.drawable.Drawable;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public setBackgroundColor(color: number): void;
                        public setBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
                        public getCloseIconStartPadding(): number;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public setTextStartPadding(textStartPadding: number): void;
                        public setCheckedIconTintResource(id: number): void;
                        public setGravity(gravity: number): void;
                        public setBackgroundDrawable(background: globalAndroid.graphics.drawable.Drawable): void;
                        /** @deprecated */
                        public setChipTextResource(id: number): void;
                        public setChipIconTintResource(id: number): void;
                        public setChipIconTint(chipIconTint: globalAndroid.content.res.ColorStateList): void;
                        public setCompoundDrawablesWithIntrinsicBounds(left: globalAndroid.graphics.drawable.Drawable, top: globalAndroid.graphics.drawable.Drawable, right: globalAndroid.graphics.drawable.Drawable, bottom: globalAndroid.graphics.drawable.Drawable): void;
                        public onChipDrawableSizeChange(): void;
                        public getTextEndPadding(): number;
                        public setChipIconVisible(id: number): void;
                        public getChipBackgroundColor(): globalAndroid.content.res.ColorStateList;
                        public getShowMotionSpec(): com.google.android.material.animation.MotionSpec;
                        public setChipIcon(chipIcon: globalAndroid.graphics.drawable.Drawable): void;
                        public setIconStartPadding(iconStartPadding: number): void;
                        public setCompoundDrawablesWithIntrinsicBounds(left: number, top: number, right: number, bottom: number): void;
                        public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
                        /** @deprecated */
                        public setChipText(chipText: string): void;
                        public setCloseIconSizeResource(id: number): void;
                        public shouldEnsureMinTouchTargetSize(): boolean;
                        public setChipMinHeightResource(id: number): void;
                        public onInitializeAccessibilityNodeInfo(infoCompat: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
                        public performCloseIconClick(): boolean;
                        public setTextEndPaddingResource(id: number): void;
                        public getCloseIcon(): globalAndroid.graphics.drawable.Drawable;
                        public setCheckableResource(id: number): void;
                        public onAttachedToWindow(): void;
                        public setChecked(checked: boolean): void;
                        public ensureAccessibleTouchTarget(this_: number): boolean;
                        public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
                        public setMaxWidth(maxWidth: number): void;
                        public setCloseIconVisible(closeIconVisible: boolean): void;
                        /** @deprecated */
                        public setCheckedIconEnabled(checkedIconEnabled: boolean): void;
                        public setTextEndPadding(textEndPadding: number): void;
                        public setChipStrokeWidth(chipStrokeWidth: number): void;
                        /** @deprecated */
                        public setCloseIconEnabledResource(id: number): void;
                        public setTextAppearance(textAppearance: com.google.android.material.resources.TextAppearance): void;
                        public setChipStrokeColor(chipStrokeColor: globalAndroid.content.res.ColorStateList): void;
                        public setMinLines(minLines: number): void;
                        public setTextAppearance(resId: number): void;
                        public setMaxLines(maxLines: number): void;
                        public setText(text: string, type: globalAndroid.widget.TextView.BufferType): void;
                        public setCheckable(checkable: boolean): void;
                        public getChipIconSize(): number;
                        public setChipEndPadding(chipEndPadding: number): void;
                        public getChipMinHeight(): number;
                        public setCheckedIconVisible(id: number): void;
                        public onRtlPropertiesChanged(layoutDirection: number): void;
                        public setChipStartPaddingResource(id: number): void;
                        public setCloseIconEndPaddingResource(id: number): void;
                        public setChipBackgroundColor(chipBackgroundColor: globalAndroid.content.res.ColorStateList): void;
                        public setCloseIconStartPadding(closeIconStartPadding: number): void;
                        public setBackground(background: globalAndroid.graphics.drawable.Drawable): void;
                        public getChipCornerRadius(): number;
                        public setInternalOnCheckedChangeListener(listener: com.google.android.material.internal.MaterialCheckable.OnCheckedChangeListener<com.google.android.material.chip.Chip>): void;
                        public setCompoundDrawablesRelativeWithIntrinsicBounds(start: number, top: number, end: number, bottom: number): void;
                        public getCloseIconEndPadding(): number;
                        public setTextStartPaddingResource(id: number): void;
                        public setChipIconVisible(chipIconVisible: boolean): void;
                        public setCloseIconTint(closeIconTint: globalAndroid.content.res.ColorStateList): void;
                        /** @deprecated */
                        public setChipIconEnabled(chipIconEnabled: boolean): void;
                        public isCloseIconVisible(): boolean;
                        public setShowMotionSpecResource(id: number): void;
                        public setIconEndPaddingResource(id: number): void;
                        public setCloseIconVisible(id: number): void;
                        public setSingleLine(singleLine: boolean): void;
                        public constructor(context: globalAndroid.content.Context);
                        public setCloseIconTintResource(id: number): void;
                        public setChipIconSize(chipIconSize: number): void;
                        public setHideMotionSpecResource(id: number): void;
                        public setBackgroundTintList(tint: globalAndroid.content.res.ColorStateList): void;
                        /** @deprecated */
                        public setCloseIconEnabled(closeIconEnabled: boolean): void;
                        public getCheckedIcon(): globalAndroid.graphics.drawable.Drawable;
                        public dispatchHoverEvent(event: globalAndroid.view.MotionEvent): boolean;
                        /** @deprecated */
                        public setCheckedIconEnabledResource(id: number): void;
                        public setChipStartPadding(chipStartPadding: number): void;
                        public getBackgroundDrawable(): globalAndroid.graphics.drawable.Drawable;
                        public setCloseIconResource(id: number): void;
                        public setCompoundDrawablesRelative(start: globalAndroid.graphics.drawable.Drawable, top: globalAndroid.graphics.drawable.Drawable, end: globalAndroid.graphics.drawable.Drawable, bottom: globalAndroid.graphics.drawable.Drawable): void;
                        public getCloseIconTint(): globalAndroid.content.res.ColorStateList;
                        public setIconEndPadding(iconEndPadding: number): void;
                        public setEnsureMinTouchTargetSize(flag: boolean): void;
                        public setCloseIcon(closeIcon: globalAndroid.graphics.drawable.Drawable): void;
                        public getChipIconTint(): globalAndroid.content.res.ColorStateList;
                        public isCheckedIconVisible(): boolean;
                        public getChipStrokeWidth(): number;
                        public getCloseIconContentDescription(): string;
                        public getAccessibilityClassName(): string;
                        public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public setChipDrawable(drawable: com.google.android.material.chip.ChipDrawable): void;
                        public getRippleColor(): globalAndroid.content.res.ColorStateList;
                        public setLayoutDirection(layoutDirection: number): void;
                        public getTextStartPadding(): number;
                        public setLines(lines: number): void;
                        public setCheckedIconResource(id: number): void;
                        public getChipEndPadding(): number;
                        public setBackgroundResource(resid: number): void;
                        public setChipIconResource(id: number): void;
                        public setTextSize(unit: number, size: number): void;
                        public setIconStartPaddingResource(id: number): void;
                        public getFocusedRect(r: globalAndroid.graphics.Rect): void;
                        public setChipIconSizeResource(id: number): void;
                        /** @deprecated */
                        public isCloseIconEnabled(): boolean;
                        public getCloseIconSize(): number;
                        public getEllipsize(): globalAndroid.text.TextUtils.TruncateAt;
                        public setRippleColor(rippleColor: globalAndroid.content.res.ColorStateList): void;
                        public setChipBackgroundColorResource(id: number): void;
                        public setChipStrokeColorResource(id: number): void;
                        public getChipStrokeColor(): globalAndroid.content.res.ColorStateList;
                        /** @deprecated */
                        public setChipIconEnabledResource(id: number): void;
                        public isCheckable(): boolean;
                        /** @deprecated */
                        public setChipCornerRadiusResource(id: number): void;
                        public drawableStateChanged(): void;
                        public setChipStrokeWidthResource(id: number): void;
                        public setChipMinHeight(minHeight: number): void;
                        public getHideMotionSpec(): com.google.android.material.animation.MotionSpec;
                        public getIconEndPadding(): number;
                        public setRippleColorResource(id: number): void;
                        public onFocusChanged(focused: boolean, direction: number, previouslyFocusedRect: globalAndroid.graphics.Rect): void;
                        public setCloseIconSize(closeIconSize: number): void;
                        public setOnCheckedChangeListener(listener: globalAndroid.widget.CompoundButton.OnCheckedChangeListener): void;
                        public setCloseIconStartPaddingResource(id: number): void;
                        public getChipStartPadding(): number;
                        /** @deprecated */
                        public isChipIconEnabled(): boolean;
                        public setEllipsize(where: globalAndroid.text.TextUtils.TruncateAt): void;
                        public setCloseIconContentDescription(closeIconContentDescription: string): void;
                        public setChipEndPaddingResource(id: number): void;
                        public setShapeAppearanceModel(shapeAppearanceModel: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public setElevation(elevation: number): void;
                        public setCloseIconEndPadding(closeIconEndPadding: number): void;
                        public setCheckedIconTint(checkedIconTint: globalAndroid.content.res.ColorStateList): void;
                        public onResolvePointerIcon(event: globalAndroid.view.MotionEvent, pointerIndex: number): any;
                        public setOnCloseIconClickListener(listener: globalAndroid.view.View.OnClickListener): void;
                        public setCheckedIcon(checkedIcon: globalAndroid.graphics.drawable.Drawable): void;
                        public setCheckedIconVisible(checkedIconVisible: boolean): void;
                        public getId(): number;
                        public setTextAppearance(context: globalAndroid.content.Context, resId: number): void;
                        public getIconStartPadding(): number;
                        public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
                        public setCompoundDrawables(left: globalAndroid.graphics.drawable.Drawable, top: globalAndroid.graphics.drawable.Drawable, right: globalAndroid.graphics.drawable.Drawable, bottom: globalAndroid.graphics.drawable.Drawable): void;
                        public setCompoundDrawablesRelativeWithIntrinsicBounds(start: globalAndroid.graphics.drawable.Drawable, top: globalAndroid.graphics.drawable.Drawable, end: globalAndroid.graphics.drawable.Drawable, bottom: globalAndroid.graphics.drawable.Drawable): void;
                        public onHoverEvent(event: globalAndroid.view.MotionEvent): boolean;
                        public getChipDrawable(): globalAndroid.graphics.drawable.Drawable;
                        /** @deprecated */
                        public getChipText(): string;
                        public isChipIconVisible(): boolean;
                    }
                    export module Chip {
                        export class ChipTouchHelper {
                            public static class: java.lang.Class<com.google.android.material.chip.Chip.ChipTouchHelper>;
                            public onPerformActionForVirtualView(virtualViewId: number, action: number, arguments_: globalAndroid.os.Bundle): boolean;
                            public onPopulateNodeForHost(node: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
                            public onPopulateNodeForVirtualView(closeIconContentDescription: number, this_: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
                            public onVirtualViewKeyboardFocusChanged(virtualViewId: number, hasFocus: boolean): void;
                            public getVirtualViewAt(x: number, y: number): number;
                            public getVisibleVirtualViews(virtualViewIds: java.util.List<java.lang.Integer>): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module chip {
                    export class ChipDrawable extends com.google.android.material.shape.MaterialShapeDrawable implements com.google.android.material.internal.TextDrawableHelper.TextDrawableDelegate {
                        public static class: java.lang.Class<com.google.android.material.chip.ChipDrawable>;
                        public onSizeChange(): void;
                        public setVisible(visible: boolean, restart: boolean): boolean;
                        /** @deprecated */
                        public isCheckedIconEnabled(): boolean;
                        public setTextAppearanceResource(id: number): void;
                        public getCheckedIconTint(): globalAndroid.content.res.ColorStateList;
                        public onLayoutDirectionChanged(layoutDirection: number): boolean;
                        /** @deprecated */
                        public setChipCornerRadius(chipCornerRadius: number): void;
                        public setShowMotionSpec(showMotionSpec: com.google.android.material.animation.MotionSpec): void;
                        public setHideMotionSpec(hideMotionSpec: com.google.android.material.animation.MotionSpec): void;
                        public getChipIcon(): globalAndroid.graphics.drawable.Drawable;
                        public getMaxWidth(): number;
                        public setCloseIconVisible(newShowsCloseIcon: boolean): void;
                        public getCloseIconStartPadding(): number;
                        public setTextStartPadding(textStartPadding: number): void;
                        public setTintList(tint: globalAndroid.content.res.ColorStateList): void;
                        public setCheckedIconTintResource(id: number): void;
                        public setEllipsize(truncateAt: globalAndroid.text.TextUtils.TruncateAt): void;
                        public setChipIconTintResource(id: number): void;
                        public setChipIconTint(chipIconTint: globalAndroid.content.res.ColorStateList): void;
                        public getTextEndPadding(): number;
                        public setChipIconVisible(id: number): void;
                        public onStateChange(param0: androidNative.Array<number>): boolean;
                        public setDelegate(delegate: com.google.android.material.chip.ChipDrawable.Delegate): void;
                        public onTextSizeChange(): void;
                        public getChipBackgroundColor(): globalAndroid.content.res.ColorStateList;
                        public getShowMotionSpec(): com.google.android.material.animation.MotionSpec;
                        public getCloseIconTouchBounds(bounds: globalAndroid.graphics.RectF): void;
                        public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
                        public setCloseIconSizeResource(id: number): void;
                        public setChipIconSize(newChipIconWidth: number): void;
                        public setChipMinHeightResource(id: number): void;
                        public setTextEndPaddingResource(id: number): void;
                        public getCloseIcon(): globalAndroid.graphics.drawable.Drawable;
                        public setCheckableResource(id: number): void;
                        public setCheckable(newChipIconWidth: boolean): void;
                        public getOutline(outline: any): void;
                        public getText(): string;
                        public getUseCompatRipple(): boolean;
                        public invalidateDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
                        public setMaxWidth(maxWidth: number): void;
                        /** @deprecated */
                        public setCheckedIconEnabled(checkedIconEnabled: boolean): void;
                        public setTextEndPadding(textEndPadding: number): void;
                        public setChipStrokeWidth(chipStrokeWidth: number): void;
                        /** @deprecated */
                        public setCloseIconEnabledResource(id: number): void;
                        public setTextAppearance(textAppearance: com.google.android.material.resources.TextAppearance): void;
                        public setUseCompatRipple(useCompatRipple: boolean): void;
                        public getCloseIconState(): androidNative.Array<number>;
                        public setIconStartPadding(newChipIconWidth: number): void;
                        public static createFromResource(context: globalAndroid.content.Context, id: number): com.google.android.material.chip.ChipDrawable;
                        public setChipStrokeColor(chipStrokeColor: globalAndroid.content.res.ColorStateList): void;
                        public getChipIconSize(): number;
                        public setChipEndPadding(chipEndPadding: number): void;
                        public getChipMinHeight(): number;
                        public setTextColor(color: globalAndroid.content.res.ColorStateList): void;
                        public setCheckedIconVisible(id: number): void;
                        public static createFromAttributes(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number): com.google.android.material.chip.ChipDrawable;
                        public onLevelChange(level: number): boolean;
                        public setCloseIcon(newCloseIconWidth: globalAndroid.graphics.drawable.Drawable): void;
                        public setChipStartPaddingResource(id: number): void;
                        public setCloseIconEndPaddingResource(id: number): void;
                        public getIntrinsicWidth(): number;
                        public setChipBackgroundColor(chipBackgroundColor: globalAndroid.content.res.ColorStateList): void;
                        public setCloseIconStartPadding(closeIconStartPadding: number): void;
                        public getChipCornerRadius(): number;
                        public getOpacity(): number;
                        public getCloseIconEndPadding(): number;
                        public setTextStartPaddingResource(id: number): void;
                        public setCloseIconTint(closeIconTint: globalAndroid.content.res.ColorStateList): void;
                        /** @deprecated */
                        public setChipIconEnabled(chipIconEnabled: boolean): void;
                        public isCloseIconVisible(): boolean;
                        public setShowMotionSpecResource(id: number): void;
                        public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
                        public setIconEndPaddingResource(id: number): void;
                        public setCloseIconVisible(id: number): void;
                        public setTextSize(size: number): void;
                        public setCloseIconTintResource(id: number): void;
                        public setHideMotionSpecResource(id: number): void;
                        public getChipTouchBounds(bounds: globalAndroid.graphics.RectF): void;
                        /** @deprecated */
                        public setCloseIconEnabled(closeIconEnabled: boolean): void;
                        public getCheckedIcon(): globalAndroid.graphics.drawable.Drawable;
                        public setColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): void;
                        /** @deprecated */
                        public setCheckedIconEnabledResource(id: number): void;
                        public isStateful(): boolean;
                        public setChipStartPadding(chipStartPadding: number): void;
                        public setCloseIconResource(id: number): void;
                        public setChipIcon(newChipIconWidth: globalAndroid.graphics.drawable.Drawable): void;
                        public getCloseIconTint(): globalAndroid.content.res.ColorStateList;
                        public setChipIconVisible(newShowsChipIcon: boolean): void;
                        public getChipIconTint(): globalAndroid.content.res.ColorStateList;
                        public setCheckedIcon(newChipIconWidth: globalAndroid.graphics.drawable.Drawable): void;
                        public getColorFilter(): globalAndroid.graphics.ColorFilter;
                        public isCheckedIconVisible(): boolean;
                        public getChipStrokeWidth(): number;
                        public getCloseIconContentDescription(): string;
                        public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public getRippleColor(): globalAndroid.content.res.ColorStateList;
                        public setTextColor(color: number): void;
                        public getTextStartPadding(): number;
                        public setCheckedIconResource(id: number): void;
                        public getChipEndPadding(): number;
                        public setChipIconResource(id: number): void;
                        public setIconStartPaddingResource(id: number): void;
                        public getTextAppearance(): com.google.android.material.resources.TextAppearance;
                        public setChipIconSizeResource(id: number): void;
                        public setCheckedIconVisible(newShowsCheckedIcon: boolean): void;
                        public draw(canvas: globalAndroid.graphics.Canvas): void;
                        /** @deprecated */
                        public isCloseIconEnabled(): boolean;
                        public getCloseIconSize(): number;
                        public setRippleColor(rippleColor: globalAndroid.content.res.ColorStateList): void;
                        public getEllipsize(): globalAndroid.text.TextUtils.TruncateAt;
                        public getAlpha(): number;
                        public setChipBackgroundColorResource(id: number): void;
                        public setChipStrokeColorResource(id: number): void;
                        public getChipStrokeColor(): globalAndroid.content.res.ColorStateList;
                        /** @deprecated */
                        public setChipIconEnabledResource(id: number): void;
                        public isCheckable(): boolean;
                        /** @deprecated */
                        public setChipCornerRadiusResource(id: number): void;
                        public isCloseIconStateful(): boolean;
                        public setChipStrokeWidthResource(id: number): void;
                        public getHideMotionSpec(): com.google.android.material.animation.MotionSpec;
                        public getIconEndPadding(): number;
                        public getState(): androidNative.Array<number>;
                        public setRippleColorResource(id: number): void;
                        public onStateChange(state: androidNative.Array<number>): boolean;
                        public setAlpha(alpha: number): void;
                        public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
                        public setCloseIconSize(closeIconSize: number): void;
                        public setCloseIconStartPaddingResource(id: number): void;
                        public getChipStartPadding(): number;
                        public setIconEndPadding(newChipIconWidth: number): void;
                        /** @deprecated */
                        public isChipIconEnabled(): boolean;
                        public getIntrinsicHeight(): number;
                        public setTextResource(id: number): void;
                        public setChipMinHeight(chipMinHeight: number): void;
                        public setCloseIconContentDescription(closeIconContentDescription: string): void;
                        public setChipEndPaddingResource(id: number): void;
                        public setCloseIconEndPadding(closeIconEndPadding: number): void;
                        public setCloseIconState(stateSet: androidNative.Array<number>): boolean;
                        public setCheckedIconTint(checkedIconTint: globalAndroid.content.res.ColorStateList): void;
                        public setTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
                        public setText(text: string): void;
                        public getIconStartPadding(): number;
                        public isChipIconVisible(): boolean;
                    }
                    export module ChipDrawable {
                        export class Delegate {
                            public static class: java.lang.Class<com.google.android.material.chip.ChipDrawable.Delegate>;
                            /**
                             * Constructs a new instance of the com.google.android.material.chip.ChipDrawable$Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onChipDrawableSizeChange(): void;
                            });
                            public constructor();
                            public onChipDrawableSizeChange(): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module chip {
                    export class ChipGroup extends com.google.android.material.internal.FlowLayout {
                        public static class: java.lang.Class<com.google.android.material.chip.ChipGroup>;
                        /** @deprecated */
                        public setFlexWrap(flexWrap: number): void;
                        public setChipSpacingVerticalResource(id: number): void;
                        public setChipSpacingVertical(chipSpacingVertical: number): void;
                        public setSingleSelection(id: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
                        public getChipSpacingVertical(): number;
                        public onFinishInflate(): void;
                        public isSingleLine(): boolean;
                        public generateLayoutParams(lp: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
                        public setSelectionRequired(selectionRequired: boolean): void;
                        public setSingleSelection(singleSelection: boolean): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public checkLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): boolean;
                        /** @deprecated */
                        public setDividerDrawableHorizontal(divider: globalAndroid.graphics.drawable.Drawable): void;
                        /** @deprecated */
                        public setShowDividerVertical(dividerMode: number): void;
                        public setChipSpacingHorizontalResource(id: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public setOnHierarchyChangeListener(listener: globalAndroid.view.ViewGroup.OnHierarchyChangeListener): void;
                        public setOnCheckedStateChangeListener(listener: com.google.android.material.chip.ChipGroup.OnCheckedStateChangeListener): void;
                        public setChipSpacingHorizontal(chipSpacingHorizontal: number): void;
                        public getCheckedChipId(): number;
                        public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
                        public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
                        public getChipSpacingHorizontal(): number;
                        public check(id: number): void;
                        public clearCheck(): void;
                        /** @deprecated */
                        public setOnCheckedChangeListener(listener: com.google.android.material.chip.ChipGroup.OnCheckedChangeListener): void;
                        public setChipSpacingResource(id: number): void;
                        public setSingleLine(id: number): void;
                        public setChipSpacing(chipSpacing: number): void;
                        public isSingleSelection(): boolean;
                        /** @deprecated */
                        public setShowDividerHorizontal(dividerMode: number): void;
                        public onInitializeAccessibilityNodeInfo(info: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
                        public isSelectionRequired(): boolean;
                        /** @deprecated */
                        public setDividerDrawableVertical(divider: globalAndroid.graphics.drawable.Drawable): void;
                        public getCheckedChipIds(): java.util.List<java.lang.Integer>;
                        public setSingleLine(singleLine: boolean): void;
                        public constructor(context: globalAndroid.content.Context);
                    }
                    export module ChipGroup {
                        export class LayoutParams {
                            public static class: java.lang.Class<com.google.android.material.chip.ChipGroup.LayoutParams>;
                            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                            public constructor(source: globalAndroid.view.ViewGroup.LayoutParams);
                            public constructor(source: globalAndroid.view.ViewGroup.MarginLayoutParams);
                            public constructor(width: number, height: number);
                        }
                        export class OnCheckedChangeListener {
                            public static class: java.lang.Class<com.google.android.material.chip.ChipGroup.OnCheckedChangeListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.chip.ChipGroup$OnCheckedChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onCheckedChanged(param0: com.google.android.material.chip.ChipGroup, param1: number): void;
                            });
                            public constructor();
                            public onCheckedChanged(param0: com.google.android.material.chip.ChipGroup, param1: number): void;
                        }
                        export class OnCheckedStateChangeListener {
                            public static class: java.lang.Class<com.google.android.material.chip.ChipGroup.OnCheckedStateChangeListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.chip.ChipGroup$OnCheckedStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onCheckedChanged(param0: com.google.android.material.chip.ChipGroup, param1: java.util.List<java.lang.Integer>): void;
                            });
                            public constructor();
                            public onCheckedChanged(param0: com.google.android.material.chip.ChipGroup, param1: java.util.List<java.lang.Integer>): void;
                        }
                        export class PassThroughHierarchyChangeListener {
                            public static class: java.lang.Class<com.google.android.material.chip.ChipGroup.PassThroughHierarchyChangeListener>;
                            public onChildViewRemoved(parent: globalAndroid.view.View, child: globalAndroid.view.View): void;
                            public onChildViewAdded(this_: globalAndroid.view.View, parent: globalAndroid.view.View): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module circularreveal {
                    export class CircularRevealCompat {
                        public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealCompat>;
                        public static createCircularRevealListener(view: com.google.android.material.circularreveal.CircularRevealWidget): globalAndroid.animation.Animator.AnimatorListener;
                        public static createCircularReveal(revealInfo: com.google.android.material.circularreveal.CircularRevealWidget, startRadius: number, circularRevealAnimator: number, set: number): globalAndroid.animation.Animator;
                        public static createCircularReveal(circularRevealAnimator: com.google.android.material.circularreveal.CircularRevealWidget, set: number, view: number, centerX: number, centerY: number): globalAndroid.animation.Animator;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module circularreveal {
                    export class CircularRevealFrameLayout implements com.google.android.material.circularreveal.CircularRevealWidget {
                        public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealFrameLayout>;
                        public destroyCircularRevealCache(): void;
                        public setCircularRevealScrimColor(color: number): void;
                        public setCircularRevealOverlayDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public draw(canvas: globalAndroid.graphics.Canvas): void;
                        public setRevealInfo(revealInfo: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
                        public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
                        public actualIsOpaque(): boolean;
                        public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                        public actualDraw(param0: globalAndroid.graphics.Canvas): void;
                        public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
                        public draw(param0: globalAndroid.graphics.Canvas): void;
                        public setCircularRevealScrimColor(param0: number): void;
                        public getCircularRevealScrimColor(): number;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
                        public actualDraw(canvas: globalAndroid.graphics.Canvas): void;
                        public constructor(context: globalAndroid.content.Context);
                        public buildCircularRevealCache(): void;
                        public isOpaque(): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module circularreveal {
                    export class CircularRevealGridLayout implements com.google.android.material.circularreveal.CircularRevealWidget {
                        public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealGridLayout>;
                        public destroyCircularRevealCache(): void;
                        public setCircularRevealScrimColor(color: number): void;
                        public setCircularRevealOverlayDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public draw(canvas: globalAndroid.graphics.Canvas): void;
                        public setRevealInfo(revealInfo: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
                        public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
                        public actualIsOpaque(): boolean;
                        public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                        public actualDraw(param0: globalAndroid.graphics.Canvas): void;
                        public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
                        public draw(param0: globalAndroid.graphics.Canvas): void;
                        public setCircularRevealScrimColor(param0: number): void;
                        public getCircularRevealScrimColor(): number;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
                        public actualDraw(canvas: globalAndroid.graphics.Canvas): void;
                        public constructor(context: globalAndroid.content.Context);
                        public buildCircularRevealCache(): void;
                        public isOpaque(): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module circularreveal {
                    export class CircularRevealHelper {
                        public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealHelper>;
                        public static BITMAP_SHADER: number = 0;
                        public static CLIP_PATH: number = 1;
                        public static REVEAL_ANIMATOR: number = 2;
                        public static STRATEGY: number;
                        public destroyCircularRevealCache(): void;
                        public setCircularRevealScrimColor(color: number): void;
                        public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
                        public draw(this_: globalAndroid.graphics.Canvas): void;
                        public setCircularRevealOverlayDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public constructor(delegate: com.google.android.material.circularreveal.CircularRevealHelper.Delegate);
                        public setRevealInfo(revealInfo: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
                        public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
                        public getCircularRevealScrimColor(): number;
                        public buildCircularRevealCache(): void;
                        public isOpaque(): boolean;
                    }
                    export module CircularRevealHelper {
                        export class Delegate {
                            public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealHelper.Delegate>;
                            /**
                             * Constructs a new instance of the com.google.android.material.circularreveal.CircularRevealHelper$Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                actualDraw(param0: globalAndroid.graphics.Canvas): void;
                                actualIsOpaque(): boolean;
                            });
                            public constructor();
                            public actualDraw(param0: globalAndroid.graphics.Canvas): void;
                            public actualIsOpaque(): boolean;
                        }
                        export class Strategy {
                            public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealHelper.Strategy>;
                            /**
                             * Constructs a new instance of the com.google.android.material.circularreveal.CircularRevealHelper$Strategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module circularreveal {
                    export class CircularRevealLinearLayout implements com.google.android.material.circularreveal.CircularRevealWidget {
                        public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealLinearLayout>;
                        public destroyCircularRevealCache(): void;
                        public setCircularRevealScrimColor(color: number): void;
                        public setCircularRevealOverlayDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public draw(canvas: globalAndroid.graphics.Canvas): void;
                        public setRevealInfo(revealInfo: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
                        public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
                        public actualIsOpaque(): boolean;
                        public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                        public actualDraw(param0: globalAndroid.graphics.Canvas): void;
                        public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
                        public draw(param0: globalAndroid.graphics.Canvas): void;
                        public setCircularRevealScrimColor(param0: number): void;
                        public getCircularRevealScrimColor(): number;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
                        public actualDraw(canvas: globalAndroid.graphics.Canvas): void;
                        public constructor(context: globalAndroid.content.Context);
                        public buildCircularRevealCache(): void;
                        public isOpaque(): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module circularreveal {
                    export class CircularRevealRelativeLayout implements com.google.android.material.circularreveal.CircularRevealWidget {
                        public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealRelativeLayout>;
                        public destroyCircularRevealCache(): void;
                        public setCircularRevealScrimColor(color: number): void;
                        public setCircularRevealOverlayDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public draw(canvas: globalAndroid.graphics.Canvas): void;
                        public setRevealInfo(revealInfo: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
                        public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
                        public actualIsOpaque(): boolean;
                        public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                        public actualDraw(param0: globalAndroid.graphics.Canvas): void;
                        public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
                        public draw(param0: globalAndroid.graphics.Canvas): void;
                        public setCircularRevealScrimColor(param0: number): void;
                        public getCircularRevealScrimColor(): number;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
                        public actualDraw(canvas: globalAndroid.graphics.Canvas): void;
                        public constructor(context: globalAndroid.content.Context);
                        public buildCircularRevealCache(): void;
                        public isOpaque(): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module circularreveal {
                    export class CircularRevealWidget extends com.google.android.material.circularreveal.CircularRevealHelper.Delegate {
                        public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealWidget>;
                        /**
                         * Constructs a new instance of the com.google.android.material.circularreveal.CircularRevealWidget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            draw(param0: globalAndroid.graphics.Canvas): void;
                            isOpaque(): boolean;
                            buildCircularRevealCache(): void;
                            destroyCircularRevealCache(): void;
                            getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
                            setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
                            getCircularRevealScrimColor(): number;
                            setCircularRevealScrimColor(param0: number): void;
                            getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
                            setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                            actualDraw(param0: globalAndroid.graphics.Canvas): void;
                            actualIsOpaque(): boolean;
                        });
                        public constructor();
                        public destroyCircularRevealCache(): void;
                        public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                        public actualDraw(param0: globalAndroid.graphics.Canvas): void;
                        public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
                        public draw(param0: globalAndroid.graphics.Canvas): void;
                        public setCircularRevealScrimColor(param0: number): void;
                        public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
                        public actualIsOpaque(): boolean;
                        public getCircularRevealScrimColor(): number;
                        public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
                        public buildCircularRevealCache(): void;
                        public isOpaque(): boolean;
                    }
                    export module CircularRevealWidget {
                        export class CircularRevealEvaluator extends globalAndroid.animation.TypeEvaluator<com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo> {
                            public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealWidget.CircularRevealEvaluator>;
                            public static CIRCULAR_REVEAL: globalAndroid.animation.TypeEvaluator<com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo>;
                            public constructor();
                            public evaluate(fraction: number, startValue: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo, endValue: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
                        }
                        export class CircularRevealProperty extends globalAndroid.util.Property<com.google.android.material.circularreveal.CircularRevealWidget, com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo> {
                            public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealWidget.CircularRevealProperty>;
                            public static CIRCULAR_REVEAL: globalAndroid.util.Property<com.google.android.material.circularreveal.CircularRevealWidget, com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo>;
                            public set(object: com.google.android.material.circularreveal.CircularRevealWidget, value: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
                            public get(object: com.google.android.material.circularreveal.CircularRevealWidget): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
                        }
                        export class CircularRevealScrimColorProperty extends globalAndroid.util.Property<com.google.android.material.circularreveal.CircularRevealWidget, java.lang.Integer> {
                            public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealWidget.CircularRevealScrimColorProperty>;
                            public static CIRCULAR_REVEAL_SCRIM_COLOR: globalAndroid.util.Property<com.google.android.material.circularreveal.CircularRevealWidget, java.lang.Integer>;
                            public get(object: com.google.android.material.circularreveal.CircularRevealWidget): java.lang.Integer;
                            public set(object: com.google.android.material.circularreveal.CircularRevealWidget, value: java.lang.Integer): void;
                        }
                        export class RevealInfo {
                            public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo>;
                            public static INVALID_RADIUS: number = 3.4028235E38;
                            public centerX: number;
                            public centerY: number;
                            public radius: number;
                            public constructor(other: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo);
                            public set(other: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
                            public set(centerX: number, centerY: number, radius: number): void;
                            public constructor(centerX: number, centerY: number, radius: number);
                            public isInvalid(): boolean;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module circularreveal {
                    export module cardview {
                        export class CircularRevealCardView extends com.google.android.material.card.MaterialCardView implements com.google.android.material.circularreveal.CircularRevealWidget {
                            public static class: java.lang.Class<com.google.android.material.circularreveal.cardview.CircularRevealCardView>;
                            public setCircularRevealOverlayDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
                            public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                            public buildCircularRevealCache(): void;
                            public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
                            public setCircularRevealScrimColor(param0: number): void;
                            public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
                            public actualDraw(canvas: globalAndroid.graphics.Canvas): void;
                            public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
                            public setRevealInfo(revealInfo: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
                            public draw(param0: globalAndroid.graphics.Canvas): void;
                            public actualIsOpaque(): boolean;
                            public getCircularRevealScrimColor(): number;
                            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                            public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
                            public isOpaque(): boolean;
                            public destroyCircularRevealCache(): void;
                            public draw(canvas: globalAndroid.graphics.Canvas): void;
                            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                            public actualDraw(param0: globalAndroid.graphics.Canvas): void;
                            public constructor(context: globalAndroid.content.Context);
                            public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
                            public setCircularRevealScrimColor(color: number): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module circularreveal {
                    export module coordinatorlayout {
                        export class CircularRevealCoordinatorLayout implements com.google.android.material.circularreveal.CircularRevealWidget {
                            public static class: java.lang.Class<com.google.android.material.circularreveal.coordinatorlayout.CircularRevealCoordinatorLayout>;
                            public setCircularRevealOverlayDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
                            public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                            public buildCircularRevealCache(): void;
                            public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
                            public setCircularRevealScrimColor(param0: number): void;
                            public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
                            public actualDraw(canvas: globalAndroid.graphics.Canvas): void;
                            public setRevealInfo(revealInfo: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
                            public draw(param0: globalAndroid.graphics.Canvas): void;
                            public actualIsOpaque(): boolean;
                            public getCircularRevealScrimColor(): number;
                            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                            public isOpaque(): boolean;
                            public destroyCircularRevealCache(): void;
                            public draw(canvas: globalAndroid.graphics.Canvas): void;
                            public actualDraw(param0: globalAndroid.graphics.Canvas): void;
                            public constructor(context: globalAndroid.content.Context);
                            public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
                            public setCircularRevealScrimColor(color: number): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export class ColorResourcesLoaderCreator {
                        public static class: java.lang.Class<com.google.android.material.color.ColorResourcesLoaderCreator>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export class ColorResourcesOverride {
                        public static class: java.lang.Class<com.google.android.material.color.ColorResourcesOverride>;
                        /**
                         * Constructs a new instance of the com.google.android.material.color.ColorResourcesOverride interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            applyIfPossible(param0: globalAndroid.content.Context, param1: java.util.Map<java.lang.Integer, java.lang.Integer>): boolean;
                            wrapContextIfPossible(param0: globalAndroid.content.Context, param1: java.util.Map<java.lang.Integer, java.lang.Integer>): globalAndroid.content.Context;
                            getInstance(): com.google.android.material.color.ColorResourcesOverride;
                        });
                        public constructor();
                        public wrapContextIfPossible(param0: globalAndroid.content.Context, param1: java.util.Map<java.lang.Integer, java.lang.Integer>): globalAndroid.content.Context;
                        public static getInstance(): com.google.android.material.color.ColorResourcesOverride;
                        public applyIfPossible(param0: globalAndroid.content.Context, param1: java.util.Map<java.lang.Integer, java.lang.Integer>): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export class ColorResourcesTableCreator {
                        public static class: java.lang.Class<com.google.android.material.color.ColorResourcesTableCreator>;
                    }
                    export module ColorResourcesTableCreator {
                        export class ColorResource {
                            public static class: java.lang.Class<com.google.android.material.color.ColorResourcesTableCreator.ColorResource>;
                        }
                        export class PackageChunk {
                            public static class: java.lang.Class<com.google.android.material.color.ColorResourcesTableCreator.PackageChunk>;
                        }
                        export class PackageInfo {
                            public static class: java.lang.Class<com.google.android.material.color.ColorResourcesTableCreator.PackageInfo>;
                        }
                        export class ResChunkHeader {
                            public static class: java.lang.Class<com.google.android.material.color.ColorResourcesTableCreator.ResChunkHeader>;
                        }
                        export class ResEntry {
                            public static class: java.lang.Class<com.google.android.material.color.ColorResourcesTableCreator.ResEntry>;
                        }
                        export class ResTable {
                            public static class: java.lang.Class<com.google.android.material.color.ColorResourcesTableCreator.ResTable>;
                        }
                        export class StringPoolChunk {
                            public static class: java.lang.Class<com.google.android.material.color.ColorResourcesTableCreator.StringPoolChunk>;
                        }
                        export class StringStyledSpan {
                            public static class: java.lang.Class<com.google.android.material.color.ColorResourcesTableCreator.StringStyledSpan>;
                        }
                        export class TypeChunk {
                            public static class: java.lang.Class<com.google.android.material.color.ColorResourcesTableCreator.TypeChunk>;
                        }
                        export class TypeSpecChunk {
                            public static class: java.lang.Class<com.google.android.material.color.ColorResourcesTableCreator.TypeSpecChunk>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export class ColorRoles {
                        public static class: java.lang.Class<com.google.android.material.color.ColorRoles>;
                        public getOnAccentContainer(): number;
                        public getAccent(): number;
                        public getOnAccent(): number;
                        public getAccentContainer(): number;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export class DynamicColors {
                        public static class: java.lang.Class<com.google.android.material.color.DynamicColors>;
                        /** @deprecated */
                        public static applyToActivitiesIfAvailable(application: globalAndroid.app.Application, theme: number): void;
                        public static wrapContextIfAvailable(originalContext: globalAndroid.content.Context, theme: number): globalAndroid.content.Context;
                        public static wrapContextIfAvailable(originalContext: globalAndroid.content.Context): globalAndroid.content.Context;
                        /** @deprecated */
                        public static applyIfAvailable(activity: globalAndroid.app.Activity): void;
                        public static applyToActivityIfAvailable(activity: globalAndroid.app.Activity): void;
                        public static applyToActivitiesIfAvailable(application: globalAndroid.app.Application, dynamicColorsOptions: com.google.android.material.color.DynamicColorsOptions): void;
                        /** @deprecated */
                        public static applyToActivitiesIfAvailable(application: globalAndroid.app.Application, theme: number, precondition: com.google.android.material.color.DynamicColors.Precondition): void;
                        /** @deprecated */
                        public static applyIfAvailable(activity: globalAndroid.app.Activity, precondition: com.google.android.material.color.DynamicColors.Precondition): void;
                        public static isDynamicColorAvailable(): boolean;
                        /** @deprecated */
                        public static applyIfAvailable(activity: globalAndroid.app.Activity, theme: number): void;
                        /** @deprecated */
                        public static applyToActivitiesIfAvailable(application: globalAndroid.app.Application, precondition: com.google.android.material.color.DynamicColors.Precondition): void;
                        public static applyToActivityIfAvailable(scheme: globalAndroid.app.Activity, resourcesOverride: com.google.android.material.color.DynamicColorsOptions): void;
                        public static applyToActivitiesIfAvailable(application: globalAndroid.app.Application): void;
                    }
                    export module DynamicColors {
                        export class DeviceSupportCondition {
                            public static class: java.lang.Class<com.google.android.material.color.DynamicColors.DeviceSupportCondition>;
                            /**
                             * Constructs a new instance of the com.google.android.material.color.DynamicColors$DeviceSupportCondition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                isSupported(): boolean;
                            });
                            public constructor();
                            public isSupported(): boolean;
                        }
                        export class DynamicColorsActivityLifecycleCallbacks {
                            public static class: java.lang.Class<com.google.android.material.color.DynamicColors.DynamicColorsActivityLifecycleCallbacks>;
                            public onActivityPreCreated(activity: globalAndroid.app.Activity, savedInstanceState: globalAndroid.os.Bundle): void;
                            public onActivityPaused(activity: globalAndroid.app.Activity): void;
                            public onActivityResumed(activity: globalAndroid.app.Activity): void;
                            public onActivityCreated(activity: globalAndroid.app.Activity, savedInstanceState: globalAndroid.os.Bundle): void;
                            public onActivityStopped(activity: globalAndroid.app.Activity): void;
                            public onActivitySaveInstanceState(activity: globalAndroid.app.Activity, outState: globalAndroid.os.Bundle): void;
                            public onActivityStarted(activity: globalAndroid.app.Activity): void;
                            public onActivityDestroyed(activity: globalAndroid.app.Activity): void;
                        }
                        export class OnAppliedCallback {
                            public static class: java.lang.Class<com.google.android.material.color.DynamicColors.OnAppliedCallback>;
                            /**
                             * Constructs a new instance of the com.google.android.material.color.DynamicColors$OnAppliedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onApplied(param0: globalAndroid.app.Activity): void;
                            });
                            public constructor();
                            public onApplied(param0: globalAndroid.app.Activity): void;
                        }
                        export class Precondition {
                            public static class: java.lang.Class<com.google.android.material.color.DynamicColors.Precondition>;
                            /**
                             * Constructs a new instance of the com.google.android.material.color.DynamicColors$Precondition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                shouldApplyDynamicColors(param0: globalAndroid.app.Activity, param1: number): boolean;
                            });
                            public constructor();
                            public shouldApplyDynamicColors(param0: globalAndroid.app.Activity, param1: number): boolean;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export class DynamicColorsOptions {
                        public static class: java.lang.Class<com.google.android.material.color.DynamicColorsOptions>;
                        public getContentBasedSeedColor(): java.lang.Integer;
                        public getThemeOverlay(): number;
                        public getPrecondition(): com.google.android.material.color.DynamicColors.Precondition;
                        public getOnAppliedCallback(): com.google.android.material.color.DynamicColors.OnAppliedCallback;
                    }
                    export module DynamicColorsOptions {
                        export class Builder {
                            public static class: java.lang.Class<com.google.android.material.color.DynamicColorsOptions.Builder>;
                            public constructor();
                            public build(): com.google.android.material.color.DynamicColorsOptions;
                            public setPrecondition(precondition: com.google.android.material.color.DynamicColors.Precondition): com.google.android.material.color.DynamicColorsOptions.Builder;
                            public setContentBasedSource(contentBasedSource: globalAndroid.graphics.Bitmap): com.google.android.material.color.DynamicColorsOptions.Builder;
                            public setOnAppliedCallback(onAppliedCallback: com.google.android.material.color.DynamicColors.OnAppliedCallback): com.google.android.material.color.DynamicColorsOptions.Builder;
                            public setThemeOverlay(themeOverlay: number): com.google.android.material.color.DynamicColorsOptions.Builder;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export class HarmonizedColorAttributes {
                        public static class: java.lang.Class<com.google.android.material.color.HarmonizedColorAttributes>;
                        public static create(attributes: androidNative.Array<number>, themeOverlay: number): com.google.android.material.color.HarmonizedColorAttributes;
                        public static create(attributes: androidNative.Array<number>): com.google.android.material.color.HarmonizedColorAttributes;
                        public getAttributes(): androidNative.Array<number>;
                        public getThemeOverlay(): number;
                        public static createMaterialDefaults(): com.google.android.material.color.HarmonizedColorAttributes;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export class HarmonizedColors {
                        public static class: java.lang.Class<com.google.android.material.color.HarmonizedColors>;
                        public static applyToContextIfAvailable(context: globalAndroid.content.Context, options: com.google.android.material.color.HarmonizedColorsOptions): void;
                        public static wrapContextIfAvailable(context: globalAndroid.content.Context, options: com.google.android.material.color.HarmonizedColorsOptions): globalAndroid.content.Context;
                        public static isHarmonizedColorAvailable(): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export class HarmonizedColorsOptions {
                        public static class: java.lang.Class<com.google.android.material.color.HarmonizedColorsOptions>;
                        public static createMaterialDefaults(): com.google.android.material.color.HarmonizedColorsOptions;
                        public getColorAttributeToHarmonizeWith(): number;
                        public getColorResourceIds(): androidNative.Array<number>;
                        public getColorAttributes(): com.google.android.material.color.HarmonizedColorAttributes;
                    }
                    export module HarmonizedColorsOptions {
                        export class Builder {
                            public static class: java.lang.Class<com.google.android.material.color.HarmonizedColorsOptions.Builder>;
                            public constructor();
                            public setColorResourceIds(colorResourceIds: androidNative.Array<number>): com.google.android.material.color.HarmonizedColorsOptions.Builder;
                            public build(): com.google.android.material.color.HarmonizedColorsOptions;
                            public setColorAttributeToHarmonizeWith(colorAttributeToHarmonizeWith: number): com.google.android.material.color.HarmonizedColorsOptions.Builder;
                            public setColorAttributes(colorAttributes: com.google.android.material.color.HarmonizedColorAttributes): com.google.android.material.color.HarmonizedColorsOptions.Builder;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export class MaterialColorUtilitiesHelper {
                        public static class: java.lang.Class<com.google.android.material.color.MaterialColorUtilitiesHelper>;
                        public static createColorResourcesIdsToColorValues(entry: com.google.android.material.color.utilities.DynamicScheme): java.util.Map<java.lang.Integer, java.lang.Integer>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export class MaterialColors {
                        public static class: java.lang.Class<com.google.android.material.color.MaterialColors>;
                        public static ALPHA_FULL: number = 1.0;
                        public static ALPHA_MEDIUM: number = 0.54;
                        public static ALPHA_DISABLED: number = 0.38;
                        public static ALPHA_LOW: number = 0.32;
                        public static ALPHA_DISABLED_LOW: number = 0.12;
                        public static getColor(context: globalAndroid.content.Context, colorAttributeResId: number, defaultValue: number): number;
                        public static layer(backgroundColor: number, overlayColor: number, overlayAlpha: number): number;
                        public static compositeARGBWithAlpha(originalARGB: number, alpha: number): number;
                        public static layer(backgroundColor: number, overlayColor: number): number;
                        public static layer(view: globalAndroid.view.View, backgroundColorAttributeResId: number, overlayColorAttributeResId: number, overlayAlpha: number): number;
                        public static getColorRoles(context: globalAndroid.content.Context, color: number): com.google.android.material.color.ColorRoles;
                        public static getColor(view: globalAndroid.view.View, colorAttributeResId: number, defaultValue: number): number;
                        public static getColorStateList(context: globalAndroid.content.Context, colorAttributeResId: number, defaultValue: globalAndroid.content.res.ColorStateList): globalAndroid.content.res.ColorStateList;
                        public static getColor(view: globalAndroid.view.View, colorAttributeResId: number): number;
                        public static getColorRoles(color: number, isLightTheme: boolean): com.google.android.material.color.ColorRoles;
                        public static isColorLight(color: number): boolean;
                        public static layer(view: globalAndroid.view.View, backgroundColorAttributeResId: number, overlayColorAttributeResId: number): number;
                        public static getColorStateListOrNull(context: globalAndroid.content.Context, colorAttributeResId: number): globalAndroid.content.res.ColorStateList;
                        public static harmonizeWithPrimary(context: globalAndroid.content.Context, colorToHarmonize: number): number;
                        public static harmonize(colorToHarmonize: number, colorToHarmonizeWith: number): number;
                        public static getColor(context: globalAndroid.content.Context, colorAttributeResId: number, errorMessageComponent: string): number;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export class ResourcesLoaderColorResourcesOverride extends com.google.android.material.color.ColorResourcesOverride {
                        public static class: java.lang.Class<com.google.android.material.color.ResourcesLoaderColorResourcesOverride>;
                        public wrapContextIfPossible(param0: globalAndroid.content.Context, param1: java.util.Map<java.lang.Integer, java.lang.Integer>): globalAndroid.content.Context;
                        public static getInstance(): com.google.android.material.color.ColorResourcesOverride;
                        public applyIfPossible(context: globalAndroid.content.Context, colorResourceIdsToColorValues: java.util.Map<java.lang.Integer, java.lang.Integer>): boolean;
                        public wrapContextIfPossible(context: globalAndroid.content.Context, colorResourceIdsToColorValues: java.util.Map<java.lang.Integer, java.lang.Integer>): globalAndroid.content.Context;
                        public applyIfPossible(param0: globalAndroid.content.Context, param1: java.util.Map<java.lang.Integer, java.lang.Integer>): boolean;
                    }
                    export module ResourcesLoaderColorResourcesOverride {
                        export class ResourcesLoaderColorResourcesOverrideSingleton {
                            public static class: java.lang.Class<com.google.android.material.color.ResourcesLoaderColorResourcesOverride.ResourcesLoaderColorResourcesOverrideSingleton>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export class ResourcesLoaderUtils {
                        public static class: java.lang.Class<com.google.android.material.color.ResourcesLoaderUtils>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export class ThemeUtils {
                        public static class: java.lang.Class<com.google.android.material.color.ThemeUtils>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class Blend {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.Blend>;
                            public static cam16Ucs(from: number, to: number, amount: number): number;
                            public static hctHue(from: number, to: number, amount: number): number;
                            public static harmonize(designColor: number, sourceColor: number): number;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class Cam16 {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.Cam16>;
                            public static fromUcs(jstar: number, astar: number, bstar: number): com.google.android.material.color.utilities.Cam16;
                            public getM(): number;
                            public getHue(): number;
                            public getBstar(): number;
                            public getJ(): number;
                            public getQ(): number;
                            public getAstar(): number;
                            public static fromInt(argb: number): com.google.android.material.color.utilities.Cam16;
                            public getS(): number;
                            public static fromUcsInViewingConditions(jstar: number, astar: number, bstar: number, viewingConditions: com.google.android.material.color.utilities.ViewingConditions): com.google.android.material.color.utilities.Cam16;
                            public toInt(): number;
                            public getChroma(): number;
                            public getJstar(): number;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class ColorUtils {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.ColorUtils>;
                            public static isOpaque(argb: number): boolean;
                            public static blueFromArgb(argb: number): number;
                            public static lstarFromArgb(argb: number): number;
                            public static argbFromXyz(x: number, y: number, z: number): number;
                            public static xyzFromArgb(argb: number): androidNative.Array<number>;
                            public static lstarFromY(y: number): number;
                            public static yFromLstar(lstar: number): number;
                            public static argbFromRgb(red: number, green: number, blue: number): number;
                            public static whitePointD65(): androidNative.Array<number>;
                            public static argbFromLab(l: number, a: number, b: number): number;
                            public static delinearized(rgbComponent: number): number;
                            public static linearized(rgbComponent: number): number;
                            public static greenFromArgb(argb: number): number;
                            public static alphaFromArgb(argb: number): number;
                            public static argbFromLinrgb(linrgb: androidNative.Array<number>): number;
                            public static argbFromLstar(lstar: number): number;
                            public static labFromArgb(argb: number): androidNative.Array<number>;
                            public static redFromArgb(argb: number): number;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class Contrast {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.Contrast>;
                            public static RATIO_MIN: number = 1.0;
                            public static RATIO_MAX: number = 21.0;
                            public static RATIO_30: number = 3.0;
                            public static RATIO_45: number = 4.5;
                            public static RATIO_70: number = 7.0;
                            public static lighterUnsafe(tone: number, ratio: number): number;
                            public static lighter(tone: number, ratio: number): number;
                            public static ratioOfTones(t1: number, t2: number): number;
                            public static darker(tone: number, ratio: number): number;
                            public static ratioOfYs(y1: number, y2: number): number;
                            public static darkerUnsafe(tone: number, ratio: number): number;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class CorePalette {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.CorePalette>;
                            public a1: com.google.android.material.color.utilities.TonalPalette;
                            public a2: com.google.android.material.color.utilities.TonalPalette;
                            public a3: com.google.android.material.color.utilities.TonalPalette;
                            public n1: com.google.android.material.color.utilities.TonalPalette;
                            public n2: com.google.android.material.color.utilities.TonalPalette;
                            public error: com.google.android.material.color.utilities.TonalPalette;
                            public static of(argb: number): com.google.android.material.color.utilities.CorePalette;
                            public static contentOf(argb: number): com.google.android.material.color.utilities.CorePalette;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class DislikeAnalyzer {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.DislikeAnalyzer>;
                            public static isDisliked(hct: com.google.android.material.color.utilities.Hct): boolean;
                            public static fixIfDisliked(hct: com.google.android.material.color.utilities.Hct): com.google.android.material.color.utilities.Hct;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class DynamicColor {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.DynamicColor>;
                            public hue: any /* any<com.google.android.material.color.utilities.DynamicScheme,java.lang.Double>*/;
                            public chroma: any /* any<com.google.android.material.color.utilities.DynamicScheme,java.lang.Double>*/;
                            public tone: any /* any<com.google.android.material.color.utilities.DynamicScheme,java.lang.Double>*/;
                            public opacity: any /* any<com.google.android.material.color.utilities.DynamicScheme,java.lang.Double>*/;
                            public background: any /* any<com.google.android.material.color.utilities.DynamicScheme,com.google.android.material.color.utilities.DynamicColor>*/;
                            public toneMinContrast: any /* any<com.google.android.material.color.utilities.DynamicScheme,java.lang.Double>*/;
                            public toneMaxContrast: any /* any<com.google.android.material.color.utilities.DynamicScheme,java.lang.Double>*/;
                            public toneDeltaConstraint: any /* any<com.google.android.material.color.utilities.DynamicScheme,com.google.android.material.color.utilities.ToneDeltaConstraint>*/;
                            public static fromArgb(argb: number): com.google.android.material.color.utilities.DynamicColor;
                            public static toneMinContrastDefault(tone: any /* any<com.google.android.material.color.utilities.DynamicScheme,java.lang.Double>*/, background: any /* any<com.google.android.material.color.utilities.DynamicScheme,com.google.android.material.color.utilities.DynamicColor>*/, scheme: com.google.android.material.color.utilities.DynamicScheme, toneDeltaConstraint: any /* any<com.google.android.material.color.utilities.DynamicScheme,com.google.android.material.color.utilities.ToneDeltaConstraint>*/): number;
                            public static contrastingTone(negligibleDifference: number, bgTone: number): number;
                            public static fromPalette(palette: any /* any<com.google.android.material.color.utilities.DynamicScheme,com.google.android.material.color.utilities.TonalPalette>*/, tone: any /* any<com.google.android.material.color.utilities.DynamicScheme,java.lang.Double>*/, background: any /* any<com.google.android.material.color.utilities.DynamicScheme,com.google.android.material.color.utilities.DynamicColor>*/, toneDeltaConstraint: any /* any<com.google.android.material.color.utilities.DynamicScheme,com.google.android.material.color.utilities.ToneDeltaConstraint>*/): com.google.android.material.color.utilities.DynamicColor;
                            public static fromPalette(palette: any /* any<com.google.android.material.color.utilities.DynamicScheme,com.google.android.material.color.utilities.TonalPalette>*/, tone: any /* any<com.google.android.material.color.utilities.DynamicScheme,java.lang.Double>*/): com.google.android.material.color.utilities.DynamicColor;
                            public static tonePrefersLightForeground(tone: number): boolean;
                            public getHct(scheme: com.google.android.material.color.utilities.DynamicScheme): com.google.android.material.color.utilities.Hct;
                            public static calculateDynamicTone(scheme: com.google.android.material.color.utilities.DynamicScheme, toneStandard: any /* any<com.google.android.material.color.utilities.DynamicScheme,java.lang.Double>*/, toneToJudge: any /* any<com.google.android.material.color.utilities.DynamicColor,java.lang.Double>*/, desiredTone: any /* any<java.lang.Double,java.lang.Double,java.lang.Double>*/, background: any /* any<com.google.android.material.color.utilities.DynamicScheme,com.google.android.material.color.utilities.DynamicColor>*/, toneDeltaConstraint: any /* any<com.google.android.material.color.utilities.DynamicScheme,com.google.android.material.color.utilities.ToneDeltaConstraint>*/, minRatio: any /* any<java.lang.Double,java.lang.Double>*/, maxRatio: any /* any<java.lang.Double,java.lang.Double>*/): number;
                            public static fromArgb(argb: number, tone: any /* any<com.google.android.material.color.utilities.DynamicScheme,java.lang.Double>*/): com.google.android.material.color.utilities.DynamicColor;
                            public getTone(endTone: com.google.android.material.color.utilities.DynamicScheme): number;
                            public static toneMaxContrastDefault(tone: any /* any<com.google.android.material.color.utilities.DynamicScheme,java.lang.Double>*/, background: any /* any<com.google.android.material.color.utilities.DynamicScheme,com.google.android.material.color.utilities.DynamicColor>*/, scheme: com.google.android.material.color.utilities.DynamicScheme, toneDeltaConstraint: any /* any<com.google.android.material.color.utilities.DynamicScheme,com.google.android.material.color.utilities.ToneDeltaConstraint>*/): number;
                            public constructor(hue: any /* any<com.google.android.material.color.utilities.DynamicScheme,java.lang.Double>*/, chroma: any /* any<com.google.android.material.color.utilities.DynamicScheme,java.lang.Double>*/, tone: any /* any<com.google.android.material.color.utilities.DynamicScheme,java.lang.Double>*/, opacity: any /* any<com.google.android.material.color.utilities.DynamicScheme,java.lang.Double>*/, background: any /* any<com.google.android.material.color.utilities.DynamicScheme,com.google.android.material.color.utilities.DynamicColor>*/, toneMinContrast: any /* any<com.google.android.material.color.utilities.DynamicScheme,java.lang.Double>*/, toneMaxContrast: any /* any<com.google.android.material.color.utilities.DynamicScheme,java.lang.Double>*/, toneDeltaConstraint: any /* any<com.google.android.material.color.utilities.DynamicScheme,com.google.android.material.color.utilities.ToneDeltaConstraint>*/);
                            public static fromArgb(argb: number, tone: any /* any<com.google.android.material.color.utilities.DynamicScheme,java.lang.Double>*/, background: any /* any<com.google.android.material.color.utilities.DynamicScheme,com.google.android.material.color.utilities.DynamicColor>*/): com.google.android.material.color.utilities.DynamicColor;
                            public static toneAllowsLightForeground(tone: number): boolean;
                            public static fromPalette(palette: any /* any<com.google.android.material.color.utilities.DynamicScheme,com.google.android.material.color.utilities.TonalPalette>*/, tone: any /* any<com.google.android.material.color.utilities.DynamicScheme,java.lang.Double>*/, background: any /* any<com.google.android.material.color.utilities.DynamicScheme,com.google.android.material.color.utilities.DynamicColor>*/): com.google.android.material.color.utilities.DynamicColor;
                            public static fromArgb(argb: number, tone: any /* any<com.google.android.material.color.utilities.DynamicScheme,java.lang.Double>*/, background: any /* any<com.google.android.material.color.utilities.DynamicScheme,com.google.android.material.color.utilities.DynamicColor>*/, toneDeltaConstraint: any /* any<com.google.android.material.color.utilities.DynamicScheme,com.google.android.material.color.utilities.ToneDeltaConstraint>*/): com.google.android.material.color.utilities.DynamicColor;
                            public getArgb(scheme: com.google.android.material.color.utilities.DynamicScheme): number;
                            public static enableLightForeground(tone: number): number;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class DynamicScheme {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.DynamicScheme>;
                            public sourceColorArgb: number;
                            public sourceColorHct: com.google.android.material.color.utilities.Hct;
                            public variant: com.google.android.material.color.utilities.Variant;
                            public isDark: boolean;
                            public contrastLevel: number;
                            public primaryPalette: com.google.android.material.color.utilities.TonalPalette;
                            public secondaryPalette: com.google.android.material.color.utilities.TonalPalette;
                            public tertiaryPalette: com.google.android.material.color.utilities.TonalPalette;
                            public neutralPalette: com.google.android.material.color.utilities.TonalPalette;
                            public neutralVariantPalette: com.google.android.material.color.utilities.TonalPalette;
                            public errorPalette: com.google.android.material.color.utilities.TonalPalette;
                            public static getRotatedHue(thisHue: com.google.android.material.color.utilities.Hct, nextHue: androidNative.Array<number>, i: androidNative.Array<number>): number;
                            public constructor(sourceColorHct: com.google.android.material.color.utilities.Hct, variant: com.google.android.material.color.utilities.Variant, isDark: boolean, contrastLevel: number, primaryPalette: com.google.android.material.color.utilities.TonalPalette, secondaryPalette: com.google.android.material.color.utilities.TonalPalette, tertiaryPalette: com.google.android.material.color.utilities.TonalPalette, neutralPalette: com.google.android.material.color.utilities.TonalPalette, neutralVariantPalette: com.google.android.material.color.utilities.TonalPalette);
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class Hct {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.Hct>;
                            public toInt(): number;
                            public getHue(): number;
                            public static from(hue: number, chroma: number, tone: number): com.google.android.material.color.utilities.Hct;
                            public setTone(newTone: number): void;
                            public getChroma(): number;
                            public setHue(newHue: number): void;
                            public getTone(): number;
                            public inViewingConditions(vc: com.google.android.material.color.utilities.ViewingConditions): com.google.android.material.color.utilities.Hct;
                            public static fromInt(argb: number): com.google.android.material.color.utilities.Hct;
                            public setChroma(newChroma: number): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class HctSolver {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.HctSolver>;
                            public static solveToCam(hueDegrees: number, chroma: number, lstar: number): com.google.android.material.color.utilities.Cam16;
                            public static solveToInt(hueDegrees: number, chroma: number, lstar: number): number;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class MaterialDynamicColors {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.MaterialDynamicColors>;
                            public static background: com.google.android.material.color.utilities.DynamicColor;
                            public static onBackground: com.google.android.material.color.utilities.DynamicColor;
                            public static surface: com.google.android.material.color.utilities.DynamicColor;
                            public static surfaceInverse: com.google.android.material.color.utilities.DynamicColor;
                            public static surfaceBright: com.google.android.material.color.utilities.DynamicColor;
                            public static surfaceDim: com.google.android.material.color.utilities.DynamicColor;
                            public static surfaceSub2: com.google.android.material.color.utilities.DynamicColor;
                            public static surfaceSub1: com.google.android.material.color.utilities.DynamicColor;
                            public static surfaceContainer: com.google.android.material.color.utilities.DynamicColor;
                            public static surfaceAdd1: com.google.android.material.color.utilities.DynamicColor;
                            public static surfaceAdd2: com.google.android.material.color.utilities.DynamicColor;
                            public static onSurface: com.google.android.material.color.utilities.DynamicColor;
                            public static onSurfaceInverse: com.google.android.material.color.utilities.DynamicColor;
                            public static surfaceVariant: com.google.android.material.color.utilities.DynamicColor;
                            public static onSurfaceVariant: com.google.android.material.color.utilities.DynamicColor;
                            public static outline: com.google.android.material.color.utilities.DynamicColor;
                            public static outlineVariant: com.google.android.material.color.utilities.DynamicColor;
                            public static primaryContainer: com.google.android.material.color.utilities.DynamicColor;
                            public static onPrimaryContainer: com.google.android.material.color.utilities.DynamicColor;
                            public static primary: com.google.android.material.color.utilities.DynamicColor;
                            public static primaryInverse: com.google.android.material.color.utilities.DynamicColor;
                            public static onPrimary: com.google.android.material.color.utilities.DynamicColor;
                            public static secondaryContainer: com.google.android.material.color.utilities.DynamicColor;
                            public static onSecondaryContainer: com.google.android.material.color.utilities.DynamicColor;
                            public static secondary: com.google.android.material.color.utilities.DynamicColor;
                            public static onSecondary: com.google.android.material.color.utilities.DynamicColor;
                            public static tertiaryContainer: com.google.android.material.color.utilities.DynamicColor;
                            public static onTertiaryContainer: com.google.android.material.color.utilities.DynamicColor;
                            public static tertiary: com.google.android.material.color.utilities.DynamicColor;
                            public static onTertiary: com.google.android.material.color.utilities.DynamicColor;
                            public static errorContainer: com.google.android.material.color.utilities.DynamicColor;
                            public static onErrorContainer: com.google.android.material.color.utilities.DynamicColor;
                            public static error: com.google.android.material.color.utilities.DynamicColor;
                            public static onError: com.google.android.material.color.utilities.DynamicColor;
                            public static primaryFixed: com.google.android.material.color.utilities.DynamicColor;
                            public static primaryFixedDarker: com.google.android.material.color.utilities.DynamicColor;
                            public static onPrimaryFixed: com.google.android.material.color.utilities.DynamicColor;
                            public static onPrimaryFixedVariant: com.google.android.material.color.utilities.DynamicColor;
                            public static secondaryFixed: com.google.android.material.color.utilities.DynamicColor;
                            public static secondaryFixedDarker: com.google.android.material.color.utilities.DynamicColor;
                            public static onSecondaryFixed: com.google.android.material.color.utilities.DynamicColor;
                            public static onSecondaryFixedVariant: com.google.android.material.color.utilities.DynamicColor;
                            public static tertiaryFixed: com.google.android.material.color.utilities.DynamicColor;
                            public static tertiaryFixedDarker: com.google.android.material.color.utilities.DynamicColor;
                            public static onTertiaryFixed: com.google.android.material.color.utilities.DynamicColor;
                            public static onTertiaryFixedVariant: com.google.android.material.color.utilities.DynamicColor;
                            public static controlActivated: com.google.android.material.color.utilities.DynamicColor;
                            public static controlNormal: com.google.android.material.color.utilities.DynamicColor;
                            public static controlHighlight: com.google.android.material.color.utilities.DynamicColor;
                            public static textPrimaryInverse: com.google.android.material.color.utilities.DynamicColor;
                            public static textSecondaryAndTertiaryInverse: com.google.android.material.color.utilities.DynamicColor;
                            public static textPrimaryInverseDisableOnly: com.google.android.material.color.utilities.DynamicColor;
                            public static textSecondaryAndTertiaryInverseDisabled: com.google.android.material.color.utilities.DynamicColor;
                            public static textHintInverse: com.google.android.material.color.utilities.DynamicColor;
                            public static highestSurface(s: com.google.android.material.color.utilities.DynamicScheme): com.google.android.material.color.utilities.DynamicColor;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class MathUtils {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.MathUtils>;
                            public static differenceDegrees(a: number, b: number): number;
                            public static signum(num: number): number;
                            public static clampDouble(min: number, max: number, input: number): number;
                            public static lerp(start: number, stop: number, amount: number): number;
                            public static sanitizeDegreesInt(degrees: number): number;
                            public static sanitizeDegreesDouble(degrees: number): number;
                            public static rotationDirection(from: number, to: number): number;
                            public static clampInt(min: number, max: number, input: number): number;
                            public static matrixMultiply(row: androidNative.Array<number>, matrix: androidNative.Array<androidNative.Array<number>>): androidNative.Array<number>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class PointProvider {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.PointProvider>;
                            /**
                             * Constructs a new instance of the com.google.android.material.color.utilities.PointProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                fromInt(param0: number): androidNative.Array<number>;
                                toInt(param0: androidNative.Array<number>): number;
                                distance(param0: androidNative.Array<number>, param1: androidNative.Array<number>): number;
                            });
                            public constructor();
                            public distance(param0: androidNative.Array<number>, param1: androidNative.Array<number>): number;
                            public toInt(param0: androidNative.Array<number>): number;
                            public fromInt(param0: number): androidNative.Array<number>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class PointProviderLab extends com.google.android.material.color.utilities.PointProvider {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.PointProviderLab>;
                            public constructor();
                            public distance(one: androidNative.Array<number>, two: androidNative.Array<number>): number;
                            public fromInt(argb: number): androidNative.Array<number>;
                            public distance(param0: androidNative.Array<number>, param1: androidNative.Array<number>): number;
                            public toInt(param0: androidNative.Array<number>): number;
                            public toInt(lab: androidNative.Array<number>): number;
                            public fromInt(param0: number): androidNative.Array<number>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class Quantizer {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.Quantizer>;
                            /**
                             * Constructs a new instance of the com.google.android.material.color.utilities.Quantizer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                quantize(param0: androidNative.Array<number>, param1: number): com.google.android.material.color.utilities.QuantizerResult;
                            });
                            public constructor();
                            public quantize(param0: androidNative.Array<number>, param1: number): com.google.android.material.color.utilities.QuantizerResult;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class QuantizerCelebi {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.QuantizerCelebi>;
                            public static quantize(argb: androidNative.Array<number>, pixels: number): java.util.Map<java.lang.Integer, java.lang.Integer>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class QuantizerMap extends com.google.android.material.color.utilities.Quantizer {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.QuantizerMap>;
                            public constructor();
                            public quantize(param0: androidNative.Array<number>, param1: number): com.google.android.material.color.utilities.QuantizerResult;
                            public quantize(newPixelCount: androidNative.Array<number>, pixel: number): com.google.android.material.color.utilities.QuantizerResult;
                            public getColorToCount(): java.util.Map<java.lang.Integer, java.lang.Integer>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class QuantizerResult {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.QuantizerResult>;
                            public colorToCount: java.util.Map<java.lang.Integer, java.lang.Integer>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class QuantizerWsmeans {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.QuantizerWsmeans>;
                            public static quantize(inputPixel: androidNative.Array<number>, pixelCount: androidNative.Array<number>, i: number): java.util.Map<java.lang.Integer, java.lang.Integer>;
                        }
                        export module QuantizerWsmeans {
                            export class Distance extends java.lang.Comparable<com.google.android.material.color.utilities.QuantizerWsmeans.Distance> {
                                public static class: java.lang.Class<com.google.android.material.color.utilities.QuantizerWsmeans.Distance>;
                                public compareTo(other: com.google.android.material.color.utilities.QuantizerWsmeans.Distance): number;
                            }
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class QuantizerWu extends com.google.android.material.color.utilities.Quantizer {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.QuantizerWu>;
                            public constructor();
                            public quantize(param0: androidNative.Array<number>, param1: number): com.google.android.material.color.utilities.QuantizerResult;
                            public quantize(this_: androidNative.Array<number>, pixels: number): com.google.android.material.color.utilities.QuantizerResult;
                        }
                        export module QuantizerWu {
                            export class Box {
                                public static class: java.lang.Class<com.google.android.material.color.utilities.QuantizerWu.Box>;
                            }
                            export class CreateBoxesResult {
                                public static class: java.lang.Class<com.google.android.material.color.utilities.QuantizerWu.CreateBoxesResult>;
                            }
                            export class Direction {
                                public static class: java.lang.Class<com.google.android.material.color.utilities.QuantizerWu.Direction>;
                                public static RED: com.google.android.material.color.utilities.QuantizerWu.Direction;
                                public static GREEN: com.google.android.material.color.utilities.QuantizerWu.Direction;
                                public static BLUE: com.google.android.material.color.utilities.QuantizerWu.Direction;
                                public static valueOf(name: string): com.google.android.material.color.utilities.QuantizerWu.Direction;
                                public static values(): androidNative.Array<com.google.android.material.color.utilities.QuantizerWu.Direction>;
                            }
                            export class MaximizeResult {
                                public static class: java.lang.Class<com.google.android.material.color.utilities.QuantizerWu.MaximizeResult>;
                            }
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class Scheme {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.Scheme>;
                            public getOnError(): number;
                            public getBackground(): number;
                            public setPrimary(primary: number): void;
                            public withTertiaryContainer(tertiaryContainer: number): com.google.android.material.color.utilities.Scheme;
                            public getSecondaryContainer(): number;
                            public setOnBackground(onBackground: number): void;
                            public setOnSurface(onSurface: number): void;
                            public getOnSurfaceVariant(): number;
                            public getOnPrimaryContainer(): number;
                            public getInversePrimary(): number;
                            public setOnSurfaceVariant(onSurfaceVariant: number): void;
                            public withInverseSurface(inverseSurface: number): com.google.android.material.color.utilities.Scheme;
                            public withOnError(onError: number): com.google.android.material.color.utilities.Scheme;
                            public setInverseOnSurface(inverseOnSurface: number): void;
                            public setSecondaryContainer(secondaryContainer: number): void;
                            public withOnTertiary(onTertiary: number): com.google.android.material.color.utilities.Scheme;
                            public getOutlineVariant(): number;
                            public setTertiary(tertiary: number): void;
                            public withSurface(surface: number): com.google.android.material.color.utilities.Scheme;
                            public getInverseOnSurface(): number;
                            public withOnTertiaryContainer(onTertiaryContainer: number): com.google.android.material.color.utilities.Scheme;
                            public withOnSecondary(onSecondary: number): com.google.android.material.color.utilities.Scheme;
                            public setSurfaceVariant(surfaceVariant: number): void;
                            public static darkContent(argb: number): com.google.android.material.color.utilities.Scheme;
                            public setErrorContainer(errorContainer: number): void;
                            public setOutlineVariant(outlineVariant: number): void;
                            public setInverseSurface(inverseSurface: number): void;
                            public getOnSecondary(): number;
                            public getInverseSurface(): number;
                            public setPrimaryContainer(primaryContainer: number): void;
                            public withTertiary(tertiary: number): com.google.android.material.color.utilities.Scheme;
                            public getOnSurface(): number;
                            public static light(argb: number): com.google.android.material.color.utilities.Scheme;
                            public withOnPrimaryContainer(onPrimaryContainer: number): com.google.android.material.color.utilities.Scheme;
                            public withBackground(background: number): com.google.android.material.color.utilities.Scheme;
                            public withShadow(shadow: number): com.google.android.material.color.utilities.Scheme;
                            public getOutline(): number;
                            public getTertiary(): number;
                            public withError(error: number): com.google.android.material.color.utilities.Scheme;
                            public withSurfaceVariant(surfaceVariant: number): com.google.android.material.color.utilities.Scheme;
                            public setOutline(outline: number): void;
                            public getPrimary(): number;
                            public withOnErrorContainer(onErrorContainer: number): com.google.android.material.color.utilities.Scheme;
                            public setOnTertiary(onTertiary: number): void;
                            public withOnBackground(onBackground: number): com.google.android.material.color.utilities.Scheme;
                            public withPrimary(primary: number): com.google.android.material.color.utilities.Scheme;
                            public withSecondaryContainer(secondaryContainer: number): com.google.android.material.color.utilities.Scheme;
                            public setTertiaryContainer(tertiaryContainer: number): void;
                            public setScrim(scrim: number): void;
                            public withPrimaryContainer(primaryContainer: number): com.google.android.material.color.utilities.Scheme;
                            public setOnPrimaryContainer(onPrimaryContainer: number): void;
                            public constructor(primary: number, onPrimary: number, primaryContainer: number, onPrimaryContainer: number, secondary: number, onSecondary: number, secondaryContainer: number, onSecondaryContainer: number, tertiary: number, onTertiary: number, tertiaryContainer: number, onTertiaryContainer: number, error: number, onError: number, errorContainer: number, onErrorContainer: number, background: number, onBackground: number, surface: number, onSurface: number, surfaceVariant: number, onSurfaceVariant: number, outline: number, outlineVariant: number, shadow: number, scrim: number, inverseSurface: number, inverseOnSurface: number, inversePrimary: number);
                            public getOnSecondaryContainer(): number;
                            public setOnSecondaryContainer(onSecondaryContainer: number): void;
                            public setOnErrorContainer(onErrorContainer: number): void;
                            public hashCode(): number;
                            public getShadow(): number;
                            public setSecondary(secondary: number): void;
                            public setOnSecondary(onSecondary: number): void;
                            public toString(): string;
                            public setError(error: number): void;
                            public setBackground(background: number): void;
                            public getError(): number;
                            public setSurface(surface: number): void;
                            public getOnTertiary(): number;
                            public withOutline(outline: number): com.google.android.material.color.utilities.Scheme;
                            public getScrim(): number;
                            public withInverseOnSurface(inverseOnSurface: number): com.google.android.material.color.utilities.Scheme;
                            public static dark(argb: number): com.google.android.material.color.utilities.Scheme;
                            public equals(object: any): boolean;
                            public getErrorContainer(): number;
                            public withScrim(scrim: number): com.google.android.material.color.utilities.Scheme;
                            public setOnTertiaryContainer(onTertiaryContainer: number): void;
                            public withOutlineVariant(outlineVariant: number): com.google.android.material.color.utilities.Scheme;
                            public constructor();
                            public setInversePrimary(inversePrimary: number): void;
                            public getTertiaryContainer(): number;
                            public withErrorContainer(errorContainer: number): com.google.android.material.color.utilities.Scheme;
                            public getSurface(): number;
                            public withOnSurface(onSurface: number): com.google.android.material.color.utilities.Scheme;
                            public withSecondary(secondary: number): com.google.android.material.color.utilities.Scheme;
                            public getOnBackground(): number;
                            public getOnErrorContainer(): number;
                            public withInversePrimary(inversePrimary: number): com.google.android.material.color.utilities.Scheme;
                            public withOnPrimary(onPrimary: number): com.google.android.material.color.utilities.Scheme;
                            public setShadow(shadow: number): void;
                            public getSecondary(): number;
                            public getPrimaryContainer(): number;
                            public getOnPrimary(): number;
                            public withOnSurfaceVariant(onSurfaceVariant: number): com.google.android.material.color.utilities.Scheme;
                            public static lightContent(argb: number): com.google.android.material.color.utilities.Scheme;
                            public setOnError(onError: number): void;
                            public setOnPrimary(onPrimary: number): void;
                            public getOnTertiaryContainer(): number;
                            public withOnSecondaryContainer(onSecondaryContainer: number): com.google.android.material.color.utilities.Scheme;
                            public getSurfaceVariant(): number;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class SchemeContent extends com.google.android.material.color.utilities.DynamicScheme {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.SchemeContent>;
                            public constructor(sourceColorHct: com.google.android.material.color.utilities.Hct, variant: com.google.android.material.color.utilities.Variant, isDark: boolean, contrastLevel: number, primaryPalette: com.google.android.material.color.utilities.TonalPalette, secondaryPalette: com.google.android.material.color.utilities.TonalPalette, tertiaryPalette: com.google.android.material.color.utilities.TonalPalette, neutralPalette: com.google.android.material.color.utilities.TonalPalette, neutralVariantPalette: com.google.android.material.color.utilities.TonalPalette);
                            public constructor(sourceColorHct: com.google.android.material.color.utilities.Hct, isDark: boolean, contrastLevel: number);
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class SchemeExpressive extends com.google.android.material.color.utilities.DynamicScheme {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.SchemeExpressive>;
                            public constructor(sourceColorHct: com.google.android.material.color.utilities.Hct, variant: com.google.android.material.color.utilities.Variant, isDark: boolean, contrastLevel: number, primaryPalette: com.google.android.material.color.utilities.TonalPalette, secondaryPalette: com.google.android.material.color.utilities.TonalPalette, tertiaryPalette: com.google.android.material.color.utilities.TonalPalette, neutralPalette: com.google.android.material.color.utilities.TonalPalette, neutralVariantPalette: com.google.android.material.color.utilities.TonalPalette);
                            public constructor(sourceColorHct: com.google.android.material.color.utilities.Hct, isDark: boolean, contrastLevel: number);
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class SchemeFidelity extends com.google.android.material.color.utilities.DynamicScheme {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.SchemeFidelity>;
                            public constructor(sourceColorHct: com.google.android.material.color.utilities.Hct, variant: com.google.android.material.color.utilities.Variant, isDark: boolean, contrastLevel: number, primaryPalette: com.google.android.material.color.utilities.TonalPalette, secondaryPalette: com.google.android.material.color.utilities.TonalPalette, tertiaryPalette: com.google.android.material.color.utilities.TonalPalette, neutralPalette: com.google.android.material.color.utilities.TonalPalette, neutralVariantPalette: com.google.android.material.color.utilities.TonalPalette);
                            public constructor(sourceColorHct: com.google.android.material.color.utilities.Hct, isDark: boolean, contrastLevel: number);
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class SchemeMonochrome extends com.google.android.material.color.utilities.DynamicScheme {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.SchemeMonochrome>;
                            public constructor(sourceColorHct: com.google.android.material.color.utilities.Hct, variant: com.google.android.material.color.utilities.Variant, isDark: boolean, contrastLevel: number, primaryPalette: com.google.android.material.color.utilities.TonalPalette, secondaryPalette: com.google.android.material.color.utilities.TonalPalette, tertiaryPalette: com.google.android.material.color.utilities.TonalPalette, neutralPalette: com.google.android.material.color.utilities.TonalPalette, neutralVariantPalette: com.google.android.material.color.utilities.TonalPalette);
                            public constructor(sourceColorHct: com.google.android.material.color.utilities.Hct, isDark: boolean, contrastLevel: number);
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class SchemeNeutral extends com.google.android.material.color.utilities.DynamicScheme {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.SchemeNeutral>;
                            public constructor(sourceColorHct: com.google.android.material.color.utilities.Hct, variant: com.google.android.material.color.utilities.Variant, isDark: boolean, contrastLevel: number, primaryPalette: com.google.android.material.color.utilities.TonalPalette, secondaryPalette: com.google.android.material.color.utilities.TonalPalette, tertiaryPalette: com.google.android.material.color.utilities.TonalPalette, neutralPalette: com.google.android.material.color.utilities.TonalPalette, neutralVariantPalette: com.google.android.material.color.utilities.TonalPalette);
                            public constructor(sourceColorHct: com.google.android.material.color.utilities.Hct, isDark: boolean, contrastLevel: number);
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class SchemeTonalSpot extends com.google.android.material.color.utilities.DynamicScheme {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.SchemeTonalSpot>;
                            public constructor(sourceColorHct: com.google.android.material.color.utilities.Hct, variant: com.google.android.material.color.utilities.Variant, isDark: boolean, contrastLevel: number, primaryPalette: com.google.android.material.color.utilities.TonalPalette, secondaryPalette: com.google.android.material.color.utilities.TonalPalette, tertiaryPalette: com.google.android.material.color.utilities.TonalPalette, neutralPalette: com.google.android.material.color.utilities.TonalPalette, neutralVariantPalette: com.google.android.material.color.utilities.TonalPalette);
                            public constructor(sourceColorHct: com.google.android.material.color.utilities.Hct, isDark: boolean, contrastLevel: number);
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class SchemeVibrant extends com.google.android.material.color.utilities.DynamicScheme {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.SchemeVibrant>;
                            public constructor(sourceColorHct: com.google.android.material.color.utilities.Hct, variant: com.google.android.material.color.utilities.Variant, isDark: boolean, contrastLevel: number, primaryPalette: com.google.android.material.color.utilities.TonalPalette, secondaryPalette: com.google.android.material.color.utilities.TonalPalette, tertiaryPalette: com.google.android.material.color.utilities.TonalPalette, neutralPalette: com.google.android.material.color.utilities.TonalPalette, neutralVariantPalette: com.google.android.material.color.utilities.TonalPalette);
                            public constructor(sourceColorHct: com.google.android.material.color.utilities.Hct, isDark: boolean, contrastLevel: number);
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class Score {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.Score>;
                            public static score(entry: java.util.Map<java.lang.Integer, java.lang.Integer>): java.util.List<java.lang.Integer>;
                        }
                        export module Score {
                            export class ScoredComparator extends java.util.Comparator<java.util.Map.Entry<java.lang.Integer, java.lang.Double>> {
                                public static class: java.lang.Class<com.google.android.material.color.utilities.Score.ScoredComparator>;
                                public constructor();
                                public compare(entry1: java.util.Map.Entry<java.lang.Integer, java.lang.Double>, entry2: java.util.Map.Entry<java.lang.Integer, java.lang.Double>): number;
                            }
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class TemperatureCache {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.TemperatureCache>;
                            public getComplement(): com.google.android.material.color.utilities.Hct;
                            public getAnalogousColors(): java.util.List<com.google.android.material.color.utilities.Hct>;
                            public getRelativeTemperature(hct: com.google.android.material.color.utilities.Hct): number;
                            public getAnalogousColors(hct: number, temp: number): java.util.List<com.google.android.material.color.utilities.Hct>;
                            public constructor(input: com.google.android.material.color.utilities.Hct);
                            public static rawTemperature(color: com.google.android.material.color.utilities.Hct): number;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class TonalPalette {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.TonalPalette>;
                            public getHct(tone: number): com.google.android.material.color.utilities.Hct;
                            public static fromHct(hct: com.google.android.material.color.utilities.Hct): com.google.android.material.color.utilities.TonalPalette;
                            public getHue(): number;
                            public static fromHueAndChroma(hue: number, chroma: number): com.google.android.material.color.utilities.TonalPalette;
                            public getChroma(): number;
                            public static fromInt(argb: number): com.google.android.material.color.utilities.TonalPalette;
                            public tone(tone: number): number;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class ToneDeltaConstraint {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.ToneDeltaConstraint>;
                            public delta: number;
                            public keepAway: com.google.android.material.color.utilities.DynamicColor;
                            public keepAwayPolarity: com.google.android.material.color.utilities.TonePolarity;
                            public constructor(delta: number, keepAway: com.google.android.material.color.utilities.DynamicColor, keepAwayPolarity: com.google.android.material.color.utilities.TonePolarity);
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class TonePolarity {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.TonePolarity>;
                            public static DARKER: com.google.android.material.color.utilities.TonePolarity;
                            public static LIGHTER: com.google.android.material.color.utilities.TonePolarity;
                            public static NO_PREFERENCE: com.google.android.material.color.utilities.TonePolarity;
                            public static valueOf(name: string): com.google.android.material.color.utilities.TonePolarity;
                            public static values(): androidNative.Array<com.google.android.material.color.utilities.TonePolarity>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class Variant {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.Variant>;
                            public static MONOCHROME: com.google.android.material.color.utilities.Variant;
                            public static NEUTRAL: com.google.android.material.color.utilities.Variant;
                            public static TONAL_SPOT: com.google.android.material.color.utilities.Variant;
                            public static VIBRANT: com.google.android.material.color.utilities.Variant;
                            public static EXPRESSIVE: com.google.android.material.color.utilities.Variant;
                            public static FIDELITY: com.google.android.material.color.utilities.Variant;
                            public static CONTENT: com.google.android.material.color.utilities.Variant;
                            public static valueOf(name: string): com.google.android.material.color.utilities.Variant;
                            public static values(): androidNative.Array<com.google.android.material.color.utilities.Variant>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module color {
                    export module utilities {
                        export class ViewingConditions {
                            public static class: java.lang.Class<com.google.android.material.color.utilities.ViewingConditions>;
                            public static DEFAULT: com.google.android.material.color.utilities.ViewingConditions;
                            public static defaultWithBackgroundLstar(lstar: number): com.google.android.material.color.utilities.ViewingConditions;
                            public getN(): number;
                            public static make(whitePoint: androidNative.Array<number>, adaptingLuminance: number, backgroundLstar: number, surround: number, discountingIlluminant: boolean): com.google.android.material.color.utilities.ViewingConditions;
                            public getAw(): number;
                            public getNbb(): number;
                            public getFlRoot(): number;
                            public getRgbD(): androidNative.Array<number>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export class CalendarConstraints {
                        public static class: java.lang.Class<com.google.android.material.datepicker.CalendarConstraints>;
                        public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.datepicker.CalendarConstraints>;
                        public getEndMs(): number;
                        public describeContents(): number;
                        public getStartMs(): number;
                        public hashCode(): number;
                        public getOpenAtMs(): java.lang.Long;
                        public getDateValidator(): com.google.android.material.datepicker.CalendarConstraints.DateValidator;
                        public equals(o: any): boolean;
                        public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
                    }
                    export module CalendarConstraints {
                        export class Builder {
                            public static class: java.lang.Class<com.google.android.material.datepicker.CalendarConstraints.Builder>;
                            public constructor();
                            public setFirstDayOfWeek(firstDayOfWeek: number): com.google.android.material.datepicker.CalendarConstraints.Builder;
                            public build(): com.google.android.material.datepicker.CalendarConstraints;
                            public setOpenAt(month: number): com.google.android.material.datepicker.CalendarConstraints.Builder;
                            public setEnd(month: number): com.google.android.material.datepicker.CalendarConstraints.Builder;
                            public setStart(month: number): com.google.android.material.datepicker.CalendarConstraints.Builder;
                            public setValidator(validator: com.google.android.material.datepicker.CalendarConstraints.DateValidator): com.google.android.material.datepicker.CalendarConstraints.Builder;
                        }
                        export class DateValidator {
                            public static class: java.lang.Class<com.google.android.material.datepicker.CalendarConstraints.DateValidator>;
                            /**
                             * Constructs a new instance of the com.google.android.material.datepicker.CalendarConstraints$DateValidator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                isValid(param0: number): boolean;
                            });
                            public constructor();
                            public isValid(param0: number): boolean;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export class CalendarItemStyle {
                        public static class: java.lang.Class<com.google.android.material.datepicker.CalendarItemStyle>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export class CalendarStyle {
                        public static class: java.lang.Class<com.google.android.material.datepicker.CalendarStyle>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export class CompositeDateValidator extends com.google.android.material.datepicker.CalendarConstraints.DateValidator {
                        public static class: java.lang.Class<com.google.android.material.datepicker.CompositeDateValidator>;
                        public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.datepicker.CompositeDateValidator>;
                        public describeContents(): number;
                        public isValid(date: number): boolean;
                        public isValid(param0: number): boolean;
                        public static anyOf(validators: java.util.List<com.google.android.material.datepicker.CalendarConstraints.DateValidator>): com.google.android.material.datepicker.CalendarConstraints.DateValidator;
                        public hashCode(): number;
                        public equals(o: any): boolean;
                        public static allOf(validators: java.util.List<com.google.android.material.datepicker.CalendarConstraints.DateValidator>): com.google.android.material.datepicker.CalendarConstraints.DateValidator;
                        public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
                    }
                    export module CompositeDateValidator {
                        export class Operator {
                            public static class: java.lang.Class<com.google.android.material.datepicker.CompositeDateValidator.Operator>;
                            /**
                             * Constructs a new instance of the com.google.android.material.datepicker.CompositeDateValidator$Operator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                isValid(param0: java.util.List<com.google.android.material.datepicker.CalendarConstraints.DateValidator>, param1: number): boolean;
                                getId(): number;
                            });
                            public constructor();
                            public getId(): number;
                            public isValid(param0: java.util.List<com.google.android.material.datepicker.CalendarConstraints.DateValidator>, param1: number): boolean;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export abstract class DateFormatTextWatcher extends com.google.android.material.internal.TextWatcherAdapter {
                        public static class: java.lang.Class<com.google.android.material.datepicker.DateFormatTextWatcher>;
                        public runValidation(view: globalAndroid.view.View, validation: java.lang.Runnable): void;
                        public onTextChanged(milliseconds: string, e: number, this_: number, s: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export class DateSelector<S> extends globalAndroid.os.Parcelable {
                        public static class: java.lang.Class<com.google.android.material.datepicker.DateSelector<any>>;
                        /**
                         * Constructs a new instance of the com.google.android.material.datepicker.DateSelector<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            getSelection(): any;
                            isSelectionComplete(): boolean;
                            setSelection(param0: any): void;
                            select(param0: number): void;
                            getSelectedDays(): java.util.Collection<java.lang.Long>;
                            getSelectedRanges(): java.util.Collection<androidx.core.util.Pair<java.lang.Long, java.lang.Long>>;
                            getSelectionDisplayString(param0: globalAndroid.content.Context): string;
                            getSelectionContentDescription(param0: globalAndroid.content.Context): string;
                            getError(): string;
                            getDefaultTitleResId(): number;
                            getDefaultThemeResId(param0: globalAndroid.content.Context): number;
                            setTextInputFormat(param0: java.text.SimpleDateFormat): void;
                            onCreateTextInputView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle, param3: com.google.android.material.datepicker.CalendarConstraints, param4: com.google.android.material.datepicker.OnSelectionChangedListener<any>): globalAndroid.view.View;
                            showKeyboardWithAutoHideBehavior(editText: androidNative.Array<globalAndroid.widget.EditText>): void;
                            lambda$showKeyboardWithAutoHideBehavior$0(editText: androidNative.Array<globalAndroid.widget.EditText>, editTexts: globalAndroid.view.View, view: boolean): void;
                        });
                        public constructor();
                        public onCreateTextInputView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle, param3: com.google.android.material.datepicker.CalendarConstraints, param4: com.google.android.material.datepicker.OnSelectionChangedListener<any>): globalAndroid.view.View;
                        public getSelectionDisplayString(param0: globalAndroid.content.Context): string;
                        public getDefaultTitleResId(): number;
                        public setTextInputFormat(param0: java.text.SimpleDateFormat): void;
                        public getSelectionContentDescription(param0: globalAndroid.content.Context): string;
                        public static showKeyboardWithAutoHideBehavior(editText: androidNative.Array<globalAndroid.widget.EditText>): void;
                        public getSelectedDays(): java.util.Collection<java.lang.Long>;
                        public select(param0: number): void;
                        public getDefaultThemeResId(param0: globalAndroid.content.Context): number;
                        public getSelectedRanges(): java.util.Collection<androidx.core.util.Pair<java.lang.Long, java.lang.Long>>;
                        public setSelection(param0: any): void;
                        public getError(): string;
                        public getSelection(): any;
                        public isSelectionComplete(): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export class DateStrings {
                        public static class: java.lang.Class<com.google.android.material.datepicker.DateStrings>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export class DateValidatorPointBackward extends com.google.android.material.datepicker.CalendarConstraints.DateValidator {
                        public static class: java.lang.Class<com.google.android.material.datepicker.DateValidatorPointBackward>;
                        public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.datepicker.DateValidatorPointBackward>;
                        public static now(): com.google.android.material.datepicker.DateValidatorPointBackward;
                        public describeContents(): number;
                        public isValid(date: number): boolean;
                        public isValid(param0: number): boolean;
                        public hashCode(): number;
                        public equals(o: any): boolean;
                        public static before(point: number): com.google.android.material.datepicker.DateValidatorPointBackward;
                        public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export class DateValidatorPointForward extends com.google.android.material.datepicker.CalendarConstraints.DateValidator {
                        public static class: java.lang.Class<com.google.android.material.datepicker.DateValidatorPointForward>;
                        public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.datepicker.DateValidatorPointForward>;
                        public static now(): com.google.android.material.datepicker.DateValidatorPointForward;
                        public describeContents(): number;
                        public isValid(date: number): boolean;
                        public isValid(param0: number): boolean;
                        public hashCode(): number;
                        public equals(o: any): boolean;
                        public static from(point: number): com.google.android.material.datepicker.DateValidatorPointForward;
                        public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export abstract class DayViewDecorator {
                        public static class: java.lang.Class<com.google.android.material.datepicker.DayViewDecorator>;
                        public getCompoundDrawableLeft(context: globalAndroid.content.Context, year: number, month: number, day: number, valid: boolean, selected: boolean): globalAndroid.graphics.drawable.Drawable;
                        public constructor();
                        public getCompoundDrawableRight(context: globalAndroid.content.Context, year: number, month: number, day: number, valid: boolean, selected: boolean): globalAndroid.graphics.drawable.Drawable;
                        public getCompoundDrawableBottom(context: globalAndroid.content.Context, year: number, month: number, day: number, valid: boolean, selected: boolean): globalAndroid.graphics.drawable.Drawable;
                        public initialize(context: globalAndroid.content.Context): void;
                        public getCompoundDrawableTop(context: globalAndroid.content.Context, year: number, month: number, day: number, valid: boolean, selected: boolean): globalAndroid.graphics.drawable.Drawable;
                        public getBackgroundColor(context: globalAndroid.content.Context, year: number, month: number, day: number, valid: boolean, selected: boolean): globalAndroid.content.res.ColorStateList;
                        public getContentDescription(context: globalAndroid.content.Context, year: number, month: number, day: number, valid: boolean, selected: boolean, originalContentDescription: string): string;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export class DaysOfWeekAdapter {
                        public static class: java.lang.Class<com.google.android.material.datepicker.DaysOfWeekAdapter>;
                        public constructor();
                        public getView(this_: number, position: globalAndroid.view.View, convertView: globalAndroid.view.ViewGroup): globalAndroid.view.View;
                        public getCount(): number;
                        public constructor(firstDayOfWeek: number);
                        public getItem(position: number): java.lang.Integer;
                        public getItemId(position: number): number;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export class MaterialCalendar<S> extends com.google.android.material.datepicker.PickerFragment<any> {
                        public static class: java.lang.Class<com.google.android.material.datepicker.MaterialCalendar<any>>;
                        public constructor();
                        public onCreateView(orientation: globalAndroid.view.LayoutInflater, this_: globalAndroid.view.ViewGroup, layoutInflater: globalAndroid.os.Bundle): globalAndroid.view.View;
                        public static newInstance(dateSelector: com.google.android.material.datepicker.DateSelector<any>, themeResId: number, calendarConstraints: com.google.android.material.datepicker.CalendarConstraints): com.google.android.material.datepicker.MaterialCalendar<any>;
                        public onSaveInstanceState(bundle: globalAndroid.os.Bundle): void;
                        public static newInstance(dateSelector: com.google.android.material.datepicker.DateSelector<any>, themeResId: number, calendarConstraints: com.google.android.material.datepicker.CalendarConstraints, dayViewDecorator: com.google.android.material.datepicker.DayViewDecorator): com.google.android.material.datepicker.MaterialCalendar<any>;
                        public addOnSelectionChangedListener(listener: com.google.android.material.datepicker.OnSelectionChangedListener<any>): boolean;
                        public getDateSelector(): com.google.android.material.datepicker.DateSelector<any>;
                        public onCreate(bundle: globalAndroid.os.Bundle): void;
                    }
                    export module MaterialCalendar {
                        export class CalendarSelector {
                            public static class: java.lang.Class<com.google.android.material.datepicker.MaterialCalendar.CalendarSelector>;
                            public static DAY: com.google.android.material.datepicker.MaterialCalendar.CalendarSelector;
                            public static YEAR: com.google.android.material.datepicker.MaterialCalendar.CalendarSelector;
                            public static valueOf(name: string): com.google.android.material.datepicker.MaterialCalendar.CalendarSelector;
                            public static values(): androidNative.Array<com.google.android.material.datepicker.MaterialCalendar.CalendarSelector>;
                        }
                        export class OnDayClickListener {
                            public static class: java.lang.Class<com.google.android.material.datepicker.MaterialCalendar.OnDayClickListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.datepicker.MaterialCalendar$OnDayClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onDayClick(param0: number): void;
                            });
                            public constructor();
                            public onDayClick(param0: number): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export class MaterialCalendarGridView {
                        public static class: java.lang.Class<com.google.android.material.datepicker.MaterialCalendarGridView>;
                        public getAdapter(): com.google.android.material.datepicker.MonthAdapter;
                        public onAttachedToWindow(): void;
                        public onFocusChanged(gainFocus: boolean, direction: number, previouslyFocusedRect: globalAndroid.graphics.Rect): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
                        public setSelection(position: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public onDraw(rangeHighlightStart: globalAndroid.graphics.Canvas): void;
                        public constructor(context: globalAndroid.content.Context);
                        public setAdapter(adapter: globalAndroid.widget.ListAdapter): void;
                        public onMeasure(params: number, this_: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export class MaterialDatePicker<S> extends androidx.fragment.app.DialogFragment {
                        public static class: java.lang.Class<com.google.android.material.datepicker.MaterialDatePicker<any>>;
                        public static INPUT_MODE_CALENDAR: number = 0;
                        public static INPUT_MODE_TEXT: number = 1;
                        public removeOnDismissListener(onDismissListener: globalAndroid.content.DialogInterface.OnDismissListener): boolean;
                        public onCancel(this_: globalAndroid.content.DialogInterface): void;
                        public static todayInUtcMilliseconds(): number;
                        public addOnCancelListener(onCancelListener: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
                        public addOnPositiveButtonClickListener(onPositiveButtonClickListener: com.google.android.material.datepicker.MaterialPickerOnPositiveButtonClickListener<any>): boolean;
                        public addOnDismissListener(onDismissListener: globalAndroid.content.DialogInterface.OnDismissListener): boolean;
                        public static thisMonthInUtcMilliseconds(): number;
                        public getSelection(): any;
                        public clearOnPositiveButtonClickListeners(): void;
                        public constructor();
                        public removeOnPositiveButtonClickListener(onPositiveButtonClickListener: com.google.android.material.datepicker.MaterialPickerOnPositiveButtonClickListener<any>): boolean;
                        public removeOnCancelListener(onCancelListener: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
                        public clearOnNegativeButtonClickListeners(): void;
                        public onDismiss(this_: globalAndroid.content.DialogInterface): void;
                        public onCreateView(pane: globalAndroid.view.LayoutInflater, this_: globalAndroid.view.ViewGroup, layoutInflater: globalAndroid.os.Bundle): globalAndroid.view.View;
                        public onStop(): void;
                        public addOnNegativeButtonClickListener(onNegativeButtonClickListener: globalAndroid.view.View.OnClickListener): boolean;
                        public removeOnNegativeButtonClickListener(onNegativeButtonClickListener: globalAndroid.view.View.OnClickListener): boolean;
                        public getHeaderText(): string;
                        public onSaveInstanceState(bundle: globalAndroid.os.Bundle): void;
                        public clearOnCancelListeners(): void;
                        public onStart(): void;
                        public clearOnDismissListeners(): void;
                        public onCreate(bundle: globalAndroid.os.Bundle): void;
                        public onCreateDialog(bundle: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
                    }
                    export module MaterialDatePicker {
                        export class Builder<S> extends java.lang.Object {
                            public static class: java.lang.Class<com.google.android.material.datepicker.MaterialDatePicker.Builder<any>>;
                            public build(): com.google.android.material.datepicker.MaterialDatePicker<S>;
                            public setTitleText(charSequence: string): com.google.android.material.datepicker.MaterialDatePicker.Builder<S>;
                            public setTitleText(titleTextResId: number): com.google.android.material.datepicker.MaterialDatePicker.Builder<S>;
                            public setPositiveButtonText(text: string): com.google.android.material.datepicker.MaterialDatePicker.Builder<S>;
                            public setTheme(themeResId: number): com.google.android.material.datepicker.MaterialDatePicker.Builder<S>;
                            public static dateRangePicker(): com.google.android.material.datepicker.MaterialDatePicker.Builder<androidx.core.util.Pair<java.lang.Long, java.lang.Long>>;
                            public setNegativeButtonText(text: string): com.google.android.material.datepicker.MaterialDatePicker.Builder<S>;
                            public setTextInputFormat(format: java.text.SimpleDateFormat): com.google.android.material.datepicker.MaterialDatePicker.Builder<S>;
                            public setNegativeButtonText(textId: number): com.google.android.material.datepicker.MaterialDatePicker.Builder<S>;
                            public setSelection(selection: S): com.google.android.material.datepicker.MaterialDatePicker.Builder<S>;
                            public setCalendarConstraints(bounds: com.google.android.material.datepicker.CalendarConstraints): com.google.android.material.datepicker.MaterialDatePicker.Builder<S>;
                            public setInputMode(inputMode: number): com.google.android.material.datepicker.MaterialDatePicker.Builder<S>;
                            public static customDatePicker(dateSelector: com.google.android.material.datepicker.DateSelector<any>): com.google.android.material.datepicker.MaterialDatePicker.Builder<any>;
                            public setDayViewDecorator(dayViewDecorator: com.google.android.material.datepicker.DayViewDecorator): com.google.android.material.datepicker.MaterialDatePicker.Builder<S>;
                            public static datePicker(): com.google.android.material.datepicker.MaterialDatePicker.Builder<java.lang.Long>;
                            public setPositiveButtonText(textId: number): com.google.android.material.datepicker.MaterialDatePicker.Builder<S>;
                        }
                        export class InputMode {
                            public static class: java.lang.Class<com.google.android.material.datepicker.MaterialDatePicker.InputMode>;
                            /**
                             * Constructs a new instance of the com.google.android.material.datepicker.MaterialDatePicker$InputMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export class MaterialPickerOnPositiveButtonClickListener<S> extends java.lang.Object {
                        public static class: java.lang.Class<com.google.android.material.datepicker.MaterialPickerOnPositiveButtonClickListener<any>>;
                        /**
                         * Constructs a new instance of the com.google.android.material.datepicker.MaterialPickerOnPositiveButtonClickListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            onPositiveButtonClick(param0: S): void;
                        });
                        public constructor();
                        public onPositiveButtonClick(param0: S): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export class MaterialStyledDatePickerDialog {
                        public static class: java.lang.Class<com.google.android.material.datepicker.MaterialStyledDatePickerDialog>;
                        public constructor(context: globalAndroid.content.Context, listener: globalAndroid.app.DatePickerDialog.OnDateSetListener, year: number, month: number, dayOfMonth: number);
                        public constructor(context: globalAndroid.content.Context, themeResId: number, listener: globalAndroid.app.DatePickerDialog.OnDateSetListener, year: number, monthOfYear: number, dayOfMonth: number);
                        public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
                        public constructor(context: globalAndroid.content.Context, themeResId: number);
                        public constructor(context: globalAndroid.content.Context);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export class MaterialTextInputPicker<S> extends com.google.android.material.datepicker.PickerFragment<any> {
                        public static class: java.lang.Class<com.google.android.material.datepicker.MaterialTextInputPicker<any>>;
                        public constructor();
                        public onCreateView(layoutInflater: globalAndroid.view.LayoutInflater, viewGroup: globalAndroid.view.ViewGroup, bundle: globalAndroid.os.Bundle): globalAndroid.view.View;
                        public onSaveInstanceState(bundle: globalAndroid.os.Bundle): void;
                        public getDateSelector(): com.google.android.material.datepicker.DateSelector<any>;
                        public onCreate(bundle: globalAndroid.os.Bundle): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export class Month extends java.lang.Object {
                        public static class: java.lang.Class<com.google.android.material.datepicker.Month>;
                        public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.datepicker.Month>;
                        public describeContents(): number;
                        public hashCode(): number;
                        public equals(o: any): boolean;
                        public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
                        public compareTo(other: com.google.android.material.datepicker.Month): number;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export class MonthAdapter {
                        public static class: java.lang.Class<com.google.android.material.datepicker.MonthAdapter>;
                        public getItem(position: number): java.lang.Long;
                        public getView(locale: number, this_: globalAndroid.view.View, position: globalAndroid.view.ViewGroup): globalAndroid.widget.TextView;
                        public getCount(): number;
                        public hasStableIds(): boolean;
                        public updateSelectedStates(date: com.google.android.material.datepicker.MaterialCalendarGridView): void;
                        public getItemId(position: number): number;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export class MonthsPagerAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.google.android.material.datepicker.MonthsPagerAdapter.ViewHolder> {
                        public static class: java.lang.Class<com.google.android.material.datepicker.MonthsPagerAdapter>;
                        public getItemCount(): number;
                        public onBindViewHolder(this_: com.google.android.material.datepicker.MonthsPagerAdapter.ViewHolder, viewHolder: number): void;
                        public onCreateViewHolder(viewGroup: globalAndroid.view.ViewGroup, viewType: number): com.google.android.material.datepicker.MonthsPagerAdapter.ViewHolder;
                        public getItemId(position: number): number;
                    }
                    export module MonthsPagerAdapter {
                        export class ViewHolder {
                            public static class: java.lang.Class<com.google.android.material.datepicker.MonthsPagerAdapter.ViewHolder>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export abstract class OnSelectionChangedListener<S> extends java.lang.Object {
                        public static class: java.lang.Class<com.google.android.material.datepicker.OnSelectionChangedListener<any>>;
                        public onIncompleteSelectionChanged(): void;
                        public constructor();
                        public onSelectionChanged(param0: S): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export abstract class PickerFragment<S> extends androidx.fragment.app.Fragment {
                        public static class: java.lang.Class<com.google.android.material.datepicker.PickerFragment<any>>;
                        public onSelectionChangedListeners: java.util.LinkedHashSet<com.google.android.material.datepicker.OnSelectionChangedListener<any>>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export class RangeDateSelector extends com.google.android.material.datepicker.DateSelector<androidx.core.util.Pair<java.lang.Long, java.lang.Long>> {
                        public static class: java.lang.Class<com.google.android.material.datepicker.RangeDateSelector>;
                        public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.datepicker.RangeDateSelector>;
                        public onCreateTextInputView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle, param3: com.google.android.material.datepicker.CalendarConstraints, param4: com.google.android.material.datepicker.OnSelectionChangedListener<any>): globalAndroid.view.View;
                        public getSelection(): androidx.core.util.Pair<java.lang.Long, java.lang.Long>;
                        public getDefaultTitleResId(): number;
                        public setTextInputFormat(param0: java.text.SimpleDateFormat): void;
                        public setSelection(selection: androidx.core.util.Pair<java.lang.Long, java.lang.Long>): void;
                        public getSelectedDays(): java.util.Collection<java.lang.Long>;
                        public getSelectionContentDescription(context: globalAndroid.content.Context): string;
                        public select(param0: number): void;
                        public getSelectedRanges(): java.util.Collection<androidx.core.util.Pair<java.lang.Long, java.lang.Long>>;
                        public setTextInputFormat(format: java.text.SimpleDateFormat): void;
                        public getSelectionDisplayString(context: globalAndroid.content.Context): string;
                        public getSelection(): any;
                        public onCreateTextInputView(layoutInflater: globalAndroid.view.LayoutInflater, viewGroup: globalAndroid.view.ViewGroup, bundle: globalAndroid.os.Bundle, constraints: com.google.android.material.datepicker.CalendarConstraints, listener: com.google.android.material.datepicker.OnSelectionChangedListener<androidx.core.util.Pair<java.lang.Long, java.lang.Long>>): globalAndroid.view.View;
                        public constructor();
                        public describeContents(): number;
                        public getSelectionDisplayString(param0: globalAndroid.content.Context): string;
                        public getSelectionContentDescription(param0: globalAndroid.content.Context): string;
                        public static showKeyboardWithAutoHideBehavior(editText: androidNative.Array<globalAndroid.widget.EditText>): void;
                        public select(selection: number): void;
                        public getDefaultThemeResId(context: globalAndroid.content.Context): number;
                        public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
                        public getDefaultThemeResId(param0: globalAndroid.content.Context): number;
                        public setSelection(param0: any): void;
                        public getError(): string;
                        public isSelectionComplete(): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export class SingleDateSelector extends com.google.android.material.datepicker.DateSelector<java.lang.Long> {
                        public static class: java.lang.Class<com.google.android.material.datepicker.SingleDateSelector>;
                        public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.datepicker.SingleDateSelector>;
                        public onCreateTextInputView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle, param3: com.google.android.material.datepicker.CalendarConstraints, param4: com.google.android.material.datepicker.OnSelectionChangedListener<any>): globalAndroid.view.View;
                        public getSelection(): java.lang.Long;
                        public getDefaultTitleResId(): number;
                        public setTextInputFormat(param0: java.text.SimpleDateFormat): void;
                        public getSelectedDays(): java.util.Collection<java.lang.Long>;
                        public getSelectionContentDescription(context: globalAndroid.content.Context): string;
                        public select(param0: number): void;
                        public onCreateTextInputView(layoutInflater: globalAndroid.view.LayoutInflater, viewGroup: globalAndroid.view.ViewGroup, bundle: globalAndroid.os.Bundle, constraints: com.google.android.material.datepicker.CalendarConstraints, listener: com.google.android.material.datepicker.OnSelectionChangedListener<java.lang.Long>): globalAndroid.view.View;
                        public getSelectedRanges(): java.util.Collection<androidx.core.util.Pair<java.lang.Long, java.lang.Long>>;
                        public setTextInputFormat(format: java.text.SimpleDateFormat): void;
                        public getSelectionDisplayString(context: globalAndroid.content.Context): string;
                        public getSelection(): any;
                        public constructor();
                        public describeContents(): number;
                        public getSelectionDisplayString(param0: globalAndroid.content.Context): string;
                        public getSelectionContentDescription(param0: globalAndroid.content.Context): string;
                        public static showKeyboardWithAutoHideBehavior(editText: androidNative.Array<globalAndroid.widget.EditText>): void;
                        public select(selection: number): void;
                        public getDefaultThemeResId(context: globalAndroid.content.Context): number;
                        public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
                        public getDefaultThemeResId(param0: globalAndroid.content.Context): number;
                        public setSelection(param0: any): void;
                        public getError(): string;
                        public setSelection(selection: java.lang.Long): void;
                        public isSelectionComplete(): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export class SmoothCalendarLayoutManager {
                        public static class: java.lang.Class<com.google.android.material.datepicker.SmoothCalendarLayoutManager>;
                        public smoothScrollToPosition(recyclerView: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State, position: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export class TimeSource {
                        public static class: java.lang.Class<com.google.android.material.datepicker.TimeSource>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export class UtcDates {
                        public static class: java.lang.Class<com.google.android.material.datepicker.UtcDates>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module datepicker {
                    export class YearGridAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.google.android.material.datepicker.YearGridAdapter.ViewHolder> {
                        public static class: java.lang.Class<com.google.android.material.datepicker.YearGridAdapter>;
                        public onCreateViewHolder(viewGroup: globalAndroid.view.ViewGroup, viewType: number): com.google.android.material.datepicker.YearGridAdapter.ViewHolder;
                        public getItemCount(): number;
                        public onBindViewHolder(this_: com.google.android.material.datepicker.YearGridAdapter.ViewHolder, viewHolder: number): void;
                    }
                    export module YearGridAdapter {
                        export class ViewHolder {
                            public static class: java.lang.Class<com.google.android.material.datepicker.YearGridAdapter.ViewHolder>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module dialog {
                    export class InsetDialogOnTouchListener {
                        public static class: java.lang.Class<com.google.android.material.dialog.InsetDialogOnTouchListener>;
                        public constructor(dialog: globalAndroid.app.Dialog, insets: globalAndroid.graphics.Rect);
                        public onTouch(view: globalAndroid.view.View, event: globalAndroid.view.MotionEvent): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module dialog {
                    export class MaterialAlertDialogBuilder {
                        public static class: java.lang.Class<com.google.android.material.dialog.MaterialAlertDialogBuilder>;
                        public setNeutralButton(textId: number, listener: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setItems(itemsId: number, listener: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setCustomTitle(customTitleView: globalAndroid.view.View): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public getBackground(): globalAndroid.graphics.drawable.Drawable;
                        public setTitle(titleId: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setOnCancelListener(onCancelListener: globalAndroid.content.DialogInterface.OnCancelListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setPositiveButtonIcon(icon: globalAndroid.graphics.drawable.Drawable): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setSingleChoiceItems(itemsId: number, checkedItem: number, listener: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setSingleChoiceItems(cursor: globalAndroid.database.Cursor, checkedItem: number, labelColumn: string, listener: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setNegativeButton(text: string, listener: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setMultiChoiceItems(items: androidNative.Array<string>, checkedItems: androidNative.Array<boolean>, listener: globalAndroid.content.DialogInterface.OnMultiChoiceClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setTitle(title: string): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setIconAttribute(attrId: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setNeutralButtonIcon(icon: globalAndroid.graphics.drawable.Drawable): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setSingleChoiceItems(adapter: globalAndroid.widget.ListAdapter, checkedItem: number, listener: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setOnKeyListener(onKeyListener: globalAndroid.content.DialogInterface.OnKeyListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setItems(items: androidNative.Array<string>, listener: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setMessage(messageId: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setBackgroundInsetTop(backgroundInsetTop: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setIcon(icon: globalAndroid.graphics.drawable.Drawable): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public create(): androidx.appcompat.app.AlertDialog;
                        public setMessage(message: string): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setMultiChoiceItems(itemsId: number, checkedItems: androidNative.Array<boolean>, listener: globalAndroid.content.DialogInterface.OnMultiChoiceClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setBackgroundInsetEnd(backgroundInsetEnd: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setOnItemSelectedListener(listener: globalAndroid.widget.AdapterView.OnItemSelectedListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setPositiveButton(text: string, listener: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setIcon(iconId: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setOnDismissListener(onDismissListener: globalAndroid.content.DialogInterface.OnDismissListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setAdapter(adapter: globalAndroid.widget.ListAdapter, listener: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setSingleChoiceItems(items: androidNative.Array<string>, checkedItem: number, listener: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setView(layoutResId: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setCursor(cursor: globalAndroid.database.Cursor, listener: globalAndroid.content.DialogInterface.OnClickListener, labelColumn: string): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setView(view: globalAndroid.view.View): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setBackgroundInsetStart(backgroundInsetStart: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setCancelable(cancelable: boolean): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setBackgroundInsetBottom(backgroundInsetBottom: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setNegativeButtonIcon(icon: globalAndroid.graphics.drawable.Drawable): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setMultiChoiceItems(cursor: globalAndroid.database.Cursor, isCheckedColumn: string, labelColumn: string, listener: globalAndroid.content.DialogInterface.OnMultiChoiceClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setBackground(background: globalAndroid.graphics.drawable.Drawable): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public setPositiveButton(textId: number, listener: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public constructor(dialogCornerRadius: globalAndroid.content.Context, this_: number);
                        public setNegativeButton(textId: number, listener: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                        public constructor(context: globalAndroid.content.Context);
                        public setNeutralButton(text: string, listener: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module dialog {
                    export class MaterialDialogs {
                        public static class: java.lang.Class<com.google.android.material.dialog.MaterialDialogs>;
                        public static insetDrawable(drawable: globalAndroid.graphics.drawable.Drawable, backgroundInsets: globalAndroid.graphics.Rect): globalAndroid.graphics.drawable.InsetDrawable;
                        public static getDialogBackgroundInsets(layoutDirection: globalAndroid.content.Context, context: number, defaultStyleAttribute: number): globalAndroid.graphics.Rect;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module divider {
                    export class MaterialDivider {
                        public static class: java.lang.Class<com.google.android.material.divider.MaterialDivider>;
                        public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
                        public getDividerInsetStart(): number;
                        public setDividerInsetEnd(insetEnd: number): void;
                        public getDividerThickness(): number;
                        public setDividerInsetStart(insetStart: number): void;
                        public setDividerInsetEndResource(insetEndId: number): void;
                        public setDividerColor(color: number): void;
                        public setDividerInsetStartResource(insetStartId: number): void;
                        public getDividerInsetEnd(): number;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public onDraw(canvas: globalAndroid.graphics.Canvas): void;
                        public setDividerThickness(thickness: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public setDividerThicknessResource(thicknessId: number): void;
                        public setDividerColorResource(colorId: number): void;
                        public getDividerColor(): number;
                        public constructor(context: globalAndroid.content.Context);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module divider {
                    export class MaterialDividerItemDecoration {
                        public static class: java.lang.Class<com.google.android.material.divider.MaterialDividerItemDecoration>;
                        public static HORIZONTAL: number = 0;
                        public static VERTICAL: number = 1;
                        public setDividerColorResource(context: globalAndroid.content.Context, colorId: number): void;
                        public getDividerInsetStart(): number;
                        public setLastItemDecorated(lastItemDecorated: boolean): void;
                        public setDividerThicknessResource(context: globalAndroid.content.Context, thicknessId: number): void;
                        public shouldDrawDivider(position: number, adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>): boolean;
                        public setOrientation(orientation: number): void;
                        public setDividerInsetEnd(insetEnd: number): void;
                        public getItemOffsets(outRect: globalAndroid.graphics.Rect, view: globalAndroid.view.View, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
                        public getDividerThickness(): number;
                        public setDividerColor(color: number): void;
                        public setDividerInsetStart(insetStart: number): void;
                        public onDraw(canvas: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
                        public setDividerInsetStartResource(context: globalAndroid.content.Context, insetStartId: number): void;
                        public getDividerInsetEnd(): number;
                        public setDividerInsetEndResource(context: globalAndroid.content.Context, insetEndId: number): void;
                        public isLastItemDecorated(): boolean;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, orientation: number);
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, orientation: number);
                        public setDividerThickness(thickness: number): void;
                        public constructor(context: globalAndroid.content.Context, orientation: number);
                        public getDividerColor(): number;
                        public getOrientation(): number;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module drawable {
                    export class DrawableUtils {
                        public static class: java.lang.Class<com.google.android.material.drawable.DrawableUtils>;
                        public static parseDrawableXml(parser: globalAndroid.content.Context, type: number, attrs: string): globalAndroid.util.AttributeSet;
                        public static createTintableDrawableIfNeeded(drawable: globalAndroid.graphics.drawable.Drawable, tintList: globalAndroid.content.res.ColorStateList, tintMode: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.graphics.drawable.Drawable;
                        public static getUncheckedState(subState: androidNative.Array<number>): androidNative.Array<number>;
                        public static setTint(drawable: globalAndroid.graphics.drawable.Drawable, color: number): void;
                        public static setRippleDrawableRadius(setMaxRadiusMethod: globalAndroid.graphics.drawable.RippleDrawable, e: number): void;
                        public static getCheckedState(newState: androidNative.Array<number>): androidNative.Array<number>;
                        public static createTintableMutatedDrawableIfNeeded(drawable: globalAndroid.graphics.drawable.Drawable, tintList: globalAndroid.content.res.ColorStateList, tintMode: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.graphics.drawable.Drawable;
                        public static setOutlineToPath(outline: any, path: globalAndroid.graphics.Path): void;
                        public static updateTintFilter(drawable: globalAndroid.graphics.drawable.Drawable, tint: globalAndroid.content.res.ColorStateList, tintMode: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.graphics.PorterDuffColorFilter;
                        public static compositeTwoLayeredDrawable(topLayerNewWidth: globalAndroid.graphics.drawable.Drawable, topLayerNewHeight: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module elevation {
                    export class ElevationOverlayProvider {
                        public static class: java.lang.Class<com.google.android.material.elevation.ElevationOverlayProvider>;
                        public compositeOverlayIfNeeded(backgroundColor: number, elevation: number): number;
                        public getThemeSurfaceColor(): number;
                        public compositeOverlayIfNeeded(backgroundColor: number, elevation: number, overlayView: globalAndroid.view.View): number;
                        public isThemeElevationOverlayEnabled(): boolean;
                        public compositeOverlay(backgroundColor: number, elevation: number, overlayView: globalAndroid.view.View): number;
                        public compositeOverlay(this_: number, backgroundColor: number): number;
                        public calculateOverlayAlpha(elevation: number): number;
                        public compositeOverlayWithThemeSurfaceColorIfNeeded(elevation: number): number;
                        public compositeOverlayWithThemeSurfaceColorIfNeeded(elevation: number, overlayView: globalAndroid.view.View): number;
                        public calculateOverlayAlphaFraction(elevation: number): number;
                        public constructor(elevationOverlayEnabled: boolean, elevationOverlayColor: number, elevationOverlayAccentColor: number, colorSurface: number, displayDensity: number);
                        public getParentAbsoluteElevation(overlayView: globalAndroid.view.View): number;
                        public getThemeElevationOverlayColor(): number;
                        public constructor(context: globalAndroid.content.Context);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module elevation {
                    export class SurfaceColors {
                        public static class: java.lang.Class<com.google.android.material.elevation.SurfaceColors>;
                        public static SURFACE_0: com.google.android.material.elevation.SurfaceColors;
                        public static SURFACE_1: com.google.android.material.elevation.SurfaceColors;
                        public static SURFACE_2: com.google.android.material.elevation.SurfaceColors;
                        public static SURFACE_3: com.google.android.material.elevation.SurfaceColors;
                        public static SURFACE_4: com.google.android.material.elevation.SurfaceColors;
                        public static SURFACE_5: com.google.android.material.elevation.SurfaceColors;
                        public static values(): androidNative.Array<com.google.android.material.elevation.SurfaceColors>;
                        public static getColorForElevation(context: globalAndroid.content.Context, elevation: number): number;
                        public static valueOf(name: string): com.google.android.material.elevation.SurfaceColors;
                        public getColor(context: globalAndroid.content.Context): number;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module expandable {
                    export class ExpandableTransformationWidget extends com.google.android.material.expandable.ExpandableWidget {
                        public static class: java.lang.Class<com.google.android.material.expandable.ExpandableTransformationWidget>;
                        /**
                         * Constructs a new instance of the com.google.android.material.expandable.ExpandableTransformationWidget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            getExpandedComponentIdHint(): number;
                            setExpandedComponentIdHint(param0: number): void;
                            isExpanded(): boolean;
                            setExpanded(param0: boolean): boolean;
                        });
                        public constructor();
                        public getExpandedComponentIdHint(): number;
                        public setExpandedComponentIdHint(param0: number): void;
                        public isExpanded(): boolean;
                        public setExpanded(param0: boolean): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module expandable {
                    export class ExpandableWidget {
                        public static class: java.lang.Class<com.google.android.material.expandable.ExpandableWidget>;
                        /**
                         * Constructs a new instance of the com.google.android.material.expandable.ExpandableWidget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            isExpanded(): boolean;
                            setExpanded(param0: boolean): boolean;
                        });
                        public constructor();
                        public isExpanded(): boolean;
                        public setExpanded(param0: boolean): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module expandable {
                    export class ExpandableWidgetHelper {
                        public static class: java.lang.Class<com.google.android.material.expandable.ExpandableWidgetHelper>;
                        public getExpandedComponentIdHint(): number;
                        public constructor(widget: com.google.android.material.expandable.ExpandableWidget);
                        public setExpanded(expanded: boolean): boolean;
                        public onSaveInstanceState(): globalAndroid.os.Bundle;
                        public setExpandedComponentIdHint(expandedComponentIdHint: number): void;
                        public isExpanded(): boolean;
                        public onRestoreInstanceState(state: globalAndroid.os.Bundle): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module floatingactionbutton {
                    export class AnimatorTracker {
                        public static class: java.lang.Class<com.google.android.material.floatingactionbutton.AnimatorTracker>;
                        public onNextAnimationStart(animator: globalAndroid.animation.Animator): void;
                        public clear(): void;
                        public cancelCurrent(): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module floatingactionbutton {
                    export abstract class BaseMotionStrategy extends com.google.android.material.floatingactionbutton.MotionStrategy {
                        public static class: java.lang.Class<com.google.android.material.floatingactionbutton.BaseMotionStrategy>;
                        public getCurrentMotionSpec(): com.google.android.material.animation.MotionSpec;
                        public performNow(): void;
                        public getListeners(): java.util.List<globalAndroid.animation.Animator.AnimatorListener>;
                        public onAnimationStart(animator: globalAndroid.animation.Animator): void;
                        public removeAnimationListener(listener: globalAndroid.animation.Animator.AnimatorListener): void;
                        public addAnimationListener(listener: globalAndroid.animation.Animator.AnimatorListener): void;
                        public onChange(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedCallback): void;
                        public shouldCancel(): boolean;
                        public addAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
                        public createAnimator(): globalAndroid.animation.AnimatorSet;
                        public getDefaultMotionSpecResource(): number;
                        public removeAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
                        public onAnimationCancel(): void;
                        public setMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
                        public setMotionSpec(motionSpec: com.google.android.material.animation.MotionSpec): void;
                        public onAnimationEnd(): void;
                        public onAnimationStart(param0: globalAndroid.animation.Animator): void;
                        public getMotionSpec(): com.google.android.material.animation.MotionSpec;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module floatingactionbutton {
                    export class BorderDrawable {
                        public static class: java.lang.Class<com.google.android.material.floatingactionbutton.BorderDrawable>;
                        public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
                        public draw(canvas: globalAndroid.graphics.Canvas): void;
                        public setShapeAppearanceModel(shapeAppearanceModel: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public getBoundsAsRectF(): globalAndroid.graphics.RectF;
                        public getOpacity(): number;
                        public setColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): void;
                        public onBoundsChange(bounds: globalAndroid.graphics.Rect): void;
                        public isStateful(): boolean;
                        public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
                        public getPadding(this_: globalAndroid.graphics.Rect): boolean;
                        public setAlpha(alpha: number): void;
                        public onStateChange(this_: androidNative.Array<number>): boolean;
                        public setBorderWidth(width: number): void;
                        public getOutline(this_: any): void;
                    }
                    export module BorderDrawable {
                        export class BorderState {
                            public static class: java.lang.Class<com.google.android.material.floatingactionbutton.BorderDrawable.BorderState>;
                            public newDrawable(): globalAndroid.graphics.drawable.Drawable;
                            public getChangingConfigurations(): number;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module floatingactionbutton {
                    export class ExtendedFloatingActionButton extends com.google.android.material.button.MaterialButton {
                        public static class: java.lang.Class<com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton>;
                        public originalTextCsl: globalAndroid.content.res.ColorStateList;
                        public setExtendMotionSpec(spec: com.google.android.material.animation.MotionSpec): void;
                        public addOnShrinkAnimationListener(listener: globalAndroid.animation.Animator.AnimatorListener): void;
                        public setTextColor(colors: globalAndroid.content.res.ColorStateList): void;
                        public onAttachedToWindow(): void;
                        public shrink(): void;
                        public setHideMotionSpecResource(id: number): void;
                        public setShrinkMotionSpecResource(id: number): void;
                        public shrink(callback: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedCallback): void;
                        public hide(callback: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedCallback): void;
                        public getBehavior(): androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton>;
                        public getExtendMotionSpec(): com.google.android.material.animation.MotionSpec;
                        public isExtended(): boolean;
                        public show(callback: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedCallback): void;
                        public getHideMotionSpec(): com.google.android.material.animation.MotionSpec;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public removeOnHideAnimationListener(listener: globalAndroid.animation.Animator.AnimatorListener): void;
                        public addOnShowAnimationListener(listener: globalAndroid.animation.Animator.AnimatorListener): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public removeOnShowAnimationListener(listener: globalAndroid.animation.Animator.AnimatorListener): void;
                        public addOnHideAnimationListener(listener: globalAndroid.animation.Animator.AnimatorListener): void;
                        public setPaddingRelative(start: number, top: number, end: number, bottom: number): void;
                        public removeOnExtendAnimationListener(listener: globalAndroid.animation.Animator.AnimatorListener): void;
                        public setHideMotionSpec(spec: com.google.android.material.animation.MotionSpec): void;
                        public silentlyUpdateTextColor(csl: globalAndroid.content.res.ColorStateList): void;
                        public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public hide(): void;
                        public addOnExtendAnimationListener(listener: globalAndroid.animation.Animator.AnimatorListener): void;
                        public getShowMotionSpec(): com.google.android.material.animation.MotionSpec;
                        public extend(): void;
                        public setShowMotionSpec(spec: com.google.android.material.animation.MotionSpec): void;
                        public setTextColor(color: number): void;
                        public setPadding(left: number, top: number, right: number, bottom: number): void;
                        public setExtended(extended: boolean): void;
                        public setExtendMotionSpecResource(id: number): void;
                        public setShrinkMotionSpec(spec: com.google.android.material.animation.MotionSpec): void;
                        public setShowMotionSpecResource(id: number): void;
                        public extend(callback: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedCallback): void;
                        public show(): void;
                        public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
                        public removeOnShrinkAnimationListener(listener: globalAndroid.animation.Animator.AnimatorListener): void;
                        public getShrinkMotionSpec(): com.google.android.material.animation.MotionSpec;
                        public setAnimateShowBeforeLayout(animateShowBeforeLayout: boolean): void;
                        public constructor(context: globalAndroid.content.Context);
                    }
                    export module ExtendedFloatingActionButton {
                        export class ChangeSizeStrategy extends com.google.android.material.floatingactionbutton.BaseMotionStrategy {
                            public static class: java.lang.Class<com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.ChangeSizeStrategy>;
                            public removeAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
                            public setMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
                            public getMotionSpec(): com.google.android.material.animation.MotionSpec;
                            public shouldCancel(): boolean;
                            public onChange(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedCallback): void;
                            public addAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
                            public onAnimationEnd(): void;
                            public onAnimationStart(param0: globalAndroid.animation.Animator): void;
                            public onAnimationCancel(): void;
                            public getListeners(): java.util.List<globalAndroid.animation.Animator.AnimatorListener>;
                            public createAnimator(): globalAndroid.animation.AnimatorSet;
                            public getCurrentMotionSpec(): com.google.android.material.animation.MotionSpec;
                            public performNow(): void;
                            public getDefaultMotionSpecResource(): number;
                            public onChange(callback: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedCallback): void;
                            public onAnimationStart(animator: globalAndroid.animation.Animator): void;
                        }
                        export class ExtendedFloatingActionButtonBehavior<T> extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any> {
                            public static class: java.lang.Class<com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.ExtendedFloatingActionButtonBehavior<any>>;
                            public constructor();
                            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                            public onAttachedToLayoutParams(lp: androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams): void;
                            public onDependentViewChanged(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton, dependency: globalAndroid.view.View): boolean;
                            public onLayoutChild(i: androidx.coordinatorlayout.widget.CoordinatorLayout, count: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton, this_: number): boolean;
                            public extendOrShow(fab: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton): void;
                            public isAutoHideEnabled(): boolean;
                            public getInsetDodgeRect(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton, rect: globalAndroid.graphics.Rect): boolean;
                            public setAutoShrinkEnabled(autoShrink: boolean): void;
                            public shrinkOrHide(fab: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton): void;
                            public setAutoHideEnabled(autoHide: boolean): void;
                            public isAutoShrinkEnabled(): boolean;
                        }
                        export class HideStrategy extends com.google.android.material.floatingactionbutton.BaseMotionStrategy {
                            public static class: java.lang.Class<com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.HideStrategy>;
                            public removeAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
                            public setMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
                            public getMotionSpec(): com.google.android.material.animation.MotionSpec;
                            public constructor(this$0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton, animatorTracker: com.google.android.material.floatingactionbutton.AnimatorTracker);
                            public shouldCancel(): boolean;
                            public onChange(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedCallback): void;
                            public addAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
                            public onAnimationEnd(): void;
                            public onAnimationStart(param0: globalAndroid.animation.Animator): void;
                            public onAnimationCancel(): void;
                            public getListeners(): java.util.List<globalAndroid.animation.Animator.AnimatorListener>;
                            public createAnimator(): globalAndroid.animation.AnimatorSet;
                            public getCurrentMotionSpec(): com.google.android.material.animation.MotionSpec;
                            public performNow(): void;
                            public getDefaultMotionSpecResource(): number;
                            public onChange(callback: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedCallback): void;
                            public onAnimationStart(animator: globalAndroid.animation.Animator): void;
                        }
                        export abstract class OnChangedCallback {
                            public static class: java.lang.Class<com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedCallback>;
                            public constructor();
                            public onExtended(extendedFab: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton): void;
                            public onShrunken(extendedFab: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton): void;
                            public onShown(extendedFab: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton): void;
                            public onHidden(extendedFab: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton): void;
                        }
                        export class ShowStrategy extends com.google.android.material.floatingactionbutton.BaseMotionStrategy {
                            public static class: java.lang.Class<com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.ShowStrategy>;
                            public removeAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
                            public setMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
                            public getMotionSpec(): com.google.android.material.animation.MotionSpec;
                            public constructor(this$0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton, animatorTracker: com.google.android.material.floatingactionbutton.AnimatorTracker);
                            public shouldCancel(): boolean;
                            public onChange(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedCallback): void;
                            public addAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
                            public onAnimationEnd(): void;
                            public onAnimationStart(param0: globalAndroid.animation.Animator): void;
                            public onAnimationCancel(): void;
                            public onAnimationStart(animation: globalAndroid.animation.Animator): void;
                            public getListeners(): java.util.List<globalAndroid.animation.Animator.AnimatorListener>;
                            public createAnimator(): globalAndroid.animation.AnimatorSet;
                            public getCurrentMotionSpec(): com.google.android.material.animation.MotionSpec;
                            public performNow(): void;
                            public getDefaultMotionSpecResource(): number;
                            public onChange(callback: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedCallback): void;
                        }
                        export class Size {
                            public static class: java.lang.Class<com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.Size>;
                            /**
                             * Constructs a new instance of the com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton$Size interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                getWidth(): number;
                                getHeight(): number;
                                getPaddingStart(): number;
                                getPaddingEnd(): number;
                                getLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
                            });
                            public constructor();
                            public getWidth(): number;
                            public getHeight(): number;
                            public getPaddingEnd(): number;
                            public getPaddingStart(): number;
                            public getLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module floatingactionbutton {
                    export class FloatingActionButton extends com.google.android.material.internal.VisibilityAwareImageButton implements com.google.android.material.expandable.ExpandableTransformationWidget, com.google.android.material.shape.Shapeable {
                        public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButton>;
                        public static SIZE_MINI: number = 1;
                        public static SIZE_NORMAL: number = 0;
                        public static SIZE_AUTO: number = -1;
                        public static NO_CUSTOM_SIZE: number = 0;
                        public getCustomSize(): number;
                        public getExpandedComponentIdHint(): number;
                        public addTransformationCallback(listener: com.google.android.material.animation.TransformationCallback<any>): void;
                        public setHideMotionSpecResource(id: number): void;
                        public setBackgroundTintList(tint: globalAndroid.content.res.ColorStateList): void;
                        /** @deprecated */
                        public getContentRect(rect: globalAndroid.graphics.Rect): boolean;
                        public removeTransformationCallback(listener: com.google.android.material.animation.TransformationCallback<any>): void;
                        public setCompatHoveredFocusedTranslationZ(translationZ: number): void;
                        public setRippleColor(color: globalAndroid.content.res.ColorStateList): void;
                        public setExpandedComponentIdHint(param0: number): void;
                        public getRippleColorStateList(): globalAndroid.content.res.ColorStateList;
                        public setSupportBackgroundTintList(tint: globalAndroid.content.res.ColorStateList): void;
                        public getBehavior(): androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<com.google.android.material.floatingactionbutton.FloatingActionButton>;
                        public getSupportImageTintMode(): globalAndroid.graphics.PorterDuff.Mode;
                        public onTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
                        public getContentBackground(): globalAndroid.graphics.drawable.Drawable;
                        public setRippleColor(color: number): void;
                        public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public setBackgroundColor(color: number): void;
                        public setBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
                        public addOnShowAnimationListener(listener: globalAndroid.animation.Animator.AnimatorListener): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public setCompatHoveredFocusedTranslationZResource(id: number): void;
                        public setEnsureMinTouchTargetSize(flag: boolean): void;
                        public setExpanded(param0: boolean): boolean;
                        public addOnHideAnimationListener(listener: globalAndroid.animation.Animator.AnimatorListener): void;
                        public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
                        /** @deprecated */
                        public getRippleColor(): number;
                        public setShapeAppearanceModel(shapeAppearance: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public setHideMotionSpec(spec: com.google.android.material.animation.MotionSpec): void;
                        public setBackgroundDrawable(background: globalAndroid.graphics.drawable.Drawable): void;
                        public getCompatHoveredFocusedTranslationZ(): number;
                        public setCustomSize(size: number): void;
                        public setCompatPressedTranslationZResource(id: number): void;
                        public getUseCompatPadding(): boolean;
                        public setShadowPaddingEnabled(shadowPaddingEnabled: boolean): void;
                        public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public isOrWillBeShown(): boolean;
                        public setExpanded(expanded: boolean): boolean;
                        public clearCustomSize(): void;
                        public setScaleX(scaleX: number): void;
                        public getShowMotionSpec(): com.google.android.material.animation.MotionSpec;
                        public setUseCompatPadding(useCompatPadding: boolean): void;
                        public setShowMotionSpec(spec: com.google.android.material.animation.MotionSpec): void;
                        public jumpDrawablesToCurrentState(): void;
                        public getSize(): number;
                        public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
                        public shouldEnsureMinTouchTargetSize(): boolean;
                        public setCompatPressedTranslationZ(translationZ: number): void;
                        public setBackgroundResource(resid: number): void;
                        public setVisibility(visibility: number): void;
                        public setSupportImageTintList(tint: globalAndroid.content.res.ColorStateList): void;
                        public isExpanded(): boolean;
                        public getCompatElevation(): number;
                        public setScaleY(scaleY: number): void;
                        public getMeasuredContentRect(rect: globalAndroid.graphics.Rect): void;
                        public setMaxImageSize(imageSize: number): void;
                        public onAttachedToWindow(): void;
                        public hide(listener: com.google.android.material.floatingactionbutton.FloatingActionButton.OnVisibilityChangedListener): void;
                        public setCompatElevation(elevation: number): void;
                        public getCompatPressedTranslationZ(): number;
                        public setImageDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public show(listener: com.google.android.material.floatingactionbutton.FloatingActionButton.OnVisibilityChangedListener): void;
                        public setSize(size: number): void;
                        public drawableStateChanged(): void;
                        public getHideMotionSpec(): com.google.android.material.animation.MotionSpec;
                        public setCompatElevationResource(id: number): void;
                        public getBackgroundTintList(): globalAndroid.content.res.ColorStateList;
                        public setSupportBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
                        public removeOnHideAnimationListener(listener: globalAndroid.animation.Animator.AnimatorListener): void;
                        public removeOnShowAnimationListener(listener: globalAndroid.animation.Animator.AnimatorListener): void;
                        public isOrWillBeHidden(): boolean;
                        public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
                        public setImageResource(resId: number): void;
                        public onDetachedFromWindow(): void;
                        public setElevation(elevation: number): void;
                        public hide(): void;
                        public setTranslationZ(translationZ: number): void;
                        public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
                        public setSupportImageTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
                        public getBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
                        public setShowMotionSpecResource(id: number): void;
                        public show(): void;
                        public setTranslationY(translationY: number): void;
                        public getSupportImageTintList(): globalAndroid.content.res.ColorStateList;
                        public onSaveInstanceState(): globalAndroid.os.Parcelable;
                        public setTranslationX(translationX: number): void;
                        public setExpandedComponentIdHint(expandedComponentIdHint: number): void;
                        public constructor(context: globalAndroid.content.Context);
                    }
                    export module FloatingActionButton {
                        export class BaseBehavior<T> extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any> {
                            public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButton.BaseBehavior<any>>;
                            public constructor();
                            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                            public onAttachedToLayoutParams(lp: androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams): void;
                            public onLayoutChild(i: androidx.coordinatorlayout.widget.CoordinatorLayout, count: com.google.android.material.floatingactionbutton.FloatingActionButton, this_: number): boolean;
                            public getInsetDodgeRect(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: com.google.android.material.floatingactionbutton.FloatingActionButton, rect: globalAndroid.graphics.Rect): boolean;
                            public onDependentViewChanged(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: com.google.android.material.floatingactionbutton.FloatingActionButton, dependency: globalAndroid.view.View): boolean;
                            public isAutoHideEnabled(): boolean;
                            public setInternalAutoHideListener(listener: com.google.android.material.floatingactionbutton.FloatingActionButton.OnVisibilityChangedListener): void;
                            public setAutoHideEnabled(autoHide: boolean): void;
                        }
                        export class Behavior extends com.google.android.material.floatingactionbutton.FloatingActionButton.BaseBehavior<com.google.android.material.floatingactionbutton.FloatingActionButton> {
                            public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButton.Behavior>;
                            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                            public constructor();
                        }
                        export abstract class OnVisibilityChangedListener {
                            public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButton.OnVisibilityChangedListener>;
                            public constructor();
                            public onShown(fab: com.google.android.material.floatingactionbutton.FloatingActionButton): void;
                            public onHidden(fab: com.google.android.material.floatingactionbutton.FloatingActionButton): void;
                        }
                        export class ShadowDelegateImpl extends com.google.android.material.shadow.ShadowViewDelegate {
                            public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButton.ShadowDelegateImpl>;
                            public getRadius(): number;
                            public setBackgroundDrawable(background: globalAndroid.graphics.drawable.Drawable): void;
                            public isCompatPaddingEnabled(): boolean;
                            public setShadowPadding(left: number, top: number, right: number, bottom: number): void;
                            public setShadowPadding(param0: number, param1: number, param2: number, param3: number): void;
                            public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                        }
                        export class Size {
                            public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButton.Size>;
                            /**
                             * Constructs a new instance of the com.google.android.material.floatingactionbutton.FloatingActionButton$Size interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class TransformationCallbackWrapper<T> extends com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.InternalTransformationCallback {
                            public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButton.TransformationCallbackWrapper<any>>;
                            public hashCode(): number;
                            public equals(obj: any): boolean;
                            public onTranslationChanged(): void;
                            public onScaleChanged(): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module floatingactionbutton {
                    export class FloatingActionButtonImpl {
                        public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImpl>;
                        public removeOnHideAnimationListener(listener: globalAndroid.animation.Animator.AnimatorListener): void;
                        public addOnHideAnimationListener(listener: globalAndroid.animation.Animator.AnimatorListener): void;
                    }
                    export module FloatingActionButtonImpl {
                        export class DisabledElevationAnimation extends com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.ShadowAnimatorImpl {
                            public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.DisabledElevationAnimation>;
                            public getTargetShadowSize(): number;
                        }
                        export class ElevateToHoveredFocusedTranslationZAnimation extends com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.ShadowAnimatorImpl {
                            public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.ElevateToHoveredFocusedTranslationZAnimation>;
                            public getTargetShadowSize(): number;
                        }
                        export class ElevateToPressedTranslationZAnimation extends com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.ShadowAnimatorImpl {
                            public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.ElevateToPressedTranslationZAnimation>;
                            public getTargetShadowSize(): number;
                        }
                        export class InternalTransformationCallback {
                            public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.InternalTransformationCallback>;
                            /**
                             * Constructs a new instance of the com.google.android.material.floatingactionbutton.FloatingActionButtonImpl$InternalTransformationCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onTranslationChanged(): void;
                                onScaleChanged(): void;
                            });
                            public constructor();
                            public onTranslationChanged(): void;
                            public onScaleChanged(): void;
                        }
                        export class InternalVisibilityChangedListener {
                            public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.InternalVisibilityChangedListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.floatingactionbutton.FloatingActionButtonImpl$InternalVisibilityChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onShown(): void;
                                onHidden(): void;
                            });
                            public constructor();
                            public onShown(): void;
                            public onHidden(): void;
                        }
                        export class ResetElevationAnimation extends com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.ShadowAnimatorImpl {
                            public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.ResetElevationAnimation>;
                            public getTargetShadowSize(): number;
                        }
                        export abstract class ShadowAnimatorImpl {
                            public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.ShadowAnimatorImpl>;
                            public getTargetShadowSize(): number;
                            public onAnimationUpdate(animator: globalAndroid.animation.ValueAnimator): void;
                            public onAnimationEnd(animator: globalAndroid.animation.Animator): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module floatingactionbutton {
                    export class FloatingActionButtonImplLollipop extends com.google.android.material.floatingactionbutton.FloatingActionButtonImpl {
                        public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImplLollipop>;
                        public getElevation(): number;
                    }
                    export module FloatingActionButtonImplLollipop {
                        export class AlwaysStatefulMaterialShapeDrawable extends com.google.android.material.shape.MaterialShapeDrawable {
                            public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImplLollipop.AlwaysStatefulMaterialShapeDrawable>;
                            public isStateful(): boolean;
                            public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
                            public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module floatingactionbutton {
                    export class MotionStrategy {
                        public static class: java.lang.Class<com.google.android.material.floatingactionbutton.MotionStrategy>;
                        /**
                         * Constructs a new instance of the com.google.android.material.floatingactionbutton.MotionStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            performNow(): void;
                            getCurrentMotionSpec(): com.google.android.material.animation.MotionSpec;
                            getDefaultMotionSpecResource(): number;
                            setMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
                            getMotionSpec(): com.google.android.material.animation.MotionSpec;
                            createAnimator(): globalAndroid.animation.AnimatorSet;
                            addAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
                            removeAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
                            getListeners(): java.util.List<globalAndroid.animation.Animator.AnimatorListener>;
                            onAnimationStart(param0: globalAndroid.animation.Animator): void;
                            onAnimationEnd(): void;
                            onAnimationCancel(): void;
                            onChange(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedCallback): void;
                            shouldCancel(): boolean;
                        });
                        public constructor();
                        public getCurrentMotionSpec(): com.google.android.material.animation.MotionSpec;
                        public performNow(): void;
                        public getListeners(): java.util.List<globalAndroid.animation.Animator.AnimatorListener>;
                        public onChange(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedCallback): void;
                        public shouldCancel(): boolean;
                        public addAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
                        public getDefaultMotionSpecResource(): number;
                        public createAnimator(): globalAndroid.animation.AnimatorSet;
                        public removeAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
                        public onAnimationCancel(): void;
                        public setMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
                        public onAnimationStart(param0: globalAndroid.animation.Animator): void;
                        public onAnimationEnd(): void;
                        public getMotionSpec(): com.google.android.material.animation.MotionSpec;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module imageview {
                    export class ShapeableImageView implements com.google.android.material.shape.Shapeable {
                        public static class: java.lang.Class<com.google.android.material.imageview.ShapeableImageView>;
                        public setStrokeWidth(strokeWidth: number): void;
                        public getPaddingTop(): number;
                        public getPaddingLeft(): number;
                        public setContentPaddingRelative(start: number, top: number, end: number, bottom: number): void;
                        public setStrokeColor(strokeColor: globalAndroid.content.res.ColorStateList): void;
                        public setStrokeColorResource(strokeColorResourceId: number): void;
                        public getContentPaddingStart(): number;
                        public getContentPaddingEnd(): number;
                        public getStrokeColor(): globalAndroid.content.res.ColorStateList;
                        public getStrokeWidth(): number;
                        public getContentPaddingTop(): number;
                        public getPaddingBottom(): number;
                        public onSizeChanged(width: number, height: number, oldWidth: number, oldHeight: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
                        public setPaddingRelative(start: number, top: number, end: number, bottom: number): void;
                        public getPaddingRight(): number;
                        public setStrokeWidthResource(strokeWidthResourceId: number): void;
                        public getContentPaddingRight(): number;
                        public setShapeAppearanceModel(shapeAppearanceModel: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
                        public setContentPadding(left: number, top: number, right: number, bottom: number): void;
                        public getContentPaddingBottom(): number;
                        public setPadding(left: number, top: number, right: number, bottom: number): void;
                        public getPaddingStart(): number;
                        public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
                        public getPaddingEnd(): number;
                        public getContentPaddingLeft(): number;
                        public onDraw(canvas: globalAndroid.graphics.Canvas): void;
                        public constructor(context: globalAndroid.content.Context);
                    }
                    export module ShapeableImageView {
                        export class OutlineProvider {
                            public static class: java.lang.Class<com.google.android.material.imageview.ShapeableImageView.OutlineProvider>;
                            public getOutline(view: globalAndroid.view.View, outline: any): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class BaselineLayout {
                        public static class: java.lang.Class<com.google.android.material.internal.BaselineLayout>;
                        public onLayout(child: boolean, width: number, height: number, childLeft: number, childTop: number): void;
                        public getBaseline(): number;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public onMeasure(baseline: number, i: number): void;
                        public constructor(context: globalAndroid.content.Context);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class CheckableGroup<T> extends java.lang.Object {
                        public static class: java.lang.Class<com.google.android.material.internal.CheckableGroup<any>>;
                        public uncheck(id: number): void;
                        public constructor();
                        public getCheckedIds(): java.util.Set<java.lang.Integer>;
                        public check(id: number): void;
                        public clearCheck(): void;
                        public getCheckedIdsSortedByChildOrder(i: globalAndroid.view.ViewGroup): java.util.List<java.lang.Integer>;
                        public setSelectionRequired(selectionRequired: boolean): void;
                        public setOnCheckedStateChangeListener(listener: com.google.android.material.internal.CheckableGroup.OnCheckedStateChangeListener): void;
                        public removeCheckable(checkable: T): void;
                        public setSingleSelection(singleSelection: boolean): void;
                        public isSingleSelection(): boolean;
                        public getSingleCheckedId(): number;
                        public isSelectionRequired(): boolean;
                        public addCheckable(checkable: T): void;
                    }
                    export module CheckableGroup {
                        export class OnCheckedStateChangeListener {
                            public static class: java.lang.Class<com.google.android.material.internal.CheckableGroup.OnCheckedStateChangeListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.internal.CheckableGroup$OnCheckedStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onCheckedStateChanged(param0: java.util.Set<java.lang.Integer>): void;
                            });
                            public constructor();
                            public onCheckedStateChanged(param0: java.util.Set<java.lang.Integer>): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class CheckableImageButton {
                        public static class: java.lang.Class<com.google.android.material.internal.CheckableImageButton>;
                        public setPressable(pressable: boolean): void;
                        public setPressed(pressed: boolean): void;
                        public setChecked(checked: boolean): void;
                        public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
                        public isPressable(): boolean;
                        public isCheckable(): boolean;
                        public onCreateDrawableState(extraSpace: number): androidNative.Array<number>;
                        public isChecked(): boolean;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public toggle(): void;
                        public onSaveInstanceState(): globalAndroid.os.Parcelable;
                        public setCheckable(checkable: boolean): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public constructor(context: globalAndroid.content.Context);
                    }
                    export module CheckableImageButton {
                        export class SavedState {
                            public static class: java.lang.Class<com.google.android.material.internal.CheckableImageButton.SavedState>;
                            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.internal.CheckableImageButton.SavedState>;
                            public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
                            public constructor(source: globalAndroid.os.Parcel, loader: java.lang.ClassLoader);
                            public constructor(superState: globalAndroid.os.Parcelable);
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class ClippableRoundedCornerLayout {
                        public static class: java.lang.Class<com.google.android.material.internal.ClippableRoundedCornerLayout>;
                        public updateClipBoundsAndCornerRadius(rect: globalAndroid.graphics.Rect, cornerRadius: number): void;
                        public resetClipBoundsAndCornerRadius(): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public updateClipBoundsAndCornerRadius(left: number, top: number, right: number, bottom: number, cornerRadius: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public updateClipBoundsAndCornerRadius(rectF: globalAndroid.graphics.RectF, cornerRadius: number): void;
                        public dispatchDraw(canvas: globalAndroid.graphics.Canvas): void;
                        public constructor(context: globalAndroid.content.Context);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class CollapsingTextHelper {
                        public static class: java.lang.Class<com.google.android.material.internal.CollapsingTextHelper>;
                        public setFadeModeStartFraction(fadeModeStartFraction: number): void;
                        public setCollapsedTextColor(textColor: globalAndroid.content.res.ColorStateList): void;
                        public getExpandedTextColor(): globalAndroid.content.res.ColorStateList;
                        public setRtlTextDirectionHeuristicsEnabled(rtlTextDirectionHeuristicsEnabled: boolean): void;
                        public setCollapsedAndExpandedTextColor(textColor: globalAndroid.content.res.ColorStateList): void;
                        public setExpandedBounds(left: number, top: number, right: number, bottom: number): void;
                        public setCollapsedBounds(bounds: globalAndroid.graphics.Rect): void;
                        public isStateful(): boolean;
                        public getCollapsedTextActualBounds(bounds: globalAndroid.graphics.RectF, labelWidth: number, textGravity: number): void;
                        public getExpansionFraction(): number;
                        public getCollapsedTextGravity(): number;
                        public getHyphenationFrequency(): number;
                        public getCollapsedTypeface(): globalAndroid.graphics.Typeface;
                        public constructor(view: globalAndroid.view.View);
                        public setTextSizeInterpolator(interpolator: globalAndroid.animation.TimeInterpolator): void;
                        public setCollapsedTextGravity(gravity: number): void;
                        public setFadeModeEnabled(fadeModeEnabled: boolean): void;
                        public getTitleTextEllipsize(): globalAndroid.text.TextUtils.TruncateAt;
                        public setTitleTextEllipsize(ellipsize: globalAndroid.text.TextUtils.TruncateAt): void;
                        public recalculate(forceRecalculate: boolean): void;
                        public getExpandedTextSize(): number;
                        public setLineSpacingMultiplier(spacingMultiplier: number): void;
                        public getLineCount(): number;
                        public setExpandedTextGravity(gravity: number): void;
                        public setExpandedTextSize(textSize: number): void;
                        public isRtlTextDirectionHeuristicsEnabled(): boolean;
                        public maybeUpdateFontWeightAdjustment(configuration: globalAndroid.content.res.Configuration): void;
                        public setExpandedTextAppearance(resId: number): void;
                        public getLineSpacingMultiplier(): number;
                        public setLineSpacingAdd(spacingAdd: number): void;
                        public setCollapsedBounds(left: number, top: number, right: number, bottom: number): void;
                        public setHyphenationFrequency(hyphenationFrequency: number): void;
                        public setStaticLayoutBuilderConfigurer(staticLayoutBuilderConfigurer: com.google.android.material.internal.StaticLayoutBuilderConfigurer): void;
                        public setTypefaces(typeface: globalAndroid.graphics.Typeface): void;
                        public getMaxLines(): number;
                        public getExpandedLineCount(): number;
                        public setCollapsedTextAppearance(resId: number): void;
                        public setState(state: androidNative.Array<number>): boolean;
                        public getText(): string;
                        public setCurrentOffsetY(currentOffsetY: number): void;
                        public getCollapsedTextHeight(): number;
                        public getExpandedTextFullHeight(): number;
                        public getExpandedTextGravity(): number;
                        public setCollapsedTextSize(textSize: number): void;
                        public setMaxLines(maxLines: number): void;
                        public setPositionInterpolator(interpolator: globalAndroid.animation.TimeInterpolator): void;
                        public getExpandedTypeface(): globalAndroid.graphics.Typeface;
                        public setExpandedTypeface(typeface: globalAndroid.graphics.Typeface): void;
                        public setExpandedBounds(bounds: globalAndroid.graphics.Rect): void;
                        public setText(text: string): void;
                        public getCollapsedTextColor(): globalAndroid.content.res.ColorStateList;
                        public getExpandedTextHeight(): number;
                        public getCollapsedTextSize(): number;
                        public recalculate(): void;
                        public draw(y: globalAndroid.graphics.Canvas): void;
                        public getLineSpacingAdd(): number;
                        public getPositionInterpolator(): globalAndroid.animation.TimeInterpolator;
                        public setExpandedLetterSpacing(letterSpacing: number): void;
                        public setCollapsedTypeface(typeface: globalAndroid.graphics.Typeface): void;
                        public setExpansionFraction(fraction: number): void;
                        public setExpandedTextColor(textColor: globalAndroid.content.res.ColorStateList): void;
                        public getCurrentCollapsedTextColor(): number;
                        public getFadeModeThresholdFraction(): number;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class ContextUtils {
                        public static class: java.lang.Class<com.google.android.material.internal.ContextUtils>;
                        public constructor();
                        public static getActivity(context: globalAndroid.content.Context): globalAndroid.app.Activity;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class DescendantOffsetUtils {
                        public static class: java.lang.Class<com.google.android.material.internal.DescendantOffsetUtils>;
                        public constructor();
                        public static offsetDescendantRect(parent: globalAndroid.view.ViewGroup, descendant: globalAndroid.view.View, rect: globalAndroid.graphics.Rect): void;
                        public static getDescendantRect(parent: globalAndroid.view.ViewGroup, descendant: globalAndroid.view.View, out: globalAndroid.graphics.Rect): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class EdgeToEdgeUtils {
                        public static class: java.lang.Class<com.google.android.material.internal.EdgeToEdgeUtils>;
                        public static setLightNavigationBar(window: globalAndroid.view.Window, isLight: boolean): void;
                        public static applyEdgeToEdge(window: globalAndroid.view.Window, edgeToEdgeEnabled: boolean): void;
                        public static setLightStatusBar(window: globalAndroid.view.Window, isLight: boolean): void;
                        public static applyEdgeToEdge(defaultBackgroundColor: globalAndroid.view.Window, window: boolean, edgeToEdgeEnabled: java.lang.Integer, statusBarOverlapBackgroundColor: java.lang.Integer): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class ExpandCollapseAnimationHelper {
                        public static class: java.lang.Class<com.google.android.material.internal.ExpandCollapseAnimationHelper>;
                        public getExpandAnimator(): globalAndroid.animation.Animator;
                        public setExpandedViewOffsetY(expandedViewOffsetY: number): com.google.android.material.internal.ExpandCollapseAnimationHelper;
                        public addEndAnchoredViews(views: java.util.Collection<globalAndroid.view.View>): com.google.android.material.internal.ExpandCollapseAnimationHelper;
                        public constructor(collapsedView: globalAndroid.view.View, expandedView: globalAndroid.view.View);
                        public setCollapsedViewOffsetY(collapsedViewOffsetY: number): com.google.android.material.internal.ExpandCollapseAnimationHelper;
                        public setDuration(duration: number): com.google.android.material.internal.ExpandCollapseAnimationHelper;
                        public getCollapseAnimator(): globalAndroid.animation.Animator;
                        public addListener(listener: globalAndroid.animation.AnimatorListenerAdapter): com.google.android.material.internal.ExpandCollapseAnimationHelper;
                        public addEndAnchoredViews(views: androidNative.Array<globalAndroid.view.View>): com.google.android.material.internal.ExpandCollapseAnimationHelper;
                        public setAdditionalUpdateListener(additionalUpdateListener: globalAndroid.animation.ValueAnimator.AnimatorUpdateListener): com.google.android.material.internal.ExpandCollapseAnimationHelper;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class Experimental {
                        public static class: java.lang.Class<com.google.android.material.internal.Experimental>;
                        /**
                         * Constructs a new instance of the com.google.android.material.internal.Experimental interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            value(): string;
                        });
                        public constructor();
                        public value(): string;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class FadeThroughDrawable {
                        public static class: java.lang.Class<com.google.android.material.internal.FadeThroughDrawable>;
                        public getMinimumHeight(): number;
                        public getIntrinsicWidth(): number;
                        public getIntrinsicHeight(): number;
                        public constructor(fadeOutDrawable: globalAndroid.graphics.drawable.Drawable, fadeInDrawable: globalAndroid.graphics.drawable.Drawable);
                        public getMinimumWidth(): number;
                        public draw(canvas: globalAndroid.graphics.Canvas): void;
                        public setBounds(left: number, top: number, right: number, bottom: number): void;
                        public getOpacity(): number;
                        public setColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): void;
                        public isStateful(): boolean;
                        public setProgress(progress: number): void;
                        public setState(stateSet: androidNative.Array<number>): boolean;
                        public setAlpha(alpha: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class FadeThroughUpdateListener {
                        public static class: java.lang.Class<com.google.android.material.internal.FadeThroughUpdateListener>;
                        public constructor(fadeOutView: globalAndroid.view.View, fadeInView: globalAndroid.view.View);
                        public onAnimationUpdate(animation: globalAndroid.animation.ValueAnimator): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class FadeThroughUtils {
                        public static class: java.lang.Class<com.google.android.material.internal.FadeThroughUtils>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class FlowLayout {
                        public static class: java.lang.Class<com.google.android.material.internal.FlowLayout>;
                        public setLineSpacing(lineSpacing: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
                        public getRowCount(): number;
                        public getRowIndex(child: globalAndroid.view.View): number;
                        public isSingleLine(): boolean;
                        public onMeasure(child: number, lp: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public getLineSpacing(): number;
                        public setItemSpacing(itemSpacing: number): void;
                        public onLayout(child: boolean, lp: number, startMargin: number, endMargin: number, childEnd: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public getItemSpacing(): number;
                        public setSingleLine(singleLine: boolean): void;
                        public constructor(context: globalAndroid.content.Context);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class ForegroundLinearLayout {
                        public static class: java.lang.Class<com.google.android.material.internal.ForegroundLinearLayout>;
                        public mForegroundInPadding: boolean;
                        public draw(overlayBounds: globalAndroid.graphics.Canvas): void;
                        public drawableHotspotChanged(x: number, y: number): void;
                        public verifyDrawable(who: globalAndroid.graphics.drawable.Drawable): boolean;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
                        public getForeground(): globalAndroid.graphics.drawable.Drawable;
                        public drawableStateChanged(): void;
                        public jumpDrawablesToCurrentState(): void;
                        public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
                        public getForegroundGravity(): number;
                        public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
                        public setForegroundGravity(this_: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public constructor(context: globalAndroid.content.Context);
                        public setForeground(this_: globalAndroid.graphics.drawable.Drawable): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class ManufacturerUtils {
                        public static class: java.lang.Class<com.google.android.material.internal.ManufacturerUtils>;
                        public static isDateInputKeyboardMissingSeparatorCharacters(): boolean;
                        public static isMeizuDevice(): boolean;
                        public static isLGEDevice(): boolean;
                        public static isSamsungDevice(): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class MaterialCheckable<T> extends globalAndroid.widget.Checkable {
                        public static class: java.lang.Class<com.google.android.material.internal.MaterialCheckable<any>>;
                        /**
                         * Constructs a new instance of the com.google.android.material.internal.MaterialCheckable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            getId(): number;
                            setInternalOnCheckedChangeListener(param0: com.google.android.material.internal.MaterialCheckable.OnCheckedChangeListener<any>): void;
                        });
                        public constructor();
                        public setInternalOnCheckedChangeListener(param0: com.google.android.material.internal.MaterialCheckable.OnCheckedChangeListener<any>): void;
                        public getId(): number;
                    }
                    export module MaterialCheckable {
                        export class OnCheckedChangeListener<C> extends java.lang.Object {
                            public static class: java.lang.Class<com.google.android.material.internal.MaterialCheckable.OnCheckedChangeListener<any>>;
                            /**
                             * Constructs a new instance of the com.google.android.material.internal.MaterialCheckable$OnCheckedChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onCheckedChanged(param0: C, param1: boolean): void;
                            });
                            public constructor();
                            public onCheckedChanged(param0: C, param1: boolean): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class MultiViewUpdateListener {
                        public static class: java.lang.Class<com.google.android.material.internal.MultiViewUpdateListener>;
                        public static alphaListener(views: java.util.Collection<globalAndroid.view.View>): com.google.android.material.internal.MultiViewUpdateListener;
                        public static translationYListener(views: androidNative.Array<globalAndroid.view.View>): com.google.android.material.internal.MultiViewUpdateListener;
                        public static translationXListener(views: androidNative.Array<globalAndroid.view.View>): com.google.android.material.internal.MultiViewUpdateListener;
                        public static translationYListener(views: java.util.Collection<globalAndroid.view.View>): com.google.android.material.internal.MultiViewUpdateListener;
                        public static alphaListener(views: androidNative.Array<globalAndroid.view.View>): com.google.android.material.internal.MultiViewUpdateListener;
                        public onAnimationUpdate(this_: globalAndroid.animation.ValueAnimator): void;
                        public constructor(listener: com.google.android.material.internal.MultiViewUpdateListener.Listener, views: androidNative.Array<globalAndroid.view.View>);
                        public static translationXListener(views: java.util.Collection<globalAndroid.view.View>): com.google.android.material.internal.MultiViewUpdateListener;
                        public static scaleListener(views: androidNative.Array<globalAndroid.view.View>): com.google.android.material.internal.MultiViewUpdateListener;
                        public constructor(listener: com.google.android.material.internal.MultiViewUpdateListener.Listener, views: java.util.Collection<globalAndroid.view.View>);
                        public static scaleListener(views: java.util.Collection<globalAndroid.view.View>): com.google.android.material.internal.MultiViewUpdateListener;
                    }
                    export module MultiViewUpdateListener {
                        export class Listener {
                            public static class: java.lang.Class<com.google.android.material.internal.MultiViewUpdateListener.Listener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.internal.MultiViewUpdateListener$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onAnimationUpdate(param0: globalAndroid.animation.ValueAnimator, param1: globalAndroid.view.View): void;
                            });
                            public constructor();
                            public onAnimationUpdate(param0: globalAndroid.animation.ValueAnimator, param1: globalAndroid.view.View): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class NavigationMenu {
                        public static class: java.lang.Class<com.google.android.material.internal.NavigationMenu>;
                        public addSubMenu(group: number, id: number, categoryOrder: number, title: string): globalAndroid.view.SubMenu;
                        public constructor(context: globalAndroid.content.Context);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class NavigationMenuItemView extends com.google.android.material.internal.ForegroundLinearLayout {
                        public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuItemView>;
                        public setTitle(title: string): void;
                        public setTextColor(colors: globalAndroid.content.res.ColorStateList): void;
                        public setChecked(checked: boolean): void;
                        public showsIcon(): boolean;
                        public setIconPadding(padding: number): void;
                        public recycle(): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
                        public setHorizontalPadding(padding: number): void;
                        public initialize(itemData: androidx.appcompat.view.menu.MenuItemImpl, menuType: number): void;
                        public setNeedsEmptyIcon(needsEmptyIcon: boolean): void;
                        public prefersCondensedTitle(): boolean;
                        public onCreateDrawableState(extraSpace: number): androidNative.Array<number>;
                        public setShortcut(showShortcut: boolean, shortcutKey: string): void;
                        public getItemData(): androidx.appcompat.view.menu.MenuItemImpl;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public setIconSize(iconSize: number): void;
                        public setIcon(this_: globalAndroid.graphics.drawable.Drawable): void;
                        public setCheckable(checkable: boolean): void;
                        public setMaxLines(maxLines: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public constructor(context: globalAndroid.content.Context);
                        public setTextAppearance(textAppearance: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class NavigationMenuPresenter {
                        public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter>;
                        public static NO_TEXT_APPEARANCE_SET: number = 0;
                        public inflateHeaderView(res: number): globalAndroid.view.View;
                        public flagActionItems(): boolean;
                        public setCallback(cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
                        public getItemIconPadding(): number;
                        public setSubheaderColor(subheaderColor: globalAndroid.content.res.ColorStateList): void;
                        public setCheckedItem(item: androidx.appcompat.view.menu.MenuItemImpl): void;
                        public setItemForeground(itemForeground: globalAndroid.graphics.drawable.RippleDrawable): void;
                        public addHeaderView(view: globalAndroid.view.View): void;
                        public setItemIconSize(itemIconSize: number): void;
                        public getItemTextColor(): globalAndroid.content.res.ColorStateList;
                        public setBehindStatusBar(behindStatusBar: boolean): void;
                        public getItemMaxLines(): number;
                        public initForMenu(context: globalAndroid.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder): void;
                        public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
                        public expandItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
                        public constructor();
                        public onSubMenuSelected(subMenu: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
                        public setItemIconPadding(itemIconPadding: number): void;
                        public setItemVerticalPadding(itemVerticalPadding: number): void;
                        public setId(id: number): void;
                        public removeHeaderView(view: globalAndroid.view.View): void;
                        public setSubheaderInsetStart(subheaderInsetStart: number): void;
                        public updateMenuView(cleared: boolean): void;
                        public setItemTextAppearance(resId: number): void;
                        public setItemTextColor(textColor: globalAndroid.content.res.ColorStateList): void;
                        public setItemBackground(itemBackground: globalAndroid.graphics.drawable.Drawable): void;
                        public setUpdateSuspended(updateSuspended: boolean): void;
                        public setOverScrollMode(overScrollMode: number): void;
                        public dispatchApplyWindowInsets(insets: androidx.core.view.WindowInsetsCompat): void;
                        public getItemTintList(): globalAndroid.content.res.ColorStateList;
                        public getHeaderCount(): number;
                        public setSubheaderInsetEnd(subheaderInsetEnd: number): void;
                        public collapseItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
                        public getMenuView(root: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
                        public getItemVerticalPadding(): number;
                        public onRestoreInstanceState(hierarchy: globalAndroid.os.Parcelable): void;
                        public setDividerInsetEnd(dividerInsetEnd: number): void;
                        public isBehindStatusBar(): boolean;
                        public setItemMaxLines(itemMaxLines: number): void;
                        public setItemIconTintList(tint: globalAndroid.content.res.ColorStateList): void;
                        public setItemHorizontalPadding(itemHorizontalPadding: number): void;
                        public getDividerInsetStart(): number;
                        public getSubheaderInsetStart(): number;
                        public setSubheaderTextAppearance(resId: number): void;
                        public getItemHorizontalPadding(): number;
                        public getSubheaderInsetEnd(): number;
                        public setDividerInsetStart(dividerInsetStart: number): void;
                        public getItemBackground(): globalAndroid.graphics.drawable.Drawable;
                        public getId(): number;
                        public getHeaderView(index: number): globalAndroid.view.View;
                        public getDividerInsetEnd(): number;
                        public onSaveInstanceState(): globalAndroid.os.Parcelable;
                        public getCheckedItem(): androidx.appcompat.view.menu.MenuItemImpl;
                    }
                    export module NavigationMenuPresenter {
                        export class HeaderViewHolder extends com.google.android.material.internal.NavigationMenuPresenter.ViewHolder {
                            public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.HeaderViewHolder>;
                            public constructor(itemView: globalAndroid.view.View);
                        }
                        export class NavigationMenuAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.google.android.material.internal.NavigationMenuPresenter.ViewHolder> {
                            public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuAdapter>;
                            public getItemViewType(this_: number): number;
                            public createInstanceState(): globalAndroid.os.Bundle;
                            public onCreateViewHolder(parent: globalAndroid.view.ViewGroup, viewType: number): com.google.android.material.internal.NavigationMenuPresenter.ViewHolder;
                            public getItemCount(): number;
                            public onViewRecycled(holder: com.google.android.material.internal.NavigationMenuPresenter.ViewHolder): void;
                            public setUpdateSuspended(updateSuspended: boolean): void;
                            public restoreInstanceState(item: globalAndroid.os.Bundle): void;
                            public onBindViewHolder(item: com.google.android.material.internal.NavigationMenuPresenter.ViewHolder, subHeader: number): void;
                            public setCheckedItem(checkedItem: androidx.appcompat.view.menu.MenuItemImpl): void;
                            public getItemId(position: number): number;
                            public update(): void;
                            public getCheckedItem(): androidx.appcompat.view.menu.MenuItemImpl;
                        }
                        export class NavigationMenuHeaderItem extends com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuItem {
                            public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuHeaderItem>;
                        }
                        export class NavigationMenuItem {
                            public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuItem>;
                            /**
                             * Constructs a new instance of the com.google.android.material.internal.NavigationMenuPresenter$NavigationMenuItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class NavigationMenuSeparatorItem extends com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuItem {
                            public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuSeparatorItem>;
                            public getPaddingBottom(): number;
                            public constructor(paddingTop: number, paddingBottom: number);
                            public getPaddingTop(): number;
                        }
                        export class NavigationMenuTextItem extends com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuItem {
                            public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuTextItem>;
                            public getMenuItem(): androidx.appcompat.view.menu.MenuItemImpl;
                        }
                        export class NavigationMenuViewAccessibilityDelegate {
                            public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuViewAccessibilityDelegate>;
                            public onInitializeAccessibilityNodeInfo(host: globalAndroid.view.View, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
                        }
                        export class NormalViewHolder extends com.google.android.material.internal.NavigationMenuPresenter.ViewHolder {
                            public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.NormalViewHolder>;
                            public constructor(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup, listener: globalAndroid.view.View.OnClickListener);
                            public constructor(itemView: globalAndroid.view.View);
                        }
                        export class SeparatorViewHolder extends com.google.android.material.internal.NavigationMenuPresenter.ViewHolder {
                            public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.SeparatorViewHolder>;
                            public constructor(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup);
                            public constructor(itemView: globalAndroid.view.View);
                        }
                        export class SubheaderViewHolder extends com.google.android.material.internal.NavigationMenuPresenter.ViewHolder {
                            public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.SubheaderViewHolder>;
                            public constructor(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup);
                            public constructor(itemView: globalAndroid.view.View);
                        }
                        export abstract class ViewHolder {
                            public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.ViewHolder>;
                            public constructor(itemView: globalAndroid.view.View);
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class NavigationMenuView {
                        public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuView>;
                        public getWindowAnimations(): number;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public constructor(context: globalAndroid.content.Context);
                        public initialize(menu: androidx.appcompat.view.menu.MenuBuilder): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class NavigationSubMenu {
                        public static class: java.lang.Class<com.google.android.material.internal.NavigationSubMenu>;
                        public constructor(context: globalAndroid.content.Context, menu: com.google.android.material.internal.NavigationMenu, item: androidx.appcompat.view.menu.MenuItemImpl);
                        public onItemsChanged(structureChanged: boolean): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class ParcelableSparseArray extends globalAndroid.util.SparseArray<globalAndroid.os.Parcelable> implements globalAndroid.os.Parcelable {
                        public static class: java.lang.Class<com.google.android.material.internal.ParcelableSparseArray>;
                        public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.internal.ParcelableSparseArray>;
                        public constructor();
                        public constructor(this_: globalAndroid.os.Parcel, source: java.lang.ClassLoader);
                        public describeContents(): number;
                        public writeToParcel(this_: globalAndroid.os.Parcel, parcel: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class ParcelableSparseBooleanArray {
                        public static class: java.lang.Class<com.google.android.material.internal.ParcelableSparseBooleanArray>;
                        public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.internal.ParcelableSparseBooleanArray>;
                        public constructor();
                        public describeContents(): number;
                        public writeToParcel(this_: globalAndroid.os.Parcel, dest: number): void;
                        public constructor(initialCapacity: number);
                        public constructor(this_: globalAndroid.util.SparseBooleanArray);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class ParcelableSparseIntArray {
                        public static class: java.lang.Class<com.google.android.material.internal.ParcelableSparseIntArray>;
                        public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.internal.ParcelableSparseIntArray>;
                        public constructor();
                        public describeContents(): number;
                        public writeToParcel(this_: globalAndroid.os.Parcel, dest: number): void;
                        public constructor(initialCapacity: number);
                        public constructor(this_: globalAndroid.util.SparseIntArray);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class RectEvaluator extends globalAndroid.animation.TypeEvaluator<globalAndroid.graphics.Rect> {
                        public static class: java.lang.Class<com.google.android.material.internal.RectEvaluator>;
                        public constructor(rect: globalAndroid.graphics.Rect);
                        public evaluate(fraction: number, startValue: globalAndroid.graphics.Rect, endValue: globalAndroid.graphics.Rect): globalAndroid.graphics.Rect;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class ReversableAnimatedValueInterpolator {
                        public static class: java.lang.Class<com.google.android.material.internal.ReversableAnimatedValueInterpolator>;
                        public static of(useSourceInterpolator: boolean, sourceInterpolator: globalAndroid.animation.TimeInterpolator): globalAndroid.animation.TimeInterpolator;
                        public getInterpolation(input: number): number;
                        public constructor(sourceInterpolator: globalAndroid.animation.TimeInterpolator);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class ScrimInsetsFrameLayout {
                        public static class: java.lang.Class<com.google.android.material.internal.ScrimInsetsFrameLayout>;
                        public draw(this_: globalAndroid.graphics.Canvas): void;
                        public setDrawRightInsetForeground(drawRightInsetForeground: boolean): void;
                        public onAttachedToWindow(): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public setDrawLeftInsetForeground(drawLeftInsetForeground: boolean): void;
                        public onDetachedFromWindow(): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public onInsetsChanged(insets: androidx.core.view.WindowInsetsCompat): void;
                        public setScrimInsetForeground(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public setDrawTopInsetForeground(drawTopInsetForeground: boolean): void;
                        public constructor(context: globalAndroid.content.Context);
                        public setDrawBottomInsetForeground(drawBottomInsetForeground: boolean): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class StateListAnimator {
                        public static class: java.lang.Class<com.google.android.material.internal.StateListAnimator>;
                        public constructor();
                        public jumpToCurrentState(): void;
                        public addState(specs: androidNative.Array<number>, animator: globalAndroid.animation.ValueAnimator): void;
                        public setState(i: androidNative.Array<number>): void;
                    }
                    export module StateListAnimator {
                        export class Tuple {
                            public static class: java.lang.Class<com.google.android.material.internal.StateListAnimator.Tuple>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class StaticLayoutBuilderCompat {
                        public static class: java.lang.Class<com.google.android.material.internal.StaticLayoutBuilderCompat>;
                        public setEnd(end: number): com.google.android.material.internal.StaticLayoutBuilderCompat;
                        public setIsRtl(isRtl: boolean): com.google.android.material.internal.StaticLayoutBuilderCompat;
                        public setAlignment(alignment: globalAndroid.text.Layout.Alignment): com.google.android.material.internal.StaticLayoutBuilderCompat;
                        public setStart(start: number): com.google.android.material.internal.StaticLayoutBuilderCompat;
                        public setEllipsize(ellipsize: globalAndroid.text.TextUtils.TruncateAt): com.google.android.material.internal.StaticLayoutBuilderCompat;
                        public setHyphenationFrequency(hyphenationFrequency: number): com.google.android.material.internal.StaticLayoutBuilderCompat;
                        public build(): globalAndroid.text.StaticLayout;
                        public setIncludePad(includePad: boolean): com.google.android.material.internal.StaticLayoutBuilderCompat;
                        public setMaxLines(maxLines: number): com.google.android.material.internal.StaticLayoutBuilderCompat;
                        public static obtain(source: string, paint: globalAndroid.text.TextPaint, width: number): com.google.android.material.internal.StaticLayoutBuilderCompat;
                        public setLineSpacing(spacingAdd: number, lineSpacingMultiplier: number): com.google.android.material.internal.StaticLayoutBuilderCompat;
                        public setStaticLayoutBuilderConfigurer(staticLayoutBuilderConfigurer: com.google.android.material.internal.StaticLayoutBuilderConfigurer): com.google.android.material.internal.StaticLayoutBuilderCompat;
                    }
                    export module StaticLayoutBuilderCompat {
                        export class StaticLayoutBuilderCompatException {
                            public static class: java.lang.Class<com.google.android.material.internal.StaticLayoutBuilderCompat.StaticLayoutBuilderCompatException>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class StaticLayoutBuilderConfigurer {
                        public static class: java.lang.Class<com.google.android.material.internal.StaticLayoutBuilderConfigurer>;
                        /**
                         * Constructs a new instance of the com.google.android.material.internal.StaticLayoutBuilderConfigurer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            configure(param0: globalAndroid.text.StaticLayout.Builder): void;
                        });
                        public constructor();
                        public configure(param0: globalAndroid.text.StaticLayout.Builder): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class TextDrawableHelper {
                        public static class: java.lang.Class<com.google.android.material.internal.TextDrawableHelper>;
                        public setTextAppearance(textDrawableDelegate: com.google.android.material.resources.TextAppearance, this_: globalAndroid.content.Context): void;
                        public getTextAppearance(): com.google.android.material.resources.TextAppearance;
                        public updateTextPaintDrawState(context: globalAndroid.content.Context): void;
                        public setTextWidthDirty(dirty: boolean): void;
                        public getTextPaint(): globalAndroid.text.TextPaint;
                        public getTextWidth(text: string): number;
                        public constructor(delegate: com.google.android.material.internal.TextDrawableHelper.TextDrawableDelegate);
                        public setDelegate(delegate: com.google.android.material.internal.TextDrawableHelper.TextDrawableDelegate): void;
                        public isTextWidthDirty(): boolean;
                    }
                    export module TextDrawableHelper {
                        export class TextDrawableDelegate {
                            public static class: java.lang.Class<com.google.android.material.internal.TextDrawableHelper.TextDrawableDelegate>;
                            /**
                             * Constructs a new instance of the com.google.android.material.internal.TextDrawableHelper$TextDrawableDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                getState(): androidNative.Array<number>;
                                onTextSizeChange(): void;
                                onStateChange(param0: androidNative.Array<number>): boolean;
                            });
                            public constructor();
                            public getState(): androidNative.Array<number>;
                            public onStateChange(param0: androidNative.Array<number>): boolean;
                            public onTextSizeChange(): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class TextScale {
                        public static class: java.lang.Class<com.google.android.material.internal.TextScale>;
                        public constructor();
                        public createAnimator(sceneRoot: globalAndroid.view.ViewGroup, startValues: androidx.transition.TransitionValues, endValues: androidx.transition.TransitionValues): globalAndroid.animation.Animator;
                        public captureStartValues(transitionValues: androidx.transition.TransitionValues): void;
                        public captureEndValues(transitionValues: androidx.transition.TransitionValues): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class TextWatcherAdapter {
                        public static class: java.lang.Class<com.google.android.material.internal.TextWatcherAdapter>;
                        public constructor();
                        public onTextChanged(s: string, start: number, before: number, count: number): void;
                        public beforeTextChanged(s: string, start: number, count: number, after: number): void;
                        public afterTextChanged(s: globalAndroid.text.Editable): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class ThemeEnforcement {
                        public static class: java.lang.Class<com.google.android.material.internal.ThemeEnforcement>;
                        public static obtainTintedStyledAttributes(context: globalAndroid.content.Context, set: globalAndroid.util.AttributeSet, attrs: androidNative.Array<number>, defStyleAttr: number, defStyleRes: number, textAppearanceResIndices: androidNative.Array<number>): androidx.appcompat.widget.TintTypedArray;
                        public static isMaterialTheme(context: globalAndroid.content.Context): boolean;
                        public static isMaterial3Theme(context: globalAndroid.content.Context): boolean;
                        public static checkAppCompatTheme(context: globalAndroid.content.Context): void;
                        public static obtainStyledAttributes(context: globalAndroid.content.Context, set: globalAndroid.util.AttributeSet, attrs: androidNative.Array<number>, defStyleAttr: number, defStyleRes: number, textAppearanceResIndices: androidNative.Array<number>): globalAndroid.content.res.TypedArray;
                        public static checkMaterialTheme(context: globalAndroid.content.Context): void;
                        public static isAppCompatTheme(context: globalAndroid.content.Context): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class ToolbarUtils {
                        public static class: java.lang.Class<com.google.android.material.internal.ToolbarUtils>;
                        public static getSubtitleTextView(toolbar: androidx.appcompat.widget.Toolbar): globalAndroid.widget.TextView;
                        public static getNavigationIconButton(imageButton: androidx.appcompat.widget.Toolbar): globalAndroid.widget.ImageButton;
                        public static getLogoImageView(toolbar: androidx.appcompat.widget.Toolbar): globalAndroid.widget.ImageView;
                        public static getActionMenuView(child: androidx.appcompat.widget.Toolbar): androidx.appcompat.widget.ActionMenuView;
                        public static getActionMenuItemView(actionMenuItemView: androidx.appcompat.widget.Toolbar, child: number): androidx.appcompat.view.menu.ActionMenuItemView;
                        public static getTitleTextView(toolbar: androidx.appcompat.widget.Toolbar): globalAndroid.widget.TextView;
                        public static getSecondaryActionMenuItemView(toolbar: androidx.appcompat.widget.Toolbar): globalAndroid.view.View;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class TouchObserverFrameLayout {
                        public static class: java.lang.Class<com.google.android.material.internal.TouchObserverFrameLayout>;
                        public setOnTouchListener(onTouchListener: globalAndroid.view.View.OnTouchListener): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public constructor(context: globalAndroid.content.Context);
                        public onInterceptTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class ViewGroupOverlayApi14 extends com.google.android.material.internal.ViewOverlayApi14 implements com.google.android.material.internal.ViewGroupOverlayImpl {
                        public static class: java.lang.Class<com.google.android.material.internal.ViewGroupOverlayApi14>;
                        public remove(view: globalAndroid.view.View): void;
                        public add(param0: globalAndroid.view.View): void;
                        public add(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public remove(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public add(view: globalAndroid.view.View): void;
                        public add(param0: globalAndroid.graphics.drawable.Drawable): void;
                        public remove(param0: globalAndroid.graphics.drawable.Drawable): void;
                        public remove(param0: globalAndroid.view.View): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class ViewGroupOverlayApi18 extends com.google.android.material.internal.ViewGroupOverlayImpl {
                        public static class: java.lang.Class<com.google.android.material.internal.ViewGroupOverlayApi18>;
                        public remove(view: globalAndroid.view.View): void;
                        public add(param0: globalAndroid.view.View): void;
                        public add(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public remove(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public add(view: globalAndroid.view.View): void;
                        public add(param0: globalAndroid.graphics.drawable.Drawable): void;
                        public remove(param0: globalAndroid.graphics.drawable.Drawable): void;
                        public remove(param0: globalAndroid.view.View): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class ViewGroupOverlayImpl extends com.google.android.material.internal.ViewOverlayImpl {
                        public static class: java.lang.Class<com.google.android.material.internal.ViewGroupOverlayImpl>;
                        /**
                         * Constructs a new instance of the com.google.android.material.internal.ViewGroupOverlayImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            add(param0: globalAndroid.view.View): void;
                            remove(param0: globalAndroid.view.View): void;
                            add(param0: globalAndroid.graphics.drawable.Drawable): void;
                            remove(param0: globalAndroid.graphics.drawable.Drawable): void;
                        });
                        public constructor();
                        public add(param0: globalAndroid.view.View): void;
                        public add(param0: globalAndroid.graphics.drawable.Drawable): void;
                        public remove(param0: globalAndroid.graphics.drawable.Drawable): void;
                        public remove(param0: globalAndroid.view.View): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class ViewOverlayApi14 extends com.google.android.material.internal.ViewOverlayImpl {
                        public static class: java.lang.Class<com.google.android.material.internal.ViewOverlayApi14>;
                        public overlayViewGroup: com.google.android.material.internal.ViewOverlayApi14.OverlayViewGroup;
                        public add(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public remove(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public add(param0: globalAndroid.graphics.drawable.Drawable): void;
                        public remove(param0: globalAndroid.graphics.drawable.Drawable): void;
                    }
                    export module ViewOverlayApi14 {
                        export class OverlayViewGroup {
                            public static class: java.lang.Class<com.google.android.material.internal.ViewOverlayApi14.OverlayViewGroup>;
                            public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
                            public dispatchTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
                            public invalidateChildInParentFast(e: number, e: number, this_: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
                            public remove(view: globalAndroid.view.View): void;
                            public invalidateChildInParent(this_: androidNative.Array<number>, location: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
                            public verifyDrawable(who: globalAndroid.graphics.drawable.Drawable): boolean;
                            public add(hostViewLocation: globalAndroid.view.View): void;
                            public remove(drawable: globalAndroid.graphics.drawable.Drawable): void;
                            public add(drawable: globalAndroid.graphics.drawable.Drawable): void;
                            public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
                            public dispatchDraw(this_: globalAndroid.graphics.Canvas): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class ViewOverlayApi18 extends com.google.android.material.internal.ViewOverlayImpl {
                        public static class: java.lang.Class<com.google.android.material.internal.ViewOverlayApi18>;
                        public add(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public remove(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public add(param0: globalAndroid.graphics.drawable.Drawable): void;
                        public remove(param0: globalAndroid.graphics.drawable.Drawable): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class ViewOverlayImpl {
                        public static class: java.lang.Class<com.google.android.material.internal.ViewOverlayImpl>;
                        /**
                         * Constructs a new instance of the com.google.android.material.internal.ViewOverlayImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            add(param0: globalAndroid.graphics.drawable.Drawable): void;
                            remove(param0: globalAndroid.graphics.drawable.Drawable): void;
                        });
                        public constructor();
                        public add(param0: globalAndroid.graphics.drawable.Drawable): void;
                        public remove(param0: globalAndroid.graphics.drawable.Drawable): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class ViewUtils {
                        public static class: java.lang.Class<com.google.android.material.internal.ViewUtils>;
                        public static EDGE_TO_EDGE_FLAGS: number = 768;
                        public static showKeyboard(view: globalAndroid.view.View): void;
                        public static removeOnGlobalLayoutListener(view: globalAndroid.view.View, victim: globalAndroid.view.ViewTreeObserver.OnGlobalLayoutListener): void;
                        public static parseTintMode(value: number, defaultMode: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.graphics.PorterDuff.Mode;
                        public static doOnApplyWindowInsets(view: globalAndroid.view.View, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number, listener: com.google.android.material.internal.ViewUtils.OnApplyWindowInsetsListener): void;
                        public static getChildren(i: globalAndroid.view.View): java.util.List<globalAndroid.view.View>;
                        public static dpToPx(context: globalAndroid.content.Context, dp: number): number;
                        public static removeOnGlobalLayoutListener(viewTreeObserver: globalAndroid.view.ViewTreeObserver, victim: globalAndroid.view.ViewTreeObserver.OnGlobalLayoutListener): void;
                        public static getBackgroundColor(view: globalAndroid.view.View): java.lang.Integer;
                        public static hideKeyboard(windowController: globalAndroid.view.View, view: boolean): void;
                        public static addOnGlobalLayoutListener(view: globalAndroid.view.View, victim: globalAndroid.view.ViewTreeObserver.OnGlobalLayoutListener): void;
                        public static showKeyboard(windowController: globalAndroid.view.View, view: boolean): void;
                        public static getParentAbsoluteElevation(view: globalAndroid.view.View): number;
                        public static getContentView(view: globalAndroid.view.View): globalAndroid.view.ViewGroup;
                        public static calculateRectFromBounds(view: globalAndroid.view.View): globalAndroid.graphics.Rect;
                        public static hideKeyboard(view: globalAndroid.view.View): void;
                        public static getContentViewOverlay(view: globalAndroid.view.View): com.google.android.material.internal.ViewOverlayImpl;
                        public static doOnApplyWindowInsets(view: globalAndroid.view.View, listener: com.google.android.material.internal.ViewUtils.OnApplyWindowInsetsListener): void;
                        public static doOnApplyWindowInsets(view: globalAndroid.view.View, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number): void;
                        public static calculateRectFromBounds(view: globalAndroid.view.View, offsetY: number): globalAndroid.graphics.Rect;
                        public static requestApplyInsetsWhenAttached(view: globalAndroid.view.View): void;
                        public static setBoundsFromRect(view: globalAndroid.view.View, rect: globalAndroid.graphics.Rect): void;
                        public static getOverlay(view: globalAndroid.view.View): com.google.android.material.internal.ViewOverlayImpl;
                        public static requestFocusAndShowKeyboard(view: globalAndroid.view.View): void;
                        public static isLayoutRtl(view: globalAndroid.view.View): boolean;
                    }
                    export module ViewUtils {
                        export class OnApplyWindowInsetsListener {
                            public static class: java.lang.Class<com.google.android.material.internal.ViewUtils.OnApplyWindowInsetsListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.internal.ViewUtils$OnApplyWindowInsetsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onApplyWindowInsets(param0: globalAndroid.view.View, param1: androidx.core.view.WindowInsetsCompat, param2: com.google.android.material.internal.ViewUtils.RelativePadding): androidx.core.view.WindowInsetsCompat;
                            });
                            public constructor();
                            public onApplyWindowInsets(param0: globalAndroid.view.View, param1: androidx.core.view.WindowInsetsCompat, param2: com.google.android.material.internal.ViewUtils.RelativePadding): androidx.core.view.WindowInsetsCompat;
                        }
                        export class RelativePadding {
                            public static class: java.lang.Class<com.google.android.material.internal.ViewUtils.RelativePadding>;
                            public start: number;
                            public top: number;
                            public end: number;
                            public bottom: number;
                            public constructor(start: number, top: number, end: number, bottom: number);
                            public applyToView(view: globalAndroid.view.View): void;
                            public constructor(other: com.google.android.material.internal.ViewUtils.RelativePadding);
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class VisibilityAwareImageButton {
                        public static class: java.lang.Class<com.google.android.material.internal.VisibilityAwareImageButton>;
                        public internalSetVisibility(visibility: number, fromUser: boolean): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public getUserSetVisibility(): number;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public setVisibility(visibility: number): void;
                        public constructor(context: globalAndroid.content.Context);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module internal {
                    export class WindowUtils {
                        public static class: java.lang.Class<com.google.android.material.internal.WindowUtils>;
                        public static getCurrentWindowBounds(context: globalAndroid.content.Context): globalAndroid.graphics.Rect;
                    }
                    export module WindowUtils {
                        export class Api14Impl {
                            public static class: java.lang.Class<com.google.android.material.internal.WindowUtils.Api14Impl>;
                        }
                        export class Api17Impl {
                            public static class: java.lang.Class<com.google.android.material.internal.WindowUtils.Api17Impl>;
                        }
                        export class Api30Impl {
                            public static class: java.lang.Class<com.google.android.material.internal.WindowUtils.Api30Impl>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module materialswitch {
                    export class MaterialSwitch {
                        public static class: java.lang.Class<com.google.android.material.materialswitch.MaterialSwitch>;
                        public getTrackDecorationDrawable(): globalAndroid.graphics.drawable.Drawable;
                        public setThumbIconTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
                        public setTrackTintList(tintList: globalAndroid.content.res.ColorStateList): void;
                        public setThumbTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
                        public setTrackTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
                        public setTrackDecorationDrawable(trackDecoration: globalAndroid.graphics.drawable.Drawable): void;
                        public getTrackDecorationTintList(): globalAndroid.content.res.ColorStateList;
                        public onCreateDrawableState(extraSpace: number): androidNative.Array<number>;
                        public setTrackDecorationResource(resId: number): void;
                        public getTrackDrawable(): globalAndroid.graphics.drawable.Drawable;
                        public getTrackTintList(): globalAndroid.content.res.ColorStateList;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public setTrackDecorationTintList(tintList: globalAndroid.content.res.ColorStateList): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public setThumbIconResource(resId: number): void;
                        public getTrackDecorationTintMode(): globalAndroid.graphics.PorterDuff.Mode;
                        public setTrackDrawable(track: globalAndroid.graphics.drawable.Drawable): void;
                        public getThumbIconTintList(): globalAndroid.content.res.ColorStateList;
                        public getThumbIconDrawable(): globalAndroid.graphics.drawable.Drawable;
                        public setThumbIconTintList(tintList: globalAndroid.content.res.ColorStateList): void;
                        public setThumbDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public getThumbTintList(): globalAndroid.content.res.ColorStateList;
                        public setTrackDecorationTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
                        public getThumbDrawable(): globalAndroid.graphics.drawable.Drawable;
                        public setThumbTintList(tintList: globalAndroid.content.res.ColorStateList): void;
                        public setThumbIconDrawable(icon: globalAndroid.graphics.drawable.Drawable): void;
                        public invalidate(): void;
                        public getThumbIconTintMode(): globalAndroid.graphics.PorterDuff.Mode;
                        public constructor(context: globalAndroid.content.Context);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module math {
                    export class MathUtils {
                        public static class: java.lang.Class<com.google.android.material.math.MathUtils>;
                        public static DEFAULT_EPSILON: number = 1.0E-4;
                        public static geq(a: number, b: number, epsilon: number): boolean;
                        public static dist(x1: number, y1: number, x2: number, y2: number): number;
                        public static distanceToFurthestCorner(pointX: number, pointY: number, rectLeft: number, rectTop: number, rectRight: number, rectBottom: number): number;
                        public static lerp(start: number, stop: number, amount: number): number;
                        public static floorMod(x: number, y: number): number;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module motion {
                    export class MotionUtils {
                        public static class: java.lang.Class<com.google.android.material.motion.MotionUtils>;
                        public static resolveThemeInterpolator(context: globalAndroid.content.Context, attrResId: number, defaultInterpolator: globalAndroid.animation.TimeInterpolator): globalAndroid.animation.TimeInterpolator;
                        public static resolveThemeDuration(context: globalAndroid.content.Context, attrResId: number, defaultDuration: number): number;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module navigation {
                    export abstract class NavigationBarItemView {
                        public static class: java.lang.Class<com.google.android.material.navigation.NavigationBarItemView>;
                        public setTitle(title: string): void;
                        public getItemPosition(): number;
                        public getItemDefaultMarginResId(): number;
                        public setChecked(checked: boolean): void;
                        public showsIcon(): boolean;
                        public getSuggestedMinimumWidth(): number;
                        public getBadge(): com.google.android.material.badge.BadgeDrawable;
                        public setTextAppearanceActive(activeTextAppearance: number): void;
                        public dispatchTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
                        public setActiveIndicatorWidth(width: number): void;
                        public onCreateDrawableState(extraSpace: number): androidNative.Array<number>;
                        public prefersCondensedTitle(): boolean;
                        public setItemBackground(background: number): void;
                        public setLabelVisibilityMode(mode: number): void;
                        public setIcon(this_: globalAndroid.graphics.drawable.Drawable): void;
                        public setCheckable(checkable: boolean): void;
                        public setActiveIndicatorEnabled(enabled: boolean): void;
                        public onInitializeAccessibilityNodeInfo(this_: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
                        public setTextColor(color: globalAndroid.content.res.ColorStateList): void;
                        public setActiveIndicatorMarginHorizontal(marginHorizontal: number): void;
                        public setActiveIndicatorHeight(height: number): void;
                        public setItemRippleColor(itemRippleColor: globalAndroid.content.res.ColorStateList): void;
                        public getItemLayoutResId(): number;
                        public getItemBackgroundResId(): number;
                        public initialize(itemData: androidx.appcompat.view.menu.MenuItemImpl, menuType: number): void;
                        public setEnabled(enabled: boolean): void;
                        public setItemPaddingTop(paddingTop: number): void;
                        public setShifting(shifting: boolean): void;
                        public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
                        public setShortcut(showShortcut: boolean, shortcutKey: string): void;
                        public setIconTintList(tint: globalAndroid.content.res.ColorStateList): void;
                        public setActiveIndicatorDrawable(activeIndicatorDrawable: globalAndroid.graphics.drawable.Drawable): void;
                        public setActiveIndicatorResizeable(resizeable: boolean): void;
                        public getItemData(): androidx.appcompat.view.menu.MenuItemImpl;
                        public setIconSize(iconSize: number): void;
                        public setItemBackground(background: globalAndroid.graphics.drawable.Drawable): void;
                        public setTextAppearanceInactive(inactiveTextAppearance: number): void;
                        public constructor(context: globalAndroid.content.Context);
                        public getSuggestedMinimumHeight(): number;
                        public getActiveIndicatorDrawable(): globalAndroid.graphics.drawable.Drawable;
                        public setItemPosition(position: number): void;
                        public setItemPaddingBottom(paddingBottom: number): void;
                    }
                    export module NavigationBarItemView {
                        export class ActiveIndicatorTransform {
                            public static class: java.lang.Class<com.google.android.material.navigation.NavigationBarItemView.ActiveIndicatorTransform>;
                            public calculateScaleY(progress: number, targetValue: number): number;
                            public updateForProgress(progress: number, targetValue: number, indicator: globalAndroid.view.View): void;
                            public calculateAlpha(progress: number, targetValue: number): number;
                            public calculateScaleX(progress: number, targetValue: number): number;
                        }
                        export class ActiveIndicatorUnlabeledTransform extends com.google.android.material.navigation.NavigationBarItemView.ActiveIndicatorTransform {
                            public static class: java.lang.Class<com.google.android.material.navigation.NavigationBarItemView.ActiveIndicatorUnlabeledTransform>;
                            public calculateScaleY(progress: number, targetValue: number): number;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module navigation {
                    export class NavigationBarMenu {
                        public static class: java.lang.Class<com.google.android.material.navigation.NavigationBarMenu>;
                        public constructor(context: globalAndroid.content.Context, viewClass: java.lang.Class<any>, maxItemCount: number);
                        public addSubMenu(group: number, id: number, categoryOrder: number, title: string): globalAndroid.view.SubMenu;
                        public addInternal(this_: number, group: number, id: number, categoryOrder: string): globalAndroid.view.MenuItem;
                        public getMaxItemCount(): number;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module navigation {
                    export abstract class NavigationBarMenuView {
                        public static class: java.lang.Class<com.google.android.material.navigation.NavigationBarMenuView>;
                        public getItemActiveIndicatorColor(): globalAndroid.content.res.ColorStateList;
                        public createDefaultColorStateList(baseColorThemeAttr: number): globalAndroid.content.res.ColorStateList;
                        public setItemBackground(this_: globalAndroid.graphics.drawable.Drawable): void;
                        public setItemPaddingBottom(this_: number): void;
                        public setItemActiveIndicatorEnabled(this_: boolean): void;
                        public setItemTextAppearanceInactive(this_: number): void;
                        public setItemBackgroundRes(this_: number): void;
                        public setItemActiveIndicatorResizeable(this_: boolean): void;
                        public getItemTextColor(): globalAndroid.content.res.ColorStateList;
                        public setItemActiveIndicatorWidth(this_: number): void;
                        public getSelectedItemPosition(): number;
                        public getIconTintList(): globalAndroid.content.res.ColorStateList;
                        public getItemIconSize(): number;
                        public getBadge(menuItemId: number): com.google.android.material.badge.BadgeDrawable;
                        public getItemActiveIndicatorEnabled(): boolean;
                        public findItemView(this_: number): com.google.android.material.navigation.NavigationBarItemView;
                        public updateMenuView(): void;
                        public getItemActiveIndicatorHeight(): number;
                        public setItemIconSize(this_: number): void;
                        public setPresenter(presenter: com.google.android.material.navigation.NavigationBarPresenter): void;
                        public initialize(menu: androidx.appcompat.view.menu.MenuBuilder): void;
                        public getWindowAnimations(): number;
                        public setItemTextColor(this_: globalAndroid.content.res.ColorStateList): void;
                        public onInitializeAccessibilityNodeInfo(info: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
                        public setLabelVisibilityMode(labelVisibilityMode: number): void;
                        public getItemRippleColor(): globalAndroid.content.res.ColorStateList;
                        public setItemPaddingTop(this_: number): void;
                        public isItemActiveIndicatorResizeable(): boolean;
                        /** @deprecated */
                        public getItemBackgroundRes(): number;
                        public setItemRippleColor(this_: globalAndroid.content.res.ColorStateList): void;
                        public buildMenuView(): void;
                        public getItemTextAppearanceInactive(): number;
                        public getSelectedItemId(): number;
                        public getItemActiveIndicatorShapeAppearance(): com.google.android.material.shape.ShapeAppearanceModel;
                        public setItemTextAppearanceActive(this_: number): void;
                        public setItemActiveIndicatorHeight(this_: number): void;
                        public getItemPaddingBottom(): number;
                        public getItemActiveIndicatorMarginHorizontal(): number;
                        public getItemActiveIndicatorWidth(): number;
                        public getItemPaddingTop(): number;
                        public getLabelVisibilityMode(): number;
                        public createNavigationBarItemView(param0: globalAndroid.content.Context): com.google.android.material.navigation.NavigationBarItemView;
                        public setItemOnTouchListener(this_: number, menuItemId: globalAndroid.view.View.OnTouchListener): void;
                        public getItemBackground(): globalAndroid.graphics.drawable.Drawable;
                        public getMenu(): androidx.appcompat.view.menu.MenuBuilder;
                        public setItemActiveIndicatorShapeAppearance(this_: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public setItemActiveIndicatorColor(this_: globalAndroid.content.res.ColorStateList): void;
                        public isShifting(labelVisibilityMode: number, childCount: number): boolean;
                        public setItemActiveIndicatorMarginHorizontal(this_: number): void;
                        public setIconTintList(this_: globalAndroid.content.res.ColorStateList): void;
                        public getItemTextAppearanceActive(): number;
                        public constructor(context: globalAndroid.content.Context);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module navigation {
                    export class NavigationBarPresenter {
                        public static class: java.lang.Class<com.google.android.material.navigation.NavigationBarPresenter>;
                        public expandItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
                        public constructor();
                        public flagActionItems(): boolean;
                        public setCallback(cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
                        public onSubMenuSelected(subMenu: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
                        public collapseItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
                        public getMenuView(root: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
                        public getId(): number;
                        public setMenuView(menuView: com.google.android.material.navigation.NavigationBarMenuView): void;
                        public setId(id: number): void;
                        public updateMenuView(cleared: boolean): void;
                        public setUpdateSuspended(updateSuspended: boolean): void;
                        public onSaveInstanceState(): globalAndroid.os.Parcelable;
                        public onRestoreInstanceState(this_: globalAndroid.os.Parcelable): void;
                        public initForMenu(context: globalAndroid.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder): void;
                        public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
                    }
                    export module NavigationBarPresenter {
                        export class SavedState {
                            public static class: java.lang.Class<com.google.android.material.navigation.NavigationBarPresenter.SavedState>;
                            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.navigation.NavigationBarPresenter.SavedState>;
                            public describeContents(): number;
                            public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module navigation {
                    export abstract class NavigationBarView {
                        public static class: java.lang.Class<com.google.android.material.navigation.NavigationBarView>;
                        public static LABEL_VISIBILITY_AUTO: number = -1;
                        public static LABEL_VISIBILITY_SELECTED: number = 0;
                        public static LABEL_VISIBILITY_LABELED: number = 1;
                        public static LABEL_VISIBILITY_UNLABELED: number = 2;
                        public setOnItemSelectedListener(listener: com.google.android.material.navigation.NavigationBarView.OnItemSelectedListener): void;
                        public setItemIconSizeRes(iconSizeRes: number): void;
                        public getItemActiveIndicatorColor(): globalAndroid.content.res.ColorStateList;
                        public setItemBackgroundResource(resId: number): void;
                        public createNavigationBarMenuView(param0: globalAndroid.content.Context): com.google.android.material.navigation.NavigationBarMenuView;
                        public getPresenter(): com.google.android.material.navigation.NavigationBarPresenter;
                        public setOnItemReselectedListener(listener: com.google.android.material.navigation.NavigationBarView.OnItemReselectedListener): void;
                        public isItemActiveIndicatorEnabled(): boolean;
                        public getItemTextColor(): globalAndroid.content.res.ColorStateList;
                        public inflateMenu(resId: number): void;
                        public getMaxItemCount(): number;
                        public getItemIconSize(): number;
                        public getBadge(menuItemId: number): com.google.android.material.badge.BadgeDrawable;
                        public setItemRippleColor(itemRippleColor: globalAndroid.content.res.ColorStateList): void;
                        public constructor(itemActiveIndicatorWidth: globalAndroid.content.Context, itemActiveIndicatorHeight: globalAndroid.util.AttributeSet, itemActiveIndicatorMarginHorizontal: number, itemActiveIndicatorColor: number);
                        public getMenu(): globalAndroid.view.Menu;
                        public getItemActiveIndicatorHeight(): number;
                        /** @deprecated */
                        public getItemBackgroundResource(): number;
                        public setItemTextColor(textColor: globalAndroid.content.res.ColorStateList): void;
                        public setLabelVisibilityMode(labelVisibilityMode: number): void;
                        public setItemActiveIndicatorEnabled(enabled: boolean): void;
                        public getMenuView(): androidx.appcompat.view.menu.MenuView;
                        public getItemRippleColor(): globalAndroid.content.res.ColorStateList;
                        public onAttachedToWindow(): void;
                        public setItemTextAppearanceActive(textAppearanceRes: number): void;
                        public getSelectedItemId(): number;
                        public getItemTextAppearanceInactive(): number;
                        public setItemActiveIndicatorWidth(width: number): void;
                        public getItemActiveIndicatorShapeAppearance(): com.google.android.material.shape.ShapeAppearanceModel;
                        public setItemActiveIndicatorColor(csl: globalAndroid.content.res.ColorStateList): void;
                        public setItemActiveIndicatorShapeAppearance(shapeAppearance: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public removeBadge(menuItemId: number): void;
                        public getItemIconTintList(): globalAndroid.content.res.ColorStateList;
                        public setSelectedItemId(itemId: number): void;
                        public setItemIconTintList(tint: globalAndroid.content.res.ColorStateList): void;
                        public getItemPaddingBottom(): number;
                        public getItemActiveIndicatorMarginHorizontal(): number;
                        public getItemActiveIndicatorWidth(): number;
                        public getItemPaddingTop(): number;
                        public getLabelVisibilityMode(): number;
                        public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
                        public setElevation(elevation: number): void;
                        public setItemActiveIndicatorMarginHorizontal(horizontalMargin: number): void;
                        public setItemActiveIndicatorHeight(height: number): void;
                        public getOrCreateBadge(menuItemId: number): com.google.android.material.badge.BadgeDrawable;
                        public getItemBackground(): globalAndroid.graphics.drawable.Drawable;
                        public setItemTextAppearanceInactive(textAppearanceRes: number): void;
                        public setItemPaddingTop(paddingTop: number): void;
                        public setItemIconSize(iconSize: number): void;
                        public setItemOnTouchListener(menuItemId: number, onTouchListener: globalAndroid.view.View.OnTouchListener): void;
                        public onSaveInstanceState(): globalAndroid.os.Parcelable;
                        public setItemBackground(background: globalAndroid.graphics.drawable.Drawable): void;
                        public getItemTextAppearanceActive(): number;
                        public setItemPaddingBottom(paddingBottom: number): void;
                    }
                    export module NavigationBarView {
                        export class LabelVisibility {
                            public static class: java.lang.Class<com.google.android.material.navigation.NavigationBarView.LabelVisibility>;
                            /**
                             * Constructs a new instance of the com.google.android.material.navigation.NavigationBarView$LabelVisibility interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class OnItemReselectedListener {
                            public static class: java.lang.Class<com.google.android.material.navigation.NavigationBarView.OnItemReselectedListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.navigation.NavigationBarView$OnItemReselectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onNavigationItemReselected(param0: globalAndroid.view.MenuItem): void;
                            });
                            public constructor();
                            public onNavigationItemReselected(param0: globalAndroid.view.MenuItem): void;
                        }
                        export class OnItemSelectedListener {
                            public static class: java.lang.Class<com.google.android.material.navigation.NavigationBarView.OnItemSelectedListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.navigation.NavigationBarView$OnItemSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onNavigationItemSelected(param0: globalAndroid.view.MenuItem): boolean;
                            });
                            public constructor();
                            public onNavigationItemSelected(param0: globalAndroid.view.MenuItem): boolean;
                        }
                        export class SavedState {
                            public static class: java.lang.Class<com.google.android.material.navigation.NavigationBarView.SavedState>;
                            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.navigation.NavigationBarView.SavedState>;
                            public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
                            public constructor(source: globalAndroid.os.Parcel, loader: java.lang.ClassLoader);
                            public constructor(superState: globalAndroid.os.Parcelable);
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module navigation {
                    export class NavigationView extends com.google.android.material.internal.ScrimInsetsFrameLayout {
                        public static class: java.lang.Class<com.google.android.material.navigation.NavigationView>;
                        public inflateHeaderView(res: number): globalAndroid.view.View;
                        public getItemIconPadding(): number;
                        public setBottomInsetScrimEnabled(enabled: boolean): void;
                        public setItemBackgroundResource(resId: number): void;
                        public addHeaderView(view: globalAndroid.view.View): void;
                        public setCheckedItem(checkedItem: globalAndroid.view.MenuItem): void;
                        public getItemTextColor(): globalAndroid.content.res.ColorStateList;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public inflateMenu(resId: number): void;
                        public getItemMaxLines(): number;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public onInsetsChanged(insets: androidx.core.view.WindowInsetsCompat): void;
                        public isBottomInsetScrimEnabled(): boolean;
                        public getMenu(): globalAndroid.view.Menu;
                        public setCheckedItem(id: number): void;
                        public setItemHorizontalPadding(padding: number): void;
                        public removeHeaderView(view: globalAndroid.view.View): void;
                        public setSubheaderInsetStart(subheaderInsetStart: number): void;
                        public setItemTextAppearance(resId: number): void;
                        public setOverScrollMode(overScrollMode: number): void;
                        public setItemTextColor(textColor: globalAndroid.content.res.ColorStateList): void;
                        public setItemBackground(itemBackground: globalAndroid.graphics.drawable.Drawable): void;
                        public getHeaderCount(): number;
                        public onRestoreInstanceState(savedState: globalAndroid.os.Parcelable): void;
                        public setSubheaderInsetEnd(subheaderInsetEnd: number): void;
                        public onAttachedToWindow(): void;
                        public getItemVerticalPadding(): number;
                        public onMeasure(widthSpec: number, heightSpec: number): void;
                        public setItemIconPaddingResource(paddingResource: number): void;
                        public setItemIconPadding(padding: number): void;
                        public setDividerInsetEnd(dividerInsetEnd: number): void;
                        public getItemIconTintList(): globalAndroid.content.res.ColorStateList;
                        public isTopInsetScrimEnabled(): boolean;
                        public setItemMaxLines(itemMaxLines: number): void;
                        public constructor(orig: globalAndroid.content.Context, materialShapeDrawable: globalAndroid.util.AttributeSet, itemIconTint: number);
                        public setItemIconTintList(tint: globalAndroid.content.res.ColorStateList): void;
                        public dispatchDraw(canvas: globalAndroid.graphics.Canvas): void;
                        public getDividerInsetStart(): number;
                        public getSubheaderInsetStart(): number;
                        public getItemHorizontalPadding(): number;
                        public setItemVerticalPadding(padding: number): void;
                        public getSubheaderInsetEnd(): number;
                        public setDividerInsetStart(dividerInsetStart: number): void;
                        public setElevation(elevation: number): void;
                        public onDetachedFromWindow(): void;
                        public getItemBackground(): globalAndroid.graphics.drawable.Drawable;
                        public getCheckedItem(): globalAndroid.view.MenuItem;
                        public setItemIconSize(iconSize: number): void;
                        public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
                        public setNavigationItemSelectedListener(listener: com.google.android.material.navigation.NavigationView.OnNavigationItemSelectedListener): void;
                        public getHeaderView(index: number): globalAndroid.view.View;
                        public getDividerInsetEnd(): number;
                        public setItemVerticalPaddingResource(paddingResource: number): void;
                        public onSaveInstanceState(): globalAndroid.os.Parcelable;
                        public setItemHorizontalPaddingResource(paddingResource: number): void;
                        public constructor(context: globalAndroid.content.Context);
                        public setTopInsetScrimEnabled(enabled: boolean): void;
                    }
                    export module NavigationView {
                        export class OnNavigationItemSelectedListener {
                            public static class: java.lang.Class<com.google.android.material.navigation.NavigationView.OnNavigationItemSelectedListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.navigation.NavigationView$OnNavigationItemSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onNavigationItemSelected(param0: globalAndroid.view.MenuItem): boolean;
                            });
                            public constructor();
                            public onNavigationItemSelected(param0: globalAndroid.view.MenuItem): boolean;
                        }
                        export class SavedState {
                            public static class: java.lang.Class<com.google.android.material.navigation.NavigationView.SavedState>;
                            public menuState: globalAndroid.os.Bundle;
                            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.navigation.NavigationView.SavedState>;
                            public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
                            public constructor(in_: globalAndroid.os.Parcel, loader: java.lang.ClassLoader);
                            public constructor(superState: globalAndroid.os.Parcelable);
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module navigationrail {
                    export class NavigationRailItemView extends com.google.android.material.navigation.NavigationBarItemView {
                        public static class: java.lang.Class<com.google.android.material.navigationrail.NavigationRailItemView>;
                        public getItemLayoutResId(): number;
                        public getItemDefaultMarginResId(): number;
                        public onMeasure(measuredHeight: number, bestHeight: number): void;
                        public constructor(context: globalAndroid.content.Context);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module navigationrail {
                    export class NavigationRailMenuView extends com.google.android.material.navigation.NavigationBarMenuView {
                        public static class: java.lang.Class<com.google.android.material.navigationrail.NavigationRailMenuView>;
                        public onMeasure(this_: number, widthMeasureSpec: number): void;
                        public getItemMinimumHeight(): number;
                        public createNavigationBarItemView(context: globalAndroid.content.Context): com.google.android.material.navigation.NavigationBarItemView;
                        public constructor(context: globalAndroid.content.Context);
                        public onLayout(child: boolean, i: number, this_: number, changed: number, left: number): void;
                        public setItemMinimumHeight(minHeight: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module navigationrail {
                    export class NavigationRailView extends com.google.android.material.navigation.NavigationBarView {
                        public static class: java.lang.Class<com.google.android.material.navigationrail.NavigationRailView>;
                        public onMeasure(menuHeightSpec: number, this_: number): void;
                        public addHeaderView(layoutRes: number): void;
                        public constructor(itemActiveIndicatorWidth: globalAndroid.content.Context, itemActiveIndicatorHeight: globalAndroid.util.AttributeSet, itemActiveIndicatorMarginHorizontal: number, itemActiveIndicatorColor: number);
                        public getMenuGravity(): number;
                        public createNavigationBarMenuView(context: globalAndroid.content.Context): com.google.android.material.navigationrail.NavigationRailMenuView;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
                        public createNavigationBarMenuView(param0: globalAndroid.content.Context): com.google.android.material.navigation.NavigationBarMenuView;
                        public removeHeaderView(): void;
                        public getHeaderView(): globalAndroid.view.View;
                        public setItemMinimumHeight(minHeight: number): void;
                        public onLayout(menuTop: boolean, this_: number, changed: number, left: number, top: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public getItemMinimumHeight(): number;
                        public getMaxItemCount(): number;
                        public addHeaderView(headerView: globalAndroid.view.View): void;
                        public constructor(context: globalAndroid.content.Context);
                        public setMenuGravity(gravity: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module progressindicator {
                    export class AnimatorDurationScaleProvider {
                        public static class: java.lang.Class<com.google.android.material.progressindicator.AnimatorDurationScaleProvider>;
                        public static setDefaultSystemAnimatorDurationScale(scale: number): void;
                        public getSystemAnimatorDurationScale(contentResolver: globalAndroid.content.ContentResolver): number;
                        public constructor();
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module progressindicator {
                    export abstract class BaseProgressIndicator<S> extends globalAndroid.widget.ProgressBar {
                        public static class: java.lang.Class<com.google.android.material.progressindicator.BaseProgressIndicator<any>>;
                        public static SHOW_NONE: number = 0;
                        public static SHOW_OUTWARD: number = 1;
                        public static SHOW_INWARD: number = 2;
                        public static HIDE_NONE: number = 0;
                        public static HIDE_OUTWARD: number = 1;
                        public static HIDE_INWARD: number = 2;
                        public setShowAnimationBehavior(showAnimationBehavior: number): void;
                        public onVisibilityChanged(changedView: globalAndroid.view.View, visibility: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
                        public onAttachedToWindow(): void;
                        public setHideAnimationBehavior(hideAnimationBehavior: number): void;
                        public getTrackColor(): number;
                        public getTrackCornerRadius(): number;
                        public getCurrentDrawable(): globalAndroid.graphics.drawable.Drawable;
                        public getProgressDrawable(): com.google.android.material.progressindicator.DeterminateDrawable<any>;
                        public getHideAnimationBehavior(): number;
                        public setIndicatorColor(indicatorColors: androidNative.Array<number>): void;
                        public setAnimatorDurationScaleProvider(animatorDurationScaleProvider: com.google.android.material.progressindicator.AnimatorDurationScaleProvider): void;
                        public setIndeterminate(indeterminate: boolean): void;
                        public setTrackThickness(trackThickness: number): void;
                        public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
                        public getIndicatorColor(): androidNative.Array<number>;
                        public applyNewVisibility(animate: boolean): void;
                        public setProgressDrawable(this_: globalAndroid.graphics.drawable.Drawable): void;
                        public getShowAnimationBehavior(): number;
                        public onDetachedFromWindow(): void;
                        public setIndeterminateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public hide(): void;
                        public setProgressCompat(progress: number, animated: boolean): void;
                        public onWindowVisibilityChanged(visibility: number): void;
                        public setVisibilityAfterHide(visibility: number): void;
                        public onDraw(h: globalAndroid.graphics.Canvas): void;
                        public setTrackColor(trackColor: number): void;
                        public getIndeterminateDrawable(): com.google.android.material.progressindicator.IndeterminateDrawable<any>;
                        public setTrackCornerRadius(trackCornerRadius: number): void;
                        public invalidate(): void;
                        public show(): void;
                        public setProgress(progress: number): void;
                        public getTrackThickness(): number;
                    }
                    export module BaseProgressIndicator {
                        export class HideAnimationBehavior {
                            public static class: java.lang.Class<com.google.android.material.progressindicator.BaseProgressIndicator.HideAnimationBehavior>;
                            /**
                             * Constructs a new instance of the com.google.android.material.progressindicator.BaseProgressIndicator$HideAnimationBehavior interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class ShowAnimationBehavior {
                            public static class: java.lang.Class<com.google.android.material.progressindicator.BaseProgressIndicator.ShowAnimationBehavior>;
                            /**
                             * Constructs a new instance of the com.google.android.material.progressindicator.BaseProgressIndicator$ShowAnimationBehavior interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module progressindicator {
                    export abstract class BaseProgressIndicatorSpec {
                        public static class: java.lang.Class<com.google.android.material.progressindicator.BaseProgressIndicatorSpec>;
                        public trackThickness: number;
                        public trackCornerRadius: number;
                        public indicatorColors: androidNative.Array<number>;
                        public trackColor: number;
                        public showAnimationBehavior: number;
                        public hideAnimationBehavior: number;
                        public isHideAnimationEnabled(): boolean;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
                        public isShowAnimationEnabled(): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module progressindicator {
                    export class CircularDrawingDelegate extends com.google.android.material.progressindicator.DrawingDelegate<com.google.android.material.progressindicator.CircularProgressIndicatorSpec> {
                        public static class: java.lang.Class<com.google.android.material.progressindicator.CircularDrawingDelegate>;
                        public adjustCanvas(canvas: globalAndroid.graphics.Canvas, bounds: globalAndroid.graphics.Rect, trackThicknessFraction: number): void;
                        public getPreferredWidth(): number;
                        public constructor(spec: com.google.android.material.progressindicator.CircularProgressIndicatorSpec);
                        public getPreferredHeight(): number;
                        public constructor(spec: any);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module progressindicator {
                    export class CircularIndeterminateAnimatorDelegate extends com.google.android.material.progressindicator.IndeterminateAnimatorDelegate<globalAndroid.animation.ObjectAnimator> {
                        public static class: java.lang.Class<com.google.android.material.progressindicator.CircularIndeterminateAnimatorDelegate>;
                        public registerAnimatorsCompleteCallback(callback: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): void;
                        public constructor(segmentCount: number);
                        public unregisterAnimatorsCompleteCallback(): void;
                        public invalidateSpecValues(): void;
                        public constructor(spec: com.google.android.material.progressindicator.CircularProgressIndicatorSpec);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module progressindicator {
                    export class CircularProgressIndicator extends com.google.android.material.progressindicator.BaseProgressIndicator<com.google.android.material.progressindicator.CircularProgressIndicatorSpec> {
                        public static class: java.lang.Class<com.google.android.material.progressindicator.CircularProgressIndicator>;
                        public static DEF_STYLE_RES: number;
                        public static INDICATOR_DIRECTION_CLOCKWISE: number = 0;
                        public static INDICATOR_DIRECTION_COUNTERCLOCKWISE: number = 1;
                        public getIndicatorInset(): number;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public getIndicatorSize(): number;
                        public setIndicatorInset(indicatorInset: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public setIndicatorDirection(indicatorDirection: number): void;
                        public setIndicatorSize(indicatorSize: number): void;
                        public constructor(context: globalAndroid.content.Context);
                        public getIndicatorDirection(): number;
                        public setTrackThickness(trackThickness: number): void;
                    }
                    export module CircularProgressIndicator {
                        export class IndicatorDirection {
                            public static class: java.lang.Class<com.google.android.material.progressindicator.CircularProgressIndicator.IndicatorDirection>;
                            /**
                             * Constructs a new instance of the com.google.android.material.progressindicator.CircularProgressIndicator$IndicatorDirection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module progressindicator {
                    export class CircularProgressIndicatorSpec extends com.google.android.material.progressindicator.BaseProgressIndicatorSpec {
                        public static class: java.lang.Class<com.google.android.material.progressindicator.CircularProgressIndicatorSpec>;
                        public indicatorSize: number;
                        public indicatorInset: number;
                        public indicatorDirection: number;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module progressindicator {
                    export class DeterminateDrawable<S> extends com.google.android.material.progressindicator.DrawableWithAnimatedVisibilityChange {
                        public static class: java.lang.Class<com.google.android.material.progressindicator.DeterminateDrawable<any>>;
                        public onLevelChange(level: number): boolean;
                        public getIntrinsicWidth(): number;
                        public getIntrinsicHeight(): number;
                        public removeSpringAnimationEndListener(listener: androidx.dynamicanimation.animation.DynamicAnimation.OnAnimationEndListener): void;
                        public draw(canvas: globalAndroid.graphics.Canvas): void;
                        public static createLinearDrawable(context: globalAndroid.content.Context, spec: com.google.android.material.progressindicator.LinearProgressIndicatorSpec): com.google.android.material.progressindicator.DeterminateDrawable<com.google.android.material.progressindicator.LinearProgressIndicatorSpec>;
                        public static createCircularDrawable(context: globalAndroid.content.Context, spec: com.google.android.material.progressindicator.CircularProgressIndicatorSpec): com.google.android.material.progressindicator.DeterminateDrawable<com.google.android.material.progressindicator.CircularProgressIndicatorSpec>;
                        public jumpToCurrentState(): void;
                        public addSpringAnimationEndListener(listener: androidx.dynamicanimation.animation.DynamicAnimation.OnAnimationEndListener): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module progressindicator {
                    export abstract class DrawableWithAnimatedVisibilityChange {
                        public static class: java.lang.Class<com.google.android.material.progressindicator.DrawableWithAnimatedVisibilityChange>;
                        public setVisible(visible: boolean, restart: boolean): boolean;
                        public unregisterAnimationCallback(callback: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): boolean;
                        public getAlpha(): number;
                        public getOpacity(): number;
                        public isHiding(): boolean;
                        public stop(): void;
                        public isRunning(): boolean;
                        public setColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): void;
                        public hideNow(): boolean;
                        public start(): void;
                        public setVisible(visible: boolean, restart: boolean, animate: boolean): boolean;
                        public setAlpha(alpha: number): void;
                        public clearAnimationCallbacks(): void;
                        public registerAnimationCallback(callback: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): void;
                        public isShowing(): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module progressindicator {
                    export abstract class DrawingDelegate<S> extends java.lang.Object {
                        public static class: java.lang.Class<com.google.android.material.progressindicator.DrawingDelegate<any>>;
                        public drawable: com.google.android.material.progressindicator.DrawableWithAnimatedVisibilityChange;
                        public constructor(spec: S);
                        public registerDrawable(drawable: com.google.android.material.progressindicator.DrawableWithAnimatedVisibilityChange): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module progressindicator {
                    export abstract class IndeterminateAnimatorDelegate<T> extends java.lang.Object {
                        public static class: java.lang.Class<com.google.android.material.progressindicator.IndeterminateAnimatorDelegate<any>>;
                        public drawable: com.google.android.material.progressindicator.IndeterminateDrawable<any>;
                        public segmentPositions: androidNative.Array<number>;
                        public segmentColors: androidNative.Array<number>;
                        public constructor(segmentCount: number);
                        public registerDrawable(drawable: com.google.android.material.progressindicator.IndeterminateDrawable<any>): void;
                        public registerAnimatorsCompleteCallback(param0: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): void;
                        public unregisterAnimatorsCompleteCallback(): void;
                        public invalidateSpecValues(): void;
                        public getFractionInRange(playtime: number, start: number, duration: number): number;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module progressindicator {
                    export class IndeterminateDrawable<S> extends com.google.android.material.progressindicator.DrawableWithAnimatedVisibilityChange {
                        public static class: java.lang.Class<com.google.android.material.progressindicator.IndeterminateDrawable<any>>;
                        public getIntrinsicWidth(): number;
                        public draw(this_: globalAndroid.graphics.Canvas): void;
                        public static createCircularDrawable(context: globalAndroid.content.Context, spec: com.google.android.material.progressindicator.CircularProgressIndicatorSpec): com.google.android.material.progressindicator.IndeterminateDrawable<com.google.android.material.progressindicator.CircularProgressIndicatorSpec>;
                        public getIntrinsicHeight(): number;
                        public static createLinearDrawable(context: globalAndroid.content.Context, spec: com.google.android.material.progressindicator.LinearProgressIndicatorSpec): com.google.android.material.progressindicator.IndeterminateDrawable<com.google.android.material.progressindicator.LinearProgressIndicatorSpec>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module progressindicator {
                    export class LinearDrawingDelegate extends com.google.android.material.progressindicator.DrawingDelegate<com.google.android.material.progressindicator.LinearProgressIndicatorSpec> {
                        public static class: java.lang.Class<com.google.android.material.progressindicator.LinearDrawingDelegate>;
                        public adjustCanvas(canvas: globalAndroid.graphics.Canvas, bounds: globalAndroid.graphics.Rect, trackThicknessFraction: number): void;
                        public getPreferredWidth(): number;
                        public constructor(spec: com.google.android.material.progressindicator.LinearProgressIndicatorSpec);
                        public getPreferredHeight(): number;
                        public constructor(spec: any);
                        public fillIndicator(canvas: globalAndroid.graphics.Canvas, paint: globalAndroid.graphics.Paint, startFraction: number, endFraction: number, color: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module progressindicator {
                    export class LinearIndeterminateContiguousAnimatorDelegate extends com.google.android.material.progressindicator.IndeterminateAnimatorDelegate<globalAndroid.animation.ObjectAnimator> {
                        public static class: java.lang.Class<com.google.android.material.progressindicator.LinearIndeterminateContiguousAnimatorDelegate>;
                        public registerAnimatorsCompleteCallback(callback: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): void;
                        public constructor(segmentCount: number);
                        public startAnimator(): void;
                        public requestCancelAnimatorAfterCurrentCycle(): void;
                        public unregisterAnimatorsCompleteCallback(): void;
                        public invalidateSpecValues(): void;
                        public constructor(spec: com.google.android.material.progressindicator.LinearProgressIndicatorSpec);
                        public cancelAnimatorImmediately(): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module progressindicator {
                    export class LinearIndeterminateDisjointAnimatorDelegate extends com.google.android.material.progressindicator.IndeterminateAnimatorDelegate<globalAndroid.animation.ObjectAnimator> {
                        public static class: java.lang.Class<com.google.android.material.progressindicator.LinearIndeterminateDisjointAnimatorDelegate>;
                        public registerAnimatorsCompleteCallback(callback: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): void;
                        public constructor(segmentCount: number);
                        public startAnimator(): void;
                        public requestCancelAnimatorAfterCurrentCycle(): void;
                        public unregisterAnimatorsCompleteCallback(): void;
                        public constructor(context: globalAndroid.content.Context, spec: com.google.android.material.progressindicator.LinearProgressIndicatorSpec);
                        public invalidateSpecValues(): void;
                        public cancelAnimatorImmediately(): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module progressindicator {
                    export class LinearProgressIndicator extends com.google.android.material.progressindicator.BaseProgressIndicator<com.google.android.material.progressindicator.LinearProgressIndicatorSpec> {
                        public static class: java.lang.Class<com.google.android.material.progressindicator.LinearProgressIndicator>;
                        public static DEF_STYLE_RES: number;
                        public static INDETERMINATE_ANIMATION_TYPE_CONTIGUOUS: number = 0;
                        public static INDETERMINATE_ANIMATION_TYPE_DISJOINT: number = 1;
                        public static INDICATOR_DIRECTION_LEFT_TO_RIGHT: number = 0;
                        public static INDICATOR_DIRECTION_RIGHT_TO_LEFT: number = 1;
                        public static INDICATOR_DIRECTION_START_TO_END: number = 2;
                        public static INDICATOR_DIRECTION_END_TO_START: number = 3;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
                        public getIndeterminateAnimationType(): number;
                        public setProgressCompat(progress: number, animated: boolean): void;
                        public setIndicatorDirection(indicatorDirection: number): void;
                        public getIndicatorDirection(): number;
                        public setTrackCornerRadius(trackCornerRadius: number): void;
                        public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
                        public setIndeterminateAnimationType(indeterminateAnimationType: number): void;
                        public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public setIndicatorColor(indicatorColors: androidNative.Array<number>): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public constructor(context: globalAndroid.content.Context);
                    }
                    export module LinearProgressIndicator {
                        export class IndeterminateAnimationType {
                            public static class: java.lang.Class<com.google.android.material.progressindicator.LinearProgressIndicator.IndeterminateAnimationType>;
                            /**
                             * Constructs a new instance of the com.google.android.material.progressindicator.LinearProgressIndicator$IndeterminateAnimationType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class IndicatorDirection {
                            public static class: java.lang.Class<com.google.android.material.progressindicator.LinearProgressIndicator.IndicatorDirection>;
                            /**
                             * Constructs a new instance of the com.google.android.material.progressindicator.LinearProgressIndicator$IndicatorDirection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module progressindicator {
                    export class LinearProgressIndicatorSpec extends com.google.android.material.progressindicator.BaseProgressIndicatorSpec {
                        public static class: java.lang.Class<com.google.android.material.progressindicator.LinearProgressIndicatorSpec>;
                        public indeterminateAnimationType: number;
                        public indicatorDirection: number;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module radiobutton {
                    export class MaterialRadioButton {
                        public static class: java.lang.Class<com.google.android.material.radiobutton.MaterialRadioButton>;
                        public isUseMaterialThemeColors(): boolean;
                        public setUseMaterialThemeColors(useMaterialThemeColors: boolean): void;
                        public onAttachedToWindow(): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public constructor(context: globalAndroid.content.Context);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module resources {
                    export class CancelableFontCallback extends com.google.android.material.resources.TextAppearanceFontCallback {
                        public static class: java.lang.Class<com.google.android.material.resources.CancelableFontCallback>;
                        public constructor();
                        public constructor(applyFont: com.google.android.material.resources.CancelableFontCallback.ApplyFont, fallbackFont: globalAndroid.graphics.Typeface);
                        public onFontRetrieved(font: globalAndroid.graphics.Typeface, fontResolvedSynchronously: boolean): void;
                        public cancel(): void;
                        public onFontRetrievalFailed(reason: number): void;
                    }
                    export module CancelableFontCallback {
                        export class ApplyFont {
                            public static class: java.lang.Class<com.google.android.material.resources.CancelableFontCallback.ApplyFont>;
                            /**
                             * Constructs a new instance of the com.google.android.material.resources.CancelableFontCallback$ApplyFont interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                apply(param0: globalAndroid.graphics.Typeface): void;
                            });
                            public constructor();
                            public apply(param0: globalAndroid.graphics.Typeface): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module resources {
                    export class MaterialAttributes {
                        public static class: java.lang.Class<com.google.android.material.resources.MaterialAttributes>;
                        public static resolveTypedValueOrThrow(componentView: globalAndroid.view.View, attributeResId: number): globalAndroid.util.TypedValue;
                        public constructor();
                        public static resolveOrThrow(context: globalAndroid.content.Context, attributeResId: number, errorMessageComponent: string): number;
                        public static resolveInteger(context: globalAndroid.content.Context, attributeResId: number, defaultValue: number): number;
                        public static resolveMinimumAccessibleTouchTarget(context: globalAndroid.content.Context): number;
                        public static resolve(context: globalAndroid.content.Context, attributeResId: number): globalAndroid.util.TypedValue;
                        public static resolveBooleanOrThrow(context: globalAndroid.content.Context, attributeResId: number, errorMessageComponent: string): boolean;
                        public static resolveTypedValueOrThrow(errorMessage: globalAndroid.content.Context, context: number, attributeResId: string): globalAndroid.util.TypedValue;
                        public static resolveOrThrow(componentView: globalAndroid.view.View, attributeResId: number): number;
                        public static resolveBoolean(context: globalAndroid.content.Context, attributeResId: number, defaultValue: boolean): boolean;
                        public static resolveDimension(context: globalAndroid.content.Context, attributeResId: number, defaultDimenResId: number): number;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module resources {
                    export class MaterialResources {
                        public static class: java.lang.Class<com.google.android.material.resources.MaterialResources>;
                        public static getUnscaledTextSize(context: globalAndroid.content.Context, textAppearance: number, defValue: number): number;
                        public static isFontScaleAtLeast2_0(context: globalAndroid.content.Context): boolean;
                        public static getColorStateList(value: globalAndroid.content.Context, resourceId: androidx.appcompat.widget.TintTypedArray, color: number): globalAndroid.content.res.ColorStateList;
                        public static isFontScaleAtLeast1_3(context: globalAndroid.content.Context): boolean;
                        public static getColorStateList(value: globalAndroid.content.Context, resourceId: globalAndroid.content.res.TypedArray, color: number): globalAndroid.content.res.ColorStateList;
                        public static getDimensionPixelSize(context: globalAndroid.content.Context, attributes: globalAndroid.content.res.TypedArray, index: number, defaultValue: number): number;
                        public static getDrawable(value: globalAndroid.content.Context, resourceId: globalAndroid.content.res.TypedArray, context: number): globalAndroid.graphics.drawable.Drawable;
                        public static getTextAppearance(resourceId: globalAndroid.content.Context, context: globalAndroid.content.res.TypedArray, attributes: number): com.google.android.material.resources.TextAppearance;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module resources {
                    export class TextAppearance {
                        public static class: java.lang.Class<com.google.android.material.resources.TextAppearance>;
                        public textColorHint: globalAndroid.content.res.ColorStateList;
                        public textColorLink: globalAndroid.content.res.ColorStateList;
                        public shadowColor: globalAndroid.content.res.ColorStateList;
                        public fontFamily: string;
                        public textStyle: number;
                        public typeface: number;
                        public textAllCaps: boolean;
                        public shadowDx: number;
                        public shadowDy: number;
                        public shadowRadius: number;
                        public hasLetterSpacing: boolean;
                        public letterSpacing: number;
                        public setTextColor(textColor: globalAndroid.content.res.ColorStateList): void;
                        public getTextSize(): number;
                        public updateDrawState(context: globalAndroid.content.Context, textPaint: globalAndroid.text.TextPaint, callback: com.google.android.material.resources.TextAppearanceFontCallback): void;
                        public getTextColor(): globalAndroid.content.res.ColorStateList;
                        public getFontAsync(e: globalAndroid.content.Context, this_: com.google.android.material.resources.TextAppearanceFontCallback): void;
                        public updateMeasureState(context: globalAndroid.content.Context, textPaint: globalAndroid.text.TextPaint, callback: com.google.android.material.resources.TextAppearanceFontCallback): void;
                        public getFont(this_: globalAndroid.content.Context): globalAndroid.graphics.Typeface;
                        public getFontAsync(context: globalAndroid.content.Context, textPaint: globalAndroid.text.TextPaint, callback: com.google.android.material.resources.TextAppearanceFontCallback): void;
                        public getFallbackFont(): globalAndroid.graphics.Typeface;
                        public constructor(context: globalAndroid.content.Context, id: number);
                        public setTextSize(textSize: number): void;
                        public updateTextPaintMeasureState(context: globalAndroid.content.Context, textPaint: globalAndroid.text.TextPaint, typeface: globalAndroid.graphics.Typeface): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module resources {
                    export class TextAppearanceConfig {
                        public static class: java.lang.Class<com.google.android.material.resources.TextAppearanceConfig>;
                        public constructor();
                        public static setShouldLoadFontSynchronously(flag: boolean): void;
                        public static shouldLoadFontSynchronously(): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module resources {
                    export abstract class TextAppearanceFontCallback {
                        public static class: java.lang.Class<com.google.android.material.resources.TextAppearanceFontCallback>;
                        public constructor();
                        public onFontRetrieved(param0: globalAndroid.graphics.Typeface, param1: boolean): void;
                        public onFontRetrievalFailed(param0: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module resources {
                    export class TypefaceUtils {
                        public static class: java.lang.Class<com.google.android.material.resources.TypefaceUtils>;
                        public static maybeCopyWithFontWeightAdjustment(context: globalAndroid.content.Context, typeface: globalAndroid.graphics.Typeface): globalAndroid.graphics.Typeface;
                        public static maybeCopyWithFontWeightAdjustment(adjustedWeight: globalAndroid.content.res.Configuration, configuration: globalAndroid.graphics.Typeface): globalAndroid.graphics.Typeface;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module ripple {
                    export class RippleDrawableCompat implements com.google.android.material.shape.Shapeable {
                        public static class: java.lang.Class<com.google.android.material.ripple.RippleDrawableCompat>;
                        public setTintList(tintList: globalAndroid.content.res.ColorStateList): void;
                        public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
                        public setShapeAppearanceModel(shapeAppearanceModel: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public draw(canvas: globalAndroid.graphics.Canvas): void;
                        public constructor(shapeAppearanceModel: com.google.android.material.shape.ShapeAppearanceModel);
                        public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public getOpacity(): number;
                        public setTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
                        public setColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): void;
                        public onBoundsChange(bounds: globalAndroid.graphics.Rect): void;
                        public isStateful(): boolean;
                        public mutate(): com.google.android.material.ripple.RippleDrawableCompat;
                        public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
                        public onStateChange(stateSet: androidNative.Array<number>): boolean;
                        public setAlpha(alpha: number): void;
                        public setTint(tintColor: number): void;
                    }
                    export module RippleDrawableCompat {
                        export class RippleDrawableCompatState {
                            public static class: java.lang.Class<com.google.android.material.ripple.RippleDrawableCompat.RippleDrawableCompatState>;
                            public newDrawable(): com.google.android.material.ripple.RippleDrawableCompat;
                            public constructor(orig: com.google.android.material.ripple.RippleDrawableCompat.RippleDrawableCompatState);
                            public constructor(delegate: com.google.android.material.shape.MaterialShapeDrawable);
                            public getChangingConfigurations(): number;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module ripple {
                    export class RippleUtils {
                        public static class: java.lang.Class<com.google.android.material.ripple.RippleUtils>;
                        public static USE_FRAMEWORK_RIPPLE: boolean;
                        public static shouldDrawRippleCompat(state: androidNative.Array<number>): boolean;
                        public static createOvalRippleLollipop(context: globalAndroid.content.Context, padding: number): globalAndroid.graphics.drawable.Drawable;
                        public static convertToRippleDrawableColor(size: globalAndroid.content.res.ColorStateList): globalAndroid.content.res.ColorStateList;
                        public static sanitizeRippleDrawableColor(rippleColor: globalAndroid.content.res.ColorStateList): globalAndroid.content.res.ColorStateList;
                    }
                    export module RippleUtils {
                        export class RippleUtilsLollipop {
                            public static class: java.lang.Class<com.google.android.material.ripple.RippleUtils.RippleUtilsLollipop>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module search {
                    export class SearchBar {
                        public static class: java.lang.Class<com.google.android.material.search.SearchBar>;
                        public setStrokeWidth(strokeWidth: number): void;
                        public getCenterView(): globalAndroid.view.View;
                        public getStrokeColor(): number;
                        public expand(expandedView: globalAndroid.view.View, appBarLayout: com.google.android.material.appbar.AppBarLayout): boolean;
                        public isExpanding(): boolean;
                        public stopOnLoadAnimation(): void;
                        public expand(expandedView: globalAndroid.view.View, appBarLayout: com.google.android.material.appbar.AppBarLayout, skipAnimation: boolean): boolean;
                        public collapse(expandedView: globalAndroid.view.View, appBarLayout: com.google.android.material.appbar.AppBarLayout, skipAnimation: boolean): boolean;
                        public addCollapseAnimationListener(listener: globalAndroid.animation.AnimatorListenerAdapter): void;
                        public getHint(): string;
                        public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
                        public removeCollapseAnimationListener(listener: globalAndroid.animation.AnimatorListenerAdapter): boolean;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public setStrokeColor(strokeColor: number): void;
                        public inflateMenu(resId: number): void;
                        public setOnLoadAnimationFadeInEnabled(onLoadAnimationFadeInEnabled: boolean): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public collapse(expandedView: globalAndroid.view.View): boolean;
                        public setHint(hint: string): void;
                        public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
                        public getTextView(): globalAndroid.widget.TextView;
                        public isDefaultScrollFlagsEnabled(): boolean;
                        public setSubtitle(subtitle: string): void;
                        public onInitializeAccessibilityNodeInfo(info: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
                        public isOnLoadAnimationFadeInEnabled(): boolean;
                        public setTitle(title: string): void;
                        public startOnLoadAnimation(): void;
                        public getCornerSize(): number;
                        public collapse(expandedView: globalAndroid.view.View, appBarLayout: com.google.android.material.appbar.AppBarLayout): boolean;
                        public onAttachedToWindow(): void;
                        public addOnLoadAnimationCallback(onLoadAnimationCallback: com.google.android.material.search.SearchBar.OnLoadAnimationCallback): void;
                        public addExpandAnimationListener(listener: globalAndroid.animation.AnimatorListenerAdapter): void;
                        public getText(): string;
                        public isCollapsing(): boolean;
                        public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
                        public getStrokeWidth(): number;
                        public removeExpandAnimationListener(listener: globalAndroid.animation.AnimatorListenerAdapter): boolean;
                        public setNavigationOnClickListener(listener: globalAndroid.view.View.OnClickListener): void;
                        public removeOnLoadAnimationCallback(onLoadAnimationCallback: com.google.android.material.search.SearchBar.OnLoadAnimationCallback): boolean;
                        public setText(textResId: number): void;
                        public expand(expandedView: globalAndroid.view.View): boolean;
                        public setDefaultScrollFlagsEnabled(defaultScrollFlagsEnabled: boolean): void;
                        public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
                        public setElevation(elevation: number): void;
                        public clearText(): void;
                        public setCenterView(view: globalAndroid.view.View): void;
                        public setText(text: string): void;
                        public setHint(hintResId: number): void;
                        public onSaveInstanceState(): globalAndroid.os.Parcelable;
                        public setNavigationIcon(navigationIcon: globalAndroid.graphics.drawable.Drawable): void;
                        public constructor(context: globalAndroid.content.Context);
                    }
                    export module SearchBar {
                        export abstract class OnLoadAnimationCallback {
                            public static class: java.lang.Class<com.google.android.material.search.SearchBar.OnLoadAnimationCallback>;
                            public constructor();
                            public onAnimationEnd(): void;
                            public onAnimationStart(): void;
                        }
                        export class SavedState {
                            public static class: java.lang.Class<com.google.android.material.search.SearchBar.SavedState>;
                            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.search.SearchBar.SavedState>;
                            public constructor(source: globalAndroid.os.Parcel, classLoader: java.lang.ClassLoader);
                            public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
                            public constructor(source: globalAndroid.os.Parcel);
                            public constructor(superState: globalAndroid.os.Parcelable);
                        }
                        export class ScrollingViewBehavior extends com.google.android.material.appbar.AppBarLayout.ScrollingViewBehavior {
                            public static class: java.lang.Class<com.google.android.material.search.SearchBar.ScrollingViewBehavior>;
                            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                            public constructor();
                            public shouldHeaderOverlapScrollingChild(): boolean;
                            public onDependentViewChanged(this_: androidx.coordinatorlayout.widget.CoordinatorLayout, parent: globalAndroid.view.View, child: globalAndroid.view.View): boolean;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module search {
                    export class SearchBarAnimationHelper {
                        public static class: java.lang.Class<com.google.android.material.search.SearchBarAnimationHelper>;
                    }
                    export module SearchBarAnimationHelper {
                        export class OnLoadAnimationInvocation {
                            public static class: java.lang.Class<com.google.android.material.search.SearchBarAnimationHelper.OnLoadAnimationInvocation>;
                            /**
                             * Constructs a new instance of the com.google.android.material.search.SearchBarAnimationHelper$OnLoadAnimationInvocation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                invoke(param0: com.google.android.material.search.SearchBar.OnLoadAnimationCallback): void;
                            });
                            public constructor();
                            public invoke(param0: com.google.android.material.search.SearchBar.OnLoadAnimationCallback): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module search {
                    export class SearchView {
                        public static class: java.lang.Class<com.google.android.material.search.SearchView>;
                        public onFinishInflate(): void;
                        public setupWithSearchBar(searchBar: com.google.android.material.search.SearchBar): void;
                        public isUseWindowInsetsController(): boolean;
                        public addTransitionListener(transitionListener: com.google.android.material.search.SearchView.TransitionListener): void;
                        public getHint(): string;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public setOnMenuItemClickListener(onMenuItemClickListener: androidx.appcompat.widget.Toolbar.OnMenuItemClickListener): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public inflateMenu(menuResId: number): void;
                        public setHint(hint: string): void;
                        public setMenuItemsAnimated(menuItemsAnimated: boolean): void;
                        public getCurrentTransitionState(): com.google.android.material.search.SearchView.TransitionState;
                        public getText(): globalAndroid.text.Editable;
                        public setToolbarTouchscreenBlocksFocus(touchscreenBlocksFocus: boolean): void;
                        public getSearchPrefixText(): string;
                        public getEditText(): globalAndroid.widget.EditText;
                        public isSetupWithSearchBar(): boolean;
                        public setSearchPrefixText(searchPrefixText: string): void;
                        public isShowing(): boolean;
                        public isAnimatedNavigationIcon(): boolean;
                        public isMenuItemsAnimated(): boolean;
                        public getSearchPrefix(): globalAndroid.widget.TextView;
                        public onAttachedToWindow(): void;
                        public setUseWindowInsetsController(useWindowInsetsController: boolean): void;
                        public isAutoShowKeyboard(): boolean;
                        public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
                        public setAutoShowKeyboard(autoShowKeyboard: boolean): void;
                        public getToolbar(): androidx.appcompat.widget.Toolbar;
                        public setVisible(visible: boolean): void;
                        public updateSoftInputMode(): void;
                        public addHeaderView(headerView: globalAndroid.view.View): void;
                        public getSoftInputMode(): number;
                        public setAnimatedNavigationIcon(animatedNavigationIcon: boolean): void;
                        public setText(textResId: number): void;
                        public setModalForAccessibility(isSearchViewModal: boolean): void;
                        public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
                        public setElevation(elevation: number): void;
                        public clearText(): void;
                        public getBehavior(): androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<com.google.android.material.search.SearchView>;
                        public removeAllHeaderViews(): void;
                        public hide(): void;
                        public removeHeaderView(headerView: globalAndroid.view.View): void;
                        public setText(text: string): void;
                        public requestFocusAndShowKeyboard(): void;
                        public removeTransitionListener(transitionListener: com.google.android.material.search.SearchView.TransitionListener): void;
                        public setHint(hintResId: number): void;
                        public show(): void;
                        public clearFocusAndHideKeyboard(): void;
                        public onSaveInstanceState(): globalAndroid.os.Parcelable;
                        public setStatusBarSpacerEnabled(enabled: boolean): void;
                        public constructor(context: globalAndroid.content.Context);
                    }
                    export module SearchView {
                        export class Behavior extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<com.google.android.material.search.SearchView> {
                            public static class: java.lang.Class<com.google.android.material.search.SearchView.Behavior>;
                            public constructor();
                            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                            public onDependentViewChanged(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: com.google.android.material.search.SearchView, dependency: globalAndroid.view.View): boolean;
                        }
                        export class SavedState {
                            public static class: java.lang.Class<com.google.android.material.search.SearchView.SavedState>;
                            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.search.SearchView.SavedState>;
                            public constructor(source: globalAndroid.os.Parcel, classLoader: java.lang.ClassLoader);
                            public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
                            public constructor(source: globalAndroid.os.Parcel);
                            public constructor(superState: globalAndroid.os.Parcelable);
                        }
                        export class TransitionListener {
                            public static class: java.lang.Class<com.google.android.material.search.SearchView.TransitionListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.search.SearchView$TransitionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onStateChanged(param0: com.google.android.material.search.SearchView, param1: com.google.android.material.search.SearchView.TransitionState, param2: com.google.android.material.search.SearchView.TransitionState): void;
                            });
                            public constructor();
                            public onStateChanged(param0: com.google.android.material.search.SearchView, param1: com.google.android.material.search.SearchView.TransitionState, param2: com.google.android.material.search.SearchView.TransitionState): void;
                        }
                        export class TransitionState {
                            public static class: java.lang.Class<com.google.android.material.search.SearchView.TransitionState>;
                            public static HIDING: com.google.android.material.search.SearchView.TransitionState;
                            public static HIDDEN: com.google.android.material.search.SearchView.TransitionState;
                            public static SHOWING: com.google.android.material.search.SearchView.TransitionState;
                            public static SHOWN: com.google.android.material.search.SearchView.TransitionState;
                            public static valueOf(name: string): com.google.android.material.search.SearchView.TransitionState;
                            public static values(): androidNative.Array<com.google.android.material.search.SearchView.TransitionState>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module search {
                    export class SearchViewAnimationHelper {
                        public static class: java.lang.Class<com.google.android.material.search.SearchViewAnimationHelper>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module shadow {
                    export class ShadowDrawableWrapper {
                        public static class: java.lang.Class<com.google.android.material.shadow.ShadowDrawableWrapper>;
                        public getShadowSize(): number;
                        public setShadowSize(shadowSize: number, maxShadowSize: number): void;
                        public getCornerRadius(): number;
                        public static calculateHorizontalPadding(maxShadowSize: number, cornerRadius: number, addPaddingForCorners: boolean): number;
                        public draw(canvas: globalAndroid.graphics.Canvas): void;
                        public setShadowSize(size: number): void;
                        public getOpacity(): number;
                        public setAddPaddingForCorners(addPaddingForCorners: boolean): void;
                        public onBoundsChange(bounds: globalAndroid.graphics.Rect): void;
                        public setCornerRadius(radius: number): void;
                        public getMinWidth(): number;
                        public getMaxShadowSize(): number;
                        public setAlpha(alpha: number): void;
                        public getPadding(padding: globalAndroid.graphics.Rect): boolean;
                        public static calculateVerticalPadding(maxShadowSize: number, cornerRadius: number, addPaddingForCorners: boolean): number;
                        public setMaxShadowSize(size: number): void;
                        public getMinHeight(): number;
                        public constructor(context: globalAndroid.content.Context, content: globalAndroid.graphics.drawable.Drawable, radius: number, shadowSize: number, maxShadowSize: number);
                        public setRotation(rotation: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module shadow {
                    export class ShadowRenderer {
                        public static class: java.lang.Class<com.google.android.material.shadow.ShadowRenderer>;
                        public setShadowColor(color: number): void;
                        public drawInnerCornerShadow(canvas: globalAndroid.graphics.Canvas, matrix: globalAndroid.graphics.Matrix, bounds: globalAndroid.graphics.RectF, elevation: number, startAngle: number, sweepAngle: number, cornerPosition: androidNative.Array<number>): void;
                        public constructor();
                        public constructor(color: number);
                        public drawCornerShadow(canvas: globalAndroid.graphics.Canvas, matrix: globalAndroid.graphics.Matrix, bounds: globalAndroid.graphics.RectF, elevation: number, startAngle: number, sweepAngle: number): void;
                        public drawEdgeShadow(canvas: globalAndroid.graphics.Canvas, transform: globalAndroid.graphics.Matrix, bounds: globalAndroid.graphics.RectF, elevation: number): void;
                        public getShadowPaint(): globalAndroid.graphics.Paint;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module shadow {
                    export class ShadowViewDelegate {
                        public static class: java.lang.Class<com.google.android.material.shadow.ShadowViewDelegate>;
                        /**
                         * Constructs a new instance of the com.google.android.material.shadow.ShadowViewDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            getRadius(): number;
                            setShadowPadding(param0: number, param1: number, param2: number, param3: number): void;
                            setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                            isCompatPaddingEnabled(): boolean;
                        });
                        public constructor();
                        public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                        public isCompatPaddingEnabled(): boolean;
                        public getRadius(): number;
                        public setShadowPadding(param0: number, param1: number, param2: number, param3: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module shape {
                    export class AbsoluteCornerSize extends com.google.android.material.shape.CornerSize {
                        public static class: java.lang.Class<com.google.android.material.shape.AbsoluteCornerSize>;
                        public getCornerSize(): number;
                        public constructor(size: number);
                        public getCornerSize(param0: globalAndroid.graphics.RectF): number;
                        public hashCode(): number;
                        public equals(o: any): boolean;
                        public getCornerSize(bounds: globalAndroid.graphics.RectF): number;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module shape {
                    export class AdjustedCornerSize extends com.google.android.material.shape.CornerSize {
                        public static class: java.lang.Class<com.google.android.material.shape.AdjustedCornerSize>;
                        public constructor(adjustment: number, other: com.google.android.material.shape.CornerSize);
                        public getCornerSize(param0: globalAndroid.graphics.RectF): number;
                        public hashCode(): number;
                        public equals(o: any): boolean;
                        public getCornerSize(bounds: globalAndroid.graphics.RectF): number;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module shape {
                    export class ClampedCornerSize extends com.google.android.material.shape.CornerSize {
                        public static class: java.lang.Class<com.google.android.material.shape.ClampedCornerSize>;
                        public static createFromCornerSize(cornerSize: com.google.android.material.shape.AbsoluteCornerSize): com.google.android.material.shape.ClampedCornerSize;
                        public getCornerSize(param0: globalAndroid.graphics.RectF): number;
                        public hashCode(): number;
                        public equals(o: any): boolean;
                        public constructor(target: number);
                        public getCornerSize(bounds: globalAndroid.graphics.RectF): number;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module shape {
                    export class CornerFamily {
                        public static class: java.lang.Class<com.google.android.material.shape.CornerFamily>;
                        /**
                         * Constructs a new instance of the com.google.android.material.shape.CornerFamily interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                        });
                        public constructor();
                        public static ROUNDED: number = 0;
                        public static CUT: number = 1;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module shape {
                    export class CornerSize {
                        public static class: java.lang.Class<com.google.android.material.shape.CornerSize>;
                        /**
                         * Constructs a new instance of the com.google.android.material.shape.CornerSize interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            getCornerSize(param0: globalAndroid.graphics.RectF): number;
                        });
                        public constructor();
                        public getCornerSize(param0: globalAndroid.graphics.RectF): number;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module shape {
                    export class CornerTreatment {
                        public static class: java.lang.Class<com.google.android.material.shape.CornerTreatment>;
                        public constructor();
                        public getCornerPath(shapePath: com.google.android.material.shape.ShapePath, angle: number, interpolation: number, radius: number): void;
                        /** @deprecated */
                        public getCornerPath(angle: number, interpolation: number, shapePath: com.google.android.material.shape.ShapePath): void;
                        public getCornerPath(shapePath: com.google.android.material.shape.ShapePath, angle: number, interpolation: number, bounds: globalAndroid.graphics.RectF, size: com.google.android.material.shape.CornerSize): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module shape {
                    export class CutCornerTreatment extends com.google.android.material.shape.CornerTreatment {
                        public static class: java.lang.Class<com.google.android.material.shape.CutCornerTreatment>;
                        public constructor();
                        public getCornerPath(shapePath: com.google.android.material.shape.ShapePath, angle: number, interpolation: number, radius: number): void;
                        /** @deprecated */
                        public getCornerPath(angle: number, interpolation: number, shapePath: com.google.android.material.shape.ShapePath): void;
                        public getCornerPath(shapePath: com.google.android.material.shape.ShapePath, angle: number, interpolation: number, bounds: globalAndroid.graphics.RectF, size: com.google.android.material.shape.CornerSize): void;
                        /** @deprecated */
                        public constructor(size: number);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module shape {
                    export class EdgeTreatment {
                        public static class: java.lang.Class<com.google.android.material.shape.EdgeTreatment>;
                        public constructor();
                        /** @deprecated */
                        public getEdgePath(length: number, interpolation: number, shapePath: com.google.android.material.shape.ShapePath): void;
                        public getEdgePath(length: number, center: number, interpolation: number, shapePath: com.google.android.material.shape.ShapePath): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module shape {
                    export class InterpolateOnScrollPositionChangeHelper {
                        public static class: java.lang.Class<com.google.android.material.shape.InterpolateOnScrollPositionChangeHelper>;
                        public setContainingScrollView(containingScrollView: globalAndroid.widget.ScrollView): void;
                        public constructor(shapedView: globalAndroid.view.View, materialShapeDrawable: com.google.android.material.shape.MaterialShapeDrawable, containingScrollView: globalAndroid.widget.ScrollView);
                        public stopListeningForScrollChanges(viewTreeObserver: globalAndroid.view.ViewTreeObserver): void;
                        public setMaterialShapeDrawable(materialShapeDrawable: com.google.android.material.shape.MaterialShapeDrawable): void;
                        public startListeningForScrollChanges(viewTreeObserver: globalAndroid.view.ViewTreeObserver): void;
                        public updateInterpolationForScreenPosition(): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module shape {
                    export class MarkerEdgeTreatment extends com.google.android.material.shape.EdgeTreatment {
                        public static class: java.lang.Class<com.google.android.material.shape.MarkerEdgeTreatment>;
                        public constructor();
                        /** @deprecated */
                        public getEdgePath(length: number, interpolation: number, shapePath: com.google.android.material.shape.ShapePath): void;
                        public constructor(radius: number);
                        public getEdgePath(length: number, center: number, interpolation: number, shapePath: com.google.android.material.shape.ShapePath): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module shape {
                    export class MaterialShapeDrawable implements com.google.android.material.shape.Shapeable {
                        public static class: java.lang.Class<com.google.android.material.shape.MaterialShapeDrawable>;
                        public static SHADOW_COMPAT_MODE_DEFAULT: number = 0;
                        public static SHADOW_COMPAT_MODE_NEVER: number = 1;
                        public static SHADOW_COMPAT_MODE_ALWAYS: number = 2;
                        public getBottomLeftCornerResolvedSize(): number;
                        public setStrokeWidth(strokeWidth: number): void;
                        public isElevationOverlayEnabled(): boolean;
                        public getScale(): number;
                        public setInterpolation(interpolation: number): void;
                        public constructor(shapeAppearanceModel: com.google.android.material.shape.ShapeAppearanceModel);
                        public setShadowVerticalOffset(shadowOffset: number): void;
                        public getShadowCompatRotation(): number;
                        public getShadowVerticalOffset(): number;
                        /** @deprecated */
                        public getPathForSize(width: number, height: number, path: globalAndroid.graphics.Path): void;
                        public getBottomRightCornerResolvedSize(): number;
                        public calculatePathForSize(bounds: globalAndroid.graphics.RectF, path: globalAndroid.graphics.Path): void;
                        public setColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): void;
                        public isStateful(): boolean;
                        public setStrokeTint(tintList: globalAndroid.content.res.ColorStateList): void;
                        public setShadowCompatibilityMode(mode: number): void;
                        public setUseTintColorForShadow(useTintColorForShadow: boolean): void;
                        public setShadowColor(shadowColor: number): void;
                        public getPadding(padding: globalAndroid.graphics.Rect): boolean;
                        public getShadowOffsetY(): number;
                        public setStroke(strokeWidth: number, strokeColor: globalAndroid.content.res.ColorStateList): void;
                        public getElevation(): number;
                        public invalidateSelf(): void;
                        public constructor();
                        public getTintList(): globalAndroid.content.res.ColorStateList;
                        public getTransparentRegion(): globalAndroid.graphics.Region;
                        public setShadowBitmapDrawingEnable(enable: boolean): void;
                        public setStroke(strokeWidth: number, strokeColor: number): void;
                        public getStrokeTintList(): globalAndroid.content.res.ColorStateList;
                        public getInterpolation(): number;
                        public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public drawStrokeShape(canvas: globalAndroid.graphics.Canvas): void;
                        public static createWithElevationOverlay(context: globalAndroid.content.Context, elevation: number): com.google.android.material.shape.MaterialShapeDrawable;
                        public setEdgeIntersectionCheckEnable(enable: boolean): void;
                        public setFillColor(fillColor: globalAndroid.content.res.ColorStateList): void;
                        public getTranslationZ(): number;
                        public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
                        public getShadowCompatibilityMode(): number;
                        public setPaintStyle(paintStyle: globalAndroid.graphics.Paint.Style): void;
                        public setShadowCompatRotation(shadowRotation: number): void;
                        public compositeElevationOverlayIfNeeded(backgroundColor: number): number;
                        /** @deprecated */
                        public setShapedViewModel(shapedViewModel: com.google.android.material.shape.ShapePathModel): void;
                        public setParentAbsoluteElevation(parentAbsoluteElevation: number): void;
                        public drawShape(canvas: globalAndroid.graphics.Canvas, paint: globalAndroid.graphics.Paint, path: globalAndroid.graphics.Path, bounds: globalAndroid.graphics.RectF): void;
                        public getOutline(this_: any): void;
                        public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
                        /** @deprecated */
                        public getShapedViewModel(): com.google.android.material.shape.ShapePathModel;
                        /** @deprecated */
                        public isShadowEnabled(): boolean;
                        public static createWithElevationOverlay(context: globalAndroid.content.Context): com.google.android.material.shape.MaterialShapeDrawable;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
                        public getParentAbsoluteElevation(): number;
                        public draw(canvas: globalAndroid.graphics.Canvas): void;
                        public setCornerSize(cornerSize: com.google.android.material.shape.CornerSize): void;
                        public setStrokeColor(strokeColor: globalAndroid.content.res.ColorStateList): void;
                        public getShadowOffsetX(): number;
                        public getAlpha(): number;
                        public setCornerSize(cornerSize: number): void;
                        public mutate(): globalAndroid.graphics.drawable.Drawable;
                        public getStrokeColor(): globalAndroid.content.res.ColorStateList;
                        public isPointInTransparentRegion(x: number, y: number): boolean;
                        /** @deprecated */
                        public setShadowRadius(shadowRadius: number): void;
                        public onBoundsChange(bounds: globalAndroid.graphics.Rect): void;
                        public getStrokeWidth(): number;
                        public initializeElevationOverlay(context: globalAndroid.content.Context): void;
                        public setStrokeTint(tintColor: number): void;
                        public onStateChange(state: androidNative.Array<number>): boolean;
                        public setAlpha(alpha: number): void;
                        public getFillColor(): globalAndroid.content.res.ColorStateList;
                        public getResolvedTintColor(): number;
                        public setTintList(tintList: globalAndroid.content.res.ColorStateList): void;
                        public requiresCompatShadow(): boolean;
                        /** @deprecated */
                        public setShadowEnabled(shadowEnabled: boolean): void;
                        public getShadowRadius(): number;
                        /** @deprecated */
                        public getShadowElevation(): number;
                        /** @deprecated */
                        public setShadowElevation(shadowElevation: number): void;
                        public setShapeAppearanceModel(shapeAppearanceModel: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public setZ(z: number): void;
                        public setElevation(elevation: number): void;
                        public getPaintStyle(): globalAndroid.graphics.Paint.Style;
                        public getOpacity(): number;
                        public getBoundsAsRectF(): globalAndroid.graphics.RectF;
                        public getTopRightCornerResolvedSize(): number;
                        public setTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
                        public getZ(): number;
                        public isRoundRect(): boolean;
                        public setTranslationZ(translationZ: number): void;
                        public constructor(drawableState: com.google.android.material.shape.MaterialShapeDrawable.MaterialShapeDrawableState);
                        public setPadding(left: number, top: number, right: number, bottom: number): void;
                        public isElevationOverlayInitialized(): boolean;
                        public setTint(tintColor: number): void;
                        public setScale(scale: number): void;
                        public getTopLeftCornerResolvedSize(): number;
                        /** @deprecated */
                        public constructor(shapePathModel: com.google.android.material.shape.ShapePathModel);
                    }
                    export module MaterialShapeDrawable {
                        export class CompatibilityShadowMode {
                            public static class: java.lang.Class<com.google.android.material.shape.MaterialShapeDrawable.CompatibilityShadowMode>;
                            /**
                             * Constructs a new instance of the com.google.android.material.shape.MaterialShapeDrawable$CompatibilityShadowMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class MaterialShapeDrawableState {
                            public static class: java.lang.Class<com.google.android.material.shape.MaterialShapeDrawable.MaterialShapeDrawableState>;
                            public constructor(orig: com.google.android.material.shape.MaterialShapeDrawable.MaterialShapeDrawableState);
                            public constructor(shapeAppearanceModel: com.google.android.material.shape.ShapeAppearanceModel, elevationOverlayProvider: com.google.android.material.elevation.ElevationOverlayProvider);
                            public newDrawable(): globalAndroid.graphics.drawable.Drawable;
                            public getChangingConfigurations(): number;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module shape {
                    export class MaterialShapeUtils {
                        public static class: java.lang.Class<com.google.android.material.shape.MaterialShapeUtils>;
                        public static setParentAbsoluteElevation(view: globalAndroid.view.View, materialShapeDrawable: com.google.android.material.shape.MaterialShapeDrawable): void;
                        public static setParentAbsoluteElevation(view: globalAndroid.view.View): void;
                        public static setElevation(view: globalAndroid.view.View, elevation: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module shape {
                    export class OffsetEdgeTreatment extends com.google.android.material.shape.EdgeTreatment {
                        public static class: java.lang.Class<com.google.android.material.shape.OffsetEdgeTreatment>;
                        public constructor();
                        /** @deprecated */
                        public getEdgePath(length: number, interpolation: number, shapePath: com.google.android.material.shape.ShapePath): void;
                        public getEdgePath(length: number, center: number, interpolation: number, shapePath: com.google.android.material.shape.ShapePath): void;
                        public constructor(other: com.google.android.material.shape.EdgeTreatment, offset: number);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module shape {
                    export class RelativeCornerSize extends com.google.android.material.shape.CornerSize {
                        public static class: java.lang.Class<com.google.android.material.shape.RelativeCornerSize>;
                        public getCornerSize(param0: globalAndroid.graphics.RectF): number;
                        public hashCode(): number;
                        public constructor(percent: number);
                        public getRelativePercent(): number;
                        public equals(o: any): boolean;
                        public getCornerSize(bounds: globalAndroid.graphics.RectF): number;
                        public static createFromCornerSize(bounds: globalAndroid.graphics.RectF, cornerSize: com.google.android.material.shape.CornerSize): com.google.android.material.shape.RelativeCornerSize;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module shape {
                    export class RoundedCornerTreatment extends com.google.android.material.shape.CornerTreatment {
                        public static class: java.lang.Class<com.google.android.material.shape.RoundedCornerTreatment>;
                        /** @deprecated */
                        public constructor(radius: number);
                        public constructor();
                        public getCornerPath(shapePath: com.google.android.material.shape.ShapePath, angle: number, interpolation: number, radius: number): void;
                        /** @deprecated */
                        public getCornerPath(angle: number, interpolation: number, shapePath: com.google.android.material.shape.ShapePath): void;
                        public getCornerPath(shapePath: com.google.android.material.shape.ShapePath, angle: number, interpolation: number, bounds: globalAndroid.graphics.RectF, size: com.google.android.material.shape.CornerSize): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module shape {
                    export class ShapeAppearanceModel {
                        public static class: java.lang.Class<com.google.android.material.shape.ShapeAppearanceModel>;
                        public static PILL: com.google.android.material.shape.CornerSize;
                        public static builder(): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                        public withTransformedCornerSizes(op: com.google.android.material.shape.ShapeAppearanceModel.CornerSizeUnaryOperator): com.google.android.material.shape.ShapeAppearanceModel;
                        public constructor();
                        public static builder(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                        public getTopEdge(): com.google.android.material.shape.EdgeTreatment;
                        public getLeftEdge(): com.google.android.material.shape.EdgeTreatment;
                        public static builder(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number, defaultCornerSize: com.google.android.material.shape.CornerSize): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                        public isRoundRect(bounds: globalAndroid.graphics.RectF): boolean;
                        public getTopRightCorner(): com.google.android.material.shape.CornerTreatment;
                        public getBottomLeftCorner(): com.google.android.material.shape.CornerTreatment;
                        public withCornerSize(cornerSize: com.google.android.material.shape.CornerSize): com.google.android.material.shape.ShapeAppearanceModel;
                        public getTopLeftCornerSize(): com.google.android.material.shape.CornerSize;
                        public static builder(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number, defaultCornerSize: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                        public withCornerSize(cornerSize: number): com.google.android.material.shape.ShapeAppearanceModel;
                        public getTopLeftCorner(): com.google.android.material.shape.CornerTreatment;
                        public getTopRightCornerSize(): com.google.android.material.shape.CornerSize;
                        public toBuilder(): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                        public getBottomEdge(): com.google.android.material.shape.EdgeTreatment;
                        public getBottomLeftCornerSize(): com.google.android.material.shape.CornerSize;
                        public getBottomRightCorner(): com.google.android.material.shape.CornerTreatment;
                        public getRightEdge(): com.google.android.material.shape.EdgeTreatment;
                        public static builder(context: globalAndroid.content.Context, shapeAppearanceResId: number, shapeAppearanceOverlayResId: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                        public getBottomRightCornerSize(): com.google.android.material.shape.CornerSize;
                    }
                    export module ShapeAppearanceModel {
                        export class Builder {
                            public static class: java.lang.Class<com.google.android.material.shape.ShapeAppearanceModel.Builder>;
                            public setRightEdge(rightEdge: com.google.android.material.shape.EdgeTreatment): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public constructor(other: com.google.android.material.shape.ShapeAppearanceModel);
                            public setBottomLeftCorner(cornerFamily: number, cornerSize: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public setAllCornerSizes(cornerSize: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public setBottomLeftCorner(cornerFamily: number, cornerSize: com.google.android.material.shape.CornerSize): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public setBottomEdge(bottomEdge: com.google.android.material.shape.EdgeTreatment): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public setTopLeftCorner(cornerFamily: number, cornerSize: com.google.android.material.shape.CornerSize): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public setTopLeftCorner(topLeftCorner: com.google.android.material.shape.CornerTreatment): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public setAllCornerSizes(cornerSize: com.google.android.material.shape.CornerSize): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public setTopRightCorner(cornerFamily: number, cornerSize: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public setBottomRightCornerSize(cornerSize: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public setTopLeftCornerSize(cornerSize: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public setAllEdges(edgeTreatment: com.google.android.material.shape.EdgeTreatment): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public build(): com.google.android.material.shape.ShapeAppearanceModel;
                            public setBottomRightCornerSize(cornerSize: com.google.android.material.shape.CornerSize): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public setBottomLeftCornerSize(cornerSize: com.google.android.material.shape.CornerSize): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public setTopLeftCornerSize(cornerSize: com.google.android.material.shape.CornerSize): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public setTopLeftCorner(cornerFamily: number, cornerSize: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public setLeftEdge(leftEdge: com.google.android.material.shape.EdgeTreatment): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public constructor();
                            public setAllCorners(cornerTreatment: com.google.android.material.shape.CornerTreatment): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public setTopRightCornerSize(cornerSize: com.google.android.material.shape.CornerSize): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public setBottomLeftCornerSize(cornerSize: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public setBottomLeftCorner(bottomLeftCorner: com.google.android.material.shape.CornerTreatment): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public setBottomRightCorner(cornerFamily: number, cornerSize: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public setTopRightCorner(cornerFamily: number, cornerSize: com.google.android.material.shape.CornerSize): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public setBottomRightCorner(bottomRightCorner: com.google.android.material.shape.CornerTreatment): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public setTopEdge(topEdge: com.google.android.material.shape.EdgeTreatment): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public setAllCorners(cornerFamily: number, cornerSize: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public setTopRightCorner(topRightCorner: com.google.android.material.shape.CornerTreatment): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public setBottomRightCorner(cornerFamily: number, cornerSize: com.google.android.material.shape.CornerSize): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                            public setTopRightCornerSize(cornerSize: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
                        }
                        export class CornerSizeUnaryOperator {
                            public static class: java.lang.Class<com.google.android.material.shape.ShapeAppearanceModel.CornerSizeUnaryOperator>;
                            /**
                             * Constructs a new instance of the com.google.android.material.shape.ShapeAppearanceModel$CornerSizeUnaryOperator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                apply(param0: com.google.android.material.shape.CornerSize): com.google.android.material.shape.CornerSize;
                            });
                            public constructor();
                            public apply(param0: com.google.android.material.shape.CornerSize): com.google.android.material.shape.CornerSize;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module shape {
                    export class ShapeAppearancePathProvider {
                        public static class: java.lang.Class<com.google.android.material.shape.ShapeAppearancePathProvider>;
                        public constructor();
                        public calculatePath(shapeAppearanceModel: com.google.android.material.shape.ShapeAppearanceModel, interpolation: number, bounds: globalAndroid.graphics.RectF, path: globalAndroid.graphics.Path): void;
                        public static getInstance(): com.google.android.material.shape.ShapeAppearancePathProvider;
                        public calculatePath(index: com.google.android.material.shape.ShapeAppearanceModel, this_: number, shapeAppearanceModel: globalAndroid.graphics.RectF, interpolation: com.google.android.material.shape.ShapeAppearancePathProvider.PathListener, bounds: globalAndroid.graphics.Path): void;
                    }
                    export module ShapeAppearancePathProvider {
                        export class Lazy {
                            public static class: java.lang.Class<com.google.android.material.shape.ShapeAppearancePathProvider.Lazy>;
                        }
                        export class PathListener {
                            public static class: java.lang.Class<com.google.android.material.shape.ShapeAppearancePathProvider.PathListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.shape.ShapeAppearancePathProvider$PathListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onCornerPathCreated(param0: com.google.android.material.shape.ShapePath, param1: globalAndroid.graphics.Matrix, param2: number): void;
                                onEdgePathCreated(param0: com.google.android.material.shape.ShapePath, param1: globalAndroid.graphics.Matrix, param2: number): void;
                            });
                            public constructor();
                            public onEdgePathCreated(param0: com.google.android.material.shape.ShapePath, param1: globalAndroid.graphics.Matrix, param2: number): void;
                            public onCornerPathCreated(param0: com.google.android.material.shape.ShapePath, param1: globalAndroid.graphics.Matrix, param2: number): void;
                        }
                        export class ShapeAppearancePathSpec {
                            public static class: java.lang.Class<com.google.android.material.shape.ShapeAppearancePathProvider.ShapeAppearancePathSpec>;
                            public shapeAppearanceModel: com.google.android.material.shape.ShapeAppearanceModel;
                            public path: globalAndroid.graphics.Path;
                            public bounds: globalAndroid.graphics.RectF;
                            public pathListener: com.google.android.material.shape.ShapeAppearancePathProvider.PathListener;
                            public interpolation: number;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module shape {
                    export class ShapePath {
                        public static class: java.lang.Class<com.google.android.material.shape.ShapePath>;
                        public static ANGLE_LEFT: number = 180.0;
                        public startX: number;
                        public startY: number;
                        public endX: number;
                        public endY: number;
                        public currentShadowAngle: number;
                        public endShadowAngle: number;
                        public constructor();
                        public addArc(left: number, top: number, right: number, bottom: number, startAngle: number, sweepAngle: number): void;
                        public lineTo(x: number, y: number): void;
                        public constructor(startX: number, startY: number);
                        public quadToPoint(controlX: number, controlY: number, toX: number, toY: number): void;
                        public cubicToPoint(controlX1: number, controlY1: number, controlX2: number, controlY2: number, toX: number, toY: number): void;
                        public lineTo(x1: number, y1: number, x2: number, y2: number): void;
                        public applyToPath(i: globalAndroid.graphics.Matrix, size: globalAndroid.graphics.Path): void;
                        public reset(startX: number, startY: number): void;
                        public reset(startX: number, startY: number, shadowStartAngle: number, shadowSweepAngle: number): void;
                    }
                    export module ShapePath {
                        export class ArcShadowOperation extends com.google.android.material.shape.ShapePath.ShadowCompatOperation {
                            public static class: java.lang.Class<com.google.android.material.shape.ShapePath.ArcShadowOperation>;
                            public constructor(operation: com.google.android.material.shape.ShapePath.PathArcOperation);
                            public draw(shadowRenderer: com.google.android.material.shadow.ShadowRenderer, shadowElevation: number, canvas: globalAndroid.graphics.Canvas): void;
                            public draw(transform: globalAndroid.graphics.Matrix, shadowRenderer: com.google.android.material.shadow.ShadowRenderer, shadowElevation: number, canvas: globalAndroid.graphics.Canvas): void;
                        }
                        export class InnerCornerShadowOperation extends com.google.android.material.shape.ShapePath.ShadowCompatOperation {
                            public static class: java.lang.Class<com.google.android.material.shape.ShapePath.InnerCornerShadowOperation>;
                            public constructor(operation1: com.google.android.material.shape.ShapePath.PathLineOperation, operation2: com.google.android.material.shape.ShapePath.PathLineOperation, startX: number, startY: number);
                            public draw(rect2: globalAndroid.graphics.Matrix, this_: com.google.android.material.shadow.ShadowRenderer, transform: number, shadowRenderer: globalAndroid.graphics.Canvas): void;
                            public draw(shadowRenderer: com.google.android.material.shadow.ShadowRenderer, shadowElevation: number, canvas: globalAndroid.graphics.Canvas): void;
                        }
                        export class LineShadowOperation extends com.google.android.material.shape.ShapePath.ShadowCompatOperation {
                            public static class: java.lang.Class<com.google.android.material.shape.ShapePath.LineShadowOperation>;
                            public constructor(operation: com.google.android.material.shape.ShapePath.PathLineOperation, startX: number, startY: number);
                            public draw(shadowRenderer: com.google.android.material.shadow.ShadowRenderer, shadowElevation: number, canvas: globalAndroid.graphics.Canvas): void;
                            public draw(transform: globalAndroid.graphics.Matrix, shadowRenderer: com.google.android.material.shadow.ShadowRenderer, shadowElevation: number, canvas: globalAndroid.graphics.Canvas): void;
                        }
                        export class PathArcOperation extends com.google.android.material.shape.ShapePath.PathOperation {
                            public static class: java.lang.Class<com.google.android.material.shape.ShapePath.PathArcOperation>;
                            public left: number;
                            public top: number;
                            public right: number;
                            public bottom: number;
                            public startAngle: number;
                            public sweepAngle: number;
                            public constructor();
                            public constructor(left: number, top: number, right: number, bottom: number);
                            public applyToPath(transform: globalAndroid.graphics.Matrix, path: globalAndroid.graphics.Path): void;
                        }
                        export class PathCubicOperation extends com.google.android.material.shape.ShapePath.PathOperation {
                            public static class: java.lang.Class<com.google.android.material.shape.ShapePath.PathCubicOperation>;
                            public constructor();
                            public constructor(controlX1: number, controlY1: number, controlX2: number, controlY2: number, endX: number, endY: number);
                            public applyToPath(transform: globalAndroid.graphics.Matrix, path: globalAndroid.graphics.Path): void;
                        }
                        export class PathLineOperation extends com.google.android.material.shape.ShapePath.PathOperation {
                            public static class: java.lang.Class<com.google.android.material.shape.ShapePath.PathLineOperation>;
                            public constructor();
                            public applyToPath(transform: globalAndroid.graphics.Matrix, path: globalAndroid.graphics.Path): void;
                        }
                        export abstract class PathOperation {
                            public static class: java.lang.Class<com.google.android.material.shape.ShapePath.PathOperation>;
                            public matrix: globalAndroid.graphics.Matrix;
                            public constructor();
                            public applyToPath(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Path): void;
                        }
                        export class PathQuadOperation extends com.google.android.material.shape.ShapePath.PathOperation {
                            public static class: java.lang.Class<com.google.android.material.shape.ShapePath.PathQuadOperation>;
                            public controlX: number;
                            public controlY: number;
                            public endX: number;
                            public endY: number;
                            public constructor();
                            public applyToPath(transform: globalAndroid.graphics.Matrix, path: globalAndroid.graphics.Path): void;
                        }
                        export abstract class ShadowCompatOperation {
                            public static class: java.lang.Class<com.google.android.material.shape.ShapePath.ShadowCompatOperation>;
                            public draw(param0: globalAndroid.graphics.Matrix, param1: com.google.android.material.shadow.ShadowRenderer, param2: number, param3: globalAndroid.graphics.Canvas): void;
                            public draw(shadowRenderer: com.google.android.material.shadow.ShadowRenderer, shadowElevation: number, canvas: globalAndroid.graphics.Canvas): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module shape {
                    export class ShapePathModel extends com.google.android.material.shape.ShapeAppearanceModel {
                        public static class: java.lang.Class<com.google.android.material.shape.ShapePathModel>;
                        /** @deprecated */
                        public setLeftEdge(leftEdge: com.google.android.material.shape.EdgeTreatment): void;
                        public constructor();
                        /** @deprecated */
                        public setBottomRightCorner(bottomRightCorner: com.google.android.material.shape.CornerTreatment): void;
                        /** @deprecated */
                        public setTopLeftCorner(topLeftCorner: com.google.android.material.shape.CornerTreatment): void;
                        /** @deprecated */
                        public setTopRightCorner(topRightCorner: com.google.android.material.shape.CornerTreatment): void;
                        /** @deprecated */
                        public setRightEdge(rightEdge: com.google.android.material.shape.EdgeTreatment): void;
                        /** @deprecated */
                        public setCornerTreatments(topLeftCorner: com.google.android.material.shape.CornerTreatment, topRightCorner: com.google.android.material.shape.CornerTreatment, bottomRightCorner: com.google.android.material.shape.CornerTreatment, bottomLeftCorner: com.google.android.material.shape.CornerTreatment): void;
                        /** @deprecated */
                        public setAllEdges(edgeTreatment: com.google.android.material.shape.EdgeTreatment): void;
                        /** @deprecated */
                        public setTopEdge(topEdge: com.google.android.material.shape.EdgeTreatment): void;
                        /** @deprecated */
                        public setAllCorners(cornerTreatment: com.google.android.material.shape.CornerTreatment): void;
                        /** @deprecated */
                        public setEdgeTreatments(leftEdge: com.google.android.material.shape.EdgeTreatment, topEdge: com.google.android.material.shape.EdgeTreatment, rightEdge: com.google.android.material.shape.EdgeTreatment, bottomEdge: com.google.android.material.shape.EdgeTreatment): void;
                        /** @deprecated */
                        public setBottomEdge(bottomEdge: com.google.android.material.shape.EdgeTreatment): void;
                        /** @deprecated */
                        public setBottomLeftCorner(bottomLeftCorner: com.google.android.material.shape.CornerTreatment): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module shape {
                    export class Shapeable {
                        public static class: java.lang.Class<com.google.android.material.shape.Shapeable>;
                        /**
                         * Constructs a new instance of the com.google.android.material.shape.Shapeable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
                            getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
                        });
                        public constructor();
                        public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
                        public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module shape {
                    export class TriangleEdgeTreatment extends com.google.android.material.shape.EdgeTreatment {
                        public static class: java.lang.Class<com.google.android.material.shape.TriangleEdgeTreatment>;
                        public constructor();
                        /** @deprecated */
                        public getEdgePath(length: number, interpolation: number, shapePath: com.google.android.material.shape.ShapePath): void;
                        public getEdgePath(length: number, center: number, interpolation: number, shapePath: com.google.android.material.shape.ShapePath): void;
                        public constructor(size: number, inside: boolean);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module sidesheet {
                    export class RightSheetDelegate extends com.google.android.material.sidesheet.SheetDelegate {
                        public static class: java.lang.Class<com.google.android.material.sidesheet.RightSheetDelegate>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module sidesheet {
                    export class Sheet<C> extends java.lang.Object {
                        public static class: java.lang.Class<com.google.android.material.sidesheet.Sheet<any>>;
                        /**
                         * Constructs a new instance of the com.google.android.material.sidesheet.Sheet<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            getState(): number;
                            setState(param0: number): void;
                            addCallback(param0: C): void;
                            removeCallback(param0: C): void;
                        });
                        public constructor();
                        public static STATE_HIDDEN: number = 5;
                        public static STATE_EXPANDED: number = 3;
                        public static STATE_DRAGGING: number = 1;
                        public static STATE_SETTLING: number = 2;
                        public static EDGE_RIGHT: number = 0;
                        public setState(param0: number): void;
                        public getState(): number;
                        public addCallback(param0: C): void;
                        public removeCallback(param0: C): void;
                    }
                    export module Sheet {
                        export class SheetEdge {
                            public static class: java.lang.Class<com.google.android.material.sidesheet.Sheet.SheetEdge>;
                            /**
                             * Constructs a new instance of the com.google.android.material.sidesheet.Sheet$SheetEdge interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class SheetState {
                            public static class: java.lang.Class<com.google.android.material.sidesheet.Sheet.SheetState>;
                            /**
                             * Constructs a new instance of the com.google.android.material.sidesheet.Sheet$SheetState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class StableSheetState {
                            public static class: java.lang.Class<com.google.android.material.sidesheet.Sheet.StableSheetState>;
                            /**
                             * Constructs a new instance of the com.google.android.material.sidesheet.Sheet$StableSheetState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module sidesheet {
                    export class SheetCallback {
                        public static class: java.lang.Class<com.google.android.material.sidesheet.SheetCallback>;
                        /**
                         * Constructs a new instance of the com.google.android.material.sidesheet.SheetCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            onStateChanged(param0: globalAndroid.view.View, param1: number): void;
                            onSlide(param0: globalAndroid.view.View, param1: number): void;
                        });
                        public constructor();
                        public onSlide(param0: globalAndroid.view.View, param1: number): void;
                        public onStateChanged(param0: globalAndroid.view.View, param1: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module sidesheet {
                    export abstract class SheetDelegate {
                        public static class: java.lang.Class<com.google.android.material.sidesheet.SheetDelegate>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module sidesheet {
                    export abstract class SheetDialog<C> extends androidx.appcompat.app.AppCompatDialog {
                        public static class: java.lang.Class<com.google.android.material.sidesheet.SheetDialog<any>>;
                        public setContentView(layoutResId: number): void;
                        public setCanceledOnTouchOutside(cancel: boolean): void;
                        public setDismissWithSheetAnimationEnabled(dismissWithAnimation: boolean): void;
                        public cancel(): void;
                        public setContentView(view: globalAndroid.view.View): void;
                        public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
                        public setContentView(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
                        public isDismissWithSheetAnimationEnabled(): boolean;
                        public onStart(): void;
                        public setCancelable(cancelable: boolean): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module sidesheet {
                    export class SheetUtils {
                        public static class: java.lang.Class<com.google.android.material.sidesheet.SheetUtils>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module sidesheet {
                    export class SideSheetBehavior<V> extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any> implements com.google.android.material.sidesheet.Sheet<com.google.android.material.sidesheet.SideSheetCallback> {
                        public static class: java.lang.Class<com.google.android.material.sidesheet.SideSheetBehavior<any>>;
                        public expand(): void;
                        public setCoplanarSiblingView(this_: globalAndroid.view.View): void;
                        public shouldSkipSmoothAnimation(): boolean;
                        public onSaveInstanceState(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any): globalAndroid.os.Parcelable;
                        public onDetachedFromLayoutParams(): void;
                        public getCoplanarSiblingView(): globalAndroid.view.View;
                        public getLastStableState(): number;
                        public onLayoutChild(callback: androidx.coordinatorlayout.widget.CoordinatorLayout, this_: any, parent: number): boolean;
                        public onTouchEvent(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, event: globalAndroid.view.MotionEvent): boolean;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public onMeasureChild(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, parentWidthMeasureSpec: number, widthUsed: number, parentHeightMeasureSpec: number, heightUsed: number): boolean;
                        public static from(view: globalAndroid.view.View): com.google.android.material.sidesheet.SideSheetBehavior<any>;
                        public addCallback(param0: any): void;
                        public removeCallback(param0: any): void;
                        public constructor();
                        public onAttachedToLayoutParams(layoutParams: androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams): void;
                        public setState(state: number): void;
                        public getExpandedOffset(): number;
                        public hide(): void;
                        public setHideFriction(hideFriction: number): void;
                        public getHideFriction(): number;
                        public removeCallback(callback: com.google.android.material.sidesheet.SideSheetCallback): void;
                        public setState(param0: number): void;
                        public onRestoreInstanceState(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, state: globalAndroid.os.Parcelable): void;
                        public getState(): number;
                        public setDraggable(draggable: boolean): void;
                        public isDraggable(): boolean;
                        public addCallback(callback: com.google.android.material.sidesheet.SideSheetCallback): void;
                        public onInterceptTouchEvent(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, event: globalAndroid.view.MotionEvent): boolean;
                        public setCoplanarSiblingViewId(this_: number): void;
                    }
                    export module SideSheetBehavior {
                        export class SavedState {
                            public static class: java.lang.Class<com.google.android.material.sidesheet.SideSheetBehavior.SavedState>;
                            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.sidesheet.SideSheetBehavior.SavedState>;
                            public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
                            public constructor(source: globalAndroid.os.Parcel);
                            public constructor(source: globalAndroid.os.Parcel, loader: java.lang.ClassLoader);
                            public constructor(superState: globalAndroid.os.Parcelable, behavior: com.google.android.material.sidesheet.SideSheetBehavior<any>);
                        }
                        export class StateSettlingTracker {
                            public static class: java.lang.Class<com.google.android.material.sidesheet.SideSheetBehavior.StateSettlingTracker>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module sidesheet {
                    export abstract class SideSheetCallback extends com.google.android.material.sidesheet.SheetCallback {
                        public static class: java.lang.Class<com.google.android.material.sidesheet.SideSheetCallback>;
                        public constructor();
                        public onSlide(param0: globalAndroid.view.View, param1: number): void;
                        public onStateChanged(param0: globalAndroid.view.View, param1: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module sidesheet {
                    export class SideSheetDialog extends com.google.android.material.sidesheet.SheetDialog<com.google.android.material.sidesheet.SideSheetCallback> {
                        public static class: java.lang.Class<com.google.android.material.sidesheet.SideSheetDialog>;
                        public constructor(context: globalAndroid.content.Context, theme: number);
                        public getBehavior(): com.google.android.material.sidesheet.SideSheetBehavior<any>;
                        public constructor(context: globalAndroid.content.Context);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module slider {
                    export class BaseOnChangeListener<S> extends java.lang.Object {
                        public static class: java.lang.Class<com.google.android.material.slider.BaseOnChangeListener<any>>;
                        /**
                         * Constructs a new instance of the com.google.android.material.slider.BaseOnChangeListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            onValueChange(param0: S, param1: number, param2: boolean): void;
                        });
                        public constructor();
                        public onValueChange(param0: S, param1: number, param2: boolean): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module slider {
                    export class BaseOnSliderTouchListener<S> extends java.lang.Object {
                        public static class: java.lang.Class<com.google.android.material.slider.BaseOnSliderTouchListener<any>>;
                        /**
                         * Constructs a new instance of the com.google.android.material.slider.BaseOnSliderTouchListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            onStartTrackingTouch(param0: S): void;
                            onStopTrackingTouch(param0: S): void;
                        });
                        public constructor();
                        public onStartTrackingTouch(param0: S): void;
                        public onStopTrackingTouch(param0: S): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module slider {
                    export abstract class BaseSlider<S, L, T> extends globalAndroid.view.View {
                        public static class: java.lang.Class<com.google.android.material.slider.BaseSlider<any, any, any>>;
                        public getHaloTintList(): globalAndroid.content.res.ColorStateList;
                        public getLabelBehavior(): number;
                        public getTickTintList(): globalAndroid.content.res.ColorStateList;
                        public getTrackSidePadding(): number;
                        public setThumbStrokeWidth(thumbStrokeWidth: number): void;
                        public setTickVisible(tickVisible: boolean): void;
                        public getFocusedThumbIndex(): number;
                        public getThumbElevation(): number;
                        public getTickActiveRadius(): number;
                        public dispatchHoverEvent(event: globalAndroid.view.MotionEvent): boolean;
                        public setThumbStrokeColor(thumbStrokeColor: globalAndroid.content.res.ColorStateList): void;
                        public setValueTo(valueTo: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public clearOnSliderTouchListeners(): void;
                        public getValueTo(): number;
                        public addOnChangeListener(listener: any): void;
                        public setHaloTintList(haloColor: globalAndroid.content.res.ColorStateList): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public getThumbRadius(): number;
                        public addOnSliderTouchListener(listener: any): void;
                        public isTickVisible(): boolean;
                        public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
                        public setFocusedThumbIndex(index: number): void;
                        public getTrackInactiveTintList(): globalAndroid.content.res.ColorStateList;
                        public setThumbRadius(this_: number): void;
                        public getThumbTintList(): globalAndroid.content.res.ColorStateList;
                        public getAccessibilityClassName(): string;
                        public setTickInactiveTintList(tickColor: globalAndroid.content.res.ColorStateList): void;
                        public setEnabled(enabled: boolean): void;
                        public setThumbElevationResource(elevation: number): void;
                        public setThumbStrokeWidthResource(thumbStrokeWidthResourceId: number): void;
                        public setActiveThumbIndex(index: number): void;
                        public setLabelFormatter(formatter: com.google.android.material.slider.LabelFormatter): void;
                        public onDraw(canvas: globalAndroid.graphics.Canvas): void;
                        public setThumbStrokeColorResource(thumbStrokeColorResourceId: number): void;
                        public getTrackActiveTintList(): globalAndroid.content.res.ColorStateList;
                        public getThumbStrokeColor(): globalAndroid.content.res.ColorStateList;
                        public removeOnChangeListener(listener: any): void;
                        public setTickTintList(tickColor: globalAndroid.content.res.ColorStateList): void;
                        public onAttachedToWindow(): void;
                        public setTrackHeight(trackHeight: number): void;
                        public setThumbTintList(thumbColor: globalAndroid.content.res.ColorStateList): void;
                        public setTrackActiveTintList(trackColor: globalAndroid.content.res.ColorStateList): void;
                        public onVisibilityChanged(contentViewOverlay: globalAndroid.view.View, this_: number): void;
                        public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
                        public getValueFrom(): number;
                        public onKeyDown(this_: number, keyCode: globalAndroid.view.KeyEvent): boolean;
                        public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
                        public setThumbElevation(elevation: number): void;
                        public setValueFrom(valueFrom: number): void;
                        public getMinSeparation(): number;
                        public drawableStateChanged(): void;
                        public getTrackHeight(): number;
                        public getTrackTintList(): globalAndroid.content.res.ColorStateList;
                        public setTickInactiveRadius(tickInactiveRadius: number): void;
                        public setStepSize(stepSize: number): void;
                        public setTrackTintList(trackColor: globalAndroid.content.res.ColorStateList): void;
                        public setHaloRadius(radius: number): void;
                        public getTrackWidth(): number;
                        public getTickInactiveTintList(): globalAndroid.content.res.ColorStateList;
                        public setHaloRadiusResource(radius: number): void;
                        public setTickActiveTintList(tickColor: globalAndroid.content.res.ColorStateList): void;
                        public setTrackInactiveTintList(trackColor: globalAndroid.content.res.ColorStateList): void;
                        public hasLabelFormatter(): boolean;
                        public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
                        public getHaloRadius(): number;
                        public onDetachedFromWindow(): void;
                        public removeOnSliderTouchListener(listener: any): void;
                        public getThumbStrokeWidth(): number;
                        public setLabelBehavior(labelBehavior: number): void;
                        public clearOnChangeListeners(): void;
                        public getTickActiveTintList(): globalAndroid.content.res.ColorStateList;
                        public getActiveThumbIndex(): number;
                        public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
                        public getStepSize(): number;
                        public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
                        public setThumbRadiusResource(radius: number): void;
                        public onFocusChanged(gainFocus: boolean, direction: number, previouslyFocusedRect: globalAndroid.graphics.Rect): void;
                        public onSaveInstanceState(): globalAndroid.os.Parcelable;
                        public pickActiveThumb(): boolean;
                        public setSeparationUnit(separationUnit: number): void;
                        public getTickInactiveRadius(): number;
                        public constructor(context: globalAndroid.content.Context);
                        public setTickActiveRadius(tickActiveRadius: number): void;
                    }
                    export module BaseSlider {
                        export class AccessibilityEventSender {
                            public static class: java.lang.Class<com.google.android.material.slider.BaseSlider.AccessibilityEventSender>;
                            public run(): void;
                        }
                        export class AccessibilityHelper {
                            public static class: java.lang.Class<com.google.android.material.slider.BaseSlider.AccessibilityHelper>;
                            public onPerformActionForVirtualView(increment: number, values: number, clamped: globalAndroid.os.Bundle): boolean;
                            public onPopulateNodeForVirtualView(virtualViewId: number, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
                            public getVisibleVirtualViews(this_: java.util.List<java.lang.Integer>): void;
                            public getVirtualViewAt(this_: number, x: number): number;
                        }
                        export class SliderState {
                            public static class: java.lang.Class<com.google.android.material.slider.BaseSlider.SliderState>;
                            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.slider.BaseSlider.SliderState>;
                            public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module slider {
                    export class BasicLabelFormatter extends com.google.android.material.slider.LabelFormatter {
                        public static class: java.lang.Class<com.google.android.material.slider.BasicLabelFormatter>;
                        public constructor();
                        public getFormattedValue(value: number): string;
                        public getFormattedValue(param0: number): string;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module slider {
                    export class LabelFormatter {
                        public static class: java.lang.Class<com.google.android.material.slider.LabelFormatter>;
                        /**
                         * Constructs a new instance of the com.google.android.material.slider.LabelFormatter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            getFormattedValue(param0: number): string;
                        });
                        public constructor();
                        public static LABEL_GONE: number = 2;
                        public static LABEL_WITHIN_BOUNDS: number = 1;
                        public static LABEL_FLOATING: number = 0;
                        public static LABEL_VISIBLE: number = 3;
                        public getFormattedValue(param0: number): string;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module slider {
                    export class RangeSlider extends com.google.android.material.slider.BaseSlider<com.google.android.material.slider.RangeSlider, com.google.android.material.slider.RangeSlider.OnChangeListener, com.google.android.material.slider.RangeSlider.OnSliderTouchListener> {
                        public static class: java.lang.Class<com.google.android.material.slider.RangeSlider>;
                        public setValues(values: androidNative.Array<java.lang.Float>): void;
                        public setMinSeparation(minSeparation: number): void;
                        public setValues(values: java.util.List<java.lang.Float>): void;
                        public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
                        public setCustomThumbDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public setMinSeparationValue(minSeparation: number): void;
                        public getMinSeparation(): number;
                        public setCustomThumbDrawable(drawableResId: number): void;
                        public setCustomThumbDrawablesForValues(drawableResIds: androidNative.Array<number>): void;
                        public constructor(values: globalAndroid.content.Context, this_: globalAndroid.util.AttributeSet, context: number);
                        public getValues(): java.util.List<java.lang.Float>;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public onSaveInstanceState(): globalAndroid.os.Parcelable;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public constructor(context: globalAndroid.content.Context);
                        public setCustomThumbDrawablesForValues(drawables: androidNative.Array<globalAndroid.graphics.drawable.Drawable>): void;
                    }
                    export module RangeSlider {
                        export class OnChangeListener extends com.google.android.material.slider.BaseOnChangeListener<com.google.android.material.slider.RangeSlider> {
                            public static class: java.lang.Class<com.google.android.material.slider.RangeSlider.OnChangeListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.slider.RangeSlider$OnChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onValueChange(param0: com.google.android.material.slider.RangeSlider, param1: number, param2: boolean): void;
                                onValueChange(param0: any, param1: number, param2: boolean): void;
                                onValueChange(param0: any, param1: number, param2: boolean): void;
                            });
                            public constructor();
                            public onValueChange(param0: com.google.android.material.slider.RangeSlider, param1: number, param2: boolean): void;
                            public onValueChange(param0: any, param1: number, param2: boolean): void;
                        }
                        export class OnSliderTouchListener extends com.google.android.material.slider.BaseOnSliderTouchListener<com.google.android.material.slider.RangeSlider> {
                            public static class: java.lang.Class<com.google.android.material.slider.RangeSlider.OnSliderTouchListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.slider.RangeSlider$OnSliderTouchListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onStartTrackingTouch(param0: com.google.android.material.slider.RangeSlider): void;
                                onStopTrackingTouch(param0: com.google.android.material.slider.RangeSlider): void;
                                onStopTrackingTouch(param0: any): void;
                                onStartTrackingTouch(param0: any): void;
                                onStartTrackingTouch(param0: any): void;
                                onStopTrackingTouch(param0: any): void;
                            });
                            public constructor();
                            public onStopTrackingTouch(param0: any): void;
                            public onStopTrackingTouch(param0: com.google.android.material.slider.RangeSlider): void;
                            public onStartTrackingTouch(param0: any): void;
                            public onStartTrackingTouch(param0: com.google.android.material.slider.RangeSlider): void;
                        }
                        export class RangeSliderState {
                            public static class: java.lang.Class<com.google.android.material.slider.RangeSlider.RangeSliderState>;
                            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.slider.RangeSlider.RangeSliderState>;
                            public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module slider {
                    export class Slider extends com.google.android.material.slider.BaseSlider<com.google.android.material.slider.Slider, com.google.android.material.slider.Slider.OnChangeListener, com.google.android.material.slider.Slider.OnSliderTouchListener> {
                        public static class: java.lang.Class<com.google.android.material.slider.Slider>;
                        public setCustomThumbDrawable(drawableResId: number): void;
                        public setValue(value: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public pickActiveThumb(): boolean;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public setCustomThumbDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        public constructor(context: globalAndroid.content.Context);
                        public getValue(): number;
                    }
                    export module Slider {
                        export class OnChangeListener extends com.google.android.material.slider.BaseOnChangeListener<com.google.android.material.slider.Slider> {
                            public static class: java.lang.Class<com.google.android.material.slider.Slider.OnChangeListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.slider.Slider$OnChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onValueChange(param0: com.google.android.material.slider.Slider, param1: number, param2: boolean): void;
                                onValueChange(param0: any, param1: number, param2: boolean): void;
                                onValueChange(param0: any, param1: number, param2: boolean): void;
                            });
                            public constructor();
                            public onValueChange(param0: com.google.android.material.slider.Slider, param1: number, param2: boolean): void;
                            public onValueChange(param0: any, param1: number, param2: boolean): void;
                        }
                        export class OnSliderTouchListener extends com.google.android.material.slider.BaseOnSliderTouchListener<com.google.android.material.slider.Slider> {
                            public static class: java.lang.Class<com.google.android.material.slider.Slider.OnSliderTouchListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.slider.Slider$OnSliderTouchListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onStartTrackingTouch(param0: com.google.android.material.slider.Slider): void;
                                onStopTrackingTouch(param0: com.google.android.material.slider.Slider): void;
                                onStopTrackingTouch(param0: any): void;
                                onStartTrackingTouch(param0: any): void;
                                onStartTrackingTouch(param0: any): void;
                                onStopTrackingTouch(param0: any): void;
                            });
                            public constructor();
                            public onStopTrackingTouch(param0: any): void;
                            public onStopTrackingTouch(param0: com.google.android.material.slider.Slider): void;
                            public onStartTrackingTouch(param0: com.google.android.material.slider.Slider): void;
                            public onStartTrackingTouch(param0: any): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module snackbar {
                    export abstract class BaseTransientBottomBar<B> extends java.lang.Object {
                        public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar<any>>;
                        public static ANIMATION_MODE_SLIDE: number = 0;
                        public static ANIMATION_MODE_FADE: number = 1;
                        public static LENGTH_INDEFINITE: number = -2;
                        public static LENGTH_SHORT: number = -1;
                        public static LENGTH_LONG: number = 0;
                        public view: com.google.android.material.snackbar.BaseTransientBottomBar.SnackbarBaseLayout;
                        public hasSnackbarStyleAttr(): boolean;
                        public getAnchorView(): globalAndroid.view.View;
                        public dismiss(): void;
                        public dispatchDismiss(event: number): void;
                        public setGestureInsetBottomIgnored(gestureInsetBottomIgnored: boolean): B;
                        public setAnimationMode(animationMode: number): B;
                        public setBehavior(behavior: com.google.android.material.snackbar.BaseTransientBottomBar.Behavior): B;
                        public isAnchorViewLayoutListenerEnabled(): boolean;
                        public isShownOrQueued(): boolean;
                        public getSnackbarBaseLayoutResId(): number;
                        public setAnchorView(anchorViewId: number): B;
                        public removeCallback(callback: com.google.android.material.snackbar.BaseTransientBottomBar.BaseCallback<B>): B;
                        public addCallback(callback: com.google.android.material.snackbar.BaseTransientBottomBar.BaseCallback<B>): B;
                        public setAnchorViewLayoutListenerEnabled(anchorViewLayoutListenerEnabled: boolean): void;
                        public constructor(context: globalAndroid.content.Context, parent: globalAndroid.view.ViewGroup, content: globalAndroid.view.View, contentViewCallback: com.google.android.material.snackbar.ContentViewCallback);
                        public isShown(): boolean;
                        public getDuration(): number;
                        public constructor(parent: globalAndroid.view.ViewGroup, content: globalAndroid.view.View, contentViewCallback: com.google.android.material.snackbar.ContentViewCallback);
                        public getContext(): globalAndroid.content.Context;
                        public isGestureInsetBottomIgnored(): boolean;
                        public getBehavior(): com.google.android.material.snackbar.BaseTransientBottomBar.Behavior;
                        public getAnimationMode(): number;
                        public setAnchorView(anchorView: globalAndroid.view.View): B;
                        public show(): void;
                        public getNewBehavior(): com.google.android.material.behavior.SwipeDismissBehavior<any>;
                        public getView(): globalAndroid.view.View;
                        public setDuration(duration: number): B;
                    }
                    export module BaseTransientBottomBar {
                        export class Anchor {
                            public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.Anchor>;
                            public onViewAttachedToWindow(anchorView: globalAndroid.view.View): void;
                            public onViewDetachedFromWindow(anchorView: globalAndroid.view.View): void;
                            public onGlobalLayout(): void;
                        }
                        export class AnimationMode {
                            public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.AnimationMode>;
                            /**
                             * Constructs a new instance of the com.google.android.material.snackbar.BaseTransientBottomBar$AnimationMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export abstract class BaseCallback<B> extends java.lang.Object {
                            public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.BaseCallback<any>>;
                            public static DISMISS_EVENT_SWIPE: number = 0;
                            public static DISMISS_EVENT_ACTION: number = 1;
                            public static DISMISS_EVENT_TIMEOUT: number = 2;
                            public static DISMISS_EVENT_MANUAL: number = 3;
                            public static DISMISS_EVENT_CONSECUTIVE: number = 4;
                            public constructor();
                            public onDismissed(transientBottomBar: B, event: number): void;
                            public onShown(transientBottomBar: B): void;
                        }
                        export module BaseCallback {
                            export class DismissEvent {
                                public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.BaseCallback.DismissEvent>;
                                /**
                                 * Constructs a new instance of the com.google.android.material.snackbar.BaseTransientBottomBar$BaseCallback$DismissEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                                 */
                                public constructor(implementation: {
                                });
                                public constructor();
                            }
                        }
                        export class Behavior extends com.google.android.material.behavior.SwipeDismissBehavior<globalAndroid.view.View> {
                            public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.Behavior>;
                            public constructor();
                            public canSwipeDismissView(child: globalAndroid.view.View): boolean;
                            public onInterceptTouchEvent(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: globalAndroid.view.View, event: globalAndroid.view.MotionEvent): boolean;
                        }
                        export class BehaviorDelegate {
                            public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.BehaviorDelegate>;
                            public canSwipeDismissView(child: globalAndroid.view.View): boolean;
                            public setBaseTransientBottomBar(baseTransientBottomBar: com.google.android.material.snackbar.BaseTransientBottomBar<any>): void;
                            public onInterceptTouchEvent(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: globalAndroid.view.View, event: globalAndroid.view.MotionEvent): void;
                            public constructor(behavior: com.google.android.material.behavior.SwipeDismissBehavior<any>);
                        }
                        export class ContentViewCallback extends com.google.android.material.snackbar.ContentViewCallback {
                            public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.ContentViewCallback>;
                            /**
                             * Constructs a new instance of the com.google.android.material.snackbar.BaseTransientBottomBar$ContentViewCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                animateContentIn(param0: number, param1: number): void;
                                animateContentOut(param0: number, param1: number): void;
                            });
                            public constructor();
                            public animateContentOut(param0: number, param1: number): void;
                            public animateContentIn(param0: number, param1: number): void;
                        }
                        export class Duration {
                            public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.Duration>;
                            /**
                             * Constructs a new instance of the com.google.android.material.snackbar.BaseTransientBottomBar$Duration interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class SnackbarBaseLayout {
                            public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.SnackbarBaseLayout>;
                            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                            public setOnClickListener(onClickListener: globalAndroid.view.View.OnClickListener): void;
                            public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
                            public setBackground(drawable: globalAndroid.graphics.drawable.Drawable): void;
                            public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
                            public onDetachedFromWindow(): void;
                            public setBackgroundTintList(this_: globalAndroid.content.res.ColorStateList): void;
                            public onAttachedToWindow(): void;
                            public setBackgroundTintMode(this_: globalAndroid.graphics.PorterDuff.Mode): void;
                            public setLayoutParams(params: globalAndroid.view.ViewGroup.LayoutParams): void;
                            public constructor(context: globalAndroid.content.Context);
                            public setBackgroundDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module snackbar {
                    export class ContentViewCallback {
                        public static class: java.lang.Class<com.google.android.material.snackbar.ContentViewCallback>;
                        /**
                         * Constructs a new instance of the com.google.android.material.snackbar.ContentViewCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            animateContentIn(param0: number, param1: number): void;
                            animateContentOut(param0: number, param1: number): void;
                        });
                        public constructor();
                        public animateContentIn(param0: number, param1: number): void;
                        public animateContentOut(param0: number, param1: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module snackbar {
                    export class Snackbar extends com.google.android.material.snackbar.BaseTransientBottomBar<com.google.android.material.snackbar.Snackbar> {
                        public static class: java.lang.Class<com.google.android.material.snackbar.Snackbar>;
                        /** @deprecated */
                        public static hasSnackbarButtonStyleAttr(context: globalAndroid.content.Context): boolean;
                        public isShown(): boolean;
                        public setText(message: string): com.google.android.material.snackbar.Snackbar;
                        public static make(view: globalAndroid.view.View, resId: number, duration: number): com.google.android.material.snackbar.Snackbar;
                        public getDuration(): number;
                        public dismiss(): void;
                        public static make(context: globalAndroid.content.Context, view: globalAndroid.view.View, text: string, duration: number): com.google.android.material.snackbar.Snackbar;
                        public setTextMaxLines(maxLines: number): com.google.android.material.snackbar.Snackbar;
                        public setTextColor(color: number): com.google.android.material.snackbar.Snackbar;
                        public setActionTextColor(color: number): com.google.android.material.snackbar.Snackbar;
                        public setBackgroundTint(color: number): com.google.android.material.snackbar.Snackbar;
                        public setAction(text: string, listener: globalAndroid.view.View.OnClickListener): com.google.android.material.snackbar.Snackbar;
                        public setActionTextColor(colors: globalAndroid.content.res.ColorStateList): com.google.android.material.snackbar.Snackbar;
                        public setBackgroundTintList(colorStateList: globalAndroid.content.res.ColorStateList): com.google.android.material.snackbar.Snackbar;
                        /** @deprecated */
                        public setCallback(callback: com.google.android.material.snackbar.Snackbar.Callback): com.google.android.material.snackbar.Snackbar;
                        public show(): void;
                        public setText(resId: number): com.google.android.material.snackbar.Snackbar;
                        public setMaxInlineActionWidth(width: number): com.google.android.material.snackbar.Snackbar;
                        public setBackgroundTintMode(mode: globalAndroid.graphics.PorterDuff.Mode): com.google.android.material.snackbar.Snackbar;
                        public static make(view: globalAndroid.view.View, text: string, duration: number): com.google.android.material.snackbar.Snackbar;
                        public setAction(resId: number, listener: globalAndroid.view.View.OnClickListener): com.google.android.material.snackbar.Snackbar;
                        public setTextColor(colors: globalAndroid.content.res.ColorStateList): com.google.android.material.snackbar.Snackbar;
                    }
                    export module Snackbar {
                        export class Callback extends com.google.android.material.snackbar.BaseTransientBottomBar.BaseCallback<com.google.android.material.snackbar.Snackbar> {
                            public static class: java.lang.Class<com.google.android.material.snackbar.Snackbar.Callback>;
                            public static DISMISS_EVENT_SWIPE: number = 0;
                            public static DISMISS_EVENT_ACTION: number = 1;
                            public static DISMISS_EVENT_TIMEOUT: number = 2;
                            public static DISMISS_EVENT_MANUAL: number = 3;
                            public static DISMISS_EVENT_CONSECUTIVE: number = 4;
                            public constructor();
                            public onShown(transientBottomBar: any): void;
                            public onShown(sb: com.google.android.material.snackbar.Snackbar): void;
                            public onDismissed(transientBottomBar: any, event: number): void;
                            public onDismissed(transientBottomBar: com.google.android.material.snackbar.Snackbar, event: number): void;
                        }
                        export class SnackbarLayout extends com.google.android.material.snackbar.BaseTransientBottomBar.SnackbarBaseLayout {
                            public static class: java.lang.Class<com.google.android.material.snackbar.Snackbar.SnackbarLayout>;
                            public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                            public onMeasure(i: number, this_: number): void;
                            public constructor(context: globalAndroid.content.Context);
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module snackbar {
                    export class SnackbarContentLayout implements com.google.android.material.snackbar.ContentViewCallback {
                        public static class: java.lang.Class<com.google.android.material.snackbar.SnackbarContentLayout>;
                        public getActionView(): globalAndroid.widget.Button;
                        public animateContentIn(param0: number, param1: number): void;
                        public animateContentOut(param0: number, param1: number): void;
                        public getMessageView(): globalAndroid.widget.TextView;
                        public setMaxInlineActionWidth(width: number): void;
                        public onMeasure(this_: number, widthMeasureSpec: number): void;
                        public onFinishInflate(): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public constructor(context: globalAndroid.content.Context);
                        public animateContentIn(delay: number, duration: number): void;
                        public animateContentOut(delay: number, duration: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module snackbar {
                    export class SnackbarManager {
                        public static class: java.lang.Class<com.google.android.material.snackbar.SnackbarManager>;
                        public isCurrent(callback: com.google.android.material.snackbar.SnackbarManager.Callback): boolean;
                        public restoreTimeoutIfPaused(callback: com.google.android.material.snackbar.SnackbarManager.Callback): void;
                        public show(duration: number, callback: com.google.android.material.snackbar.SnackbarManager.Callback): void;
                        public pauseTimeout(callback: com.google.android.material.snackbar.SnackbarManager.Callback): void;
                        public isCurrentOrNext(callback: com.google.android.material.snackbar.SnackbarManager.Callback): boolean;
                        public dismiss(callback: com.google.android.material.snackbar.SnackbarManager.Callback, event: number): void;
                        public onShown(callback: com.google.android.material.snackbar.SnackbarManager.Callback): void;
                        public onDismissed(callback: com.google.android.material.snackbar.SnackbarManager.Callback): void;
                    }
                    export module SnackbarManager {
                        export class Callback {
                            public static class: java.lang.Class<com.google.android.material.snackbar.SnackbarManager.Callback>;
                            /**
                             * Constructs a new instance of the com.google.android.material.snackbar.SnackbarManager$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                show(): void;
                                dismiss(param0: number): void;
                            });
                            public constructor();
                            public dismiss(param0: number): void;
                            public show(): void;
                        }
                        export class SnackbarRecord {
                            public static class: java.lang.Class<com.google.android.material.snackbar.SnackbarManager.SnackbarRecord>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module stateful {
                    export class ExtendableSavedState {
                        public static class: java.lang.Class<com.google.android.material.stateful.ExtendableSavedState>;
                        public extendableStates: androidx.collection.SimpleArrayMap<string, globalAndroid.os.Bundle>;
                        public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.stateful.ExtendableSavedState>;
                        public constructor(superState: globalAndroid.os.Parcelable);
                        public writeToParcel(this_: globalAndroid.os.Parcel, out: number): void;
                        public toString(): string;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module switchmaterial {
                    export class SwitchMaterial {
                        public static class: java.lang.Class<com.google.android.material.switchmaterial.SwitchMaterial>;
                        public isUseMaterialThemeColors(): boolean;
                        public setUseMaterialThemeColors(useMaterialThemeColors: boolean): void;
                        public onAttachedToWindow(): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public constructor(context: globalAndroid.content.Context);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module tabs {
                    export class ElasticTabIndicatorInterpolator extends com.google.android.material.tabs.TabIndicatorInterpolator {
                        public static class: java.lang.Class<com.google.android.material.tabs.ElasticTabIndicatorInterpolator>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module tabs {
                    export class FadeTabIndicatorInterpolator extends com.google.android.material.tabs.TabIndicatorInterpolator {
                        public static class: java.lang.Class<com.google.android.material.tabs.FadeTabIndicatorInterpolator>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module tabs {
                    export class TabIndicatorInterpolator {
                        public static class: java.lang.Class<com.google.android.material.tabs.TabIndicatorInterpolator>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module tabs {
                    export class TabItem {
                        public static class: java.lang.Class<com.google.android.material.tabs.TabItem>;
                        public text: string;
                        public icon: globalAndroid.graphics.drawable.Drawable;
                        public customLayout: number;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public constructor(context: globalAndroid.content.Context);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module tabs {
                    export class TabLayout {
                        public static class: java.lang.Class<com.google.android.material.tabs.TabLayout>;
                        public static MODE_SCROLLABLE: number = 0;
                        public static MODE_FIXED: number = 1;
                        public static MODE_AUTO: number = 2;
                        public static TAB_LABEL_VISIBILITY_UNLABELED: number = 0;
                        public static TAB_LABEL_VISIBILITY_LABELED: number = 1;
                        public static GRAVITY_FILL: number = 0;
                        public static GRAVITY_CENTER: number = 1;
                        public static GRAVITY_START: number = 2;
                        public static INDICATOR_GRAVITY_BOTTOM: number = 0;
                        public static INDICATOR_GRAVITY_CENTER: number = 1;
                        public static INDICATOR_GRAVITY_TOP: number = 2;
                        public static INDICATOR_GRAVITY_STRETCH: number = 3;
                        public static INDICATOR_ANIMATION_MODE_LINEAR: number = 0;
                        public static INDICATOR_ANIMATION_MODE_ELASTIC: number = 1;
                        public static INDICATOR_ANIMATION_MODE_FADE: number = 2;
                        public isTabIndicatorFullWidth(): boolean;
                        public getTabIconTint(): globalAndroid.content.res.ColorStateList;
                        public setTabIndicatorFullWidth(tabIndicatorFullWidth: boolean): void;
                        public setTabRippleColorResource(tabRippleColorResourceId: number): void;
                        public setTabRippleColor(i: globalAndroid.content.res.ColorStateList): void;
                        public setTabIndicatorAnimationMode(tabIndicatorAnimationMode: number): void;
                        public shouldDelayChildPressedState(): boolean;
                        public addTab(tab: com.google.android.material.tabs.TabLayout.Tab, position: number, setSelected: boolean): void;
                        public setInlineLabel(i: boolean): void;
                        public setSelectedTabIndicatorColor(color: number): void;
                        public setSelectedTabIndicator(tabSelectedIndicatorResourceId: number): void;
                        /** @deprecated */
                        public setSelectedTabIndicatorHeight(height: number): void;
                        public getSelectedTabPosition(): number;
                        public setTabGravity(gravity: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public setScrollPosition(position: number, positionOffset: number, updateSelectedTabView: boolean, updateIndicatorPosition: boolean): void;
                        public setTabMode(mode: number): void;
                        public setUnboundedRipple(i: boolean): void;
                        public addView(child: globalAndroid.view.View): void;
                        public addTab(tab: com.google.android.material.tabs.TabLayout.Tab, setSelected: boolean): void;
                        /** @deprecated */
                        public setOnTabSelectedListener(listener: com.google.android.material.tabs.TabLayout.OnTabSelectedListener): void;
                        public setSelectedTabIndicator(tabSelectedIndicator: globalAndroid.graphics.drawable.Drawable): void;
                        public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
                        public setScrollPosition(position: number, positionOffset: number, updateSelectedTabView: boolean): void;
                        public getTabTextColors(): globalAndroid.content.res.ColorStateList;
                        public releaseFromTabPool(tab: com.google.android.material.tabs.TabLayout.Tab): boolean;
                        public setSelectedTabIndicatorGravity(indicatorGravity: number): void;
                        public setupWithViewPager(viewPager: androidx.viewpager.widget.ViewPager): void;
                        public addTab(tab: com.google.android.material.tabs.TabLayout.Tab, position: number): void;
                        /** @deprecated */
                        public setOnTabSelectedListener(listener: com.google.android.material.tabs.TabLayout.BaseOnTabSelectedListener<any>): void;
                        public createTabFromPool(): com.google.android.material.tabs.TabLayout.Tab;
                        public onInitializeAccessibilityNodeInfo(info: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
                        public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): globalAndroid.widget.FrameLayout.LayoutParams;
                        public getTabCount(): number;
                        public removeTab(tab: com.google.android.material.tabs.TabLayout.Tab): void;
                        public getTabIndicatorGravity(): number;
                        public getTabMode(): number;
                        public clearOnTabSelectedListeners(): void;
                        public getTabSelectedIndicator(): globalAndroid.graphics.drawable.Drawable;
                        public onAttachedToWindow(): void;
                        public onInterceptTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
                        public setTabTextColors(normalColor: number, selectedColor: number): void;
                        public addOnTabSelectedListener(listener: com.google.android.material.tabs.TabLayout.OnTabSelectedListener): void;
                        public getTabAt(index: number): com.google.android.material.tabs.TabLayout.Tab;
                        public setTabIconTint(iconTint: globalAndroid.content.res.ColorStateList): void;
                        public getTabGravity(): number;
                        public newTab(): com.google.android.material.tabs.TabLayout.Tab;
                        public setUnboundedRippleResource(unboundedRippleResourceId: number): void;
                        public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
                        public setupWithViewPager(viewPager: androidx.viewpager.widget.ViewPager, autoRefresh: boolean): void;
                        public addView(child: globalAndroid.view.View, index: number): void;
                        public setInlineLabelResource(inlineResourceId: number): void;
                        public getTabRippleColor(): globalAndroid.content.res.ColorStateList;
                        public removeAllTabs(): void;
                        /** @deprecated */
                        public setTabsFromPagerAdapter(adapter: androidx.viewpager.widget.PagerAdapter): void;
                        public constructor(materialShapeDrawable: globalAndroid.content.Context, selectedTabTextColor: globalAndroid.util.AttributeSet, selectedTabTA: number);
                        public isInlineLabel(): boolean;
                        public onDetachedFromWindow(): void;
                        public setElevation(elevation: number): void;
                        public selectTab(this_: com.google.android.material.tabs.TabLayout.Tab, tab: boolean): void;
                        public addTab(tab: com.google.android.material.tabs.TabLayout.Tab): void;
                        /** @deprecated */
                        public removeOnTabSelectedListener(listener: com.google.android.material.tabs.TabLayout.BaseOnTabSelectedListener<any>): void;
                        public setTabTextColors(textColor: globalAndroid.content.res.ColorStateList): void;
                        public onDraw(i: globalAndroid.graphics.Canvas): void;
                        public selectTab(tab: com.google.android.material.tabs.TabLayout.Tab): void;
                        public removeTabAt(this_: number): void;
                        public hasUnboundedRipple(): boolean;
                        public onMeasure(childWidthMeasureSpec: number, child: number): void;
                        /** @deprecated */
                        public addOnTabSelectedListener(listener: com.google.android.material.tabs.TabLayout.BaseOnTabSelectedListener<any>): void;
                        public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
                        public getTabIndicatorAnimationMode(): number;
                        public removeOnTabSelectedListener(listener: com.google.android.material.tabs.TabLayout.OnTabSelectedListener): void;
                        public setTabIconTintResource(iconTintResourceId: number): void;
                        public constructor(context: globalAndroid.content.Context);
                    }
                    export module TabLayout {
                        export class AdapterChangeListener {
                            public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.AdapterChangeListener>;
                            public onAdapterChanged(viewPager: androidx.viewpager.widget.ViewPager, oldAdapter: androidx.viewpager.widget.PagerAdapter, newAdapter: androidx.viewpager.widget.PagerAdapter): void;
                        }
                        export class BaseOnTabSelectedListener<T> extends java.lang.Object {
                            public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.BaseOnTabSelectedListener<any>>;
                            /**
                             * Constructs a new instance of the com.google.android.material.tabs.TabLayout$BaseOnTabSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onTabSelected(param0: T): void;
                                onTabUnselected(param0: T): void;
                                onTabReselected(param0: T): void;
                            });
                            public constructor();
                            public onTabUnselected(param0: T): void;
                            public onTabReselected(param0: T): void;
                            public onTabSelected(param0: T): void;
                        }
                        export class LabelVisibility {
                            public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.LabelVisibility>;
                            /**
                             * Constructs a new instance of the com.google.android.material.tabs.TabLayout$LabelVisibility interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class Mode {
                            public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.Mode>;
                            /**
                             * Constructs a new instance of the com.google.android.material.tabs.TabLayout$Mode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class OnTabSelectedListener extends com.google.android.material.tabs.TabLayout.BaseOnTabSelectedListener<com.google.android.material.tabs.TabLayout.Tab> {
                            public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.OnTabSelectedListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.tabs.TabLayout$OnTabSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onTabSelected(param0: any): void;
                                onTabUnselected(param0: any): void;
                                onTabReselected(param0: any): void;
                            });
                            public constructor();
                            public onTabReselected(param0: any): void;
                            public onTabSelected(param0: any): void;
                            public onTabUnselected(param0: any): void;
                        }
                        export class PagerAdapterObserver {
                            public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.PagerAdapterObserver>;
                            public onChanged(): void;
                            public onInvalidated(): void;
                        }
                        export class SlidingTabIndicator {
                            public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.SlidingTabIndicator>;
                            public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
                            public draw(this_: globalAndroid.graphics.Canvas): void;
                            public onMeasure(i: number, z: number): void;
                            public onRtlPropertiesChanged(layoutDirection: number): void;
                        }
                        export class Tab {
                            public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.Tab>;
                            public static INVALID_POSITION: number = -1;
                            public parent: com.google.android.material.tabs.TabLayout;
                            public view: com.google.android.material.tabs.TabLayout.TabView;
                            public setCustomView(view: globalAndroid.view.View): com.google.android.material.tabs.TabLayout.Tab;
                            public getPosition(): number;
                            public setTabLabelVisibility(mode: number): com.google.android.material.tabs.TabLayout.Tab;
                            public setIcon(icon: globalAndroid.graphics.drawable.Drawable): com.google.android.material.tabs.TabLayout.Tab;
                            public setId(id: number): com.google.android.material.tabs.TabLayout.Tab;
                            public setText(resId: number): com.google.android.material.tabs.TabLayout.Tab;
                            public setIcon(resId: number): com.google.android.material.tabs.TabLayout.Tab;
                            public setCustomView(resId: number): com.google.android.material.tabs.TabLayout.Tab;
                            public select(): void;
                            public getIcon(): globalAndroid.graphics.drawable.Drawable;
                            public getTag(): any;
                            public getContentDescription(): string;
                            public setContentDescription(contentDesc: string): com.google.android.material.tabs.TabLayout.Tab;
                            public constructor();
                            public getTabLabelVisibility(): number;
                            public setTag(tag: any): com.google.android.material.tabs.TabLayout.Tab;
                            public getText(): string;
                            public isSelected(): boolean;
                            public setText(text: string): com.google.android.material.tabs.TabLayout.Tab;
                            public getCustomView(): globalAndroid.view.View;
                            public getOrCreateBadge(): com.google.android.material.badge.BadgeDrawable;
                            public getBadge(): com.google.android.material.badge.BadgeDrawable;
                            public getId(): number;
                            public removeBadge(): void;
                            public setContentDescription(resId: number): com.google.android.material.tabs.TabLayout.Tab;
                        }
                        export class TabGravity {
                            public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.TabGravity>;
                            /**
                             * Constructs a new instance of the com.google.android.material.tabs.TabLayout$TabGravity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class TabIndicatorAnimationMode {
                            public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.TabIndicatorAnimationMode>;
                            /**
                             * Constructs a new instance of the com.google.android.material.tabs.TabLayout$TabIndicatorAnimationMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class TabIndicatorGravity {
                            public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.TabIndicatorGravity>;
                            /**
                             * Constructs a new instance of the com.google.android.material.tabs.TabLayout$TabIndicatorGravity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class TabLayoutOnPageChangeListener {
                            public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.TabLayoutOnPageChangeListener>;
                            public onPageSelected(this_: number): void;
                            public constructor(tabLayout: com.google.android.material.tabs.TabLayout);
                            public onPageScrolled(updateIndicator: number, this_: number, position: number): void;
                            public onPageScrollStateChanged(state: number): void;
                        }
                        export class TabView {
                            public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.TabView>;
                            public constructor(this$0: com.google.android.material.tabs.TabLayout, context: globalAndroid.content.Context);
                            public setSelected(selected: boolean): void;
                            public performClick(): boolean;
                            public onInitializeAccessibilityNodeInfo(this_: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
                            public drawableStateChanged(): void;
                            public getTab(): com.google.android.material.tabs.TabLayout.Tab;
                            public onMeasure(layout: number, updateTextView: number): void;
                        }
                        export class ViewPagerOnTabSelectedListener extends com.google.android.material.tabs.TabLayout.OnTabSelectedListener {
                            public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.ViewPagerOnTabSelectedListener>;
                            public onTabUnselected(tab: com.google.android.material.tabs.TabLayout.Tab): void;
                            public onTabReselected(param0: any): void;
                            public onTabSelected(param0: any): void;
                            public onTabSelected(tab: com.google.android.material.tabs.TabLayout.Tab): void;
                            public onTabReselected(tab: com.google.android.material.tabs.TabLayout.Tab): void;
                            public onTabUnselected(param0: any): void;
                            public constructor(viewPager: androidx.viewpager.widget.ViewPager);
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module tabs {
                    export class TabLayoutMediator {
                        public static class: java.lang.Class<com.google.android.material.tabs.TabLayoutMediator>;
                        public constructor(tabLayout: com.google.android.material.tabs.TabLayout, viewPager: androidx.viewpager2.widget.ViewPager2, autoRefresh: boolean, tabConfigurationStrategy: com.google.android.material.tabs.TabLayoutMediator.TabConfigurationStrategy);
                        public constructor(tabLayout: com.google.android.material.tabs.TabLayout, viewPager: androidx.viewpager2.widget.ViewPager2, autoRefresh: boolean, smoothScroll: boolean, tabConfigurationStrategy: com.google.android.material.tabs.TabLayoutMediator.TabConfigurationStrategy);
                        public isAttached(): boolean;
                        public constructor(tabLayout: com.google.android.material.tabs.TabLayout, viewPager: androidx.viewpager2.widget.ViewPager2, tabConfigurationStrategy: com.google.android.material.tabs.TabLayoutMediator.TabConfigurationStrategy);
                        public detach(): void;
                        public attach(): void;
                    }
                    export module TabLayoutMediator {
                        export class PagerAdapterObserver {
                            public static class: java.lang.Class<com.google.android.material.tabs.TabLayoutMediator.PagerAdapterObserver>;
                            public onChanged(): void;
                            public onItemRangeMoved(fromPosition: number, toPosition: number, itemCount: number): void;
                            public onItemRangeInserted(positionStart: number, itemCount: number): void;
                            public onItemRangeChanged(positionStart: number, itemCount: number, payload: any): void;
                            public onItemRangeRemoved(positionStart: number, itemCount: number): void;
                            public onItemRangeChanged(positionStart: number, itemCount: number): void;
                        }
                        export class TabConfigurationStrategy {
                            public static class: java.lang.Class<com.google.android.material.tabs.TabLayoutMediator.TabConfigurationStrategy>;
                            /**
                             * Constructs a new instance of the com.google.android.material.tabs.TabLayoutMediator$TabConfigurationStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onConfigureTab(param0: com.google.android.material.tabs.TabLayout.Tab, param1: number): void;
                            });
                            public constructor();
                            public onConfigureTab(param0: com.google.android.material.tabs.TabLayout.Tab, param1: number): void;
                        }
                        export class TabLayoutOnPageChangeCallback {
                            public static class: java.lang.Class<com.google.android.material.tabs.TabLayoutMediator.TabLayoutOnPageChangeCallback>;
                            public onPageSelected(this_: number): void;
                            public onPageScrolled(updateIndicator: number, this_: number, position: number): void;
                            public onPageScrollStateChanged(state: number): void;
                        }
                        export class ViewPagerOnTabSelectedListener extends com.google.android.material.tabs.TabLayout.OnTabSelectedListener {
                            public static class: java.lang.Class<com.google.android.material.tabs.TabLayoutMediator.ViewPagerOnTabSelectedListener>;
                            public onTabUnselected(tab: com.google.android.material.tabs.TabLayout.Tab): void;
                            public onTabReselected(param0: any): void;
                            public onTabSelected(param0: any): void;
                            public onTabSelected(tab: com.google.android.material.tabs.TabLayout.Tab): void;
                            public onTabReselected(tab: com.google.android.material.tabs.TabLayout.Tab): void;
                            public onTabUnselected(param0: any): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module textfield {
                    export class ClearTextEndIconDelegate extends com.google.android.material.textfield.EndIconDelegate {
                        public static class: java.lang.Class<com.google.android.material.textfield.ClearTextEndIconDelegate>;
                        public onEditTextAttached(editText: globalAndroid.widget.EditText): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module textfield {
                    export class CustomEndIconDelegate extends com.google.android.material.textfield.EndIconDelegate {
                        public static class: java.lang.Class<com.google.android.material.textfield.CustomEndIconDelegate>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module textfield {
                    export class CutoutDrawable extends com.google.android.material.shape.MaterialShapeDrawable {
                        public static class: java.lang.Class<com.google.android.material.textfield.CutoutDrawable>;
                        public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
                        public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public mutate(): globalAndroid.graphics.drawable.Drawable;
                    }
                    export module CutoutDrawable {
                        export class CutoutDrawableState extends com.google.android.material.shape.MaterialShapeDrawable.MaterialShapeDrawableState {
                            public static class: java.lang.Class<com.google.android.material.textfield.CutoutDrawable.CutoutDrawableState>;
                            public newDrawable(): globalAndroid.graphics.drawable.Drawable;
                        }
                        export class ImplApi14 extends com.google.android.material.textfield.CutoutDrawable {
                            public static class: java.lang.Class<com.google.android.material.textfield.CutoutDrawable.ImplApi14>;
                            public drawStrokeShape(canvas: globalAndroid.graphics.Canvas): void;
                            public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
                            public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
                            public draw(canvas: globalAndroid.graphics.Canvas): void;
                        }
                        export class ImplApi18 extends com.google.android.material.textfield.CutoutDrawable {
                            public static class: java.lang.Class<com.google.android.material.textfield.CutoutDrawable.ImplApi18>;
                            public drawStrokeShape(canvas: globalAndroid.graphics.Canvas): void;
                            public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
                            public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module textfield {
                    export class DropdownMenuEndIconDelegate extends com.google.android.material.textfield.EndIconDelegate {
                        public static class: java.lang.Class<com.google.android.material.textfield.DropdownMenuEndIconDelegate>;
                        public onInitializeAccessibilityNodeInfo(host: globalAndroid.view.View, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
                        public onEditTextAttached(editText: globalAndroid.widget.EditText): void;
                        public onPopulateAccessibilityEvent(host: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): void;
                        public afterEditTextChanged(s: globalAndroid.text.Editable): void;
                        public getTouchExplorationStateChangeListener(): androidx.core.view.accessibility.AccessibilityManagerCompat.TouchExplorationStateChangeListener;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module textfield {
                    export class EditTextUtils {
                        public static class: java.lang.Class<com.google.android.material.textfield.EditTextUtils>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module textfield {
                    export class EndCompoundLayout {
                        public static class: java.lang.Class<com.google.android.material.textfield.EndCompoundLayout>;
                    }
                    export module EndCompoundLayout {
                        export class EndIconDelegates {
                            public static class: java.lang.Class<com.google.android.material.textfield.EndCompoundLayout.EndIconDelegates>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module textfield {
                    export abstract class EndIconDelegate {
                        public static class: java.lang.Class<com.google.android.material.textfield.EndIconDelegate>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module textfield {
                    export class IconHelper {
                        public static class: java.lang.Class<com.google.android.material.textfield.IconHelper>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module textfield {
                    export class IndicatorViewController {
                        public static class: java.lang.Class<com.google.android.material.textfield.IndicatorViewController>;
                        public constructor(textInputView: com.google.android.material.textfield.TextInputLayout);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module textfield {
                    export class MaterialAutoCompleteTextView {
                        public static class: java.lang.Class<com.google.android.material.textfield.MaterialAutoCompleteTextView>;
                        public onAttachedToWindow(): void;
                        public getSimpleItemSelectedColor(): number;
                        public onDetachedFromWindow(): void;
                        public getSimpleItemSelectedRippleColor(): globalAndroid.content.res.ColorStateList;
                        public setOnItemSelectedListener(listener: globalAndroid.widget.AdapterView.OnItemSelectedListener): void;
                        public constructor(context: globalAndroid.content.Context, attributeSet: globalAndroid.util.AttributeSet);
                        public onWindowFocusChanged(hasWindowFocus: boolean): void;
                        public setAdapter(adapter: globalAndroid.widget.ListAdapter): void;
                        public setSimpleItems(stringArrayResId: number): void;
                        public constructor(this_: globalAndroid.content.Context, context: globalAndroid.util.AttributeSet, attributeSet: number);
                        public getHint(): string;
                        public setDropDownBackgroundDrawable(d: globalAndroid.graphics.drawable.Drawable): void;
                        public setSimpleItems(stringArray: androidNative.Array<string>): void;
                        public onMeasure(this_: number, widthMeasureSpec: number): void;
                        public showDropDown(): void;
                        public setSimpleItemSelectedRippleColor(simpleItemSelectedRippleColor: globalAndroid.content.res.ColorStateList): void;
                        public setSimpleItemSelectedColor(simpleItemSelectedColor: number): void;
                        public getPopupElevation(): number;
                        public constructor(context: globalAndroid.content.Context);
                        public setRawInputType(type: number): void;
                        public dismissDropDown(): void;
                    }
                    export module MaterialAutoCompleteTextView {
                        export class MaterialArrayAdapter<T> extends globalAndroid.widget.ArrayAdapter<string> {
                            public static class: java.lang.Class<com.google.android.material.textfield.MaterialAutoCompleteTextView.MaterialArrayAdapter<any>>;
                            public getView(isSelectedItem: number, this_: globalAndroid.view.View, position: globalAndroid.view.ViewGroup): globalAndroid.view.View;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module textfield {
                    export class NoEndIconDelegate extends com.google.android.material.textfield.EndIconDelegate {
                        public static class: java.lang.Class<com.google.android.material.textfield.NoEndIconDelegate>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module textfield {
                    export class PasswordToggleEndIconDelegate extends com.google.android.material.textfield.EndIconDelegate {
                        public static class: java.lang.Class<com.google.android.material.textfield.PasswordToggleEndIconDelegate>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module textfield {
                    export class StartCompoundLayout {
                        public static class: java.lang.Class<com.google.android.material.textfield.StartCompoundLayout>;
                        public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module textfield {
                    export class TextInputEditText {
                        public static class: java.lang.Class<com.google.android.material.textfield.TextInputEditText>;
                        public onCreateInputConnection(outAttrs: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
                        public getFocusedRect(r: globalAndroid.graphics.Rect): void;
                        public getHint(): string;
                        public requestRectangleOnScreen(this_: globalAndroid.graphics.Rect): boolean;
                        public isTextInputLayoutFocusedRectEnabled(): boolean;
                        public onAttachedToWindow(): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public onInitializeAccessibilityNodeInfo(info: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
                        public getGlobalVisibleRect(r: globalAndroid.graphics.Rect, globalOffset: globalAndroid.graphics.Point): boolean;
                        public setTextInputLayoutFocusedRectEnabled(textInputLayoutFocusedRectEnabled: boolean): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public constructor(context: globalAndroid.content.Context);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module textfield {
                    export class TextInputLayout {
                        public static class: java.lang.Class<com.google.android.material.textfield.TextInputLayout>;
                        public static BOX_BACKGROUND_NONE: number = 0;
                        public static BOX_BACKGROUND_FILLED: number = 1;
                        public static BOX_BACKGROUND_OUTLINE: number = 2;
                        public static END_ICON_CUSTOM: number = -1;
                        public static END_ICON_NONE: number = 0;
                        public static END_ICON_PASSWORD_TOGGLE: number = 1;
                        public static END_ICON_CLEAR_TEXT: number = 2;
                        public static END_ICON_DROPDOWN_MENU: number = 3;
                        public setBoxCornerFamily(cornerFamily: number): void;
                        /** @deprecated */
                        public isPasswordVisibilityToggleEnabled(): boolean;
                        /** @deprecated */
                        public passwordVisibilityToggleRequested(shouldSkipAnimations: boolean): void;
                        public refreshEndIconDrawableState(): void;
                        public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
                        public constructor(this_: globalAndroid.content.Context, context: globalAndroid.util.AttributeSet, attrs: number);
                        public setHelperTextTextAppearance(helperTextTextAppearance: number): void;
                        public getBoxCornerRadiusBottomEnd(): number;
                        public getMaxWidth(): number;
                        public getHint(): string;
                        public setBoxCornerRadiiResources(boxCornerRadiusTopStartId: number, boxCornerRadiusTopEndId: number, boxCornerRadiusBottomEndId: number, boxCornerRadiusBottomStartId: number): void;
                        public isHintAnimationEnabled(): boolean;
                        public getBoxBackgroundMode(): number;
                        public setStartIconContentDescription(startIconContentDescription: string): void;
                        public getEndIconMinSize(): number;
                        public isProvidingHint(): boolean;
                        public setErrorTextAppearance(errorTextAppearance: number): void;
                        public setCounterTextAppearance(counterTextAppearance: number): void;
                        public setStartIconCheckable(startIconCheckable: boolean): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public setCounterMaxLength(maxLength: number): void;
                        public getErrorAccessibilityLiveRegion(): number;
                        public refreshStartIconDrawableState(): void;
                        public getErrorCurrentTextColors(): number;
                        public setMaxWidthResource(maxWidthId: number): void;
                        public setError(errorText: string): void;
                        public isEndIconVisible(): boolean;
                        public setTextInputAccessibilityDelegate(delegate: com.google.android.material.textfield.TextInputLayout.AccessibilityDelegate): void;
                        public setStartIconOnClickListener(startIconOnClickListener: globalAndroid.view.View.OnClickListener): void;
                        public setTypeface(typeface: globalAndroid.graphics.Typeface): void;
                        public setEnabled(enabled: boolean): void;
                        public setEndIconContentDescription(endIconContentDescription: string): void;
                        public setEndIconTintMode(endIconTintMode: globalAndroid.graphics.PorterDuff.Mode): void;
                        public getEditText(): globalAndroid.widget.EditText;
                        public setBoxBackgroundMode(boxBackgroundMode: number): void;
                        public setBoxCollapsedPaddingTop(boxCollapsedPaddingTop: number): void;
                        public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
                        public getPlaceholderText(): string;
                        public setErrorIconOnClickListener(errorIconOnClickListener: globalAndroid.view.View.OnClickListener): void;
                        public setErrorEnabled(enabled: boolean): void;
                        /** @deprecated */
                        public getPasswordVisibilityToggleDrawable(): globalAndroid.graphics.drawable.Drawable;
                        public addOnEditTextAttachedListener(listener: com.google.android.material.textfield.TextInputLayout.OnEditTextAttachedListener): void;
                        public addView(this_: globalAndroid.view.View, child: number, index: globalAndroid.view.ViewGroup.LayoutParams): void;
                        public setDefaultHintTextColor(textColor: globalAndroid.content.res.ColorStateList): void;
                        public setBoxStrokeErrorColor(strokeErrorColor: globalAndroid.content.res.ColorStateList): void;
                        public setErrorAccessibilityLiveRegion(errorAccessibilityLiveRegion: number): void;
                        public getBoxStrokeWidthFocused(): number;
                        public setEndIconMinSize(iconSize: number): void;
                        public setErrorIconDrawable(errorIconDrawable: globalAndroid.graphics.drawable.Drawable): void;
                        public removeOnEditTextAttachedListener(listener: com.google.android.material.textfield.TextInputLayout.OnEditTextAttachedListener): void;
                        public setErrorIconOnLongClickListener(errorIconOnLongClickListener: globalAndroid.view.View.OnLongClickListener): void;
                        public setBoxStrokeWidthFocused(boxStrokeWidthFocused: number): void;
                        public setStartIconContentDescription(resId: number): void;
                        public setEndIconOnClickListener(endIconOnClickListener: globalAndroid.view.View.OnClickListener): void;
                        public setStartIconVisible(visible: boolean): void;
                        public setSuffixTextAppearance(suffixTextAppearance: number): void;
                        public setMaxWidth(maxWidth: number): void;
                        public isExpandedHintEnabled(): boolean;
                        public setCounterEnabled(enabled: boolean): void;
                        public setMinWidth(minWidth: number): void;
                        public setEndIconContentDescription(resId: number): void;
                        public setBoxStrokeWidthResource(boxStrokeWidthResId: number): void;
                        public setHelperTextColor(helperTextColor: globalAndroid.content.res.ColorStateList): void;
                        public getErrorContentDescription(): string;
                        public getEndIconContentDescription(): string;
                        public getBoxCollapsedPaddingTop(): number;
                        public getEndIconScaleType(): globalAndroid.widget.ImageView.ScaleType;
                        public getCounterTextColor(): globalAndroid.content.res.ColorStateList;
                        public setErrorIconTintMode(errorIconTintMode: globalAndroid.graphics.PorterDuff.Mode): void;
                        public setEndIconActivated(endIconActivated: boolean): void;
                        public getBoxCornerRadiusTopStart(): number;
                        public getHintTextColor(): globalAndroid.content.res.ColorStateList;
                        public setHelperText(helperText: string): void;
                        public clearOnEndIconChangedListeners(): void;
                        public getMinEms(): number;
                        public getSuffixTextColor(): globalAndroid.content.res.ColorStateList;
                        public setStartIconTintMode(startIconTintMode: globalAndroid.graphics.PorterDuff.Mode): void;
                        public refreshErrorIconDrawableState(): void;
                        public getMinWidth(): number;
                        public setEndIconScaleType(scaleType: globalAndroid.widget.ImageView.ScaleType): void;
                        public onLayout(rect: boolean, this_: number, changed: number, left: number, top: number): void;
                        public getPrefixTextView(): globalAndroid.widget.TextView;
                        public getPrefixText(): string;
                        public isStartIconVisible(): boolean;
                        public isHelperTextEnabled(): boolean;
                        public onSaveInstanceState(): globalAndroid.os.Parcelable;
                        public getBoxStrokeWidth(): number;
                        public constructor(context: globalAndroid.content.Context);
                        public getStartIconContentDescription(): string;
                        public setStartIconScaleType(scaleType: globalAndroid.widget.ImageView.ScaleType): void;
                        public getCounterMaxLength(): number;
                        public getEndIconMode(): number;
                        /** @deprecated */
                        public setPasswordVisibilityToggleTintList(tintList: globalAndroid.content.res.ColorStateList): void;
                        /** @deprecated */
                        public setPasswordVisibilityToggleTintMode(mode: globalAndroid.graphics.PorterDuff.Mode): void;
                        public setPlaceholderTextAppearance(placeholderTextAppearance: number): void;
                        public setPlaceholderText(placeholderText: string): void;
                        public getBaseline(): number;
                        public setPrefixTextAppearance(prefixTextAppearance: number): void;
                        public getTypeface(): globalAndroid.graphics.Typeface;
                        public addOnEndIconChangedListener(listener: com.google.android.material.textfield.TextInputLayout.OnEndIconChangedListener): void;
                        public getBoxBackgroundColor(): number;
                        public isCounterEnabled(): boolean;
                        public getStartIconMinSize(): number;
                        public setHint(hint: string): void;
                        public setCounterOverflowTextColor(counterOverflowTextColor: globalAndroid.content.res.ColorStateList): void;
                        public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
                        public getBoxCornerRadiusTopEnd(): number;
                        public getCounterOverflowTextColor(): globalAndroid.content.res.ColorStateList;
                        public dispatchRestoreInstanceState(container: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
                        public removeOnEndIconChangedListener(listener: com.google.android.material.textfield.TextInputLayout.OnEndIconChangedListener): void;
                        public setLengthCounter(lengthCounter: com.google.android.material.textfield.TextInputLayout.LengthCounter): void;
                        public setEndIconTintList(endIconTintList: globalAndroid.content.res.ColorStateList): void;
                        public setMaxEms(maxEms: number): void;
                        public setStartIconTintList(startIconTintList: globalAndroid.content.res.ColorStateList): void;
                        public setHelperTextEnabled(enabled: boolean): void;
                        public setPrefixText(prefixText: string): void;
                        public getPlaceholderTextAppearance(): number;
                        public setHint(textHintId: number): void;
                        public getSuffixText(): string;
                        public setEndIconDrawable(resId: number): void;
                        public setBoxCornerRadii(boxCornerRadiusTopStart: number, boxCornerRadiusTopEnd: number, boxCornerRadiusBottomStart: number, boxCornerRadiusBottomEnd: number): void;
                        public onRtlPropertiesChanged(boxCornerRadiusTopRight: number): void;
                        /** @deprecated */
                        public setPasswordVisibilityToggleDrawable(resId: number): void;
                        public setMinEms(minEms: number): void;
                        public setBoxBackgroundColorStateList(boxBackgroundColorStateList: globalAndroid.content.res.ColorStateList): void;
                        public setPlaceholderTextColor(placeholderTextColor: globalAndroid.content.res.ColorStateList): void;
                        public setCounterTextColor(counterTextColor: globalAndroid.content.res.ColorStateList): void;
                        public setStartIconOnLongClickListener(startIconOnLongClickListener: globalAndroid.view.View.OnLongClickListener): void;
                        public setEndIconDrawable(endIconDrawable: globalAndroid.graphics.drawable.Drawable): void;
                        public getError(): string;
                        public setErrorIconTintList(errorIconTintList: globalAndroid.content.res.ColorStateList): void;
                        public setBoxStrokeColor(boxStrokeColor: number): void;
                        public setBoxBackgroundColor(boxBackgroundColor: number): void;
                        public setBoxBackgroundColorResource(boxBackgroundColorId: number): void;
                        public setCounterOverflowTextAppearance(counterOverflowTextAppearance: number): void;
                        public getLengthCounter(): com.google.android.material.textfield.TextInputLayout.LengthCounter;
                        public setHintAnimationEnabled(enabled: boolean): void;
                        public setErrorTextColor(errorTextColor: globalAndroid.content.res.ColorStateList): void;
                        public getPrefixTextColor(): globalAndroid.content.res.ColorStateList;
                        /** @deprecated */
                        public setPasswordVisibilityToggleContentDescription(description: string): void;
                        public setMinWidthResource(minWidthId: number): void;
                        public setStartIconDrawable(startIconDrawable: globalAndroid.graphics.drawable.Drawable): void;
                        public setEndIconMode(endIconMode: number): void;
                        public draw(canvas: globalAndroid.graphics.Canvas): void;
                        public getBoxStrokeColor(): number;
                        public setPrefixTextColor(prefixTextColor: globalAndroid.content.res.ColorStateList): void;
                        public getSuffixTextView(): globalAndroid.widget.TextView;
                        public getDefaultHintTextColor(): globalAndroid.content.res.ColorStateList;
                        /** @deprecated */
                        public setPasswordVisibilityToggleDrawable(icon: globalAndroid.graphics.drawable.Drawable): void;
                        public setEndIconVisible(visible: boolean): void;
                        public getBoxCornerRadiusBottomStart(): number;
                        public drawableStateChanged(): void;
                        public setBoxStrokeWidth(boxStrokeWidth: number): void;
                        public setBoxStrokeWidthFocusedResource(boxStrokeWidthFocusedResId: number): void;
                        public getHelperText(): string;
                        public isEndIconCheckable(): boolean;
                        /** @deprecated */
                        public getPasswordVisibilityToggleContentDescription(): string;
                        public getMaxEms(): number;
                        public setHintTextColor(hintTextColor: globalAndroid.content.res.ColorStateList): void;
                        public getHelperTextCurrentTextColor(): number;
                        public setErrorContentDescription(errorContentDescription: string): void;
                        public setErrorIconDrawable(resId: number): void;
                        /** @deprecated */
                        public setPasswordVisibilityToggleContentDescription(resId: number): void;
                        public getStartIconDrawable(): globalAndroid.graphics.drawable.Drawable;
                        public isStartIconCheckable(): boolean;
                        public setEndIconCheckable(endIconCheckable: boolean): void;
                        public setShapeAppearanceModel(shapeAppearanceModel: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
                        public setStartIconDrawable(resId: number): void;
                        public getStartIconScaleType(): globalAndroid.widget.ImageView.ScaleType;
                        public isHintEnabled(): boolean;
                        public setBoxStrokeColorStateList(boxStrokeColorStateList: globalAndroid.content.res.ColorStateList): void;
                        public setSuffixTextColor(suffixTextColor: globalAndroid.content.res.ColorStateList): void;
                        public setHintTextAppearance(resId: number): void;
                        public setExpandedHintEnabled(enabled: boolean): void;
                        public setStartIconMinSize(iconSize: number): void;
                        public setEndIconOnLongClickListener(endIconOnLongClickListener: globalAndroid.view.View.OnLongClickListener): void;
                        public setHintEnabled(this_: boolean): void;
                        public dispatchProvideAutofillStructure(hint: any, child: number): void;
                        public getPlaceholderTextColor(): globalAndroid.content.res.ColorStateList;
                        public getEndIconDrawable(): globalAndroid.graphics.drawable.Drawable;
                        public clearOnEditTextAttachedListeners(): void;
                        public getErrorIconDrawable(): globalAndroid.graphics.drawable.Drawable;
                        public getBoxStrokeErrorColor(): globalAndroid.content.res.ColorStateList;
                        public setSuffixText(suffixText: string): void;
                        /** @deprecated */
                        public setPasswordVisibilityToggleEnabled(enabled: boolean): void;
                        public isErrorEnabled(): boolean;
                    }
                    export module TextInputLayout {
                        export class comgoogleandroidmaterialtextfieldTextInputLayoutAccessibilityDelegate {
                            public static class: java.lang.Class<com.google.android.material.textfield.TextInputLayout.AccessibilityDelegate>;
                            public constructor(layout: com.google.android.material.textfield.TextInputLayout);
                            public onPopulateAccessibilityEvent(host: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): void;
                            public onInitializeAccessibilityNodeInfo(helperTextView: globalAndroid.view.View, this_: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
                        }
                        export type AccessibilityDelegate = comgoogleandroidmaterialtextfieldTextInputLayoutAccessibilityDelegate
                        export class BoxBackgroundMode {
                            public static class: java.lang.Class<com.google.android.material.textfield.TextInputLayout.BoxBackgroundMode>;
                            /**
                             * Constructs a new instance of the com.google.android.material.textfield.TextInputLayout$BoxBackgroundMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class EndIconMode {
                            public static class: java.lang.Class<com.google.android.material.textfield.TextInputLayout.EndIconMode>;
                            /**
                             * Constructs a new instance of the com.google.android.material.textfield.TextInputLayout$EndIconMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class LengthCounter {
                            public static class: java.lang.Class<com.google.android.material.textfield.TextInputLayout.LengthCounter>;
                            /**
                             * Constructs a new instance of the com.google.android.material.textfield.TextInputLayout$LengthCounter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                countLength(param0: globalAndroid.text.Editable): number;
                            });
                            public constructor();
                            public countLength(param0: globalAndroid.text.Editable): number;
                        }
                        export class OnEditTextAttachedListener {
                            public static class: java.lang.Class<com.google.android.material.textfield.TextInputLayout.OnEditTextAttachedListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.textfield.TextInputLayout$OnEditTextAttachedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onEditTextAttached(param0: com.google.android.material.textfield.TextInputLayout): void;
                            });
                            public constructor();
                            public onEditTextAttached(param0: com.google.android.material.textfield.TextInputLayout): void;
                        }
                        export class OnEndIconChangedListener {
                            public static class: java.lang.Class<com.google.android.material.textfield.TextInputLayout.OnEndIconChangedListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.textfield.TextInputLayout$OnEndIconChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onEndIconChanged(param0: com.google.android.material.textfield.TextInputLayout, param1: number): void;
                            });
                            public constructor();
                            public onEndIconChanged(param0: com.google.android.material.textfield.TextInputLayout, param1: number): void;
                        }
                        export class SavedState {
                            public static class: java.lang.Class<com.google.android.material.textfield.TextInputLayout.SavedState>;
                            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.textfield.TextInputLayout.SavedState>;
                            public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
                            public toString(): string;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module textview {
                    export class MaterialTextView {
                        public static class: java.lang.Class<com.google.android.material.textview.MaterialTextView>;
                        public setTextAppearance(context: globalAndroid.content.Context, resId: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        /** @deprecated */
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public constructor(context: globalAndroid.content.Context);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module theme {
                    export class MaterialComponentsViewInflater {
                        public static class: java.lang.Class<com.google.android.material.theme.MaterialComponentsViewInflater>;
                        public constructor();
                        public createButton(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatButton;
                        public createCheckBox(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatCheckBox;
                        public createRadioButton(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatRadioButton;
                        public createAutoCompleteTextView(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatAutoCompleteTextView;
                        public createTextView(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatTextView;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module theme {
                    export module overlay {
                        export class MaterialThemeOverlay {
                            public static class: java.lang.Class<com.google.android.material.theme.overlay.MaterialThemeOverlay>;
                            public static wrap(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number): globalAndroid.content.Context;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module timepicker {
                    export class ChipTextInputComboView {
                        public static class: java.lang.Class<com.google.android.material.timepicker.ChipTextInputComboView>;
                        public setCursorVisible(visible: boolean): void;
                        public setOnClickListener(l: globalAndroid.view.View.OnClickListener): void;
                        public setChecked(checked: boolean): void;
                        public setHelperText(helperText: string): void;
                        public setText(text: string): void;
                        public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
                        public addInputFilter(filter: globalAndroid.text.InputFilter): void;
                        public isChecked(): boolean;
                        public setTag(key: number, tag: any): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public toggle(): void;
                        public setChipDelegate(clickActionDelegate: androidx.core.view.AccessibilityDelegateCompat): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public getTextInput(): com.google.android.material.textfield.TextInputLayout;
                        public constructor(context: globalAndroid.content.Context);
                    }
                    export module ChipTextInputComboView {
                        export class TextFormatter extends com.google.android.material.internal.TextWatcherAdapter {
                            public static class: java.lang.Class<com.google.android.material.timepicker.ChipTextInputComboView.TextFormatter>;
                            public afterTextChanged(editable: globalAndroid.text.Editable): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module timepicker {
                    export class ClickActionDelegate {
                        public static class: java.lang.Class<com.google.android.material.timepicker.ClickActionDelegate>;
                        public constructor(context: globalAndroid.content.Context, resId: number);
                        public onInitializeAccessibilityNodeInfo(host: globalAndroid.view.View, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module timepicker {
                    export class ClockFaceView extends com.google.android.material.timepicker.RadialViewGroup implements com.google.android.material.timepicker.ClockHandView.OnRotateListener {
                        public static class: java.lang.Class<com.google.android.material.timepicker.ClockFaceView>;
                        public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
                        public onRotate(param0: number, param1: boolean): void;
                        public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public onInitializeAccessibilityNodeInfo(info: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
                        public onRotate(rotation: number, animating: boolean): void;
                        public setValues(values: androidNative.Array<string>, contentDescription: number): void;
                        public updateLayoutParams(): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public constructor(context: globalAndroid.content.Context);
                        public setRadius(radius: number): void;
                        public setHandRotation(rotation: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module timepicker {
                    export class ClockHandView {
                        public static class: java.lang.Class<com.google.android.material.timepicker.ClockHandView>;
                        public setAnimateOnTouchUp(animating: boolean): void;
                        public getCurrentSelectorBox(): globalAndroid.graphics.RectF;
                        public setHandRotation(degrees: number, animate: boolean): void;
                        public getHandRotation(): number;
                        public getSelectorRadius(): number;
                        public setHandRotation(degrees: number): void;
                        public setCircleRadius(circleRadius: number): void;
                        public onTouchEvent(deltaY: globalAndroid.view.MotionEvent): boolean;
                        public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public setOnActionUpListener(listener: com.google.android.material.timepicker.ClockHandView.OnActionUpListener): void;
                        public addOnRotateListener(listener: com.google.android.material.timepicker.ClockHandView.OnRotateListener): void;
                        public onDraw(canvas: globalAndroid.graphics.Canvas): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public constructor(context: globalAndroid.content.Context);
                    }
                    export module ClockHandView {
                        export class OnActionUpListener {
                            public static class: java.lang.Class<com.google.android.material.timepicker.ClockHandView.OnActionUpListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.timepicker.ClockHandView$OnActionUpListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onActionUp(param0: number, param1: boolean): void;
                            });
                            public constructor();
                            public onActionUp(param0: number, param1: boolean): void;
                        }
                        export class OnRotateListener {
                            public static class: java.lang.Class<com.google.android.material.timepicker.ClockHandView.OnRotateListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.timepicker.ClockHandView$OnRotateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onRotate(param0: number, param1: boolean): void;
                            });
                            public constructor();
                            public onRotate(param0: number, param1: boolean): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module timepicker {
                    export class MaterialTimePicker implements com.google.android.material.timepicker.TimePickerView.OnDoubleTapListener {
                        public static class: java.lang.Class<com.google.android.material.timepicker.MaterialTimePicker>;
                        public static INPUT_MODE_CLOCK: number = 0;
                        public static INPUT_MODE_KEYBOARD: number = 1;
                        public setHour(hour: number): void;
                        public getInputMode(): number;
                        public addOnDismissListener(listener: globalAndroid.content.DialogInterface.OnDismissListener): boolean;
                        public onCancel(this_: globalAndroid.content.DialogInterface): void;
                        public setCancelable(cancelable: boolean): void;
                        public onDestroyView(): void;
                        public removeOnCancelListener(listener: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
                        public addOnPositiveButtonClickListener(listener: globalAndroid.view.View.OnClickListener): boolean;
                        public onDoubleTap(): void;
                        public getMinute(): number;
                        public removeOnNegativeButtonClickListener(listener: globalAndroid.view.View.OnClickListener): boolean;
                        public removeOnPositiveButtonClickListener(listener: globalAndroid.view.View.OnClickListener): boolean;
                        public addOnNegativeButtonClickListener(listener: globalAndroid.view.View.OnClickListener): boolean;
                        public clearOnPositiveButtonClickListeners(): void;
                        public constructor();
                        public removeOnDismissListener(listener: globalAndroid.content.DialogInterface.OnDismissListener): boolean;
                        public clearOnNegativeButtonClickListeners(): void;
                        public onDismiss(this_: globalAndroid.content.DialogInterface): void;
                        public setMinute(minute: number): void;
                        public getHour(): number;
                        public onCreateView(layoutInflater: globalAndroid.view.LayoutInflater, viewGroup: globalAndroid.view.ViewGroup, bundle: globalAndroid.os.Bundle): globalAndroid.view.View;
                        public addOnCancelListener(listener: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
                        public onSaveInstanceState(bundle: globalAndroid.os.Bundle): void;
                        public clearOnCancelListeners(): void;
                        public onViewCreated(view: globalAndroid.view.View, bundle: globalAndroid.os.Bundle): void;
                        public clearOnDismissListeners(): void;
                        public onCreateDialog(bundle: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
                        public onCreate(bundle: globalAndroid.os.Bundle): void;
                    }
                    export module MaterialTimePicker {
                        export class Builder {
                            public static class: java.lang.Class<com.google.android.material.timepicker.MaterialTimePicker.Builder>;
                            public constructor();
                            public setTitleText(charSequence: string): com.google.android.material.timepicker.MaterialTimePicker.Builder;
                            public build(): com.google.android.material.timepicker.MaterialTimePicker;
                            public setInputMode(inputMode: number): com.google.android.material.timepicker.MaterialTimePicker.Builder;
                            public setMinute(minute: number): com.google.android.material.timepicker.MaterialTimePicker.Builder;
                            public setTheme(themeResId: number): com.google.android.material.timepicker.MaterialTimePicker.Builder;
                            public setTimeFormat(format: number): com.google.android.material.timepicker.MaterialTimePicker.Builder;
                            public setPositiveButtonText(positiveButtonText: string): com.google.android.material.timepicker.MaterialTimePicker.Builder;
                            public setHour(hour: number): com.google.android.material.timepicker.MaterialTimePicker.Builder;
                            public setNegativeButtonText(negativeButtonTextResId: number): com.google.android.material.timepicker.MaterialTimePicker.Builder;
                            public setTitleText(titleTextResId: number): com.google.android.material.timepicker.MaterialTimePicker.Builder;
                            public setPositiveButtonText(positiveButtonTextResId: number): com.google.android.material.timepicker.MaterialTimePicker.Builder;
                            public setNegativeButtonText(negativeButtonText: string): com.google.android.material.timepicker.MaterialTimePicker.Builder;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module timepicker {
                    export class MaxInputValidator {
                        public static class: java.lang.Class<com.google.android.material.timepicker.MaxInputValidator>;
                        public constructor(max: number);
                        public setMax(max: number): void;
                        public filter(newVal: string, input: number, this_: number, source: globalAndroid.text.Spanned, start: number, end: number): string;
                        public getMax(): number;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module timepicker {
                    export class RadialViewGroup {
                        public static class: java.lang.Class<com.google.android.material.timepicker.RadialViewGroup>;
                        public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public setBackgroundColor(color: number): void;
                        public onViewRemoved(view: globalAndroid.view.View): void;
                        public getRadius(): number;
                        public onFinishInflate(): void;
                        public updateLayoutParams(): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public constructor(context: globalAndroid.content.Context);
                        public setRadius(radius: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module timepicker {
                    export class TimeFormat {
                        public static class: java.lang.Class<com.google.android.material.timepicker.TimeFormat>;
                        /**
                         * Constructs a new instance of the com.google.android.material.timepicker.TimeFormat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                        });
                        public constructor();
                        public static CLOCK_24H: number = 1;
                        public static CLOCK_12H: number = 0;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module timepicker {
                    export class TimeModel {
                        public static class: java.lang.Class<com.google.android.material.timepicker.TimeModel>;
                        public static ZERO_LEADING_NUMBER_FORMAT: string = "%02d";
                        public static NUMBER_FORMAT: string = "%d";
                        public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.timepicker.TimeModel>;
                        public constructor(format: number);
                        public constructor(in_: globalAndroid.os.Parcel);
                        public setHour(hour: number): void;
                        public constructor();
                        public describeContents(): number;
                        public setHourOfDay(hour: number): void;
                        public static formatText(e: globalAndroid.content.res.Resources, resources: string, text: string): string;
                        public hashCode(): number;
                        public static formatText(resources: globalAndroid.content.res.Resources, text: string): string;
                        public getMinuteInputValidator(): com.google.android.material.timepicker.MaxInputValidator;
                        public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
                        public constructor(hour: number, minute: number, selection: number, format: number);
                        public setMinute(minute: number): void;
                        public getHourContentDescriptionResId(): number;
                        public setPeriod(period: number): void;
                        public getHourForDisplay(): number;
                        public equals(o: any): boolean;
                        public getHourInputValidator(): com.google.android.material.timepicker.MaxInputValidator;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module timepicker {
                    export class TimePickerClockPresenter implements com.google.android.material.timepicker.ClockHandView.OnRotateListener, com.google.android.material.timepicker.TimePickerView.OnSelectionChange, com.google.android.material.timepicker.TimePickerView.OnPeriodChangeListener, com.google.android.material.timepicker.ClockHandView.OnActionUpListener, com.google.android.material.timepicker.TimePickerPresenter {
                        public static class: java.lang.Class<com.google.android.material.timepicker.TimePickerClockPresenter>;
                        public onRotate(param0: number, param1: boolean): void;
                        public onSelectionChanged(selection: number): void;
                        public hide(): void;
                        public onSelectionChanged(param0: number): void;
                        public onActionUp(isExploreByTouchEnabled: number, newRotation: boolean): void;
                        public onPeriodChange(period: number): void;
                        public invalidate(): void;
                        public onPeriodChange(param0: number): void;
                        public show(): void;
                        public constructor(timePickerView: com.google.android.material.timepicker.TimePickerView, time: com.google.android.material.timepicker.TimeModel);
                        public initialize(): void;
                        public onActionUp(param0: number, param1: boolean): void;
                        public onRotate(hourOffset: number, hour: boolean): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module timepicker {
                    export class TimePickerControls {
                        public static class: java.lang.Class<com.google.android.material.timepicker.TimePickerControls>;
                        /**
                         * Constructs a new instance of the com.google.android.material.timepicker.TimePickerControls interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            updateTime(param0: number, param1: number, param2: number): void;
                            setActiveSelection(param0: number): void;
                            setValues(param0: androidNative.Array<string>, param1: number): void;
                            setHandRotation(param0: number): void;
                        });
                        public constructor();
                        public setHandRotation(param0: number): void;
                        public updateTime(param0: number, param1: number, param2: number): void;
                        public setActiveSelection(param0: number): void;
                        public setValues(param0: androidNative.Array<string>, param1: number): void;
                    }
                    export module TimePickerControls {
                        export class ActiveSelection {
                            public static class: java.lang.Class<com.google.android.material.timepicker.TimePickerControls.ActiveSelection>;
                            /**
                             * Constructs a new instance of the com.google.android.material.timepicker.TimePickerControls$ActiveSelection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class ClockPeriod {
                            public static class: java.lang.Class<com.google.android.material.timepicker.TimePickerControls.ClockPeriod>;
                            /**
                             * Constructs a new instance of the com.google.android.material.timepicker.TimePickerControls$ClockPeriod interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module timepicker {
                    export class TimePickerPresenter {
                        public static class: java.lang.Class<com.google.android.material.timepicker.TimePickerPresenter>;
                        /**
                         * Constructs a new instance of the com.google.android.material.timepicker.TimePickerPresenter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            initialize(): void;
                            invalidate(): void;
                            hide(): void;
                            show(): void;
                        });
                        public constructor();
                        public invalidate(): void;
                        public show(): void;
                        public initialize(): void;
                        public hide(): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module timepicker {
                    export class TimePickerTextInputKeyController {
                        public static class: java.lang.Class<com.google.android.material.timepicker.TimePickerTextInputKeyController>;
                        public onKey(view: globalAndroid.view.View, keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
                        public onEditorAction(v: globalAndroid.widget.TextView, actionId: number, event: globalAndroid.view.KeyEvent): boolean;
                        public bind(): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module timepicker {
                    export class TimePickerTextInputPresenter implements com.google.android.material.timepicker.TimePickerView.OnSelectionChange, com.google.android.material.timepicker.TimePickerPresenter {
                        public static class: java.lang.Class<com.google.android.material.timepicker.TimePickerTextInputPresenter>;
                        public onSelectionChanged(selection: number): void;
                        public constructor(this_: globalAndroid.widget.LinearLayout, timePickerView: com.google.android.material.timepicker.TimeModel);
                        public invalidate(): void;
                        public show(): void;
                        public initialize(): void;
                        public resetChecked(): void;
                        public hide(): void;
                        public clearCheck(): void;
                        public onSelectionChanged(param0: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module timepicker {
                    export class TimePickerView implements com.google.android.material.timepicker.TimePickerControls {
                        public static class: java.lang.Class<com.google.android.material.timepicker.TimePickerView>;
                        public setHandRotation(rotation: number, animate: boolean): void;
                        public setAnimateOnTouchUp(animating: boolean): void;
                        public updateTime(param0: number, param1: number, param2: number): void;
                        public onVisibilityChanged(changedView: globalAndroid.view.View, visibility: number): void;
                        public setActiveSelection(param0: number): void;
                        public setMinuteHourDelegate(clickActionDelegate: androidx.core.view.AccessibilityDelegateCompat): void;
                        public updateTime(period: number, hourOfDay: number, minute: number): void;
                        public showToggle(): void;
                        public setHandRotation(param0: number): void;
                        public setActiveSelection(selection: number): void;
                        public addOnRotateListener(onRotateListener: com.google.android.material.timepicker.ClockHandView.OnRotateListener): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public setOnActionUpListener(onActionUpListener: com.google.android.material.timepicker.ClockHandView.OnActionUpListener): void;
                        public setValues(values: androidNative.Array<string>, contentDescription: number): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public constructor(context: globalAndroid.content.Context);
                        public setValues(param0: androidNative.Array<string>, param1: number): void;
                        public setHourClickDelegate(clickActionDelegate: androidx.core.view.AccessibilityDelegateCompat): void;
                        public setHandRotation(rotation: number): void;
                    }
                    export module TimePickerView {
                        export class OnDoubleTapListener {
                            public static class: java.lang.Class<com.google.android.material.timepicker.TimePickerView.OnDoubleTapListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.timepicker.TimePickerView$OnDoubleTapListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onDoubleTap(): void;
                            });
                            public constructor();
                            public onDoubleTap(): void;
                        }
                        export class OnPeriodChangeListener {
                            public static class: java.lang.Class<com.google.android.material.timepicker.TimePickerView.OnPeriodChangeListener>;
                            /**
                             * Constructs a new instance of the com.google.android.material.timepicker.TimePickerView$OnPeriodChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onPeriodChange(param0: number): void;
                            });
                            public constructor();
                            public onPeriodChange(param0: number): void;
                        }
                        export class OnSelectionChange {
                            public static class: java.lang.Class<com.google.android.material.timepicker.TimePickerView.OnSelectionChange>;
                            /**
                             * Constructs a new instance of the com.google.android.material.timepicker.TimePickerView$OnSelectionChange interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onSelectionChanged(param0: number): void;
                            });
                            public constructor();
                            public onSelectionChanged(param0: number): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module tooltip {
                    export class TooltipDrawable extends com.google.android.material.shape.MaterialShapeDrawable implements com.google.android.material.internal.TextDrawableHelper.TextDrawableDelegate {
                        public static class: java.lang.Class<com.google.android.material.tooltip.TooltipDrawable>;
                        public getTextAppearance(): com.google.android.material.resources.TextAppearance;
                        public setTextAppearanceResource(id: number): void;
                        public getTextPadding(): number;
                        public draw(canvas: globalAndroid.graphics.Canvas): void;
                        public setRevealFraction(fraction: number): void;
                        public setMinHeight(minHeight: number): void;
                        public getText(): string;
                        public onBoundsChange(bounds: globalAndroid.graphics.Rect): void;
                        public static createFromAttributes(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): com.google.android.material.tooltip.TooltipDrawable;
                        public setTextAppearance(textAppearance: com.google.android.material.resources.TextAppearance): void;
                        public getLayoutMargin(): number;
                        public setMinWidth(minWidth: number): void;
                        public detachView(view: globalAndroid.view.View): void;
                        public getState(): androidNative.Array<number>;
                        public onStateChange(state: androidNative.Array<number>): boolean;
                        public getMinHeight(): number;
                        public setRelativeToView(view: globalAndroid.view.View): void;
                        public getIntrinsicWidth(): number;
                        public setTextResource(id: number): void;
                        public getIntrinsicHeight(): number;
                        public static create(context: globalAndroid.content.Context): com.google.android.material.tooltip.TooltipDrawable;
                        public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public onStateChange(param0: androidNative.Array<number>): boolean;
                        public setText(text: string): void;
                        public onTextSizeChange(): void;
                        public setLayoutMargin(layoutMargin: number): void;
                        public setTextPadding(padding: number): void;
                        public static createFromAttributes(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number): com.google.android.material.tooltip.TooltipDrawable;
                        public getMinWidth(): number;
                        public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transformation {
                    export abstract class ExpandableBehavior extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<globalAndroid.view.View> {
                        public static class: java.lang.Class<com.google.android.material.transformation.ExpandableBehavior>;
                        public constructor();
                        public layoutDependsOn(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
                        public onExpandedStateChange(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: boolean, param3: boolean): boolean;
                        public onLayoutChild(dep: androidx.coordinatorlayout.widget.CoordinatorLayout, this_: globalAndroid.view.View, parent: number): boolean;
                        public static from(view: globalAndroid.view.View, klass: java.lang.Class<any>): com.google.android.material.transformation.ExpandableBehavior;
                        public findExpandableWidget(i: androidx.coordinatorlayout.widget.CoordinatorLayout, size: globalAndroid.view.View): com.google.android.material.expandable.ExpandableWidget;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public onDependentViewChanged(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: globalAndroid.view.View, dependency: globalAndroid.view.View): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transformation {
                    export abstract class ExpandableTransformationBehavior extends com.google.android.material.transformation.ExpandableBehavior {
                        public static class: java.lang.Class<com.google.android.material.transformation.ExpandableTransformationBehavior>;
                        public constructor();
                        public onCreateExpandedStateChangeAnimation(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: boolean, param3: boolean): globalAndroid.animation.AnimatorSet;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public onExpandedStateChange(dependency: globalAndroid.view.View, child: globalAndroid.view.View, expanded: boolean, animated: boolean): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transformation {
                    export abstract class FabTransformationBehavior extends com.google.android.material.transformation.ExpandableTransformationBehavior {
                        public static class: java.lang.Class<com.google.android.material.transformation.FabTransformationBehavior>;
                        public constructor();
                        public layoutDependsOn(this_: androidx.coordinatorlayout.widget.CoordinatorLayout, parent: globalAndroid.view.View, child: globalAndroid.view.View): boolean;
                        public onCreateMotionSpec(param0: globalAndroid.content.Context, param1: boolean): com.google.android.material.transformation.FabTransformationBehavior.FabTransformationSpec;
                        public onCreateExpandedStateChangeAnimation(count: globalAndroid.view.View, this_: globalAndroid.view.View, dependency: boolean, child: boolean): globalAndroid.animation.AnimatorSet;
                        public onAttachedToLayoutParams(lp: androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams): void;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                    }
                    export module FabTransformationBehavior {
                        export class FabTransformationSpec {
                            public static class: java.lang.Class<com.google.android.material.transformation.FabTransformationBehavior.FabTransformationSpec>;
                            public timings: com.google.android.material.animation.MotionSpec;
                            public positioning: com.google.android.material.animation.Positioning;
                            public constructor();
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transformation {
                    export class FabTransformationScrimBehavior extends com.google.android.material.transformation.ExpandableTransformationBehavior {
                        public static class: java.lang.Class<com.google.android.material.transformation.FabTransformationScrimBehavior>;
                        public static EXPAND_DELAY: number = 75;
                        public static EXPAND_DURATION: number = 150;
                        public static COLLAPSE_DELAY: number = 0;
                        public static COLLAPSE_DURATION: number = 150;
                        public constructor();
                        public onTouchEvent(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: globalAndroid.view.View, ev: globalAndroid.view.MotionEvent): boolean;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public layoutDependsOn(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: globalAndroid.view.View, dependency: globalAndroid.view.View): boolean;
                        public onCreateExpandedStateChangeAnimation(dependency: globalAndroid.view.View, child: globalAndroid.view.View, expanded: boolean, isAnimating: boolean): globalAndroid.animation.AnimatorSet;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transformation {
                    export class FabTransformationSheetBehavior extends com.google.android.material.transformation.FabTransformationBehavior {
                        public static class: java.lang.Class<com.google.android.material.transformation.FabTransformationSheetBehavior>;
                        public constructor();
                        public onCreateMotionSpec(this_: globalAndroid.content.Context, context: boolean): com.google.android.material.transformation.FabTransformationBehavior.FabTransformationSpec;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public onExpandedStateChange(dependency: globalAndroid.view.View, child: globalAndroid.view.View, expanded: boolean, animated: boolean): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transformation {
                    export class TransformationChildCard extends com.google.android.material.circularreveal.cardview.CircularRevealCardView {
                        public static class: java.lang.Class<com.google.android.material.transformation.TransformationChildCard>;
                        public destroyCircularRevealCache(): void;
                        public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
                        public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                        public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
                        public draw(param0: globalAndroid.graphics.Canvas): void;
                        public setCircularRevealScrimColor(param0: number): void;
                        public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                        public getCircularRevealScrimColor(): number;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
                        public constructor(context: globalAndroid.content.Context);
                        public buildCircularRevealCache(): void;
                        public isOpaque(): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transformation {
                    export class TransformationChildLayout extends com.google.android.material.circularreveal.CircularRevealFrameLayout {
                        public static class: java.lang.Class<com.google.android.material.transformation.TransformationChildLayout>;
                        public destroyCircularRevealCache(): void;
                        public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                        public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
                        public draw(param0: globalAndroid.graphics.Canvas): void;
                        public setCircularRevealScrimColor(param0: number): void;
                        public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
                        public getCircularRevealScrimColor(): number;
                        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
                        public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
                        public constructor(context: globalAndroid.content.Context);
                        public buildCircularRevealCache(): void;
                        public isOpaque(): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export class FadeModeEvaluator {
                        public static class: java.lang.Class<com.google.android.material.transition.FadeModeEvaluator>;
                        /**
                         * Constructs a new instance of the com.google.android.material.transition.FadeModeEvaluator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            evaluate(param0: number, param1: number, param2: number, param3: number): com.google.android.material.transition.FadeModeResult;
                        });
                        public constructor();
                        public evaluate(param0: number, param1: number, param2: number, param3: number): com.google.android.material.transition.FadeModeResult;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export class FadeModeEvaluators {
                        public static class: java.lang.Class<com.google.android.material.transition.FadeModeEvaluators>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export class FadeModeResult {
                        public static class: java.lang.Class<com.google.android.material.transition.FadeModeResult>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export class FadeProvider extends com.google.android.material.transition.VisibilityAnimatorProvider {
                        public static class: java.lang.Class<com.google.android.material.transition.FadeProvider>;
                        public createDisappear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View): globalAndroid.animation.Animator;
                        public constructor();
                        public createDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
                        public setIncomingEndThreshold(incomingEndThreshold: number): void;
                        public createAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
                        public createAppear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View): globalAndroid.animation.Animator;
                        public getIncomingEndThreshold(): number;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export class FadeThroughProvider extends com.google.android.material.transition.VisibilityAnimatorProvider {
                        public static class: java.lang.Class<com.google.android.material.transition.FadeThroughProvider>;
                        public createDisappear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View): globalAndroid.animation.Animator;
                        public constructor();
                        public setProgressThreshold(progressThreshold: number): void;
                        public createDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
                        public createAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
                        public createAppear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View): globalAndroid.animation.Animator;
                        public getProgressThreshold(): number;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export class FitModeEvaluator {
                        public static class: java.lang.Class<com.google.android.material.transition.FitModeEvaluator>;
                        /**
                         * Constructs a new instance of the com.google.android.material.transition.FitModeEvaluator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            evaluate(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): com.google.android.material.transition.FitModeResult;
                            shouldMaskStartBounds(param0: com.google.android.material.transition.FitModeResult): boolean;
                            applyMask(param0: globalAndroid.graphics.RectF, param1: number, param2: com.google.android.material.transition.FitModeResult): void;
                        });
                        public constructor();
                        public applyMask(param0: globalAndroid.graphics.RectF, param1: number, param2: com.google.android.material.transition.FitModeResult): void;
                        public shouldMaskStartBounds(param0: com.google.android.material.transition.FitModeResult): boolean;
                        public evaluate(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): com.google.android.material.transition.FitModeResult;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export class FitModeEvaluators {
                        public static class: java.lang.Class<com.google.android.material.transition.FitModeEvaluators>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export class FitModeResult {
                        public static class: java.lang.Class<com.google.android.material.transition.FitModeResult>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export class Hold {
                        public static class: java.lang.Class<com.google.android.material.transition.Hold>;
                        public constructor();
                        public onDisappear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View, startValues: androidx.transition.TransitionValues, endValues: androidx.transition.TransitionValues): globalAndroid.animation.Animator;
                        public onAppear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View, startValues: androidx.transition.TransitionValues, endValues: androidx.transition.TransitionValues): globalAndroid.animation.Animator;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export class MaskEvaluator {
                        public static class: java.lang.Class<com.google.android.material.transition.MaskEvaluator>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export class MaterialArcMotion {
                        public static class: java.lang.Class<com.google.android.material.transition.MaterialArcMotion>;
                        public getPath(startX: number, startY: number, endX: number, endY: number): globalAndroid.graphics.Path;
                        public constructor();
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export class MaterialContainerTransform {
                        public static class: java.lang.Class<com.google.android.material.transition.MaterialContainerTransform>;
                        public static TRANSITION_DIRECTION_AUTO: number = 0;
                        public static TRANSITION_DIRECTION_ENTER: number = 1;
                        public static TRANSITION_DIRECTION_RETURN: number = 2;
                        public static FADE_MODE_IN: number = 0;
                        public static FADE_MODE_OUT: number = 1;
                        public static FADE_MODE_CROSS: number = 2;
                        public static FADE_MODE_THROUGH: number = 3;
                        public static FIT_MODE_AUTO: number = 0;
                        public static FIT_MODE_WIDTH: number = 1;
                        public static FIT_MODE_HEIGHT: number = 2;
                        public getFadeMode(): number;
                        public constructor(context: globalAndroid.content.Context, entering: boolean);
                        public setStartView(startView: globalAndroid.view.View): void;
                        public setDrawDebugEnabled(drawDebugEnabled: boolean): void;
                        public getDrawingViewId(): number;
                        public getStartContainerColor(): number;
                        public getEndElevation(): number;
                        public getShapeMaskProgressThresholds(): com.google.android.material.transition.MaterialContainerTransform.ProgressThresholds;
                        public setFadeMode(fadeMode: number): void;
                        public getScaleMaskProgressThresholds(): com.google.android.material.transition.MaterialContainerTransform.ProgressThresholds;
                        public getTransitionDirection(): number;
                        public getScrimColor(): number;
                        public isElevationShadowEnabled(): boolean;
                        public getEndShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
                        public constructor();
                        public setStartContainerColor(containerColor: number): void;
                        public getScaleProgressThresholds(): com.google.android.material.transition.MaterialContainerTransform.ProgressThresholds;
                        public setStartElevation(startElevation: number): void;
                        public setStartViewId(startViewId: number): void;
                        public setHoldAtEndEnabled(holdAtEndEnabled: boolean): void;
                        public captureStartValues(transitionValues: androidx.transition.TransitionValues): void;
                        public createAnimator(boundingView: globalAndroid.view.ViewGroup, this_: androidx.transition.TransitionValues, sceneRoot: androidx.transition.TransitionValues): globalAndroid.animation.Animator;
                        public getEndContainerColor(): number;
                        public isDrawDebugEnabled(): boolean;
                        public setScaleMaskProgressThresholds(scaleMaskProgressThresholds: com.google.android.material.transition.MaterialContainerTransform.ProgressThresholds): void;
                        public setFitMode(fitMode: number): void;
                        public setShapeMaskProgressThresholds(shapeMaskProgressThresholds: com.google.android.material.transition.MaterialContainerTransform.ProgressThresholds): void;
                        public getTransitionProperties(): androidNative.Array<string>;
                        public setEndViewId(endViewId: number): void;
                        public getStartShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
                        public setStartShapeAppearanceModel(startShapeAppearanceModel: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public getEndView(): globalAndroid.view.View;
                        public setAllContainerColors(containerColor: number): void;
                        public setFadeProgressThresholds(fadeProgressThresholds: com.google.android.material.transition.MaterialContainerTransform.ProgressThresholds): void;
                        public getStartViewId(): number;
                        public setDrawingViewId(drawingViewId: number): void;
                        public setEndShapeAppearanceModel(endShapeAppearanceModel: com.google.android.material.shape.ShapeAppearanceModel): void;
                        public setEndContainerColor(containerColor: number): void;
                        public setScaleProgressThresholds(scaleProgressThresholds: com.google.android.material.transition.MaterialContainerTransform.ProgressThresholds): void;
                        public getFadeProgressThresholds(): com.google.android.material.transition.MaterialContainerTransform.ProgressThresholds;
                        public setEndView(endView: globalAndroid.view.View): void;
                        public setScrimColor(scrimColor: number): void;
                        public setEndElevation(endElevation: number): void;
                        public getEndViewId(): number;
                        public getContainerColor(): number;
                        public setElevationShadowEnabled(elevationShadowEnabled: boolean): void;
                        public setTransitionDirection(transitionDirection: number): void;
                        public setPathMotion(pathMotion: androidx.transition.PathMotion): void;
                        public setContainerColor(containerColor: number): void;
                        public captureEndValues(transitionValues: androidx.transition.TransitionValues): void;
                        public getStartView(): globalAndroid.view.View;
                        public getStartElevation(): number;
                        public isHoldAtEndEnabled(): boolean;
                        public getFitMode(): number;
                    }
                    export module MaterialContainerTransform {
                        export class FadeMode {
                            public static class: java.lang.Class<com.google.android.material.transition.MaterialContainerTransform.FadeMode>;
                            /**
                             * Constructs a new instance of the com.google.android.material.transition.MaterialContainerTransform$FadeMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class FitMode {
                            public static class: java.lang.Class<com.google.android.material.transition.MaterialContainerTransform.FitMode>;
                            /**
                             * Constructs a new instance of the com.google.android.material.transition.MaterialContainerTransform$FitMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class ProgressThresholds {
                            public static class: java.lang.Class<com.google.android.material.transition.MaterialContainerTransform.ProgressThresholds>;
                            public getStart(): number;
                            public getEnd(): number;
                            public constructor(start: number, end: number);
                        }
                        export class ProgressThresholdsGroup {
                            public static class: java.lang.Class<com.google.android.material.transition.MaterialContainerTransform.ProgressThresholdsGroup>;
                        }
                        export class TransitionDirection {
                            public static class: java.lang.Class<com.google.android.material.transition.MaterialContainerTransform.TransitionDirection>;
                            /**
                             * Constructs a new instance of the com.google.android.material.transition.MaterialContainerTransform$TransitionDirection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                        export class TransitionDrawable {
                            public static class: java.lang.Class<com.google.android.material.transition.MaterialContainerTransform.TransitionDrawable>;
                            public draw(canvas: globalAndroid.graphics.Canvas): void;
                            public getOpacity(): number;
                            public setColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): void;
                            public setAlpha(alpha: number): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export class MaterialElevationScale extends com.google.android.material.transition.MaterialVisibility<com.google.android.material.transition.ScaleProvider> {
                        public static class: java.lang.Class<com.google.android.material.transition.MaterialElevationScale>;
                        public constructor(growing: boolean);
                        public constructor(primaryAnimatorProvider: any, secondaryAnimatorProvider: com.google.android.material.transition.VisibilityAnimatorProvider);
                        public isGrowing(): boolean;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export class MaterialFade extends com.google.android.material.transition.MaterialVisibility<com.google.android.material.transition.FadeProvider> {
                        public static class: java.lang.Class<com.google.android.material.transition.MaterialFade>;
                        public constructor();
                        public constructor(primaryAnimatorProvider: any, secondaryAnimatorProvider: com.google.android.material.transition.VisibilityAnimatorProvider);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export class MaterialFadeThrough extends com.google.android.material.transition.MaterialVisibility<com.google.android.material.transition.FadeThroughProvider> {
                        public static class: java.lang.Class<com.google.android.material.transition.MaterialFadeThrough>;
                        public constructor();
                        public constructor(primaryAnimatorProvider: any, secondaryAnimatorProvider: com.google.android.material.transition.VisibilityAnimatorProvider);
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export class MaterialSharedAxis extends com.google.android.material.transition.MaterialVisibility<com.google.android.material.transition.VisibilityAnimatorProvider> {
                        public static class: java.lang.Class<com.google.android.material.transition.MaterialSharedAxis>;
                        public static X: number = 0;
                        public static Y: number = 1;
                        public static Z: number = 2;
                        public constructor(axis: number, forward: boolean);
                        public getAxis(): number;
                        public isForward(): boolean;
                        public constructor(primaryAnimatorProvider: any, secondaryAnimatorProvider: com.google.android.material.transition.VisibilityAnimatorProvider);
                    }
                    export module MaterialSharedAxis {
                        export class Axis {
                            public static class: java.lang.Class<com.google.android.material.transition.MaterialSharedAxis.Axis>;
                            /**
                             * Constructs a new instance of the com.google.android.material.transition.MaterialSharedAxis$Axis interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export abstract class MaterialVisibility<P> extends androidx.transition.Visibility {
                        public static class: java.lang.Class<com.google.android.material.transition.MaterialVisibility<any>>;
                        public onDisappear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View, startValues: androidx.transition.TransitionValues, endValues: androidx.transition.TransitionValues): globalAndroid.animation.Animator;
                        public setSecondaryAnimatorProvider(secondaryAnimatorProvider: com.google.android.material.transition.VisibilityAnimatorProvider): void;
                        public addAdditionalAnimatorProvider(additionalAnimatorProvider: com.google.android.material.transition.VisibilityAnimatorProvider): void;
                        public onAppear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View, startValues: androidx.transition.TransitionValues, endValues: androidx.transition.TransitionValues): globalAndroid.animation.Animator;
                        public removeAdditionalAnimatorProvider(additionalAnimatorProvider: com.google.android.material.transition.VisibilityAnimatorProvider): boolean;
                        public clearAdditionalAnimatorProvider(): void;
                        public constructor(primaryAnimatorProvider: any, secondaryAnimatorProvider: com.google.android.material.transition.VisibilityAnimatorProvider);
                        public getPrimaryAnimatorProvider(): any;
                        public getSecondaryAnimatorProvider(): com.google.android.material.transition.VisibilityAnimatorProvider;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export class ScaleProvider extends com.google.android.material.transition.VisibilityAnimatorProvider {
                        public static class: java.lang.Class<com.google.android.material.transition.ScaleProvider>;
                        public getIncomingStartScale(): number;
                        public createDisappear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View): globalAndroid.animation.Animator;
                        public constructor();
                        public constructor(growing: boolean);
                        public setOutgoingEndScale(outgoingEndScale: number): void;
                        public getIncomingEndScale(): number;
                        public setIncomingEndScale(incomingEndScale: number): void;
                        public createDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
                        public createAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
                        public getOutgoingEndScale(): number;
                        public createAppear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View): globalAndroid.animation.Animator;
                        public setGrowing(growing: boolean): void;
                        public setScaleOnDisappear(scaleOnDisappear: boolean): void;
                        public setOutgoingStartScale(outgoingStartScale: number): void;
                        public getOutgoingStartScale(): number;
                        public isScaleOnDisappear(): boolean;
                        public isGrowing(): boolean;
                        public setIncomingStartScale(incomingStartScale: number): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export class SlideDistanceProvider extends com.google.android.material.transition.VisibilityAnimatorProvider {
                        public static class: java.lang.Class<com.google.android.material.transition.SlideDistanceProvider>;
                        public createDisappear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View): globalAndroid.animation.Animator;
                        public getSlideEdge(): number;
                        public constructor(slideEdge: number);
                        public setSlideDistance(slideDistance: number): void;
                        public createDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
                        public createAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
                        public createAppear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View): globalAndroid.animation.Animator;
                        public getSlideDistance(): number;
                        public setSlideEdge(slideEdge: number): void;
                    }
                    export module SlideDistanceProvider {
                        export class GravityFlag {
                            public static class: java.lang.Class<com.google.android.material.transition.SlideDistanceProvider.GravityFlag>;
                            /**
                             * Constructs a new instance of the com.google.android.material.transition.SlideDistanceProvider$GravityFlag interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                            });
                            public constructor();
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export abstract class TransitionListenerAdapter {
                        public static class: java.lang.Class<com.google.android.material.transition.TransitionListenerAdapter>;
                        public onTransitionCancel(transition: androidx.transition.Transition): void;
                        public onTransitionPause(transition: androidx.transition.Transition): void;
                        public onTransitionEnd(transition: androidx.transition.Transition): void;
                        public onTransitionStart(transition: androidx.transition.Transition): void;
                        public onTransitionResume(transition: androidx.transition.Transition): void;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export class TransitionUtils {
                        public static class: java.lang.Class<com.google.android.material.transition.TransitionUtils>;
                    }
                    export module TransitionUtils {
                        export class CornerSizeBinaryOperator {
                            public static class: java.lang.Class<com.google.android.material.transition.TransitionUtils.CornerSizeBinaryOperator>;
                            /**
                             * Constructs a new instance of the com.google.android.material.transition.TransitionUtils$CornerSizeBinaryOperator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                apply(param0: com.google.android.material.shape.CornerSize, param1: com.google.android.material.shape.CornerSize): com.google.android.material.shape.CornerSize;
                            });
                            public constructor();
                            public apply(param0: com.google.android.material.shape.CornerSize, param1: com.google.android.material.shape.CornerSize): com.google.android.material.shape.CornerSize;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export class VisibilityAnimatorProvider {
                        public static class: java.lang.Class<com.google.android.material.transition.VisibilityAnimatorProvider>;
                        /**
                         * Constructs a new instance of the com.google.android.material.transition.VisibilityAnimatorProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            createAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
                            createDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
                        });
                        public constructor();
                        public createDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
                        public createAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export module platform {
                        export class FadeModeEvaluator {
                            public static class: java.lang.Class<com.google.android.material.transition.platform.FadeModeEvaluator>;
                            /**
                             * Constructs a new instance of the com.google.android.material.transition.platform.FadeModeEvaluator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                evaluate(param0: number, param1: number, param2: number, param3: number): com.google.android.material.transition.platform.FadeModeResult;
                            });
                            public constructor();
                            public evaluate(param0: number, param1: number, param2: number, param3: number): com.google.android.material.transition.platform.FadeModeResult;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export module platform {
                        export class FadeModeEvaluators {
                            public static class: java.lang.Class<com.google.android.material.transition.platform.FadeModeEvaluators>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export module platform {
                        export class FadeModeResult {
                            public static class: java.lang.Class<com.google.android.material.transition.platform.FadeModeResult>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export module platform {
                        export class FadeProvider extends com.google.android.material.transition.platform.VisibilityAnimatorProvider {
                            public static class: java.lang.Class<com.google.android.material.transition.platform.FadeProvider>;
                            public constructor();
                            public setIncomingEndThreshold(incomingEndThreshold: number): void;
                            public createDisappear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View): globalAndroid.animation.Animator;
                            public getIncomingEndThreshold(): number;
                            public createAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
                            public createAppear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View): globalAndroid.animation.Animator;
                            public createDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export module platform {
                        export class FadeThroughProvider extends com.google.android.material.transition.platform.VisibilityAnimatorProvider {
                            public static class: java.lang.Class<com.google.android.material.transition.platform.FadeThroughProvider>;
                            public constructor();
                            public getProgressThreshold(): number;
                            public createDisappear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View): globalAndroid.animation.Animator;
                            public createAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
                            public setProgressThreshold(progressThreshold: number): void;
                            public createAppear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View): globalAndroid.animation.Animator;
                            public createDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export module platform {
                        export class FitModeEvaluator {
                            public static class: java.lang.Class<com.google.android.material.transition.platform.FitModeEvaluator>;
                            /**
                             * Constructs a new instance of the com.google.android.material.transition.platform.FitModeEvaluator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                evaluate(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): com.google.android.material.transition.platform.FitModeResult;
                                shouldMaskStartBounds(param0: com.google.android.material.transition.platform.FitModeResult): boolean;
                                applyMask(param0: globalAndroid.graphics.RectF, param1: number, param2: com.google.android.material.transition.platform.FitModeResult): void;
                            });
                            public constructor();
                            public evaluate(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): com.google.android.material.transition.platform.FitModeResult;
                            public applyMask(param0: globalAndroid.graphics.RectF, param1: number, param2: com.google.android.material.transition.platform.FitModeResult): void;
                            public shouldMaskStartBounds(param0: com.google.android.material.transition.platform.FitModeResult): boolean;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export module platform {
                        export class FitModeEvaluators {
                            public static class: java.lang.Class<com.google.android.material.transition.platform.FitModeEvaluators>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export module platform {
                        export class FitModeResult {
                            public static class: java.lang.Class<com.google.android.material.transition.platform.FitModeResult>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export module platform {
                        export class Hold {
                            public static class: java.lang.Class<com.google.android.material.transition.platform.Hold>;
                            public constructor();
                            public onAppear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View, startValues: globalAndroid.transition.TransitionValues, endValues: globalAndroid.transition.TransitionValues): globalAndroid.animation.Animator;
                            public onDisappear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View, startValues: globalAndroid.transition.TransitionValues, endValues: globalAndroid.transition.TransitionValues): globalAndroid.animation.Animator;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export module platform {
                        export class MaskEvaluator {
                            public static class: java.lang.Class<com.google.android.material.transition.platform.MaskEvaluator>;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export module platform {
                        export class MaterialArcMotion {
                            public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialArcMotion>;
                            public constructor();
                            public getPath(startX: number, startY: number, endX: number, endY: number): globalAndroid.graphics.Path;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export module platform {
                        export class MaterialContainerTransform {
                            public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialContainerTransform>;
                            public static TRANSITION_DIRECTION_AUTO: number = 0;
                            public static TRANSITION_DIRECTION_ENTER: number = 1;
                            public static TRANSITION_DIRECTION_RETURN: number = 2;
                            public static FADE_MODE_IN: number = 0;
                            public static FADE_MODE_OUT: number = 1;
                            public static FADE_MODE_CROSS: number = 2;
                            public static FADE_MODE_THROUGH: number = 3;
                            public static FIT_MODE_AUTO: number = 0;
                            public static FIT_MODE_WIDTH: number = 1;
                            public static FIT_MODE_HEIGHT: number = 2;
                            public setDrawingViewId(drawingViewId: number): void;
                            public getScaleProgressThresholds(): com.google.android.material.transition.platform.MaterialContainerTransform.ProgressThresholds;
                            public setScrimColor(scrimColor: number): void;
                            public setDrawDebugEnabled(drawDebugEnabled: boolean): void;
                            public setStartElevation(startElevation: number): void;
                            public setEndViewId(endViewId: number): void;
                            public getEndContainerColor(): number;
                            public captureEndValues(transitionValues: globalAndroid.transition.TransitionValues): void;
                            public setFitMode(fitMode: number): void;
                            public setPathMotion(pathMotion: globalAndroid.transition.PathMotion): void;
                            public getContainerColor(): number;
                            public setFadeMode(fadeMode: number): void;
                            public getEndViewId(): number;
                            public getScaleMaskProgressThresholds(): com.google.android.material.transition.platform.MaterialContainerTransform.ProgressThresholds;
                            public getEndView(): globalAndroid.view.View;
                            public getTransitionDirection(): number;
                            public setStartShapeAppearanceModel(startShapeAppearanceModel: com.google.android.material.shape.ShapeAppearanceModel): void;
                            public getStartContainerColor(): number;
                            public setEndShapeAppearanceModel(endShapeAppearanceModel: com.google.android.material.shape.ShapeAppearanceModel): void;
                            public captureStartValues(transitionValues: globalAndroid.transition.TransitionValues): void;
                            public getDrawingViewId(): number;
                            public createAnimator(boundingView: globalAndroid.view.ViewGroup, this_: globalAndroid.transition.TransitionValues, sceneRoot: globalAndroid.transition.TransitionValues): globalAndroid.animation.Animator;
                            public getStartViewId(): number;
                            public setContainerColor(containerColor: number): void;
                            public setEndView(endView: globalAndroid.view.View): void;
                            public setFadeProgressThresholds(fadeProgressThresholds: com.google.android.material.transition.platform.MaterialContainerTransform.ProgressThresholds): void;
                            public setElevationShadowEnabled(elevationShadowEnabled: boolean): void;
                            public setTransitionDirection(transitionDirection: number): void;
                            public constructor(context: globalAndroid.content.Context, entering: boolean);
                            public isElevationShadowEnabled(): boolean;
                            public getStartElevation(): number;
                            public setStartView(startView: globalAndroid.view.View): void;
                            public isHoldAtEndEnabled(): boolean;
                            public setEndContainerColor(containerColor: number): void;
                            public setHoldAtEndEnabled(holdAtEndEnabled: boolean): void;
                            public setEndElevation(endElevation: number): void;
                            public getFitMode(): number;
                            public getScrimColor(): number;
                            public getShapeMaskProgressThresholds(): com.google.android.material.transition.platform.MaterialContainerTransform.ProgressThresholds;
                            public setAllContainerColors(containerColor: number): void;
                            public setShapeMaskProgressThresholds(shapeMaskProgressThresholds: com.google.android.material.transition.platform.MaterialContainerTransform.ProgressThresholds): void;
                            public constructor();
                            public getFadeMode(): number;
                            public getEndShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
                            public setScaleMaskProgressThresholds(scaleMaskProgressThresholds: com.google.android.material.transition.platform.MaterialContainerTransform.ProgressThresholds): void;
                            public getStartShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
                            public setStartContainerColor(containerColor: number): void;
                            public getFadeProgressThresholds(): com.google.android.material.transition.platform.MaterialContainerTransform.ProgressThresholds;
                            public isDrawDebugEnabled(): boolean;
                            public getStartView(): globalAndroid.view.View;
                            public setScaleProgressThresholds(scaleProgressThresholds: com.google.android.material.transition.platform.MaterialContainerTransform.ProgressThresholds): void;
                            public getEndElevation(): number;
                            public getTransitionProperties(): androidNative.Array<string>;
                            public setStartViewId(startViewId: number): void;
                        }
                        export module MaterialContainerTransform {
                            export class FadeMode {
                                public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialContainerTransform.FadeMode>;
                                /**
                                 * Constructs a new instance of the com.google.android.material.transition.platform.MaterialContainerTransform$FadeMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                                 */
                                public constructor(implementation: {
                                });
                                public constructor();
                            }
                            export class FitMode {
                                public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialContainerTransform.FitMode>;
                                /**
                                 * Constructs a new instance of the com.google.android.material.transition.platform.MaterialContainerTransform$FitMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                                 */
                                public constructor(implementation: {
                                });
                                public constructor();
                            }
                            export class ProgressThresholds {
                                public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialContainerTransform.ProgressThresholds>;
                                public getStart(): number;
                                public getEnd(): number;
                                public constructor(start: number, end: number);
                            }
                            export class ProgressThresholdsGroup {
                                public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialContainerTransform.ProgressThresholdsGroup>;
                            }
                            export class TransitionDirection {
                                public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialContainerTransform.TransitionDirection>;
                                /**
                                 * Constructs a new instance of the com.google.android.material.transition.platform.MaterialContainerTransform$TransitionDirection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                                 */
                                public constructor(implementation: {
                                });
                                public constructor();
                            }
                            export class TransitionDrawable {
                                public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialContainerTransform.TransitionDrawable>;
                                public draw(canvas: globalAndroid.graphics.Canvas): void;
                                public setAlpha(alpha: number): void;
                                public getOpacity(): number;
                                public setColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): void;
                            }
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export module platform {
                        export class MaterialContainerTransformSharedElementCallback {
                            public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialContainerTransformSharedElementCallback>;
                            public constructor();
                            public setTransparentWindowBackgroundEnabled(transparentWindowBackgroundEnabled: boolean): void;
                            public onCaptureSharedElementSnapshot(sharedElement: globalAndroid.view.View, viewToGlobalMatrix: globalAndroid.graphics.Matrix, screenBounds: globalAndroid.graphics.RectF): globalAndroid.os.Parcelable;
                            public isSharedElementReenterTransitionEnabled(): boolean;
                            public onCreateSnapshotView(sharedElement: globalAndroid.content.Context, this_: globalAndroid.os.Parcelable): globalAndroid.view.View;
                            public onMapSharedElements(activity: java.util.List<string>, sharedElement: java.util.Map<string, globalAndroid.view.View>): void;
                            public setShapeProvider(shapeProvider: com.google.android.material.transition.platform.MaterialContainerTransformSharedElementCallback.ShapeProvider): void;
                            public setSharedElementReenterTransitionEnabled(sharedElementReenterTransitionEnabled: boolean): void;
                            public getShapeProvider(): com.google.android.material.transition.platform.MaterialContainerTransformSharedElementCallback.ShapeProvider;
                            public isTransparentWindowBackgroundEnabled(): boolean;
                            public onSharedElementEnd(sharedElementNames: java.util.List<string>, sharedElements: java.util.List<globalAndroid.view.View>, sharedElementSnapshots: java.util.List<globalAndroid.view.View>): void;
                            public onSharedElementStart(widthSpec: java.util.List<string>, heightSpec: java.util.List<globalAndroid.view.View>, this_: java.util.List<globalAndroid.view.View>): void;
                        }
                        export module MaterialContainerTransformSharedElementCallback {
                            export class ShapeProvider {
                                public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialContainerTransformSharedElementCallback.ShapeProvider>;
                                /**
                                 * Constructs a new instance of the com.google.android.material.transition.platform.MaterialContainerTransformSharedElementCallback$ShapeProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                                 */
                                public constructor(implementation: {
                                    provideShape(param0: globalAndroid.view.View): com.google.android.material.shape.ShapeAppearanceModel;
                                });
                                public constructor();
                                public provideShape(param0: globalAndroid.view.View): com.google.android.material.shape.ShapeAppearanceModel;
                            }
                            export class ShapeableViewShapeProvider extends com.google.android.material.transition.platform.MaterialContainerTransformSharedElementCallback.ShapeProvider {
                                public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialContainerTransformSharedElementCallback.ShapeableViewShapeProvider>;
                                public provideShape(param0: globalAndroid.view.View): com.google.android.material.shape.ShapeAppearanceModel;
                                public constructor();
                                public provideShape(sharedElement: globalAndroid.view.View): com.google.android.material.shape.ShapeAppearanceModel;
                            }
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export module platform {
                        export class MaterialElevationScale extends com.google.android.material.transition.platform.MaterialVisibility<com.google.android.material.transition.platform.ScaleProvider> {
                            public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialElevationScale>;
                            public isGrowing(): boolean;
                            public constructor(primaryAnimatorProvider: any, secondaryAnimatorProvider: com.google.android.material.transition.platform.VisibilityAnimatorProvider);
                            public constructor(growing: boolean);
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export module platform {
                        export class MaterialFade extends com.google.android.material.transition.platform.MaterialVisibility<com.google.android.material.transition.platform.FadeProvider> {
                            public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialFade>;
                            public constructor();
                            public constructor(primaryAnimatorProvider: any, secondaryAnimatorProvider: com.google.android.material.transition.platform.VisibilityAnimatorProvider);
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export module platform {
                        export class MaterialFadeThrough extends com.google.android.material.transition.platform.MaterialVisibility<com.google.android.material.transition.platform.FadeThroughProvider> {
                            public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialFadeThrough>;
                            public constructor();
                            public constructor(primaryAnimatorProvider: any, secondaryAnimatorProvider: com.google.android.material.transition.platform.VisibilityAnimatorProvider);
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export module platform {
                        export class MaterialSharedAxis extends com.google.android.material.transition.platform.MaterialVisibility<com.google.android.material.transition.platform.VisibilityAnimatorProvider> {
                            public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialSharedAxis>;
                            public static X: number = 0;
                            public static Y: number = 1;
                            public static Z: number = 2;
                            public constructor(axis: number, forward: boolean);
                            public isForward(): boolean;
                            public getAxis(): number;
                            public constructor(primaryAnimatorProvider: any, secondaryAnimatorProvider: com.google.android.material.transition.platform.VisibilityAnimatorProvider);
                        }
                        export module MaterialSharedAxis {
                            export class Axis {
                                public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialSharedAxis.Axis>;
                                /**
                                 * Constructs a new instance of the com.google.android.material.transition.platform.MaterialSharedAxis$Axis interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                                 */
                                public constructor(implementation: {
                                });
                                public constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export module platform {
                        export abstract class MaterialVisibility<P> extends globalAndroid.transition.Visibility {
                            public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialVisibility<any>>;
                            public removeAdditionalAnimatorProvider(additionalAnimatorProvider: com.google.android.material.transition.platform.VisibilityAnimatorProvider): boolean;
                            public getPrimaryAnimatorProvider(): any;
                            public onAppear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View, startValues: globalAndroid.transition.TransitionValues, endValues: globalAndroid.transition.TransitionValues): globalAndroid.animation.Animator;
                            public clearAdditionalAnimatorProvider(): void;
                            public addAdditionalAnimatorProvider(additionalAnimatorProvider: com.google.android.material.transition.platform.VisibilityAnimatorProvider): void;
                            public getSecondaryAnimatorProvider(): com.google.android.material.transition.platform.VisibilityAnimatorProvider;
                            public constructor(primaryAnimatorProvider: any, secondaryAnimatorProvider: com.google.android.material.transition.platform.VisibilityAnimatorProvider);
                            public setSecondaryAnimatorProvider(secondaryAnimatorProvider: com.google.android.material.transition.platform.VisibilityAnimatorProvider): void;
                            public onDisappear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View, startValues: globalAndroid.transition.TransitionValues, endValues: globalAndroid.transition.TransitionValues): globalAndroid.animation.Animator;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export module platform {
                        export class ScaleProvider extends com.google.android.material.transition.platform.VisibilityAnimatorProvider {
                            public static class: java.lang.Class<com.google.android.material.transition.platform.ScaleProvider>;
                            public constructor();
                            public setOutgoingStartScale(outgoingStartScale: number): void;
                            public setGrowing(growing: boolean): void;
                            public createDisappear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View): globalAndroid.animation.Animator;
                            public setIncomingStartScale(incomingStartScale: number): void;
                            public createAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
                            public isGrowing(): boolean;
                            public getIncomingStartScale(): number;
                            public getIncomingEndScale(): number;
                            public getOutgoingEndScale(): number;
                            public createDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
                            public getOutgoingStartScale(): number;
                            public setIncomingEndScale(incomingEndScale: number): void;
                            public setOutgoingEndScale(outgoingEndScale: number): void;
                            public isScaleOnDisappear(): boolean;
                            public setScaleOnDisappear(scaleOnDisappear: boolean): void;
                            public createAppear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View): globalAndroid.animation.Animator;
                            public constructor(growing: boolean);
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export module platform {
                        export class SlideDistanceProvider extends com.google.android.material.transition.platform.VisibilityAnimatorProvider {
                            public static class: java.lang.Class<com.google.android.material.transition.platform.SlideDistanceProvider>;
                            public getSlideEdge(): number;
                            public setSlideDistance(slideDistance: number): void;
                            public createDisappear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View): globalAndroid.animation.Animator;
                            public constructor(slideEdge: number);
                            public createAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
                            public getSlideDistance(): number;
                            public setSlideEdge(slideEdge: number): void;
                            public createAppear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View): globalAndroid.animation.Animator;
                            public createDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
                        }
                        export module SlideDistanceProvider {
                            export class GravityFlag {
                                public static class: java.lang.Class<com.google.android.material.transition.platform.SlideDistanceProvider.GravityFlag>;
                                /**
                                 * Constructs a new instance of the com.google.android.material.transition.platform.SlideDistanceProvider$GravityFlag interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                                 */
                                public constructor(implementation: {
                                });
                                public constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export module platform {
                        export abstract class TransitionListenerAdapter {
                            public static class: java.lang.Class<com.google.android.material.transition.platform.TransitionListenerAdapter>;
                            public onTransitionPause(transition: globalAndroid.transition.Transition): void;
                            public onTransitionResume(transition: globalAndroid.transition.Transition): void;
                            public onTransitionEnd(transition: globalAndroid.transition.Transition): void;
                            public onTransitionCancel(transition: globalAndroid.transition.Transition): void;
                            public onTransitionStart(transition: globalAndroid.transition.Transition): void;
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export module platform {
                        export class TransitionUtils {
                            public static class: java.lang.Class<com.google.android.material.transition.platform.TransitionUtils>;
                        }
                        export module TransitionUtils {
                            export class CornerSizeBinaryOperator {
                                public static class: java.lang.Class<com.google.android.material.transition.platform.TransitionUtils.CornerSizeBinaryOperator>;
                                /**
                                 * Constructs a new instance of the com.google.android.material.transition.platform.TransitionUtils$CornerSizeBinaryOperator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                                 */
                                public constructor(implementation: {
                                    apply(param0: com.google.android.material.shape.CornerSize, param1: com.google.android.material.shape.CornerSize): com.google.android.material.shape.CornerSize;
                                });
                                public constructor();
                                public apply(param0: com.google.android.material.shape.CornerSize, param1: com.google.android.material.shape.CornerSize): com.google.android.material.shape.CornerSize;
                            }
                        }
                    }
                }
            }
        }
    }
}

declare module com {
    export module google {
        export module android {
            export module material {
                export module transition {
                    export module platform {
                        export class VisibilityAnimatorProvider {
                            public static class: java.lang.Class<com.google.android.material.transition.platform.VisibilityAnimatorProvider>;
                            /**
                             * Constructs a new instance of the com.google.android.material.transition.platform.VisibilityAnimatorProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                createAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
                                createDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
                            });
                            public constructor();
                            public createAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
                            public createDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
                        }
                    }
                }
            }
        }
    }
}

//Generics information:
//com.google.android.material.animation.TransformationCallback:1
//com.google.android.material.appbar.AppBarLayout.BaseBehavior:1
//com.google.android.material.appbar.AppBarLayout.BaseBehavior.BaseDragCallback:1
//com.google.android.material.appbar.AppBarLayout.BaseOnOffsetChangedListener:1
//com.google.android.material.appbar.HeaderBehavior:1
//com.google.android.material.appbar.ViewOffsetBehavior:1
//com.google.android.material.behavior.HideBottomViewOnScrollBehavior:1
//com.google.android.material.behavior.SwipeDismissBehavior:1
//com.google.android.material.bottomsheet.BottomSheetBehavior:1
//com.google.android.material.datepicker.DateSelector:1
//com.google.android.material.datepicker.MaterialCalendar:1
//com.google.android.material.datepicker.MaterialDatePicker:1
//com.google.android.material.datepicker.MaterialDatePicker.Builder:1
//com.google.android.material.datepicker.MaterialPickerOnPositiveButtonClickListener:1
//com.google.android.material.datepicker.MaterialTextInputPicker:1
//com.google.android.material.datepicker.OnSelectionChangedListener:1
//com.google.android.material.datepicker.PickerFragment:1
//com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.ExtendedFloatingActionButtonBehavior:1
//com.google.android.material.floatingactionbutton.FloatingActionButton.BaseBehavior:1
//com.google.android.material.floatingactionbutton.FloatingActionButton.TransformationCallbackWrapper:1
//com.google.android.material.internal.CheckableGroup:1
//com.google.android.material.internal.MaterialCheckable:1
//com.google.android.material.internal.MaterialCheckable.OnCheckedChangeListener:1
//com.google.android.material.progressindicator.BaseProgressIndicator:1
//com.google.android.material.progressindicator.DeterminateDrawable:1
//com.google.android.material.progressindicator.DrawingDelegate:1
//com.google.android.material.progressindicator.IndeterminateAnimatorDelegate:1
//com.google.android.material.progressindicator.IndeterminateDrawable:1
//com.google.android.material.sidesheet.Sheet:1
//com.google.android.material.sidesheet.SheetDialog:1
//com.google.android.material.sidesheet.SideSheetBehavior:1
//com.google.android.material.slider.BaseOnChangeListener:1
//com.google.android.material.slider.BaseOnSliderTouchListener:1
//com.google.android.material.slider.BaseSlider:3
//com.google.android.material.snackbar.BaseTransientBottomBar:1
//com.google.android.material.snackbar.BaseTransientBottomBar.BaseCallback:1
//com.google.android.material.tabs.TabLayout.BaseOnTabSelectedListener:1
//com.google.android.material.textfield.MaterialAutoCompleteTextView.MaterialArrayAdapter:1
//com.google.android.material.transition.MaterialVisibility:1
//com.google.android.material.transition.platform.MaterialVisibility:1

