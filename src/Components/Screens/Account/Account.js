/*  Author: Nguyen Phuc Chau
 *  Date write:09/06/2017
 *  Version: 0.0.1
 *  Description: Write home JSX for showing diverse cuisine
*/

//=================================import react library=======================================
import React, { Component } from 'react';
import {
    Text, View, StyleSheet, StatusBar,
    Dimensions,TouchableOpacity,ScrollView
} from 'react-native';

//=================================import picture for temporary UI===========================
import FavoriteFood from './FavoriteFood';
import FavoriteVideo from './FavoriteVideo';
import HeaderAccount from './HeaderAccount';

export default class Account extends Component {
    static navigationOptions = { title: 'Home', header: null };
    state = {}
    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar hidden={true} />
                <HeaderAccount />
                <FavoriteFood />
                <FavoriteVideo />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    }
});
