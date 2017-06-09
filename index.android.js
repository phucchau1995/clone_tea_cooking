/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*  Author: Nguyen Phuc Chau
 *  Date write:08/06/2017
 *  Version: 0.0.1
*/

//=================================import react library=======================================
import React, { Component } from 'react';
import {
  AppRegistry,View
} from 'react-native';

//=================================import react js file=======================================
import App from'./src/Components/App';


//=================================Register Component into AppRegistry========================
AppRegistry.registerComponent('clone_tea', () => App);
