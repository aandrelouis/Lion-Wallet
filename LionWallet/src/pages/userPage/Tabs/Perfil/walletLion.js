import React,{useState , useEffect} from 'react';
import { StyleSheet,SafeAreaView,TouchableOpacity,AsyncStorage, Text, View } from 'react-native';
import axios from 'axios';
import QRCode from 'react-native-webview-qrcode'
import api from '../../../../services/api';
import Balance from '../../../../components/Balance';
import Icon from 'react-native-vector-icons/Feather'

export default function World() {
  const [adress,setAdress] = useState('')
  const [secret,setSecret] = useState('')
  const [card,setCards]  = useState('')
  const titulo='< Wallet Local />'
  useEffect(() =>{
    async function loadListas(){
        const iduser = await AsyncStorage.getItem('user_id');
        const response = await api.get(`/createwallet/${iduser}`,{
         })
      
        setAdress(response.data.addr);
        setSecret(response.data.secret)
   }
    loadListas();
},[]);





  return (
      <View style={styles.container}>
       
       <View style={styles.cards}>
      <Text style={styles.titulo}>{titulo}</Text>

        <View style={styles.caixasbox}>
        

        <View style={styles.box}>
        <Text style={styles.title}>Sua Wallet:</Text>
        <View style={styles.caixaitem}>
          <View style={styles.caixas}>
            <Text>13HKzRDKZJjm9NjuFUFDyNfG8ctboDaUi2</Text>
            </View>
            <View style={styles.caixaicone}> 
            <TouchableOpacity style={styles.copy} ><Icon name="copy" size={30} color="#cc0000" /></TouchableOpacity>
            </View>
          </View>
          </View>
        
          <View style={styles.box}>
          <Text  style={styles.title}>Private Key:</Text>
          <View style={styles.caixaitem}>
          <View style={styles.caixas}>
            <Text>KzZb75TGZbEvbW8rbWo8TMb14ZQgWPYjq5Xy3R1xYExouzgbEMXU</Text>
            </View>
            <View style={styles.caixaicone}> 
            <TouchableOpacity style={styles.copy} ><Icon name="copy" size={30} color="#cc0000" /></TouchableOpacity>
            </View>
          </View>
          </View>

          <View style={styles.caixaqr}>
          <QRCode value={'13HKzRDKZJjm9NjuFUFDyNfG8ctboDaUi2'} 
              size={220} 
              imgUrl={'https://as1.ftcdn.net/jpg/01/13/53/80/500_F_113538040_rMkFe0XIyj4v9QFTPjDr0QIwJjazfigN.jpg'}
              />
            </View>
          
          
          <View style={styles.balancebox}>
          <Balance />
          </View>
          </View>

       </View>
  
      </View>
    );
  }
  
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#2A2E2C',
    },
    titulo:{
      fontSize:25,
      color:'#fff',
      alignSelf:'center',
    },
    caixas:{
      width:330,
      borderWidth:1,
      borderColor:'#cc0000',
      borderRadius:7,
      backgroundColor:'#cc0000',
      flexDirection:'row',

    },
    caixasbox:{
      justifyContent:'center',
      alignItems:'center',
    },
    copy:{
      
    },
    caixaitem:{
      flexDirection:'row',

    },
    box:{
      marginTop:30,
    },
    caixaicone:{
     marginLeft:2,
    },
    caixaqr:{
      marginTop:50,
      borderWidth:3,
      borderColor:'#000',
    },
    balancebox:{
      marginTop:100,
      height:40,
      borderWidth:1,
      borderColor:'#cc0000',
      backgroundColor:'#cc0000',
      borderRadius:8,
    },
    title:{
      fontSize:20,
      color:'#fff',
      fontWeight:'bold',
    },
  });
  