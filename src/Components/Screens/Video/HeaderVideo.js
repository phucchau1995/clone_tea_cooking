import React, { Component } from 'react';
import { Text,View, StyleSheet } from 'react-native';

export default class HeaderVideo extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>VIDEO</Text>
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
        padding:10
        
    },
    text:{
        textAlign:'center',
        fontSize:24,
        fontWeight:'400',
        color:'#fff',
        fontFamily:'Roboto'
    }
});
