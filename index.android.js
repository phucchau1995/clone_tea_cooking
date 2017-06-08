/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,View
} from 'react-native';
import App from'./src/Components/App';
export default class clone_tea extends Component {
  render() {
    return (
      <App />

    );
  }
}



AppRegistry.registerComponent('clone_tea', () => clone_tea);
