import React,{useState , useEffect} from 'react';
import { StyleSheet,SafeAreaView, Text, View } from 'react-native';
import FlashCardList from '../controllers/FlashCardList';
import axios from 'axios';

export default function World() {
  const [bit,setBit] = useState(10) 

  useEffect(() =>{
    async function loadBalance(){
      const value = await axios.get('https://blockchain.info/q/addressbalance/34Jpa4Eu3ApoPVUKNTN2WeuXVVq1jzxgPi')
    
      setBit(value.data);
      console.log(balance)
    }
    loadBalance();
  },[]);
  
  
  
  
  return (
      <View style={styles.container}>
       
       <View style={styles.header} />
        
        
      </View>
    );
  }
  
const styles = StyleSheet.create({
    header:{
      backgroundColor: '#2A2E2C',
      borderColor:'green',
      height:50,
      width:390,
      marginTop:108,
      marginBottom:10,
      borderBottomWidth:3,
      
    },
    container: {
      flex:1,
      backgroundColor: '#2A2E2C',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });
  