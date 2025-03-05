declare class DetailedErrorResponse extends NSObject implements ExtendedErrorResponse {
  static alloc(): DetailedErrorResponse; // inherited from NSObject

  static new(): DetailedErrorResponse; // inherited from NSObject

  variable: string;
  message: string;
  error: number;

  constructor(o: { error: number; message: string; variable: string });

  initWithErrorMessageVariable(error: number, message: string, variable: string): this;
}

interface ErrorResponse {
  error: number;

  message: string;
}
declare var ErrorResponse: {
  prototype: ErrorResponse;
};

interface ExtendedErrorResponse {
  variable: string;
}
declare var ExtendedErrorResponse: {
  prototype: ExtendedErrorResponse;
};

declare class SimpleErrorResponse extends NSObject implements ErrorResponse {
  static alloc(): SimpleErrorResponse; // inherited from NSObject

  static new(): SimpleErrorResponse; // inherited from NSObject

  error: number;

  message: string;

  constructor(o: { error: number; message: string });

  initWithErrorMessage(error: number, message: string): this;
}

declare class Wj24Secrets extends NSObject {
  static alloc(): Wj24Secrets; // inherited from NSObject

  static new(): Wj24Secrets; // inherited from NSObject

  constructor(o: { fileName: string; is_debug: boolean });

  iniWithCompletionHandler(completionHandler: (p1: ErrorResponse) => void): void;

  initWithFileNameIs_debug(fileName: string, is_debug: boolean): this;

  search_varWithVariableVersion(variable: string, version: number): DetailedErrorResponse;
}
