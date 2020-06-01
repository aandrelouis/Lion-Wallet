import React,{ useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet, Alert, Image, StatusBar,AsyncStorage} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../services/api';
import logo from '../assets/lion.png'

export default function Login({ navigation }) {
    const [email , setEmail] = useState('');
    const [senha , setPassword] = useState('');
    const navigator = useNavigation(); 
    



    useEffect(() => {
        AsyncStorage.getItem('user_id').then(user => {
            if (user) {
                //navigation.navigate('UserPage');
            }
        })
    }, []);


    async function handleSubmitLogin(){
            try{
            const response = await api.post('/login',{
                email,
                senha,
            });
           
                const {iduser} = response.data;
                Alert.alert('Usuario Logado');
                await AsyncStorage.setItem('user_id',iduser.toString()); 
                console.log(iduser)
                navigation.navigate('UserPage');
            
            }catch (_err){
                Alert.alert('Ususario não cadastrado');
            }
        
   }

    function handleSubmitCadastrar(){
        navigation.navigate('RegisterUser');
    }

    return(
        <View style={styles.container}>
            <View style={styles.logo}>
             <Image  source={logo}  />
             </View>
            <StatusBar backgroundColor="#bf1a2c">
                setStyleStatusBar(styleTypes['light-content']);
            </StatusBar>
            <View style={styles.header}>
               
            </View>

            <View style={styles.form}>
                <Text style={styles.titulo}>Lion Wallet</Text>

                <TextInput 
                    style={styles.input}
                    placeholder='Digite seu E-mail'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    autoCapitalize="none"
                    autoCorrect={false}                    
                />

                <TextInput 
                    style={styles.input}
                    placeholder='Digite sua Senha'
                    value={senha}
                    onChangeText={text => setPassword(text)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />  
           
                <TouchableOpacity onPress={handleSubmitLogin} style={styles.button}>     
                    <Text style={styles.buttontext}>Logar</Text>
                </TouchableOpacity>
           
                

            <View>
                <TouchableOpacity onPress={handleSubmitCadastrar} style={styles.cadastro}>     
                    <Text style={styles.textcadastro}>Cadastrar-se > </Text>
                </TouchableOpacity>
            </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#252a28' 
    },
    logo:{
       width:200,
       height:180,
       backgroundColor:'#2A2E2E',
    },
    form:{

    },
    input:{
        paddingHorizontal: 15,
        backgroundColor:'#2A2E2C', 
        width: 330,
        borderRadius: 8,
        height: 50,
        borderWidth:1.5,
        borderColor:'#bf1a2c',
        color: '#fff',
        marginBottom: 20,
    },

    texto:{
        color: '#fff',
    },
    titulo:{
        fontSize: 19,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 15,
    },
    
    button:{
        backgroundColor:'#bf1a2c',
        borderColor:'#bf1a2c',
        borderWidth:1.5,
        width: 330,
        borderRadius: 8,
        height: 50,
        alignItems: 'center',
        justifyContent: "center",
      },
    buttontext:{
        fontSize: 18,
        fontWeight: '700',
    },
    cadastro:{
        marginTop: 40,
    },
    textcadastro:{
        color:'#bf1a2c',
        fontSize: 16,

    },
    logar:{
        color:"#fff",
        fontSize:13,
        marginBottom: 10,
    },
});