/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Navigations from "./navigations"
import { Provider } from 'mobx-react';
import Store from './store/index'

const App = () => {
  const store = new Store()

  return (
    <Provider {...store}>
      <Navigations />
    </Provider>
  );
};

export default App;
