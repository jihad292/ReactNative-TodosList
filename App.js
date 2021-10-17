import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity,Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import HEADER from './components/header';
import TODOS from './components/todos';
import AddTodos from './components/addTodos';
import SandBox from './components/sandBox';

export default function App() {
  
  const [todos,setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'watch a movie', key: '3' }

  ]);

  const filterTodos = (keyId)=>{
    setTodos(
      (prevTodos)=>{
        return prevTodos.filter(todos => todos.key != keyId)
      }
    );
  }

  const addTodos = (text)=>{
    if(text.length > 2){
      setTodos(
        (prevTodos)=>{
          return [
            {text:text, key:Math.random().toString()},
            ...prevTodos
          ]
        }
      );}
      else{
        Alert.alert('OOPS!','Todos must be at least 3 caracters!',
          [{text:'Understood', onPress: ()=>console.log('alert  closed')}]
        );
      }
  }

  return (
    // <SandBox />
    <TouchableWithoutFeedback onPress={
      ()=>{
        console.log('Keyboard dismissed');
        Keyboard.dismiss();
      }
    }>
    <View style={styles.container}>
      <HEADER />  
      <View style={styles.content}>
        <AddTodos addTodos={addTodos} />
        <View style={styles.list}>
        <FlatList 
              data={todos}
              keyExtractor={(item)=>item.key}
              renderItem={
                ({item})=>{
                  return (
                    <TODOS item={item} filterTodos={filterTodos}/>
                  )
                }
              }
            />
        </View>
            
        </View>

    </View>
    </TouchableWithoutFeedback>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    marginTop:40,
    marginHorizontal:20,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  content:{
    flex:1,

  },

  list:{
    padding:12,
    flex:1,
  }
  
  
});
