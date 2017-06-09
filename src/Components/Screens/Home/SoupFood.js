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
const { height, width } = Dimensions.get('window');
const imageWidth = width - 27;
const imageHeight = imageWidth / 3;
var tmp_array = [
    { key: "1", value: summerIcon_1, description: 'Bánh trà xanh sốt caramel' },
    { key: "2", value: summerIcon_2, description: 'Bánh moha' },
    { key: "3", value: summerIcon_3, description: 'Tiramisu trà xanh' },
];

export default class SoupFood extends Component {
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
                        Các món Soup
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.moreText}>
                            More
                        </Text>
                    </TouchableOpacity>
                </View>
                <ListView enableEmptySections
                    horizontal={false} removeClippedSubviews
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
                        .cloneWithRows(tmp_array)}
                    style={styles.listProduct}
                    renderRow={product => (
                        <TouchableOpacity>
                            <View style={styles.product}>
                                <Image source={product.value} style={styles.imgProduct}>
                                    <Text style={styles.textProduct}>
                                        {product.description}
                                    </Text>
                                </Image>
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
        marginVertical: 10,
        flexDirection: 'column'
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
    moreText: {
        color: 'green',
        fontSize: 15,
        marginRight: 10,
        marginTop: 2
    },
    listProduct: {
        flexDirection: 'column'
    },
    product: {
        marginVertical: 5,
        width: width,
        height: 120,
        marginLeft: 15,
    },
    imgProduct: {
        width: imageWidth,
        height: 120,
    },
    textProduct: {
        flexWrap: 'wrap',
        textAlign: 'left',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        top: 90,
        marginHorizontal: 10
    }
});