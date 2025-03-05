declare module upinn {
  export module tech {
    export module wj24secrets_android {
      export class DetailedErrorResponse extends upinn.tech.wj24secrets_android.ExtendedErrorResponse {
        public static class: java.lang.Class<upinn.tech.wj24secrets_android.DetailedErrorResponse>;
        public equals(other: any): boolean;
        public component3(): string;
        public hashCode(): number;
        public component2(): string;
        public component1(): number;
        public constructor(error: number, message: string, variable: string);
        public getMessage(): string;
        public toString(): string;
        public getVariable(): string;
        public copy(error: number, message: string, variable: string): upinn.tech.wj24secrets_android.DetailedErrorResponse;
        public getError(): number;
      }
    }
  }
}

declare module upinn {
  export module tech {
    export module wj24secrets_android {
      export class DeviceInfo {
        public static class: java.lang.Class<upinn.tech.wj24secrets_android.DeviceInfo>;
        public getUuid(): string;
        public getManufacturer(): string;
        public getSdkVersion(): string;
        public constructor(context: globalAndroid.content.Context);
        public getOs(): string;
        public getLanguage(): string;
        public getPackageName(): string;
        public getOsVersion(): string;
        public getModel(): string;
        public getDeviceType(): string;
        public getRegion(): string;
      }
      export module DeviceInfo {
        export class Companion {
          public static class: java.lang.Class<upinn.tech.wj24secrets_android.DeviceInfo.Companion>;
        }
      }
    }
  }
}

declare module upinn {
  export module tech {
    export module wj24secrets_android {
      export class ErrorResponse {
        public static class: java.lang.Class<upinn.tech.wj24secrets_android.ErrorResponse>;
        /**
         * Constructs a new instance of the upinn.tech.wj24secrets_android.ErrorResponse interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getError(): number; getMessage(): string });
        public constructor();
        public getMessage(): string;
        public getError(): number;
      }
    }
  }
}

declare module upinn {
  export module tech {
    export module wj24secrets_android {
      export class ExtendedErrorResponse extends upinn.tech.wj24secrets_android.ErrorResponse {
        public static class: java.lang.Class<upinn.tech.wj24secrets_android.ExtendedErrorResponse>;
        /**
         * Constructs a new instance of the upinn.tech.wj24secrets_android.ExtendedErrorResponse interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getVariable(): string; getError(): number; getMessage(): string });
        public constructor();
        public getMessage(): string;
        public getVariable(): string;
        public getError(): number;
      }
    }
  }
}

declare module upinn {
  export module tech {
    export module wj24secrets_android {
      export class SimpleErrorResponse extends upinn.tech.wj24secrets_android.ErrorResponse {
        public static class: java.lang.Class<upinn.tech.wj24secrets_android.SimpleErrorResponse>;
        public equals(other: any): boolean;
        public copy(error: number, message: string): upinn.tech.wj24secrets_android.SimpleErrorResponse;
        public hashCode(): number;
        public component2(): string;
        public component1(): number;
        public constructor(error: number, message: string);
        public getMessage(): string;
        public toString(): string;
        public getError(): number;
      }
    }
  }
}

declare module upinn {
  export module tech {
    export module wj24secrets_android {
      export class Wj24Secrets {
        public static class: java.lang.Class<upinn.tech.wj24secrets_android.Wj24Secrets>;
        public init(): any;
        public search_vars(jsonObject: string, this_: java.lang.Integer): upinn.tech.wj24secrets_android.ExtendedErrorResponse;
        public constructor(context: globalAndroid.content.Context, file_name: string, is_debug: boolean);
      }
      export module Wj24Secrets {
        export class Companion {
          public static class: java.lang.Class<upinn.tech.wj24secrets_android.Wj24Secrets.Companion>;
        }
      }
    }
  }
}

//Generics information:
