/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Router from './src/Router';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

export default class App extends Component<Props> {

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Router />
       </Provider>
    );
  }
}


