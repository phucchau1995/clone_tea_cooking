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
import bgSignIn from '../../../Images/background/bgSignIn.jpg';
import snapIcon from '../../../Images/icon/snap.png';
//=================================Global variable===========================================
const { height, width } = Dimensions.get('window');
const imageWidth = width;
const imageHeight = imageWidth / 3;


export default class SignIn extends Component {
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

                        <TextInput style={styles.txtUser}
                            placeholder="Nhập tài khoản của bạn" />
                        <TextInput secureTextEntry={true} style={styles.txtPassword}
                            placeholder="Mật khẩu thì sao..." />
                        <TouchableOpacity style={[styles.btnStyle, { backgroundColor: '#ff6633' }]}>
                            <Text style={styles.textBtn}>Đăng Nhập</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{color:'#fff',fontSize:15,textAlign:'center',marginBottom:20}}>Hoặc đăng nhập với</Text>
                    </View>
                    <View style={styles.wrapperSocial}>
                        <TouchableOpacity style={[styles.btnStyle, { backgroundColor: 'blue' }]}>
                            <Text style={styles.textBtn}>Đăng Nhập với Facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btnStyle, { backgroundColor: 'skyblue' }]}>
                            <Text style={styles.textBtn}>Đăng Nhập với Twitter</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.wrapRegister}>
                        <TouchableOpacity>
                        <Text style={styles.txtForgot}>Quên mật khẩu?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Text style={styles.txtForgot}>Đăng ký ngay nào</Text>
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
        paddingLeft: 10,
        color: '#fff',
    },
    txtPassword: {
        width: width / 1.2,
        paddingLeft: 10,
        color: '#fff',
    },
    wrapper: {
        position: 'absolute',
        top: 20,
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
