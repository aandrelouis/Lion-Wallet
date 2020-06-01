import React,{useState , useEffect} from 'react';
import { StyleSheet, Text, View , Image,FlatList} from 'react-native';
import axios from 'axios';

export default function Balance(props){
  const { wallet } = props;
  const [balance,setBalance] = useState(0);
  
  console.log('mostarr balanço')
console.log(balance)
  useEffect(() =>{
    async function loadListas(){
      const value = await axios.get(`https://api.blockcypher.com/v1/btc/main/addrs/${wallet}/balance`)

      setBalance(value.data.balance);
      }
    loadListas();
},[]);


 

  return(
        <View style={styles.balancebox}>
            <Text style={styles.balance}>Balance:{balance}</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    balancebox:{
      marginBottom:10,
    },
    balance:{
      fontSize:18,
    },
    numero:{
      color:'#fff',
    },
  });


  /*
salvar 
  // const value = await axios.get(`https://blockchain.info/q/getreceivedbyaddress/${wallet}`)
  */