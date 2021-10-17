import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.text}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        marginTop: 5,
        padding: 20,
        backgroundColor:'coral',

    },

    text:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
    }
})