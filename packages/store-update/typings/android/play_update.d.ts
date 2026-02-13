declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class AppUpdateInfo {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.AppUpdateInfo>;
              public bytesDownloaded(): number;
              public updatePriority(): number;
              public availableVersionCode(): number;
              public isUpdateTypeAllowed(param0: number): boolean;
              public clientVersionStalenessDays(): java.lang.Integer;
              public updateAvailability(): number;
              public isUpdateTypeAllowed(param0: com.google.android.play.core.appupdate.AppUpdateOptions): boolean;
              public installStatus(): number;
              public packageName(): string;
              public totalBytesToDownload(): number;
              public getFailedUpdatePreconditions(param0: com.google.android.play.core.appupdate.AppUpdateOptions): java.util.Set<java.lang.Integer>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class AppUpdateManager {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.AppUpdateManager>;
              /**
               * Constructs a new instance of the com.google.android.play.core.appupdate.AppUpdateManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                completeUpdate(): com.google.android.gms.tasks.Task<java.lang.Void>;
                getAppUpdateInfo(): com.google.android.gms.tasks.Task<com.google.android.play.core.appupdate.AppUpdateInfo>;
                startUpdateFlow(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: globalAndroid.app.Activity, param2: com.google.android.play.core.appupdate.AppUpdateOptions): com.google.android.gms.tasks.Task<java.lang.Integer>;
                registerListener(param0: com.google.android.play.core.install.InstallStateUpdatedListener): void;
                unregisterListener(param0: com.google.android.play.core.install.InstallStateUpdatedListener): void;
                startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: androidx.activity.result.ActivityResultLauncher<androidx.activity.result.IntentSenderRequest>, param2: com.google.android.play.core.appupdate.AppUpdateOptions): boolean;
                startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: number, param2: globalAndroid.app.Activity, param3: number): boolean;
                startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: number, param2: com.google.android.play.core.common.IntentSenderForResultStarter, param3: number): boolean;
                startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: globalAndroid.app.Activity, param2: com.google.android.play.core.appupdate.AppUpdateOptions, param3: number): boolean;
                startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: com.google.android.play.core.common.IntentSenderForResultStarter, param2: com.google.android.play.core.appupdate.AppUpdateOptions, param3: number): boolean;
              });
              public constructor();
              public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: androidx.activity.result.ActivityResultLauncher<androidx.activity.result.IntentSenderRequest>, param2: com.google.android.play.core.appupdate.AppUpdateOptions): boolean;
              public startUpdateFlow(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: globalAndroid.app.Activity, param2: com.google.android.play.core.appupdate.AppUpdateOptions): com.google.android.gms.tasks.Task<java.lang.Integer>;
              public unregisterListener(param0: com.google.android.play.core.install.InstallStateUpdatedListener): void;
              public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: globalAndroid.app.Activity, param2: com.google.android.play.core.appupdate.AppUpdateOptions, param3: number): boolean;
              /** @deprecated */
              public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: number, param2: com.google.android.play.core.common.IntentSenderForResultStarter, param3: number): boolean;
              /** @deprecated */
              public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: number, param2: globalAndroid.app.Activity, param3: number): boolean;
              public getAppUpdateInfo(): com.google.android.gms.tasks.Task<com.google.android.play.core.appupdate.AppUpdateInfo>;
              public completeUpdate(): com.google.android.gms.tasks.Task<java.lang.Void>;
              public registerListener(param0: com.google.android.play.core.install.InstallStateUpdatedListener): void;
              public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: com.google.android.play.core.common.IntentSenderForResultStarter, param2: com.google.android.play.core.appupdate.AppUpdateOptions, param3: number): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class AppUpdateManagerFactory {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.AppUpdateManagerFactory>;
              public static create(param0: globalAndroid.content.Context): com.google.android.play.core.appupdate.AppUpdateManager;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export abstract class AppUpdateOptions {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.AppUpdateOptions>;
              public static newBuilder(param0: number): com.google.android.play.core.appupdate.AppUpdateOptions.Builder;
              public constructor();
              public appUpdateType(): number;
              public static defaultOptions(param0: number): com.google.android.play.core.appupdate.AppUpdateOptions;
              public allowAssetPackDeletion(): boolean;
            }
            export module AppUpdateOptions {
              export abstract class Builder {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.AppUpdateOptions.Builder>;
                public setAppUpdateType(param0: number): com.google.android.play.core.appupdate.AppUpdateOptions.Builder;
                public build(): com.google.android.play.core.appupdate.AppUpdateOptions;
                public constructor();
                public setAllowAssetPackDeletion(param0: boolean): com.google.android.play.core.appupdate.AppUpdateOptions.Builder;
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zza {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zza>;
                public constructor(param0: globalAndroid.os.IBinder, param1: string);
                public asBinder(): globalAndroid.os.IBinder;
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzaa {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzaa>;
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzab {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzab>;
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzac {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzac>;
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzad extends com.google.android.play.core.appupdate.internal.zzaf {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzad>;
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzae {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzae>;
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzaf {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzaf>;
                /**
                 * Constructs a new instance of the com.google.android.play.core.appupdate.internal.zzaf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { zza(): any });
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzb {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzb>;
                public constructor(param0: string);
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzc {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzc>;
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzd extends com.google.android.play.core.appupdate.internal.zza implements com.google.android.play.core.appupdate.internal.zzf {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzd>;
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export abstract class zze extends com.google.android.play.core.appupdate.internal.zzb implements com.google.android.play.core.appupdate.internal.zzf {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zze>;
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzf {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzf>;
                /**
                 * Constructs a new instance of the com.google.android.play.core.appupdate.internal.zzf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { zzc(param0: string, param1: globalAndroid.os.Bundle, param2: any /* com.google.android.play.core.appupdate.internal.zzh*/): void; zzd(param0: string, param1: globalAndroid.os.Bundle, param2: any /* com.google.android.play.core.appupdate.internal.zzh*/): void });
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export abstract class zzg extends com.google.android.play.core.appupdate.internal.zzb implements com.google.android.play.core.appupdate.internal.zzh {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzg>;
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzh {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzh>;
                /**
                 * Constructs a new instance of the com.google.android.play.core.appupdate.internal.zzh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { zzb(param0: globalAndroid.os.Bundle): void; zzc(param0: globalAndroid.os.Bundle): void });
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzi {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzi>;
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzj {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzj>;
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzk {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzk>;
                public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export abstract class zzl {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzl>;
                public constructor(param0: any /* com.google.android.play.core.appupdate.internal.zzm*/, param1: globalAndroid.content.IntentFilter, param2: globalAndroid.content.Context);
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzm {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzm>;
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export abstract class zzn {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzn>;
                public constructor(param0: com.google.android.gms.tasks.TaskCompletionSource);
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzo {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzo>;
                public onComplete(param0: com.google.android.gms.tasks.Task): void;
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzp {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzp>;
                public binderDied(): void;
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzq extends com.google.android.play.core.appupdate.internal.zzn {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzq>;
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzr extends com.google.android.play.core.appupdate.internal.zzn {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzr>;
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzs {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzs>;
                /**
                 * Constructs a new instance of the com.google.android.play.core.appupdate.internal.zzs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { zza(): void });
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzt extends com.google.android.play.core.appupdate.internal.zzn {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzt>;
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzu extends com.google.android.play.core.appupdate.internal.zzn {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzu>;
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzv {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzv>;
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzw {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzw>;
                public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
                public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzx {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzx>;
                public constructor(param0: globalAndroid.content.Context, param1: any /* com.google.android.play.core.appupdate.internal.zzm*/, param2: string, param3: globalAndroid.content.Intent, param4: any /* com.google.android.play.core.appupdate.zzl*/, param5: any /* com.google.android.play.core.appupdate.internal.zzs*/);
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzy {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzy>;
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
      export module play {
        export module core {
          export module appupdate {
            export module internal {
              export class zzz {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.internal.zzz>;
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
      export module play {
        export module core {
          export module appupdate {
            export module testing {
              export class FakeAppUpdateManager extends com.google.android.play.core.appupdate.AppUpdateManager {
                public static class: java.lang.Class<com.google.android.play.core.appupdate.testing.FakeAppUpdateManager>;
                public startUpdateFlow(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: globalAndroid.app.Activity, param2: com.google.android.play.core.appupdate.AppUpdateOptions): com.google.android.gms.tasks.Task<java.lang.Integer>;
                public setUpdateAvailable(param0: number, param1: number): void;
                public setUpdatePriority(param0: number): void;
                public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: com.google.android.play.core.common.IntentSenderForResultStarter, param2: com.google.android.play.core.appupdate.AppUpdateOptions, param3: number): boolean;
                public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: androidx.activity.result.ActivityResultLauncher<androidx.activity.result.IntentSenderRequest>, param2: com.google.android.play.core.appupdate.AppUpdateOptions): boolean;
                public installFails(): void;
                public userAcceptsUpdate(): void;
                public getAppUpdateInfo(): com.google.android.gms.tasks.Task<com.google.android.play.core.appupdate.AppUpdateInfo>;
                public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: number, param2: globalAndroid.app.Activity, param3: number): boolean;
                public userCancelsDownload(): void;
                /** @deprecated */
                public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: number, param2: globalAndroid.app.Activity, param3: number): boolean;
                public isInstallSplashScreenVisible(): boolean;
                public downloadFails(): void;
                public setUpdateAvailable(param0: number): void;
                public installCompletes(): void;
                public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: number, param2: com.google.android.play.core.common.IntentSenderForResultStarter, param3: number): boolean;
                public getTypeForUpdateInProgress(): java.lang.Integer;
                public isConfirmationDialogVisible(): boolean;
                public completeUpdate(): com.google.android.gms.tasks.Task<java.lang.Void>;
                public setInstallErrorCode(param0: number): void;
                public downloadStarts(): void;
                public setUpdateNotAvailable(): void;
                public isImmediateFlowVisible(): boolean;
                public setTotalBytesToDownload(param0: number): void;
                public setClientVersionStalenessDays(param0: java.lang.Integer): void;
                public userRejectsUpdate(): void;
                public unregisterListener(param0: com.google.android.play.core.install.InstallStateUpdatedListener): void;
                public constructor(param0: globalAndroid.content.Context);
                public registerListener(param0: com.google.android.play.core.install.InstallStateUpdatedListener): void;
                public setBytesDownloaded(param0: number): void;
                public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: globalAndroid.app.Activity, param2: com.google.android.play.core.appupdate.AppUpdateOptions, param3: number): boolean;
                /** @deprecated */
                public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: number, param2: com.google.android.play.core.common.IntentSenderForResultStarter, param3: number): boolean;
                public downloadCompletes(): void;
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
      export module play {
        export module core {
          export module appupdate {
            export class zza {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zza>;
              /**
               * Constructs a new instance of the com.google.android.play.core.appupdate.zza interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(): com.google.android.play.core.appupdate.AppUpdateManager });
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
      export module play {
        export module core {
          export module appupdate {
            export class zzaa {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzaa>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class zzab {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzab>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class zzb {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzb>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class zzc extends com.google.android.play.core.appupdate.internal.zzl {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzc>;
              public constructor(param0: any /* com.google.android.play.core.appupdate.internal.zzm*/, param1: globalAndroid.content.IntentFilter, param2: globalAndroid.content.Context);
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
      export module play {
        export module core {
          export module appupdate {
            export class zzd extends com.google.android.play.core.appupdate.internal.zzaf {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzd>;
              public constructor(param0: any /* com.google.android.play.core.appupdate.internal.zzaf*/);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class zze {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zze>;
              public onReceiveResult(param0: number, param1: globalAndroid.os.Bundle): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class zzf {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzf>;
              public startIntentSenderForResult(param0: globalAndroid.content.IntentSender, param1: number, param2: globalAndroid.content.Intent, param3: number, param4: number, param5: number, param6: globalAndroid.os.Bundle): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class zzg extends com.google.android.play.core.appupdate.AppUpdateManager {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzg>;
              public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: androidx.activity.result.ActivityResultLauncher<androidx.activity.result.IntentSenderRequest>, param2: com.google.android.play.core.appupdate.AppUpdateOptions): boolean;
              public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: number, param2: com.google.android.play.core.common.IntentSenderForResultStarter, param3: number): boolean;
              public startUpdateFlow(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: globalAndroid.app.Activity, param2: com.google.android.play.core.appupdate.AppUpdateOptions): com.google.android.gms.tasks.Task<java.lang.Integer>;
              public unregisterListener(param0: com.google.android.play.core.install.InstallStateUpdatedListener): void;
              public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: globalAndroid.app.Activity, param2: com.google.android.play.core.appupdate.AppUpdateOptions, param3: number): boolean;
              public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: number, param2: globalAndroid.app.Activity, param3: number): boolean;
              /** @deprecated */
              public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: number, param2: com.google.android.play.core.common.IntentSenderForResultStarter, param3: number): boolean;
              /** @deprecated */
              public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: number, param2: globalAndroid.app.Activity, param3: number): boolean;
              public getAppUpdateInfo(): com.google.android.gms.tasks.Task<com.google.android.play.core.appupdate.AppUpdateInfo>;
              public completeUpdate(): com.google.android.gms.tasks.Task<java.lang.Void>;
              public registerListener(param0: com.google.android.play.core.install.InstallStateUpdatedListener): void;
              public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: com.google.android.play.core.common.IntentSenderForResultStarter, param2: com.google.android.play.core.appupdate.AppUpdateOptions, param3: number): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class zzh extends com.google.android.play.core.appupdate.internal.zzaf {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzh>;
              public constructor(param0: any /* com.google.android.play.core.appupdate.internal.zzaf*/, param1: any /* com.google.android.play.core.appupdate.internal.zzaf*/, param2: any /* com.google.android.play.core.appupdate.internal.zzaf*/);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class zzi {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzi>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class zzj extends com.google.android.play.core.appupdate.internal.zzaf {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzj>;
              public constructor(param0: any /* com.google.android.play.core.appupdate.internal.zzaf*/);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class zzk extends com.google.android.play.core.appupdate.internal.zzaf {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzk>;
              public constructor(param0: any /* com.google.android.play.core.appupdate.zzi*/);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class zzl {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzl>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class zzm extends com.google.android.play.core.appupdate.internal.zzn {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzm>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class zzn extends com.google.android.play.core.appupdate.internal.zzn {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzn>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class zzo extends com.google.android.play.core.appupdate.internal.zzg {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzo>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class zzp extends com.google.android.play.core.appupdate.zzo {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzp>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class zzq extends com.google.android.play.core.appupdate.zzo {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class zzr {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class zzs extends com.google.android.play.core.appupdate.internal.zzaf {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzs>;
              public constructor(param0: any /* com.google.android.play.core.appupdate.internal.zzaf*/, param1: any /* com.google.android.play.core.appupdate.internal.zzaf*/);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class zzt {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzt>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class zzu extends com.google.android.play.core.appupdate.internal.zzaf {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzu>;
              public constructor(param0: any /* com.google.android.play.core.appupdate.internal.zzaf*/);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class zzv extends com.google.android.play.core.appupdate.AppUpdateOptions.Builder {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzv>;
              public setAppUpdateType(param0: number): com.google.android.play.core.appupdate.AppUpdateOptions.Builder;
              public setAllowAssetPackDeletion(param0: boolean): com.google.android.play.core.appupdate.AppUpdateOptions.Builder;
              public build(): com.google.android.play.core.appupdate.AppUpdateOptions;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class zzw {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class zzx extends com.google.android.play.core.appupdate.AppUpdateOptions {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzx>;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public appUpdateType(): number;
              public allowAssetPackDeletion(): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class zzy {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzy>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module appupdate {
            export class zzz extends com.google.android.play.core.appupdate.zza {
              public static class: java.lang.Class<com.google.android.play.core.appupdate.zzz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module install {
            export class InstallException {
              public static class: java.lang.Class<com.google.android.play.core.install.InstallException>;
              public getErrorCode(): number;
              public constructor(param0: number);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module install {
            export abstract class InstallState {
              public static class: java.lang.Class<com.google.android.play.core.install.InstallState>;
              public bytesDownloaded(): number;
              public constructor();
              public installStatus(): number;
              public installErrorCode(): number;
              public packageName(): string;
              public totalBytesToDownload(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module install {
            export class InstallStateUpdatedListener extends com.google.android.play.core.listener.StateUpdatedListener<com.google.android.play.core.install.InstallState> {
              public static class: java.lang.Class<com.google.android.play.core.install.InstallStateUpdatedListener>;
              /**
               * Constructs a new instance of the com.google.android.play.core.install.InstallStateUpdatedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
      export module play {
        export module core {
          export module install {
            export class NativeInstallStateUpdateListener extends com.google.android.play.core.install.InstallStateUpdatedListener {
              public static class: java.lang.Class<com.google.android.play.core.install.NativeInstallStateUpdateListener>;
              public onStateUpdate(param0: com.google.android.play.core.install.InstallState): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module install {
            export module model {
              export class ActivityResult {
                public static class: java.lang.Class<com.google.android.play.core.install.model.ActivityResult>;
                public static RESULT_IN_APP_UPDATE_FAILED: number;
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
      export module play {
        export module core {
          export module install {
            export module model {
              export class AppUpdateType {
                public static class: java.lang.Class<com.google.android.play.core.install.model.AppUpdateType>;
                /**
                 * Constructs a new instance of the com.google.android.play.core.install.model.AppUpdateType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
                public static IMMEDIATE: number;
                public static FLEXIBLE: number;
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
      export module play {
        export module core {
          export module install {
            export module model {
              export class InstallErrorCode {
                public static class: java.lang.Class<com.google.android.play.core.install.model.InstallErrorCode>;
                /**
                 * Constructs a new instance of the com.google.android.play.core.install.model.InstallErrorCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
                public static ERROR_INSTALL_NOT_ALLOWED: number;
                public static ERROR_DOWNLOAD_NOT_PRESENT: number;
                public static NO_ERROR_PARTIALLY_ALLOWED: number;
                public static NO_ERROR: number;
                public static ERROR_UNKNOWN: number;
                public static ERROR_INSTALL_UNAVAILABLE: number;
                public static ERROR_APP_NOT_OWNED: number;
                public static ERROR_PLAY_STORE_NOT_FOUND: number;
                public static ERROR_API_NOT_AVAILABLE: number;
                public static ERROR_INVALID_REQUEST: number;
                public static ERROR_INTERNAL_ERROR: number;
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
      export module play {
        export module core {
          export module install {
            export module model {
              export class InstallStatus {
                public static class: java.lang.Class<com.google.android.play.core.install.model.InstallStatus>;
                /**
                 * Constructs a new instance of the com.google.android.play.core.install.model.InstallStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
                public static DOWNLOADING: number;
                public static INSTALLED: number;
                public static UNKNOWN: number;
                public static PENDING: number;
                public static REQUIRES_UI_INTENT: number;
                public static DOWNLOADED: number;
                public static INSTALLING: number;
                public static FAILED: number;
                public static CANCELED: number;
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
      export module play {
        export module core {
          export module install {
            export module model {
              export class UpdateAvailability {
                public static class: java.lang.Class<com.google.android.play.core.install.model.UpdateAvailability>;
                /**
                 * Constructs a new instance of the com.google.android.play.core.install.model.UpdateAvailability interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
                public static UNKNOWN: number;
                public static UPDATE_NOT_AVAILABLE: number;
                public static DEVELOPER_TRIGGERED_UPDATE_IN_PROGRESS: number;
                public static UPDATE_AVAILABLE: number;
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
      export module play {
        export module core {
          export module install {
            export module model {
              export class UpdatePrecondition {
                public static class: java.lang.Class<com.google.android.play.core.install.model.UpdatePrecondition>;
                /**
                 * Constructs a new instance of the com.google.android.play.core.install.model.UpdatePrecondition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
                public static APP_VERSION_FRESH: number;
                public static UNKNOWN: number;
                public static CANNOT_DISPLAY: number;
                public static NEED_STORE_TO_PROCEED: number;
                public static INSUFFICIENT_STORAGE: number;
                public static DEVICE_STATUS: number;
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
      export module play {
        export module core {
          export module install {
            export module model {
              export class zza {
                public static class: java.lang.Class<com.google.android.play.core.install.model.zza>;
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
      export module play {
        export module core {
          export module install {
            export class zza extends com.google.android.play.core.install.InstallState {
              public static class: java.lang.Class<com.google.android.play.core.install.zza>;
              public bytesDownloaded(): number;
              public hashCode(): number;
              public toString(): string;
              public installStatus(): number;
              public equals(param0: any): boolean;
              public installErrorCode(): number;
              public packageName(): string;
              public totalBytesToDownload(): number;
            }
          }
        }
      }
    }
  }
}

//Generics information:
