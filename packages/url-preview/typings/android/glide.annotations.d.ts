
declare module com {
    export module bumptech {
        export module glide {
            export module annotation {
                export class Excludes {
                    public static class: java.lang.Class<com.bumptech.glide.annotation.Excludes>;
                    /**
                     * Constructs a new instance of the com.bumptech.glide.annotation.Excludes interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        value(): androidNative.Array<java.lang.Class<any>>;
                    });
                    public constructor();
                    public value(): androidNative.Array<java.lang.Class<any>>;
                }
            }
        }
    }
}

declare module com {
    export module bumptech {
        export module glide {
            export module annotation {
                export class GlideExtension {
                    public static class: java.lang.Class<com.bumptech.glide.annotation.GlideExtension>;
                    /**
                     * Constructs a new instance of the com.bumptech.glide.annotation.GlideExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                    });
                    public constructor();
                }
            }
        }
    }
}

declare module com {
    export module bumptech {
        export module glide {
            export module annotation {
                export class GlideModule {
                    public static class: java.lang.Class<com.bumptech.glide.annotation.GlideModule>;
                    /**
                     * Constructs a new instance of the com.bumptech.glide.annotation.GlideModule interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        glideName(): string;
                    });
                    public constructor();
                    public glideName(): string;
                }
            }
        }
    }
}

declare module com {
    export module bumptech {
        export module glide {
            export module annotation {
                export class GlideOption {
                    public static class: java.lang.Class<com.bumptech.glide.annotation.GlideOption>;
                    /**
                     * Constructs a new instance of the com.bumptech.glide.annotation.GlideOption interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        override(): number;
                        staticMethodName(): string;
                        memoizeStaticMethod(): boolean;
                        skipStaticMethod(): boolean;
                    });
                    public constructor();
                    public static OVERRIDE_EXTEND: number = 1;
                    public static OVERRIDE_REPLACE: number = 2;
                    public static OVERRIDE_NONE: number = 0;
                    public staticMethodName(): string;
                    public override(): number;
                    public skipStaticMethod(): boolean;
                    public memoizeStaticMethod(): boolean;
                }
            }
        }
    }
}

declare module com {
    export module bumptech {
        export module glide {
            export module annotation {
                export class GlideType {
                    public static class: java.lang.Class<com.bumptech.glide.annotation.GlideType>;
                    /**
                     * Constructs a new instance of the com.bumptech.glide.annotation.GlideType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        value(): java.lang.Class<any>;
                    });
                    public constructor();
                    public value(): java.lang.Class<any>;
                }
            }
        }
    }
}

declare module com {
    export module bumptech {
        export module glide {
            export module annotation {
                export module compiler {
                    export class Index {
                        public static class: java.lang.Class<com.bumptech.glide.annotation.compiler.Index>;
                        /**
                         * Constructs a new instance of the com.bumptech.glide.annotation.compiler.Index interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            modules(): androidNative.Array<string>;
                            extensions(): androidNative.Array<string>;
                        });
                        public constructor();
                        public extensions(): androidNative.Array<string>;
                        public modules(): androidNative.Array<string>;
                    }
                }
            }
        }
    }
}

declare module com {
    export module bumptech {
        export module glide {
            export module annotation {
                export module ksp {
                    export class Index {
                        public static class: java.lang.Class<com.bumptech.glide.annotation.ksp.Index>;
                        /**
                         * Constructs a new instance of the com.bumptech.glide.annotation.ksp.Index interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            modules(): androidNative.Array<string>;
                        });
                        public constructor();
                        public modules(): androidNative.Array<string>;
                    }
                }
            }
        }
    }
}

//Generics information:

