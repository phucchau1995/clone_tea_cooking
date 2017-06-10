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
import summerIcon_5 from '../../../Images/summer_img/summer_4.jpg';
import summerIcon_6 from '../../../Images/summer_img/summer_5.jpg';
import summerIcon_7 from '../../../Images/summer_img/summer_5.jpg';
import summerIcon_8 from '../../../Images/summer_img/summer_5.jpg';
import summerIcon_9 from '../../../Images/summer_img/summer_5.jpg';
import summerIcon_10 from '../../../Images/summer_img/summer_5.jpg';

//=================================Global variable===========================================
const { height, width } = Dimensions.get('window');
const imageWidth = width;
const imageHeight = imageWidth / 3;
var tmp_array = [
    { key: "1", value: summerIcon_1, description: 'Món ăn mặn' },
    { key: "2", value: summerIcon_2, description: 'Món ăn sáng' },
    { key: "3", value: summerIcon_3, description: 'Món canh' },
    { key: "4", value: summerIcon_4, description: 'Món ăn vặt' },
    { key: "5", value: summerIcon_5, description: 'Món ngon cuối tuần' },
    { key: "6", value: summerIcon_6, description: 'Món chay' },
    { key: "7", value: summerIcon_7, description: 'Đồ uống' },
    { key: "8", value: summerIcon_8, description: 'Món bánh' },
    { key: "9", value: summerIcon_9, description: 'Món ngon ngày lễ' },
    { key: "10", value: summerIcon_10, description: 'Món ngon các nước' },
];
export default class ListCollection extends Component {
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
                <ListView enableEmptySections
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
                        .cloneWithRows(tmp_array)}
                    contentContainerStyle={styles.listProduct}
                    renderRow={product => (
                        <TouchableOpacity style={styles.product}>
                            <Image source={product.value} style={styles.imgProduct} />
                            <Text style={styles.textProduct}>{product.description}
                            </Text>
                        </TouchableOpacity>
                    )} />
            </View>
        );
    }
}


//=================================using Extendsion StyleSheet===========================
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    listProduct: {
        marginTop:10,
        marginBottom:10,
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent:'center',
    },
    product: {
        marginHorizontal: 5,
        width: 160,
        flexWrap:'wrap',
        justifyContent:'center',
        marginBottom:10
    },
    imgProduct: {
        width: 160,
        height: 120,
    },
    textProduct: {
        flexWrap: 'wrap',
        textAlign:'center'
    }
});
