import React,{useState , useEffect} from 'react';
import { StyleSheet, Text, View , Image,FlatList ,TouchableOpacity,AsyncStorage,Clipboard} from 'react-native';
import QRCode from 'react-native-webview-qrcode'
import api from '../services/api';
import Balance from '../components/Balance';
import Icon from 'react-native-vector-icons/Feather'

Icon.loadFont();
export default function FlashCardList(){
  const [cards,setCards] = useState([]);
  const [balance,setBalance] = useState(0);


  


  

  useEffect(() =>{
    async function loadListas(){
        const iduser = await AsyncStorage.getItem('user_id');
        const response = await api.get(`/find/${iduser}`,{
         })
      
        setCards(response.data);
        console.log(response.data);
   }
    loadListas();
},[]);


async function Reload(){
  const iduser = await AsyncStorage.getItem('user_id');
  const response = await api.get(`/find/${iduser}`,{
   })

  setCards(response.data);
}


async function ReloadNew(){
  var valor = await AsyncStorage.getItem('new');
  if(valor==='true'){
      const iduser = await AsyncStorage.getItem('user_id');
      const response = await api.get(`/find/${iduser}`,{
      })

      setCards(response.data);
  }
  await AsyncStorage.setItem('new','false');
}

 const time = setInterval(()=>{
  ReloadNew();
},10000);



 const copyToClipboard = async (item) => {
  await Clipboard.setString(`${item}`);
  alert(`Copied to Clipboard:${item}`);
}


const DeleteWallet = async(item) =>{
  const apagar = await api.delete(`/findwallet/${item}`,{

  })
  if(apagar){
    alert(`item deleted`);
    Reload();
  }

}

  return(
        <View style={styles.container}>

          <FlatList
            style={styles.lista}
            data={cards}
            keyExtractor={item => item._id}
            vertical
            alwaysBounceVertical={false}
            renderItem={( {item })=>(
              <View style={styles.card}>  
              <View style={styles.localbox}>
              <Text style={styles.local}>{item.exchange}</Text>
              </View>
              <Balance wallet={item.wallet}/>
             
              <QRCode value={item.wallet} 
              size={170} 
              imgUrl={'https://as1.ftcdn.net/jpg/01/13/53/80/500_F_113538040_rMkFe0XIyj4v9QFTPjDr0QIwJjazfigN.jpg'}
              />
              <Text style={styles.wallet}>{item.wallet}</Text>
           
              <View style={styles.cardbottom}>
              <TouchableOpacity style={styles.dollar} onPress={()=>DeleteWallet(item.wallet)}><Icon name="trash" size={30} color="red" /></TouchableOpacity> 
               <TouchableOpacity style={styles.copy} onPress={()=>copyToClipboard(item.wallet)}><Icon name="copy" size={30} color="red" /></TouchableOpacity>
               </View>
              </View>

              )}
              />
            

        </View>
      );
}






const styles = StyleSheet.create({
  lista:{
    width:380,
    marginBottom:65,
    backgroundColor:'#2A2E2C',
  },
   pergunta:{
    fontSize:12,
   },
   options:{
     fontSize:16,
     marginLeft:2,
     marginRight:5,
     marginBottom:5,
   },
   card:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center', 
    height:310,
    marginBottom:30,
    borderBottomWidth:1,
    borderTopWidth:1,
   borderLeftWidth:3.5,
   borderRightWidth:3.5,
    backgroundColor:'#fff',
     borderRadius:12, 
     borderColor:'#bf1a2c', 
     shadowColor: "#000",
     shadowOffset: {
       width: 0,
       height: 2,
     },
     shadowOpacity: 0.23,
     shadowRadius: 2.62,
     elevation: 4,
   },
   cardbottom:{
     display:'flex',
     flexDirection:'row',
     justifyContent:'space-around',
    width:380,
    marginTop:12,

  },
   dollar:{
    //alignItems:'center',
   },
   copy:{
    //alignItems:'center',
  },
  wallet:{
    fontSize:13,
    marginTop:7,
    marginBottom:2,
  },
  local:{
    fontSize:13,
    fontWeight:'bold',
    color:'#000',

  },
  localbox:{
    width:350,
  },
  });




  /*
  https://blockchain.info/q/addressbalance/1MUz4VMYui5qY1mxUiG8BQ1Luv6tqkvaiL consultar balanço da carteira
  
  */