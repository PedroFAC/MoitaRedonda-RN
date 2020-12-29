import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import Navigation from './src/routes/Navigation';

import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Root>
          <Navigation />
        </Root>
      </PaperProvider>
    </Provider>
  );
}
