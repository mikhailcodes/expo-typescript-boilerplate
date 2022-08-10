import React from 'react';
import { store } from './src/store';
import { Provider } from 'react-redux';
import { Navigation } from './src/components/navigation/router';
import { NativeBaseProvider } from 'native-base';
import { nhost, NhostReactProvider } from './src/lib/nhost.js';

export default function App() {
  return (
    <NhostReactProvider store={store} nhost={nhost}>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </NhostReactProvider>
  );
}
