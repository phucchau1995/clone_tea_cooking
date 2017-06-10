/*  Author: Nguyen Phuc Chau
 *  Date write:09/06/2017
 *  Version: 0.0.1
 *  Description: Write home JSX for showing diverse cuisine
*/

//=================================import react library=======================================
import React, { Component } from 'react';
import {
    Text, View, StyleSheet, StatusBar, TextInput,
    Dimensions, TouchableOpacity, ScrollView, Image
} from 'react-native';

//=================================import picture for temporary UI===========================
import bgSignIn from '../../../Images/background/bgSignUp.jpg';
import snapIcon from '../../../Images/icon/snap.png';
//=================================Global variable===========================================
const { height, width } = Dimensions.get('window');
const imageWidth = width;
const imageHeight = imageWidth / 3;


export default class Register extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.bgImage} source={bgSignIn} />
                <View style={styles.wrapper}>
                    <View style={{marginBottom:40,alignItems:'center'}}>
                        <Image source={snapIcon} style={{ width: 80, height: 80 }} />
                    </View>
                    <View style={styles.wrapperSignIn}>
                        <TextInput style={styles.txtUser} placeholderTextColor={'#fff'}
                            placeholder="Họ và tên..." />
                        <TextInput style={styles.txtUser} placeholderTextColor={'#fff'}
                            placeholder="Nhập tài khoản của bạn" />
                        <TextInput secureTextEntry={true} style={styles.txtPassword} placeholderTextColor={'#fff'}
                            placeholder="Mật khẩu thì sao..." />
                            <TextInput style={styles.txtUser} placeholderTextColor={'#fff'}
                            placeholder="Email là gì nhỉ..." />
                        <TouchableOpacity style={[styles.btnStyle, { backgroundColor: '#ff6633' }]}>
                            <Text style={styles.textBtn}>Đăng Ký</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    bgImage: {
        width: width,
        height: height,
        backgroundColor: 'rgba(0,0,0,.1)'
    },
    wrapperSignIn: {
        marginBottom: 40,
    },
    txtUser: {
        width: width / 1.2,
        paddingLeft: 20,
        color: '#fff',
    },
    txtPassword: {
        width: width / 1.2,
        paddingLeft: 20,
        color: '#fff',
    },
    wrapper: {
        position: 'absolute',
        top: 40,
        left: width / 10,
        justifyContent:'space-between'
    },
    wrapperSocial: {

    },
    btnStyle: {
        paddingVertical: 5,
        paddingHorizontal: 40,
        margin: 5,
    },
    textBtn: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'
    },
    wrapRegister:{
        marginTop:40,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    txtForgot:{
        fontWeight:'300',
        color:'#000',
        
    }
});
