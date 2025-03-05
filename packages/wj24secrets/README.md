# @wuilmerj24/wj24secrets

```javascript
npm install @wuilmerj24/wj24secrets
```

## Usage

## Android Configuration
Put `file.bin` in `App_Resources/Android/src/main/res/raw/file.bin`
For Android, you need to configure the Gradle repositories in your `android/app/build.gradle` file. Add the following code inside the `repositories {}` block:

```gradle
repositories {
    // google()
    // mavenCentral()
    maven {
        name = "GitHubPackages"
        url = uri("https://maven.pkg.github.com/wuilmerj24/Wj24Secrets_android") 
        credentials {
            username = "GITHUB_USERNAME" // Replace with your GitHub username
            password = "GITHUB_TOKEN" // Replace with your GitHub token
        }
    }
}
```

And
```gradle
dependencies {
  implementation 'androidx.multidex:multidex:2.0.1'
  implementation "upinn.tech:wj24secrets_android:1.2.3"

}
```

Ensure that you replace `GITHUB_USERNAME` with your GitHub username and `GITHUB_TOKEN` with a valid GitHub token that has permission to access the repository.

## iOS Configuration
Put `file.bin` in `App_Resources/iOS/file.bin`
For iOS, update your `nativescript.config.ts` file by adding the Swift Package Manager (SPM) configuration:

```json
ios: {
    SPMPackages: [
        {
            name: "Wj24Secrets_iOS",
            libs: ["Wj24Secrets_iOS"],
            repositoryURL: "https://[TOKEN]@github.com/wuilmerj24/Wj24Secrets_ios.git",
            version: "1.1.5"
        }
    ]
}
```

Replace `[TOKEN]` with your GitHub token to allow access to the private repository.

## Usage Example

Once the plugin is installed and configured, you can use it in your NativeScript project as follows:

```typescript
import { Wj24secrets } from '@wuilmerj24/wj24secrets';

constructor(){
    super()
    this.wj24secrets= new Wj24secrets("test", true);
  }

  iniciar() {
    console.log("iniciar")
    this.wj24secrets.initSDK();
  }

  buscar() {
    console.log("buscar")
    let variable = this.wj24secrets.searchVar("variable", "version" /*number*/);
  }
```


// TODO

## License

Apache License Version 2.0
