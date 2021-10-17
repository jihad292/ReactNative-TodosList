import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Todos({item,filterTodos}){
    return(  
            <TouchableOpacity onPress={()=>filterTodos(item.key)}>
                <View style={styles.Item}>
                <MaterialIcons name="delete" size={20} color="black" />
                <Text style={styles.itemText}>{item.text}</Text>
                </View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Item:{
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        flexDirection: 'row',
    },

    itemText:{
        marginLeft:10,
    },
    


})