/*  Author: Nguyen Phuc Chau
 *  Date write:09/06/2017
 *  Version: 0.0.1
 *  Description: Write header JSX with image and text using swiper library
*/

//=================================import react library=======================================
import React, { Component } from 'react';
import {
    Text, View, Image,Dimensions,
    TouchableOpacity, StyleSheet, ScrollView
} from 'react-native';

//=================================import picture for temporary UI===========================
import bgFood from '../../../Images/swiper_img/hd2.jpg';
import bgChicken from '../../../Images/summer_img/chicken.jpg';
//=================================Global variable===========================================
const { height, width } = Dimensions.get('window');
const imageWidth = width;

export default class DetailFood extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.ingredient}>
                    <Text style={styles.headerTitle}>Nguyên liệu</Text>
                    <View style={styles.wrapContent}>
                        <Text style={styles.bullet}>{'\u2022'}</Text>
                        <Text style={styles.content}>Một nhánh hành boa-rô</Text>
                    </View>
                    <View style={styles.wrapContent}>
                        <Text style={styles.bullet}>{'\u2022'}</Text>
                        <Text style={styles.content}>2 muỗng canh bơ lạt</Text>
                    </View>
                    <View style={styles.wrapContent}>
                        <Text style={styles.bullet}>{'\u2022'}</Text>
                        <Text style={styles.content}>2 cái đùi gà, hoặc một cái ức gà nhỏ</Text>
                    </View>
                    <View style={styles.wrapContent}>
                        <Text style={styles.bullet}>{'\u2022'}</Text>
                        <Text style={styles.content}>2 củ khoai tây lớn, hoặc 800gr khoai tây nhỏ xinh tươi</Text>
                    </View>
                    <View style={[styles.wrapContent, { marginBottom: 10 }]}>
                        <Text style={styles.bullet}>{'\u2022'}</Text>
                        <Text style={styles.content}>Muối tiêu, hành lá</Text>
                    </View>
                </View>

                <View style={styles.methodMaking}>
                    <Text style={styles.headerTitle}>Cách làm</Text>
                    <Image source={bgFood} style={styles.bgFood} />
                    <View style={styles.wrapContent}>
                        <Text style={styles.bullet}>{'\u2022'}</Text>
                        <Text style={styles.content}>
                            Gà làm sạch, chặt miếng vừa ăn sau đó ướp đều với ít muối,
                            tiêu, trộn điều cho thấm
                        </Text>
                    </View>
                    <View style={styles.wrapContent}>
                        <Text style={styles.bullet}>{'\u2022'}</Text>
                        <Text style={styles.content}>
                            Khoai tây, cà rốt gọt vỏ, cắt miếng vừa ăn. Hành tây bóc vỏ, cắt múi cau,
                            Tỏi bóc vỏ, băm nhỏ.{'\n'}
                            Bắc nồi lên bếp, cho 2 muỗng canh dầu ăn vào, thêm khoai tây, cà rốt vào đảo đều cho
                            cháy cạnh trong 4-5 phút, sau đó vớt ra thấm rán dầu
                        </Text>
                    </View>
                    <Image source={bgChicken} style={styles.bgFood} />
                    <Text style={[styles.content,{marginLeft:25}]}>Chúc các bạn thành công</Text>
                </View>
            </View>
        );
    }
}

//=================================using Extendsion StyleSheet===========================
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    ingredient: {
        borderBottomWidth: 2,
        borderBottomColor: 'skyblue'
    },
    headerTitle: {
        fontWeight: '600',
        color: '#000',
        marginHorizontal: 20,
        marginVertical: 15
    },
    bullet: {
        fontSize: 17,
        fontWeight: '700',
        marginHorizontal: 10
    },
    wrapContent: {
        flexDirection: 'row',
        marginVertical: 2,
        marginLeft: 20,
        marginRight:25,
    },
    content: {
        fontSize: 15,
        fontWeight: '400',
        color: '#000',
        
    },
    methodMaking: {
        marginBottom:10
    },
    bgFood: {
        width:width,
        height: 250,
        marginBottom:10
    }
});
