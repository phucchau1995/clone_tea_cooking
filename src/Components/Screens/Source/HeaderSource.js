import React, { Component } from 'react';
import { Text,View, StyleSheet } from 'react-native';

export default class HeaderSource extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>BẾP GIA ĐÌNH</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00cc66',
        padding:5
        
    },
    text:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'400',
        color:'#fff',
        fontFamily:'Roboto'
    }
});
