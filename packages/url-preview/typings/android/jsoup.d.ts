declare module org {
    export module jsoup {
        export class Connection {
            public static class: java.lang.Class<org.jsoup.Connection>;
            /**
             * Constructs a new instance of the org.jsoup.Connection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
                url(param0: java.net.URL): org.jsoup.Connection;
                url(param0: string): org.jsoup.Connection;
                proxy(param0: java.net.Proxy): org.jsoup.Connection;
                proxy(param0: string, param1: number): org.jsoup.Connection;
                userAgent(param0: string): org.jsoup.Connection;
                timeout(param0: number): org.jsoup.Connection;
                maxBodySize(param0: number): org.jsoup.Connection;
                referrer(param0: string): org.jsoup.Connection;
                followRedirects(param0: boolean): org.jsoup.Connection;
                method(param0: org.jsoup.Connection.Method): org.jsoup.Connection;
                ignoreHttpErrors(param0: boolean): org.jsoup.Connection;
                ignoreContentType(param0: boolean): org.jsoup.Connection;
                sslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): org.jsoup.Connection;
                data(param0: string, param1: string): org.jsoup.Connection;
                data(param0: string, param1: string, param2: java.io.InputStream): org.jsoup.Connection;
                data(param0: string, param1: string, param2: java.io.InputStream, param3: string): org.jsoup.Connection;
                data(param0: java.util.Collection<org.jsoup.Connection.KeyVal>): org.jsoup.Connection;
                data(param0: java.util.Map<string, string>): org.jsoup.Connection;
                data(param0: androidNative.Array<string>): org.jsoup.Connection;
                data(param0: string): org.jsoup.Connection.KeyVal;
                requestBody(param0: string): org.jsoup.Connection;
                header(param0: string, param1: string): org.jsoup.Connection;
                headers(param0: java.util.Map<string, string>): org.jsoup.Connection;
                cookie(param0: string, param1: string): org.jsoup.Connection;
                cookies(param0: java.util.Map<string, string>): org.jsoup.Connection;
                parser(param0: org.jsoup.parser.Parser): org.jsoup.Connection;
                postDataCharset(param0: string): org.jsoup.Connection;
                get(): org.jsoup.nodes.Document;
                post(): org.jsoup.nodes.Document;
                execute(): org.jsoup.Connection.Response;
                request(): org.jsoup.Connection.Request;
                request(param0: org.jsoup.Connection.Request): org.jsoup.Connection;
                response(): org.jsoup.Connection.Response;
                response(param0: org.jsoup.Connection.Response): org.jsoup.Connection;
            });
            public constructor();
            public postDataCharset(param0: string): org.jsoup.Connection;
            public proxy(param0: string, param1: number): org.jsoup.Connection;
            public data(param0: string): org.jsoup.Connection.KeyVal;
            public response(param0: org.jsoup.Connection.Response): org.jsoup.Connection;
            public maxBodySize(param0: number): org.jsoup.Connection;
            public request(): org.jsoup.Connection.Request;
            public referrer(param0: string): org.jsoup.Connection;
            public post(): org.jsoup.nodes.Document;
            public followRedirects(param0: boolean): org.jsoup.Connection;
            public data(param0: java.util.Collection<org.jsoup.Connection.KeyVal>): org.jsoup.Connection;
            public requestBody(param0: string): org.jsoup.Connection;
            public data(param0: string, param1: string, param2: java.io.InputStream, param3: string): org.jsoup.Connection;
            public data(param0: java.util.Map<string, string>): org.jsoup.Connection;
            public proxy(param0: java.net.Proxy): org.jsoup.Connection;
            public data(param0: string, param1: string, param2: java.io.InputStream): org.jsoup.Connection;
            public request(param0: org.jsoup.Connection.Request): org.jsoup.Connection;
            public url(param0: java.net.URL): org.jsoup.Connection;
            public execute(): org.jsoup.Connection.Response;
            public url(param0: string): org.jsoup.Connection;
            public timeout(param0: number): org.jsoup.Connection;
            public sslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): org.jsoup.Connection;
            public response(): org.jsoup.Connection.Response;
            public header(param0: string, param1: string): org.jsoup.Connection;
            public userAgent(param0: string): org.jsoup.Connection;
            public cookie(param0: string, param1: string): org.jsoup.Connection;
            public data(param0: string, param1: string): org.jsoup.Connection;
            public data(param0: androidNative.Array<string>): org.jsoup.Connection;
            public ignoreContentType(param0: boolean): org.jsoup.Connection;
            public ignoreHttpErrors(param0: boolean): org.jsoup.Connection;
            public headers(param0: java.util.Map<string, string>): org.jsoup.Connection;
            public cookies(param0: java.util.Map<string, string>): org.jsoup.Connection;
            public method(param0: org.jsoup.Connection.Method): org.jsoup.Connection;
            public get(): org.jsoup.nodes.Document;
            public parser(param0: org.jsoup.parser.Parser): org.jsoup.Connection;
        }
        export module Connection {
            export class Base<T> extends java.lang.Object {
                public static class: java.lang.Class<org.jsoup.Connection.Base<any>>;
                /**
                 * Constructs a new instance of the org.jsoup.Connection$Base interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    url(): java.net.URL;
                    url(param0: java.net.URL): T;
                    method(): org.jsoup.Connection.Method;
                    method(param0: org.jsoup.Connection.Method): T;
                    header(param0: string): string;
                    headers(param0: string): java.util.List<string>;
                    header(param0: string, param1: string): T;
                    addHeader(param0: string, param1: string): T;
                    hasHeader(param0: string): boolean;
                    hasHeaderWithValue(param0: string, param1: string): boolean;
                    removeHeader(param0: string): T;
                    headers(): java.util.Map<string, string>;
                    multiHeaders(): java.util.Map<string, java.util.List<string>>;
                    cookie(param0: string): string;
                    cookie(param0: string, param1: string): T;
                    hasCookie(param0: string): boolean;
                    removeCookie(param0: string): T;
                    cookies(): java.util.Map<string, string>;
                });
                public constructor();
                public header(param0: string): string;
                public method(param0: org.jsoup.Connection.Method): T;
                public method(): org.jsoup.Connection.Method;
                public cookies(): java.util.Map<string, string>;
                public cookie(param0: string, param1: string): T;
                public removeCookie(param0: string): T;
                public hasHeader(param0: string): boolean;
                public hasHeaderWithValue(param0: string, param1: string): boolean;
                public removeHeader(param0: string): T;
                public addHeader(param0: string, param1: string): T;
                public hasCookie(param0: string): boolean;
                public headers(param0: string): java.util.List<string>;
                public headers(): java.util.Map<string, string>;
                public url(param0: java.net.URL): T;
                public multiHeaders(): java.util.Map<string, java.util.List<string>>;
                public url(): java.net.URL;
                public header(param0: string, param1: string): T;
                public cookie(param0: string): string;
            }
            export class KeyVal {
                public static class: java.lang.Class<org.jsoup.Connection.KeyVal>;
                /**
                 * Constructs a new instance of the org.jsoup.Connection$KeyVal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    key(param0: string): org.jsoup.Connection.KeyVal;
                    key(): string;
                    value(param0: string): org.jsoup.Connection.KeyVal;
                    value(): string;
                    inputStream(param0: java.io.InputStream): org.jsoup.Connection.KeyVal;
                    inputStream(): java.io.InputStream;
                    hasInputStream(): boolean;
                    contentType(param0: string): org.jsoup.Connection.KeyVal;
                    contentType(): string;
                });
                public constructor();
                public key(param0: string): org.jsoup.Connection.KeyVal;
                public value(): string;
                public inputStream(param0: java.io.InputStream): org.jsoup.Connection.KeyVal;
                public inputStream(): java.io.InputStream;
                public contentType(): string;
                public value(param0: string): org.jsoup.Connection.KeyVal;
                public contentType(param0: string): org.jsoup.Connection.KeyVal;
                public hasInputStream(): boolean;
                public key(): string;
            }
            export class Method {
                public static class: java.lang.Class<org.jsoup.Connection.Method>;
                public static GET: org.jsoup.Connection.Method;
                public static POST: org.jsoup.Connection.Method;
                public static PUT: org.jsoup.Connection.Method;
                public static DELETE: org.jsoup.Connection.Method;
                public static PATCH: org.jsoup.Connection.Method;
                public static HEAD: org.jsoup.Connection.Method;
                public static OPTIONS: org.jsoup.Connection.Method;
                public static TRACE: org.jsoup.Connection.Method;
                public hasBody(): boolean;
                public static values(): androidNative.Array<org.jsoup.Connection.Method>;
                public static valueOf(name: string): org.jsoup.Connection.Method;
            }
            export class Request extends org.jsoup.Connection.Base<org.jsoup.Connection.Request> {
                public static class: java.lang.Class<org.jsoup.Connection.Request>;
                /**
                 * Constructs a new instance of the org.jsoup.Connection$Request interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    proxy(): java.net.Proxy;
                    proxy(param0: java.net.Proxy): org.jsoup.Connection.Request;
                    proxy(param0: string, param1: number): org.jsoup.Connection.Request;
                    timeout(): number;
                    timeout(param0: number): org.jsoup.Connection.Request;
                    maxBodySize(): number;
                    maxBodySize(param0: number): org.jsoup.Connection.Request;
                    followRedirects(): boolean;
                    followRedirects(param0: boolean): org.jsoup.Connection.Request;
                    ignoreHttpErrors(): boolean;
                    ignoreHttpErrors(param0: boolean): org.jsoup.Connection.Request;
                    ignoreContentType(): boolean;
                    ignoreContentType(param0: boolean): org.jsoup.Connection.Request;
                    sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
                    sslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
                    data(param0: org.jsoup.Connection.KeyVal): org.jsoup.Connection.Request;
                    data(): java.util.Collection<org.jsoup.Connection.KeyVal>;
                    requestBody(param0: string): org.jsoup.Connection.Request;
                    requestBody(): string;
                    parser(param0: org.jsoup.parser.Parser): org.jsoup.Connection.Request;
                    parser(): org.jsoup.parser.Parser;
                    postDataCharset(param0: string): org.jsoup.Connection.Request;
                    postDataCharset(): string;
                    url(): java.net.URL;
                    url(param0: java.net.URL): any;
                    method(): org.jsoup.Connection.Method;
                    method(param0: org.jsoup.Connection.Method): any;
                    header(param0: string): string;
                    headers(param0: string): java.util.List<string>;
                    header(param0: string, param1: string): any;
                    addHeader(param0: string, param1: string): any;
                    hasHeader(param0: string): boolean;
                    hasHeaderWithValue(param0: string, param1: string): boolean;
                    removeHeader(param0: string): any;
                    headers(): java.util.Map<string, string>;
                    multiHeaders(): java.util.Map<string, java.util.List<string>>;
                    cookie(param0: string): string;
                    cookie(param0: string, param1: string): any;
                    hasCookie(param0: string): boolean;
                    removeCookie(param0: string): any;
                    cookies(): java.util.Map<string, string>;
                });
                public constructor();
                public header(param0: string): string;
                public header(param0: string, param1: string): any;
                public ignoreHttpErrors(param0: boolean): org.jsoup.Connection.Request;
                public postDataCharset(param0: string): org.jsoup.Connection.Request;
                public method(): org.jsoup.Connection.Method;
                public cookies(): java.util.Map<string, string>;
                public proxy(param0: java.net.Proxy): org.jsoup.Connection.Request;
                public followRedirects(): boolean;
                public requestBody(): string;
                public url(param0: java.net.URL): any;
                public proxy(param0: string, param1: number): org.jsoup.Connection.Request;
                public timeout(): number;
                public data(param0: org.jsoup.Connection.KeyVal): org.jsoup.Connection.Request;
                public hasHeader(param0: string): boolean;
                public sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
                public headers(param0: string): java.util.List<string>;
                public followRedirects(param0: boolean): org.jsoup.Connection.Request;
                public removeCookie(param0: string): any;
                public url(): java.net.URL;
                public maxBodySize(): number;
                public sslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
                public postDataCharset(): string;
                public method(param0: org.jsoup.Connection.Method): any;
                public proxy(): java.net.Proxy;
                public data(): java.util.Collection<org.jsoup.Connection.KeyVal>;
                public hasHeaderWithValue(param0: string, param1: string): boolean;
                public hasCookie(param0: string): boolean;
                public ignoreHttpErrors(): boolean;
                public ignoreContentType(): boolean;
                public cookie(param0: string, param1: string): any;
                public requestBody(param0: string): org.jsoup.Connection.Request;
                public addHeader(param0: string, param1: string): any;
                public headers(): java.util.Map<string, string>;
                public removeHeader(param0: string): any;
                public maxBodySize(param0: number): org.jsoup.Connection.Request;
                public multiHeaders(): java.util.Map<string, java.util.List<string>>;
                public parser(param0: org.jsoup.parser.Parser): org.jsoup.Connection.Request;
                public ignoreContentType(param0: boolean): org.jsoup.Connection.Request;
                public timeout(param0: number): org.jsoup.Connection.Request;
                public parser(): org.jsoup.parser.Parser;
                public cookie(param0: string): string;
            }
            export class Response extends org.jsoup.Connection.Base<org.jsoup.Connection.Response> {
                public static class: java.lang.Class<org.jsoup.Connection.Response>;
                /**
                 * Constructs a new instance of the org.jsoup.Connection$Response interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    statusCode(): number;
                    statusMessage(): string;
                    charset(): string;
                    charset(param0: string): org.jsoup.Connection.Response;
                    contentType(): string;
                    parse(): org.jsoup.nodes.Document;
                    body(): string;
                    bodyAsBytes(): androidNative.Array<number>;
                    bufferUp(): org.jsoup.Connection.Response;
                    bodyStream(): java.io.BufferedInputStream;
                    url(): java.net.URL;
                    url(param0: java.net.URL): any;
                    method(): org.jsoup.Connection.Method;
                    method(param0: org.jsoup.Connection.Method): any;
                    header(param0: string): string;
                    headers(param0: string): java.util.List<string>;
                    header(param0: string, param1: string): any;
                    addHeader(param0: string, param1: string): any;
                    hasHeader(param0: string): boolean;
                    hasHeaderWithValue(param0: string, param1: string): boolean;
                    removeHeader(param0: string): any;
                    headers(): java.util.Map<string, string>;
                    multiHeaders(): java.util.Map<string, java.util.List<string>>;
                    cookie(param0: string): string;
                    cookie(param0: string, param1: string): any;
                    hasCookie(param0: string): boolean;
                    removeCookie(param0: string): any;
                    cookies(): java.util.Map<string, string>;
                });
                public constructor();
                public header(param0: string): string;
                public header(param0: string, param1: string): any;
                public body(): string;
                public method(): org.jsoup.Connection.Method;
                public cookies(): java.util.Map<string, string>;
                public parse(): org.jsoup.nodes.Document;
                public url(param0: java.net.URL): any;
                public hasHeader(param0: string): boolean;
                public headers(param0: string): java.util.List<string>;
                public bodyAsBytes(): androidNative.Array<number>;
                public removeCookie(param0: string): any;
                public contentType(): string;
                public url(): java.net.URL;
                public statusMessage(): string;
                public charset(param0: string): org.jsoup.Connection.Response;
                public method(param0: org.jsoup.Connection.Method): any;
                public bufferUp(): org.jsoup.Connection.Response;
                public hasHeaderWithValue(param0: string, param1: string): boolean;
                public hasCookie(param0: string): boolean;
                public cookie(param0: string, param1: string): any;
                public addHeader(param0: string, param1: string): any;
                public headers(): java.util.Map<string, string>;
                public removeHeader(param0: string): any;
                public statusCode(): number;
                public multiHeaders(): java.util.Map<string, java.util.List<string>>;
                public charset(): string;
                public bodyStream(): java.io.BufferedInputStream;
                public cookie(param0: string): string;
            }
        }
    }
}

declare module org {
    export module jsoup {
        export class HttpStatusException {
            public static class: java.lang.Class<org.jsoup.HttpStatusException>;
            public getUrl(): string;
            public toString(): string;
            public getStatusCode(): number;
            public constructor(message: string, statusCode: number, url: string);
        }
    }
}

declare module org {
    export module jsoup {
        export class Jsoup {
            public static class: java.lang.Class<org.jsoup.Jsoup>;
            public static clean(bodyHtml: string, whitelist: org.jsoup.safety.Whitelist): string;
            public static connect(url: string): org.jsoup.Connection;
            public static parse(in_: java.io.InputStream, charsetName: string, baseUri: string): org.jsoup.nodes.Document;
            public static parse(html: string): org.jsoup.nodes.Document;
            public static parseBodyFragment(bodyHtml: string): org.jsoup.nodes.Document;
            public static parse(html: string, baseUri: string): org.jsoup.nodes.Document;
            public static parseBodyFragment(bodyHtml: string, baseUri: string): org.jsoup.nodes.Document;
            public static parse(in_: java.io.InputStream, charsetName: string, baseUri: string, parser: org.jsoup.parser.Parser): org.jsoup.nodes.Document;
            public static parse(html: string, baseUri: string, parser: org.jsoup.parser.Parser): org.jsoup.nodes.Document;
            public static parse(url: java.net.URL, timeoutMillis: number): org.jsoup.nodes.Document;
            public static parse(in_: java.io.File, charsetName: string, baseUri: string): org.jsoup.nodes.Document;
            public static clean(bodyHtml: string, baseUri: string, whitelist: org.jsoup.safety.Whitelist): string;
            public static clean(bodyHtml: string, baseUri: string, whitelist: org.jsoup.safety.Whitelist, outputSettings: org.jsoup.nodes.Document.OutputSettings): string;
            public static isValid(bodyHtml: string, whitelist: org.jsoup.safety.Whitelist): boolean;
            public static parse(in_: java.io.File, charsetName: string): org.jsoup.nodes.Document;
        }
    }
}

declare module org {
    export module jsoup {
        export class SerializationException {
            public static class: java.lang.Class<org.jsoup.SerializationException>;
            public constructor(message: string);
            public constructor(message: string, cause: java.lang.Throwable);
            public constructor(cause: java.lang.Throwable);
            public constructor();
        }
    }
}

declare module org {
    export module jsoup {
        export class UncheckedIOException {
            public static class: java.lang.Class<org.jsoup.UncheckedIOException>;
            public constructor(cause: java.io.IOException);
            public constructor(message: string);
            public ioException(): java.io.IOException;
        }
    }
}

declare module org {
    export module jsoup {
        export class UnsupportedMimeTypeException {
            public static class: java.lang.Class<org.jsoup.UnsupportedMimeTypeException>;
            public getMimeType(): string;
            public getUrl(): string;
            public toString(): string;
            public constructor(message: string, mimeType: string, url: string);
        }
    }
}

declare module org {
    export module jsoup {
        export module helper {
            export abstract class ChangeNotifyingArrayList<E> extends java.util.ArrayList<any> {
                public static class: java.lang.Class<org.jsoup.helper.ChangeNotifyingArrayList<any>>;
                public remove(o: any): boolean;
                public removeAll(c: java.util.Collection<any>): boolean;
                public add(e: any): boolean;
                public add(index: number, element: any): void;
                public onContentsChanged(): void;
                public set(index: number, element: any): any;
                public clear(): void;
                public removeRange(fromIndex: number, toIndex: number): void;
                public constructor(initialCapacity: number);
                public addAll(c: java.util.Collection<any>): boolean;
                public addAll(index: number, c: java.util.Collection<any>): boolean;
                public retainAll(c: java.util.Collection<any>): boolean;
                public remove(index: number): any;
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module helper {
            export class DataUtil {
                public static class: java.lang.Class<org.jsoup.helper.DataUtil>;
                public static load(in_: java.io.File, charsetName: string, baseUri: string): org.jsoup.nodes.Document;
                public static readToByteBuffer(inStream: java.io.InputStream, maxSize: number): java.nio.ByteBuffer;
                public static load(in_: java.io.InputStream, charsetName: string, baseUri: string): org.jsoup.nodes.Document;
                public static load(in_: java.io.InputStream, charsetName: string, baseUri: string, parser: org.jsoup.parser.Parser): org.jsoup.nodes.Document;
            }
            export module DataUtil {
                export class BomCharset {
                    public static class: java.lang.Class<org.jsoup.helper.DataUtil.BomCharset>;
                    public constructor(charset: string, offset: boolean);
                }
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module helper {
            export class HttpConnection extends org.jsoup.Connection {
                public static class: java.lang.Class<org.jsoup.helper.HttpConnection>;
                public static CONTENT_ENCODING: string = "Content-Encoding";
                public static DEFAULT_UA: string = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36";
                public static CONTENT_TYPE: string = "Content-Type";
                public static MULTIPART_FORM_DATA: string = "multipart/form-data";
                public static FORM_URL_ENCODED: string = "application/x-www-form-urlencoded";
                public referrer(param0: string): org.jsoup.Connection;
                public data(param0: androidNative.Array<string>): org.jsoup.Connection;
                public url(this_: string): org.jsoup.Connection;
                public response(param0: org.jsoup.Connection.Response): org.jsoup.Connection;
                public method(method: org.jsoup.Connection.Method): org.jsoup.Connection;
                public data(param0: string, param1: string, param2: java.io.InputStream, param3: string): org.jsoup.Connection;
                public parser(parser: org.jsoup.parser.Parser): org.jsoup.Connection;
                public header(name: string, value: string): org.jsoup.Connection;
                public postDataCharset(param0: string): org.jsoup.Connection;
                public constructor();
                public parser(param0: org.jsoup.parser.Parser): org.jsoup.Connection;
                public get(): org.jsoup.nodes.Document;
                public request(param0: org.jsoup.Connection.Request): org.jsoup.Connection;
                public data(param0: java.util.Collection<org.jsoup.Connection.KeyVal>): org.jsoup.Connection;
                public static connect(url: java.net.URL): org.jsoup.Connection;
                public userAgent(param0: string): org.jsoup.Connection;
                public data(this_: string): org.jsoup.Connection.KeyVal;
                public followRedirects(param0: boolean): org.jsoup.Connection;
                public response(): org.jsoup.Connection.Response;
                public method(param0: org.jsoup.Connection.Method): org.jsoup.Connection;
                public url(url: java.net.URL): org.jsoup.Connection;
                public data(param0: string): org.jsoup.Connection.KeyVal;
                public timeout(millis: number): org.jsoup.Connection;
                public referrer(referrer: string): org.jsoup.Connection;
                public sslSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory): org.jsoup.Connection;
                public cookies(this_: java.util.Map<string, string>): org.jsoup.Connection;
                public data(param0: string, param1: string, param2: java.io.InputStream): org.jsoup.Connection;
                public userAgent(userAgent: string): org.jsoup.Connection;
                public proxy(param0: java.net.Proxy): org.jsoup.Connection;
                public requestBody(param0: string): org.jsoup.Connection;
                public url(param0: java.net.URL): org.jsoup.Connection;
                public maxBodySize(bytes: number): org.jsoup.Connection;
                public proxy(param0: string, param1: number): org.jsoup.Connection;
                public sslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): org.jsoup.Connection;
                public data(param0: string, param1: string): org.jsoup.Connection;
                public post(): org.jsoup.nodes.Document;
                public data(key: string, filename: string, inputStream: java.io.InputStream, contentType: string): org.jsoup.Connection;
                public data(this_: java.util.Map<string, string>): org.jsoup.Connection;
                public timeout(param0: number): org.jsoup.Connection;
                public ignoreHttpErrors(param0: boolean): org.jsoup.Connection;
                public proxy(proxy: java.net.Proxy): org.jsoup.Connection;
                public followRedirects(followRedirects: boolean): org.jsoup.Connection;
                public ignoreHttpErrors(ignoreHttpErrors: boolean): org.jsoup.Connection;
                public postDataCharset(charset: string): org.jsoup.Connection;
                public cookie(param0: string, param1: string): org.jsoup.Connection;
                public data(key: string, value: string): org.jsoup.Connection;
                public data(this_: java.util.Collection<org.jsoup.Connection.KeyVal>): org.jsoup.Connection;
                public requestBody(body: string): org.jsoup.Connection;
                public ignoreContentType(param0: boolean): org.jsoup.Connection;
                public proxy(host: string, port: number): org.jsoup.Connection;
                public headers(this_: java.util.Map<string, string>): org.jsoup.Connection;
                public request(): org.jsoup.Connection.Request;
                public data(key: string, filename: string, inputStream: java.io.InputStream): org.jsoup.Connection;
                public maxBodySize(param0: number): org.jsoup.Connection;
                public static connect(url: string): org.jsoup.Connection;
                public response(response: org.jsoup.Connection.Response): org.jsoup.Connection;
                public ignoreContentType(ignoreContentType: boolean): org.jsoup.Connection;
                public headers(param0: java.util.Map<string, string>): org.jsoup.Connection;
                public execute(): org.jsoup.Connection.Response;
                public url(param0: string): org.jsoup.Connection;
                public header(param0: string, param1: string): org.jsoup.Connection;
                public cookie(name: string, value: string): org.jsoup.Connection;
                public request(request: org.jsoup.Connection.Request): org.jsoup.Connection;
                public data(param0: java.util.Map<string, string>): org.jsoup.Connection;
                public cookies(param0: java.util.Map<string, string>): org.jsoup.Connection;
                public data(value: androidNative.Array<string>): org.jsoup.Connection;
            }
            export module HttpConnection {
                export abstract class Base<T> extends org.jsoup.Connection.Base<any> {
                    public static class: java.lang.Class<org.jsoup.helper.HttpConnection.Base<any>>;
                    public cookie(param0: string): string;
                    public header(param0: string): string;
                    public removeCookie(param0: string): any;
                    public headers(param0: string): java.util.List<string>;
                    public method(param0: org.jsoup.Connection.Method): any;
                    public hasHeaderWithValue(this_: string, name: string): boolean;
                    public cookies(): java.util.Map<string, string>;
                    public hasHeader(name: string): boolean;
                    public url(url: java.net.URL): any;
                    public header(name: string): string;
                    public cookie(name: string): string;
                    public header(param0: string, param1: string): any;
                    public addHeader(param0: string, param1: string): any;
                    public headers(): java.util.Map<string, string>;
                    public hasCookie(name: string): boolean;
                    public addHeader(name: string, value: string): any;
                    public hasHeaderWithValue(param0: string, param1: string): boolean;
                    public cookie(name: string, value: string): any;
                    public removeCookie(name: string): any;
                    public url(): java.net.URL;
                    public header(name: string, value: string): any;
                    public hasCookie(param0: string): boolean;
                    public headers(name: string): java.util.List<string>;
                    public method(): org.jsoup.Connection.Method;
                    public multiHeaders(): java.util.Map<string, java.util.List<string>>;
                    public removeHeader(param0: string): any;
                    public removeHeader(name: string): any;
                    public method(method: org.jsoup.Connection.Method): any;
                    public url(param0: java.net.URL): any;
                    public hasHeader(param0: string): boolean;
                    public cookie(param0: string, param1: string): any;
                }
                export class KeyVal extends org.jsoup.Connection.KeyVal {
                    public static class: java.lang.Class<org.jsoup.helper.HttpConnection.KeyVal>;
                    public contentType(): string;
                    public static create(key: string, value: string): org.jsoup.helper.HttpConnection.KeyVal;
                    public key(): string;
                    public value(value: string): org.jsoup.helper.HttpConnection.KeyVal;
                    public value(): string;
                    public contentType(contentType: string): org.jsoup.Connection.KeyVal;
                    public toString(): string;
                    public contentType(param0: string): org.jsoup.Connection.KeyVal;
                    public inputStream(param0: java.io.InputStream): org.jsoup.Connection.KeyVal;
                    public key(key: string): org.jsoup.helper.HttpConnection.KeyVal;
                    public key(param0: string): org.jsoup.Connection.KeyVal;
                    public inputStream(inputStream: java.io.InputStream): org.jsoup.helper.HttpConnection.KeyVal;
                    public inputStream(): java.io.InputStream;
                    public value(param0: string): org.jsoup.Connection.KeyVal;
                    public static create(key: string, filename: string, stream: java.io.InputStream): org.jsoup.helper.HttpConnection.KeyVal;
                    public hasInputStream(): boolean;
                }
                export class Request extends org.jsoup.helper.HttpConnection.Base<org.jsoup.Connection.Request> implements org.jsoup.Connection.Request {
                    public static class: java.lang.Class<org.jsoup.helper.HttpConnection.Request>;
                    public proxy(): java.net.Proxy;
                    public followRedirects(): boolean;
                    public requestBody(body: string): org.jsoup.Connection.Request;
                    public followRedirects(param0: boolean): org.jsoup.Connection.Request;
                    public method(param0: org.jsoup.Connection.Method): any;
                    public sslSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory): void;
                    public data(keyval: org.jsoup.Connection.KeyVal): org.jsoup.helper.HttpConnection.Request;
                    public parser(param0: org.jsoup.parser.Parser): org.jsoup.Connection.Request;
                    public cookies(): java.util.Map<string, string>;
                    public maxBodySize(param0: number): org.jsoup.Connection.Request;
                    public url(url: java.net.URL): any;
                    public data(): java.util.Collection<org.jsoup.Connection.KeyVal>;
                    public headers(): java.util.Map<string, string>;
                    public data(param0: org.jsoup.Connection.KeyVal): org.jsoup.Connection.Request;
                    public cookie(name: string, value: string): any;
                    public parser(): org.jsoup.parser.Parser;
                    public method(): org.jsoup.Connection.Method;
                    public maxBodySize(): number;
                    public removeHeader(param0: string): any;
                    public ignoreContentType(ignoreContentType: boolean): org.jsoup.Connection.Request;
                    public method(method: org.jsoup.Connection.Method): any;
                    public sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
                    public url(param0: java.net.URL): any;
                    public followRedirects(followRedirects: boolean): org.jsoup.Connection.Request;
                    public ignoreHttpErrors(param0: boolean): org.jsoup.Connection.Request;
                    public parser(parser: org.jsoup.parser.Parser): org.jsoup.helper.HttpConnection.Request;
                    public postDataCharset(): string;
                    public sslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
                    public cookie(param0: string): string;
                    public timeout(): number;
                    public header(param0: string): string;
                    public removeCookie(param0: string): any;
                    public headers(param0: string): java.util.List<string>;
                    public proxy(param0: string, param1: number): org.jsoup.Connection.Request;
                    public postDataCharset(charset: string): org.jsoup.Connection.Request;
                    public ignoreContentType(param0: boolean): org.jsoup.Connection.Request;
                    public header(param0: string, param1: string): any;
                    public addHeader(param0: string, param1: string): any;
                    public ignoreContentType(): boolean;
                    public ignoreHttpErrors(): boolean;
                    public hasHeaderWithValue(param0: string, param1: string): boolean;
                    public url(): java.net.URL;
                    public header(name: string, value: string): any;
                    public hasCookie(param0: string): boolean;
                    public postDataCharset(param0: string): org.jsoup.Connection.Request;
                    public requestBody(param0: string): org.jsoup.Connection.Request;
                    public ignoreHttpErrors(ignoreHttpErrors: boolean): org.jsoup.Connection.Request;
                    public proxy(host: string, port: number): org.jsoup.helper.HttpConnection.Request;
                    public multiHeaders(): java.util.Map<string, java.util.List<string>>;
                    public timeout(param0: number): org.jsoup.Connection.Request;
                    public timeout(millis: number): org.jsoup.helper.HttpConnection.Request;
                    public maxBodySize(bytes: number): org.jsoup.Connection.Request;
                    public proxy(proxy: java.net.Proxy): org.jsoup.helper.HttpConnection.Request;
                    public proxy(param0: java.net.Proxy): org.jsoup.Connection.Request;
                    public hasHeader(param0: string): boolean;
                    public cookie(param0: string, param1: string): any;
                    public requestBody(): string;
                }
                export class Response extends org.jsoup.helper.HttpConnection.Base<org.jsoup.Connection.Response> implements org.jsoup.Connection.Response {
                    public static class: java.lang.Class<org.jsoup.helper.HttpConnection.Response>;
                    public cookie(param0: string): string;
                    public header(param0: string): string;
                    public removeCookie(param0: string): any;
                    public headers(param0: string): java.util.List<string>;
                    public method(param0: org.jsoup.Connection.Method): any;
                    public cookies(): java.util.Map<string, string>;
                    public statusMessage(): string;
                    public bodyStream(): java.io.BufferedInputStream;
                    public url(url: java.net.URL): any;
                    public header(param0: string, param1: string): any;
                    public addHeader(param0: string, param1: string): any;
                    public headers(): java.util.Map<string, string>;
                    public bufferUp(): org.jsoup.Connection.Response;
                    public bodyAsBytes(): androidNative.Array<number>;
                    public contentType(): string;
                    public parse(): org.jsoup.nodes.Document;
                    public hasHeaderWithValue(param0: string, param1: string): boolean;
                    public cookie(name: string, value: string): any;
                    public url(): java.net.URL;
                    public header(name: string, value: string): any;
                    public hasCookie(param0: string): boolean;
                    public charset(param0: string): org.jsoup.Connection.Response;
                    public statusCode(): number;
                    public method(): org.jsoup.Connection.Method;
                    public charset(): string;
                    public charset(charset: string): org.jsoup.helper.HttpConnection.Response;
                    public removeHeader(param0: string): any;
                    public multiHeaders(): java.util.Map<string, java.util.List<string>>;
                    public method(method: org.jsoup.Connection.Method): any;
                    public body(): string;
                    public url(param0: java.net.URL): any;
                    public hasHeader(param0: string): boolean;
                    public cookie(param0: string, param1: string): any;
                }
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module helper {
            export class Validate {
                public static class: java.lang.Class<org.jsoup.helper.Validate>;
                public static noNullElements(obj: androidNative.Array<any>, objects: string): void;
                public static notEmpty(string: string): void;
                public static isTrue(val: boolean, msg: string): void;
                public static fail(msg: string): void;
                public static noNullElements(objects: androidNative.Array<any>): void;
                public static isFalse(val: boolean, msg: string): void;
                public static notEmpty(string: string, msg: string): void;
                public static isFalse(val: boolean): void;
                public static notNull(obj: any, msg: string): void;
                public static isTrue(val: boolean): void;
                public static notNull(obj: any): void;
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module helper {
            export class W3CDom {
                public static class: java.lang.Class<org.jsoup.helper.W3CDom>;
                public factory: javax.xml.parsers.DocumentBuilderFactory;
                public asString(writer: org.w3c.dom.Document): string;
                public convert(in_: org.jsoup.nodes.Document, out: org.w3c.dom.Document): void;
                public fromJsoup(builder: org.jsoup.nodes.Document): org.w3c.dom.Document;
                public constructor();
            }
            export module W3CDom {
                export class W3CBuilder extends org.jsoup.select.NodeVisitor {
                    public static class: java.lang.Class<org.jsoup.helper.W3CDom.W3CBuilder>;
                    public tail(source: org.jsoup.nodes.Node, depth: number): void;
                    public head(prefix: org.jsoup.nodes.Node, namespace: number): void;
                    public tail(param0: org.jsoup.nodes.Node, param1: number): void;
                    public constructor(doc: org.w3c.dom.Document);
                    public head(param0: org.jsoup.nodes.Node, param1: number): void;
                }
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module internal {
            export class ConstrainableInputStream {
                public static class: java.lang.Class<org.jsoup.internal.ConstrainableInputStream>;
                public reset(): void;
                public read(e: androidNative.Array<number>, this_: number, b: number): number;
                public timeout(startTimeNanos: number, timeoutMillis: number): org.jsoup.internal.ConstrainableInputStream;
                public static wrap(in_: java.io.InputStream, bufferSize: number, maxSize: number): org.jsoup.internal.ConstrainableInputStream;
                public readToByteBuffer(max: number): java.nio.ByteBuffer;
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module internal {
            export class Normalizer {
                public static class: java.lang.Class<org.jsoup.internal.Normalizer>;
                public static lowerCase(input: string): string;
                public static normalize(input: string): string;
                public constructor();
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module internal {
            export class StringUtil {
                public static class: java.lang.Class<org.jsoup.internal.StringUtil>;
                public static padding(i: number): string;
                public static in(i: string, needle: androidNative.Array<string>): boolean;
                public static isBlank(i: string): boolean;
                public static join(strings: androidNative.Array<string>, sep: string): string;
                public static isActuallyWhitespace(c: number): boolean;
                public static inSorted(needle: string, haystack: androidNative.Array<string>): boolean;
                public static normaliseWhitespace(string: string): string;
                public constructor();
                public static releaseBuilder(sb: java.lang.StringBuilder): string;
                public static resolve(base: string, abs: string): string;
                public static borrowBuilder(): java.lang.StringBuilder;
                public static join(strings: java.util.Collection<any>, sep: string): string;
                public static appendNormalisedWhitespace(c: java.lang.StringBuilder, i: string, accum: boolean): void;
                public static join(strings: java.util.Iterator<any>, sep: string): string;
                public static isNumeric(i: string): boolean;
                public static isWhitespace(c: number): boolean;
                public static resolve(base: java.net.URL, relUrl: string): java.net.URL;
                public static isInvisibleChar(c: number): boolean;
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module nodes {
            export class Attribute extends java.lang.Object {
                public static class: java.lang.Class<org.jsoup.nodes.Attribute>;
                /** @deprecated */
                public isBooleanAttribute(): boolean;
                public static html(key: string, val: string, accum: java.lang.Appendable, out: org.jsoup.nodes.Document.OutputSettings): void;
                public html(accum: java.lang.Appendable, out: org.jsoup.nodes.Document.OutputSettings): void;
                public clone(): org.jsoup.nodes.Attribute;
                public setValue(this_: string): string;
                public static createFromEncoded(unencodedKey: string, encodedValue: string): org.jsoup.nodes.Attribute;
                public getValue(): string;
                public static isBooleanAttribute(key: string): boolean;
                public setKey(this_: string): void;
                public toString(): string;
                public getKey(): string;
                public shouldCollapseAttribute(out: org.jsoup.nodes.Document.OutputSettings): boolean;
                public static shouldCollapseAttribute(key: string, val: string, out: org.jsoup.nodes.Document.OutputSettings): boolean;
                public static isDataAttribute(key: string): boolean;
                public hashCode(): number;
                public isDataAttribute(): boolean;
                public equals(o: any): boolean;
                public constructor(key: string, value: string);
                public html(): string;
                public constructor(key: string, val: string, parent: org.jsoup.nodes.Attributes);
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module nodes {
            export class Attributes extends java.lang.Object {
                public static class: java.lang.Class<org.jsoup.nodes.Attributes>;
                public static dataPrefix: string = "data-";
                public get(key: string): string;
                public dataset(): java.util.Map<string, string>;
                public getIgnoreCase(key: string): string;
                public addAll(this_: org.jsoup.nodes.Attributes): void;
                public put(key: string, value: boolean): org.jsoup.nodes.Attributes;
                public hasKeyIgnoreCase(key: string): boolean;
                public toString(): string;
                public constructor();
                public size(): number;
                public hasKey(key: string): boolean;
                public normalize(): void;
                public remove(key: string): void;
                public asList(): java.util.List<org.jsoup.nodes.Attribute>;
                public hashCode(): number;
                public removeIgnoreCase(key: string): void;
                public put(key: string, value: string): org.jsoup.nodes.Attributes;
                public equals(o: any): boolean;
                public clone(): org.jsoup.nodes.Attributes;
                public put(attribute: org.jsoup.nodes.Attribute): org.jsoup.nodes.Attributes;
                public iterator(): java.util.Iterator<org.jsoup.nodes.Attribute>;
                public html(): string;
            }
            export module Attributes {
                export class Dataset extends java.util.AbstractMap<string, string> {
                    public static class: java.lang.Class<org.jsoup.nodes.Attributes.Dataset>;
                    public put(key: string, value: string): string;
                    public entrySet(): java.util.Set<java.util.Map.Entry<string, string>>;
                }
                export module Dataset {
                    export class DatasetIterator extends java.util.Iterator<java.util.Map.Entry<string, string>> {
                        public static class: java.lang.Class<org.jsoup.nodes.Attributes.Dataset.DatasetIterator>;
                        public next(): java.util.Map.Entry<string, string>;
                        public hasNext(): boolean;
                        public remove(): void;
                    }
                    export class EntrySet extends java.util.AbstractSet<java.util.Map.Entry<string, string>> {
                        public static class: java.lang.Class<org.jsoup.nodes.Attributes.Dataset.EntrySet>;
                        public iterator(): java.util.Iterator<java.util.Map.Entry<string, string>>;
                        public size(): number;
                    }
                }
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module nodes {
            export class BooleanAttribute extends org.jsoup.nodes.Attribute {
                public static class: java.lang.Class<org.jsoup.nodes.BooleanAttribute>;
                public constructor(key: string);
                public constructor(key: string, value: string);
                public static isBooleanAttribute(key: string): boolean;
                public constructor(key: string, val: string, parent: org.jsoup.nodes.Attributes);
                public isBooleanAttribute(): boolean;
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module nodes {
            export class CDataNode extends org.jsoup.nodes.TextNode {
                public static class: java.lang.Class<org.jsoup.nodes.CDataNode>;
                public nodeName(): string;
                /** @deprecated */
                public constructor(text: string, baseUri: string);
                public text(text: string): org.jsoup.nodes.TextNode;
                public constructor(text: string);
                public text(): string;
                public constructor();
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module nodes {
            export class Comment extends org.jsoup.nodes.LeafNode {
                public static class: java.lang.Class<org.jsoup.nodes.Comment>;
                public isXmlDeclaration(): boolean;
                public asXmlDeclaration(): org.jsoup.nodes.XmlDeclaration;
                public constructor(data: string);
                public nodeName(): string;
                public getData(): string;
                /** @deprecated */
                public constructor(data: string, baseUri: string);
                public toString(): string;
                public constructor();
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module nodes {
            export class DataNode extends org.jsoup.nodes.LeafNode {
                public static class: java.lang.Class<org.jsoup.nodes.DataNode>;
                public constructor(data: string);
                public nodeName(): string;
                public setWholeData(data: string): org.jsoup.nodes.DataNode;
                public static createFromEncoded(encodedData: string, baseUri: string): org.jsoup.nodes.DataNode;
                /** @deprecated */
                public constructor(data: string, baseUri: string);
                public toString(): string;
                public getWholeData(): string;
                public constructor();
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module nodes {
            export class Document extends org.jsoup.nodes.Element {
                public static class: java.lang.Class<org.jsoup.nodes.Document>;
                public title(title: string): void;
                public clone(): org.jsoup.nodes.Node;
                public outputSettings(): org.jsoup.nodes.Document.OutputSettings;
                public static createShell(baseUri: string): org.jsoup.nodes.Document;
                public outerHtml(): string;
                public clone(): org.jsoup.nodes.Document;
                public quirksMode(): org.jsoup.nodes.Document.QuirksMode;
                public outerHtml(accum: java.lang.Appendable): void;
                public text(): string;
                public text(text: string): org.jsoup.nodes.Element;
                public constructor();
                public parser(parser: org.jsoup.parser.Parser): org.jsoup.nodes.Document;
                public charset(): java.nio.charset.Charset;
                public updateMetaCharsetElement(): boolean;
                public outputSettings(outputSettings: org.jsoup.nodes.Document.OutputSettings): org.jsoup.nodes.Document;
                public title(): string;
                public constructor(baseUri: string);
                public nodeName(): string;
                public charset(charset: java.nio.charset.Charset): void;
                public createElement(tagName: string): org.jsoup.nodes.Element;
                public location(): string;
                public normalise(): org.jsoup.nodes.Document;
                public updateMetaCharsetElement(update: boolean): void;
                public clone(): org.jsoup.nodes.Element;
                public constructor(tag: org.jsoup.parser.Tag, baseUri: string);
                public head(): org.jsoup.nodes.Element;
                public body(): org.jsoup.nodes.Element;
                public quirksMode(quirksMode: org.jsoup.nodes.Document.QuirksMode): org.jsoup.nodes.Document;
                public parser(): org.jsoup.parser.Parser;
                public constructor(tag: org.jsoup.parser.Tag, baseUri: string, attributes: org.jsoup.nodes.Attributes);
            }
            export module Document {
                export class OutputSettings {
                    public static class: java.lang.Class<org.jsoup.nodes.Document.OutputSettings>;
                    public clone(): org.jsoup.nodes.Document.OutputSettings;
                    public indentAmount(indentAmount: number): org.jsoup.nodes.Document.OutputSettings;
                    public escapeMode(escapeMode: org.jsoup.nodes.Entities.EscapeMode): org.jsoup.nodes.Document.OutputSettings;
                    public charset(charset: string): org.jsoup.nodes.Document.OutputSettings;
                    public syntax(syntax: org.jsoup.nodes.Document.OutputSettings.Syntax): org.jsoup.nodes.Document.OutputSettings;
                    public prettyPrint(): boolean;
                    public outline(outlineMode: boolean): org.jsoup.nodes.Document.OutputSettings;
                    public escapeMode(): org.jsoup.nodes.Entities.EscapeMode;
                    public outline(): boolean;
                    public constructor();
                    public charset(charset: java.nio.charset.Charset): org.jsoup.nodes.Document.OutputSettings;
                    public syntax(): org.jsoup.nodes.Document.OutputSettings.Syntax;
                    public charset(): java.nio.charset.Charset;
                    public prettyPrint(pretty: boolean): org.jsoup.nodes.Document.OutputSettings;
                    public indentAmount(): number;
                }
                export module OutputSettings {
                    export class Syntax {
                        public static class: java.lang.Class<org.jsoup.nodes.Document.OutputSettings.Syntax>;
                        public static html: org.jsoup.nodes.Document.OutputSettings.Syntax;
                        public static xml: org.jsoup.nodes.Document.OutputSettings.Syntax;
                        public static valueOf(name: string): org.jsoup.nodes.Document.OutputSettings.Syntax;
                        public static values(): androidNative.Array<org.jsoup.nodes.Document.OutputSettings.Syntax>;
                    }
                }
                export class QuirksMode {
                    public static class: java.lang.Class<org.jsoup.nodes.Document.QuirksMode>;
                    public static noQuirks: org.jsoup.nodes.Document.QuirksMode;
                    public static quirks: org.jsoup.nodes.Document.QuirksMode;
                    public static limitedQuirks: org.jsoup.nodes.Document.QuirksMode;
                    public static values(): androidNative.Array<org.jsoup.nodes.Document.QuirksMode>;
                    public static valueOf(name: string): org.jsoup.nodes.Document.QuirksMode;
                }
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module nodes {
            export class DocumentType extends org.jsoup.nodes.LeafNode {
                public static class: java.lang.Class<org.jsoup.nodes.DocumentType>;
                public static PUBLIC_KEY: string = "PUBLIC";
                public static SYSTEM_KEY: string = "SYSTEM";
                public nodeName(): string;
                /** @deprecated */
                public constructor(name: string, publicId: string, systemId: string, baseUri: string);
                public constructor(name: string, publicId: string, systemId: string);
                /** @deprecated */
                public constructor(name: string, pubSysKey: string, publicId: string, systemId: string, baseUri: string);
                public constructor();
                public setPubSysKey(value: string): void;
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module nodes {
            export class Element extends org.jsoup.nodes.Node {
                public static class: java.lang.Class<org.jsoup.nodes.Element>;
                public select(cssQuery: string): org.jsoup.select.Elements;
                public getElementById(id: string): org.jsoup.nodes.Element;
                public after(html: string): org.jsoup.nodes.Element;
                public prependChild(child: org.jsoup.nodes.Node): org.jsoup.nodes.Element;
                public html(this_: java.lang.Appendable): java.lang.Appendable;
                public child(index: number): org.jsoup.nodes.Element;
                public getElementsByAttributeValueMatching(key: string, pattern: java.util.regex.Pattern): org.jsoup.select.Elements;
                public normalName(): string;
                public shallowClone(): org.jsoup.nodes.Element;
                public dataNodes(): java.util.List<org.jsoup.nodes.DataNode>;
                public cssSelector(): string;
                public hasClass(this_: string): boolean;
                public constructor(tag: string);
                public prependElement(tagName: string): org.jsoup.nodes.Element;
                public previousElementSiblings(): org.jsoup.select.Elements;
                public after(node: org.jsoup.nodes.Node): org.jsoup.nodes.Element;
                public nextElementSiblings(): org.jsoup.select.Elements;
                public val(): string;
                public prependText(text: string): org.jsoup.nodes.Element;
                public baseUri(): string;
                public after(html: string): org.jsoup.nodes.Node;
                public getElementsMatchingText(pattern: java.util.regex.Pattern): org.jsoup.select.Elements;
                public wholeText(): string;
                public getElementsByIndexEquals(index: number): org.jsoup.select.Elements;
                public getElementsByTag(tagName: string): org.jsoup.select.Elements;
                public text(): string;
                public nextElementSibling(): org.jsoup.nodes.Element;
                public doClone(e: org.jsoup.nodes.Node): org.jsoup.nodes.Node;
                public parent(): org.jsoup.nodes.Element;
                public getElementsByAttributeValue(key: string, value: string): org.jsoup.select.Elements;
                public className(): string;
                public getElementsByAttributeValueContaining(key: string, match: string): org.jsoup.select.Elements;
                public insertChildren(index: number, children: androidNative.Array<org.jsoup.nodes.Node>): org.jsoup.nodes.Element;
                public getElementsByAttribute(key: string): org.jsoup.select.Elements;
                public lastElementSibling(): org.jsoup.nodes.Element;
                public getElementsByAttributeValueNot(key: string, value: string): org.jsoup.select.Elements;
                public getElementsMatchingOwnText(e: string): org.jsoup.select.Elements;
                public append(html: string): org.jsoup.nodes.Element;
                public parents(): org.jsoup.select.Elements;
                public ownText(): string;
                public before(node: org.jsoup.nodes.Node): org.jsoup.nodes.Node;
                public toggleClass(className: string): org.jsoup.nodes.Element;
                public appendElement(tagName: string): org.jsoup.nodes.Element;
                public firstElementSibling(): org.jsoup.nodes.Element;
                public html(appendable: java.lang.Appendable): java.lang.Appendable;
                public clone(): org.jsoup.nodes.Element;
                public constructor(tag: org.jsoup.parser.Tag, baseUri: string);
                public attr(attributeKey: string, attributeValue: string): org.jsoup.nodes.Element;
                public empty(): org.jsoup.nodes.Element;
                public elementSiblingIndex(): number;
                public doSetBaseUri(baseUri: string): void;
                public getElementsByAttributeValueMatching(e: string, this_: string): org.jsoup.select.Elements;
                public addClass(className: string): org.jsoup.nodes.Element;
                public val(value: string): org.jsoup.nodes.Element;
                public getElementsMatchingOwnText(pattern: java.util.regex.Pattern): org.jsoup.select.Elements;
                public textNodes(): java.util.List<org.jsoup.nodes.TextNode>;
                public after(node: org.jsoup.nodes.Node): org.jsoup.nodes.Node;
                public attr(attributeKey: string, attributeValue: string): org.jsoup.nodes.Node;
                public clone(): org.jsoup.nodes.Node;
                public is(evaluator: org.jsoup.select.Evaluator): boolean;
                public tag(): org.jsoup.parser.Tag;
                public is(cssQuery: string): boolean;
                public isBlock(): boolean;
                public text(text: string): org.jsoup.nodes.Element;
                public previousElementSibling(): org.jsoup.nodes.Element;
                public getElementsMatchingText(e: string): org.jsoup.select.Elements;
                public constructor();
                public attr(attributeKey: string, attributeValue: boolean): org.jsoup.nodes.Element;
                public tagName(): string;
                public siblingElements(): org.jsoup.select.Elements;
                public attributes(): org.jsoup.nodes.Attributes;
                public classNames(): java.util.Set<string>;
                public parent(): org.jsoup.nodes.Node;
                public ensureChildNodes(): java.util.List<org.jsoup.nodes.Node>;
                public shallowClone(): org.jsoup.nodes.Node;
                public nodeName(): string;
                public doClone(parent: org.jsoup.nodes.Node): org.jsoup.nodes.Element;
                public getElementsByAttributeValueStarting(key: string, valuePrefix: string): org.jsoup.select.Elements;
                public data(): string;
                public selectFirst(cssQuery: string): org.jsoup.nodes.Element;
                public getElementsByClass(className: string): org.jsoup.select.Elements;
                public getElementsContainingOwnText(searchText: string): org.jsoup.select.Elements;
                public appendTo(parent: org.jsoup.nodes.Element): org.jsoup.nodes.Element;
                public dataset(): java.util.Map<string, string>;
                public getElementsByAttributeStarting(keyPrefix: string): org.jsoup.select.Elements;
                public html(html: string): org.jsoup.nodes.Element;
                public id(): string;
                public appendChild(child: org.jsoup.nodes.Node): org.jsoup.nodes.Element;
                public getElementsContainingText(searchText: string): org.jsoup.select.Elements;
                public insertChildren(index: number, children: java.util.Collection<any>): org.jsoup.nodes.Element;
                public wrap(html: string): org.jsoup.nodes.Element;
                public classNames(classNames: java.util.Set<string>): org.jsoup.nodes.Element;
                public tagName(tagName: string): org.jsoup.nodes.Element;
                public hasAttributes(): boolean;
                public removeClass(className: string): org.jsoup.nodes.Element;
                public getElementsByIndexGreaterThan(index: number): org.jsoup.select.Elements;
                public hasText(): boolean;
                public getElementsByIndexLessThan(index: number): org.jsoup.select.Elements;
                public before(node: org.jsoup.nodes.Node): org.jsoup.nodes.Element;
                public prepend(html: string): org.jsoup.nodes.Element;
                public attr(attributeKey: string): string;
                public before(html: string): org.jsoup.nodes.Element;
                public before(html: string): org.jsoup.nodes.Node;
                public getAllElements(): org.jsoup.select.Elements;
                public childNodeSize(): number;
                public appendText(text: string): org.jsoup.nodes.Element;
                public wrap(i: string): org.jsoup.nodes.Node;
                public children(): org.jsoup.select.Elements;
                public constructor(tag: org.jsoup.parser.Tag, baseUri: string, attributes: org.jsoup.nodes.Attributes);
                public getElementsByAttributeValueEnding(key: string, valueSuffix: string): org.jsoup.select.Elements;
                public html(): string;
            }
            export module Element {
                export class NodeList extends org.jsoup.helper.ChangeNotifyingArrayList<org.jsoup.nodes.Node> {
                    public static class: java.lang.Class<org.jsoup.nodes.Element.NodeList>;
                    public onContentsChanged(): void;
                }
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module nodes {
            export class Entities {
                public static class: java.lang.Class<org.jsoup.nodes.Entities>;
                public static isBaseNamedEntity(name: string): boolean;
                public static getByName(name: string): string;
                public static isNamedEntity(name: string): boolean;
                public static codepointsForName(name: string, codepoints: androidNative.Array<number>): number;
                /** @deprecated */
                public static getCharacterByName(name: string): java.lang.Character;
                public static escape(e: string, string: org.jsoup.nodes.Document.OutputSettings): string;
                public static unescape(string: string): string;
                public static escape(string: string): string;
            }
            export module Entities {
                export class CoreCharset {
                    public static class: java.lang.Class<org.jsoup.nodes.Entities.CoreCharset>;
                    public static ascii: org.jsoup.nodes.Entities.CoreCharset;
                    public static utf: org.jsoup.nodes.Entities.CoreCharset;
                    public static fallback: org.jsoup.nodes.Entities.CoreCharset;
                    public static values(): androidNative.Array<org.jsoup.nodes.Entities.CoreCharset>;
                    public static valueOf(name: string): org.jsoup.nodes.Entities.CoreCharset;
                }
                export class EscapeMode {
                    public static class: java.lang.Class<org.jsoup.nodes.Entities.EscapeMode>;
                    public static xhtml: org.jsoup.nodes.Entities.EscapeMode;
                    public static base: org.jsoup.nodes.Entities.EscapeMode;
                    public static extended: org.jsoup.nodes.Entities.EscapeMode;
                    public static values(): androidNative.Array<org.jsoup.nodes.Entities.EscapeMode>;
                    public static valueOf(name: string): org.jsoup.nodes.Entities.EscapeMode;
                }
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module nodes {
            export class EntitiesData {
                public static class: java.lang.Class<org.jsoup.nodes.EntitiesData>;
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module nodes {
            export class FormElement extends org.jsoup.nodes.Element {
                public static class: java.lang.Class<org.jsoup.nodes.FormElement>;
                public addElement(element: org.jsoup.nodes.Element): org.jsoup.nodes.FormElement;
                public formData(): java.util.List<org.jsoup.Connection.KeyVal>;
                public constructor(tag: org.jsoup.parser.Tag, baseUri: string);
                public removeChild(out: org.jsoup.nodes.Node): void;
                public submit(): org.jsoup.Connection;
                public constructor(tag: string);
                public elements(): org.jsoup.select.Elements;
                public constructor(tag: org.jsoup.parser.Tag, baseUri: string, attributes: org.jsoup.nodes.Attributes);
                public constructor();
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module nodes {
            export abstract class LeafNode extends org.jsoup.nodes.Node {
                public static class: java.lang.Class<org.jsoup.nodes.LeafNode>;
                public hasAttributes(): boolean;
                public attr(attributeKey: string, attributeValue: string): org.jsoup.nodes.Node;
                public ensureChildNodes(): java.util.List<org.jsoup.nodes.Node>;
                public attr(key: string, value: string): org.jsoup.nodes.Node;
                public hasAttr(key: string): boolean;
                public childNodeSize(): number;
                public removeAttr(key: string): org.jsoup.nodes.Node;
                public doSetBaseUri(baseUri: string): void;
                public baseUri(): string;
                public absUrl(key: string): string;
                public attributes(): org.jsoup.nodes.Attributes;
                public attr(key: string): string;
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module nodes {
            export abstract class Node {
                public static class: java.lang.Class<org.jsoup.nodes.Node>;
                public attr(attributeKey: string, attributeValue: string): org.jsoup.nodes.Node;
                public clone(): org.jsoup.nodes.Node;
                public siblingNodes(): java.util.List<org.jsoup.nodes.Node>;
                public outerHtml(): string;
                public constructor();
                public hasParent(): boolean;
                public ownerDocument(): org.jsoup.nodes.Document;
                public hasAttr(this_: string): boolean;
                public nextSibling(): org.jsoup.nodes.Node;
                public absUrl(attributeKey: string): string;
                public attributes(): org.jsoup.nodes.Attributes;
                public parent(): org.jsoup.nodes.Node;
                public ensureChildNodes(): java.util.List<org.jsoup.nodes.Node>;
                public addChildren(this_: androidNative.Array<org.jsoup.nodes.Node>): void;
                public shallowClone(): org.jsoup.nodes.Node;
                public replaceWith(in_: org.jsoup.nodes.Node): void;
                public nodeName(): string;
                public toString(): string;
                public doSetBaseUri(param0: string): void;
                public removeAttr(attributeKey: string): org.jsoup.nodes.Node;
                public unwrap(): org.jsoup.nodes.Node;
                public hasSameValue(o: any): boolean;
                public removeChild(out: org.jsoup.nodes.Node): void;
                public setBaseUri(baseUri: string): void;
                public baseUri(): string;
                public siblingIndex(): number;
                public after(html: string): org.jsoup.nodes.Node;
                public parentNode(): org.jsoup.nodes.Node;
                public reparentChild(child: org.jsoup.nodes.Node): void;
                public root(): org.jsoup.nodes.Node;
                public outerHtml(accum: java.lang.Appendable): void;
                public childNodesCopy(): java.util.List<org.jsoup.nodes.Node>;
                public doClone(e: org.jsoup.nodes.Node): org.jsoup.nodes.Node;
                public replaceChild(out: org.jsoup.nodes.Node, in_: org.jsoup.nodes.Node): void;
                public filter(nodeFilter: org.jsoup.select.NodeFilter): org.jsoup.nodes.Node;
                public childNode(index: number): org.jsoup.nodes.Node;
                public setSiblingIndex(siblingIndex: number): void;
                public hasAttributes(): boolean;
                public setParentNode(parentNode: org.jsoup.nodes.Node): void;
                public traverse(nodeVisitor: org.jsoup.select.NodeVisitor): org.jsoup.nodes.Node;
                public childNodes(): java.util.List<org.jsoup.nodes.Node>;
                public equals(o: any): boolean;
                public clearAttributes(): org.jsoup.nodes.Node;
                public remove(): void;
                public previousSibling(): org.jsoup.nodes.Node;
                public attr(attributeKey: string): string;
                public before(node: org.jsoup.nodes.Node): org.jsoup.nodes.Node;
                public childNodesAsArray(): androidNative.Array<org.jsoup.nodes.Node>;
                public before(html: string): org.jsoup.nodes.Node;
                public html(appendable: java.lang.Appendable): java.lang.Appendable;
                public childNodeSize(): number;
                public wrap(i: string): org.jsoup.nodes.Node;
                public addChildren(this_: number, index: androidNative.Array<org.jsoup.nodes.Node>): void;
                public indent(accum: java.lang.Appendable, depth: number, out: org.jsoup.nodes.Document.OutputSettings): void;
                public after(node: org.jsoup.nodes.Node): org.jsoup.nodes.Node;
            }
            export module Node {
                export class OuterHtmlVisitor extends org.jsoup.select.NodeVisitor {
                    public static class: java.lang.Class<org.jsoup.nodes.Node.OuterHtmlVisitor>;
                    public tail(this_: org.jsoup.nodes.Node, node: number): void;
                    public head(this_: org.jsoup.nodes.Node, node: number): void;
                    public tail(param0: org.jsoup.nodes.Node, param1: number): void;
                    public head(param0: org.jsoup.nodes.Node, param1: number): void;
                }
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module nodes {
            export class NodeUtils {
                public static class: java.lang.Class<org.jsoup.nodes.NodeUtils>;
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module nodes {
            export class PseudoTextElement extends org.jsoup.nodes.Element {
                public static class: java.lang.Class<org.jsoup.nodes.PseudoTextElement>;
                public constructor(tag: org.jsoup.parser.Tag, baseUri: string);
                public constructor(tag: string);
                public constructor(tag: org.jsoup.parser.Tag, baseUri: string, attributes: org.jsoup.nodes.Attributes);
                public constructor();
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module nodes {
            export class TextNode extends org.jsoup.nodes.LeafNode {
                public static class: java.lang.Class<org.jsoup.nodes.TextNode>;
                public splitText(offset: number): org.jsoup.nodes.TextNode;
                public static createFromEncoded(encodedText: string): org.jsoup.nodes.TextNode;
                public nodeName(): string;
                /** @deprecated */
                public constructor(text: string, baseUri: string);
                public text(text: string): org.jsoup.nodes.TextNode;
                /** @deprecated */
                public static createFromEncoded(encodedText: string, baseUri: string): org.jsoup.nodes.TextNode;
                public getWholeText(): string;
                public constructor(text: string);
                public text(): string;
                public isBlank(): boolean;
                public toString(): string;
                public constructor();
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module nodes {
            export class XmlDeclaration extends org.jsoup.nodes.LeafNode {
                public static class: java.lang.Class<org.jsoup.nodes.XmlDeclaration>;
                public getWholeDeclaration(): string;
                public name(): string;
                public nodeName(): string;
                public constructor(name: string, isProcessingInstruction: boolean);
                /** @deprecated */
                public constructor(name: string, baseUri: string, isProcessingInstruction: boolean);
                public toString(): string;
                public constructor();
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module parser {
            export class CharacterReader {
                public static class: java.lang.Class<org.jsoup.parser.CharacterReader>;
                public consumeTo(this_: string): string;
                public current(): string;
                public constructor(input: java.io.Reader);
                public constructor(input: string);
                public consumeToAny(this_: androidNative.Array<string>): string;
                public pos(): number;
                public advance(): void;
                public constructor(input: java.io.Reader, sz: number);
                public isEmpty(): boolean;
                public toString(): string;
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module parser {
            export class HtmlTreeBuilder extends org.jsoup.parser.TreeBuilder {
                public static class: java.lang.Class<org.jsoup.parser.HtmlTreeBuilder>;
                public static MaxScopeSearchDepth: number = 100;
                public initialiseParse(input: java.io.Reader, baseUri: string, parser: org.jsoup.parser.Parser): void;
                public process(token: org.jsoup.parser.Token): boolean;
                public toString(): string;
                public constructor();
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module parser {
            export abstract class HtmlTreeBuilderState {
                public static class: java.lang.Class<org.jsoup.parser.HtmlTreeBuilderState>;
                public static Initial: org.jsoup.parser.HtmlTreeBuilderState;
                public static BeforeHtml: org.jsoup.parser.HtmlTreeBuilderState;
                public static BeforeHead: org.jsoup.parser.HtmlTreeBuilderState;
                public static InHead: org.jsoup.parser.HtmlTreeBuilderState;
                public static InHeadNoscript: org.jsoup.parser.HtmlTreeBuilderState;
                public static AfterHead: org.jsoup.parser.HtmlTreeBuilderState;
                public static InBody: org.jsoup.parser.HtmlTreeBuilderState;
                public static Text: org.jsoup.parser.HtmlTreeBuilderState;
                public static InTable: org.jsoup.parser.HtmlTreeBuilderState;
                public static InTableText: org.jsoup.parser.HtmlTreeBuilderState;
                public static InCaption: org.jsoup.parser.HtmlTreeBuilderState;
                public static InColumnGroup: org.jsoup.parser.HtmlTreeBuilderState;
                public static InTableBody: org.jsoup.parser.HtmlTreeBuilderState;
                public static InRow: org.jsoup.parser.HtmlTreeBuilderState;
                public static InCell: org.jsoup.parser.HtmlTreeBuilderState;
                public static InSelect: org.jsoup.parser.HtmlTreeBuilderState;
                public static InSelectInTable: org.jsoup.parser.HtmlTreeBuilderState;
                public static AfterBody: org.jsoup.parser.HtmlTreeBuilderState;
                public static InFrameset: org.jsoup.parser.HtmlTreeBuilderState;
                public static AfterFrameset: org.jsoup.parser.HtmlTreeBuilderState;
                public static AfterAfterBody: org.jsoup.parser.HtmlTreeBuilderState;
                public static AfterAfterFrameset: org.jsoup.parser.HtmlTreeBuilderState;
                public static ForeignContent: org.jsoup.parser.HtmlTreeBuilderState;
                public static values(): androidNative.Array<org.jsoup.parser.HtmlTreeBuilderState>;
                public static valueOf(name: string): org.jsoup.parser.HtmlTreeBuilderState;
            }
            export module HtmlTreeBuilderState {
                export class Constants {
                    public static class: java.lang.Class<org.jsoup.parser.HtmlTreeBuilderState.Constants>;
                }
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module parser {
            export class ParseError {
                public static class: java.lang.Class<org.jsoup.parser.ParseError>;
                public getErrorMessage(): string;
                public getPosition(): number;
                public toString(): string;
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module parser {
            export class ParseErrorList extends java.util.ArrayList<org.jsoup.parser.ParseError> {
                public static class: java.lang.Class<org.jsoup.parser.ParseErrorList>;
                public static tracking(maxSize: number): org.jsoup.parser.ParseErrorList;
                public static noTracking(): org.jsoup.parser.ParseErrorList;
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module parser {
            export class ParseSettings {
                public static class: java.lang.Class<org.jsoup.parser.ParseSettings>;
                public static htmlDefault: org.jsoup.parser.ParseSettings;
                public static preserveCase: org.jsoup.parser.ParseSettings;
                public normalizeTag(name: string): string;
                public normalizeAttribute(name: string): string;
                public constructor(tag: boolean, attribute: boolean);
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module parser {
            export class Parser {
                public static class: java.lang.Class<org.jsoup.parser.Parser>;
                public settings(settings: org.jsoup.parser.ParseSettings): org.jsoup.parser.Parser;
                /** @deprecated */
                public static parseBodyFragmentRelaxed(bodyHtml: string, baseUri: string): org.jsoup.nodes.Document;
                public parseFragmentInput(fragment: string, context: org.jsoup.nodes.Element, baseUri: string): java.util.List<org.jsoup.nodes.Node>;
                public static parseBodyFragment(i: string, node: string): org.jsoup.nodes.Document;
                public parseInput(inputHtml: java.io.Reader, baseUri: string): org.jsoup.nodes.Document;
                public settings(): org.jsoup.parser.ParseSettings;
                public getTreeBuilder(): org.jsoup.parser.TreeBuilder;
                public static parseXmlFragment(fragmentXml: string, baseUri: string): java.util.List<org.jsoup.nodes.Node>;
                public static parseFragment(fragmentHtml: string, context: org.jsoup.nodes.Element, baseUri: string): java.util.List<org.jsoup.nodes.Node>;
                public isTrackErrors(): boolean;
                public setTreeBuilder(treeBuilder: org.jsoup.parser.TreeBuilder): org.jsoup.parser.Parser;
                public static htmlParser(): org.jsoup.parser.Parser;
                public parseInput(html: string, baseUri: string): org.jsoup.nodes.Document;
                public getErrors(): org.jsoup.parser.ParseErrorList;
                public constructor(treeBuilder: org.jsoup.parser.TreeBuilder);
                public setTrackErrors(maxErrors: number): org.jsoup.parser.Parser;
                public static parseFragment(fragmentHtml: string, context: org.jsoup.nodes.Element, baseUri: string, errorList: org.jsoup.parser.ParseErrorList): java.util.List<org.jsoup.nodes.Node>;
                public static unescapeEntities(string: string, inAttribute: boolean): string;
                public static parse(html: string, baseUri: string): org.jsoup.nodes.Document;
                public static xmlParser(): org.jsoup.parser.Parser;
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module parser {
            export class Tag {
                public static class: java.lang.Class<org.jsoup.parser.Tag>;
                public formatAsBlock(): boolean;
                public isInline(): boolean;
                public isKnownTag(): boolean;
                public static valueOf(tagName: string): org.jsoup.parser.Tag;
                public static valueOf(tagName: string, settings: org.jsoup.parser.ParseSettings): org.jsoup.parser.Tag;
                /** @deprecated */
                public canContainBlock(): boolean;
                public preserveWhitespace(): boolean;
                public getName(): string;
                public isBlock(): boolean;
                public toString(): string;
                public isSelfClosing(): boolean;
                public isData(): boolean;
                public isFormListed(): boolean;
                public hashCode(): number;
                public equals(o: any): boolean;
                public isEmpty(): boolean;
                public normalName(): string;
                public static isKnownTag(tagName: string): boolean;
                public isFormSubmittable(): boolean;
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module parser {
            export abstract class Token {
                public static class: java.lang.Class<org.jsoup.parser.Token>;
            }
            export module Token {
                export class CData extends org.jsoup.parser.Token.Character {
                    public static class: java.lang.Class<org.jsoup.parser.Token.CData>;
                    public toString(): string;
                }
                export class Character extends org.jsoup.parser.Token {
                    public static class: java.lang.Class<org.jsoup.parser.Token.Character>;
                    public toString(): string;
                }
                export class Comment extends org.jsoup.parser.Token {
                    public static class: java.lang.Class<org.jsoup.parser.Token.Comment>;
                    public toString(): string;
                }
                export class Doctype extends org.jsoup.parser.Token {
                    public static class: java.lang.Class<org.jsoup.parser.Token.Doctype>;
                    public isForceQuirks(): boolean;
                    public getSystemIdentifier(): string;
                }
                export class EOF extends org.jsoup.parser.Token {
                    public static class: java.lang.Class<org.jsoup.parser.Token.EOF>;
                }
                export class EndTag extends org.jsoup.parser.Token.Tag {
                    public static class: java.lang.Class<org.jsoup.parser.Token.EndTag>;
                    public toString(): string;
                }
                export class StartTag extends org.jsoup.parser.Token.Tag {
                    public static class: java.lang.Class<org.jsoup.parser.Token.StartTag>;
                    public toString(): string;
                }
                export abstract class Tag extends org.jsoup.parser.Token {
                    public static class: java.lang.Class<org.jsoup.parser.Token.Tag>;
                    public tagName: string;
                    public normalName: string;
                }
                export class TokenType {
                    public static class: java.lang.Class<org.jsoup.parser.Token.TokenType>;
                    public static Doctype: org.jsoup.parser.Token.TokenType;
                    public static StartTag: org.jsoup.parser.Token.TokenType;
                    public static EndTag: org.jsoup.parser.Token.TokenType;
                    public static Comment: org.jsoup.parser.Token.TokenType;
                    public static Character: org.jsoup.parser.Token.TokenType;
                    public static EOF: org.jsoup.parser.Token.TokenType;
                    public static values(): androidNative.Array<org.jsoup.parser.Token.TokenType>;
                    public static valueOf(name: string): org.jsoup.parser.Token.TokenType;
                }
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module parser {
            export class TokenQueue {
                public static class: java.lang.Class<org.jsoup.parser.TokenQueue>;
                public peek(): string;
                public addFirst(c: java.lang.Character): void;
                public matchesCS(seq: string): boolean;
                public constructor(data: string);
                public addFirst(seq: string): void;
                public chompToIgnoreCase(seq: string): string;
                public remainder(): string;
                public consumeTagName(): string;
                public advance(): void;
                public consumeWord(): string;
                public consumeWhitespace(): boolean;
                public matchesWord(): boolean;
                public static unescape(c: string): string;
                public matchChomp(seq: string): boolean;
                public consume(): string;
                public matchesAny(this_: androidNative.Array<string>): boolean;
                public consumeToIgnoreCase(this_: string): string;
                public matchesStartTag(): boolean;
                public consumeAttributeKey(): string;
                public matchesWhitespace(): boolean;
                public isEmpty(): boolean;
                public matches(seq: string): boolean;
                public consumeCssIdentifier(): string;
                public chompBalanced(this_: string, open: string): string;
                public chompTo(seq: string): string;
                public toString(): string;
                public consume(seq: string): void;
                public consumeTo(this_: string): string;
                public consumeToAny(seq: androidNative.Array<string>): string;
                public consumeElementSelector(): string;
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module parser {
            export class Tokeniser {
                public static class: java.lang.Class<org.jsoup.parser.Tokeniser>;
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module parser {
            export abstract class TokeniserState {
                public static class: java.lang.Class<org.jsoup.parser.TokeniserState>;
                public static Data: org.jsoup.parser.TokeniserState;
                public static CharacterReferenceInData: org.jsoup.parser.TokeniserState;
                public static Rcdata: org.jsoup.parser.TokeniserState;
                public static CharacterReferenceInRcdata: org.jsoup.parser.TokeniserState;
                public static Rawtext: org.jsoup.parser.TokeniserState;
                public static ScriptData: org.jsoup.parser.TokeniserState;
                public static PLAINTEXT: org.jsoup.parser.TokeniserState;
                public static TagOpen: org.jsoup.parser.TokeniserState;
                public static EndTagOpen: org.jsoup.parser.TokeniserState;
                public static TagName: org.jsoup.parser.TokeniserState;
                public static RcdataLessthanSign: org.jsoup.parser.TokeniserState;
                public static RCDATAEndTagOpen: org.jsoup.parser.TokeniserState;
                public static RCDATAEndTagName: org.jsoup.parser.TokeniserState;
                public static RawtextLessthanSign: org.jsoup.parser.TokeniserState;
                public static RawtextEndTagOpen: org.jsoup.parser.TokeniserState;
                public static RawtextEndTagName: org.jsoup.parser.TokeniserState;
                public static ScriptDataLessthanSign: org.jsoup.parser.TokeniserState;
                public static ScriptDataEndTagOpen: org.jsoup.parser.TokeniserState;
                public static ScriptDataEndTagName: org.jsoup.parser.TokeniserState;
                public static ScriptDataEscapeStart: org.jsoup.parser.TokeniserState;
                public static ScriptDataEscapeStartDash: org.jsoup.parser.TokeniserState;
                public static ScriptDataEscaped: org.jsoup.parser.TokeniserState;
                public static ScriptDataEscapedDash: org.jsoup.parser.TokeniserState;
                public static ScriptDataEscapedDashDash: org.jsoup.parser.TokeniserState;
                public static ScriptDataEscapedLessthanSign: org.jsoup.parser.TokeniserState;
                public static ScriptDataEscapedEndTagOpen: org.jsoup.parser.TokeniserState;
                public static ScriptDataEscapedEndTagName: org.jsoup.parser.TokeniserState;
                public static ScriptDataDoubleEscapeStart: org.jsoup.parser.TokeniserState;
                public static ScriptDataDoubleEscaped: org.jsoup.parser.TokeniserState;
                public static ScriptDataDoubleEscapedDash: org.jsoup.parser.TokeniserState;
                public static ScriptDataDoubleEscapedDashDash: org.jsoup.parser.TokeniserState;
                public static ScriptDataDoubleEscapedLessthanSign: org.jsoup.parser.TokeniserState;
                public static ScriptDataDoubleEscapeEnd: org.jsoup.parser.TokeniserState;
                public static BeforeAttributeName: org.jsoup.parser.TokeniserState;
                public static AttributeName: org.jsoup.parser.TokeniserState;
                public static AfterAttributeName: org.jsoup.parser.TokeniserState;
                public static BeforeAttributeValue: org.jsoup.parser.TokeniserState;
                public static AttributeValue_doubleQuoted: org.jsoup.parser.TokeniserState;
                public static AttributeValue_singleQuoted: org.jsoup.parser.TokeniserState;
                public static AttributeValue_unquoted: org.jsoup.parser.TokeniserState;
                public static AfterAttributeValue_quoted: org.jsoup.parser.TokeniserState;
                public static SelfClosingStartTag: org.jsoup.parser.TokeniserState;
                public static BogusComment: org.jsoup.parser.TokeniserState;
                public static MarkupDeclarationOpen: org.jsoup.parser.TokeniserState;
                public static CommentStart: org.jsoup.parser.TokeniserState;
                public static CommentStartDash: org.jsoup.parser.TokeniserState;
                public static Comment: org.jsoup.parser.TokeniserState;
                public static CommentEndDash: org.jsoup.parser.TokeniserState;
                public static CommentEnd: org.jsoup.parser.TokeniserState;
                public static CommentEndBang: org.jsoup.parser.TokeniserState;
                public static Doctype: org.jsoup.parser.TokeniserState;
                public static BeforeDoctypeName: org.jsoup.parser.TokeniserState;
                public static DoctypeName: org.jsoup.parser.TokeniserState;
                public static AfterDoctypeName: org.jsoup.parser.TokeniserState;
                public static AfterDoctypePublicKeyword: org.jsoup.parser.TokeniserState;
                public static BeforeDoctypePublicIdentifier: org.jsoup.parser.TokeniserState;
                public static DoctypePublicIdentifier_doubleQuoted: org.jsoup.parser.TokeniserState;
                public static DoctypePublicIdentifier_singleQuoted: org.jsoup.parser.TokeniserState;
                public static AfterDoctypePublicIdentifier: org.jsoup.parser.TokeniserState;
                public static BetweenDoctypePublicAndSystemIdentifiers: org.jsoup.parser.TokeniserState;
                public static AfterDoctypeSystemKeyword: org.jsoup.parser.TokeniserState;
                public static BeforeDoctypeSystemIdentifier: org.jsoup.parser.TokeniserState;
                public static DoctypeSystemIdentifier_doubleQuoted: org.jsoup.parser.TokeniserState;
                public static DoctypeSystemIdentifier_singleQuoted: org.jsoup.parser.TokeniserState;
                public static AfterDoctypeSystemIdentifier: org.jsoup.parser.TokeniserState;
                public static BogusDoctype: org.jsoup.parser.TokeniserState;
                public static CdataSection: org.jsoup.parser.TokeniserState;
                public static values(): androidNative.Array<org.jsoup.parser.TokeniserState>;
                public static valueOf(name: string): org.jsoup.parser.TokeniserState;
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module parser {
            export abstract class TreeBuilder {
                public static class: java.lang.Class<org.jsoup.parser.TreeBuilder>;
                public parser: org.jsoup.parser.Parser;
                public doc: org.jsoup.nodes.Document;
                public stack: java.util.ArrayList<org.jsoup.nodes.Element>;
                public baseUri: string;
                public currentToken: org.jsoup.parser.Token;
                public settings: org.jsoup.parser.ParseSettings;
                public process(param0: org.jsoup.parser.Token): boolean;
                public processStartTag(name: string, attrs: org.jsoup.nodes.Attributes): boolean;
                public processStartTag(name: string): boolean;
                public processEndTag(name: string): boolean;
                public initialiseParse(input: java.io.Reader, baseUri: string, parser: org.jsoup.parser.Parser): void;
                public currentElement(): org.jsoup.nodes.Element;
                public runParser(): void;
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module parser {
            export class XmlTreeBuilder extends org.jsoup.parser.TreeBuilder {
                public static class: java.lang.Class<org.jsoup.parser.XmlTreeBuilder>;
                public initialiseParse(input: java.io.Reader, baseUri: string, parser: org.jsoup.parser.Parser): void;
                public process(token: org.jsoup.parser.Token): boolean;
                public constructor();
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module safety {
            export class Cleaner {
                public static class: java.lang.Class<org.jsoup.safety.Cleaner>;
                public isValid(dirtyDocument: org.jsoup.nodes.Document): boolean;
                public isValidBodyHtml(bodyHtml: string): boolean;
                public clean(dirtyDocument: org.jsoup.nodes.Document): org.jsoup.nodes.Document;
                public constructor(whitelist: org.jsoup.safety.Whitelist);
            }
            export module Cleaner {
                export class CleaningVisitor extends org.jsoup.select.NodeVisitor {
                    public static class: java.lang.Class<org.jsoup.safety.Cleaner.CleaningVisitor>;
                    public tail(source: org.jsoup.nodes.Node, depth: number): void;
                    public head(destChild: org.jsoup.nodes.Node, sourceEl: number): void;
                    public tail(param0: org.jsoup.nodes.Node, param1: number): void;
                    public head(param0: org.jsoup.nodes.Node, param1: number): void;
                }
                export class ElementMeta {
                    public static class: java.lang.Class<org.jsoup.safety.Cleaner.ElementMeta>;
                }
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module safety {
            export class Whitelist {
                public static class: java.lang.Class<org.jsoup.safety.Whitelist>;
                public addTags(this_: androidNative.Array<string>): org.jsoup.safety.Whitelist;
                public static basic(): org.jsoup.safety.Whitelist;
                public isSafeTag(tag: string): boolean;
                public static relaxed(): org.jsoup.safety.Whitelist;
                public addProtocols(protSet: string, prot: string, protocol: androidNative.Array<string>): org.jsoup.safety.Whitelist;
                public removeAttributes(currentSet: string, currentSet: androidNative.Array<string>): org.jsoup.safety.Whitelist;
                public removeProtocols(this_: string, tag: string, attribute: androidNative.Array<string>): org.jsoup.safety.Whitelist;
                public constructor();
                public removeTags(tag: androidNative.Array<string>): org.jsoup.safety.Whitelist;
                public removeEnforcedAttribute(attrMap: string, this_: string): org.jsoup.safety.Whitelist;
                public static simpleText(): org.jsoup.safety.Whitelist;
                public static basicWithImages(): org.jsoup.safety.Whitelist;
                public preserveRelativeLinks(preserve: boolean): org.jsoup.safety.Whitelist;
                public isSafeAttribute(expect: string, attrKey: org.jsoup.nodes.Element, this_: org.jsoup.nodes.Attribute): boolean;
                public static none(): org.jsoup.safety.Whitelist;
                public addAttributes(currentSet: string, this_: androidNative.Array<string>): org.jsoup.safety.Whitelist;
                public addEnforcedAttribute(this_: string, tag: string, attribute: string): org.jsoup.safety.Whitelist;
            }
            export module Whitelist {
                export class AttributeKey extends org.jsoup.safety.Whitelist.TypedValue {
                    public static class: java.lang.Class<org.jsoup.safety.Whitelist.AttributeKey>;
                }
                export class AttributeValue extends org.jsoup.safety.Whitelist.TypedValue {
                    public static class: java.lang.Class<org.jsoup.safety.Whitelist.AttributeValue>;
                }
                export class Protocol extends org.jsoup.safety.Whitelist.TypedValue {
                    public static class: java.lang.Class<org.jsoup.safety.Whitelist.Protocol>;
                }
                export class TagName extends org.jsoup.safety.Whitelist.TypedValue {
                    public static class: java.lang.Class<org.jsoup.safety.Whitelist.TagName>;
                }
                export abstract class TypedValue {
                    public static class: java.lang.Class<org.jsoup.safety.Whitelist.TypedValue>;
                    public equals(obj: any): boolean;
                    public toString(): string;
                    public hashCode(): number;
                }
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module select {
            export class Collector {
                public static class: java.lang.Class<org.jsoup.select.Collector>;
                public static collect(eval_: org.jsoup.select.Evaluator, root: org.jsoup.nodes.Element): org.jsoup.select.Elements;
                public static findFirst(eval_: org.jsoup.select.Evaluator, root: org.jsoup.nodes.Element): org.jsoup.nodes.Element;
            }
            export module Collector {
                export class Accumulator extends org.jsoup.select.NodeVisitor {
                    public static class: java.lang.Class<org.jsoup.select.Collector.Accumulator>;
                    public head(this_: org.jsoup.nodes.Node, node: number): void;
                    public tail(param0: org.jsoup.nodes.Node, param1: number): void;
                    public tail(node: org.jsoup.nodes.Node, depth: number): void;
                    public head(param0: org.jsoup.nodes.Node, param1: number): void;
                }
                export class FirstFinder extends org.jsoup.select.NodeFilter {
                    public static class: java.lang.Class<org.jsoup.select.Collector.FirstFinder>;
                    public tail(node: org.jsoup.nodes.Node, depth: number): org.jsoup.select.NodeFilter.FilterResult;
                    public head(this_: org.jsoup.nodes.Node, node: number): org.jsoup.select.NodeFilter.FilterResult;
                    public head(param0: org.jsoup.nodes.Node, param1: number): org.jsoup.select.NodeFilter.FilterResult;
                    public tail(param0: org.jsoup.nodes.Node, param1: number): org.jsoup.select.NodeFilter.FilterResult;
                }
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module select {
            export abstract class CombiningEvaluator extends org.jsoup.select.Evaluator {
                public static class: java.lang.Class<org.jsoup.select.CombiningEvaluator>;
            }
            export module CombiningEvaluator {
                export class And extends org.jsoup.select.CombiningEvaluator {
                    public static class: java.lang.Class<org.jsoup.select.CombiningEvaluator.And>;
                    public toString(): string;
                    public matches(i: org.jsoup.nodes.Element, this_: org.jsoup.nodes.Element): boolean;
                }
                export class Or extends org.jsoup.select.CombiningEvaluator {
                    public static class: java.lang.Class<org.jsoup.select.CombiningEvaluator.Or>;
                    public toString(): string;
                    public add(e: org.jsoup.select.Evaluator): void;
                    public matches(i: org.jsoup.nodes.Element, this_: org.jsoup.nodes.Element): boolean;
                }
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module select {
            export class Elements extends java.util.ArrayList<org.jsoup.nodes.Element> {
                public static class: java.lang.Class<org.jsoup.select.Elements>;
                public next(): org.jsoup.select.Elements;
                public outerHtml(): string;
                public tagName(this_: string): org.jsoup.select.Elements;
                public nextAll(query: string): org.jsoup.select.Elements;
                public constructor(elements: java.util.List<org.jsoup.nodes.Element>);
                public constructor();
                public attr(this_: string, attributeKey: string): org.jsoup.select.Elements;
                public is(this_: string): boolean;
                public hasAttr(this_: string): boolean;
                public after(this_: string): org.jsoup.select.Elements;
                public prepend(this_: string): org.jsoup.select.Elements;
                public last(): org.jsoup.nodes.Element;
                public hasClass(this_: string): boolean;
                public toString(): string;
                public forms(): java.util.List<org.jsoup.nodes.FormElement>;
                public unwrap(): org.jsoup.select.Elements;
                public append(this_: string): org.jsoup.select.Elements;
                public val(): string;
                public removeAttr(this_: string): org.jsoup.select.Elements;
                public constructor(elements: java.util.Collection<org.jsoup.nodes.Element>);
                public empty(): org.jsoup.select.Elements;
                public constructor(initialCapacity: number);
                public removeClass(this_: string): org.jsoup.select.Elements;
                public constructor(elements: androidNative.Array<org.jsoup.nodes.Element>);
                public traverse(nodeVisitor: org.jsoup.select.NodeVisitor): org.jsoup.select.Elements;
                public prevAll(): org.jsoup.select.Elements;
                public eachAttr(this_: string): java.util.List<string>;
                public text(): string;
                public select(query: string): org.jsoup.select.Elements;
                public remove(): org.jsoup.select.Elements;
                public prev(): org.jsoup.select.Elements;
                public clone(): org.jsoup.select.Elements;
                public next(query: string): org.jsoup.select.Elements;
                public eachText(): java.util.List<string>;
                public hasText(): boolean;
                public filter(nodeFilter: org.jsoup.select.NodeFilter): org.jsoup.select.Elements;
                public nextAll(): org.jsoup.select.Elements;
                public prev(query: string): org.jsoup.select.Elements;
                public first(): org.jsoup.nodes.Element;
                public wrap(this_: string): org.jsoup.select.Elements;
                public parents(): org.jsoup.select.Elements;
                public addClass(this_: string): org.jsoup.select.Elements;
                public before(this_: string): org.jsoup.select.Elements;
                public not(query: string): org.jsoup.select.Elements;
                public prevAll(query: string): org.jsoup.select.Elements;
                public html(this_: string): org.jsoup.select.Elements;
                public val(this_: string): org.jsoup.select.Elements;
                public attr(this_: string): string;
                public toggleClass(this_: string): org.jsoup.select.Elements;
                public html(): string;
                public eq(index: number): org.jsoup.select.Elements;
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module select {
            export abstract class Evaluator {
                public static class: java.lang.Class<org.jsoup.select.Evaluator>;
                public matches(param0: org.jsoup.nodes.Element, param1: org.jsoup.nodes.Element): boolean;
                public constructor();
            }
            export module Evaluator {
                export class AllElements extends org.jsoup.select.Evaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.AllElements>;
                    public toString(): string;
                    public constructor();
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                }
                export class Attribute extends org.jsoup.select.Evaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.Attribute>;
                    public constructor(key: string);
                    public toString(): string;
                    public constructor();
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                }
                export abstract class AttributeKeyPair extends org.jsoup.select.Evaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.AttributeKeyPair>;
                    public constructor(key: string, value: string);
                    public constructor();
                }
                export class AttributeStarting extends org.jsoup.select.Evaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.AttributeStarting>;
                    public toString(): string;
                    public constructor();
                    public constructor(keyPrefix: string);
                    public matches(this_: org.jsoup.nodes.Element, root: org.jsoup.nodes.Element): boolean;
                }
                export class AttributeWithValue extends org.jsoup.select.Evaluator.AttributeKeyPair {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.AttributeWithValue>;
                    public constructor(key: string, value: string);
                    public toString(): string;
                    public constructor();
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                }
                export class AttributeWithValueContaining extends org.jsoup.select.Evaluator.AttributeKeyPair {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.AttributeWithValueContaining>;
                    public constructor(key: string, value: string);
                    public toString(): string;
                    public constructor();
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                }
                export class AttributeWithValueEnding extends org.jsoup.select.Evaluator.AttributeKeyPair {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.AttributeWithValueEnding>;
                    public constructor(key: string, value: string);
                    public toString(): string;
                    public constructor();
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                }
                export class AttributeWithValueMatching extends org.jsoup.select.Evaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.AttributeWithValueMatching>;
                    public toString(): string;
                    public constructor();
                    public constructor(key: string, pattern: java.util.regex.Pattern);
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                }
                export class AttributeWithValueNot extends org.jsoup.select.Evaluator.AttributeKeyPair {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.AttributeWithValueNot>;
                    public constructor(key: string, value: string);
                    public toString(): string;
                    public constructor();
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                }
                export class AttributeWithValueStarting extends org.jsoup.select.Evaluator.AttributeKeyPair {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.AttributeWithValueStarting>;
                    public constructor(key: string, value: string);
                    public toString(): string;
                    public constructor();
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                }
                export class Class extends org.jsoup.select.Evaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.Class>;
                    public constructor(className: string);
                    public toString(): string;
                    public constructor();
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                }
                export class ContainsData extends org.jsoup.select.Evaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.ContainsData>;
                    public toString(): string;
                    public constructor();
                    public constructor(searchText: string);
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                }
                export class ContainsOwnText extends org.jsoup.select.Evaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.ContainsOwnText>;
                    public toString(): string;
                    public constructor();
                    public constructor(searchText: string);
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                }
                export class ContainsText extends org.jsoup.select.Evaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.ContainsText>;
                    public toString(): string;
                    public constructor();
                    public constructor(searchText: string);
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                }
                export abstract class CssNthEvaluator extends org.jsoup.select.Evaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.CssNthEvaluator>;
                    public a: number;
                    public b: number;
                    public toString(): string;
                    public constructor(a: number, b: number);
                    public constructor();
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                    public calculatePosition(param0: org.jsoup.nodes.Element, param1: org.jsoup.nodes.Element): number;
                    public constructor(b: number);
                    public getPseudoClass(): string;
                }
                export class Id extends org.jsoup.select.Evaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.Id>;
                    public toString(): string;
                    public constructor();
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                    public constructor(id: string);
                }
                export class IndexEquals extends org.jsoup.select.Evaluator.IndexEvaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.IndexEquals>;
                    public toString(): string;
                    public constructor();
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                    public constructor(index: number);
                }
                export abstract class IndexEvaluator extends org.jsoup.select.Evaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.IndexEvaluator>;
                    public constructor();
                    public constructor(index: number);
                }
                export class IndexGreaterThan extends org.jsoup.select.Evaluator.IndexEvaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.IndexGreaterThan>;
                    public toString(): string;
                    public constructor();
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                    public constructor(index: number);
                }
                export class IndexLessThan extends org.jsoup.select.Evaluator.IndexEvaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.IndexLessThan>;
                    public toString(): string;
                    public constructor();
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                    public constructor(index: number);
                }
                export class IsEmpty extends org.jsoup.select.Evaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.IsEmpty>;
                    public toString(): string;
                    public constructor();
                    public matches(this_: org.jsoup.nodes.Element, root: org.jsoup.nodes.Element): boolean;
                }
                export class IsFirstChild extends org.jsoup.select.Evaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.IsFirstChild>;
                    public toString(): string;
                    public constructor();
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                }
                export class IsFirstOfType extends org.jsoup.select.Evaluator.IsNthOfType {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.IsFirstOfType>;
                    public toString(): string;
                    public constructor(a: number, b: number);
                    public constructor();
                    public constructor(b: number);
                }
                export class IsLastChild extends org.jsoup.select.Evaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.IsLastChild>;
                    public toString(): string;
                    public constructor();
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                }
                export class IsLastOfType extends org.jsoup.select.Evaluator.IsNthLastOfType {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.IsLastOfType>;
                    public toString(): string;
                    public constructor(a: number, b: number);
                    public constructor();
                    public constructor(b: number);
                }
                export class IsNthChild extends org.jsoup.select.Evaluator.CssNthEvaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.IsNthChild>;
                    public constructor(a: number, b: number);
                    public constructor();
                    public calculatePosition(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): number;
                    public constructor(b: number);
                    public getPseudoClass(): string;
                }
                export class IsNthLastChild extends org.jsoup.select.Evaluator.CssNthEvaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.IsNthLastChild>;
                    public constructor(a: number, b: number);
                    public constructor();
                    public calculatePosition(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): number;
                    public constructor(b: number);
                    public getPseudoClass(): string;
                }
                export class IsNthLastOfType extends org.jsoup.select.Evaluator.CssNthEvaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.IsNthLastOfType>;
                    public constructor(a: number, b: number);
                    public constructor();
                    public calculatePosition(this_: org.jsoup.nodes.Element, root: org.jsoup.nodes.Element): number;
                    public constructor(b: number);
                    public getPseudoClass(): string;
                }
                export class IsNthOfType extends org.jsoup.select.Evaluator.CssNthEvaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.IsNthOfType>;
                    public constructor(a: number, b: number);
                    public constructor();
                    public calculatePosition(this_: org.jsoup.nodes.Element, root: org.jsoup.nodes.Element): number;
                    public constructor(b: number);
                    public getPseudoClass(): string;
                }
                export class IsOnlyChild extends org.jsoup.select.Evaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.IsOnlyChild>;
                    public toString(): string;
                    public constructor();
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                }
                export class IsOnlyOfType extends org.jsoup.select.Evaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.IsOnlyOfType>;
                    public toString(): string;
                    public constructor();
                    public matches(this_: org.jsoup.nodes.Element, root: org.jsoup.nodes.Element): boolean;
                }
                export class IsRoot extends org.jsoup.select.Evaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.IsRoot>;
                    public toString(): string;
                    public constructor();
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                }
                export class MatchText extends org.jsoup.select.Evaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.MatchText>;
                    public matches(textNode: org.jsoup.nodes.Element, this_: org.jsoup.nodes.Element): boolean;
                    public toString(): string;
                    public constructor();
                }
                export class Matches extends org.jsoup.select.Evaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.Matches>;
                    public constructor(pattern: java.util.regex.Pattern);
                    public toString(): string;
                    public constructor();
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                }
                export class MatchesOwn extends org.jsoup.select.Evaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.MatchesOwn>;
                    public constructor(pattern: java.util.regex.Pattern);
                    public toString(): string;
                    public constructor();
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                }
                export class Tag extends org.jsoup.select.Evaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.Tag>;
                    public toString(): string;
                    public constructor();
                    public constructor(tagName: string);
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                }
                export class TagEndsWith extends org.jsoup.select.Evaluator {
                    public static class: java.lang.Class<org.jsoup.select.Evaluator.TagEndsWith>;
                    public toString(): string;
                    public constructor();
                    public constructor(tagName: string);
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                }
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module select {
            export class NodeFilter {
                public static class: java.lang.Class<org.jsoup.select.NodeFilter>;
                /**
                 * Constructs a new instance of the org.jsoup.select.NodeFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    head(param0: org.jsoup.nodes.Node, param1: number): org.jsoup.select.NodeFilter.FilterResult;
                    tail(param0: org.jsoup.nodes.Node, param1: number): org.jsoup.select.NodeFilter.FilterResult;
                });
                public constructor();
                public head(param0: org.jsoup.nodes.Node, param1: number): org.jsoup.select.NodeFilter.FilterResult;
                public tail(param0: org.jsoup.nodes.Node, param1: number): org.jsoup.select.NodeFilter.FilterResult;
            }
            export module NodeFilter {
                export class FilterResult {
                    public static class: java.lang.Class<org.jsoup.select.NodeFilter.FilterResult>;
                    public static CONTINUE: org.jsoup.select.NodeFilter.FilterResult;
                    public static SKIP_CHILDREN: org.jsoup.select.NodeFilter.FilterResult;
                    public static SKIP_ENTIRELY: org.jsoup.select.NodeFilter.FilterResult;
                    public static REMOVE: org.jsoup.select.NodeFilter.FilterResult;
                    public static STOP: org.jsoup.select.NodeFilter.FilterResult;
                    public static valueOf(name: string): org.jsoup.select.NodeFilter.FilterResult;
                    public static values(): androidNative.Array<org.jsoup.select.NodeFilter.FilterResult>;
                }
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module select {
            export class NodeTraversor {
                public static class: java.lang.Class<org.jsoup.select.NodeTraversor>;
                /** @deprecated */
                public traverse(root: org.jsoup.nodes.Node): void;
                public static traverse(visitor: org.jsoup.select.NodeVisitor, root: org.jsoup.nodes.Node): void;
                public static traverse(el: org.jsoup.select.NodeVisitor, visitor: org.jsoup.select.Elements): void;
                public static filter(prev: org.jsoup.select.NodeFilter, result: org.jsoup.nodes.Node): org.jsoup.select.NodeFilter.FilterResult;
                /** @deprecated */
                public constructor(visitor: org.jsoup.select.NodeVisitor);
                public static filter(el: org.jsoup.select.NodeFilter, filter: org.jsoup.select.Elements): void;
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module select {
            export class NodeVisitor {
                public static class: java.lang.Class<org.jsoup.select.NodeVisitor>;
                /**
                 * Constructs a new instance of the org.jsoup.select.NodeVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    head(param0: org.jsoup.nodes.Node, param1: number): void;
                    tail(param0: org.jsoup.nodes.Node, param1: number): void;
                });
                public constructor();
                public tail(param0: org.jsoup.nodes.Node, param1: number): void;
                public head(param0: org.jsoup.nodes.Node, param1: number): void;
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module select {
            export class QueryParser {
                public static class: java.lang.Class<org.jsoup.select.QueryParser>;
                public static parse(p: string): org.jsoup.select.Evaluator;
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module select {
            export class Selector {
                public static class: java.lang.Class<org.jsoup.select.Selector>;
                public static select(evaluator: org.jsoup.select.Evaluator, root: org.jsoup.nodes.Element): org.jsoup.select.Elements;
                public static selectFirst(cssQuery: string, root: org.jsoup.nodes.Element): org.jsoup.nodes.Element;
                public static select(el: string, found: java.lang.Iterable<org.jsoup.nodes.Element>): org.jsoup.select.Elements;
                public static select(query: string, root: org.jsoup.nodes.Element): org.jsoup.select.Elements;
            }
            export module Selector {
                export class SelectorParseException {
                    public static class: java.lang.Class<org.jsoup.select.Selector.SelectorParseException>;
                    public constructor(msg: string, params: androidNative.Array<any>);
                }
            }
        }
    }
}

declare module org {
    export module jsoup {
        export module select {
            export abstract class StructuralEvaluator extends org.jsoup.select.Evaluator {
                public static class: java.lang.Class<org.jsoup.select.StructuralEvaluator>;
            }
            export module StructuralEvaluator {
                export class Has extends org.jsoup.select.StructuralEvaluator {
                    public static class: java.lang.Class<org.jsoup.select.StructuralEvaluator.Has>;
                    public constructor(evaluator: org.jsoup.select.Evaluator);
                    public toString(): string;
                    public constructor();
                    public matches(this_: org.jsoup.nodes.Element, root: org.jsoup.nodes.Element): boolean;
                }
                export class ImmediateParent extends org.jsoup.select.StructuralEvaluator {
                    public static class: java.lang.Class<org.jsoup.select.StructuralEvaluator.ImmediateParent>;
                    public constructor(evaluator: org.jsoup.select.Evaluator);
                    public toString(): string;
                    public constructor();
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                }
                export class ImmediatePreviousSibling extends org.jsoup.select.StructuralEvaluator {
                    public static class: java.lang.Class<org.jsoup.select.StructuralEvaluator.ImmediatePreviousSibling>;
                    public constructor(evaluator: org.jsoup.select.Evaluator);
                    public toString(): string;
                    public constructor();
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                }
                export class Not extends org.jsoup.select.StructuralEvaluator {
                    public static class: java.lang.Class<org.jsoup.select.StructuralEvaluator.Not>;
                    public constructor(evaluator: org.jsoup.select.Evaluator);
                    public toString(): string;
                    public constructor();
                    public matches(root: org.jsoup.nodes.Element, node: org.jsoup.nodes.Element): boolean;
                }
                export class Parent extends org.jsoup.select.StructuralEvaluator {
                    public static class: java.lang.Class<org.jsoup.select.StructuralEvaluator.Parent>;
                    public constructor(evaluator: org.jsoup.select.Evaluator);
                    public toString(): string;
                    public constructor();
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                }
                export class PreviousSibling extends org.jsoup.select.StructuralEvaluator {
                    public static class: java.lang.Class<org.jsoup.select.StructuralEvaluator.PreviousSibling>;
                    public constructor(evaluator: org.jsoup.select.Evaluator);
                    public toString(): string;
                    public constructor();
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                }
                export class Root extends org.jsoup.select.Evaluator {
                    public static class: java.lang.Class<org.jsoup.select.StructuralEvaluator.Root>;
                    public matches(root: org.jsoup.nodes.Element, element: org.jsoup.nodes.Element): boolean;
                }
            }
        }
    }
}

//Generics information:
//org.jsoup.Connection.Base:1
//org.jsoup.helper.ChangeNotifyingArrayList:1
//org.jsoup.helper.HttpConnection.Base:1

