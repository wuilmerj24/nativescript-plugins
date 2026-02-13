declare module com {
  export module google {
    export module android {
      export module play {
        export module core {
          export module common {
            export class IntentSenderForResultStarter {
              public static class: java.lang.Class<com.google.android.play.core.common.IntentSenderForResultStarter>;
              /**
               * Constructs a new instance of the com.google.android.play.core.common.IntentSenderForResultStarter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { startIntentSenderForResult(param0: globalAndroid.content.IntentSender, param1: number, param2: globalAndroid.content.Intent, param3: number, param4: number, param5: number, param6: globalAndroid.os.Bundle): void });
              public constructor();
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
          export module common {
            export class LocalTestingException {
              public static class: java.lang.Class<com.google.android.play.core.common.LocalTestingException>;
            }
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
          export module common {
            export class PlayCoreDialogWrapperActivity {
              public static class: java.lang.Class<com.google.android.play.core.common.PlayCoreDialogWrapperActivity>;
              public constructor();
              public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
              public onCreate(param0: globalAndroid.os.Bundle): void;
              public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
            }
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
          export module listener {
            export class StateUpdatedListener<StateT> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.play.core.listener.StateUpdatedListener<any>>;
              /**
               * Constructs a new instance of the com.google.android.play.core.listener.StateUpdatedListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onStateUpdate(param0: StateT): void });
              public constructor();
              public onStateUpdate(param0: StateT): void;
            }
          }
        }
      }
    }
  }
}

//Generics information:
//com.google.android.play.core.listener.StateUpdatedListener:1
