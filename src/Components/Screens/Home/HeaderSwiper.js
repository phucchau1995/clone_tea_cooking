/*  Author: Nguyen Phuc Chau
 *  Date write:09/06/2017
 *  Version: 0.0.1
 *  Description: Write header JSX with image and text using swiper library
*/

//=================================import react library=======================================
import React, { Component } from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity,
    Image, Dimensions
} from 'react-native';

//=================================import library from 3-rd party============================
import Swiper from 'react-native-swiper';
import EStyleSheet from 'react-native-extended-stylesheet';
import FitImage from 'react-native-fit-image';

//=================================import picture for temporary UI===========================
import headerImg_1 from '../../../Images/swiper_img/hd1.jpg';
import headerImg_2 from '../../../Images/swiper_img/hd2.jpg';
import headerImg_3 from '../../../Images/swiper_img/hd3.jpg';
import headerImg_4 from '../../../Images/swiper_img/hd4.jpg';

//=================================Global variable===========================================
const { width } = Dimensions.get('window');
const imageWidth = width - 10;
const imageHeight = imageWidth / 3;
export default class HeaderSwiper extends Component {
    constructor(props) {
        super(props);
    }
    showDetail(){
        
    }
    state = {}
    render() {
        return (
            <View style={styles.wrapper}>
                <TouchableOpacity onPress={this.showDetail.bind(this)}>
                <Image 
                    style={styles.headerImg}  source={headerImg_1}>
                    <Text style={styles.headerTxt}>
                        Món canh đậu hũ nấu theo phong cách Hàn Quốc
                    </Text>
                </Image>
                </TouchableOpacity>
            </View>
        );
    }
}


//=================================using Extendsion StyleSheet===========================
const styles = StyleSheet.create({
    wrapper:{
        height:150,
        backgroundColor:'#fff',
        marginBottom:5,
        flexDirection:'column',
        width:width
    },
    headerImg:{
        height:150,
        width:width
    },
    headerTxt:{
        color:'#fff',
        fontSize:18,
        top:100,
        textAlign:'left',
        fontWeight:'600',
        marginHorizontal:1
    }
});


{/*<Swiper style={styles.wrapper} showsButtons={true} autoplay={true} width={imageWidth} 
                    height = {imageHeight}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
            </Swiper>*/}