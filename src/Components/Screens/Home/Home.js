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
import HeaderSwiper from './HeaderSwiper';
import SummerFood from './SummerFood';
import SaltyFood from './SaltyFood';
import SoupFood from './SoupFood';

//=================================Global variable===========================================
const { width } = Dimensions.get('window');
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;

export default class Home extends Component {
    static navigationOptions = { title: 'Home', header: null };
    state = {}
    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar hidden={true} />
                <HeaderSwiper />
                <SummerFood />
                <SaltyFood />
                <SoupFood />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    }
});
