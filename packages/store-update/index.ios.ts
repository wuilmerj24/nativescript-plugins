import { Application, Utils } from '@nativescript/core';
import { StoreUpdateCommon } from './common';
import { UpdateOptions } from './';
import { TapHandler } from './class/handler.ios';

export class StoreUpdate extends StoreUpdateCommon {
  private forceVC: UIViewController | null = null;

  constructor(options: UpdateOptions) {
    super(options);
    Application.on(Application.resumeEvent, () => {
      this.ensureForceScreenVisible();
    });
  }

  private getLocalVersion(): string {
    return NSBundle.mainBundle.objectForInfoDictionaryKey('CFBundleShortVersionString') as string;
  }

  private getBundleId(): string {
    return NSBundle.mainBundle.bundleIdentifier;
  }

  async checkUpdate() {
    const bundleId = this.getBundleId();
    const localVersion = this.getLocalVersion();

    const storeInfo = await this.getAppStoreInfo(bundleId);

    const storeVersion = storeInfo.version;
    // const needsUpdate = this.isNewerVersion(storeVersion, localVersion);
    const needsUpdate = this.isDebugForceUpdate() || this.isNewerVersion(storeVersion, localVersion);

    if (needsUpdate) {
      if (this.options.forceUpdate) {
        this.showForceUpdateScreen(storeInfo.trackViewUrl);
      } else {
        this.showOptionalDialog(storeInfo.trackViewUrl);
      }
    }

    const data = {
      localVersion,
      storeVersion,
      bundleId,
      minimumVersion: storeInfo.minimumOsVersion,
      needsUpdate,
    };
    return data;
  }

  private getAppStoreInfo(bundleId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = NSURL.URLWithString(`https://itunes.apple.com/lookup?bundleId=${bundleId}`);

      const task = NSURLSession.sharedSession.dataTaskWithURLCompletionHandler(url, (data, response, error) => {
        if (error) {
          reject(error);
          return;
        }

        const json = JSON.parse(NSString.alloc().initWithDataEncoding(data, NSUTF8StringEncoding).toString());

        resolve(json.results[0]);
      });

      task.resume();
    });
  }

  private isNewerVersion(store: string, local: string): boolean {
    const s = store.split('.').map(Number);
    const l = local.split('.').map(Number);

    for (let i = 0; i < Math.max(s.length, l.length); i++) {
      const sv = s[i] || 0;
      const lv = l[i] || 0;
      if (sv > lv) return true;
      if (sv < lv) return false;
    }
    return false;
  }

  private tapHandler: TapHandler;

  private showForceUpdateScreen(storeUrl: string) {
    if (this.forceVC) {
      return;
    }

    const vc = UIViewController.new();
    this.forceVC = vc;
    // vc.view.backgroundColor = UIColor.blueColor;
    vc.view.backgroundColor = this.color(this.options.screenBackgroundColor) || UIColor.whiteColor;

    // 🔒 BLOQUEO TOTAL
    vc.modalPresentationStyle = UIModalPresentationStyle.FullScreen;
    vc.modalTransitionStyle = UIModalTransitionStyle.CrossDissolve;
    vc.modalInPresentation = true; // iOS 13+

    const screenWidth = UIScreen.mainScreen.bounds.size.width;
    const screenHeight = UIScreen.mainScreen.bounds.size.height;

    const label = UILabel.new();
    label.text = this.options.message;
    label.textColor = this.color(this.options.messageColor);
    label.textAlignment = NSTextAlignment.Center;
    label.numberOfLines = 0;
    label.frame = CGRectMake(20, screenHeight / 2 - 120, screenWidth - 40, 100);

    const button = UIButton.buttonWithType(UIButtonType.System);
    button.setTitleForState(this.options.titleButton, UIControlState.Normal);
    button.backgroundColor = this.color(this.options.buttonColor);
    button.setTitleColorForState(this.color(this.options.titleButtonColor), UIControlState.Normal);
    button.frame = CGRectMake(40, screenHeight / 2 + 20, screenWidth - 80, 50);
    button.layer.cornerRadius = 10;
    this.tapHandler = TapHandler.initWithCallback((recognizer: UITapGestureRecognizer) => {
      Utils.openUrl(storeUrl);
    });
    const tapGesture = UITapGestureRecognizer.alloc().initWithTargetAction(this.tapHandler, 'handleTap');

    tapGesture.numberOfTapsRequired = 1;

    button.addGestureRecognizer(tapGesture);

    vc.view.addSubview(label);
    vc.view.addSubview(button);

    const root = UIApplication.sharedApplication.keyWindow.rootViewController;
    root.presentViewControllerAnimatedCompletion(vc, false, null);
  }

  private showOptionalDialog(storeUrl: string) {
    const alert = UIAlertController.alertControllerWithTitleMessagePreferredStyle(null, this.options.message, UIAlertControllerStyle.Alert);

    alert.addAction(UIAlertAction.actionWithTitleStyleHandler(this.options.titleButton, UIAlertActionStyle.Default, () => Utils.openUrl(storeUrl)));

    alert.addAction(UIAlertAction.actionWithTitleStyleHandler('Close', UIAlertActionStyle.Cancel, null));

    UIApplication.sharedApplication.keyWindow.rootViewController.presentViewControllerAnimatedCompletion(alert, true, null);
  }

  private color(hex?: string): UIColor | null {
    if (!hex) return null;

    const c = hex.replace('#', '');

    if (c.length !== 6) return null;

    const rgb = parseInt(c, 16);

    return UIColor.colorWithRedGreenBlueAlpha(((rgb >> 16) & 255) / 255, ((rgb >> 8) & 255) / 255, (rgb & 255) / 255, 1);
  }

  private ensureForceScreenVisible() {
    if (!this.forceVC) return;

    const root = UIApplication.sharedApplication.keyWindow.rootViewController;

    if (!root.presentedViewController) {
      root.presentViewControllerAnimatedCompletion(this.forceVC, false, null);
    }
  }

  private isDebugForceUpdate(): boolean {
    return __DEV__ && (this.options as any).__debugForceUpdate === true;
  }
}
