import React,{ useState, Component } from 'react';
import { View, Text,StyleSheet , TextInput, AsyncStorage, TouchableOpacity, Alert, Image, StatusBar} from 'react-native';
import { useRoute,useNavigation} from '@react-navigation/native'
import api from '../services/api';

export default function RegisterUser({navigation}){
    const [email , setEmail] = useState('');
    const [senha,setSenha] = useState('');
   
    const route = useRoute();
    const navigator = useNavigation(); 
   
    async function handleSubmit(){ 
        const response = await api.post('/user',{
            email,
            senha,
        })
        if(response){
            Alert.alert('Conta Criada');
            navigator.navigate('Login');
        }
    }


    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#bf1a2c">
                setStyleStatusBar(styleTypes['light-content']);
            </StatusBar>

            <View style={styles.form}>
                <Text style={styles.titulo}>Cadastro: </Text>
                 <TextInput 
                    style={styles.input}
                    placeholder='Seu Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                
                <TextInput 
                    style={styles.input}
                    placeholder='Sua Senha'
                    value={senha}
                    onChangeText={text => setSenha(text)}
                />
                <TouchableOpacity onPress={handleSubmit} style={styles.button}>     
                    <Text style={styles.buttontext}>Cadastrar</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}




const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#2A2E2C' 
},
header:{
    justifyContent: 'space-between',
    alignItems: 'center',
},
form:{

},
input:{
    paddingHorizontal: 15,
    backgroundColor:'#2A2E2C',
    width: 345,
    borderRadius: 8,
    height: 50,
    borderWidth:1.5,
    borderColor:'#bf1a2c',
    marginVertical: 10,
    color: '#fff',
},
texto:{
    color: '#fff',
},
titulo:{
    fontSize: 19,
    color: '#fff',
    marginBottom: 10,
},

button:{
  marginTop:5,
  backgroundColor:'#bf1a2c',
  borderColor:'#bf1a2c',
  borderWidth:1.5,
  width: 345,
  borderRadius: 5,
  height: 45,
  alignItems: 'center',
  justifyContent: "center",
},
caixa:{
  paddingHorizontal: 15,
    backgroundColor:'#2A2E2C',
    width: 345,
    borderRadius: 8,
    height: 50,
    borderWidth:1.5,
    borderColor:'#bf1a2c',
    marginVertical: 10,
    color: '#fff',
    alignItems: 'center',
    justifyContent: "center",
},
  });
  