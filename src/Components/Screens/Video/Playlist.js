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
const imageWidth = width;
const imageHeight = imageWidth / 3;
var tmp_array = [
    { key: "1", value: summerIcon_1, description: 'Bánh trà xanh sốt caramel' },
    { key: "2", value: summerIcon_2, description: 'Bánh moha' },
    { key: "3", value: summerIcon_3, description: 'Tiramisu trà xanh' },
    { key: "4", value: summerIcon_4, description: 'Ice cake break' },
    { key: "5", value: summerIcon_5, description: 'Lemon cheese cake' }
];
export default class Playlist extends Component {
    constructor(props) {
        super(props);
        const ds =
            this.state = {

            }
    }
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Playlist
                    </Text>
                </View>

                <ListView enableEmptySections
                    horizontal={true} removeClippedSubviews
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
                        .cloneWithRows(tmp_array)}
                    style={styles.listProduct}
                    renderRow={product => (
                        <TouchableOpacity>
                            <View style={styles.product}>
                                <Image source={product.value} style={styles.imgProduct} />
                                <Text style={styles.textProduct}>{product.description}
                                </Text>
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
        height: 220,
        backgroundColor: '#fff',
        marginTop: 5,
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
        marginLeft: 10
    },
    moreText: {
        color: 'green',
        fontSize: 15,
        marginRight: 10,
        marginTop: 2
    },
    listProduct: {
        flexDirection: 'row'
    },
    product: {
        justifyContent: 'center',
        marginHorizontal: 5,
        width: 150
    },
    imgProduct: {
        width: 150,
        height: 120,
        borderRadius: 15,
    },
    textProduct: {
        flexWrap: 'wrap',
        textAlign: 'center'
    }
});
