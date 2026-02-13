declare module org {
  export module slf4j {
    export module jul {
      export class JDK14LoggerAdapter {
        public static class: java.lang.Class<org.slf4j.jul.JDK14LoggerAdapter>;
        public isDebugEnabled(): boolean;
        public log(this_: org.slf4j.Marker, marker: string, callerFQCN: number, slf4jLevelInt: string, message: androidNative.Array<any>, arguments_: java.lang.Throwable): void;
        public log(this_: org.slf4j.event.LoggingEvent): void;
        public handleNormalizedLoggingCall(level: org.slf4j.event.Level, marker: org.slf4j.Marker, msg: string, args: androidNative.Array<any>, throwable: java.lang.Throwable): void;
        public isInfoEnabled(): boolean;
        public isTraceEnabled(): boolean;
        public isWarnEnabled(): boolean;
        public getFullyQualifiedCallerName(): string;
        public isErrorEnabled(): boolean;
      }
    }
  }
}

declare module org {
  export module slf4j {
    export module jul {
      export class JDK14LoggerFactory {
        public static class: java.lang.Class<org.slf4j.jul.JDK14LoggerFactory>;
        public getLogger(newInstance: string): org.slf4j.Logger;
        public constructor();
      }
    }
  }
}

declare module org {
  export module slf4j {
    export module jul {
      export class JULServiceProvider {
        public static class: java.lang.Class<org.slf4j.jul.JULServiceProvider>;
        public static REQUESTED_API_VERSION: string;
        public initialize(): void;
        public getLoggerFactory(): org.slf4j.ILoggerFactory;
        public getRequestedApiVersion(): string;
        public getMarkerFactory(): org.slf4j.IMarkerFactory;
        public constructor();
        public getMDCAdapter(): org.slf4j.spi.MDCAdapter;
      }
    }
  }
}

//Generics information:
