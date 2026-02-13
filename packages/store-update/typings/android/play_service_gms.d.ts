declare module com {
  export module google {
    export module android {
      export module gms {
        export module actions {
          export class ItemListIntents {
            public static class: java.lang.Class<com.google.android.gms.actions.ItemListIntents>;
            public static ACTION_CREATE_ITEM_LIST: string;
            public static ACTION_DELETE_ITEM_LIST: string;
            public static ACTION_APPEND_ITEM_LIST: string;
            public static ACTION_ACCEPT_ITEM: string;
            public static ACTION_REJECT_ITEM: string;
            public static ACTION_DELETE_ITEM: string;
            public static EXTRA_LIST_NAME: string;
            public static EXTRA_LIST_QUERY: string;
            public static EXTRA_ITEM_NAME: string;
            public static EXTRA_ITEM_NAMES: string;
            public static EXTRA_ITEM_QUERY: string;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module actions {
          export class NoteIntents {
            public static class: java.lang.Class<com.google.android.gms.actions.NoteIntents>;
            public static ACTION_CREATE_NOTE: string;
            public static ACTION_APPEND_NOTE: string;
            public static ACTION_DELETE_NOTE: string;
            public static EXTRA_NAME: string;
            public static EXTRA_TEXT: string;
            public static EXTRA_NOTE_QUERY: string;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module actions {
          export class ReserveIntents {
            public static class: java.lang.Class<com.google.android.gms.actions.ReserveIntents>;
            public static ACTION_RESERVE_TAXI_RESERVATION: string;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module actions {
          export class SearchIntents {
            public static class: java.lang.Class<com.google.android.gms.actions.SearchIntents>;
            public static ACTION_SEARCH: string;
            public static EXTRA_QUERY: string;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class AccountPicker {
            public static class: java.lang.Class<com.google.android.gms.common.AccountPicker>;
            /** @deprecated */
            public static newChooseAccountIntent(param0: globalAndroid.accounts.Account, param1: java.util.ArrayList<globalAndroid.accounts.Account>, param2: androidNative.Array<string>, param3: boolean, param4: string, param5: string, param6: androidNative.Array<string>, param7: globalAndroid.os.Bundle): globalAndroid.content.Intent;
            public static newChooseAccountIntent(param0: com.google.android.gms.common.AccountPicker.AccountChooserOptions): globalAndroid.content.Intent;
          }
          export module AccountPicker {
            export class AccountChooserOptions {
              public static class: java.lang.Class<com.google.android.gms.common.AccountPicker.AccountChooserOptions>;
              public constructor();
            }
            export module AccountChooserOptions {
              export class Builder {
                public static class: java.lang.Class<com.google.android.gms.common.AccountPicker.AccountChooserOptions.Builder>;
                public build(): com.google.android.gms.common.AccountPicker.AccountChooserOptions;
                public setAllowableAccounts(param0: java.util.List<globalAndroid.accounts.Account>): com.google.android.gms.common.AccountPicker.AccountChooserOptions.Builder;
                public setTitleOverrideText(param0: string): com.google.android.gms.common.AccountPicker.AccountChooserOptions.Builder;
                public setAlwaysShowAccountPicker(param0: boolean): com.google.android.gms.common.AccountPicker.AccountChooserOptions.Builder;
                public constructor();
                public setAllowableAccountsTypes(param0: java.util.List<string>): com.google.android.gms.common.AccountPicker.AccountChooserOptions.Builder;
                public setOptionsForAddingAccount(param0: globalAndroid.os.Bundle): com.google.android.gms.common.AccountPicker.AccountChooserOptions.Builder;
                public setSelectedAccount(param0: globalAndroid.accounts.Account): com.google.android.gms.common.AccountPicker.AccountChooserOptions.Builder;
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
      export module gms {
        export module common {
          export class BlockingServiceConnection {
            public static class: java.lang.Class<com.google.android.gms.common.BlockingServiceConnection>;
            public constructor();
            public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
            public getService(): globalAndroid.os.IBinder;
            public getServiceWithTimeout(param0: number, param1: java.util.concurrent.TimeUnit): globalAndroid.os.IBinder;
            public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class ConnectionResult extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
            public static class: java.lang.Class<com.google.android.gms.common.ConnectionResult>;
            public static UNKNOWN: number;
            public static SUCCESS: number;
            public static SERVICE_MISSING: number;
            public static SERVICE_VERSION_UPDATE_REQUIRED: number;
            public static SERVICE_DISABLED: number;
            public static SIGN_IN_REQUIRED: number;
            public static INVALID_ACCOUNT: number;
            public static RESOLUTION_REQUIRED: number;
            public static NETWORK_ERROR: number;
            public static INTERNAL_ERROR: number;
            public static SERVICE_INVALID: number;
            public static DEVELOPER_ERROR: number;
            public static LICENSE_CHECK_FAILED: number;
            public static CANCELED: number;
            public static TIMEOUT: number;
            public static INTERRUPTED: number;
            public static API_UNAVAILABLE: number;
            public static SIGN_IN_FAILED: number;
            public static SERVICE_UPDATING: number;
            public static SERVICE_MISSING_PERMISSION: number;
            public static RESTRICTED_PROFILE: number;
            public static RESOLUTION_ACTIVITY_NOT_FOUND: number;
            public static API_DISABLED: number;
            public static API_DISABLED_FOR_CONNECTION: number;
            public static DRIVE_EXTERNAL_STORAGE_REQUIRED: number;
            public static RESULT_SUCCESS: com.google.android.gms.common.ConnectionResult;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.ConnectionResult>;
            public getErrorMessage(): string;
            public hasResolution(): boolean;
            public constructor();
            public getErrorCode(): number;
            public getResolution(): globalAndroid.app.PendingIntent;
            public isSuccess(): boolean;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
            public constructor(param0: number, param1: globalAndroid.app.PendingIntent);
            public constructor(param0: number);
            public startResolutionForResult(param0: globalAndroid.app.Activity, param1: number): void;
            public constructor(param0: number, param1: globalAndroid.app.PendingIntent, param2: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class Feature extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
            public static class: java.lang.Class<com.google.android.gms.common.Feature>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.Feature>;
            public constructor();
            public constructor(param0: string, param1: number);
            public constructor(param0: string, param1: number, param2: number);
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public hashCode(): number;
            public getVersion(): number;
            public equals(param0: any): boolean;
            public getName(): string;
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
      export module gms {
        export module common {
          export class FirstPartyScopes {
            public static class: java.lang.Class<com.google.android.gms.common.FirstPartyScopes>;
            public static GAMES_1P: string;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class GmsSignatureVerifier {
            public static class: java.lang.Class<com.google.android.gms.common.GmsSignatureVerifier>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class GoogleApiAvailabilityLight {
            public static class: java.lang.Class<com.google.android.gms.common.GoogleApiAvailabilityLight>;
            public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
            public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
            public static GOOGLE_PLAY_STORE_PACKAGE: string;
            public static getInstance(): com.google.android.gms.common.GoogleApiAvailabilityLight;
            public getClientVersion(param0: globalAndroid.content.Context): number;
            public isPlayStorePossiblyUpdating(param0: globalAndroid.content.Context, param1: number): boolean;
            public getErrorResolutionPendingIntent(param0: globalAndroid.content.Context, param1: number, param2: number): globalAndroid.app.PendingIntent;
            public isUninstalledAppPossiblyUpdating(param0: globalAndroid.content.Context, param1: string): boolean;
            public getErrorResolutionIntent(param0: globalAndroid.content.Context, param1: number, param2: string): globalAndroid.content.Intent;
            public getErrorResolutionPendingIntent(param0: globalAndroid.content.Context, param1: number, param2: number, param3: string): globalAndroid.app.PendingIntent;
            public getApkVersion(param0: globalAndroid.content.Context): number;
            /** @deprecated */
            public getErrorResolutionIntent(param0: number): globalAndroid.content.Intent;
            public cancelAvailabilityErrorNotifications(param0: globalAndroid.content.Context): void;
            public getErrorString(param0: number): string;
            public isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
            public verifyGooglePlayServicesIsAvailable(param0: globalAndroid.content.Context, param1: number): void;
            public isPlayServicesPossiblyUpdating(param0: globalAndroid.content.Context, param1: number): boolean;
            public isGooglePlayServicesAvailable(param0: globalAndroid.content.Context, param1: number): number;
            public isUserResolvableError(param0: number): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class GooglePlayServicesIncorrectManifestValueException extends com.google.android.gms.common.GooglePlayServicesManifestException {
            public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesIncorrectManifestValueException>;
            public constructor(param0: number, param1: string);
            public constructor(param0: number);
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class GooglePlayServicesManifestException {
            public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesManifestException>;
            public constructor(param0: number, param1: string);
            public getActualVersion(): number;
            public getExpectedVersion(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class GooglePlayServicesMissingManifestValueException extends com.google.android.gms.common.GooglePlayServicesManifestException {
            public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesMissingManifestValueException>;
            public constructor();
            public constructor(param0: number, param1: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class GooglePlayServicesNotAvailableException {
            public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesNotAvailableException>;
            public errorCode: number;
            public constructor(param0: number);
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class GooglePlayServicesRepairableException extends com.google.android.gms.common.UserRecoverableException {
            public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesRepairableException>;
            public getConnectionStatusCode(): number;
            public constructor(param0: number, param1: string, param2: globalAndroid.content.Intent);
            public constructor(param0: string, param1: globalAndroid.content.Intent);
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class GooglePlayServicesUtilLight {
            public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesUtilLight>;
            public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
            public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
            public static GOOGLE_PLAY_GAMES_PACKAGE: string;
            public static GOOGLE_PLAY_STORE_PACKAGE: string;
            /** @deprecated */
            public static ensurePlayServicesAvailable(param0: globalAndroid.content.Context, param1: number): void;
            /** @deprecated */
            public static uidHasPackageName(param0: globalAndroid.content.Context, param1: number, param2: string): boolean;
            /** @deprecated */
            public static isGooglePlayServicesAvailable(param0: globalAndroid.content.Context, param1: number): number;
            /** @deprecated */
            public static cancelAvailabilityErrorNotifications(param0: globalAndroid.content.Context): void;
            public static enableUsingApkIndependentContext(): void;
            /** @deprecated */
            public static isPlayStorePossiblyUpdating(param0: globalAndroid.content.Context, param1: number): boolean;
            public static getRemoteContext(param0: globalAndroid.content.Context): globalAndroid.content.Context;
            /** @deprecated */
            public static getGooglePlayServicesAvailabilityRecoveryIntent(param0: number): globalAndroid.content.Intent;
            /** @deprecated */
            public static getErrorString(param0: number): string;
            public static isRestrictedUserProfile(param0: globalAndroid.content.Context): boolean;
            public static honorsDebugCertificates(param0: globalAndroid.content.Context): boolean;
            /** @deprecated */
            public static isSidewinderDevice(param0: globalAndroid.content.Context): boolean;
            public static getRemoteResource(param0: globalAndroid.content.Context): globalAndroid.content.res.Resources;
            /** @deprecated */
            public static isGooglePlayServicesUid(param0: globalAndroid.content.Context, param1: number): boolean;
            /** @deprecated */
            public static getErrorPendingIntent(param0: number, param1: globalAndroid.content.Context, param2: number): globalAndroid.app.PendingIntent;
            /** @deprecated */
            public static isUserRecoverableError(param0: number): boolean;
            /** @deprecated */
            public static isPlayServicesPossiblyUpdating(param0: globalAndroid.content.Context, param1: number): boolean;
            /** @deprecated */
            public static getClientVersion(param0: globalAndroid.content.Context): number;
            /** @deprecated */
            public static getApkVersion(param0: globalAndroid.content.Context): number;
            /** @deprecated */
            public static isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class GoogleSignatureVerifier {
            public static class: java.lang.Class<com.google.android.gms.common.GoogleSignatureVerifier>;
            public isGooglePublicSignedPackage(param0: globalAndroid.content.pm.PackageInfo): boolean;
            public isPackageGoogleSigned(param0: string): boolean;
            public constructor(param0: globalAndroid.content.Context);
            public isUidGoogleSigned(param0: number): boolean;
            public static getInstance(param0: globalAndroid.content.Context): com.google.android.gms.common.GoogleSignatureVerifier;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class GoogleSourceStampsChecker {
            public static class: java.lang.Class<com.google.android.gms.common.GoogleSourceStampsChecker>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class GoogleSourceStampsResult {
            public static class: java.lang.Class<com.google.android.gms.common.GoogleSourceStampsResult>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class PackageSignatureVerifier {
            public static class: java.lang.Class<com.google.android.gms.common.PackageSignatureVerifier>;
            public constructor();
            public queryPackageSignatureVerified(param0: globalAndroid.content.Context, param1: string): com.google.android.gms.common.PackageVerificationResult;
            public queryPackageSignatureVerifiedWithRetry(param0: globalAndroid.content.Context, param1: string): com.google.android.gms.common.PackageVerificationResult;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class PackageVerificationResult {
            public static class: java.lang.Class<com.google.android.gms.common.PackageVerificationResult>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class ProGuardCanary {
            public static class: java.lang.Class<com.google.android.gms.common.ProGuardCanary>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class Scopes {
            public static class: java.lang.Class<com.google.android.gms.common.Scopes>;
            public static PROFILE: string;
            public static EMAIL: string;
            public static OPEN_ID: string;
            public static LEGACY_USERINFO_PROFILE: string;
            public static LEGACY_USERINFO_EMAIL: string;
            public static PLUS_LOGIN: string;
            public static PLUS_ME: string;
            public static GAMES: string;
            public static GAMES_LITE: string;
            public static CLOUD_SAVE: string;
            public static APP_STATE: string;
            public static DRIVE_FILE: string;
            public static DRIVE_APPFOLDER: string;
            public static DRIVE_FULL: string;
            public static DRIVE_APPS: string;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class UserRecoverableException {
            public static class: java.lang.Class<com.google.android.gms.common.UserRecoverableException>;
            public getIntent(): globalAndroid.content.Intent;
            public constructor(param0: string, param1: globalAndroid.content.Intent);
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export module annotation {
            export class KeepForSdk {
              public static class: java.lang.Class<com.google.android.gms.common.annotation.KeepForSdk>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.annotation.KeepForSdk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
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
      export module gms {
        export module common {
          export module annotation {
            export class KeepForSdkWithFieldsAndMethods {
              public static class: java.lang.Class<com.google.android.gms.common.annotation.KeepForSdkWithFieldsAndMethods>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.annotation.KeepForSdkWithFieldsAndMethods interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
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
      export module gms {
        export module common {
          export module annotation {
            export class KeepForSdkWithMembers {
              public static class: java.lang.Class<com.google.android.gms.common.annotation.KeepForSdkWithMembers>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.annotation.KeepForSdkWithMembers interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
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
      export module gms {
        export module common {
          export module annotation {
            export class KeepName {
              public static class: java.lang.Class<com.google.android.gms.common.annotation.KeepName>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.annotation.KeepName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
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
      export module gms {
        export module common {
          export module annotation {
            export class NonNullApi {
              public static class: java.lang.Class<com.google.android.gms.common.annotation.NonNullApi>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.annotation.NonNullApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
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
      export module gms {
        export module common {
          export module api {
            export class ApiException {
              public static class: java.lang.Class<com.google.android.gms.common.api.ApiException>;
              public mStatus: com.google.android.gms.common.api.Status;
              public getStatusCode(): number;
              public getStatus(): com.google.android.gms.common.api.Status;
              public constructor(param0: com.google.android.gms.common.api.Status);
              /** @deprecated */
              public getStatusMessage(): string;
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
      export module gms {
        export module common {
          export module api {
            export class CommonStatusCodes {
              public static class: java.lang.Class<com.google.android.gms.common.api.CommonStatusCodes>;
              public static SUCCESS_CACHE: number;
              public static SUCCESS: number;
              public static SERVICE_VERSION_UPDATE_REQUIRED: number;
              public static SERVICE_DISABLED: number;
              public static SIGN_IN_REQUIRED: number;
              public static INVALID_ACCOUNT: number;
              public static RESOLUTION_REQUIRED: number;
              public static NETWORK_ERROR: number;
              public static INTERNAL_ERROR: number;
              public static DEVELOPER_ERROR: number;
              public static ERROR: number;
              public static INTERRUPTED: number;
              public static TIMEOUT: number;
              public static CANCELED: number;
              public static API_NOT_CONNECTED: number;
              public static REMOTE_EXCEPTION: number;
              public static CONNECTION_SUSPENDED_DURING_CALL: number;
              public static RECONNECTION_TIMED_OUT_DURING_UPDATE: number;
              public static RECONNECTION_TIMED_OUT: number;
              public constructor();
              public static getStatusCodeString(param0: number): string;
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
      export module gms {
        export module common {
          export module api {
            export class Releasable {
              public static class: java.lang.Class<com.google.android.gms.common.api.Releasable>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.api.Releasable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { release(): void });
              public constructor();
              public release(): void;
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
      export module gms {
        export module common {
          export module api {
            export class ResolvableApiException extends com.google.android.gms.common.api.ApiException {
              public static class: java.lang.Class<com.google.android.gms.common.api.ResolvableApiException>;
              public constructor(param0: com.google.android.gms.common.api.Status);
              public startResolutionForResult(param0: globalAndroid.app.Activity, param1: number): void;
              public getResolution(): globalAndroid.app.PendingIntent;
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
      export module gms {
        export module common {
          export module api {
            export abstract class ResolvingResultCallbacks<R> extends com.google.android.gms.common.api.ResultCallbacks<any> {
              public static class: java.lang.Class<com.google.android.gms.common.api.ResolvingResultCallbacks<any>>;
              public constructor();
              public onSuccess(param0: any): void;
              public constructor(param0: globalAndroid.app.Activity, param1: number);
              public onUnresolvableFailure(param0: com.google.android.gms.common.api.Status): void;
              public onResult(param0: any): void;
              public onFailure(param0: com.google.android.gms.common.api.Status): void;
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
      export module gms {
        export module common {
          export module api {
            export class Response<T> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.common.api.Response<any>>;
              public getResult(): T;
              public constructor();
              public constructor(param0: T);
              public setResult(param0: T): void;
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
      export module gms {
        export module common {
          export module api {
            export class Result {
              public static class: java.lang.Class<com.google.android.gms.common.api.Result>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.api.Result interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getStatus(): com.google.android.gms.common.api.Status });
              public constructor();
              public getStatus(): com.google.android.gms.common.api.Status;
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
      export module gms {
        export module common {
          export module api {
            export class ResultCallback<R> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.common.api.ResultCallback<any>>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.api.ResultCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onResult(param0: R): void });
              public constructor();
              public onResult(param0: R): void;
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
      export module gms {
        export module common {
          export module api {
            export abstract class ResultCallbacks<R> extends com.google.android.gms.common.api.ResultCallback<any> {
              public static class: java.lang.Class<com.google.android.gms.common.api.ResultCallbacks<any>>;
              public constructor();
              public onSuccess(param0: any): void;
              public onResult(param0: any): void;
              public onFailure(param0: com.google.android.gms.common.api.Status): void;
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
      export module gms {
        export module common {
          export module api {
            export class Scope extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.api.Scope>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.api.Scope>;
              public constructor();
              public getScopeUri(): string;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public hashCode(): number;
              public constructor(param0: string);
              public toString(): string;
              public equals(param0: any): boolean;
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
      export module gms {
        export module common {
          export module api {
            export class Status extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.api.Result, com.google.android.gms.common.internal.ReflectedParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.api.Status>;
              public static RESULT_SUCCESS_CACHE: com.google.android.gms.common.api.Status;
              public static RESULT_SUCCESS: com.google.android.gms.common.api.Status;
              public static RESULT_INTERRUPTED: com.google.android.gms.common.api.Status;
              public static RESULT_INTERNAL_ERROR: com.google.android.gms.common.api.Status;
              public static RESULT_TIMEOUT: com.google.android.gms.common.api.Status;
              public static RESULT_CANCELED: com.google.android.gms.common.api.Status;
              public static RESULT_DEAD_CLIENT: com.google.android.gms.common.api.Status;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.api.Status>;
              public constructor();
              public hasResolution(): boolean;
              public getStatus(): com.google.android.gms.common.api.Status;
              public hashCode(): number;
              public isInterrupted(): boolean;
              public toString(): string;
              public getResolution(): globalAndroid.app.PendingIntent;
              public constructor(param0: number);
              /** @deprecated */
              public constructor(param0: com.google.android.gms.common.ConnectionResult, param1: string, param2: number);
              public getStatusCode(): number;
              public isCanceled(): boolean;
              public getStatusMessage(): string;
              public constructor(param0: com.google.android.gms.common.ConnectionResult, param1: string);
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public constructor(param0: number, param1: string, param2: globalAndroid.app.PendingIntent);
              public startResolutionForResult(param0: globalAndroid.app.Activity, param1: number): void;
              public equals(param0: any): boolean;
              public isSuccess(): boolean;
              public constructor(param0: number, param1: string);
              public getConnectionResult(): com.google.android.gms.common.ConnectionResult;
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
      export module gms {
        export module common {
          export module api {
            export class UnsupportedApiCallException {
              public static class: java.lang.Class<com.google.android.gms.common.api.UnsupportedApiCallException>;
              public constructor(param0: com.google.android.gms.common.Feature);
              public getMessage(): string;
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
      export module gms {
        export module common {
          export module api {
            export module internal {
              export class BackgroundDetector {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.BackgroundDetector>;
                public onActivityResumed(param0: globalAndroid.app.Activity): void;
                public isInBackground(): boolean;
                public readCurrentStateIfPossible(param0: boolean): boolean;
                public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
                public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
                public onTrimMemory(param0: number): void;
                public onLowMemory(): void;
                public addListener(param0: com.google.android.gms.common.api.internal.BackgroundDetector.BackgroundStateChangeListener): void;
                public onActivityStarted(param0: globalAndroid.app.Activity): void;
                public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
                public onActivityPaused(param0: globalAndroid.app.Activity): void;
                public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
                public static initialize(param0: globalAndroid.app.Application): void;
                public onActivityStopped(param0: globalAndroid.app.Activity): void;
                public static getInstance(): com.google.android.gms.common.api.internal.BackgroundDetector;
              }
              export module BackgroundDetector {
                export class BackgroundStateChangeListener {
                  public static class: java.lang.Class<com.google.android.gms.common.api.internal.BackgroundDetector.BackgroundStateChangeListener>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.api.internal.BackgroundDetector$BackgroundStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { onBackgroundStateChanged(param0: boolean): void });
                  public constructor();
                  public onBackgroundStateChanged(param0: boolean): void;
                }
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
      export module gms {
        export module common {
          export module api {
            export module internal {
              export class GoogleServices {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.GoogleServices>;
                public static isMeasurementExplicitlyDisabled(): boolean;
                public static initialize(param0: globalAndroid.content.Context, param1: string, param2: boolean): com.google.android.gms.common.api.Status;
                public static getGoogleAppId(): string;
                public static initialize(param0: globalAndroid.content.Context): com.google.android.gms.common.api.Status;
                public static isMeasurementEnabled(): boolean;
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
      export module gms {
        export module common {
          export module api {
            export module internal {
              export class LifecycleActivity {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.LifecycleActivity>;
                public constructor(param0: globalAndroid.app.Activity);
                public constructor(param0: globalAndroid.content.ContextWrapper);
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
      export module gms {
        export module common {
          export module api {
            export module internal {
              export class LifecycleCallback {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.LifecycleCallback>;
                public mLifecycleFragment: com.google.android.gms.common.api.internal.LifecycleFragment;
                public static getFragment(param0: globalAndroid.content.ContextWrapper): com.google.android.gms.common.api.internal.LifecycleFragment;
                public onResume(): void;
                public static getFragment(param0: globalAndroid.app.Activity): com.google.android.gms.common.api.internal.LifecycleFragment;
                public onDestroy(): void;
                public static getFragment(param0: com.google.android.gms.common.api.internal.LifecycleActivity): com.google.android.gms.common.api.internal.LifecycleFragment;
                public getActivity(): globalAndroid.app.Activity;
                public onStop(): void;
                public constructor(param0: com.google.android.gms.common.api.internal.LifecycleFragment);
                public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
                public onCreate(param0: globalAndroid.os.Bundle): void;
                public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
                public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
                public onStart(): void;
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
      export module gms {
        export module common {
          export module api {
            export module internal {
              export class LifecycleFragment {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.LifecycleFragment>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.internal.LifecycleFragment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { getLifecycleActivity(): globalAndroid.app.Activity; getCallbackOrNull(param0: string, param1: java.lang.Class<any>): com.google.android.gms.common.api.internal.LifecycleCallback; addCallback(param0: string, param1: com.google.android.gms.common.api.internal.LifecycleCallback): void; startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void; isCreated(): boolean; isStarted(): boolean });
                public constructor();
                public addCallback(param0: string, param1: com.google.android.gms.common.api.internal.LifecycleCallback): void;
                public isCreated(): boolean;
                public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
                public getCallbackOrNull(param0: string, param1: java.lang.Class<any>): com.google.android.gms.common.api.internal.LifecycleCallback;
                public isStarted(): boolean;
                public getLifecycleActivity(): globalAndroid.app.Activity;
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
      export module gms {
        export module common {
          export module api {
            export module internal {
              export class StatusExceptionMapper {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.StatusExceptionMapper>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.internal.StatusExceptionMapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { getException(param0: com.google.android.gms.common.api.Status): java.lang.Exception });
                public constructor();
                public getException(param0: com.google.android.gms.common.api.Status): java.lang.Exception;
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
      export module gms {
        export module common {
          export module api {
            export module internal {
              export class zza {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zza>;
                public run(): void;
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
      export module gms {
        export module common {
          export module api {
            export module internal {
              export class zzb implements com.google.android.gms.common.api.internal.LifecycleFragment {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zzb>;
                public onResume(): void;
                public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
                public constructor();
                public onDestroy(): void;
                public onStop(): void;
                public addCallback(param0: string, param1: com.google.android.gms.common.api.internal.LifecycleCallback): void;
                public isCreated(): boolean;
                public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
                public onCreate(param0: globalAndroid.os.Bundle): void;
                public getCallbackOrNull(param0: string, param1: java.lang.Class<any>): com.google.android.gms.common.api.internal.LifecycleCallback;
                public isStarted(): boolean;
                public getLifecycleActivity(): globalAndroid.app.Activity;
                public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
                public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
                public onStart(): void;
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
      export module gms {
        export module common {
          export module api {
            export module internal {
              export class zzc {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zzc>;
                public run(): void;
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
      export module gms {
        export module common {
          export module api {
            export module internal {
              export class zzd implements com.google.android.gms.common.api.internal.LifecycleFragment {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zzd>;
                public onResume(): void;
                public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
                public constructor();
                public onDestroy(): void;
                public onStop(): void;
                public addCallback(param0: string, param1: com.google.android.gms.common.api.internal.LifecycleCallback): void;
                public isCreated(): boolean;
                public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
                public onCreate(param0: globalAndroid.os.Bundle): void;
                public getCallbackOrNull(param0: string, param1: java.lang.Class<any>): com.google.android.gms.common.api.internal.LifecycleCallback;
                public isStarted(): boolean;
                public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
                public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
                public onStart(): void;
                public getLifecycleActivity(): globalAndroid.app.Activity;
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
      export module gms {
        export module common {
          export module api {
            export class zza {
              public static class: java.lang.Class<com.google.android.gms.common.api.zza>;
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
      export module gms {
        export module common {
          export module api {
            export class zzb {
              public static class: java.lang.Class<com.google.android.gms.common.api.zzb>;
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
      export module gms {
        export module common {
          export module config {
            export abstract class GservicesValue<T> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.common.config.GservicesValue<any>>;
              public static value(param0: string, param1: string): com.google.android.gms.common.config.GservicesValue<string>;
              /** @deprecated */
              public getBinderSafe(): T;
              public static value(param0: string, param1: java.lang.Float): com.google.android.gms.common.config.GservicesValue<java.lang.Float>;
              public constructor(param0: string, param1: any);
              public resetOverride(): void;
              public static value(param0: string, param1: java.lang.Integer): com.google.android.gms.common.config.GservicesValue<java.lang.Integer>;
              public static value(param0: string, param1: java.lang.Long): com.google.android.gms.common.config.GservicesValue<java.lang.Long>;
              public static isInitialized(): boolean;
              public get(): T;
              public static value(param0: string, param1: boolean): com.google.android.gms.common.config.GservicesValue<java.lang.Boolean>;
              public override(param0: T): void;
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
      export module gms {
        export module common {
          export module config {
            export class zza extends com.google.android.gms.common.config.GservicesValue<any> {
              public static class: java.lang.Class<com.google.android.gms.common.config.zza>;
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
      export module gms {
        export module common {
          export module config {
            export class zzb extends com.google.android.gms.common.config.GservicesValue<any> {
              public static class: java.lang.Class<com.google.android.gms.common.config.zzb>;
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
      export module gms {
        export module common {
          export module config {
            export class zzc extends com.google.android.gms.common.config.GservicesValue<any> {
              public static class: java.lang.Class<com.google.android.gms.common.config.zzc>;
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
      export module gms {
        export module common {
          export module config {
            export class zzd extends com.google.android.gms.common.config.GservicesValue<any> {
              public static class: java.lang.Class<com.google.android.gms.common.config.zzd>;
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
      export module gms {
        export module common {
          export module config {
            export class zze extends com.google.android.gms.common.config.GservicesValue<any> {
              public static class: java.lang.Class<com.google.android.gms.common.config.zze>;
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
      export module gms {
        export module common {
          export module internal {
            export class AccountAccessor extends com.google.android.gms.common.internal.IAccountAccessor.Stub {
              public static class: java.lang.Class<com.google.android.gms.common.internal.AccountAccessor>;
              public static getAccountBinderSafe(param0: com.google.android.gms.common.internal.IAccountAccessor): globalAndroid.accounts.Account;
              public equals(param0: any): boolean;
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
      export module gms {
        export module common {
          export module internal {
            export class AccountType {
              public static class: java.lang.Class<com.google.android.gms.common.internal.AccountType>;
              public static GOOGLE: string;
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
      export module gms {
        export module common {
          export module internal {
            export class Asserts {
              public static class: java.lang.Class<com.google.android.gms.common.internal.Asserts>;
              public static checkNotNull(param0: any, param1: any): void;
              public static checkState(param0: boolean, param1: any): void;
              public static checkNotMainThread(param0: string): void;
              public static checkNull(param0: any): void;
              public static checkNotNull(param0: any): void;
              public static checkMainThread(param0: string): void;
              public static checkState(param0: boolean): void;
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
      export module gms {
        export module common {
          export module internal {
            export abstract class BaseGmsClient<T> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient<any>>;
              public static CONNECT_STATE_DISCONNECTED: number;
              public static CONNECT_STATE_CONNECTED: number;
              public static CONNECT_STATE_DISCONNECTING: number;
              public static KEY_PENDING_INTENT: string;
              public static DEFAULT_ACCOUNT: string;
              public static GOOGLE_PLUS_REQUIRED_FEATURES: androidNative.Array<string>;
              public onConnectedLocked(param0: T): void;
              public getLooper(): globalAndroid.os.Looper;
              public getServiceDescriptor(): string;
              public enableLocalFallback(): boolean;
              public onConnectionSuspended(param0: number): void;
              public hasConnectionInfo(): boolean;
              public onPostInitHandler(param0: number, param1: globalAndroid.os.IBinder, param2: globalAndroid.os.Bundle, param3: number): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param7: string);
              public getAccount(): globalAndroid.accounts.Account;
              public getEndpointPackageName(): string;
              public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
              public triggerConnectionSuspended(param0: number): void;
              public getConnectionHint(): globalAndroid.os.Bundle;
              public getService(): T;
              public getLocalStartServiceAction(): string;
              public getContext(): globalAndroid.content.Context;
              public getStartServicePackage(): string;
              public requiresAccount(): boolean;
              public getScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
              public checkAvailabilityAndConnect(): void;
              public getLastDisconnectMessage(): string;
              public getTelemetryConfiguration(): com.google.android.gms.common.internal.ConnectionTelemetryConfiguration;
              public getUseDynamicLookup(): boolean;
              public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
              public getApiFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
              public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
              public requiresSignIn(): boolean;
              public getStartServiceAction(): string;
              public getServiceBrokerBinder(): globalAndroid.os.IBinder;
              public requiresGooglePlayServices(): boolean;
              public checkConnected(): void;
              public usesClientTelemetry(): boolean;
              public createServiceInterface(param0: globalAndroid.os.IBinder): T;
              public getSignInIntent(): globalAndroid.content.Intent;
              public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
              public getGCoreServiceId(): number;
              public getGetServiceRequestExtraArgs(): globalAndroid.os.Bundle;
              public disconnect(): void;
              public isConnected(): boolean;
              public providesSignIn(): boolean;
              public triggerNotAvailable(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks, param1: number, param2: globalAndroid.app.PendingIntent): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param5: string);
              public isConnecting(): boolean;
              public disconnect(param0: string): void;
              public getMinApkVersion(): number;
              public setAttributionTag(param0: string): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener);
              public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
              public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
              public getBindServiceExecutor(): java.util.concurrent.Executor;
            }
            export module BaseGmsClient {
              export class BaseConnectionCallbacks {
                public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.BaseGmsClient$BaseConnectionCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onConnected(param0: globalAndroid.os.Bundle): void; onConnectionSuspended(param0: number): void });
                public constructor();
                public static CAUSE_SERVICE_DISCONNECTED: number;
                public static CAUSE_DEAD_OBJECT_EXCEPTION: number;
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public onConnectionSuspended(param0: number): void;
              }
              export class BaseOnConnectionFailedListener {
                public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.BaseGmsClient$BaseOnConnectionFailedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void });
                public constructor();
                public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
              }
              export class ConnectionProgressReportCallbacks {
                public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.BaseGmsClient$ConnectionProgressReportCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void });
                public constructor();
                public onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void;
              }
              export class LegacyClientCallbackAdapter extends com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks {
                public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.LegacyClientCallbackAdapter>;
                public onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void;
                public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>);
              }
              export class SignOutCallbacks {
                public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.BaseGmsClient$SignOutCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onSignOutComplete(): void });
                public constructor();
                public onSignOutComplete(): void;
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
      export module gms {
        export module common {
          export module internal {
            export class BinderWrapper {
              public static class: java.lang.Class<com.google.android.gms.common.internal.BinderWrapper>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.BinderWrapper>;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public describeContents(): number;
              public constructor(param0: globalAndroid.os.IBinder);
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
      export module gms {
        export module common {
          export module internal {
            export class ConnectionTelemetryConfiguration extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.internal.ConnectionTelemetryConfiguration>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.ConnectionTelemetryConfiguration>;
              public constructor();
              public getMethodTimingTelemetryEnabled(): boolean;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public getMethodInvocationMethodKeyDisallowlist(): androidNative.Array<number>;
              public getMaxMethodInvocationsLogged(): number;
              public constructor(param0: com.google.android.gms.common.internal.RootTelemetryConfiguration, param1: boolean, param2: boolean, param3: androidNative.Array<number>, param4: number, param5: androidNative.Array<number>);
              public getMethodInvocationTelemetryEnabled(): boolean;
              public getMethodInvocationMethodKeyAllowlist(): androidNative.Array<number>;
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
      export module gms {
        export module common {
          export module internal {
            export class Constants {
              public static class: java.lang.Class<com.google.android.gms.common.internal.Constants>;
              public static KEY_GMS_ERROR_CODE: string;
              public static KEY_NETWORK_TO_USE: string;
              public static ACTION_LOAD_IMAGE: string;
              public static EXTRA_URI: string;
              public static EXTRA_RESULT_RECEIVER: string;
              public static EXTRA_PRIORITY: string;
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
      export module gms {
        export module common {
          export module internal {
            export abstract class DowngradeableSafeParcel extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.internal.DowngradeableSafeParcel>;
              public constructor();
              public static canUnparcelSafely(param0: string): boolean;
              public setShouldDowngrade(param0: boolean): void;
              public prepareForClientVersion(param0: number): boolean;
              public static getUnparcelClientVersion(): java.lang.Integer;
              public shouldDowngrade(): boolean;
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
      export module gms {
        export module common {
          export module internal {
            export class GetServiceRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.internal.GetServiceRequest>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.GetServiceRequest>;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public getExtraArgs(): globalAndroid.os.Bundle;
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
      export module gms {
        export module common {
          export module internal {
            export abstract class GmsClientSupervisor {
              public static class: java.lang.Class<com.google.android.gms.common.internal.GmsClientSupervisor>;
              public constructor();
              public bindService(param0: string, param1: globalAndroid.content.ServiceConnection, param2: string): boolean;
              public unbindService(param0: globalAndroid.content.ComponentName, param1: globalAndroid.content.ServiceConnection, param2: string): void;
              public static getOrStartHandlerThread(): globalAndroid.os.HandlerThread;
              public unbindService(param0: string, param1: globalAndroid.content.ServiceConnection, param2: string): void;
              public static setUseHandlerThreadForCallbacks(): void;
              public static getDefaultBindFlags(): number;
              public bindService(param0: globalAndroid.content.ComponentName, param1: globalAndroid.content.ServiceConnection, param2: string): boolean;
              public static getInstance(param0: globalAndroid.content.Context): com.google.android.gms.common.internal.GmsClientSupervisor;
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
      export module gms {
        export module common {
          export module internal {
            export class GmsLogger {
              public static class: java.lang.Class<com.google.android.gms.common.internal.GmsLogger>;
              public d(param0: string, param1: string, param2: java.lang.Throwable): void;
              public w(param0: string, param1: string): void;
              public v(param0: string, param1: string): void;
              public w(param0: string, param1: string, param2: java.lang.Throwable): void;
              public constructor(param0: string, param1: string);
              public wfmt(param0: string, param1: string, param2: androidNative.Array<any>): void;
              public i(param0: string, param1: string, param2: java.lang.Throwable): void;
              public canLog(param0: number): boolean;
              public efmt(param0: string, param1: string, param2: androidNative.Array<any>): void;
              public wtf(param0: string, param1: string, param2: java.lang.Throwable): void;
              public i(param0: string, param1: string): void;
              public pii(param0: string, param1: string): void;
              public v(param0: string, param1: string, param2: java.lang.Throwable): void;
              public constructor(param0: string);
              public e(param0: string, param1: string, param2: java.lang.Throwable): void;
              public pii(param0: string, param1: string, param2: java.lang.Throwable): void;
              public d(param0: string, param1: string): void;
              public e(param0: string, param1: string): void;
              public canLogPii(): boolean;
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
      export module gms {
        export module common {
          export module internal {
            export class HideFirstParty {
              public static class: java.lang.Class<com.google.android.gms.common.internal.HideFirstParty>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.internal.HideFirstParty interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
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
      export module gms {
        export module common {
          export module internal {
            export class IAccountAccessor {
              public static class: java.lang.Class<com.google.android.gms.common.internal.IAccountAccessor>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.internal.IAccountAccessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zzb(): globalAndroid.accounts.Account });
              public constructor();
            }
            export module IAccountAccessor {
              export abstract class Stub extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.common.internal.IAccountAccessor {
                public static class: java.lang.Class<com.google.android.gms.common.internal.IAccountAccessor.Stub>;
                public static asInterface(param0: globalAndroid.os.IBinder): com.google.android.gms.common.internal.IAccountAccessor;
                public constructor();
                public constructor(param0: string);
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
      export module gms {
        export module common {
          export module internal {
            export class ICancelToken {
              public static class: java.lang.Class<com.google.android.gms.common.internal.ICancelToken>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.internal.ICancelToken interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { cancel(): void });
              public constructor();
              public cancel(): void;
            }
            export module ICancelToken {
              export abstract class Stub extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.common.internal.ICancelToken {
                public static class: java.lang.Class<com.google.android.gms.common.internal.ICancelToken.Stub>;
                public static asInterface(param0: globalAndroid.os.IBinder): com.google.android.gms.common.internal.ICancelToken;
                public cancel(): void;
                public constructor();
                public constructor(param0: string);
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
      export module gms {
        export module common {
          export module internal {
            export class IGmsCallbacks {
              public static class: java.lang.Class<com.google.android.gms.common.internal.IGmsCallbacks>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.internal.IGmsCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onPostInitComplete(param0: number, param1: globalAndroid.os.IBinder, param2: globalAndroid.os.Bundle): void; zzb(param0: number, param1: globalAndroid.os.Bundle): void; zzc(param0: number, param1: globalAndroid.os.IBinder, param2: any /* com.google.android.gms.common.internal.zzj*/): void });
              public constructor();
              public onPostInitComplete(param0: number, param1: globalAndroid.os.IBinder, param2: globalAndroid.os.Bundle): void;
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
      export module gms {
        export module common {
          export module internal {
            export class IGmsServiceBroker {
              public static class: java.lang.Class<com.google.android.gms.common.internal.IGmsServiceBroker>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.internal.IGmsServiceBroker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getService(param0: com.google.android.gms.common.internal.IGmsCallbacks, param1: com.google.android.gms.common.internal.GetServiceRequest): void });
              public constructor();
              public getService(param0: com.google.android.gms.common.internal.IGmsCallbacks, param1: com.google.android.gms.common.internal.GetServiceRequest): void;
            }
            export module IGmsServiceBroker {
              export abstract class Stub implements com.google.android.gms.common.internal.IGmsServiceBroker {
                public static class: java.lang.Class<com.google.android.gms.common.internal.IGmsServiceBroker.Stub>;
                public constructor();
                public getService(param0: com.google.android.gms.common.internal.IGmsCallbacks, param1: com.google.android.gms.common.internal.GetServiceRequest): void;
                public asBinder(): globalAndroid.os.IBinder;
                public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
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
      export module gms {
        export module common {
          export module internal {
            export class ImagesContract {
              public static class: java.lang.Class<com.google.android.gms.common.internal.ImagesContract>;
              public static URL: string;
              public static LOCAL: string;
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
      export module gms {
        export module common {
          export module internal {
            export class LibraryVersion {
              public static class: java.lang.Class<com.google.android.gms.common.internal.LibraryVersion>;
              public constructor();
              public static getInstance(): com.google.android.gms.common.internal.LibraryVersion;
              /** @deprecated */
              public getVersion(param0: string): string;
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
      export module gms {
        export module common {
          export module internal {
            export class Objects {
              public static class: java.lang.Class<com.google.android.gms.common.internal.Objects>;
              public static hashCode(param0: androidNative.Array<any>): number;
              public static toStringHelper(param0: any): com.google.android.gms.common.internal.Objects.ToStringHelper;
              public static checkBundlesEquality(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): boolean;
              public static equal(param0: any, param1: any): boolean;
            }
            export module Objects {
              export class ToStringHelper {
                public static class: java.lang.Class<com.google.android.gms.common.internal.Objects.ToStringHelper>;
                public toString(): string;
                public add(param0: string, param1: any): com.google.android.gms.common.internal.Objects.ToStringHelper;
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
      export module gms {
        export module common {
          export module internal {
            export class Preconditions {
              public static class: java.lang.Class<com.google.android.gms.common.internal.Preconditions>;
              public static checkArgument(param0: boolean): void;
              public static checkNotMainThread(param0: string): void;
              public static checkHandlerThread(param0: globalAndroid.os.Handler): void;
              public static checkNotZero(param0: number): number;
              public static checkNotEmpty(param0: string): string;
              public static checkHandlerThread(param0: globalAndroid.os.Handler, param1: string): void;
              public static checkNotNull(param0: any): any;
              public static checkState(param0: boolean): void;
              public static checkState(param0: boolean, param1: any): void;
              public static checkMainThread(): void;
              public static checkNotEmpty(param0: string, param1: any): string;
              public static checkNotZero(param0: number, param1: any): number;
              public static checkMainThread(param0: string): void;
              public static checkNotMainThread(): void;
              public static checkNotNull(param0: any, param1: any): any;
              public static checkArgument(param0: boolean, param1: any): void;
              public static checkState(param0: boolean, param1: string, param2: androidNative.Array<any>): void;
              public static checkArgument(param0: boolean, param1: string, param2: androidNative.Array<any>): void;
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
      export module gms {
        export module common {
          export module internal {
            export class ReflectedParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.internal.ReflectedParcelable>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.internal.ReflectedParcelable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
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
      export module gms {
        export module common {
          export module internal {
            export class ResourceUtils {
              public static class: java.lang.Class<com.google.android.gms.common.internal.ResourceUtils>;
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
      export module gms {
        export module common {
          export module internal {
            export class RootTelemetryConfigManager {
              public static class: java.lang.Class<com.google.android.gms.common.internal.RootTelemetryConfigManager>;
              public getConfig(): com.google.android.gms.common.internal.RootTelemetryConfiguration;
              public static getInstance(): com.google.android.gms.common.internal.RootTelemetryConfigManager;
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
      export module gms {
        export module common {
          export module internal {
            export class RootTelemetryConfiguration extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.internal.RootTelemetryConfiguration>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.RootTelemetryConfiguration>;
              public getBatchPeriodMillis(): number;
              public constructor();
              public getVersion(): number;
              public getMethodTimingTelemetryEnabled(): boolean;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public getMaxMethodInvocationsInBatch(): number;
              public constructor(param0: number, param1: boolean, param2: boolean, param3: number, param4: number);
              public getMethodInvocationTelemetryEnabled(): boolean;
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
      export module gms {
        export module common {
          export module internal {
            export class ServiceSpecificExtraArgs {
              public static class: java.lang.Class<com.google.android.gms.common.internal.ServiceSpecificExtraArgs>;
            }
            export module ServiceSpecificExtraArgs {
              export class CastExtraArgs {
                public static class: java.lang.Class<com.google.android.gms.common.internal.ServiceSpecificExtraArgs.CastExtraArgs>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.ServiceSpecificExtraArgs$CastExtraArgs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
                public static LISTENER: string;
              }
              export class GamesExtraArgs {
                public static class: java.lang.Class<com.google.android.gms.common.internal.ServiceSpecificExtraArgs.GamesExtraArgs>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.ServiceSpecificExtraArgs$GamesExtraArgs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
                public static DESIRED_LOCALE: string;
                public static SIGNIN_OPTIONS: string;
                public static GAME_PACKAGE_NAME: string;
                public static WINDOW_TOKEN: string;
              }
              export class PlusExtraArgs {
                public static class: java.lang.Class<com.google.android.gms.common.internal.ServiceSpecificExtraArgs.PlusExtraArgs>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.ServiceSpecificExtraArgs$PlusExtraArgs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
                public static PLUS_AUTH_PACKAGE: string;
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
      export module gms {
        export module common {
          export module internal {
            export class ShowFirstParty {
              public static class: java.lang.Class<com.google.android.gms.common.internal.ShowFirstParty>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.internal.ShowFirstParty interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
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
      export module gms {
        export module common {
          export module internal {
            export class StringResourceValueReader {
              public static class: java.lang.Class<com.google.android.gms.common.internal.StringResourceValueReader>;
              public getString(param0: string): string;
              public constructor(param0: globalAndroid.content.Context);
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
      export module gms {
        export module common {
          export module internal {
            export class ViewUtils {
              public static class: java.lang.Class<com.google.android.gms.common.internal.ViewUtils>;
              public static getXmlAttributeString(param0: string, param1: string, param2: globalAndroid.content.Context, param3: globalAndroid.util.AttributeSet, param4: boolean, param5: boolean, param6: string): string;
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
      export module gms {
        export module common {
          export module internal {
            export module constants {
              export class ListAppsActivityContract {
                public static class: java.lang.Class<com.google.android.gms.common.internal.constants.ListAppsActivityContract>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.constants.ListAppsActivityContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
                public static EXTRA_PRESELECTED_FILTER: string;
                public static ACTION_APPS: string;
                public static PRESELECTED_FILTER_FITNESS_APPS: number;
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
      export module gms {
        export module common {
          export module internal {
            export module safeparcel {
              export abstract class AbstractSafeParcelable extends com.google.android.gms.common.internal.safeparcel.SafeParcelable {
                public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable>;
                public describeContents(): number;
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
      export module gms {
        export module common {
          export module internal {
            export module safeparcel {
              export class SafeParcelReader {
                public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelReader>;
                public static createBundle(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.os.Bundle;
                public static createParcelable(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.Parcelable.Creator<any>): globalAndroid.os.Parcelable;
                public static createStringList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<string>;
                public static createCharArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<string>;
                public static readIntegerObject(param0: globalAndroid.os.Parcel, param1: number): java.lang.Integer;
                public static readShort(param0: globalAndroid.os.Parcel, param1: number): number;
                public static readList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<any>, param3: java.lang.ClassLoader): void;
                public static createIntegerList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<java.lang.Integer>;
                public static createTypedList(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.Parcelable.Creator<any>): java.util.ArrayList<any>;
                public static readInt(param0: globalAndroid.os.Parcel, param1: number): number;
                public static createParcel(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.os.Parcel;
                public static readDoubleObject(param0: globalAndroid.os.Parcel, param1: number): java.lang.Double;
                public static createSparseBooleanArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseBooleanArray;
                public static readLong(param0: globalAndroid.os.Parcel, param1: number): number;
                public static readByte(param0: globalAndroid.os.Parcel, param1: number): number;
                public static skipUnknownField(param0: globalAndroid.os.Parcel, param1: number): void;
                public static createDoubleArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<number>;
                public static createTypedSparseArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.Parcelable.Creator<any>): globalAndroid.util.SparseArray<any>;
                public static readBoolean(param0: globalAndroid.os.Parcel, param1: number): boolean;
                public static createParcelList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<globalAndroid.os.Parcel>;
                public static createLongArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<number>;
                public static createIBinderArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<globalAndroid.os.IBinder>;
                public static createLongList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<java.lang.Long>;
                public static readSize(param0: globalAndroid.os.Parcel, param1: number): number;
                public static createDoubleList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<java.lang.Double>;
                public static createByteArraySparseArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseArray<androidNative.Array<number>>;
                public static validateObjectHeader(param0: globalAndroid.os.Parcel): number;
                public static createBigDecimalArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<java.math.BigDecimal>;
                public static createFloatList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<java.lang.Float>;
                public static readHeader(param0: globalAndroid.os.Parcel): number;
                public static readIBinder(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.os.IBinder;
                public static readFloatObject(param0: globalAndroid.os.Parcel, param1: number): java.lang.Float;
                public static createStringSparseArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseArray<string>;
                public static readBooleanObject(param0: globalAndroid.os.Parcel, param1: number): java.lang.Boolean;
                public static createBooleanList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<java.lang.Boolean>;
                public static createStringArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<string>;
                public static createDoubleSparseArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseArray<java.lang.Double>;
                public static createIBinderList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<globalAndroid.os.IBinder>;
                public static createIntArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<number>;
                public static createBigInteger(param0: globalAndroid.os.Parcel, param1: number): java.math.BigInteger;
                public static readChar(param0: globalAndroid.os.Parcel, param1: number): string;
                public static createParcelArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<globalAndroid.os.Parcel>;
                public static readPendingIntent(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.app.PendingIntent;
                public static ensureAtEnd(param0: globalAndroid.os.Parcel, param1: number): void;
                public static readDouble(param0: globalAndroid.os.Parcel, param1: number): number;
                public static getFieldId(param0: number): number;
                public static createBigIntegerArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<java.math.BigInteger>;
                public static createIBinderSparseArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseArray<globalAndroid.os.IBinder>;
                public static createBigDecimal(param0: globalAndroid.os.Parcel, param1: number): java.math.BigDecimal;
                public static createTypedArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.Parcelable.Creator<any>): androidNative.Array<any>;
                public static createString(param0: globalAndroid.os.Parcel, param1: number): string;
                public static createBooleanArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<boolean>;
                public static readLongObject(param0: globalAndroid.os.Parcel, param1: number): java.lang.Long;
                public static createSparseIntArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseIntArray;
                public static createFloatArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<number>;
                public static createSparseLongArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseLongArray;
                public static createByteArrayArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<androidNative.Array<number>>;
                public static createParcelSparseArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseArray<globalAndroid.os.Parcel>;
                public static createFloatSparseArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseArray<java.lang.Float>;
                public static readFloat(param0: globalAndroid.os.Parcel, param1: number): number;
                public static createByteArray(param0: globalAndroid.os.Parcel, param1: number): androidNative.Array<number>;
              }
              export module SafeParcelReader {
                export class ParseException {
                  public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelReader.ParseException>;
                  public constructor(param0: string, param1: globalAndroid.os.Parcel);
                }
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
      export module gms {
        export module common {
          export module internal {
            export module safeparcel {
              export class SafeParcelWriter {
                public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelWriter>;
                public static writeByteArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<number>, param3: boolean): void;
                public static writeStringArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<string>, param3: boolean): void;
                public static writeIntArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<number>, param3: boolean): void;
                public static writeStringSparseArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseArray<string>, param3: boolean): void;
                public static writeSparseIntArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseIntArray, param3: boolean): void;
                public static writeDouble(param0: globalAndroid.os.Parcel, param1: number, param2: number): void;
                public static writeSparseBooleanArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseBooleanArray, param3: boolean): void;
                public static writeByteArrayArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<androidNative.Array<number>>, param3: boolean): void;
                public static writeBooleanObject(param0: globalAndroid.os.Parcel, param1: number, param2: java.lang.Boolean, param3: boolean): void;
                public static writeLongArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<number>, param3: boolean): void;
                public static writeParcelSparseArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseArray<globalAndroid.os.Parcel>, param3: boolean): void;
                public static writeFloat(param0: globalAndroid.os.Parcel, param1: number, param2: number): void;
                public static writeShort(param0: globalAndroid.os.Parcel, param1: number, param2: number): void;
                public static writeBundle(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.Bundle, param3: boolean): void;
                public static writeIBinder(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.IBinder, param3: boolean): void;
                public static writeSparseLongArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseLongArray, param3: boolean): void;
                public static writeChar(param0: globalAndroid.os.Parcel, param1: number, param2: string): void;
                public static writeString(param0: globalAndroid.os.Parcel, param1: number, param2: string, param3: boolean): void;
                public static writeParcel(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.Parcel, param3: boolean): void;
                public static writeBooleanList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<java.lang.Boolean>, param3: boolean): void;
                public static writeIBinderArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<globalAndroid.os.IBinder>, param3: boolean): void;
                public static writeLongObject(param0: globalAndroid.os.Parcel, param1: number, param2: java.lang.Long, param3: boolean): void;
                public static writeFloatSparseArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseArray<java.lang.Float>, param3: boolean): void;
                public static writeBoolean(param0: globalAndroid.os.Parcel, param1: number, param2: boolean): void;
                public static writePendingIntent(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.app.PendingIntent, param3: boolean): void;
                public static writeDoubleSparseArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseArray<java.lang.Double>, param3: boolean): void;
                public static writeFloatList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<java.lang.Float>, param3: boolean): void;
                public static writeStringList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<string>, param3: boolean): void;
                public static writeFloatObject(param0: globalAndroid.os.Parcel, param1: number, param2: java.lang.Float, param3: boolean): void;
                public static writeBooleanArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<boolean>, param3: boolean): void;
                public static writeParcelable(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.Parcelable, param3: number, param4: boolean): void;
                public static writeBigIntegerArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<java.math.BigInteger>, param3: boolean): void;
                public static writeTypedSparseArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseArray<any>, param3: boolean): void;
                public static writeTypedList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<any>, param3: boolean): void;
                public static writeTypedArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<globalAndroid.os.Parcelable>, param3: number, param4: boolean): void;
                public static finishObjectHeader(param0: globalAndroid.os.Parcel, param1: number): void;
                public static writeIntegerList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<java.lang.Integer>, param3: boolean): void;
                public static beginObjectHeader(param0: globalAndroid.os.Parcel): number;
                public static writeBigDecimalArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<java.math.BigDecimal>, param3: boolean): void;
                public static writeByte(param0: globalAndroid.os.Parcel, param1: number, param2: number): void;
                public static writeLong(param0: globalAndroid.os.Parcel, param1: number, param2: number): void;
                public static writeLongList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<java.lang.Long>, param3: boolean): void;
                public static writeByteArraySparseArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseArray<androidNative.Array<number>>, param3: boolean): void;
                public static writeIntegerObject(param0: globalAndroid.os.Parcel, param1: number, param2: java.lang.Integer, param3: boolean): void;
                public static writeList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<any>, param3: boolean): void;
                public static writeDoubleList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<java.lang.Double>, param3: boolean): void;
                public static writeBigInteger(param0: globalAndroid.os.Parcel, param1: number, param2: java.math.BigInteger, param3: boolean): void;
                public static writeDoubleObject(param0: globalAndroid.os.Parcel, param1: number, param2: java.lang.Double, param3: boolean): void;
                public static writeParcelArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<globalAndroid.os.Parcel>, param3: boolean): void;
                public static writeFloatArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<number>, param3: boolean): void;
                public static writeIBinderList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<globalAndroid.os.IBinder>, param3: boolean): void;
                public static writeDoubleArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<number>, param3: boolean): void;
                public static writeCharArray(param0: globalAndroid.os.Parcel, param1: number, param2: androidNative.Array<string>, param3: boolean): void;
                public static writeInt(param0: globalAndroid.os.Parcel, param1: number, param2: number): void;
                public static writeBigDecimal(param0: globalAndroid.os.Parcel, param1: number, param2: java.math.BigDecimal, param3: boolean): void;
                public static writeIBinderSparseArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseArray<globalAndroid.os.IBinder>, param3: boolean): void;
                public static writeParcelList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<globalAndroid.os.Parcel>, param3: boolean): void;
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
      export module gms {
        export module common {
          export module internal {
            export module safeparcel {
              export class SafeParcelable {
                public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
                public static NULL: string;
              }
              export module SafeParcelable {
                export class Class {
                  public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Class>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Class interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { creator(): string; doNotParcelTypeDefaultValues(): boolean; validate(): boolean });
                  public constructor();
                  public doNotParcelTypeDefaultValues(): boolean;
                  public creator(): string;
                  public validate(): boolean;
                }
                export class Constructor {
                  public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Constructor>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Constructor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: {});
                  public constructor();
                }
                export class Field {
                  public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Field>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Field interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { id(): number; defaultValue(): string; defaultValueUnchecked(): string; getter(): string; type(): string });
                  public constructor();
                  public defaultValueUnchecked(): string;
                  public getter(): string;
                  public type(): string;
                  public id(): number;
                  public defaultValue(): string;
                }
                export class Indicator {
                  public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Indicator>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Indicator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { getter(): string });
                  public constructor();
                  public getter(): string;
                }
                export class Param {
                  public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Param>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Param interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { id(): number });
                  public constructor();
                  public id(): number;
                }
                export class RemovedParam {
                  public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.RemovedParam>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$RemovedParam interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { id(): number; defaultValue(): string; defaultValueUnchecked(): string });
                  public constructor();
                  public defaultValueUnchecked(): string;
                  public id(): number;
                  public defaultValue(): string;
                }
                export class Reserved {
                  public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Reserved>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Reserved interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { value(): androidNative.Array<number> });
                  public constructor();
                  public value(): androidNative.Array<number>;
                }
                export class VersionField {
                  public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.VersionField>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$VersionField interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { id(): number; getter(): string; type(): string });
                  public constructor();
                  public getter(): string;
                  public type(): string;
                  public id(): number;
                }
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
      export module gms {
        export module common {
          export module internal {
            export module safeparcel {
              export class SafeParcelableSerializer {
                public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelableSerializer>;
                public static serializeToString(param0: com.google.android.gms.common.internal.safeparcel.SafeParcelable): string;
                public static deserializeFromString(param0: string, param1: globalAndroid.os.Parcelable.Creator<any>): com.google.android.gms.common.internal.safeparcel.SafeParcelable;
                public static serializeToIntentExtra(param0: com.google.android.gms.common.internal.safeparcel.SafeParcelable, param1: globalAndroid.content.Intent, param2: string): void;
                /** @deprecated */
                public static serializeIterableToIntentExtra(param0: java.lang.Iterable<any>, param1: globalAndroid.content.Intent, param2: string): void;
                public static serializeIterableToIntentExtraSafe(param0: java.lang.Iterable<any>, param1: globalAndroid.content.Intent, param2: string): void;
                public static deserializeIterableFromBundleSafe(param0: globalAndroid.os.Bundle, param1: string, param2: globalAndroid.os.Parcelable.Creator<any>): java.util.ArrayList<any>;
                public static deserializeIterableFromIntentExtraSafe(param0: globalAndroid.content.Intent, param1: string, param2: globalAndroid.os.Parcelable.Creator<any>): java.util.ArrayList<any>;
                public static deserializeFromIntentExtra(param0: globalAndroid.content.Intent, param1: string, param2: globalAndroid.os.Parcelable.Creator<any>): com.google.android.gms.common.internal.safeparcel.SafeParcelable;
                public static deserializeIterableFromBytes(param0: androidNative.Array<number>, param1: globalAndroid.os.Parcelable.Creator<any>): java.util.ArrayList<any>;
                public static serializeToBytes(param0: com.google.android.gms.common.internal.safeparcel.SafeParcelable): androidNative.Array<number>;
                /** @deprecated */
                public static deserializeIterableFromIntentExtra(param0: globalAndroid.content.Intent, param1: string, param2: globalAndroid.os.Parcelable.Creator<any>): java.util.ArrayList<any>;
                public static serializeIterableToBundleSafe(param0: java.lang.Iterable<any>, param1: globalAndroid.os.Bundle, param2: string): void;
                /** @deprecated */
                public static deserializeIterableFromBundle(param0: globalAndroid.os.Bundle, param1: string, param2: globalAndroid.os.Parcelable.Creator<any>): java.util.ArrayList<any>;
                /** @deprecated */
                public static serializeIterableToBundle(param0: java.lang.Iterable<any>, param1: globalAndroid.os.Bundle, param2: string): void;
                public static deserializeFromBytes(param0: androidNative.Array<number>, param1: globalAndroid.os.Parcelable.Creator<any>): com.google.android.gms.common.internal.safeparcel.SafeParcelable;
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
      export module gms {
        export module common {
          export module internal {
            export abstract class zza extends com.google.android.gms.common.internal.zzc {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zza>;
              public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: any);
              public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: number, param2: globalAndroid.os.Bundle);
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
      export module gms {
        export module common {
          export module internal {
            export class zzaa extends com.google.android.gms.internal.common.zza implements com.google.android.gms.common.internal.IGmsCallbacks {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzaa>;
              public onPostInitComplete(param0: number, param1: globalAndroid.os.IBinder, param2: globalAndroid.os.Bundle): void;
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
      export module gms {
        export module common {
          export module internal {
            export abstract class zzab extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.common.internal.IGmsCallbacks {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzab>;
              public constructor();
              public constructor(param0: string);
              public onPostInitComplete(param0: number, param1: globalAndroid.os.IBinder, param2: globalAndroid.os.Bundle): void;
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
      export module gms {
        export module common {
          export module internal {
            export class zzac extends com.google.android.gms.common.internal.IGmsServiceBroker {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzac>;
              public asBinder(): globalAndroid.os.IBinder;
              public getService(param0: com.google.android.gms.common.internal.IGmsCallbacks, param1: com.google.android.gms.common.internal.GetServiceRequest): void;
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
      export module gms {
        export module common {
          export module internal {
            export class zzad extends com.google.android.gms.internal.common.zza implements com.google.android.gms.common.internal.zzaf {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzad>;
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
      export module gms {
        export module common {
          export module internal {
            export abstract class zzae extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.common.internal.zzaf {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzae>;
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
      export module gms {
        export module common {
          export module internal {
            export class zzaf {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzaf>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.internal.zzaf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zze(param0: any /* com.google.android.gms.common.zzo*/): any /* com.google.android.gms.common.zzq*/; zzf(param0: any /* com.google.android.gms.common.zzo*/): any /* com.google.android.gms.common.zzq*/; zzg(): boolean; zzh(param0: any /* com.google.android.gms.common.zzs*/, param1: com.google.android.gms.dynamic.IObjectWrapper): boolean; zzi(): boolean });
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
      export module gms {
        export module common {
          export module internal {
            export class zzag {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzag>;
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
      export module gms {
        export module common {
          export module internal {
            export class zzah {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzah>;
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
      export module gms {
        export module common {
          export module internal {
            export class zzai {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzai>;
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
      export module gms {
        export module common {
          export module internal {
            export class zzaj extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzaj>;
              public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zzaj>*/;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
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
      export module gms {
        export module common {
          export module internal {
            export class zzak {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzak>;
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
      export module gms {
        export module common {
          export module internal {
            export class zzb extends com.google.android.gms.internal.common.zzi {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzb>;
              public constructor();
              public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: globalAndroid.os.Looper);
              public constructor(param0: globalAndroid.os.Looper);
              public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
              public handleMessage(param0: globalAndroid.os.Message): void;
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
      export module gms {
        export module common {
          export module internal {
            export abstract class zzc {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzc>;
              public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: any);
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
      export module gms {
        export module common {
          export module internal {
            export class zzd extends com.google.android.gms.common.internal.zzab {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzd>;
              public constructor();
              public constructor(param0: string);
              public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: number);
              public onPostInitComplete(param0: number, param1: globalAndroid.os.IBinder, param2: globalAndroid.os.Bundle): void;
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
      export module gms {
        export module common {
          export module internal {
            export class zze {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zze>;
              public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
              public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: number);
              public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
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
      export module gms {
        export module common {
          export module internal {
            export class zzf extends com.google.android.gms.common.internal.zza {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzf>;
              public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: any);
              public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: number, param2: globalAndroid.os.IBinder, param3: globalAndroid.os.Bundle);
              public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: number, param2: globalAndroid.os.Bundle);
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
      export module gms {
        export module common {
          export module internal {
            export class zzg extends com.google.android.gms.common.internal.zza {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzg>;
              public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: any);
              public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: number, param2: globalAndroid.os.Bundle);
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
      export module gms {
        export module common {
          export module internal {
            export class zzh {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzh>;
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
      export module gms {
        export module common {
          export module internal {
            export class zzi {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzi>;
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
      export module gms {
        export module common {
          export module internal {
            export class zzj extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzj>;
              public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zzj>*/;
              public constructor();
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
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
      export module gms {
        export module common {
          export module internal {
            export class zzk {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzk>;
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
      export module gms {
        export module common {
          export module internal {
            export class zzl {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzl>;
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
      export module gms {
        export module common {
          export module internal {
            export class zzm {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzm>;
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
      export module gms {
        export module common {
          export module internal {
            export class zzn {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzn>;
              public constructor(param0: globalAndroid.content.ComponentName, param1: number);
              public constructor(param0: string, param1: string, param2: number, param3: boolean);
              public hashCode(): number;
              public constructor(param0: string, param1: number, param2: boolean);
              public toString(): string;
              public equals(param0: any): boolean;
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
      export module gms {
        export module common {
          export module internal {
            export class zzo extends com.google.android.gms.common.internal.zzs {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzo>;
              public constructor(param0: any /* com.google.android.gms.common.internal.zzr*/, param1: any /* com.google.android.gms.common.internal.zzn*/);
              public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
              public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
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
      export module gms {
        export module common {
          export module internal {
            export class zzp {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzp>;
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
      export module gms {
        export module common {
          export module internal {
            export class zzq {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzq>;
              public handleMessage(param0: globalAndroid.os.Message): boolean;
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
      export module gms {
        export module common {
          export module internal {
            export class zzr extends com.google.android.gms.common.internal.GmsClientSupervisor {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzr>;
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
      export module gms {
        export module common {
          export module internal {
            export class zzs {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzs>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.internal.zzs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
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
      export module gms {
        export module common {
          export module internal {
            export class zzt {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzt>;
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
      export module gms {
        export module common {
          export module internal {
            export class zzu {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzu>;
              public constructor(param0: string, param1: string, param2: boolean, param3: number, param4: boolean);
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
      export module gms {
        export module common {
          export module internal {
            export class zzv extends com.google.android.gms.internal.common.zza implements com.google.android.gms.common.internal.IAccountAccessor {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzv>;
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
      export module gms {
        export module common {
          export module internal {
            export class zzw extends com.google.android.gms.internal.common.zza implements com.google.android.gms.common.internal.ICancelToken {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzw>;
              public cancel(): void;
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
      export module gms {
        export module common {
          export module internal {
            export class zzx extends com.google.android.gms.internal.common.zza implements com.google.android.gms.common.internal.zzz {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzx>;
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
      export module gms {
        export module common {
          export module internal {
            export abstract class zzy extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.common.internal.zzz {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzy>;
              public constructor();
              public constructor(param0: string);
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
      export module gms {
        export module common {
          export module internal {
            export class zzz {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzz>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.internal.zzz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zzc(): number; zzd(): com.google.android.gms.dynamic.IObjectWrapper });
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
      export module gms {
        export module common {
          export module logging {
            export class Logger {
              public static class: java.lang.Class<com.google.android.gms.common.logging.Logger>;
              public wtf(param0: java.lang.Throwable): void;
              public e(param0: string, param1: androidNative.Array<any>): void;
              public w(param0: string, param1: androidNative.Array<any>): void;
              public isLoggable(param0: number): boolean;
              public constructor(param0: string, param1: androidNative.Array<string>);
              public i(param0: string, param1: androidNative.Array<any>): void;
              public getTag(): string;
              public d(param0: string, param1: androidNative.Array<any>): void;
              public v(param0: string, param1: java.lang.Throwable, param2: androidNative.Array<any>): void;
              public e(param0: string, param1: java.lang.Throwable, param2: androidNative.Array<any>): void;
              public v(param0: string, param1: androidNative.Array<any>): void;
              public format(param0: string, param1: androidNative.Array<any>): string;
              public wtf(param0: string, param1: java.lang.Throwable, param2: androidNative.Array<any>): void;
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
      export module gms {
        export module common {
          export module providers {
            export class PooledExecutorsProvider {
              public static class: java.lang.Class<com.google.android.gms.common.providers.PooledExecutorsProvider>;
              /** @deprecated */
              public static getInstance(): com.google.android.gms.common.providers.PooledExecutorsProvider.PooledExecutorFactory;
            }
            export module PooledExecutorsProvider {
              export class PooledExecutorFactory {
                public static class: java.lang.Class<com.google.android.gms.common.providers.PooledExecutorsProvider.PooledExecutorFactory>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.providers.PooledExecutorsProvider$PooledExecutorFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { newSingleThreadScheduledExecutor(): java.util.concurrent.ScheduledExecutorService });
                public constructor();
                /** @deprecated */
                public newSingleThreadScheduledExecutor(): java.util.concurrent.ScheduledExecutorService;
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
      export module gms {
        export module common {
          export module providers {
            export class zza extends com.google.android.gms.common.providers.PooledExecutorsProvider.PooledExecutorFactory {
              public static class: java.lang.Class<com.google.android.gms.common.providers.zza>;
              public newSingleThreadScheduledExecutor(): java.util.concurrent.ScheduledExecutorService;
              /** @deprecated */
              public newSingleThreadScheduledExecutor(): java.util.concurrent.ScheduledExecutorService;
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
      export module gms {
        export module common {
          export module sqlite {
            export class CursorWrapper {
              public static class: java.lang.Class<com.google.android.gms.common.sqlite.CursorWrapper>;
              public setWindow(param0: globalAndroid.database.CursorWindow): void;
              public getWindow(): globalAndroid.database.CursorWindow;
              public constructor(param0: globalAndroid.database.Cursor);
              public fillWindow(param0: number, param1: globalAndroid.database.CursorWindow): void;
              public onMove(param0: number, param1: number): boolean;
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
      export module gms {
        export module common {
          export module stats {
            export class ConnectionTracker {
              public static class: java.lang.Class<com.google.android.gms.common.stats.ConnectionTracker>;
              public unbindServiceSafe(param0: globalAndroid.content.Context, param1: globalAndroid.content.ServiceConnection): void;
              public static getInstance(): com.google.android.gms.common.stats.ConnectionTracker;
              public bindService(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent, param2: globalAndroid.content.ServiceConnection, param3: number): boolean;
              public unbindService(param0: globalAndroid.content.Context, param1: globalAndroid.content.ServiceConnection): void;
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
      export module gms {
        export module common {
          export module stats {
            export class LoggingConstants {
              public static class: java.lang.Class<com.google.android.gms.common.stats.LoggingConstants>;
              public static EXTRA_WAKE_LOCK_KEY: string;
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
      export module gms {
        export module common {
          export module stats {
            export abstract class StatsEvent extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.stats.StatsEvent>;
              public constructor();
              public toString(): string;
            }
            export module StatsEvent {
              export class Types {
                public static class: java.lang.Class<com.google.android.gms.common.stats.StatsEvent.Types>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.stats.StatsEvent$Types interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
                public static EVENT_TYPE_RELEASE_WAKE_LOCK: number;
                public static EVENT_TYPE_ACQUIRE_WAKE_LOCK: number;
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
      export module gms {
        export module common {
          export module stats {
            export class StatsUtils {
              public static class: java.lang.Class<com.google.android.gms.common.stats.StatsUtils>;
              public constructor();
              public static getEventKey(param0: globalAndroid.os.PowerManager.WakeLock, param1: string): string;
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
      export module gms {
        export module common {
          export module stats {
            export class WakeLockEvent extends com.google.android.gms.common.stats.StatsEvent {
              public static class: java.lang.Class<com.google.android.gms.common.stats.WakeLockEvent>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.stats.WakeLockEvent>;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
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
      export module gms {
        export module common {
          export module stats {
            export class WakeLockTracker {
              public static class: java.lang.Class<com.google.android.gms.common.stats.WakeLockTracker>;
              public constructor();
              public registerEvent(param0: globalAndroid.content.Context, param1: string, param2: number, param3: string, param4: string, param5: string, param6: number, param7: java.util.List<string>): void;
              public registerReleaseEvent(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
              public registerDeadlineEvent(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string, param4: number, param5: java.util.List<string>, param6: boolean, param7: number): void;
              public registerAcquireEvent(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent, param2: string, param3: string, param4: string, param5: number, param6: string): void;
              public registerEvent(param0: globalAndroid.content.Context, param1: string, param2: number, param3: string, param4: string, param5: string, param6: number, param7: java.util.List<string>, param8: number): void;
              public static getInstance(): com.google.android.gms.common.stats.WakeLockTracker;
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
      export module gms {
        export module common {
          export module stats {
            export class zza {
              public static class: java.lang.Class<com.google.android.gms.common.stats.zza>;
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
      export module gms {
        export module common {
          export module util {
            export class AndroidUtilsLight {
              public static class: java.lang.Class<com.google.android.gms.common.util.AndroidUtilsLight>;
              public constructor();
              /** @deprecated */
              public static getPackageCertificateHashBytes(param0: globalAndroid.content.Context, param1: string): androidNative.Array<number>;
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
      export module gms {
        export module common {
          export module util {
            export class ArrayUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.ArrayUtils>;
              public static contains(param0: androidNative.Array<number>, param1: number): boolean;
              public static toArrayList(param0: androidNative.Array<any>): java.util.ArrayList<any>;
              public static writeArray(param0: java.lang.StringBuilder, param1: androidNative.Array<boolean>): void;
              public static writeArray(param0: java.lang.StringBuilder, param1: androidNative.Array<number>): void;
              public static contains(param0: androidNative.Array<any>, param1: any): boolean;
              public static toPrimitiveArray(param0: java.util.Collection<java.lang.Integer>): androidNative.Array<number>;
              public static concat(param0: androidNative.Array<androidNative.Array<any>>): androidNative.Array<any>;
              public static concatByteArrays(param0: androidNative.Array<androidNative.Array<number>>): androidNative.Array<number>;
              public static writeArray(param0: java.lang.StringBuilder, param1: androidNative.Array<any>): void;
              public static removeAll(param0: androidNative.Array<any>, param1: androidNative.Array<any>): androidNative.Array<any>;
              public static newArrayList(): java.util.ArrayList<any>;
              public static writeStringArray(param0: java.lang.StringBuilder, param1: androidNative.Array<string>): void;
              public static toWrapperArray(param0: androidNative.Array<number>): androidNative.Array<java.lang.Integer>;
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
      export module gms {
        export module common {
          export module util {
            export class Base64Utils {
              public static class: java.lang.Class<com.google.android.gms.common.util.Base64Utils>;
              public static encodeUrlSafe(param0: androidNative.Array<number>): string;
              public constructor();
              public static encode(param0: androidNative.Array<number>): string;
              public static encodeUrlSafeNoPadding(param0: androidNative.Array<number>): string;
              public static decodeUrlSafeNoPadding(param0: string): androidNative.Array<number>;
              public static decodeUrlSafe(param0: string): androidNative.Array<number>;
              public static decode(param0: string): androidNative.Array<number>;
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
      export module gms {
        export module common {
          export module util {
            export class BiConsumer<T, U> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.common.util.BiConsumer<any, any>>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.util.BiConsumer<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { accept(param0: T, param1: U): void });
              public constructor();
              public accept(param0: T, param1: U): void;
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
      export module gms {
        export module common {
          export module util {
            export class ClientLibraryUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.ClientLibraryUtils>;
              public static getClientVersion(param0: globalAndroid.content.Context, param1: string): number;
              public static getPackageInfo(param0: globalAndroid.content.Context, param1: string): globalAndroid.content.pm.PackageInfo;
              public static isPackageSide(): boolean;
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
      export module gms {
        export module common {
          export module util {
            export class Clock {
              public static class: java.lang.Class<com.google.android.gms.common.util.Clock>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.util.Clock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { currentThreadTimeMillis(): number; currentTimeMillis(): number; elapsedRealtime(): number; nanoTime(): number });
              public constructor();
              public currentThreadTimeMillis(): number;
              public nanoTime(): number;
              public elapsedRealtime(): number;
              public currentTimeMillis(): number;
            }
            export module Clock {
              // export class -CC extends java.lang.Object {
              export class CC extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.gms.common.util.Clock.CC>;
                public static $default$currentThreadTimeMillis(param0: com.google.android.gms.common.util.Clock): number;
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
      export module gms {
        export module common {
          export module util {
            export class CollectionUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.CollectionUtils>;
              public static mutableSetOfWithSize(param0: number): java.util.Set<any>;
              /** @deprecated */
              public static listOf(param0: androidNative.Array<any>): java.util.List<any>;
              /** @deprecated */
              public static setOf(param0: androidNative.Array<any>): java.util.Set<any>;
              public static mapOf(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any): java.util.Map<any, any>;
              public static isEmpty(param0: java.util.Collection<any>): boolean;
              /** @deprecated */
              public static setOf(param0: any, param1: any, param2: any): java.util.Set<any>;
              /** @deprecated */
              public static listOf(): java.util.List<any>;
              public static mapOf(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any): java.util.Map<any, any>;
              /** @deprecated */
              public static listOf(param0: any): java.util.List<any>;
              public static mapOfKeyValueArrays(param0: androidNative.Array<any>, param1: androidNative.Array<any>): java.util.Map<any, any>;
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
      export module gms {
        export module common {
          export module util {
            export class CrashUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.CrashUtils>;
              public constructor();
              public static addDynamiteErrorToDropBox(param0: globalAndroid.content.Context, param1: java.lang.Throwable): boolean;
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
      export module gms {
        export module common {
          export module util {
            export class DataUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.DataUtils>;
              public constructor();
              public static copyStringToBuffer(param0: string, param1: globalAndroid.database.CharArrayBuffer): void;
              public static loadImageBytes(param0: globalAndroid.graphics.Bitmap): androidNative.Array<number>;
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
      export module gms {
        export module common {
          export module util {
            export class DefaultClock extends com.google.android.gms.common.util.Clock {
              public static class: java.lang.Class<com.google.android.gms.common.util.DefaultClock>;
              public currentThreadTimeMillis(): number;
              public nanoTime(): number;
              public elapsedRealtime(): number;
              public currentTimeMillis(): number;
              public static getInstance(): com.google.android.gms.common.util.Clock;
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
      export module gms {
        export module common {
          export module util {
            export class DeviceProperties {
              public static class: java.lang.Class<com.google.android.gms.common.util.DeviceProperties>;
              public static isTablet(param0: globalAndroid.content.res.Resources): boolean;
              public static isTv(param0: globalAndroid.content.Context): boolean;
              public static isPhone(param0: globalAndroid.content.Context): boolean;
              public static isLatchsky(param0: globalAndroid.content.Context): boolean;
              public static isWearable(param0: globalAndroid.content.Context): boolean;
              public static isBstar(param0: globalAndroid.content.Context): boolean;
              public static isSevenInchTablet(param0: globalAndroid.content.Context): boolean;
              public static isTablet(param0: globalAndroid.content.Context): boolean;
              public static isUserBuild(): boolean;
              public static isAuto(param0: globalAndroid.content.Context): boolean;
              public static isSidewinder(param0: globalAndroid.content.Context): boolean;
              public static isWearableWithoutPlayStore(param0: globalAndroid.content.Context): boolean;
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
      export module gms {
        export module common {
          export module util {
            export class DynamiteApi {
              public static class: java.lang.Class<com.google.android.gms.common.util.DynamiteApi>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.util.DynamiteApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
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
      export module gms {
        export module common {
          export module util {
            export class GmsVersion {
              public static class: java.lang.Class<com.google.android.gms.common.util.GmsVersion>;
              public static VERSION_HALLOUMI: number;
              public static VERSION_JARLSBERG: number;
              public static VERSION_KENAFA: number;
              public static VERSION_LONGHORN: number;
              public static VERSION_MANCHEGO: number;
              public static VERSION_ORLA: number;
              public static VERSION_PARMESAN: number;
              public static VERSION_QUESO: number;
              public static VERSION_REBLOCHON: number;
              public static VERSION_SAGA: number;
              public static isAtLeastFenacho(param0: number): boolean;
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
      export module gms {
        export module common {
          export module util {
            export class Hex {
              public static class: java.lang.Class<com.google.android.gms.common.util.Hex>;
              public constructor();
              public static bytesToStringUppercase(param0: androidNative.Array<number>, param1: boolean): string;
              public static bytesToStringUppercase(param0: androidNative.Array<number>): string;
              public static bytesToStringLowercase(param0: androidNative.Array<number>): string;
              public static stringToBytes(param0: string): androidNative.Array<number>;
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
      export module gms {
        export module common {
          export module util {
            export class HexDumpUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.HexDumpUtils>;
              public constructor();
              public static dump(param0: androidNative.Array<number>, param1: number, param2: number, param3: boolean): string;
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
      export module gms {
        export module common {
          export module util {
            export class HttpUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.HttpUtils>;
              public static parse(param0: java.net.URI, param1: string): java.util.Map<string, string>;
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
      export module gms {
        export module common {
          export module util {
            export class IOUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.IOUtils>;
              public static closeQuietly(param0: globalAndroid.os.ParcelFileDescriptor): void;
              public static isGzipByteBuffer(param0: androidNative.Array<number>): boolean;
              /** @deprecated */
              public static readInputStreamFully(param0: java.io.InputStream, param1: boolean): androidNative.Array<number>;
              /** @deprecated */
              public static toByteArray(param0: java.io.InputStream): androidNative.Array<number>;
              /** @deprecated */
              public static readInputStreamFully(param0: java.io.InputStream): androidNative.Array<number>;
              /** @deprecated */
              public static copyStream(param0: java.io.InputStream, param1: java.io.OutputStream): number;
              /** @deprecated */
              public static copyStream(param0: java.io.InputStream, param1: java.io.OutputStream, param2: boolean, param3: number): number;
              public static closeQuietly(param0: java.io.Closeable): void;
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
      export module gms {
        export module common {
          export module util {
            export class JsonUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.JsonUtils>;
              public static escapeString(param0: string): string;
              public static areJsonValuesEquivalent(param0: any, param1: any): boolean;
              public static unescapeString(param0: string): string;
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
      export module gms {
        export module common {
          export module util {
            export class MapUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.MapUtils>;
              public constructor();
              public static writeStringMapToJson(param0: java.lang.StringBuilder, param1: java.util.HashMap<string, string>): void;
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
      export module gms {
        export module common {
          export module util {
            export class MurmurHash3 {
              public static class: java.lang.Class<com.google.android.gms.common.util.MurmurHash3>;
              public static murmurhash3_x86_32(param0: androidNative.Array<number>, param1: number, param2: number, param3: number): number;
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
      export module gms {
        export module common {
          export module util {
            export class NumberUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.NumberUtils>;
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
      export module gms {
        export module common {
          export module util {
            export class PlatformVersion {
              public static class: java.lang.Class<com.google.android.gms.common.util.PlatformVersion>;
              public static isAtLeastJellyBean(): boolean;
              public static isAtLeastSv2(): boolean;
              public static isAtLeastLollipop(): boolean;
              public static isAtLeastN(): boolean;
              public static isAtLeastO(): boolean;
              public static isAtLeastJellyBeanMR1(): boolean;
              public static isAtLeastQ(): boolean;
              public static isAtLeastHoneycombMR1(): boolean;
              public static isAtLeastHoneycomb(): boolean;
              public static isAtLeastJellyBeanMR2(): boolean;
              public static isAtLeastP(): boolean;
              public static isAtLeastR(): boolean;
              public static isAtLeastLollipopMR1(): boolean;
              public static isAtLeastM(): boolean;
              public static isAtLeastU(): boolean;
              public static isAtLeastIceCreamSandwich(): boolean;
              public static isAtLeastT(): boolean;
              public static isAtLeastKitKatWatch(): boolean;
              public static isAtLeastS(): boolean;
              public static isAtLeastKitKat(): boolean;
              public static isAtLeastIceCreamSandwichMR1(): boolean;
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
      export module gms {
        export module common {
          export module util {
            export class Predicate<T> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.common.util.Predicate<any>>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.util.Predicate<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { apply(param0: T): boolean });
              public constructor();
              public apply(param0: T): boolean;
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
      export module gms {
        export module common {
          export module util {
            export class ProcessUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.ProcessUtils>;
              public static getMyProcessName(): string;
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
      export module gms {
        export module common {
          export module util {
            export class RetainForClient {
              public static class: java.lang.Class<com.google.android.gms.common.util.RetainForClient>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.util.RetainForClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
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
      export module gms {
        export module common {
          export module util {
            export class ScopeUtil {
              public static class: java.lang.Class<com.google.android.gms.common.util.ScopeUtil>;
              public static toScopeString(param0: java.util.Set<com.google.android.gms.common.api.Scope>): androidNative.Array<string>;
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
      export module gms {
        export module common {
          export module util {
            export class SharedPreferencesUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.SharedPreferencesUtils>;
              /** @deprecated */
              public static publishWorldReadableSharedPreferences(param0: globalAndroid.content.Context, param1: globalAndroid.content.SharedPreferences.Editor, param2: string): void;
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
      export module gms {
        export module common {
          export module util {
            export class Strings {
              public static class: java.lang.Class<com.google.android.gms.common.util.Strings>;
              public static isEmptyOrWhitespace(param0: string): boolean;
              public static emptyToNull(param0: string): string;
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
      export module gms {
        export module common {
          export module util {
            export class UidVerifier {
              public static class: java.lang.Class<com.google.android.gms.common.util.UidVerifier>;
              public static isGooglePlayServicesUid(param0: globalAndroid.content.Context, param1: number): boolean;
              public static uidHasPackageName(param0: globalAndroid.content.Context, param1: number, param2: string): boolean;
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
      export module gms {
        export module common {
          export module util {
            export class VisibleForTesting {
              public static class: java.lang.Class<com.google.android.gms.common.util.VisibleForTesting>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.util.VisibleForTesting interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
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
      export module gms {
        export module common {
          export module util {
            export class WorkSourceUtil {
              public static class: java.lang.Class<com.google.android.gms.common.util.WorkSourceUtil>;
              public static fromPackage(param0: globalAndroid.content.Context, param1: string): globalAndroid.os.WorkSource;
              public static hasWorkSourcePermission(param0: globalAndroid.content.Context): boolean;
              public static get(param0: globalAndroid.os.WorkSource, param1: number): number;
              public static size(param0: globalAndroid.os.WorkSource): number;
              public static getNames(param0: globalAndroid.os.WorkSource): java.util.List<string>;
              public static add(param0: globalAndroid.os.WorkSource, param1: number, param2: string): void;
              public static fromPackageAndModuleExperimentalPi(param0: globalAndroid.content.Context, param1: string, param2: string): globalAndroid.os.WorkSource;
              public static isEmpty(param0: globalAndroid.os.WorkSource): boolean;
              public static getName(param0: globalAndroid.os.WorkSource, param1: number): string;
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
      export module gms {
        export module common {
          export module util {
            export module concurrent {
              export class HandlerExecutor {
                public static class: java.lang.Class<com.google.android.gms.common.util.concurrent.HandlerExecutor>;
                public execute(param0: java.lang.Runnable): void;
                public constructor(param0: globalAndroid.os.Looper);
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
      export module gms {
        export module common {
          export module util {
            export module concurrent {
              export class NamedThreadFactory {
                public static class: java.lang.Class<com.google.android.gms.common.util.concurrent.NamedThreadFactory>;
                public constructor(param0: string);
                public newThread(param0: java.lang.Runnable): java.lang.Thread;
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
      export module gms {
        export module common {
          export module util {
            export module concurrent {
              export class NumberedThreadFactory {
                public static class: java.lang.Class<com.google.android.gms.common.util.concurrent.NumberedThreadFactory>;
                public constructor(param0: string);
                public newThread(param0: java.lang.Runnable): java.lang.Thread;
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
      export module gms {
        export module common {
          export module util {
            export module concurrent {
              export class zza {
                public static class: java.lang.Class<com.google.android.gms.common.util.concurrent.zza>;
                public constructor(param0: java.lang.Runnable, param1: number);
                public run(): void;
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
      export module gms {
        export module common {
          export module util {
            export class zza {
              public static class: java.lang.Class<com.google.android.gms.common.util.zza>;
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
      export module gms {
        export module common {
          export module util {
            export class zzb {
              public static class: java.lang.Class<com.google.android.gms.common.util.zzb>;
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
      export module gms {
        export module common {
          export module util {
            export class zzc {
              public static class: java.lang.Class<com.google.android.gms.common.util.zzc>;
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
      export module gms {
        export module common {
          export module wrappers {
            export class InstantApps {
              public static class: java.lang.Class<com.google.android.gms.common.wrappers.InstantApps>;
              public constructor();
              public static isInstantApp(param0: globalAndroid.content.Context): boolean;
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
      export module gms {
        export module common {
          export module wrappers {
            export class PackageManagerWrapper {
              public static class: java.lang.Class<com.google.android.gms.common.wrappers.PackageManagerWrapper>;
              public checkCallingOrSelfPermission(param0: string): number;
              public checkPermission(param0: string, param1: string): number;
              public getApplicationInfo(param0: string, param1: number): globalAndroid.content.pm.ApplicationInfo;
              public getApplicationLabelAndIcon(param0: string): androidx.core.util.Pair<string, globalAndroid.graphics.drawable.Drawable>;
              public isCallerInstantApp(): boolean;
              public getPackageInfo(param0: string, param1: number): globalAndroid.content.pm.PackageInfo;
              public getApplicationLabel(param0: string): string;
              public constructor(param0: globalAndroid.content.Context);
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
      export module gms {
        export module common {
          export module wrappers {
            export class Wrappers {
              public static class: java.lang.Class<com.google.android.gms.common.wrappers.Wrappers>;
              public constructor();
              public static packageManager(param0: globalAndroid.content.Context): com.google.android.gms.common.wrappers.PackageManagerWrapper;
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
      export module gms {
        export module common {
          export class zza {
            public static class: java.lang.Class<com.google.android.gms.common.zza>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class zzaa {
            public static class: java.lang.Class<com.google.android.gms.common.zzaa>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class zzab {
            public static class: java.lang.Class<com.google.android.gms.common.zzab>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class zzac {
            public static class: java.lang.Class<com.google.android.gms.common.zzac>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class zzad {
            public static class: java.lang.Class<com.google.android.gms.common.zzad>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class zzae {
            public static class: java.lang.Class<com.google.android.gms.common.zzae>;
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
      export module gms {
        export module common {
          export class zzb {
            public static class: java.lang.Class<com.google.android.gms.common.zzb>;
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
      export module gms {
        export module common {
          export class zzc {
            public static class: java.lang.Class<com.google.android.gms.common.zzc>;
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
      export module gms {
        export module common {
          export class zzd {
            public static class: java.lang.Class<com.google.android.gms.common.zzd>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class zze {
            public static class: java.lang.Class<com.google.android.gms.common.zze>;
            public call(): any;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class zzf extends com.google.android.gms.common.zzl {
            public static class: java.lang.Class<com.google.android.gms.common.zzf>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class zzg extends com.google.android.gms.common.zzl {
            public static class: java.lang.Class<com.google.android.gms.common.zzg>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class zzh extends com.google.android.gms.common.zzl {
            public static class: java.lang.Class<com.google.android.gms.common.zzh>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class zzi extends com.google.android.gms.common.zzl {
            public static class: java.lang.Class<com.google.android.gms.common.zzi>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export abstract class zzj extends com.google.android.gms.common.internal.zzy {
            public static class: java.lang.Class<com.google.android.gms.common.zzj>;
            public constructor();
            public constructor(param0: androidNative.Array<number>);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class zzk extends com.google.android.gms.common.zzj {
            public static class: java.lang.Class<com.google.android.gms.common.zzk>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export abstract class zzl extends com.google.android.gms.common.zzj {
            public static class: java.lang.Class<com.google.android.gms.common.zzl>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class zzm {
            public static class: java.lang.Class<com.google.android.gms.common.zzm>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class zzn {
            public static class: java.lang.Class<com.google.android.gms.common.zzn>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class zzo extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
            public static class: java.lang.Class<com.google.android.gms.common.zzo>;
            public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.zzo>*/;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class zzp {
            public static class: java.lang.Class<com.google.android.gms.common.zzp>;
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
      export module gms {
        export module common {
          export class zzq extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
            public static class: java.lang.Class<com.google.android.gms.common.zzq>;
            public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.zzq>*/;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class zzr {
            public static class: java.lang.Class<com.google.android.gms.common.zzr>;
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
      export module gms {
        export module common {
          export class zzs extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
            public static class: java.lang.Class<com.google.android.gms.common.zzs>;
            public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.zzs>*/;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class zzt {
            public static class: java.lang.Class<com.google.android.gms.common.zzt>;
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
      export module gms {
        export module common {
          export class zzu {
            public static class: java.lang.Class<com.google.android.gms.common.zzu>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class zzv extends com.google.android.gms.common.zzx {
            public static class: java.lang.Class<com.google.android.gms.common.zzv>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class zzw {
            public static class: java.lang.Class<com.google.android.gms.common.zzw>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class zzx {
            public static class: java.lang.Class<com.google.android.gms.common.zzx>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class zzy {
            public static class: java.lang.Class<com.google.android.gms.common.zzy>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module common {
          export class zzz {
            public static class: java.lang.Class<com.google.android.gms.common.zzz>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module dynamic {
          export class FragmentWrapper extends com.google.android.gms.dynamic.IFragmentWrapper.Stub {
            public static class: java.lang.Class<com.google.android.gms.dynamic.FragmentWrapper>;
            public static wrap(param0: globalAndroid.app.Fragment): com.google.android.gms.dynamic.FragmentWrapper;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module dynamic {
          export class IFragmentWrapper {
            public static class: java.lang.Class<com.google.android.gms.dynamic.IFragmentWrapper>;
            /**
             * Constructs a new instance of the com.google.android.gms.dynamic.IFragmentWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              zzb(): number;
              zzc(): number;
              zzd(): globalAndroid.os.Bundle;
              zze(): com.google.android.gms.dynamic.IFragmentWrapper;
              zzf(): com.google.android.gms.dynamic.IFragmentWrapper;
              zzg(): com.google.android.gms.dynamic.IObjectWrapper;
              zzh(): com.google.android.gms.dynamic.IObjectWrapper;
              zzi(): com.google.android.gms.dynamic.IObjectWrapper;
              zzj(): string;
              zzk(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
              zzl(param0: boolean): void;
              zzm(param0: boolean): void;
              zzn(param0: boolean): void;
              zzo(param0: boolean): void;
              zzp(param0: globalAndroid.content.Intent): void;
              zzq(param0: globalAndroid.content.Intent, param1: number): void;
              zzr(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
              zzs(): boolean;
              zzt(): boolean;
              zzu(): boolean;
              zzv(): boolean;
              zzw(): boolean;
              zzx(): boolean;
              zzy(): boolean;
              zzz(): boolean;
              zzA(): boolean;
            });
            public constructor();
          }
          export module IFragmentWrapper {
            export abstract class Stub extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.dynamic.IFragmentWrapper {
              public static class: java.lang.Class<com.google.android.gms.dynamic.IFragmentWrapper.Stub>;
              public constructor();
              public static asInterface(param0: globalAndroid.os.IBinder): com.google.android.gms.dynamic.IFragmentWrapper;
              public constructor(param0: string);
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
      export module gms {
        export module dynamic {
          export class IObjectWrapper {
            public static class: java.lang.Class<com.google.android.gms.dynamic.IObjectWrapper>;
            /**
             * Constructs a new instance of the com.google.android.gms.dynamic.IObjectWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
          }
          export module IObjectWrapper {
            export abstract class Stub extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.dynamic.IObjectWrapper {
              public static class: java.lang.Class<com.google.android.gms.dynamic.IObjectWrapper.Stub>;
              public static asInterface(param0: globalAndroid.os.IBinder): com.google.android.gms.dynamic.IObjectWrapper;
              public constructor();
              public constructor(param0: string);
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
      export module gms {
        export module dynamic {
          export class LifecycleDelegate {
            public static class: java.lang.Class<com.google.android.gms.dynamic.LifecycleDelegate>;
            /**
             * Constructs a new instance of the com.google.android.gms.dynamic.LifecycleDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View; onCreate(param0: globalAndroid.os.Bundle): void; onDestroy(): void; onDestroyView(): void; onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void; onLowMemory(): void; onPause(): void; onResume(): void; onSaveInstanceState(param0: globalAndroid.os.Bundle): void; onStart(): void; onStop(): void });
            public constructor();
            public onDestroyView(): void;
            public onDestroy(): void;
            public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
            public onResume(): void;
            public onCreate(param0: globalAndroid.os.Bundle): void;
            public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
            public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
            public onLowMemory(): void;
            public onStop(): void;
            public onStart(): void;
            public onPause(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module dynamic {
          export class ObjectWrapper<T> extends com.google.android.gms.dynamic.IObjectWrapper.Stub {
            public static class: java.lang.Class<com.google.android.gms.dynamic.ObjectWrapper<any>>;
            public static unwrap(param0: com.google.android.gms.dynamic.IObjectWrapper): any;
            public static wrap(param0: any): com.google.android.gms.dynamic.IObjectWrapper;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module dynamic {
          export class OnDelegateCreatedListener<T> extends java.lang.Object {
            public static class: java.lang.Class<com.google.android.gms.dynamic.OnDelegateCreatedListener<any>>;
            /**
             * Constructs a new instance of the com.google.android.gms.dynamic.OnDelegateCreatedListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onDelegateCreated(param0: T): void });
            public constructor();
            public onDelegateCreated(param0: T): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module dynamic {
          export abstract class RemoteCreator<T> extends java.lang.Object {
            public static class: java.lang.Class<com.google.android.gms.dynamic.RemoteCreator<any>>;
            public getRemoteCreator(param0: globalAndroid.os.IBinder): T;
            public getRemoteCreatorInstance(param0: globalAndroid.content.Context): T;
            public constructor(param0: string);
          }
          export module RemoteCreator {
            export class RemoteCreatorException {
              public static class: java.lang.Class<com.google.android.gms.dynamic.RemoteCreator.RemoteCreatorException>;
              public constructor(param0: string);
              public constructor(param0: string, param1: java.lang.Throwable);
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
      export module gms {
        export module dynamic {
          export class SupportFragmentWrapper extends com.google.android.gms.dynamic.IFragmentWrapper.Stub {
            public static class: java.lang.Class<com.google.android.gms.dynamic.SupportFragmentWrapper>;
            public static wrap(param0: androidx.fragment.app.Fragment): com.google.android.gms.dynamic.SupportFragmentWrapper;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module dynamic {
          export class zza extends com.google.android.gms.internal.common.zza implements com.google.android.gms.dynamic.IFragmentWrapper {
            public static class: java.lang.Class<com.google.android.gms.dynamic.zza>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module dynamic {
          export class zzb extends com.google.android.gms.internal.common.zza implements com.google.android.gms.dynamic.IObjectWrapper {
            public static class: java.lang.Class<com.google.android.gms.dynamic.zzb>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module dynamite {
          export class DynamiteModule {
            public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule>;
            public static LOCAL: number;
            public static REMOTE: number;
            public static NO_SELECTION: number;
            public static NONE: number;
            public static PREFER_REMOTE: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy;
            public static PREFER_LOCAL: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy;
            public static PREFER_REMOTE_VERSION_NO_FORCE_STAGING: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy;
            public static PREFER_HIGHEST_OR_LOCAL_VERSION: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy;
            public static PREFER_HIGHEST_OR_LOCAL_VERSION_NO_FORCE_STAGING: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy;
            public static PREFER_HIGHEST_OR_REMOTE_VERSION: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy;
            public static getRemoteVersion(param0: globalAndroid.content.Context, param1: string): number;
            public static getLocalVersion(param0: globalAndroid.content.Context, param1: string): number;
            public getModuleContext(): globalAndroid.content.Context;
            public instantiate(param0: string): globalAndroid.os.IBinder;
            public static load(param0: globalAndroid.content.Context, param1: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy, param2: string): com.google.android.gms.dynamite.DynamiteModule;
          }
          export module DynamiteModule {
            export class DynamiteLoaderClassLoader {
              public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.DynamiteLoaderClassLoader>;
              public static sClassLoader: java.lang.ClassLoader;
              public constructor();
            }
            export class LoadingException {
              public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.LoadingException>;
            }
            export class VersionPolicy {
              public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.VersionPolicy>;
              /**
               * Constructs a new instance of the com.google.android.gms.dynamite.DynamiteModule$VersionPolicy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { selectModule(param0: globalAndroid.content.Context, param1: string, param2: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.IVersions): com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.SelectionResult });
              public constructor();
              public selectModule(param0: globalAndroid.content.Context, param1: string, param2: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.IVersions): com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.SelectionResult;
            }
            export module VersionPolicy {
              export class IVersions {
                public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.IVersions>;
                /**
                 * Constructs a new instance of the com.google.android.gms.dynamite.DynamiteModule$VersionPolicy$IVersions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { zza(param0: globalAndroid.content.Context, param1: string): number; zzb(param0: globalAndroid.content.Context, param1: string, param2: boolean): number });
                public constructor();
              }
              export class SelectionResult {
                public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.SelectionResult>;
                public localVersion: number;
                public remoteVersion: number;
                public selection: number;
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
      export module gms {
        export module dynamite {
          export class zza {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zza>;
            public run(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module dynamite {
          export class zzb {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzb>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module dynamite {
          export class zzc {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzc>;
            public loadClass(param0: string, param1: boolean): java.lang.Class<any>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module dynamite {
          export class zzd {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzd>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module dynamite {
          export class zze extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.IVersions {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zze>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module dynamite {
          export class zzf extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzf>;
            public selectModule(param0: globalAndroid.content.Context, param1: string, param2: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.IVersions): com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.SelectionResult;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module dynamite {
          export class zzg extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzg>;
            public selectModule(param0: globalAndroid.content.Context, param1: string, param2: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.IVersions): com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.SelectionResult;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module dynamite {
          export class zzh extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzh>;
            public selectModule(param0: globalAndroid.content.Context, param1: string, param2: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.IVersions): com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.SelectionResult;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module dynamite {
          export class zzi extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzi>;
            public selectModule(param0: globalAndroid.content.Context, param1: string, param2: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.IVersions): com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.SelectionResult;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module dynamite {
          export class zzj extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzj>;
            public selectModule(param0: globalAndroid.content.Context, param1: string, param2: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.IVersions): com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.SelectionResult;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module dynamite {
          export class zzk extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzk>;
            public selectModule(param0: globalAndroid.content.Context, param1: string, param2: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.IVersions): com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.SelectionResult;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module dynamite {
          export class zzl extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzl>;
            public selectModule(param0: globalAndroid.content.Context, param1: string, param2: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.IVersions): com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.SelectionResult;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module dynamite {
          export class zzm {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzm>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module dynamite {
          export class zzn {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzn>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module dynamite {
          export class zzo extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.IVersions {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzo>;
            public constructor(param0: number, param1: number);
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module dynamite {
          export class zzp {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzp>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module dynamite {
          export class zzq extends com.google.android.gms.internal.common.zza {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzq>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module dynamite {
          export class zzr extends com.google.android.gms.internal.common.zza {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzr>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module internal {
          export module common {
            export class zza {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zza>;
              public constructor(param0: globalAndroid.os.IBinder, param1: string);
              public asBinder(): globalAndroid.os.IBinder;
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
      export module gms {
        export module internal {
          export module common {
            export class zzaa extends com.google.android.gms.internal.common.zzab {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzaa>;
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
      export module gms {
        export module internal {
          export module common {
            export class zzab {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzab>;
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
      export module gms {
        export module internal {
          export module common {
            export abstract class zzac {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzac>;
              /** @deprecated */
              public addAll(param0: java.util.Collection<any>): boolean;
              /** @deprecated */
              public add(param0: any): boolean;
              /** @deprecated */
              public remove(param0: any): boolean;
              /** @deprecated */
              public clear(): void;
              public toArray(): androidNative.Array<any>;
              /** @deprecated */
              public removeAll(param0: java.util.Collection<any>): boolean;
              public toArray(param0: androidNative.Array<any>): androidNative.Array<any>;
              /** @deprecated */
              public retainAll(param0: java.util.Collection<any>): boolean;
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
      export module gms {
        export module internal {
          export module common {
            export class zzad extends com.google.android.gms.internal.common.zzaa {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzad>;
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
      export module gms {
        export module internal {
          export module common {
            export class zzae extends com.google.android.gms.internal.common.zzz {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzae>;
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
      export module gms {
        export module internal {
          export module common {
            export class zzaf extends com.google.android.gms.internal.common.zzag {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzaf>;
              public size(): number;
              public get(param0: number): any;
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
      export module gms {
        export module internal {
          export module common {
            export abstract class zzag extends com.google.android.gms.internal.common.zzac {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzag>;
              public contains(param0: any): boolean;
              /** @deprecated */
              public addAll(param0: java.util.Collection<any>): boolean;
              /** @deprecated */
              public add(param0: any): boolean;
              public hashCode(): number;
              public lastIndexOf(param0: any): number;
              /** @deprecated */
              public addAll(param0: number, param1: java.util.Collection<any>): boolean;
              /** @deprecated */
              public remove(param0: any): boolean;
              /** @deprecated */
              public remove(param0: number): any;
              public indexOf(param0: any): number;
              /** @deprecated */
              public add(param0: number, param1: any): void;
              public equals(param0: any): boolean;
              /** @deprecated */
              public set(param0: number, param1: any): any;
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
      export module gms {
        export module internal {
          export module common {
            export class zzah {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzah>;
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
      export module gms {
        export module internal {
          export module common {
            export class zzai extends com.google.android.gms.internal.common.zzag {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzai>;
              public size(): number;
              public get(param0: number): any;
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
      export module gms {
        export module internal {
          export module common {
            export abstract class zzaj {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzaj>;
              public constructor();
              /** @deprecated */
              public remove(): void;
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
      export module gms {
        export module internal {
          export module common {
            export abstract class zzak extends com.google.android.gms.internal.common.zzaj {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzak>;
              public constructor();
              /** @deprecated */
              public add(param0: any): void;
              /** @deprecated */
              public set(param0: any): void;
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
      export module gms {
        export module internal {
          export module common {
            export class zzb {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzb>;
              public asBinder(): globalAndroid.os.IBinder;
              public constructor(param0: string);
              public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
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
      export module gms {
        export module internal {
          export module common {
            export class zzc {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzc>;
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
      export module gms {
        export module internal {
          export module common {
            export class zzd {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzd>;
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
      export module gms {
        export module internal {
          export module common {
            export class zze {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zze>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.common.zze interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
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
      export module gms {
        export module internal {
          export module common {
            export class zzf {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzf>;
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
      export module gms {
        export module internal {
          export module common {
            export class zzg extends com.google.android.gms.internal.common.zze {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzg>;
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
      export module gms {
        export module internal {
          export module common {
            export class zzh {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzh>;
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
      export module gms {
        export module internal {
          export module common {
            export class zzi {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzi>;
              public constructor();
              public constructor(param0: globalAndroid.os.Looper);
              public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
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
      export module gms {
        export module internal {
          export module common {
            export abstract class zzj {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzj>;
              public constructor();
              public remove(): void;
              public hasNext(): boolean;
              public next(): any;
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
      export module gms {
        export module internal {
          export module common {
            export abstract class zzk extends com.google.android.gms.internal.common.zzo {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzk>;
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
      export module gms {
        export module internal {
          export module common {
            export class zzl extends com.google.android.gms.internal.common.zzk {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzl>;
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
      export module gms {
        export module internal {
          export module common {
            export abstract class zzm extends com.google.android.gms.internal.common.zzk {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzm>;
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
      export module gms {
        export module internal {
          export module common {
            export class zzn extends com.google.android.gms.internal.common.zzm {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzn>;
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
      export module gms {
        export module internal {
          export module common {
            export abstract class zzo {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzo>;
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
      export module gms {
        export module internal {
          export module common {
            export class zzp {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzp>;
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
      export module gms {
        export module internal {
          export module common {
            export class zzq {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzq>;
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
      export module gms {
        export module internal {
          export module common {
            export class zzr extends com.google.android.gms.internal.common.zzp {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzr>;
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
      export module gms {
        export module internal {
          export module common {
            export class zzs {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzs>;
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
      export module gms {
        export module internal {
          export module common {
            export class zzt extends com.google.android.gms.internal.common.zzw {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzt>;
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
      export module gms {
        export module internal {
          export module common {
            export class zzu {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzu>;
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
      export module gms {
        export module internal {
          export module common {
            export class zzv {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzv>;
              public toString(): string;
              public iterator(): java.util.Iterator<any>;
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
      export module gms {
        export module internal {
          export module common {
            export abstract class zzw extends com.google.android.gms.internal.common.zzj {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzw>;
              public constructor();
              public constructor(param0: any /* com.google.android.gms.internal.common.zzx*/, param1: string);
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
      export module gms {
        export module internal {
          export module common {
            export class zzx {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzx>;
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
      export module gms {
        export module internal {
          export module common {
            export class zzy {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzy>;
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
      export module gms {
        export module internal {
          export module common {
            export abstract class zzz extends com.google.android.gms.internal.common.zzak {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzz>;
              public constructor();
              public previousIndex(): number;
              public previous(): any;
              public constructor(param0: number, param1: number);
              public nextIndex(): number;
              public hasNext(): boolean;
              public hasPrevious(): boolean;
              public next(): any;
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
      export module gms {
        export module security {
          export class ProviderInstaller {
            public static class: java.lang.Class<com.google.android.gms.security.ProviderInstaller>;
            public static PROVIDER_NAME: string;
            public constructor();
            public static installIfNeeded(param0: globalAndroid.content.Context): void;
            public static installIfNeededAsync(param0: globalAndroid.content.Context, param1: com.google.android.gms.security.ProviderInstaller.ProviderInstallListener): void;
          }
          export module ProviderInstaller {
            export class ProviderInstallListener {
              public static class: java.lang.Class<com.google.android.gms.security.ProviderInstaller.ProviderInstallListener>;
              /**
               * Constructs a new instance of the com.google.android.gms.security.ProviderInstaller$ProviderInstallListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onProviderInstallFailed(param0: number, param1: globalAndroid.content.Intent): void; onProviderInstalled(): void });
              public constructor();
              public onProviderInstalled(): void;
              public onProviderInstallFailed(param0: number, param1: globalAndroid.content.Intent): void;
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
      export module gms {
        export module security {
          export class zza {
            public static class: java.lang.Class<com.google.android.gms.security.zza>;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module firebase {
      export class FirebaseApiNotAvailableException extends com.google.firebase.FirebaseException {
        public static class: java.lang.Class<com.google.firebase.FirebaseApiNotAvailableException>;
        /** @deprecated */
        public constructor();
        public constructor(param0: string, param1: java.lang.Throwable);
        public constructor(param0: string);
      }
    }
  }
}

declare module com {
  export module google {
    export module firebase {
      export class FirebaseException {
        public static class: java.lang.Class<com.google.firebase.FirebaseException>;
        /** @deprecated */
        public constructor();
        public constructor(param0: string, param1: java.lang.Throwable);
        public constructor(param0: string);
      }
    }
  }
}

declare module com {
  export module google {
    export module firebase {
      export class FirebaseExceptionMapper extends com.google.android.gms.common.api.internal.StatusExceptionMapper {
        public static class: java.lang.Class<com.google.firebase.FirebaseExceptionMapper>;
        public getException(param0: com.google.android.gms.common.api.Status): java.lang.Exception;
        public constructor();
      }
    }
  }
}

//Generics information:
//com.google.android.gms.common.api.ResolvingResultCallbacks:1
//com.google.android.gms.common.api.Response:1
//com.google.android.gms.common.api.ResultCallback:1
//com.google.android.gms.common.api.ResultCallbacks:1
//com.google.android.gms.common.config.GservicesValue:1
//com.google.android.gms.common.internal.BaseGmsClient:1
//com.google.android.gms.common.util.BiConsumer:2
//com.google.android.gms.common.util.Predicate:1
//com.google.android.gms.dynamic.ObjectWrapper:1
//com.google.android.gms.dynamic.OnDelegateCreatedListener:1
//com.google.android.gms.dynamic.RemoteCreator:1
