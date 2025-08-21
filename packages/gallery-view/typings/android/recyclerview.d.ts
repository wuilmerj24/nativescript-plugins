declare module androidx {
  export module recyclerview {
    export module widget {
      export class AdapterHelper extends androidx.recyclerview.widget.OpReorderer.Callback {
        public static class: java.lang.Class<androidx.recyclerview.widget.AdapterHelper>;
        public obtainUpdateOp(cmd: number, positionStart: number, itemCount: number, payload: any): androidx.recyclerview.widget.AdapterHelper.UpdateOp;
        public applyPendingUpdatesToPosition(op: number): number;
        public recycleUpdateOp(op: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void;
        public recycleUpdateOp(param0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void;
        public obtainUpdateOp(param0: number, param1: number, param2: number, param3: any): androidx.recyclerview.widget.AdapterHelper.UpdateOp;
      }
      export module AdapterHelper {
        export class Callback {
          public static class: java.lang.Class<androidx.recyclerview.widget.AdapterHelper.Callback>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.AdapterHelper$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { findViewHolder(param0: number): androidx.recyclerview.widget.RecyclerView.ViewHolder; offsetPositionsForRemovingInvisible(param0: number, param1: number): void; offsetPositionsForRemovingLaidOutOrNewView(param0: number, param1: number): void; markViewHoldersUpdated(param0: number, param1: number, param2: any): void; onDispatchFirstPass(param0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void; onDispatchSecondPass(param0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void; offsetPositionsForAdd(param0: number, param1: number): void; offsetPositionsForMove(param0: number, param1: number): void });
          public constructor();
          public offsetPositionsForAdd(param0: number, param1: number): void;
          public offsetPositionsForRemovingLaidOutOrNewView(param0: number, param1: number): void;
          public offsetPositionsForRemovingInvisible(param0: number, param1: number): void;
          public offsetPositionsForMove(param0: number, param1: number): void;
          public markViewHoldersUpdated(param0: number, param1: number, param2: any): void;
          public findViewHolder(param0: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
          public onDispatchSecondPass(param0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void;
          public onDispatchFirstPass(param0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void;
        }
        export class UpdateOp {
          public static class: java.lang.Class<androidx.recyclerview.widget.AdapterHelper.UpdateOp>;
          public toString(): string;
          public equals(o: any): boolean;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class AdapterListUpdateCallback extends androidx.recyclerview.widget.ListUpdateCallback {
        public static class: java.lang.Class<androidx.recyclerview.widget.AdapterListUpdateCallback>;
        public onInserted(param0: number, param1: number): void;
        public constructor(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>);
        public onInserted(position: number, count: number): void;
        public onRemoved(position: number, count: number): void;
        public onChanged(position: number, count: number, payload: any): void;
        public onChanged(param0: number, param1: number, param2: any): void;
        public onMoved(param0: number, param1: number): void;
        public onRemoved(param0: number, param1: number): void;
        public onMoved(fromPosition: number, toPosition: number): void;
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class AsyncDifferConfig<T> extends java.lang.Object {
        public static class: java.lang.Class<androidx.recyclerview.widget.AsyncDifferConfig<any>>;
        public getDiffCallback(): androidx.recyclerview.widget.DiffUtil.ItemCallback<T>;
        public getBackgroundThreadExecutor(): java.util.concurrent.Executor;
        public getMainThreadExecutor(): java.util.concurrent.Executor;
      }
      export module AsyncDifferConfig {
        export class Builder<T> extends java.lang.Object {
          public static class: java.lang.Class<androidx.recyclerview.widget.AsyncDifferConfig.Builder<any>>;
          public setBackgroundThreadExecutor(executor: java.util.concurrent.Executor): androidx.recyclerview.widget.AsyncDifferConfig.Builder<T>;
          public setMainThreadExecutor(executor: java.util.concurrent.Executor): androidx.recyclerview.widget.AsyncDifferConfig.Builder<T>;
          public build(): androidx.recyclerview.widget.AsyncDifferConfig<T>;
          public constructor(diffCallback: androidx.recyclerview.widget.DiffUtil.ItemCallback<T>);
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class AsyncListDiffer<T> extends java.lang.Object {
        public static class: java.lang.Class<androidx.recyclerview.widget.AsyncListDiffer<any>>;
        public constructor(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>, diffCallback: androidx.recyclerview.widget.DiffUtil.ItemCallback<T>);
        public submitList(this_: java.util.List<T>, newList: java.lang.Runnable): void;
        public getCurrentList(): java.util.List<T>;
        public constructor(listUpdateCallback: androidx.recyclerview.widget.ListUpdateCallback, config: androidx.recyclerview.widget.AsyncDifferConfig<T>);
        public addListListener(listener: androidx.recyclerview.widget.AsyncListDiffer.ListListener<T>): void;
        public removeListListener(listener: androidx.recyclerview.widget.AsyncListDiffer.ListListener<T>): void;
        public submitList(newList: java.util.List<T>): void;
      }
      export module AsyncListDiffer {
        export class ListListener<T> extends java.lang.Object {
          public static class: java.lang.Class<androidx.recyclerview.widget.AsyncListDiffer.ListListener<any>>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.AsyncListDiffer$ListListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onCurrentListChanged(param0: java.util.List<T>, param1: java.util.List<T>): void });
          public constructor();
          public onCurrentListChanged(param0: java.util.List<T>, param1: java.util.List<T>): void;
        }
        export class MainThreadExecutor {
          public static class: java.lang.Class<androidx.recyclerview.widget.AsyncListDiffer.MainThreadExecutor>;
          public execute(command: java.lang.Runnable): void;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class AsyncListUtil<T> extends java.lang.Object {
        public static class: java.lang.Class<androidx.recyclerview.widget.AsyncListUtil<any>>;
        public constructor(klass: java.lang.Class<T>, tileSize: number, dataCallback: androidx.recyclerview.widget.AsyncListUtil.DataCallback<T>, viewCallback: androidx.recyclerview.widget.AsyncListUtil.ViewCallback);
        public onRangeChanged(): void;
        public refresh(): void;
        public getItem(position: number): T;
        public getItemCount(): number;
      }
      export module AsyncListUtil {
        export abstract class DataCallback<T> extends java.lang.Object {
          public static class: java.lang.Class<androidx.recyclerview.widget.AsyncListUtil.DataCallback<any>>;
          public recycleData(data: androidNative.Array<T>, itemCount: number): void;
          public refreshData(): number;
          public getMaxCachedTiles(): number;
          public constructor();
          public fillData(param0: androidNative.Array<T>, param1: number, param2: number): void;
        }
        export abstract class ViewCallback {
          public static class: java.lang.Class<androidx.recyclerview.widget.AsyncListUtil.ViewCallback>;
          public static HINT_SCROLL_NONE: number = 0;
          public static HINT_SCROLL_DESC: number = 1;
          public static HINT_SCROLL_ASC: number = 2;
          public constructor();
          public onItemLoaded(param0: number): void;
          public extendRangeInto(range: androidNative.Array<number>, outRange: androidNative.Array<number>, scrollHint: number): void;
          public getItemRangeInto(param0: androidNative.Array<number>): void;
          public onDataRefresh(): void;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class BatchingListUpdateCallback extends androidx.recyclerview.widget.ListUpdateCallback {
        public static class: java.lang.Class<androidx.recyclerview.widget.BatchingListUpdateCallback>;
        public onInserted(param0: number, param1: number): void;
        public onInserted(position: number, count: number): void;
        public onChanged(this_: number, position: number, count: any): void;
        public onRemoved(position: number, count: number): void;
        public onChanged(param0: number, param1: number, param2: any): void;
        public onMoved(param0: number, param1: number): void;
        public dispatchLastEvent(): void;
        public constructor(callback: androidx.recyclerview.widget.ListUpdateCallback);
        public onRemoved(param0: number, param1: number): void;
        public onMoved(fromPosition: number, toPosition: number): void;
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class ChildHelper {
        public static class: java.lang.Class<androidx.recyclerview.widget.ChildHelper>;
        public toString(): string;
      }
      export module ChildHelper {
        export class Bucket {
          public static class: java.lang.Class<androidx.recyclerview.widget.ChildHelper.Bucket>;
          public toString(): string;
        }
        export class Callback {
          public static class: java.lang.Class<androidx.recyclerview.widget.ChildHelper.Callback>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.ChildHelper$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getChildCount(): number; addView(param0: globalAndroid.view.View, param1: number): void; indexOfChild(param0: globalAndroid.view.View): number; removeViewAt(param0: number): void; getChildAt(param0: number): globalAndroid.view.View; removeAllViews(): void; getChildViewHolder(param0: globalAndroid.view.View): androidx.recyclerview.widget.RecyclerView.ViewHolder; attachViewToParent(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void; detachViewFromParent(param0: number): void; onEnteredHiddenState(param0: globalAndroid.view.View): void; onLeftHiddenState(param0: globalAndroid.view.View): void });
          public constructor();
          public removeViewAt(param0: number): void;
          public removeAllViews(): void;
          public getChildCount(): number;
          public getChildAt(param0: number): globalAndroid.view.View;
          public getChildViewHolder(param0: globalAndroid.view.View): androidx.recyclerview.widget.RecyclerView.ViewHolder;
          public detachViewFromParent(param0: number): void;
          public addView(param0: globalAndroid.view.View, param1: number): void;
          public attachViewToParent(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
          public indexOfChild(param0: globalAndroid.view.View): number;
          public onEnteredHiddenState(param0: globalAndroid.view.View): void;
          public onLeftHiddenState(param0: globalAndroid.view.View): void;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class ConcatAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder> {
        public static class: java.lang.Class<androidx.recyclerview.widget.ConcatAdapter>;
        public getItemViewType(position: number): number;
        public constructor(config: androidx.recyclerview.widget.ConcatAdapter.Config, adapters: androidNative.Array<androidx.recyclerview.widget.RecyclerView.Adapter<any>>);
        public onBindViewHolder(holder: any, position: number, payloads: java.util.List<any>): void;
        public constructor();
        public getItemCount(): number;
        public onBindViewHolder(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder, position: number): void;
        public findRelativeAdapterPositionIn(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, localPosition: number): number;
        public onFailedToRecycleView(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
        public onAttachedToRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
        public onViewAttachedToWindow(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public removeAdapter(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>): boolean;
        public setStateRestorationPolicy(strategy: androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy): void;
        public onDetachedFromRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
        public constructor(this_: androidx.recyclerview.widget.ConcatAdapter.Config, config: java.util.List<any>);
        public setHasStableIds(hasStableIds: boolean): void;
        public addAdapter(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>): boolean;
        public onViewDetachedFromWindow(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public constructor(adapters: java.util.List<any>);
        public onCreateViewHolder(parent: globalAndroid.view.ViewGroup, viewType: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
        public constructor(adapters: androidNative.Array<androidx.recyclerview.widget.RecyclerView.Adapter<any>>);
        public addAdapter(index: number, adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>): boolean;
        public getItemId(position: number): number;
        public onViewRecycled(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public getWrappedAdapterAndPosition(globalPosition: number): globalAndroid.util.Pair<androidx.recyclerview.widget.RecyclerView.Adapter<any>, java.lang.Integer>;
        public getAdapters(): java.util.List<any>;
      }
      export module ConcatAdapter {
        export class Config {
          public static class: java.lang.Class<androidx.recyclerview.widget.ConcatAdapter.Config>;
          public isolateViewTypes: boolean;
          public stableIdMode: androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode;
          public static DEFAULT: androidx.recyclerview.widget.ConcatAdapter.Config;
        }
        export module Config {
          export class Builder {
            public static class: java.lang.Class<androidx.recyclerview.widget.ConcatAdapter.Config.Builder>;
            public setIsolateViewTypes(isolateViewTypes: boolean): androidx.recyclerview.widget.ConcatAdapter.Config.Builder;
            public constructor();
            public setStableIdMode(stableIdMode: androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode): androidx.recyclerview.widget.ConcatAdapter.Config.Builder;
            public build(): androidx.recyclerview.widget.ConcatAdapter.Config;
          }
          export class StableIdMode {
            public static class: java.lang.Class<androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode>;
            public static NO_STABLE_IDS: androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode;
            public static ISOLATED_STABLE_IDS: androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode;
            public static SHARED_STABLE_IDS: androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode;
            public static values(): androidNative.Array<androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode>;
            public static valueOf(name: string): androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class ConcatAdapterController extends androidx.recyclerview.widget.NestedAdapterWrapper.Callback {
        public static class: java.lang.Class<androidx.recyclerview.widget.ConcatAdapterController>;
        public onChanged(wrapper: androidx.recyclerview.widget.NestedAdapterWrapper): void;
        public onItemRangeChanged(nestedAdapterWrapper: androidx.recyclerview.widget.NestedAdapterWrapper, positionStart: number, itemCount: number, payload: any): void;
        public onItemRangeMoved(nestedAdapterWrapper: androidx.recyclerview.widget.NestedAdapterWrapper, fromPosition: number, toPosition: number): void;
        public onAttachedToRecyclerView(this_: androidx.recyclerview.widget.RecyclerView): void;
        public onItemRangeMoved(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
        public onItemRangeChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
        public getLocalAdapterPosition(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, globalPosition: number): number;
        public canRestoreState(): boolean;
        public onFailedToRecycleView(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
        public onItemRangeRemoved(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
        public onDetachedFromRecyclerView(i: androidx.recyclerview.widget.RecyclerView): void;
        public getItemId(globalPosition: number): number;
        public onViewAttachedToWindow(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public getBoundAdapter(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): androidx.recyclerview.widget.RecyclerView.Adapter<any>;
        public getItemViewType(globalPosition: number): number;
        public onCreateViewHolder(parent: globalAndroid.view.ViewGroup, globalViewType: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
        public onItemRangeRemoved(nestedAdapterWrapper: androidx.recyclerview.widget.NestedAdapterWrapper, positionStart: number, itemCount: number): void;
        public onItemRangeInserted(nestedAdapterWrapper: androidx.recyclerview.widget.NestedAdapterWrapper, positionStart: number, itemCount: number): void;
        public getTotalCount(): number;
        public onViewDetachedFromWindow(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public onItemRangeChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number, param3: any): void;
        public onStateRestorationPolicyChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper): void;
        public onStateRestorationPolicyChanged(nestedAdapterWrapper: androidx.recyclerview.widget.NestedAdapterWrapper): void;
        public hasStableIds(): boolean;
        public onViewRecycled(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public onChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper): void;
        public getCopyOfAdapters(): java.util.List<androidx.recyclerview.widget.RecyclerView.Adapter<any>>;
        public getWrappedAdapterAndPosition(globalPosition: number): globalAndroid.util.Pair<androidx.recyclerview.widget.RecyclerView.Adapter<any>, java.lang.Integer>;
        public onItemRangeChanged(nestedAdapterWrapper: androidx.recyclerview.widget.NestedAdapterWrapper, positionStart: number, itemCount: number): void;
        public onItemRangeInserted(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
        public onBindViewHolder(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder, globalPosition: number): void;
      }
      export module ConcatAdapterController {
        export class WrapperAndLocalPosition {
          public static class: java.lang.Class<androidx.recyclerview.widget.ConcatAdapterController.WrapperAndLocalPosition>;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class DefaultItemAnimator extends androidx.recyclerview.widget.SimpleItemAnimator {
        public static class: java.lang.Class<androidx.recyclerview.widget.DefaultItemAnimator>;
        public runPendingAnimations(): void;
        public canReuseUpdatedViewHolder(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
        public animateRemove(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
        public endAnimations(): void;
        public isRunning(listener: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemAnimatorFinishedListener): boolean;
        public animateChange(toTop: androidx.recyclerview.widget.RecyclerView.ViewHolder, this_: androidx.recyclerview.widget.RecyclerView.ViewHolder, oldHolder: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, newHolder: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
        public endAnimation(i: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public canReuseUpdatedViewHolder(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, payloads: java.util.List<any>): boolean;
        public animateMove(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder, fromX: number, fromY: number, toX: number, toY: number): boolean;
        public constructor();
        public isRunning(): boolean;
        public animateAdd(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
        public animateChange(oldHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, newHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, fromLeft: number, fromTop: number, toLeft: number, toTop: number): boolean;
      }
      export module DefaultItemAnimator {
        export class ChangeInfo {
          public static class: java.lang.Class<androidx.recyclerview.widget.DefaultItemAnimator.ChangeInfo>;
          public oldHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder;
          public newHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder;
          public fromX: number;
          public fromY: number;
          public toX: number;
          public toY: number;
          public toString(): string;
        }
        export class MoveInfo {
          public static class: java.lang.Class<androidx.recyclerview.widget.DefaultItemAnimator.MoveInfo>;
          public holder: androidx.recyclerview.widget.RecyclerView.ViewHolder;
          public fromX: number;
          public fromY: number;
          public toX: number;
          public toY: number;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class DiffUtil {
        public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil>;
        public static calculateDiff(cb: androidx.recyclerview.widget.DiffUtil.Callback): androidx.recyclerview.widget.DiffUtil.DiffResult;
        public static calculateDiff(left: androidx.recyclerview.widget.DiffUtil.Callback, right: boolean): androidx.recyclerview.widget.DiffUtil.DiffResult;
      }
      export module DiffUtil {
        export abstract class Callback {
          public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.Callback>;
          public getNewListSize(): number;
          public getChangePayload(oldItemPosition: number, newItemPosition: number): any;
          public areContentsTheSame(param0: number, param1: number): boolean;
          public constructor();
          public getOldListSize(): number;
          public areItemsTheSame(param0: number, param1: number): boolean;
        }
        export class CenteredArray {
          public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.CenteredArray>;
          public fill(value: number): void;
        }
        export class Diagonal {
          public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.Diagonal>;
          public x: number;
          public y: number;
          public size: number;
        }
        export class DiffResult {
          public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.DiffResult>;
          public static NO_POSITION: number = -1;
          public dispatchUpdatesTo(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>): void;
          public dispatchUpdatesTo(changePayload: androidx.recyclerview.widget.ListUpdateCallback): void;
          public convertNewPositionToOld(newListPosition: number): number;
          public convertOldPositionToNew(oldListPosition: number): number;
        }
        export abstract class ItemCallback<T> extends java.lang.Object {
          public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.ItemCallback<any>>;
          public areItemsTheSame(param0: T, param1: T): boolean;
          public constructor();
          public areContentsTheSame(param0: T, param1: T): boolean;
          public getChangePayload(oldItem: T, newItem: T): any;
        }
        export class PostponedUpdate {
          public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.PostponedUpdate>;
        }
        export class Range {
          public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.Range>;
          public constructor();
          public constructor(oldListStart: number, oldListEnd: number, newListStart: number, newListEnd: number);
        }
        export class Snake {
          public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.Snake>;
          public startX: number;
          public startY: number;
          public endX: number;
          public endY: number;
          public reverse: boolean;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class DividerItemDecoration extends androidx.recyclerview.widget.RecyclerView.ItemDecoration {
        public static class: java.lang.Class<androidx.recyclerview.widget.DividerItemDecoration>;
        public static HORIZONTAL: number = 0;
        public static VERTICAL: number = 1;
        public onDraw(c: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
        public setOrientation(orientation: number): void;
        public constructor(context: globalAndroid.content.Context, orientation: number);
        public getDrawable(): globalAndroid.graphics.drawable.Drawable;
        /** @deprecated */
        public onDraw(c: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView): void;
        public getItemOffsets(outRect: globalAndroid.graphics.Rect, view: globalAndroid.view.View, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
        public setDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
        /** @deprecated */
        public getItemOffsets(outRect: globalAndroid.graphics.Rect, itemPosition: number, parent: androidx.recyclerview.widget.RecyclerView): void;
        public constructor();
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class FastScroller extends androidx.recyclerview.widget.RecyclerView.ItemDecoration implements androidx.recyclerview.widget.RecyclerView.OnItemTouchListener {
        public static class: java.lang.Class<androidx.recyclerview.widget.FastScroller>;
        public isDragging(): boolean;
        public onRequestDisallowInterceptTouchEvent(param0: boolean): void;
        public onInterceptTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: globalAndroid.view.MotionEvent): boolean;
        public onDrawOver(canvas: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
        public onTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: globalAndroid.view.MotionEvent): void;
        public onInterceptTouchEvent(insideVerticalThumb: androidx.recyclerview.widget.RecyclerView, insideHorizontalThumb: globalAndroid.view.MotionEvent): boolean;
        public attachToRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
        public onTouchEvent(insideHorizontalThumb: androidx.recyclerview.widget.RecyclerView, this_: globalAndroid.view.MotionEvent): void;
        public onRequestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
        public show(): void;
        /** @deprecated */
        public onDrawOver(c: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView): void;
      }
      export module FastScroller {
        export class AnimatorListener {
          public static class: java.lang.Class<androidx.recyclerview.widget.FastScroller.AnimatorListener>;
          public onAnimationEnd(animation: globalAndroid.animation.Animator): void;
          public onAnimationCancel(animation: globalAndroid.animation.Animator): void;
        }
        export class AnimatorUpdater {
          public static class: java.lang.Class<androidx.recyclerview.widget.FastScroller.AnimatorUpdater>;
          public onAnimationUpdate(valueAnimator: globalAndroid.animation.ValueAnimator): void;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class GapWorker {
        public static class: java.lang.Class<androidx.recyclerview.widget.GapWorker>;
        public run(): void;
        public remove(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
        public add(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
      }
      export module GapWorker {
        export class LayoutPrefetchRegistryImpl extends androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry {
          public static class: java.lang.Class<androidx.recyclerview.widget.GapWorker.LayoutPrefetchRegistryImpl>;
          public addPosition(param0: number, param1: number): void;
          public addPosition(this_: number, layoutPosition: number): void;
        }
        export class Task {
          public static class: java.lang.Class<androidx.recyclerview.widget.GapWorker.Task>;
          public neededNextFrame: boolean;
          public viewVelocity: number;
          public distanceToItem: number;
          public view: androidx.recyclerview.widget.RecyclerView;
          public position: number;
          public clear(): void;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class GridLayoutManager extends androidx.recyclerview.widget.LinearLayoutManager {
        public static class: java.lang.Class<androidx.recyclerview.widget.GridLayoutManager>;
        public static DEFAULT_SPAN_COUNT: number = -1;
        public generateLayoutParams(lp: globalAndroid.view.ViewGroup.LayoutParams): androidx.recyclerview.widget.RecyclerView.LayoutParams;
        public getRowCountForAccessibility(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
        public constructor(context: globalAndroid.content.Context);
        public onLayoutCompleted(this_: androidx.recyclerview.widget.RecyclerView.State): void;
        public onItemsAdded(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
        public getSpanSizeLookup(): androidx.recyclerview.widget.GridLayoutManager.SpanSizeLookup;
        public getSpanCount(): number;
        public setSpanCount(spanCount: number): void;
        public constructor(context: globalAndroid.content.Context, orientation: number, reverseLayout: boolean);
        public setUsingSpansToEstimateScrollbarDimensions(useSpansToEstimateScrollBarDimensions: boolean): void;
        public onItemsMoved(recyclerView: androidx.recyclerview.widget.RecyclerView, from: number, to: number, itemCount: number): void;
        public setMeasuredDimension(width: globalAndroid.graphics.Rect, height: number, usedWidth: number): void;
        public constructor();
        public scrollVerticallyBy(dy: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
        public onFocusSearchFailed(inc: globalAndroid.view.View, limit: number, maxStart: androidx.recyclerview.widget.RecyclerView.Recycler, minEnd: androidx.recyclerview.widget.RecyclerView.State): globalAndroid.view.View;
        public getColumnCountForAccessibility(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
        public generateDefaultLayoutParams(): androidx.recyclerview.widget.RecyclerView.LayoutParams;
        public constructor(context: globalAndroid.content.Context, spanCount: number, orientation: number, reverseLayout: boolean);
        public onInitializeAccessibilityNodeInfo(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
        public computeVerticalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
        public onInitializeAccessibilityNodeInfoForItem(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, host: globalAndroid.view.View, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
        public computeVerticalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
        public onLayoutChildren(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): void;
        public setSpanSizeLookup(spanSizeLookup: androidx.recyclerview.widget.GridLayoutManager.SpanSizeLookup): void;
        public scrollHorizontallyBy(dx: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
        public supportsPredictiveItemAnimations(): boolean;
        public onItemsRemoved(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
        public computeHorizontalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
        public generateLayoutParams(c: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.recyclerview.widget.RecyclerView.LayoutParams;
        public isUsingSpansToEstimateScrollbarDimensions(): boolean;
        public onItemsChanged(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
        public computeHorizontalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
        public computeScrollVectorForPosition(param0: number): globalAndroid.graphics.PointF;
        public constructor(context: globalAndroid.content.Context, spanCount: number);
        public setStackFromEnd(stackFromEnd: boolean): void;
        public onItemsUpdated(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number, payload: any): void;
        public checkLayoutParams(lp: androidx.recyclerview.widget.RecyclerView.LayoutParams): boolean;
        public setMeasuredDimension(widthSize: number, heightSize: number): void;
        public prepareForDrop(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number, param3: number): void;
        public onItemsUpdated(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
      }
      export module GridLayoutManager {
        export class Api21Impl {
          public static class: java.lang.Class<androidx.recyclerview.widget.GridLayoutManager.Api21Impl>;
        }
        export class DefaultSpanSizeLookup extends androidx.recyclerview.widget.GridLayoutManager.SpanSizeLookup {
          public static class: java.lang.Class<androidx.recyclerview.widget.GridLayoutManager.DefaultSpanSizeLookup>;
          public constructor();
          public getSpanSize(position: number): number;
          public getSpanIndex(position: number, spanCount: number): number;
        }
        export class LayoutParams extends androidx.recyclerview.widget.RecyclerView.LayoutParams {
          public static class: java.lang.Class<androidx.recyclerview.widget.GridLayoutManager.LayoutParams>;
          public static INVALID_SPAN_ID: number = -1;
          public getSpanSize(): number;
          public constructor(source: globalAndroid.view.ViewGroup.LayoutParams);
          public constructor(c: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
          public constructor(source: androidx.recyclerview.widget.RecyclerView.LayoutParams);
          public getSpanIndex(): number;
          public constructor(width: number, height: number);
          public constructor(source: globalAndroid.view.ViewGroup.MarginLayoutParams);
        }
        export abstract class SpanSizeLookup {
          public static class: java.lang.Class<androidx.recyclerview.widget.GridLayoutManager.SpanSizeLookup>;
          public getSpanIndex(size: number, i: number): number;
          public setSpanIndexCacheEnabled(cacheSpanIndices: boolean): void;
          public isSpanGroupIndexCacheEnabled(): boolean;
          public constructor();
          public setSpanGroupIndexCacheEnabled(cacheSpanGroupIndices: boolean): void;
          public getSpanSize(param0: number): number;
          public isSpanIndexCacheEnabled(): boolean;
          public getSpanGroupIndex(size: number, i: number): number;
          public invalidateSpanGroupIndexCache(): void;
          public invalidateSpanIndexCache(): void;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class ItemTouchHelper extends androidx.recyclerview.widget.RecyclerView.ItemDecoration implements androidx.recyclerview.widget.RecyclerView.OnChildAttachStateChangeListener {
        public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchHelper>;
        public static UP: number = 1;
        public static DOWN: number = 2;
        public static LEFT: number = 4;
        public static RIGHT: number = 8;
        public static START: number = 16;
        public static END: number = 32;
        public static ACTION_STATE_IDLE: number = 0;
        public static ACTION_STATE_SWIPE: number = 1;
        public static ACTION_STATE_DRAG: number = 2;
        public static ANIMATION_TYPE_SWIPE_SUCCESS: number = 2;
        public static ANIMATION_TYPE_SWIPE_CANCEL: number = 4;
        public static ANIMATION_TYPE_DRAG: number = 8;
        public onDrawOver(c: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
        public onDraw(c: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
        public onChildViewDetachedFromWindow(view: globalAndroid.view.View): void;
        public startSwipe(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public onChildViewDetachedFromWindow(param0: globalAndroid.view.View): void;
        public onChildViewAttachedToWindow(view: globalAndroid.view.View): void;
        /** @deprecated */
        public onDraw(c: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView): void;
        public attachToRecyclerView(this_: androidx.recyclerview.widget.RecyclerView): void;
        public constructor();
        public startDrag(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public onChildViewAttachedToWindow(param0: globalAndroid.view.View): void;
        public getItemOffsets(outRect: globalAndroid.graphics.Rect, view: globalAndroid.view.View, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
        /** @deprecated */
        public getItemOffsets(outRect: globalAndroid.graphics.Rect, itemPosition: number, parent: androidx.recyclerview.widget.RecyclerView): void;
        public constructor(callback: androidx.recyclerview.widget.ItemTouchHelper.Callback);
        /** @deprecated */
        public onDrawOver(c: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView): void;
      }
      export module ItemTouchHelper {
        export abstract class Callback {
          public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchHelper.Callback>;
          public static DEFAULT_DRAG_ANIMATION_DURATION: number = 200;
          public static DEFAULT_SWIPE_ANIMATION_DURATION: number = 250;
          public static getDefaultUIUtil(): androidx.recyclerview.widget.ItemTouchUIUtil;
          public getMovementFlags(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
          public isLongPressDragEnabled(): boolean;
          public static makeMovementFlags(dragFlags: number, swipeFlags: number): number;
          public canDropOver(recyclerView: androidx.recyclerview.widget.RecyclerView, current: androidx.recyclerview.widget.RecyclerView.ViewHolder, target: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
          public getAnimationDuration(recyclerView: androidx.recyclerview.widget.RecyclerView, animationType: number, animateDx: number, animateDy: number): number;
          public isItemViewSwipeEnabled(): boolean;
          public constructor();
          public static convertToRelativeDirection(flags: number, layoutDirection: number): number;
          public chooseDropTarget(diff: androidx.recyclerview.widget.RecyclerView.ViewHolder, score: java.util.List<androidx.recyclerview.widget.RecyclerView.ViewHolder>, diff: number, score: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
          public convertToAbsoluteDirection(flags: number, layoutDirection: number): number;
          public onSelectedChanged(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, actionState: number): void;
          public getSwipeEscapeVelocity(defaultValue: number): number;
          public onChildDrawOver(c: globalAndroid.graphics.Canvas, recyclerView: androidx.recyclerview.widget.RecyclerView, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, dX: number, dY: number, actionState: number, isCurrentlyActive: boolean): void;
          public getMoveThreshold(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
          public interpolateOutOfBoundsScroll(this_: androidx.recyclerview.widget.RecyclerView, recyclerView: number, viewSize: number, viewSizeOutOfBounds: number, totalSize: number): number;
          public onChildDraw(c: globalAndroid.graphics.Canvas, recyclerView: androidx.recyclerview.widget.RecyclerView, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, dX: number, dY: number, actionState: number, isCurrentlyActive: boolean): void;
          public getSwipeThreshold(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
          public onMove(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
          public onMoved(maxRight: androidx.recyclerview.widget.RecyclerView, minTop: androidx.recyclerview.widget.RecyclerView.ViewHolder, maxBottom: number, this_: androidx.recyclerview.widget.RecyclerView.ViewHolder, recyclerView: number, viewHolder: number, fromPos: number): void;
          public static makeFlag(actionState: number, directions: number): number;
          public getSwipeVelocityThreshold(defaultValue: number): number;
          public onSwiped(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
          public getBoundingBoxMargin(): number;
          public clearView(recyclerView: androidx.recyclerview.widget.RecyclerView, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        }
        export class ItemTouchHelperGestureListener {
          public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchHelper.ItemTouchHelperGestureListener>;
          public onLongPress(x: globalAndroid.view.MotionEvent): void;
          public onDown(e: globalAndroid.view.MotionEvent): boolean;
        }
        export class RecoverAnimation {
          public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchHelper.RecoverAnimation>;
          public onAnimationEnd(animation: globalAndroid.animation.Animator): void;
          public onAnimationStart(animation: globalAndroid.animation.Animator): void;
          public update(): void;
          public cancel(): void;
          public onAnimationRepeat(animation: globalAndroid.animation.Animator): void;
          public setFraction(fraction: number): void;
          public setDuration(duration: number): void;
          public start(): void;
          public onAnimationCancel(animation: globalAndroid.animation.Animator): void;
        }
        export abstract class SimpleCallback extends androidx.recyclerview.widget.ItemTouchHelper.Callback {
          public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchHelper.SimpleCallback>;
          public constructor();
          public setDefaultDragDirs(defaultDragDirs: number): void;
          public setDefaultSwipeDirs(defaultSwipeDirs: number): void;
          public getSwipeDirs(recyclerView: androidx.recyclerview.widget.RecyclerView, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
          public constructor(dragDirs: number, swipeDirs: number);
          public getMovementFlags(recyclerView: androidx.recyclerview.widget.RecyclerView, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
          public getDragDirs(recyclerView: androidx.recyclerview.widget.RecyclerView, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
        }
        export class ViewDropHandler {
          public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchHelper.ViewDropHandler>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.ItemTouchHelper$ViewDropHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { prepareForDrop(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number, param3: number): void });
          public constructor();
          public prepareForDrop(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number, param3: number): void;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class ItemTouchUIUtil {
        public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchUIUtil>;
        /**
         * Constructs a new instance of the androidx.recyclerview.widget.ItemTouchUIUtil interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onDraw(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: globalAndroid.view.View, param3: number, param4: number, param5: number, param6: boolean): void; onDrawOver(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: globalAndroid.view.View, param3: number, param4: number, param5: number, param6: boolean): void; clearView(param0: globalAndroid.view.View): void; onSelected(param0: globalAndroid.view.View): void });
        public constructor();
        public onSelected(param0: globalAndroid.view.View): void;
        public onDraw(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: globalAndroid.view.View, param3: number, param4: number, param5: number, param6: boolean): void;
        public clearView(param0: globalAndroid.view.View): void;
        public onDrawOver(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: globalAndroid.view.View, param3: number, param4: number, param5: number, param6: boolean): void;
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class ItemTouchUIUtilImpl extends androidx.recyclerview.widget.ItemTouchUIUtil {
        public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchUIUtilImpl>;
        public onSelected(param0: globalAndroid.view.View): void;
        public onDraw(originalElevation: globalAndroid.graphics.Canvas, this_: androidx.recyclerview.widget.RecyclerView, c: globalAndroid.view.View, recyclerView: number, view: number, dX: number, dY: boolean): void;
        public onSelected(view: globalAndroid.view.View): void;
        public onDraw(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: globalAndroid.view.View, param3: number, param4: number, param5: number, param6: boolean): void;
        public onDrawOver(c: globalAndroid.graphics.Canvas, recyclerView: androidx.recyclerview.widget.RecyclerView, view: globalAndroid.view.View, dX: number, dY: number, actionState: number, isCurrentlyActive: boolean): void;
        public clearView(param0: globalAndroid.view.View): void;
        public clearView(this_: globalAndroid.view.View): void;
        public onDrawOver(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: globalAndroid.view.View, param3: number, param4: number, param5: number, param6: boolean): void;
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class LayoutState {
        public static class: java.lang.Class<androidx.recyclerview.widget.LayoutState>;
        public toString(): string;
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class LinearLayoutManager extends androidx.recyclerview.widget.RecyclerView.LayoutManager implements androidx.recyclerview.widget.ItemTouchHelper.ViewDropHandler, androidx.recyclerview.widget.RecyclerView.SmoothScroller.ScrollVectorProvider {
        public static class: java.lang.Class<androidx.recyclerview.widget.LinearLayoutManager>;
        public static HORIZONTAL: number = 0;
        public static VERTICAL: number = 1;
        public static INVALID_OFFSET: number = -2147483648;
        public getReverseLayout(): boolean;
        public isLayoutReversed(): boolean;
        public constructor(context: globalAndroid.content.Context);
        public constructor(context: globalAndroid.content.Context, orientation: number, reverseLayout: boolean);
        public assertNotInLayoutOrScroll(message: string): void;
        public constructor();
        public scrollVerticallyBy(dy: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
        public isSmoothScrollbarEnabled(): boolean;
        public canScrollHorizontally(): boolean;
        public isAutoMeasureEnabled(): boolean;
        public generateDefaultLayoutParams(): androidx.recyclerview.widget.RecyclerView.LayoutParams;
        public scrollToPositionWithOffset(position: number, offset: number): void;
        public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
        public onInitializeAccessibilityNodeInfo(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
        public computeVerticalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
        public onInitializeAccessibilityEvent(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, event: globalAndroid.view.accessibility.AccessibilityEvent): void;
        public canScrollVertically(): boolean;
        public onLayoutChildren(upcomingOffset: androidx.recyclerview.widget.RecyclerView.Recycler, current: androidx.recyclerview.widget.RecyclerView.State): void;
        public computeHorizontalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
        public setRecycleChildrenOnDetach(recycleChildrenOnDetach: boolean): void;
        public collectInitialPrefetchPositions(anchorPos: number, anchorPos: androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry): void;
        public computeScrollVectorForPosition(param0: number): globalAndroid.graphics.PointF;
        public collectAdjacentPrefetchPositions(dx: number, dy: number, state: androidx.recyclerview.widget.RecyclerView.State, layoutPrefetchRegistry: androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry): void;
        public prepareForDrop(view: globalAndroid.view.View, target: globalAndroid.view.View, x: number, y: number): void;
        public onLayoutCompleted(state: androidx.recyclerview.widget.RecyclerView.State): void;
        public scrollToPosition(position: number): void;
        public onDetachedFromWindow(view: androidx.recyclerview.widget.RecyclerView, recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
        public findLastCompletelyVisibleItemPosition(): number;
        public getStackFromEnd(): boolean;
        public getOrientation(): number;
        public calculateExtraLayoutSpace(state: androidx.recyclerview.widget.RecyclerView.State, extraLayoutSpace: androidNative.Array<number>): void;
        /** @deprecated */
        public onDetachedFromWindow(view: androidx.recyclerview.widget.RecyclerView): void;
        public findLastVisibleItemPosition(): number;
        public setReverseLayout(reverseLayout: boolean): void;
        public computeScrollVectorForPosition(targetPosition: number): globalAndroid.graphics.PointF;
        public setOrientation(orientation: number): void;
        public onFocusSearchFailed(nextFocus: globalAndroid.view.View, this_: number, focused: androidx.recyclerview.widget.RecyclerView.Recycler, direction: androidx.recyclerview.widget.RecyclerView.State): globalAndroid.view.View;
        public setSmoothScrollbarEnabled(enabled: boolean): void;
        public getInitialPrefetchItemCount(): number;
        public computeVerticalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
        public onSaveInstanceState(): globalAndroid.os.Parcelable;
        public onInitializeAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
        public smoothScrollToPosition(recyclerView: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State, position: number): void;
        public scrollHorizontallyBy(dx: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
        public computeHorizontalScrollExtent(state: androidx.recyclerview.widget.RecyclerView.State): number;
        public findViewByPosition(this_: number): globalAndroid.view.View;
        public computeVerticalScrollExtent(state: androidx.recyclerview.widget.RecyclerView.State): number;
        public supportsPredictiveItemAnimations(): boolean;
        public findFirstVisibleItemPosition(): number;
        public computeHorizontalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
        /** @deprecated */
        public getExtraLayoutSpace(state: androidx.recyclerview.widget.RecyclerView.State): number;
        public getRecycleChildrenOnDetach(): boolean;
        public findFirstCompletelyVisibleItemPosition(): number;
        public setStackFromEnd(stackFromEnd: boolean): void;
        public setInitialPrefetchItemCount(itemCount: number): void;
        public isLayoutRTL(): boolean;
        public prepareForDrop(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number, param3: number): void;
      }
      export module LinearLayoutManager {
        export class AnchorInfo {
          public static class: java.lang.Class<androidx.recyclerview.widget.LinearLayoutManager.AnchorInfo>;
          public assignFromViewAndKeepVisibleRect(estimatedChildStart: globalAndroid.view.View, layoutStart: number): void;
          public toString(): string;
          public assignFromView(child: globalAndroid.view.View, position: number): void;
        }
        export class LayoutChunkResult {
          public static class: java.lang.Class<androidx.recyclerview.widget.LinearLayoutManager.LayoutChunkResult>;
          public mConsumed: number;
          public mFinished: boolean;
          public mIgnoreConsumed: boolean;
          public mFocusable: boolean;
          public constructor();
        }
        export class LayoutState {
          public static class: java.lang.Class<androidx.recyclerview.widget.LinearLayoutManager.LayoutState>;
          public nextViewInLimitedList(lp: globalAndroid.view.View): globalAndroid.view.View;
          public assignPositionFromScrapList(): void;
          public assignPositionFromScrapList(ignore: globalAndroid.view.View): void;
        }
        export class SavedState {
          public static class: java.lang.Class<androidx.recyclerview.widget.LinearLayoutManager.SavedState>;
          public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.recyclerview.widget.LinearLayoutManager.SavedState>;
          public constructor(other: androidx.recyclerview.widget.LinearLayoutManager.SavedState);
          public constructor();
          public describeContents(): number;
          public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class LinearSmoothScroller extends androidx.recyclerview.widget.RecyclerView.SmoothScroller {
        public static class: java.lang.Class<androidx.recyclerview.widget.LinearSmoothScroller>;
        public static SNAP_TO_START: number = -1;
        public static SNAP_TO_END: number = 1;
        public static SNAP_TO_ANY: number = 0;
        public mLinearInterpolator: globalAndroid.view.animation.LinearInterpolator;
        public mDecelerateInterpolator: globalAndroid.view.animation.DecelerateInterpolator;
        public mTargetVector: globalAndroid.graphics.PointF;
        public mInterimTargetDx: number;
        public mInterimTargetDy: number;
        public getHorizontalSnapPreference(): number;
        public constructor(context: globalAndroid.content.Context);
        public getVerticalSnapPreference(): number;
        public constructor();
        public onSeekTargetStep(dx: number, dy: number, state: androidx.recyclerview.widget.RecyclerView.State, action: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
        public calculateDxToMakeVisible(view: globalAndroid.view.View, snapPreference: number): number;
        public updateActionForInterimTarget(this_: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
        public calculateDyToMakeVisible(view: globalAndroid.view.View, snapPreference: number): number;
        public onStart(): void;
        public calculateTimeForDeceleration(dx: number): number;
        public onStop(): void;
        public calculateTimeForScrolling(dx: number): number;
        public calculateDtToFit(dtEnd: number, this_: number, viewStart: number, viewEnd: number, boxStart: number): number;
        public onTargetFound(targetView: globalAndroid.view.View, state: androidx.recyclerview.widget.RecyclerView.State, action: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
        public calculateSpeedPerPixel(displayMetrics: globalAndroid.util.DisplayMetrics): number;
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class LinearSnapHelper extends androidx.recyclerview.widget.SnapHelper {
        public static class: java.lang.Class<androidx.recyclerview.widget.LinearSnapHelper>;
        public findSnapView(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager): globalAndroid.view.View;
        public findTargetSnapPosition(vDeltaJump: androidx.recyclerview.widget.RecyclerView.LayoutManager, this_: number, layoutManager: number): number;
        public calculateDistanceToFinalSnap(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager, targetView: globalAndroid.view.View): androidNative.Array<number>;
        public constructor();
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export abstract class ListAdapter<T, VH> extends androidx.recyclerview.widget.RecyclerView.Adapter<any> {
        public static class: java.lang.Class<androidx.recyclerview.widget.ListAdapter<any, any>>;
        public constructor(config: androidx.recyclerview.widget.AsyncDifferConfig<any>);
        public submitList(list: java.util.List<any>, commitCallback: java.lang.Runnable): void;
        public getCurrentList(): java.util.List<any>;
        public submitList(list: java.util.List<any>): void;
        public getItem(position: number): any;
        public onCurrentListChanged(previousList: java.util.List<any>, currentList: java.util.List<any>): void;
        public constructor(diffCallback: androidx.recyclerview.widget.DiffUtil.ItemCallback<any>);
        public constructor();
        public getItemCount(): number;
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class ListUpdateCallback {
        public static class: java.lang.Class<androidx.recyclerview.widget.ListUpdateCallback>;
        /**
         * Constructs a new instance of the androidx.recyclerview.widget.ListUpdateCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onInserted(param0: number, param1: number): void; onRemoved(param0: number, param1: number): void; onMoved(param0: number, param1: number): void; onChanged(param0: number, param1: number, param2: any): void });
        public constructor();
        public onInserted(param0: number, param1: number): void;
        public onChanged(param0: number, param1: number, param2: any): void;
        public onMoved(param0: number, param1: number): void;
        public onRemoved(param0: number, param1: number): void;
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class MessageThreadUtil<T> extends androidx.recyclerview.widget.ThreadUtil<any> {
        public static class: java.lang.Class<androidx.recyclerview.widget.MessageThreadUtil<any>>;
        public getBackgroundProxy(callback: androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<any>): androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<any>;
        public getMainThreadProxy(param0: androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<any>): androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<any>;
        public getMainThreadProxy(callback: androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<any>): androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<any>;
        public getBackgroundProxy(param0: androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<any>): androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<any>;
      }
      export module MessageThreadUtil {
        export class MessageQueue {
          public static class: java.lang.Class<androidx.recyclerview.widget.MessageThreadUtil.MessageQueue>;
        }
        export class SyncQueueItem {
          public static class: java.lang.Class<androidx.recyclerview.widget.MessageThreadUtil.SyncQueueItem>;
          public what: number;
          public arg1: number;
          public arg2: number;
          public arg3: number;
          public arg4: number;
          public arg5: number;
          public data: any;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class NestedAdapterWrapper {
        public static class: java.lang.Class<androidx.recyclerview.widget.NestedAdapterWrapper>;
        public adapter: androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder>;
        public getItemId(localPosition: number): number;
      }
      export module NestedAdapterWrapper {
        export class Callback {
          public static class: java.lang.Class<androidx.recyclerview.widget.NestedAdapterWrapper.Callback>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.NestedAdapterWrapper$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper): void;
            onItemRangeChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
            onItemRangeChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number, param3: any): void;
            onItemRangeInserted(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
            onItemRangeRemoved(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
            onItemRangeMoved(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
            onStateRestorationPolicyChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper): void;
          });
          public constructor();
          public onItemRangeChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
          public onItemRangeRemoved(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
          public onItemRangeMoved(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
          public onStateRestorationPolicyChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper): void;
          public onItemRangeChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number, param3: any): void;
          public onChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper): void;
          public onItemRangeInserted(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class OpReorderer {
        public static class: java.lang.Class<androidx.recyclerview.widget.OpReorderer>;
      }
      export module OpReorderer {
        export class Callback {
          public static class: java.lang.Class<androidx.recyclerview.widget.OpReorderer.Callback>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.OpReorderer$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { obtainUpdateOp(param0: number, param1: number, param2: number, param3: any): androidx.recyclerview.widget.AdapterHelper.UpdateOp; recycleUpdateOp(param0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void });
          public constructor();
          public recycleUpdateOp(param0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void;
          public obtainUpdateOp(param0: number, param1: number, param2: number, param3: any): androidx.recyclerview.widget.AdapterHelper.UpdateOp;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export abstract class OrientationHelper {
        public static class: java.lang.Class<androidx.recyclerview.widget.OrientationHelper>;
        public mLayoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager;
        public static HORIZONTAL: number = 0;
        public static VERTICAL: number = 1;
        public getEnd(): number;
        public offsetChildren(param0: number): void;
        public getMode(): number;
        public static createOrientationHelper(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager, orientation: number): androidx.recyclerview.widget.OrientationHelper;
        public onLayoutComplete(): void;
        public getTotalSpace(): number;
        public getDecoratedEnd(param0: globalAndroid.view.View): number;
        public getDecoratedMeasurementInOther(param0: globalAndroid.view.View): number;
        public getDecoratedMeasurement(param0: globalAndroid.view.View): number;
        public offsetChild(param0: globalAndroid.view.View, param1: number): void;
        public getTransformedEndWithDecoration(param0: globalAndroid.view.View): number;
        public getStartAfterPadding(): number;
        public getDecoratedStart(param0: globalAndroid.view.View): number;
        public static createHorizontalHelper(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager): androidx.recyclerview.widget.OrientationHelper;
        public getLayoutManager(): androidx.recyclerview.widget.RecyclerView.LayoutManager;
        public static createVerticalHelper(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager): androidx.recyclerview.widget.OrientationHelper;
        public getEndPadding(): number;
        public getModeInOther(): number;
        public getEndAfterPadding(): number;
        public getTotalSpaceChange(): number;
        public getTransformedStartWithDecoration(param0: globalAndroid.view.View): number;
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class PagerSnapHelper extends androidx.recyclerview.widget.SnapHelper {
        public static class: java.lang.Class<androidx.recyclerview.widget.PagerSnapHelper>;
        public findSnapView(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager): globalAndroid.view.View;
        public findTargetSnapPosition(distance: androidx.recyclerview.widget.RecyclerView.LayoutManager, i: number, this_: number): number;
        public createScroller(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager): androidx.recyclerview.widget.RecyclerView.SmoothScroller;
        public calculateDistanceToFinalSnap(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager, targetView: globalAndroid.view.View): androidNative.Array<number>;
        public constructor();
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class RecyclerView {
        public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView>;
        public static HORIZONTAL: number = 0;
        public static VERTICAL: number = 1;
        public static NO_POSITION: number = -1;
        public static NO_ID: number = -1;
        public static INVALID_TYPE: number = -1;
        public static TOUCH_SLOP_DEFAULT: number = 0;
        public static TOUCH_SLOP_PAGING: number = 1;
        public static UNDEFINED_DURATION: number = -2147483648;
        public static SCROLL_STATE_IDLE: number = 0;
        public static SCROLL_STATE_DRAGGING: number = 1;
        public static SCROLL_STATE_SETTLING: number = 2;
        public hasFixedSize(): boolean;
        public setNestedScrollingEnabled(enabled: boolean): void;
        public setHasFixedSize(hasFixedSize: boolean): void;
        public smoothScrollToPosition(position: number): void;
        /** @deprecated */
        public findViewHolderForPosition(position: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
        public setViewCacheExtension(extension: androidx.recyclerview.widget.RecyclerView.ViewCacheExtension): void;
        public dispatchKeyEvent(targetOffset: globalAndroid.view.KeyEvent): boolean;
        public stopScroll(): void;
        /** @deprecated */
        public isLayoutFrozen(): boolean;
        public startNestedScroll(axes: number, type: number): boolean;
        public dispatchSaveInstanceState(container: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
        public getPreserveFocusAfterLayout(): boolean;
        public setChildDrawingOrderCallback(childDrawingOrderCallback: androidx.recyclerview.widget.RecyclerView.ChildDrawingOrderCallback): void;
        public removeItemDecorationAt(index: number): void;
        public getCompatAccessibilityDelegate(): androidx.recyclerview.widget.RecyclerViewAccessibilityDelegate;
        public swapAdapter(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>, removeAndRecycleExistingViews: boolean): void;
        public findViewHolderForAdapterPosition(i: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
        public findContainingViewHolder(view: globalAndroid.view.View): androidx.recyclerview.widget.RecyclerView.ViewHolder;
        public isLayoutSuppressed(): boolean;
        public setRecycledViewPool(pool: androidx.recyclerview.widget.RecyclerView.RecycledViewPool): void;
        public removeOnItemTouchListener(listener: androidx.recyclerview.widget.RecyclerView.OnItemTouchListener): void;
        public getScrollState(): number;
        public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
        public getAdapter(): androidx.recyclerview.widget.RecyclerView.Adapter<any>;
        public addItemDecoration(decor: androidx.recyclerview.widget.RecyclerView.ItemDecoration): void;
        public getItemDecorationCount(): number;
        public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
        public computeHorizontalScrollExtent(): number;
        public setLayoutManager(layout: androidx.recyclerview.widget.RecyclerView.LayoutManager): void;
        public setClipToPadding(clipToPadding: boolean): void;
        public onDraw(this_: globalAndroid.graphics.Canvas): void;
        /** @deprecated */
        public setRecyclerListener(listener: androidx.recyclerview.widget.RecyclerView.RecyclerListener): void;
        public computeVerticalScrollRange(): number;
        public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
        public dispatchNestedPreScroll(dx: number, dy: number, consumed: androidNative.Array<number>, offsetInWindow: androidNative.Array<number>, type: number): boolean;
        public dispatchNestedFling(velocityX: number, velocityY: number, consumed: boolean): boolean;
        public onGenericMotionEvent(hScroll: globalAndroid.view.MotionEvent): boolean;
        public findViewHolderForLayoutPosition(position: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
        public findViewHolderForItemId(i: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
        public smoothScrollBy(dx: number, dy: number, interpolator: globalAndroid.view.animation.Interpolator): void;
        public focusSearch(found: globalAndroid.view.View, rtl: number): globalAndroid.view.View;
        public scrollBy(x: number, y: number): void;
        public getChildItemId(child: globalAndroid.view.View): number;
        public onRequestFocusInDescendants(direction: number, previouslyFocusedRect: globalAndroid.graphics.Rect): boolean;
        public hasNestedScrollingParent(type: number): boolean;
        public computeHorizontalScrollOffset(): number;
        public getLayoutManager(): androidx.recyclerview.widget.RecyclerView.LayoutManager;
        public offsetChildrenVertical(this_: number): void;
        public clearOnChildAttachStateChangeListeners(): void;
        public dispatchNestedPreFling(velocityX: number, velocityY: number): boolean;
        public stopNestedScroll(type: number): void;
        public dispatchNestedPreScroll(dx: number, dy: number, consumed: androidNative.Array<number>, offsetInWindow: androidNative.Array<number>): boolean;
        public smoothScrollBy(dx: number, dy: number): void;
        public setEdgeEffectFactory(edgeEffectFactory: androidx.recyclerview.widget.RecyclerView.EdgeEffectFactory): void;
        public onChildDetachedFromWindow(child: globalAndroid.view.View): void;
        public requestChildRectangleOnScreen(child: globalAndroid.view.View, rect: globalAndroid.graphics.Rect, immediate: boolean): boolean;
        public addFocusables(views: java.util.ArrayList<globalAndroid.view.View>, direction: number, focusableMode: number): void;
        public onInterceptTouchEvent(dy: globalAndroid.view.MotionEvent): boolean;
        public static setDebugAssertionsEnabled(debugAssertionsEnabled: boolean): void;
        public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: androidNative.Array<number>): boolean;
        public removeDetachedView(child: globalAndroid.view.View, animate: boolean): void;
        public constructor(verticalTrackDrawable: globalAndroid.content.Context, horizontalThumbDrawable: globalAndroid.util.AttributeSet, horizontalTrackDrawable: number);
        public startNestedScroll(axes: number): boolean;
        public stopNestedScroll(): void;
        public setOnFlingListener(onFlingListener: androidx.recyclerview.widget.RecyclerView.OnFlingListener): void;
        public onMeasure(heightMode: number, this_: number): void;
        public setAccessibilityDelegateCompat(accessibilityDelegate: androidx.recyclerview.widget.RecyclerViewAccessibilityDelegate): void;
        public drawChild(canvas: globalAndroid.graphics.Canvas, child: globalAndroid.view.View, drawingTime: number): boolean;
        public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
        public onAttachedToWindow(): void;
        public isNestedScrollingEnabled(): boolean;
        public constructor(context: globalAndroid.content.Context);
        public computeVerticalScrollOffset(): number;
        public getItemAnimator(): androidx.recyclerview.widget.RecyclerView.ItemAnimator;
        public checkLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): boolean;
        public getMaxFlingVelocity(): number;
        public dispatchRestoreInstanceState(container: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
        public removeOnScrollListener(listener: androidx.recyclerview.widget.RecyclerView.OnScrollListener): void;
        public smoothScrollBy(dx: number, dy: number, interpolator: globalAndroid.view.animation.Interpolator, duration: number): void;
        public removeRecyclerListener(listener: androidx.recyclerview.widget.RecyclerView.RecyclerListener): void;
        public isAnimating(): boolean;
        public getOnFlingListener(): androidx.recyclerview.widget.RecyclerView.OnFlingListener;
        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
        public scrollTo(x: number, y: number): void;
        public computeHorizontalScrollRange(): number;
        public hasPendingAdapterUpdates(): boolean;
        public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
        public onScrolled(dx: number, dy: number): void;
        public addRecyclerListener(listener: androidx.recyclerview.widget.RecyclerView.RecyclerListener): void;
        public dispatchPopulateAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
        public addOnScrollListener(listener: androidx.recyclerview.widget.RecyclerView.OnScrollListener): void;
        public setScrollingTouchSlop(slopConstant: number): void;
        public removeItemDecoration(decor: androidx.recyclerview.widget.RecyclerView.ItemDecoration): void;
        public getRecycledViewPool(): androidx.recyclerview.widget.RecyclerView.RecycledViewPool;
        /** @deprecated */
        public setLayoutFrozen(frozen: boolean): void;
        public getClipToPadding(): boolean;
        public getChildViewHolder(child: globalAndroid.view.View): androidx.recyclerview.widget.RecyclerView.ViewHolder;
        public nestedScrollBy(x: number, y: number): void;
        public generateLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
        public setItemViewCacheSize(size: number): void;
        public setAdapter(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>): void;
        public onTouchEvent(index: globalAndroid.view.MotionEvent): boolean;
        public onChildAttachedToWindow(child: globalAndroid.view.View): void;
        public onScrollStateChanged(state: number): void;
        public computeVerticalScrollExtent(): number;
        public onDetachedFromWindow(): void;
        public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: androidNative.Array<number>, type: number): boolean;
        public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
        public getMinFlingVelocity(): number;
        public findChildViewUnder(translationX: number, translationY: number): globalAndroid.view.View;
        public getBaseline(): number;
        public getItemDecorationAt(index: number): androidx.recyclerview.widget.RecyclerView.ItemDecoration;
        public fling(velocityX: number, velocityY: number): boolean;
        public scrollToPosition(position: number): void;
        public draw(restore: globalAndroid.graphics.Canvas): void;
        public findContainingItemView(view: globalAndroid.view.View): globalAndroid.view.View;
        public removeOnChildAttachStateChangeListener(listener: androidx.recyclerview.widget.RecyclerView.OnChildAttachStateChangeListener): void;
        public suppressLayout(cancelEvent: boolean): void;
        public getChildLayoutPosition(child: globalAndroid.view.View): number;
        /** @deprecated */
        public getChildPosition(child: globalAndroid.view.View): number;
        public addOnItemTouchListener(listener: androidx.recyclerview.widget.RecyclerView.OnItemTouchListener): void;
        public requestLayout(): void;
        public getDecoratedBoundsWithMargins(view: globalAndroid.view.View, outBounds: globalAndroid.graphics.Rect): void;
        public isAttachedToWindow(): boolean;
        public getAccessibilityClassName(): string;
        public addOnChildAttachStateChangeListener(listener: androidx.recyclerview.widget.RecyclerView.OnChildAttachStateChangeListener): void;
        public requestDisallowInterceptTouchEvent(i: boolean): void;
        public setPreserveFocusAfterLayout(preserveFocusAfterLayout: boolean): void;
        public static setVerboseLoggingEnabled(verboseLoggingEnabled: boolean): void;
        public onSaveInstanceState(): globalAndroid.os.Parcelable;
        public getChildDrawingOrder(childCount: number, i: number): number;
        public offsetChildrenHorizontal(this_: number): void;
        public invalidateItemDecorations(): void;
        public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
        public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: androidNative.Array<number>, type: number, consumed: androidNative.Array<number>): void;
        public addItemDecoration(decor: androidx.recyclerview.widget.RecyclerView.ItemDecoration, index: number): void;
        public isComputingLayout(): boolean;
        /** @deprecated */
        public setLayoutTransition(transition: globalAndroid.animation.LayoutTransition): void;
        public hasNestedScrollingParent(): boolean;
        /** @deprecated */
        public setOnScrollListener(listener: androidx.recyclerview.widget.RecyclerView.OnScrollListener): void;
        public setItemAnimator(animator: androidx.recyclerview.widget.RecyclerView.ItemAnimator): void;
        public getChildAdapterPosition(child: globalAndroid.view.View): number;
        public clearOnScrollListeners(): void;
        public getEdgeEffectFactory(): androidx.recyclerview.widget.RecyclerView.EdgeEffectFactory;
      }
      export module RecyclerView {
        export abstract class Adapter<VH> extends java.lang.Object {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.Adapter<any>>;
          public notifyItemRangeInserted(positionStart: number, itemCount: number): void;
          public notifyItemChanged(position: number, payload: any): void;
          public notifyDataSetChanged(): void;
          public findRelativeAdapterPositionIn(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, localPosition: number): number;
          public setHasStableIds(hasStableIds: boolean): void;
          public getStateRestorationPolicy(): androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy;
          public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): VH;
          public bindViewHolder(this_: VH, holder: number): void;
          public constructor();
          public onAttachedToRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
          public hasObservers(): boolean;
          public onBindViewHolder(holder: VH, position: number, payloads: java.util.List<any>): void;
          public notifyItemChanged(position: number): void;
          public onViewDetachedFromWindow(holder: VH): void;
          public onBindViewHolder(param0: VH, param1: number): void;
          public getItemViewType(position: number): number;
          public notifyItemRangeChanged(positionStart: number, itemCount: number): void;
          public notifyItemRangeChanged(positionStart: number, itemCount: number, payload: any): void;
          public createViewHolder(this_: globalAndroid.view.ViewGroup, parent: number): VH;
          public notifyItemInserted(position: number): void;
          public onDetachedFromRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
          public notifyItemRangeRemoved(positionStart: number, itemCount: number): void;
          public getItemId(position: number): number;
          public notifyItemRemoved(position: number): void;
          public hasStableIds(): boolean;
          public onViewRecycled(holder: VH): void;
          public onViewAttachedToWindow(holder: VH): void;
          public setStateRestorationPolicy(strategy: androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy): void;
          public unregisterAdapterDataObserver(observer: androidx.recyclerview.widget.RecyclerView.AdapterDataObserver): void;
          public getItemCount(): number;
          public onFailedToRecycleView(holder: VH): boolean;
          public notifyItemMoved(fromPosition: number, toPosition: number): void;
          public registerAdapterDataObserver(observer: androidx.recyclerview.widget.RecyclerView.AdapterDataObserver): void;
        }
        export module Adapter {
          export class StateRestorationPolicy {
            public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy>;
            public static ALLOW: androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy;
            public static PREVENT_WHEN_EMPTY: androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy;
            public static PREVENT: androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy;
            public static values(): androidNative.Array<androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy>;
            public static valueOf(name: string): androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy;
          }
        }
        export class AdapterDataObservable extends globalAndroid.database.Observable<androidx.recyclerview.widget.RecyclerView.AdapterDataObserver> {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.AdapterDataObservable>;
          public notifyStateRestorationPolicyChanged(): void;
          public notifyItemRangeRemoved(this_: number, positionStart: number): void;
          public notifyChanged(): void;
          public notifyItemRangeChanged(positionStart: number, itemCount: number): void;
          public notifyItemRangeChanged(this_: number, positionStart: number, itemCount: any): void;
          public notifyItemMoved(this_: number, fromPosition: number): void;
          public hasObservers(): boolean;
          public notifyItemRangeInserted(this_: number, positionStart: number): void;
        }
        export abstract class AdapterDataObserver {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.AdapterDataObserver>;
          public onChanged(): void;
          public onItemRangeChanged(positionStart: number, itemCount: number, payload: any): void;
          public onItemRangeRemoved(positionStart: number, itemCount: number): void;
          public constructor();
          public onStateRestorationPolicyChanged(): void;
          public onItemRangeInserted(positionStart: number, itemCount: number): void;
          public onItemRangeChanged(positionStart: number, itemCount: number): void;
          public onItemRangeMoved(fromPosition: number, toPosition: number, itemCount: number): void;
        }
        export class Api35Impl {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.Api35Impl>;
          public static setFrameContentVelocity(view: globalAndroid.view.View, velocity: number): void;
        }
        export class ChildDrawingOrderCallback {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ChildDrawingOrderCallback>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$ChildDrawingOrderCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onGetChildDrawingOrder(param0: number, param1: number): number });
          public constructor();
          public onGetChildDrawingOrder(param0: number, param1: number): number;
        }
        export class EdgeEffectFactory {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.EdgeEffectFactory>;
          public static DIRECTION_LEFT: number = 0;
          public static DIRECTION_TOP: number = 1;
          public static DIRECTION_RIGHT: number = 2;
          public static DIRECTION_BOTTOM: number = 3;
          public createEdgeEffect(view: androidx.recyclerview.widget.RecyclerView, direction: number): globalAndroid.widget.EdgeEffect;
          public constructor();
        }
        export module EdgeEffectFactory {
          export class EdgeDirection {
            public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.EdgeEffectFactory.EdgeDirection>;
            /**
             * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$EdgeEffectFactory$EdgeDirection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
          }
        }
        export abstract class ItemAnimator {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemAnimator>;
          public static FLAG_CHANGED: number = 2;
          public static FLAG_REMOVED: number = 8;
          public static FLAG_INVALIDATED: number = 4;
          public static FLAG_MOVED: number = 2048;
          public static FLAG_APPEARED_IN_PRE_LAYOUT: number = 4096;
          public recordPostLayoutInformation(state: androidx.recyclerview.widget.RecyclerView.State, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
          public endAnimation(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
          public dispatchAnimationsFinished(): void;
          public animatePersistence(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
          public setRemoveDuration(removeDuration: number): void;
          public dispatchAnimationFinished(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
          public getRemoveDuration(): number;
          public dispatchAnimationStarted(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
          public canReuseUpdatedViewHolder(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, payloads: java.util.List<any>): boolean;
          public setChangeDuration(changeDuration: number): void;
          public constructor();
          public recordPreLayoutInformation(state: androidx.recyclerview.widget.RecyclerView.State, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, changeFlags: number, payloads: java.util.List<any>): androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
          public setMoveDuration(moveDuration: number): void;
          public obtainHolderInfo(): androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
          public endAnimations(): void;
          public getAddDuration(): number;
          public runPendingAnimations(): void;
          public onAnimationStarted(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
          public setAddDuration(addDuration: number): void;
          public onAnimationFinished(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
          public animateDisappearance(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
          public isRunning(): boolean;
          public getChangeDuration(): number;
          public animateAppearance(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
          public canReuseUpdatedViewHolder(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
          public isRunning(listener: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemAnimatorFinishedListener): boolean;
          public getMoveDuration(): number;
          public animateChange(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param3: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
        }
        export module ItemAnimator {
          export class AdapterChanges {
            public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemAnimator.AdapterChanges>;
            /**
             * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$ItemAnimator$AdapterChanges interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
          }
          export class ItemAnimatorFinishedListener {
            public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemAnimatorFinishedListener>;
            /**
             * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$ItemAnimator$ItemAnimatorFinishedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onAnimationsFinished(): void });
            public constructor();
            public onAnimationsFinished(): void;
          }
          export class ItemAnimatorListener {
            public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemAnimatorListener>;
            /**
             * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$ItemAnimator$ItemAnimatorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onAnimationFinished(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void });
            public constructor();
            public onAnimationFinished(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
          }
          export class ItemHolderInfo {
            public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo>;
            public left: number;
            public top: number;
            public right: number;
            public bottom: number;
            public changeFlags: number;
            public constructor();
            public setFrom(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
            public setFrom(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder, flags: number): androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
          }
        }
        export class ItemAnimatorRestoreListener extends androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemAnimatorListener {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemAnimatorRestoreListener>;
          public onAnimationFinished(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
          public onAnimationFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        }
        export abstract class ItemDecoration {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemDecoration>;
          /** @deprecated */
          public onDraw(c: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView): void;
          public onDrawOver(c: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
          public getItemOffsets(outRect: globalAndroid.graphics.Rect, view: globalAndroid.view.View, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
          public constructor();
          /** @deprecated */
          public onDrawOver(c: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView): void;
          /** @deprecated */
          public getItemOffsets(outRect: globalAndroid.graphics.Rect, itemPosition: number, parent: androidx.recyclerview.widget.RecyclerView): void;
          public onDraw(c: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
        }
        export abstract class LayoutManager {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.LayoutManager>;
          public isAutoMeasureEnabled(): boolean;
          public onDetachedFromWindow(view: androidx.recyclerview.widget.RecyclerView, recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
          public getDecoratedBoundsWithMargins(view: globalAndroid.view.View, outBounds: globalAndroid.graphics.Rect): void;
          public getMinimumWidth(): number;
          public getPosition(view: globalAndroid.view.View): number;
          public stopIgnoringView(view: globalAndroid.view.View): void;
          public onItemsMoved(recyclerView: androidx.recyclerview.widget.RecyclerView, from: number, to: number, itemCount: number): void;
          public supportsPredictiveItemAnimations(): boolean;
          public setItemPrefetchEnabled(enabled: boolean): void;
          public generateLayoutParams(c: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.recyclerview.widget.RecyclerView.LayoutParams;
          public attachView(child: globalAndroid.view.View, index: number): void;
          public onAttachedToWindow(view: androidx.recyclerview.widget.RecyclerView): void;
          public offsetChildrenHorizontal(dx: number): void;
          public setMeasuredDimension(widthSize: number, heightSize: number): void;
          public constructor();
          public getDecoratedBottom(child: globalAndroid.view.View): number;
          public onMeasure(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, widthSpec: number, heightSpec: number): void;
          public getWidthMode(): number;
          public ignoreView(view: globalAndroid.view.View): void;
          public getMinimumHeight(): number;
          public getPaddingTop(): number;
          public detachViewAt(index: number): void;
          public findContainingItemView(view: globalAndroid.view.View): globalAndroid.view.View;
          public getHeightMode(): number;
          public onInitializeAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
          public canScrollVertically(): boolean;
          public getHeight(): number;
          public getLayoutDirection(): number;
          public getPaddingBottom(): number;
          public computeHorizontalScrollExtent(state: androidx.recyclerview.widget.RecyclerView.State): number;
          public getRowCountForAccessibility(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
          public getDecoratedLeft(child: globalAndroid.view.View): number;
          public computeHorizontalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
          public scrollHorizontallyBy(dx: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
          public computeHorizontalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
          public detachAndScrapViewAt(index: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
          public onFocusSearchFailed(focused: globalAndroid.view.View, direction: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): globalAndroid.view.View;
          public onSaveInstanceState(): globalAndroid.os.Parcelable;
          public addDisappearingView(child: globalAndroid.view.View, index: number): void;
          public computeVerticalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
          public getDecoratedMeasuredWidth(child: globalAndroid.view.View): number;
          public onItemsRemoved(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
          public offsetChildrenVertical(dy: number): void;
          public isLayoutReversed(): boolean;
          public moveView(fromIndex: number, toIndex: number): void;
          public setMeasurementCacheEnabled(measurementCacheEnabled: boolean): void;
          public getLeftDecorationWidth(child: globalAndroid.view.View): number;
          public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
          public checkLayoutParams(lp: androidx.recyclerview.widget.RecyclerView.LayoutParams): boolean;
          public performAccessibilityAction(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, action: number, args: globalAndroid.os.Bundle): boolean;
          public requestLayout(): void;
          public startSmoothScroll(smoothScroller: androidx.recyclerview.widget.RecyclerView.SmoothScroller): void;
          public smoothScrollToPosition(recyclerView: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State, position: number): void;
          public getClipToPadding(): boolean;
          public requestSimpleAnimationsInNextLayout(): void;
          public requestChildRectangleOnScreen(parent: androidx.recyclerview.widget.RecyclerView, child: globalAndroid.view.View, rect: globalAndroid.graphics.Rect, immediate: boolean, focusedChildVisible: boolean): boolean;
          public setMeasuredDimension(childrenBounds: globalAndroid.graphics.Rect, wSpec: number, hSpec: number): void;
          public getWidth(): number;
          public static getChildMeasureSpec(parentSize: number, parentMode: number, padding: number, childDimension: number, canScroll: boolean): number;
          public getTopDecorationHeight(child: globalAndroid.view.View): number;
          public computeVerticalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
          public detachAndScrapView(child: globalAndroid.view.View, recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
          public getBottomDecorationHeight(child: globalAndroid.view.View): number;
          public getDecoratedRight(child: globalAndroid.view.View): number;
          public measureChild(child: globalAndroid.view.View, widthUsed: number, heightUsed: number): void;
          public endAnimation(view: globalAndroid.view.View): void;
          public addView(child: globalAndroid.view.View, index: number): void;
          public removeView(child: globalAndroid.view.View): void;
          public attachView(child: globalAndroid.view.View): void;
          public layoutDecoratedWithMargins(child: globalAndroid.view.View, left: number, top: number, right: number, bottom: number): void;
          public getFocusedChild(): globalAndroid.view.View;
          public getDecoratedMeasuredHeight(child: globalAndroid.view.View): number;
          public getChildCount(): number;
          public requestChildRectangleOnScreen(parent: androidx.recyclerview.widget.RecyclerView, child: globalAndroid.view.View, rect: globalAndroid.graphics.Rect, immediate: boolean): boolean;
          public collectInitialPrefetchPositions(adapterItemCount: number, layoutPrefetchRegistry: androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry): void;
          public calculateItemDecorationsForChild(child: globalAndroid.view.View, outRect: globalAndroid.graphics.Rect): void;
          public scrollVerticallyBy(dy: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
          public isLayoutHierarchical(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): boolean;
          public onItemsChanged(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
          public getTransformedBoundingBox(tempRectF: globalAndroid.view.View, childMatrix: boolean, this_: globalAndroid.graphics.Rect): void;
          public postOnAnimation(action: java.lang.Runnable): void;
          public getPaddingLeft(): number;
          public getColumnCountForAccessibility(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
          public performAccessibilityActionForItem(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, view: globalAndroid.view.View, action: number, args: globalAndroid.os.Bundle): boolean;
          public addDisappearingView(child: globalAndroid.view.View): void;
          public onInitializeAccessibilityEvent(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, event: globalAndroid.view.accessibility.AccessibilityEvent): void;
          public assertInLayoutOrScroll(message: string): void;
          public generateDefaultLayoutParams(): androidx.recyclerview.widget.RecyclerView.LayoutParams;
          public removeAndRecycleAllViews(i: androidx.recyclerview.widget.RecyclerView.Recycler): void;
          public findViewByPosition(vh: number): globalAndroid.view.View;
          public getPaddingRight(): number;
          public removeViewAt(index: number): void;
          public getDecoratedTop(child: globalAndroid.view.View): number;
          public onInitializeAccessibilityNodeInfo(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
          public detachView(child: globalAndroid.view.View): void;
          public isViewPartiallyVisible(child: globalAndroid.view.View, completelyVisible: boolean, acceptEndPointInclusion: boolean): boolean;
          public measureChildWithMargins(child: globalAndroid.view.View, widthUsed: number, heightUsed: number): void;
          public onItemsUpdated(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
          /** @deprecated */
          public setAutoMeasureEnabled(enabled: boolean): void;
          public canScrollHorizontally(): boolean;
          public detachAndScrapAttachedViews(i: androidx.recyclerview.widget.RecyclerView.Recycler): void;
          public collectAdjacentPrefetchPositions(dx: number, dy: number, state: androidx.recyclerview.widget.RecyclerView.State, layoutPrefetchRegistry: androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry): void;
          public layoutDecorated(child: globalAndroid.view.View, left: number, top: number, right: number, bottom: number): void;
          public isMeasurementCacheEnabled(): boolean;
          /** @deprecated */
          public onRequestChildFocus(parent: androidx.recyclerview.widget.RecyclerView, child: globalAndroid.view.View, focused: globalAndroid.view.View): boolean;
          public onScrollStateChanged(state: number): void;
          public getPaddingStart(): number;
          public getPaddingEnd(): number;
          public onRequestChildFocus(parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State, child: globalAndroid.view.View, focused: globalAndroid.view.View): boolean;
          public assertNotInLayoutOrScroll(message: string): void;
          public hasFocus(): boolean;
          public scrollToPosition(position: number): void;
          public isAttachedToWindow(): boolean;
          public onLayoutCompleted(state: androidx.recyclerview.widget.RecyclerView.State): void;
          public isFocused(): boolean;
          public generateLayoutParams(lp: globalAndroid.view.ViewGroup.LayoutParams): androidx.recyclerview.widget.RecyclerView.LayoutParams;
          public isSmoothScrolling(): boolean;
          public addView(child: globalAndroid.view.View): void;
          public getBaseline(): number;
          public static chooseSize(spec: number, desired: number, min: number): number;
          public onLayoutChildren(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): void;
          public removeAndRecycleViewAt(index: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
          public removeAndRecycleView(child: globalAndroid.view.View, recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
          public getChildAt(index: number): globalAndroid.view.View;
          /** @deprecated */
          public static getChildMeasureSpec(parentSize: number, padding: number, childDimension: number, canScroll: boolean): number;
          public attachView(child: globalAndroid.view.View, index: number, lp: androidx.recyclerview.widget.RecyclerView.LayoutParams): void;
          public removeDetachedView(child: globalAndroid.view.View): void;
          public onInitializeAccessibilityNodeInfoForItem(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, host: globalAndroid.view.View, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
          public static getProperties(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number): androidx.recyclerview.widget.RecyclerView.LayoutManager.Properties;
          public getSelectionModeForAccessibility(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
          /** @deprecated */
          public onDetachedFromWindow(view: androidx.recyclerview.widget.RecyclerView): void;
          public onAddFocusables(recyclerView: androidx.recyclerview.widget.RecyclerView, views: java.util.ArrayList<globalAndroid.view.View>, direction: number, focusableMode: number): boolean;
          public onItemsUpdated(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number, payload: any): void;
          public removeCallbacks(action: java.lang.Runnable): boolean;
          public onInterceptFocusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
          public removeAllViews(): void;
          public computeVerticalScrollExtent(state: androidx.recyclerview.widget.RecyclerView.State): number;
          public getItemViewType(view: globalAndroid.view.View): number;
          public getItemCount(): number;
          public isItemPrefetchEnabled(): boolean;
          public onItemsAdded(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
          public onAdapterChanged(oldAdapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>, newAdapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>): void;
          public getRightDecorationWidth(child: globalAndroid.view.View): number;
        }
        export module LayoutManager {
          export class LayoutPrefetchRegistry {
            public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry>;
            /**
             * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$LayoutManager$LayoutPrefetchRegistry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { addPosition(param0: number, param1: number): void });
            public constructor();
            public addPosition(param0: number, param1: number): void;
          }
          export class Properties {
            public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.LayoutManager.Properties>;
            public orientation: number;
            public spanCount: number;
            public reverseLayout: boolean;
            public stackFromEnd: boolean;
            public constructor();
          }
        }
        export class LayoutParams {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.LayoutParams>;
          public isItemChanged(): boolean;
          public constructor(source: globalAndroid.view.ViewGroup.LayoutParams);
          public isItemRemoved(): boolean;
          public constructor(c: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
          public viewNeedsUpdate(): boolean;
          public getBindingAdapterPosition(): number;
          /** @deprecated */
          public getViewPosition(): number;
          public constructor(width: number, height: number);
          public getViewLayoutPosition(): number;
          public constructor(source: androidx.recyclerview.widget.RecyclerView.LayoutParams);
          public getAbsoluteAdapterPosition(): number;
          /** @deprecated */
          public getViewAdapterPosition(): number;
          public constructor(source: globalAndroid.view.ViewGroup.MarginLayoutParams);
          public isViewInvalid(): boolean;
        }
        export class OnChildAttachStateChangeListener {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.OnChildAttachStateChangeListener>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$OnChildAttachStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onChildViewAttachedToWindow(param0: globalAndroid.view.View): void; onChildViewDetachedFromWindow(param0: globalAndroid.view.View): void });
          public constructor();
          public onChildViewAttachedToWindow(param0: globalAndroid.view.View): void;
          public onChildViewDetachedFromWindow(param0: globalAndroid.view.View): void;
        }
        export abstract class OnFlingListener {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.OnFlingListener>;
          public constructor();
          public onFling(param0: number, param1: number): boolean;
        }
        export class OnItemTouchListener {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.OnItemTouchListener>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$OnItemTouchListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onInterceptTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: globalAndroid.view.MotionEvent): boolean; onTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: globalAndroid.view.MotionEvent): void; onRequestDisallowInterceptTouchEvent(param0: boolean): void });
          public constructor();
          public onRequestDisallowInterceptTouchEvent(param0: boolean): void;
          public onInterceptTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: globalAndroid.view.MotionEvent): boolean;
          public onTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: globalAndroid.view.MotionEvent): void;
        }
        export abstract class OnScrollListener {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.OnScrollListener>;
          public constructor();
          public onScrollStateChanged(recyclerView: androidx.recyclerview.widget.RecyclerView, newState: number): void;
          public onScrolled(recyclerView: androidx.recyclerview.widget.RecyclerView, dx: number, dy: number): void;
        }
        export class Orientation {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.Orientation>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$Orientation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
        export class RecycledViewPool {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.RecycledViewPool>;
          public putRecycledView(scrap: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
          public constructor();
          public clear(): void;
          public getRecycledViewCount(viewType: number): number;
          public setMaxRecycledViews(viewType: number, max: number): void;
          public getRecycledView(scrapHeap: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
        }
        export module RecycledViewPool {
          export class ScrapData {
            public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.RecycledViewPool.ScrapData>;
          }
        }
        export class Recycler {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.Recycler>;
          public getScrapList(): java.util.List<androidx.recyclerview.widget.RecyclerView.ViewHolder>;
          public bindViewToPosition(rvLayoutParams: globalAndroid.view.View, this_: number): void;
          public convertPreLayoutPositionToPostLayout(position: number): number;
          public recycleView(view: globalAndroid.view.View): void;
          public getViewForPosition(position: number): globalAndroid.view.View;
          public clear(): void;
          public setViewCacheSize(viewCount: number): void;
          public constructor(this$0: androidx.recyclerview.widget.RecyclerView);
        }
        export class RecyclerListener {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.RecyclerListener>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$RecyclerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onViewRecycled(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void });
          public constructor();
          public onViewRecycled(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        }
        export class RecyclerViewDataObserver extends androidx.recyclerview.widget.RecyclerView.AdapterDataObserver {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.RecyclerViewDataObserver>;
          public onChanged(): void;
          public onItemRangeChanged(positionStart: number, itemCount: number, payload: any): void;
          public onItemRangeRemoved(positionStart: number, itemCount: number): void;
          public onStateRestorationPolicyChanged(): void;
          public onItemRangeInserted(positionStart: number, itemCount: number): void;
          public onItemRangeChanged(positionStart: number, itemCount: number): void;
          public onItemRangeMoved(fromPosition: number, toPosition: number, itemCount: number): void;
        }
        export class SavedState {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.SavedState>;
          public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.recyclerview.widget.RecyclerView.SavedState>;
          public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
        }
        export class SimpleOnItemTouchListener extends androidx.recyclerview.widget.RecyclerView.OnItemTouchListener {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.SimpleOnItemTouchListener>;
          public onRequestDisallowInterceptTouchEvent(param0: boolean): void;
          public constructor();
          public onInterceptTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: globalAndroid.view.MotionEvent): boolean;
          public onTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: globalAndroid.view.MotionEvent): void;
          public onInterceptTouchEvent(rv: androidx.recyclerview.widget.RecyclerView, e: globalAndroid.view.MotionEvent): boolean;
          public onRequestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
          public onTouchEvent(rv: androidx.recyclerview.widget.RecyclerView, e: globalAndroid.view.MotionEvent): void;
        }
        export abstract class SmoothScroller {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.SmoothScroller>;
          public computeScrollVectorForPosition(targetPosition: number): globalAndroid.graphics.PointF;
          public getTargetPosition(): number;
          public onSeekTargetStep(param0: number, param1: number, param2: androidx.recyclerview.widget.RecyclerView.State, param3: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
          public getChildCount(): number;
          /** @deprecated */
          public instantScrollToPosition(position: number): void;
          public setTargetPosition(targetPosition: number): void;
          public findViewByPosition(position: number): globalAndroid.view.View;
          public getChildPosition(view: globalAndroid.view.View): number;
          public onStart(): void;
          public getLayoutManager(): androidx.recyclerview.widget.RecyclerView.LayoutManager;
          public onTargetFound(param0: globalAndroid.view.View, param1: androidx.recyclerview.widget.RecyclerView.State, param2: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
          public constructor();
          public onChildAttachedToWindow(child: globalAndroid.view.View): void;
          public isPendingInitialRun(): boolean;
          public isRunning(): boolean;
          public stop(): void;
          public normalize(scrollVector: globalAndroid.graphics.PointF): void;
          public onStop(): void;
        }
        export module SmoothScroller {
          export class Action {
            public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action>;
            public static UNDEFINED_DURATION: number = -2147483648;
            public getInterpolator(): globalAndroid.view.animation.Interpolator;
            public update(dx: number, dy: number, duration: number, interpolator: globalAndroid.view.animation.Interpolator): void;
            public getDuration(): number;
            public setDuration(duration: number): void;
            public getDx(): number;
            public setDx(dx: number): void;
            public jumpTo(targetPosition: number): void;
            public setDy(dy: number): void;
            public constructor(dx: number, dy: number, duration: number);
            public getDy(): number;
            public constructor(dx: number, dy: number, duration: number, interpolator: globalAndroid.view.animation.Interpolator);
            public constructor(dx: number, dy: number);
            public setInterpolator(interpolator: globalAndroid.view.animation.Interpolator): void;
          }
          export class ScrollVectorProvider {
            public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.SmoothScroller.ScrollVectorProvider>;
            /**
             * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$SmoothScroller$ScrollVectorProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { computeScrollVectorForPosition(param0: number): globalAndroid.graphics.PointF });
            public constructor();
            public computeScrollVectorForPosition(param0: number): globalAndroid.graphics.PointF;
          }
        }
        export class State {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.State>;
          public getRemainingScrollHorizontal(): number;
          public isMeasuring(): boolean;
          public willRunSimpleAnimations(): boolean;
          public didStructureChange(): boolean;
          public remove(resourceId: number): void;
          public isPreLayout(): boolean;
          public willRunPredictiveAnimations(): boolean;
          public getRemainingScrollVertical(): number;
          public toString(): string;
          public constructor();
          public hasTargetScrollPosition(): boolean;
          public get(resourceId: number): any;
          public getTargetScrollPosition(): number;
          public getItemCount(): number;
          public put(resourceId: number, data: any): void;
        }
        export class StretchEdgeEffectFactory extends androidx.recyclerview.widget.RecyclerView.EdgeEffectFactory {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.StretchEdgeEffectFactory>;
          public createEdgeEffect(view: androidx.recyclerview.widget.RecyclerView, direction: number): globalAndroid.widget.EdgeEffect;
        }
        export abstract class ViewCacheExtension {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ViewCacheExtension>;
          public constructor();
          public getViewForPositionAndType(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: number, param2: number): globalAndroid.view.View;
        }
        export class ViewFlinger {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ViewFlinger>;
          public run(): void;
          public smoothScrollBy(dx: number, dy: number, duration: number, interpolator: globalAndroid.view.animation.Interpolator): void;
          public fling(velocityX: number, velocityY: number): void;
          public stop(): void;
        }
        export abstract class ViewHolder {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ViewHolder>;
          public itemView: globalAndroid.view.View;
          public setIsRecyclable(recyclable: boolean): void;
          public getBindingAdapterPosition(): number;
          public getItemId(): number;
          /** @deprecated */
          public getAdapterPosition(): number;
          public getLayoutPosition(): number;
          public isRecyclable(): boolean;
          public getItemViewType(): number;
          public constructor(itemView: globalAndroid.view.View);
          public toString(): string;
          /** @deprecated */
          public getPosition(): number;
          public getAbsoluteAdapterPosition(): number;
          public getBindingAdapter(): androidx.recyclerview.widget.RecyclerView.Adapter<any>;
          public getOldPosition(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class RecyclerViewAccessibilityDelegate {
        public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerViewAccessibilityDelegate>;
        public getItemDelegate(): androidx.core.view.AccessibilityDelegateCompat;
        public onInitializeAccessibilityEvent(this_: globalAndroid.view.View, host: globalAndroid.view.accessibility.AccessibilityEvent): void;
        public performAccessibilityAction(host: globalAndroid.view.View, action: number, args: globalAndroid.os.Bundle): boolean;
        public constructor(recyclerView: androidx.recyclerview.widget.RecyclerView);
        public onInitializeAccessibilityNodeInfo(host: globalAndroid.view.View, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
      }
      export module RecyclerViewAccessibilityDelegate {
        export class ItemDelegate {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerViewAccessibilityDelegate.ItemDelegate>;
          public constructor(recyclerViewDelegate: androidx.recyclerview.widget.RecyclerViewAccessibilityDelegate);
          public onPopulateAccessibilityEvent(host: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): void;
          public onRequestSendAccessibilityEvent(host: globalAndroid.view.ViewGroup, child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
          public performAccessibilityAction(this_: globalAndroid.view.View, host: number, action: globalAndroid.os.Bundle): boolean;
          public dispatchPopulateAccessibilityEvent(host: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
          public getAccessibilityNodeProvider(host: globalAndroid.view.View): androidx.core.view.accessibility.AccessibilityNodeProviderCompat;
          public onInitializeAccessibilityEvent(host: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): void;
          public sendAccessibilityEvent(host: globalAndroid.view.View, eventType: number): void;
          public sendAccessibilityEventUnchecked(host: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): void;
          public onInitializeAccessibilityNodeInfo(this_: globalAndroid.view.View, host: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class ScrollbarHelper {
        public static class: java.lang.Class<androidx.recyclerview.widget.ScrollbarHelper>;
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export abstract class SimpleItemAnimator extends androidx.recyclerview.widget.RecyclerView.ItemAnimator {
        public static class: java.lang.Class<androidx.recyclerview.widget.SimpleItemAnimator>;
        public onRemoveFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public dispatchRemoveFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public onMoveFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public canReuseUpdatedViewHolder(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
        public animateAdd(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
        public onRemoveStarting(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public setSupportsChangeAnimations(supportsChangeAnimations: boolean): void;
        public onMoveStarting(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public animatePersistence(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, preLayoutInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, postLayoutInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
        public dispatchRemoveStarting(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public animateAppearance(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, preLayoutInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, postLayoutInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
        public constructor();
        public animateChange(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: number, param3: number, param4: number, param5: number): boolean;
        public dispatchMoveFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public dispatchAddFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public animateDisappearance(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, preLayoutInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, postLayoutInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
        public dispatchChangeStarting(item: androidx.recyclerview.widget.RecyclerView.ViewHolder, oldItem: boolean): void;
        public onAddFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public onChangeStarting(item: androidx.recyclerview.widget.RecyclerView.ViewHolder, oldItem: boolean): void;
        public animateChange(toTop: androidx.recyclerview.widget.RecyclerView.ViewHolder, this_: androidx.recyclerview.widget.RecyclerView.ViewHolder, oldHolder: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, newHolder: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
        public canReuseUpdatedViewHolder(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, payloads: java.util.List<any>): boolean;
        public animateRemove(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
        public getSupportsChangeAnimations(): boolean;
        public dispatchChangeFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder, oldItem: boolean): void;
        public dispatchMoveStarting(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public dispatchAddStarting(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public onChangeFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder, oldItem: boolean): void;
        public animateMove(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number, param2: number, param3: number, param4: number): boolean;
        public onAddStarting(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export abstract class SnapHelper extends androidx.recyclerview.widget.RecyclerView.OnFlingListener {
        public static class: java.lang.Class<androidx.recyclerview.widget.SnapHelper>;
        public calculateDistanceToFinalSnap(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager, param1: globalAndroid.view.View): androidNative.Array<number>;
        public findSnapView(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager): globalAndroid.view.View;
        /** @deprecated */
        public createSnapScroller(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager): androidx.recyclerview.widget.LinearSmoothScroller;
        public onFling(velocityX: number, velocityY: number): boolean;
        public calculateScrollDistance(velocityX: number, velocityY: number): androidNative.Array<number>;
        public attachToRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
        public createScroller(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager): androidx.recyclerview.widget.RecyclerView.SmoothScroller;
        public findTargetSnapPosition(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager, param1: number, param2: number): number;
        public constructor();
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class SortedList<T> extends java.lang.Object {
        public static class: java.lang.Class<androidx.recyclerview.widget.SortedList<any>>;
        public static INVALID_POSITION: number = -1;
        public addAll(items: androidNative.Array<T>): void;
        public updateItemAt(this_: number, index: T): void;
        public constructor(klass: java.lang.Class<T>, callback: androidx.recyclerview.widget.SortedList.Callback<T>);
        public replaceAll(items: java.util.Collection<T>): void;
        public recalculatePositionOfItemAt(index: number): void;
        public add(item: T): number;
        public get(index: number): T;
        public addAll(items: androidNative.Array<T>, mayModifyInput: boolean): void;
        public removeItemAt(index: number): T;
        public size(): number;
        public replaceAll(items: androidNative.Array<T>): void;
        public indexOf(this_: T): number;
        public replaceAll(items: androidNative.Array<T>, mayModifyInput: boolean): void;
        public addAll(items: java.util.Collection<T>): void;
        public endBatchedUpdates(): void;
        public remove(item: T): boolean;
        public constructor(klass: java.lang.Class<T>, callback: androidx.recyclerview.widget.SortedList.Callback<T>, initialCapacity: number);
        public clear(): void;
        public beginBatchedUpdates(): void;
      }
      export module SortedList {
        export class BatchedCallback<T2> extends androidx.recyclerview.widget.SortedList.Callback<any> {
          public static class: java.lang.Class<androidx.recyclerview.widget.SortedList.BatchedCallback<any>>;
          public onChanged(position: number, count: number, payload: any): void;
          public compare(o1: any, o2: any): number;
          public onMoved(fromPosition: number, toPosition: number): void;
          public onChanged(position: number, count: number): void;
          public constructor(wrappedCallback: androidx.recyclerview.widget.SortedList.Callback<any>);
          public dispatchLastEvent(): void;
          public onInserted(param0: number, param1: number): void;
          public onChanged(param0: number, param1: number, param2: any): void;
          public onRemoved(position: number, count: number): void;
          public onInserted(position: number, count: number): void;
          public constructor();
          public areContentsTheSame(oldItem: any, newItem: any): boolean;
          public onRemoved(param0: number, param1: number): void;
          public areItemsTheSame(item1: any, item2: any): boolean;
          public getChangePayload(item1: any, item2: any): any;
          public onMoved(param0: number, param1: number): void;
        }
        export abstract class Callback<T2> extends java.lang.Object {
          public static class: java.lang.Class<androidx.recyclerview.widget.SortedList.Callback<any>>;
          public compare(param0: T2, param1: T2): number;
          public onChanged(position: number, count: number, payload: any): void;
          public areItemsTheSame(param0: T2, param1: T2): boolean;
          public onChanged(param0: number, param1: number): void;
          public areContentsTheSame(param0: T2, param1: T2): boolean;
          public constructor();
          public onRemoved(param0: number, param1: number): void;
          public getChangePayload(item1: T2, item2: T2): any;
          public onInserted(param0: number, param1: number): void;
          public onChanged(param0: number, param1: number, param2: any): void;
          public onMoved(param0: number, param1: number): void;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export abstract class SortedListAdapterCallback<T2> extends androidx.recyclerview.widget.SortedList.Callback<any> {
        public static class: java.lang.Class<androidx.recyclerview.widget.SortedListAdapterCallback<any>>;
        public onInserted(param0: number, param1: number): void;
        public onInserted(position: number, count: number): void;
        public onChanged(position: number, count: number): void;
        public onRemoved(position: number, count: number): void;
        public onChanged(position: number, count: number, payload: any): void;
        public onChanged(param0: number, param1: number, param2: any): void;
        public onMoved(param0: number, param1: number): void;
        public constructor(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>);
        public onRemoved(param0: number, param1: number): void;
        public constructor();
        public onMoved(fromPosition: number, toPosition: number): void;
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class StableIdStorage {
        public static class: java.lang.Class<androidx.recyclerview.widget.StableIdStorage>;
        /**
         * Constructs a new instance of the androidx.recyclerview.widget.StableIdStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { createStableIdLookup(): androidx.recyclerview.widget.StableIdStorage.StableIdLookup });
        public constructor();
        public createStableIdLookup(): androidx.recyclerview.widget.StableIdStorage.StableIdLookup;
      }
      export module StableIdStorage {
        export class IsolatedStableIdStorage extends androidx.recyclerview.widget.StableIdStorage {
          public static class: java.lang.Class<androidx.recyclerview.widget.StableIdStorage.IsolatedStableIdStorage>;
          public constructor();
          public createStableIdLookup(): androidx.recyclerview.widget.StableIdStorage.StableIdLookup;
        }
        export module IsolatedStableIdStorage {
          export class WrapperStableIdLookup extends androidx.recyclerview.widget.StableIdStorage.StableIdLookup {
            public static class: java.lang.Class<androidx.recyclerview.widget.StableIdStorage.IsolatedStableIdStorage.WrapperStableIdLookup>;
            public localToGlobal(localId: number): number;
            public localToGlobal(param0: number): number;
          }
        }
        export class NoStableIdStorage extends androidx.recyclerview.widget.StableIdStorage {
          public static class: java.lang.Class<androidx.recyclerview.widget.StableIdStorage.NoStableIdStorage>;
          public constructor();
          public createStableIdLookup(): androidx.recyclerview.widget.StableIdStorage.StableIdLookup;
        }
        export class SharedPoolStableIdStorage extends androidx.recyclerview.widget.StableIdStorage {
          public static class: java.lang.Class<androidx.recyclerview.widget.StableIdStorage.SharedPoolStableIdStorage>;
          public constructor();
          public createStableIdLookup(): androidx.recyclerview.widget.StableIdStorage.StableIdLookup;
        }
        export class StableIdLookup {
          public static class: java.lang.Class<androidx.recyclerview.widget.StableIdStorage.StableIdLookup>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.StableIdStorage$StableIdLookup interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { localToGlobal(param0: number): number });
          public constructor();
          public localToGlobal(param0: number): number;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class StaggeredGridLayoutManager extends androidx.recyclerview.widget.RecyclerView.LayoutManager implements androidx.recyclerview.widget.RecyclerView.SmoothScroller.ScrollVectorProvider {
        public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager>;
        public static HORIZONTAL: number = 0;
        public static VERTICAL: number = 1;
        public static GAP_HANDLING_NONE: number = 0;
        public static GAP_HANDLING_LAZY: number = 1;
        public static GAP_HANDLING_MOVE_ITEMS_BETWEEN_SPANS: number = 2;
        public getReverseLayout(): boolean;
        public isLayoutReversed(): boolean;
        public collectAdjacentPrefetchPositions(i: number, i: number, this_: androidx.recyclerview.widget.RecyclerView.State, dx: androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry): void;
        public generateLayoutParams(lp: globalAndroid.view.ViewGroup.LayoutParams): androidx.recyclerview.widget.RecyclerView.LayoutParams;
        public getRowCountForAccessibility(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
        public onDetachedFromWindow(this_: androidx.recyclerview.widget.RecyclerView, view: androidx.recyclerview.widget.RecyclerView.Recycler): void;
        public setMeasuredDimension(width: globalAndroid.graphics.Rect, height: number, usedWidth: number): void;
        public onItemsMoved(recyclerView: androidx.recyclerview.widget.RecyclerView, from: number, to: number, itemCount: number): void;
        public assertNotInLayoutOrScroll(message: string): void;
        public constructor();
        public scrollVerticallyBy(dy: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
        public findFirstVisibleItemPositions(this_: androidNative.Array<number>): androidNative.Array<number>;
        public canScrollHorizontally(): boolean;
        public setSpanCount(this_: number): void;
        public onInitializeAccessibilityEvent(end: globalAndroid.view.accessibility.AccessibilityEvent): void;
        public getColumnCountForAccessibility(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
        public isAutoMeasureEnabled(): boolean;
        public scrollToPositionWithOffset(position: number, offset: number): void;
        public generateDefaultLayoutParams(): androidx.recyclerview.widget.RecyclerView.LayoutParams;
        public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
        public onInitializeAccessibilityNodeInfo(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
        public computeVerticalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
        public onInitializeAccessibilityNodeInfoForItem(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, host: globalAndroid.view.View, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
        public onInitializeAccessibilityEvent(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, event: globalAndroid.view.accessibility.AccessibilityEvent): void;
        public canScrollVertically(): boolean;
        public onLayoutChildren(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): void;
        public invalidateSpanAssignments(): void;
        public computeHorizontalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
        public generateLayoutParams(c: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.recyclerview.widget.RecyclerView.LayoutParams;
        public computeScrollVectorForPosition(param0: number): globalAndroid.graphics.PointF;
        public onScrollStateChanged(state: number): void;
        public findFirstCompletelyVisibleItemPositions(this_: androidNative.Array<number>): androidNative.Array<number>;
        public onItemsUpdated(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number, payload: any): void;
        public setMeasuredDimension(widthSize: number, heightSize: number): void;
        public checkLayoutParams(lp: androidx.recyclerview.widget.RecyclerView.LayoutParams): boolean;
        public getGapStrategy(): number;
        public onLayoutCompleted(state: androidx.recyclerview.widget.RecyclerView.State): void;
        public scrollToPosition(position: number): void;
        public onAdapterChanged(this_: androidx.recyclerview.widget.RecyclerView.Adapter<any>, oldAdapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>): void;
        public onItemsAdded(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
        public getSpanCount(): number;
        public getOrientation(): number;
        public offsetChildrenVertical(this_: number): void;
        /** @deprecated */
        public onDetachedFromWindow(view: androidx.recyclerview.widget.RecyclerView): void;
        public setReverseLayout(reverseLayout: boolean): void;
        public computeScrollVectorForPosition(targetPosition: number): globalAndroid.graphics.PointF;
        public setOrientation(orientation: number): void;
        public setGapStrategy(gapStrategy: number): void;
        public findLastCompletelyVisibleItemPositions(this_: androidNative.Array<number>): androidNative.Array<number>;
        public onFocusSearchFailed(view: globalAndroid.view.View, view: number, i: androidx.recyclerview.widget.RecyclerView.Recycler, view: androidx.recyclerview.widget.RecyclerView.State): globalAndroid.view.View;
        public computeVerticalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
        public findLastVisibleItemPositions(this_: androidNative.Array<number>): androidNative.Array<number>;
        public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
        public onSaveInstanceState(): globalAndroid.os.Parcelable;
        public computeHorizontalScrollExtent(state: androidx.recyclerview.widget.RecyclerView.State): number;
        public scrollHorizontallyBy(dx: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
        public smoothScrollToPosition(recyclerView: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State, position: number): void;
        public computeVerticalScrollExtent(state: androidx.recyclerview.widget.RecyclerView.State): number;
        public offsetChildrenHorizontal(this_: number): void;
        public supportsPredictiveItemAnimations(): boolean;
        public onItemsRemoved(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
        public onItemsChanged(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
        public computeHorizontalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
        public constructor(spanCount: number, orientation: number);
        public onItemsUpdated(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
      }
      export module StaggeredGridLayoutManager {
        export class AnchorInfo {
          public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager.AnchorInfo>;
        }
        export class LayoutParams extends androidx.recyclerview.widget.RecyclerView.LayoutParams {
          public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager.LayoutParams>;
          public static INVALID_SPAN_ID: number = -1;
          public constructor(source: globalAndroid.view.ViewGroup.LayoutParams);
          public constructor(c: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
          public constructor(source: androidx.recyclerview.widget.RecyclerView.LayoutParams);
          public getSpanIndex(): number;
          public setFullSpan(fullSpan: boolean): void;
          public isFullSpan(): boolean;
          public constructor(width: number, height: number);
          public constructor(source: globalAndroid.view.ViewGroup.MarginLayoutParams);
        }
        export class LazySpanLookup {
          public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager.LazySpanLookup>;
          public getFullSpanItem(i: number): androidx.recyclerview.widget.StaggeredGridLayoutManager.LazySpanLookup.FullSpanItem;
          public addFullSpanItem(i: androidx.recyclerview.widget.StaggeredGridLayoutManager.LazySpanLookup.FullSpanItem): void;
          public getFirstFullSpanItemInRange(i: number, this_: number, minPos: number, maxPos: boolean): androidx.recyclerview.widget.StaggeredGridLayoutManager.LazySpanLookup.FullSpanItem;
        }
        export module LazySpanLookup {
          export class FullSpanItem {
            public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager.LazySpanLookup.FullSpanItem>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.recyclerview.widget.StaggeredGridLayoutManager.LazySpanLookup.FullSpanItem>;
            public describeContents(): number;
            public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
            public toString(): string;
          }
        }
        export class SavedState {
          public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager.SavedState>;
          public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.recyclerview.widget.StaggeredGridLayoutManager.SavedState>;
          public constructor();
          public describeContents(): number;
          public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
          public constructor(other: androidx.recyclerview.widget.StaggeredGridLayoutManager.SavedState);
        }
        export class Span {
          public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager.Span>;
          public findFirstVisibleItemPosition(): number;
          public findLastPartiallyVisibleItemPosition(): number;
          public findLastVisibleItemPosition(): number;
          public getFocusableViewAfter(i: number, limit: number): globalAndroid.view.View;
          public findFirstPartiallyVisibleItemPosition(): number;
          public findFirstCompletelyVisibleItemPosition(): number;
          public findLastCompletelyVisibleItemPosition(): number;
          public getDeletedSize(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class ThreadUtil<T> extends java.lang.Object {
        public static class: java.lang.Class<androidx.recyclerview.widget.ThreadUtil<any>>;
        /**
         * Constructs a new instance of the androidx.recyclerview.widget.ThreadUtil<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getMainThreadProxy(param0: androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<T>): androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<T>; getBackgroundProxy(param0: androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<T>): androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<T> });
        public constructor();
        public getBackgroundProxy(param0: androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<T>): androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<T>;
        public getMainThreadProxy(param0: androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<T>): androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<T>;
      }
      export module ThreadUtil {
        export class BackgroundCallback<T> extends java.lang.Object {
          public static class: java.lang.Class<androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<any>>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.ThreadUtil$BackgroundCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { refresh(param0: number): void; updateRange(param0: number, param1: number, param2: number, param3: number, param4: number): void; loadTile(param0: number, param1: number): void; recycleTile(param0: androidx.recyclerview.widget.TileList.Tile<T>): void });
          public constructor();
          public recycleTile(param0: androidx.recyclerview.widget.TileList.Tile<T>): void;
          public updateRange(param0: number, param1: number, param2: number, param3: number, param4: number): void;
          public refresh(param0: number): void;
          public loadTile(param0: number, param1: number): void;
        }
        export class MainThreadCallback<T> extends java.lang.Object {
          public static class: java.lang.Class<androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<any>>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.ThreadUtil$MainThreadCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { updateItemCount(param0: number, param1: number): void; addTile(param0: number, param1: androidx.recyclerview.widget.TileList.Tile<T>): void; removeTile(param0: number, param1: number): void });
          public constructor();
          public addTile(param0: number, param1: androidx.recyclerview.widget.TileList.Tile<T>): void;
          public removeTile(param0: number, param1: number): void;
          public updateItemCount(param0: number, param1: number): void;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class TileList<T> extends java.lang.Object {
        public static class: java.lang.Class<androidx.recyclerview.widget.TileList<any>>;
        public getItemAt(index: number): T;
        public removeAtPos(startPosition: number): androidx.recyclerview.widget.TileList.Tile<T>;
        public addOrReplace(newTile: androidx.recyclerview.widget.TileList.Tile<T>): androidx.recyclerview.widget.TileList.Tile<T>;
        public clear(): void;
        public constructor(tileSize: number);
        public size(): number;
        public getAtIndex(index: number): androidx.recyclerview.widget.TileList.Tile<T>;
      }
      export module TileList {
        export class Tile<T> extends java.lang.Object {
          public static class: java.lang.Class<androidx.recyclerview.widget.TileList.Tile<any>>;
          public mItems: androidNative.Array<T>;
          public mStartPosition: number;
          public mItemCount: number;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class ViewBoundsCheck {
        public static class: java.lang.Class<androidx.recyclerview.widget.ViewBoundsCheck>;
      }
      export module ViewBoundsCheck {
        export class BoundFlags {
          public static class: java.lang.Class<androidx.recyclerview.widget.ViewBoundsCheck.BoundFlags>;
        }
        export class Callback {
          public static class: java.lang.Class<androidx.recyclerview.widget.ViewBoundsCheck.Callback>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.ViewBoundsCheck$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getChildAt(param0: number): globalAndroid.view.View; getParentStart(): number; getParentEnd(): number; getChildStart(param0: globalAndroid.view.View): number; getChildEnd(param0: globalAndroid.view.View): number });
          public constructor();
          public getChildAt(param0: number): globalAndroid.view.View;
          public getChildStart(param0: globalAndroid.view.View): number;
          public getParentEnd(): number;
          public getChildEnd(param0: globalAndroid.view.View): number;
          public getParentStart(): number;
        }
        export class ViewBounds {
          public static class: java.lang.Class<androidx.recyclerview.widget.ViewBoundsCheck.ViewBounds>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.ViewBoundsCheck$ViewBounds interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class ViewInfoStore {
        public static class: java.lang.Class<androidx.recyclerview.widget.ViewInfoStore>;
        public onViewDetached(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
      }
      export module ViewInfoStore {
        export class InfoRecord {
          public static class: java.lang.Class<androidx.recyclerview.widget.ViewInfoStore.InfoRecord>;
        }
        export class ProcessCallback {
          public static class: java.lang.Class<androidx.recyclerview.widget.ViewInfoStore.ProcessCallback>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.ViewInfoStore$ProcessCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            processDisappeared(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): void;
            processAppeared(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): void;
            processPersistent(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): void;
            unused(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
          });
          public constructor();
          public processDisappeared(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): void;
          public processAppeared(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): void;
          public processPersistent(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): void;
          public unused(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class ViewTypeStorage {
        public static class: java.lang.Class<androidx.recyclerview.widget.ViewTypeStorage>;
        /**
         * Constructs a new instance of the androidx.recyclerview.widget.ViewTypeStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getWrapperForGlobalType(param0: number): androidx.recyclerview.widget.NestedAdapterWrapper; createViewTypeWrapper(param0: androidx.recyclerview.widget.NestedAdapterWrapper): androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup });
        public constructor();
        public createViewTypeWrapper(param0: androidx.recyclerview.widget.NestedAdapterWrapper): androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup;
        public getWrapperForGlobalType(param0: number): androidx.recyclerview.widget.NestedAdapterWrapper;
      }
      export module ViewTypeStorage {
        export class IsolatedViewTypeStorage extends androidx.recyclerview.widget.ViewTypeStorage {
          public static class: java.lang.Class<androidx.recyclerview.widget.ViewTypeStorage.IsolatedViewTypeStorage>;
          public getWrapperForGlobalType(globalViewType: number): androidx.recyclerview.widget.NestedAdapterWrapper;
          public getWrapperForGlobalType(param0: number): androidx.recyclerview.widget.NestedAdapterWrapper;
          public constructor();
          public createViewTypeWrapper(wrapper: androidx.recyclerview.widget.NestedAdapterWrapper): androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup;
          public createViewTypeWrapper(param0: androidx.recyclerview.widget.NestedAdapterWrapper): androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup;
        }
        export module IsolatedViewTypeStorage {
          export class WrapperViewTypeLookup extends androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup {
            public static class: java.lang.Class<androidx.recyclerview.widget.ViewTypeStorage.IsolatedViewTypeStorage.WrapperViewTypeLookup>;
            public globalToLocal(globalType: number): number;
            public globalToLocal(param0: number): number;
            public localToGlobal(param0: number): number;
            public localToGlobal(localType: number): number;
            public dispose(): void;
          }
        }
        export class SharedIdRangeViewTypeStorage extends androidx.recyclerview.widget.ViewTypeStorage {
          public static class: java.lang.Class<androidx.recyclerview.widget.ViewTypeStorage.SharedIdRangeViewTypeStorage>;
          public getWrapperForGlobalType(globalViewType: number): androidx.recyclerview.widget.NestedAdapterWrapper;
          public getWrapperForGlobalType(param0: number): androidx.recyclerview.widget.NestedAdapterWrapper;
          public constructor();
          public createViewTypeWrapper(wrapper: androidx.recyclerview.widget.NestedAdapterWrapper): androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup;
          public createViewTypeWrapper(param0: androidx.recyclerview.widget.NestedAdapterWrapper): androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup;
        }
        export module SharedIdRangeViewTypeStorage {
          export class WrapperViewTypeLookup extends androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup {
            public static class: java.lang.Class<androidx.recyclerview.widget.ViewTypeStorage.SharedIdRangeViewTypeStorage.WrapperViewTypeLookup>;
            public globalToLocal(globalType: number): number;
            public globalToLocal(param0: number): number;
            public localToGlobal(param0: number): number;
            public localToGlobal(localType: number): number;
            public dispose(): void;
          }
        }
        export class ViewTypeLookup {
          public static class: java.lang.Class<androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.ViewTypeStorage$ViewTypeLookup interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { localToGlobal(param0: number): number; globalToLocal(param0: number): number; dispose(): void });
          public constructor();
          public dispose(): void;
          public localToGlobal(param0: number): number;
          public globalToLocal(param0: number): number;
        }
      }
    }
  }
}

//Generics information:
//androidx.recyclerview.widget.AsyncDifferConfig:1
//androidx.recyclerview.widget.AsyncDifferConfig.Builder:1
//androidx.recyclerview.widget.AsyncListDiffer:1
//androidx.recyclerview.widget.AsyncListDiffer.ListListener:1
//androidx.recyclerview.widget.AsyncListUtil:1
//androidx.recyclerview.widget.AsyncListUtil.DataCallback:1
//androidx.recyclerview.widget.DiffUtil.ItemCallback:1
//androidx.recyclerview.widget.ListAdapter:2
//androidx.recyclerview.widget.MessageThreadUtil:1
//androidx.recyclerview.widget.RecyclerView.Adapter:1
//androidx.recyclerview.widget.SortedList:1
//androidx.recyclerview.widget.SortedList.BatchedCallback:1
//androidx.recyclerview.widget.SortedList.Callback:1
//androidx.recyclerview.widget.SortedListAdapterCallback:1
//androidx.recyclerview.widget.ThreadUtil:1
//androidx.recyclerview.widget.ThreadUtil.BackgroundCallback:1
//androidx.recyclerview.widget.ThreadUtil.MainThreadCallback:1
//androidx.recyclerview.widget.TileList:1
//androidx.recyclerview.widget.TileList.Tile:1
