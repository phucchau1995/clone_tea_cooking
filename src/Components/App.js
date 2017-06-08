import React, { Component } from 'react';
import {
    Text, View, StyleSheet
} from 'react-native';
import {Tabbar} from'../Route';
class App extends Component {
    state = {}
    render() {
        return (
              <Tabbar />
          );
    }
}

export default App;
