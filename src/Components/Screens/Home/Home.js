import React, { Component } from 'react';
import {
    Text, View, StyleSheet, StatusBar
} from 'react-native';

class Home extends Component {
    static navigationOptions = { title: 'Home', header: null };
    state = {}
    render() {
        return (

            <View>
                <StatusBar hidden={true} />

                <Text>...</Text>
            </View>
        );
    }
}

export default Home;
