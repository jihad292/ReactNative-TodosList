import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function addTodos({addTodos}){

    
    const [text,setText] = useState('');

    const changeHadler = (val)=>{
        setText(val);
        
    }

    return(
        <View style={styles.container}> 
            <TextInput style={styles.Input} placeholder='add Todos' onChangeText={(val)=>changeHadler(val)} />
            <Button color='coral' title='add Todos' onPress={()=>addTodos(text)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:16,

    },

    Input:{
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        paddingHorizontal:8,
        paddingVertical:6,


    }
})