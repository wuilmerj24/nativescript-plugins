module.exports = {
  message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
  pageSize: 32,
  scripts: {
    default: 'nps-i',
    nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli',
    },
    format: {
      script: 'nx format:write',
      description: 'Format source code of the entire workspace (auto-run on precommit hook)',
    },
    '🔧': {
      script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
        description: ` 🔻 Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx run demo:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo:android',
          description: '⚆  Run Android  🤖',
        },
      },
      '...Angular...': {
        script: `npx cowsay "Test all the Angles!"`,
        description: ` 🔻 Angular`,
      },
      'demo-angular': {
        clean: {
          script: 'nx run demo-angular:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo-angular:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo-angular:android',
          description: '⚆  Run Android  🤖',
        },
      },
    },
    '⚙️': {
      script: `npx cowsay "@wuilmerj24/* packages will keep your ⚙️ cranking"`,
      description: '_____________  @wuilmerj24/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@wuilmerj24': {
      // @wuilmerj24/wj24secrets
      wj24secrets: {
        build: {
          script: 'nx run wj24secrets:build.all',
          description: '@wuilmerj24/wj24secrets: Build',
        },
      },
      // @wuilmerj24/gallery-view
      'gallery-view': {
        build: {
          script: 'nx run gallery-view:build.all',
          description: '@wuilmerj24/gallery-view: Build',
        },
      },
      // @wuilmerj24/gallery-view
      'gallery-view': {
        build: {
          script: 'nx run gallery-view:build.all',
          description: '@wuilmerj24/gallery-view: Build',
        },
      },
      // @wuilmerj24/country-code
      'country-code': {
        build: {
          script: 'nx run country-code:build.all',
          description: '@wuilmerj24/country-code: Build',
        },
      },
      // @wuilmerj24/bedtime
      bedtime: {
        build: {
          script: 'nx run bedtime:build.all',
          description: '@wuilmerj24/bedtime: Build',
        },
      },
      // @wuilmerj24/time-range
      'time-range': {
        build: {
          script: 'nx run time-range:build.all',
          description: '@wuilmerj24/time-range: Build',
        },
      },
      'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    '⚡': {
      script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
      description: '_____________  Focus (VS Code supported)  _____________',
    },
    focus: {
      wj24secrets: {
        script: 'nx run wj24secrets:focus',
        description: 'Focus on @wuilmerj24/wj24secrets',
      },
      'gallery-view': {
        script: 'nx run gallery-view:focus',
        description: 'Focus on @wuilmerj24/gallery-view',
      },
      'gallery-view': {
        script: 'nx run gallery-view:focus',
        description: 'Focus on @wuilmerj24/gallery-view',
      },
      'country-code': {
        script: 'nx run country-code:focus',
        description: 'Focus on @wuilmerj24/country-code',
      },
      bedtime: {
        script: 'nx run bedtime:focus',
        description: 'Focus on @wuilmerj24/bedtime',
      },
      'time-range': {
        script: 'nx run time-range:focus',
        description: 'Focus on @wuilmerj24/time-range',
      },
      reset: {
        script: 'nx g @nativescript/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
