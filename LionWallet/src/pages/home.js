import React,{useState} from 'react';
import { StyleSheet,SafeAreaView, Text, TouchableOpacity,View } from 'react-native';
import FlashCardList from '../controllers/FlashCardList';
import Icon from 'react-native-vector-icons/Ionicons'

export default function Home(){
    return (
      <View style={styles.container}>
       
       <View style={styles.header}>
         <View></View>
       <TouchableOpacity style={styles.icon}><Icon name="ios-add" size={50} color="red" /></TouchableOpacity>
       </View>
        <FlashCardList />
        
      </View>
    );
  }
  
const styles = StyleSheet.create({
    header:{
      backgroundColor: '#2A2E2C',
      height:50,
      marginTop:108,
      marginBottom:10,
      display:'flex',
      
    },
    container: {
      flex:1,
      backgroundColor: '#2A2E2C',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon:{
      justifyContent:'center',
      
    },
  });
  