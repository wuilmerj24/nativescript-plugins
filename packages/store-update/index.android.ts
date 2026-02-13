import { Application, Utils } from '@nativescript/core';
import { UpdateInfo, UpdateOptions } from './';
import { StoreUpdateCommon } from './common';

export class StoreUpdate extends StoreUpdateCommon {
  constructor(options: UpdateOptions) {
    super(options);
  }

  // ============================
  // ANDROID INFO
  // ============================
  private getContext() {
    return Application.android.foregroundActivity || Application.android.startActivity;
  }

  private getLocalVersion(): string {
    const ctx = this.getContext();
    const pm = ctx.getPackageManager();
    const pkg = pm.getPackageInfo(ctx.getPackageName(), 0);
    return pkg.versionName;
  }

  private getBundleId(): string {
    return this.getContext().getPackageName();
  }

  // ============================
  // 1️⃣ CHECK UPDATE (MANUAL)
  // ============================
  async checkUpdate() {
    const context = this.getContext();

    const localVersion = this.getLocalVersion();
    const bundleId = this.getBundleId();

    // Google Play NO expone versión remota directa
    const storeVersion = 'unknown';

    const needsUpdate = this.isDebugForceUpdate();

    const storeUrl = `https://play.google.com/store/apps/details?id=${bundleId}`;

    if (needsUpdate) {
      if (this.options.forceUpdate) {
        this.showForceUpdateDialogFullscreen(storeUrl);
      } else {
        this.showOptionalDialog(context, storeUrl);
      }
    }

    return {
      localVersion,
      storeVersion,
      bundleId,
      needsUpdate,
    };
  }

  // ============================
  // FULLSCREEN (FORCE UPDATE)
  // ============================
  private showForceUpdateDialogFullscreen(storeUrl: string) {
    const activity = Application.android.foregroundActivity || Application.android.startActivity;

    if (!activity) {
      Application.once(Application.android.activityResumedEvent, () => this.showForceUpdateDialogFullscreen(storeUrl));
      return;
    }

    activity.runOnUiThread(
      new java.lang.Runnable({
        run: () => {
          const dialog = new android.app.Dialog(activity, android.R.style.Theme_DeviceDefault_NoActionBar_Fullscreen);

          dialog.setCancelable(false);
          dialog.setCanceledOnTouchOutside(false);

          const layout = new android.widget.LinearLayout(activity);
          layout.setOrientation(android.widget.LinearLayout.VERTICAL);
          layout.setGravity(android.view.Gravity.CENTER);
          layout.setPadding(60, 60, 60, 60);

          if (this.options.screenBackgroundColor) {
            layout.setBackgroundColor(android.graphics.Color.parseColor(this.options.screenBackgroundColor));
          }

          const text = new android.widget.TextView(activity);
          text.setText(this.options.message);
          text.setTextSize(18);
          text.setGravity(android.view.Gravity.CENTER);

          if (this.options.messageColor) {
            text.setTextColor(android.graphics.Color.parseColor(this.options.messageColor));
          }

          const button = new android.widget.Button(activity);
          button.setText(this.options.titleButton);

          if (this.options.buttonColor) {
            button.setBackgroundColor(android.graphics.Color.parseColor(this.options.buttonColor));
          }

          if (this.options.titleButtonColor) {
            button.setTextColor(android.graphics.Color.parseColor(this.options.titleButtonColor));
          }

          button.setOnClickListener(
            new android.view.View.OnClickListener({
              onClick: () => {
                Utils.openUrl(storeUrl);
              },
            })
          );

          layout.addView(text);
          layout.addView(button);
          dialog.setOnKeyListener(
            new android.content.DialogInterface.OnKeyListener({
              onKey: (_dialog, keyCode) => {
                return keyCode === android.view.KeyEvent.KEYCODE_BACK;
              },
            })
          );
          dialog.setContentView(layout);
          dialog.show();
        },
      })
    );
  }

  // ============================
  // OPTIONAL DIALOG
  // ============================
  private showOptionalDialog(context: any, storeUrl: string) {
    const builder = new android.app.AlertDialog.Builder(context);

    builder.setMessage(this.options.message);

    builder.setPositiveButton(
      this.options.titleButton,
      new android.content.DialogInterface.OnClickListener({
        onClick: () => Utils.openUrl(storeUrl),
      })
    );

    builder.setNegativeButton('Close', null);
    builder.setCancelable(true);
    builder.show();
  }

  // ============================
  // 2️⃣ IN-APP UPDATE (PLAY CORE)
  // ============================
  async updateInApp(): Promise<never> {
    const activity = Application.android.foregroundActivity || Application.android.startActivity;

    if (!activity) {
      throw new Error('No activity available');
    }

    const appUpdateManager = com.google.android.play.core.appupdate.AppUpdateManagerFactory.create(activity);

    const launchUpdate = () => {
      appUpdateManager.getAppUpdateInfo().addOnSuccessListener(
        new com.google.android.gms.tasks.OnSuccessListener({
          onSuccess: (info) => {
            const updateAvailable = info.updateAvailability() === com.google.android.play.core.install.model.UpdateAvailability.UPDATE_AVAILABLE;

            const immediateAllowed = info.isUpdateTypeAllowed(com.google.android.play.core.install.model.AppUpdateType.IMMEDIATE);

            if (updateAvailable && immediateAllowed) {
              appUpdateManager.startUpdateFlow(info, activity, com.google.android.play.core.appupdate.AppUpdateOptions.defaultOptions(com.google.android.play.core.install.model.AppUpdateType.IMMEDIATE));
            }
          },
        })
      );
    };

    // 1️⃣ Listener de estado de instalación
    const installListener = new com.google.android.play.core.install.InstallStateUpdatedListener({
      onStateUpdate: (state) => {
        const status = state.installStatus();

        // ❌ Usuario canceló o falló
        if (status === com.google.android.play.core.install.model.InstallStatus.CANCELED || status === com.google.android.play.core.install.model.InstallStatus.FAILED) {
          launchUpdate(); // 🔁 RELANZAR
        }

        // ✅ Instalado
        if (status === com.google.android.play.core.install.model.InstallStatus.INSTALLED) {
          appUpdateManager.unregisterListener(installListener);
          android.os.Process.killProcess(android.os.Process.myPid());
        }
      },
    });

    appUpdateManager.registerListener(installListener);

    // 2️⃣ Reintento SIEMPRE al volver a foreground
    Application.on(Application.android.activityResumedEvent, launchUpdate);

    // 3️⃣ Primer intento
    launchUpdate();

    // ⛔ Nunca se resuelve → FORZADO REAL
    return new Promise(() => {});
  }

  private isDebugForceUpdate(): boolean {
    return __DEV__ && (this.options as any).__debugForceUpdate === true;
  }
}
