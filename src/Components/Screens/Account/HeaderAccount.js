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
import background from '../../../Images/background/delicious.jpg';
import chefIcon from '../../../Images/icon/chef.png';

//=================================Global variable===========================================
const { height, width } = Dimensions.get('window');
const imageWidth = width;
const imageHeight = imageWidth / 3;

export default class HeaderAccount extends Component {
    constructor(props) {
        super(props);
        const ds =
            this.state = {

            }
    }
    state = {}
    render() {
        return (
            <View style={styles.container} >
               <Image style={styles.background} source={background}/>
               <View style={styles.wrapper}>
                    <TouchableOpacity>
                    <Image style={styles.icLogin} source={chefIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={styles.txtLogin}>Đăng Nhập</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


//=================================using Extendsion StyleSheet===========================
const styles = StyleSheet.create({
    container: {
        height: 250,
        backgroundColor:'#fff'
    },
    background:{
        height: 150,
        width:width,
    },
    wrapper:{
        alignItems:'center',
        top:-50
    },
    icLogin:{
        width:80,
        height:80,
        marginBottom:10      
    },
    txtLogin:{
        textAlign:'center',
        color:'green',
        fontSize:18,
        fontWeight:'500'
    }
});
