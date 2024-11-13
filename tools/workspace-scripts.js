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
      // @wuilmerj24/country-code
      'country-code': {
        build: {
          script: 'nx run country-code:build.all',
          description: '@wuilmerj24/country-code: Build',
        },
      },
      // @wuilmerj24/launch-navigator
      'launch-navigator': {
        build: {
          script: 'nx run launch-navigator:build.all',
          description: '@wuilmerj24/launch-navigator: Build',
        },
      },
      // @wuilmerj24/screen-orientation
      'screen-orientation': {
        build: {
          script: 'nx run screen-orientation:build.all',
          description: '@wuilmerj24/screen-orientation: Build',
        },
      },
      // @wuilmerj24/time-range
      'time-range': {
        build: {
          script: 'nx run time-range:build.all',
          description: '@wuilmerj24/time-range: Build',
        },
      },
      // @wuilmerj24/gallery-view
      'gallery-view': {
        build: {
          script: 'nx run gallery-view:build.all',
          description: '@wuilmerj24/gallery-view: Build',
        },
      },
      // @wuilmerj24/mapbox-navigation
      'mapbox-navigation': {
        build: {
          script: 'nx run mapbox-navigation:build.all',
          description: '@wuilmerj24/mapbox-navigation: Build',
        },
      },
      // @wuilmerj24/mapbox-navigation
      'mapbox-navigation': {
        build: {
          script: 'nx run mapbox-navigation:build.all',
          description: '@wuilmerj24/mapbox-navigation: Build',
        },
      },
      // @wuilmerj24/sqlite-secure
      'sqlite-secure': {
        build: {
          script: 'nx run sqlite-secure:build.all',
          description: '@wuilmerj24/sqlite-secure: Build',
        },
      },
      // @wuilmerj24/signalr
      signalr: {
        build: {
          script: 'nx run signalr:build.all',
          description: '@wuilmerj24/signalr: Build',
        },
      },
      // @wuilmerj24/store-update
      'store-update': {
        build: {
          script: 'nx run store-update:build.all',
          description: '@wuilmerj24/store-update: Build',
        },
      },
      // @wuilmerj24/url-preview
			'url-preview': {
				build: {
					script: 'nx run url-preview:build.all',
					description: '@wuilmerj24/url-preview: Build',
				},
			},
			// @wuilmerj24/url-preview
			'url-preview': {
				build: {
					script: 'nx run url-preview:build.all',
					description: '@wuilmerj24/url-preview: Build',
				},
			},
			// @wuilmerj24/media-editor
			'media-editor': {
				build: {
					script: 'nx run media-editor:build.all',
					description: '@wuilmerj24/media-editor: Build',
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
      'country-code': {
        script: 'nx run country-code:focus',
        description: 'Focus on @wuilmerj24/country-code',
      },
      'launch-navigator': {
        script: 'nx run launch-navigator:focus',
        description: 'Focus on @wuilmerj24/launch-navigator',
      },
      'screen-orientation': {
        script: 'nx run screen-orientation:focus',
        description: 'Focus on @wuilmerj24/screen-orientation',
      },
      'time-range': {
        script: 'nx run time-range:focus',
        description: 'Focus on @wuilmerj24/time-range',
      },
      'gallery-view': {
        script: 'nx run gallery-view:focus',
        description: 'Focus on @wuilmerj24/gallery-view',
      },
      'mapbox-navigation': {
        script: 'nx run mapbox-navigation:focus',
        description: 'Focus on @wuilmerj24/mapbox-navigation',
      },
      'mapbox-navigation': {
        script: 'nx run mapbox-navigation:focus',
        description: 'Focus on @wuilmerj24/mapbox-navigation',
      },
      'sqlite-secure': {
        script: 'nx run sqlite-secure:focus',
        description: 'Focus on @wuilmerj24/sqlite-secure',
      },
      signalr: {
        script: 'nx run signalr:focus',
        description: 'Focus on @wuilmerj24/signalr',
      },
      'store-update': {
        script: 'nx run store-update:focus',
        description: 'Focus on @wuilmerj24/store-update',
      },
      'url-preview': {
				script: 'nx run url-preview:focus',
				description: 'Focus on @wuilmerj24/url-preview',
			},
			'url-preview': {
				script: 'nx run url-preview:focus',
				description: 'Focus on @wuilmerj24/url-preview',
			},
			'photo-editor': {
				script: 'nx run photo-editor:focus',
				description: 'Focus on @wuilmerj24/photo-editor',
			},
			reset: {
        script: 'nx g @wuilmerj24/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
