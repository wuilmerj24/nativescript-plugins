declare module com {
  export module bumptech {
    export module glide {
      export module disklrucache {
        export class DiskLruCache {
          public static class: java.lang.Class<com.bumptech.glide.disklrucache.DiskLruCache>;
          public static open(journalFile: java.io.File, journalIsCorrupt: number, directory: number, appVersion: number): com.bumptech.glide.disklrucache.DiskLruCache;
          public getDirectory(): java.io.File;
          public delete(): void;
          public get(this_: string): com.bumptech.glide.disklrucache.DiskLruCache.Value;
          public close(): void;
          public setMaxSize(maxSize: number): void;
          public getMaxSize(): number;
          public size(): number;
          public flush(): void;
          public remove(i: string): boolean;
          public edit(key: string): com.bumptech.glide.disklrucache.DiskLruCache.Editor;
          public isClosed(): boolean;
        }
        export module DiskLruCache {
          export class DiskLruCacheThreadFactory {
            public static class: java.lang.Class<com.bumptech.glide.disklrucache.DiskLruCache.DiskLruCacheThreadFactory>;
            public newThread(runnable: java.lang.Runnable): java.lang.Thread;
          }
          export class Editor {
            public static class: java.lang.Class<com.bumptech.glide.disklrucache.DiskLruCache.Editor>;
            public getFile(this_: number): java.io.File;
            public set(this_: number, index: string): void;
            public getString(index: number): string;
            public commit(): void;
            public abortUnlessCommitted(): void;
            public abort(): void;
          }
          export class Entry {
            public static class: java.lang.Class<com.bumptech.glide.disklrucache.DiskLruCache.Entry>;
            public getLengths(): string;
            public getDirtyFile(i: number): java.io.File;
            public getCleanFile(i: number): java.io.File;
          }
          export class Value {
            public static class: java.lang.Class<com.bumptech.glide.disklrucache.DiskLruCache.Value>;
            public getString(index: number): string;
            public getFile(index: number): java.io.File;
            public getLength(index: number): number;
            public edit(): com.bumptech.glide.disklrucache.DiskLruCache.Editor;
          }
        }
      }
    }
  }
}

declare module com {
  export module bumptech {
    export module glide {
      export module disklrucache {
        export class StrictLineReader {
          public static class: java.lang.Class<com.bumptech.glide.disklrucache.StrictLineReader>;
          public close(): void;
        }
      }
    }
  }
}

declare module com {
  export module bumptech {
    export module glide {
      export module disklrucache {
        export class Util {
          public static class: java.lang.Class<com.bumptech.glide.disklrucache.Util>;
        }
      }
    }
  }
}

//Generics information:
