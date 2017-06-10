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
import heartIcon from '../../../Images/icon/heart.png';

import summerIcon_1 from '../../../Images/summer_img/summer_1.jpg';
import summerIcon_2 from '../../../Images/summer_img/summer_2.jpg';
import summerIcon_3 from '../../../Images/summer_img/summer_3.jpg';
import summerIcon_4 from '../../../Images/summer_img/summer_4.jpg';
import summerIcon_5 from '../../../Images/summer_img/summer_5.jpg';

//=================================Global variable===========================================
const { height, width } = Dimensions.get('window');
const imageWidth = width-30;
const textWidth = width/(1.5);
const imageHeight = imageWidth / 3;
var tmp_array = [
    { key: "1", value: summerIcon_1, description: 'Học pha chế - cách pha chế cootail siêu ngon cho ngày cuối tuần' },
    { key: "2", value: summerIcon_2, description: 'Học pha chế - cách pha chế soda red siêu ngon cho người bạn thân' },
    { key: "3", value: summerIcon_3, description: 'Học nấu ăn- cách nấu món canh khổ qua giải độc cơ thể' },
    { key: "4", value: summerIcon_4, description: 'Học nấu ăn- cách làm gà chiên giòn giống kfc' },
];

export default class HotVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Hot Video
                    </Text>
                </View>
                <ListView enableEmptySections
                    horizontal={false} removeClippedSubviews
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
                        .cloneWithRows(tmp_array)}
                    style={styles.listProduct}
                    renderRow={product => (
                        <TouchableOpacity>
                            <View style={styles.product}>
                                <Image source={product.value} style={styles.imgProduct} />
                                <View style={styles.wrapContent}>
                                    <Text style={styles.textProduct}>
                                        {product.description}
                                    </Text>
                                    <TouchableOpacity style={styles.rightIcon}>
                                        <Image source={heartIcon} style={styles.icon} />
                                        </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )} />

            </View>
        );
    }
}


//=================================using Extendsion StyleSheet===========================
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 5,
        flexDirection: 'column',
        paddingBottom: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15
    },
    headerText: {
        color: 'green',
        fontSize: 18,
        marginLeft: 15
    },

    listProduct: {
        flexDirection: 'column'
    },
    product: {
        marginVertical: 5,
        width: width,
        marginLeft: 15,
    },
    imgProduct: {
        width: imageWidth,
        height: 140,
    },
    wrapContent: {
        flexDirection: 'row',
        width:width,
        justifyContent:'space-between',
        alignContent:'space-between'
    },
    textProduct: {
        flexWrap: 'wrap',
        textAlign: 'left',
        color: '#000',
        fontSize: 16,
        fontWeight: '400',
        fontFamily:'Roboto',
        width:textWidth,
    },
    rightIcon:{
        right:35,
        marginTop:3,
        alignContent:'flex-end'
    },
    icon:{
        width:20,
        height:20,
        alignSelf:'flex-end',
    }
});