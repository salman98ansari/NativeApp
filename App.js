import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
//import {uuid} from 'uuidv4';
import {v4 as uuid} from 'uuid';


import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';



const App = () =>{
  const [items , setItems]= useState([
    {id: uuid(), text:'Milk'},
    {id: uuid(), text:'eggs'},
    {id: uuid(), text:'Bread'},
    {id: uuid(), text:'Juice'},
  ]);

  
  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem =(text) =>{
    if(!text){
      Alert.alert('No item 😕', 'Please Enter an Item', [{text:'OK'}] );
    }
    else{
      setItems(prevItems => {
        return[{id:uuid(), text}, ...prevItems];
      });
    }

  }

  return(
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header/>
      <AddItem addItem={addItem}/>
      <FlatList 
      data={items}
      renderItem={({item}) => 
      <ListItem 
        item={item}
        deleteItem={deleteItem}
        />}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:60,
  },
});


export default App;

