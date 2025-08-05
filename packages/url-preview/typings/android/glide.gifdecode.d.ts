
declare module com {
    export module bumptech {
        export module glide {
            export module gifdecoder {
                export class GifDecoder {
                    public static class: java.lang.Class<com.bumptech.glide.gifdecoder.GifDecoder>;
                    /**
                     * Constructs a new instance of the com.bumptech.glide.gifdecoder.GifDecoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        getWidth(): number;
                        getHeight(): number;
                        getData(): java.nio.ByteBuffer;
                        getStatus(): number;
                        advance(): void;
                        getDelay(param0: number): number;
                        getNextDelay(): number;
                        getFrameCount(): number;
                        getCurrentFrameIndex(): number;
                        resetFrameIndex(): void;
                        getLoopCount(): number;
                        getNetscapeLoopCount(): number;
                        getTotalIterationCount(): number;
                        getByteSize(): number;
                        getNextFrame(): globalAndroid.graphics.Bitmap;
                        read(param0: java.io.InputStream, param1: number): number;
                        clear(): void;
                        setData(param0: com.bumptech.glide.gifdecoder.GifHeader, param1: androidNative.Array<number>): void;
                        setData(param0: com.bumptech.glide.gifdecoder.GifHeader, param1: java.nio.ByteBuffer): void;
                        setData(param0: com.bumptech.glide.gifdecoder.GifHeader, param1: java.nio.ByteBuffer, param2: number): void;
                        read(param0: androidNative.Array<number>): number;
                        setDefaultBitmapConfig(param0: globalAndroid.graphics.Bitmap.Config): void;
                    });
                    public constructor();
                    public static STATUS_FORMAT_ERROR: number = 1;
                    public static STATUS_OK: number = 0;
                    public static TOTAL_ITERATION_COUNT_FOREVER: number = 0;
                    public static STATUS_PARTIAL_DECODE: number = 3;
                    public static STATUS_OPEN_ERROR: number = 2;
                    public setData(param0: com.bumptech.glide.gifdecoder.GifHeader, param1: java.nio.ByteBuffer, param2: number): void;
                    public getCurrentFrameIndex(): number;
                    public getHeight(): number;
                    /** @deprecated */
                    public getLoopCount(): number;
                    public getWidth(): number;
                    public getNextDelay(): number;
                    public setData(param0: com.bumptech.glide.gifdecoder.GifHeader, param1: java.nio.ByteBuffer): void;
                    public getDelay(param0: number): number;
                    public setData(param0: com.bumptech.glide.gifdecoder.GifHeader, param1: androidNative.Array<number>): void;
                    public setDefaultBitmapConfig(param0: globalAndroid.graphics.Bitmap.Config): void;
                    public getNetscapeLoopCount(): number;
                    public advance(): void;
                    public clear(): void;
                    public resetFrameIndex(): void;
                    public getTotalIterationCount(): number;
                    public getNextFrame(): globalAndroid.graphics.Bitmap;
                    public getFrameCount(): number;
                    public getData(): java.nio.ByteBuffer;
                    public read(param0: java.io.InputStream, param1: number): number;
                    public read(param0: androidNative.Array<number>): number;
                    public getStatus(): number;
                    public getByteSize(): number;
                }
                export module GifDecoder {
                    export class BitmapProvider {
                        public static class: java.lang.Class<com.bumptech.glide.gifdecoder.GifDecoder.BitmapProvider>;
                        /**
                         * Constructs a new instance of the com.bumptech.glide.gifdecoder.GifDecoder$BitmapProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            obtain(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
                            release(param0: globalAndroid.graphics.Bitmap): void;
                            obtainByteArray(param0: number): androidNative.Array<number>;
                            release(param0: androidNative.Array<number>): void;
                            obtainIntArray(param0: number): androidNative.Array<number>;
                            release(param0: androidNative.Array<number>): void;
                        });
                        public constructor();
                        public obtain(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
                        public release(param0: androidNative.Array<number>): void;
                        public release(param0: globalAndroid.graphics.Bitmap): void;
                        public obtainIntArray(param0: number): androidNative.Array<number>;
                        public obtainByteArray(param0: number): androidNative.Array<number>;
                    }
                    export class GifDecodeStatus {
                        public static class: java.lang.Class<com.bumptech.glide.gifdecoder.GifDecoder.GifDecodeStatus>;
                        /**
                         * Constructs a new instance of the com.bumptech.glide.gifdecoder.GifDecoder$GifDecodeStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    export module bumptech {
        export module glide {
            export module gifdecoder {
                export class GifFrame {
                    public static class: java.lang.Class<com.bumptech.glide.gifdecoder.GifFrame>;
                }
            }
        }
    }
}

declare module com {
    export module bumptech {
        export module glide {
            export module gifdecoder {
                export class GifHeader {
                    public static class: java.lang.Class<com.bumptech.glide.gifdecoder.GifHeader>;
                    public static NETSCAPE_LOOP_COUNT_FOREVER: number = 0;
                    public static NETSCAPE_LOOP_COUNT_DOES_NOT_EXIST: number = -1;
                    public constructor();
                    public getHeight(): number;
                    public getWidth(): number;
                    public getNumFrames(): number;
                    public getStatus(): number;
                }
            }
        }
    }
}

declare module com {
    export module bumptech {
        export module glide {
            export module gifdecoder {
                export class GifHeaderParser {
                    public static class: java.lang.Class<com.bumptech.glide.gifdecoder.GifHeaderParser>;
                    public isAnimated(): boolean;
                    public constructor();
                    public clear(): void;
                    public setData(data: java.nio.ByteBuffer): com.bumptech.glide.gifdecoder.GifHeaderParser;
                    public setData(data: androidNative.Array<number>): com.bumptech.glide.gifdecoder.GifHeaderParser;
                    public parseHeader(): com.bumptech.glide.gifdecoder.GifHeader;
                }
            }
        }
    }
}

declare module com {
    export module bumptech {
        export module glide {
            export module gifdecoder {
                export class StandardGifDecoder extends com.bumptech.glide.gifdecoder.GifDecoder {
                    public static class: java.lang.Class<com.bumptech.glide.gifdecoder.StandardGifDecoder>;
                    public getCurrentFrameIndex(): number;
                    public getNextDelay(): number;
                    public getNetscapeLoopCount(): number;
                    public constructor(provider: com.bumptech.glide.gifdecoder.GifDecoder.BitmapProvider, gifHeader: com.bumptech.glide.gifdecoder.GifHeader, rawData: java.nio.ByteBuffer, sampleSize: number);
                    public advance(): void;
                    public clear(): void;
                    public setData(header: com.bumptech.glide.gifdecoder.GifHeader, data: androidNative.Array<number>): void;
                    public constructor(provider: com.bumptech.glide.gifdecoder.GifDecoder.BitmapProvider);
                    public setData(this_: com.bumptech.glide.gifdecoder.GifHeader, header: java.nio.ByteBuffer, buffer: number): void;
                    public getStatus(): number;
                    public getByteSize(): number;
                    public setData(param0: com.bumptech.glide.gifdecoder.GifHeader, param1: java.nio.ByteBuffer, param2: number): void;
                    public getHeight(): number;
                    /** @deprecated */
                    public getLoopCount(): number;
                    public getWidth(): number;
                    public setData(header: com.bumptech.glide.gifdecoder.GifHeader, buffer: java.nio.ByteBuffer): void;
                    public setData(param0: com.bumptech.glide.gifdecoder.GifHeader, param1: java.nio.ByteBuffer): void;
                    public getDelay(param0: number): number;
                    public setData(param0: com.bumptech.glide.gifdecoder.GifHeader, param1: androidNative.Array<number>): void;
                    public getDelay(n: number): number;
                    public read(data: androidNative.Array<number>): number;
                    public setDefaultBitmapConfig(param0: globalAndroid.graphics.Bitmap.Config): void;
                    public resetFrameIndex(): void;
                    public getTotalIterationCount(): number;
                    public getNextFrame(): globalAndroid.graphics.Bitmap;
                    public getFrameCount(): number;
                    public read(buffer: java.io.InputStream, nRead: number): number;
                    public getData(): java.nio.ByteBuffer;
                    public read(param0: java.io.InputStream, param1: number): number;
                    public read(param0: androidNative.Array<number>): number;
                    public setDefaultBitmapConfig(config: globalAndroid.graphics.Bitmap.Config): void;
                    public constructor(provider: com.bumptech.glide.gifdecoder.GifDecoder.BitmapProvider, gifHeader: com.bumptech.glide.gifdecoder.GifHeader, rawData: java.nio.ByteBuffer);
                }
            }
        }
    }
}

//Generics information:

