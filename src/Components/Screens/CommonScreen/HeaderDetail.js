/*  Author: Nguyen Phuc Chau
 *  Date write:09/06/2017
 *  Version: 0.0.1
 *  Description: Write header JSX with image and text using swiper library
*/

//=================================import react library=======================================
import React, { Component } from 'react';
import {
    Text, View,
    TouchableOpacity, StyleSheet, Image
} from 'react-native';

//=================================import picture for temporary UI===========================
import backIcon from '../../../Images/icon/back.png';
import shareIcon from '../../../Images/icon/share.png';
import heartIcon from '../../../Images/icon/myHeart.png';


export default class DetailFood extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Image source={backIcon} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.text}>Cách nấu món soup gà...</Text>
                <View style={styles.wrapper}>
                    <TouchableOpacity>
                        <Image source={shareIcon} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={heartIcon} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

//=================================using Extendsion StyleSheet===========================
const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: '#00cc66',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    wrapper: {
        flexDirection: 'row',
    },
    icon: {
        width: 25,
        height: 25,
        overlayColor: 'green',
        paddingHorizontal: 5,
        marginHorizontal: 5
    },
    text: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: "monospace",
        marginVertical: 5
    }
});
