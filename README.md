# expo-typescript-boilerplate

this is my personal boilerplate for building expo app using SDK 44.

## stacks

### core

- [expo](https://docs.expo.dev/): create mobile app with ease
- [typescript](https://www.typescriptlang.org/): js with static typing
- [redux-toolkit](https://redux-toolkit.js.org/tutorials/quick-start): use redux easily
- [react-navigation v5](https://reactnavigation.org/docs/5.x/getting-started): navigate between your screen
  - [react-native-animated-nav-tab-bar](https://github.com/torgeadelin/react-native-animated-nav-tab-bar): animated tab bar
- [native-base](https://nativebase.io/): ui framework

### tooling

- [husky](https://github.com/typicode/husky): git hooks
- [lint-staged](https://github.com/okonet/lint-staged): lint staged files
- [pretty-quick](https://github.com/azz/pretty-quick): prettify your code
- [commitizen](https://github.com/commitizen/cz-cli): commit like a pro
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint): eslint with typescript support
- [semantic-release](https://github.com/semantic-release/semantic-release): fully automated versioning

## projects structure

```bash
src
├── assets
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash.png
├── navigation
│   └── bottom-tabs.tsx
├── screens
│   ├── about-screen.tsx
│   └── home-screen.tsx
├── slices
│   └── counter-slice.ts
└── store.ts
```

## disclaimer

don't ever use this without knowing every piece of it
