/*  Author: Nguyen Phuc Chau
 *  Date write:09/06/2017
 *  Version: 0.0.1
 *  Description: Write header JSX with image and text using swiper library
*/

//=================================import react library=======================================
import React, { Component } from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity,
    Image, Dimensions, ListView
} from 'react-native';

//=================================import library from 3-rd party============================
import Swiper from 'react-native-swiper';
import EStyleSheet from 'react-native-extended-stylesheet';

//=================================import picture for temporary UI===========================
import summerIcon_1 from '../../../Images/summer_img/summer_1.jpg';
import summerIcon_2 from '../../../Images/summer_img/summer_2.jpg';
import summerIcon_3 from '../../../Images/summer_img/summer_3.jpg';
import summerIcon_4 from '../../../Images/summer_img/summer_4.jpg';
import summerIcon_5 from '../../../Images/summer_img/summer_5.jpg';

//=================================Global variable===========================================
const {height, width} = Dimensions.get('window');
const imageWidth = width;
const imageHeight = imageWidth / 3;
var tmp_array = [
    {key:"1",value:summerIcon_1},
    {key:"2",value:summerIcon_2},
    {key:"3",value:summerIcon_3},
    {key:"4",value:summerIcon_4},
    {key:"5",value:summerIcon_5}
];
export default class HeaderSwiper extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <View>

                </View>

                <View>
                    
                </View>
            </View>
        );
    }
}


//=================================using Extendsion StyleSheet===========================
const styles = StyleSheet.create({
    container: {
        height:150,
        backgroundColor:'#fff',
        marginTop:5,
        flexDirection:'row'
    },

});
