import React, { Component } from 'react';
import Navigations from "./navigations"
import { Provider } from 'mobx-react';
import Store from './store/index'

const store = new Store({})

export default class App extends Component {

  render() {
    return (
      <Provider {...store}>
        <Navigations />
      </Provider>
    );
  }
};
