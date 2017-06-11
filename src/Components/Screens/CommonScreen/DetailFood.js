/*  Author: Nguyen Phuc Chau
 *  Date write:09/06/2017
 *  Version: 0.0.1
 *  Description: Write header JSX with image and text using swiper library
*/

//=================================import react library=======================================
import React, { Component } from 'react';
import {
    Text, View,
    TouchableOpacity, StyleSheet, ScrollView
} from 'react-native';

//=================================import picture for temporary UI===========================
import HeaderDetail from './HeaderDetail';
import DetailView from './DetailView';

export default class DetailFood extends Component {
    state = {}
    render() {
        return (
            <ScrollView>
                <HeaderDetail navigation = {this.props.navigation}/>
                <DetailView navigation = {this.props.navigation}/>
            </ScrollView>
        );
    }
}

//=================================using Extendsion StyleSheet===========================
const styles = StyleSheet.create({
    container: {

    }
});
