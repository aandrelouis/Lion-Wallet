import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation} from '@react-navigation/native'

export default function RegisterWallet({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [wallet,setWallet] = useState('');
  const navigator = useNavigation(); 
  
console.log(wallet)
    function handleNavigate(){
      var wallet2=wallet.replace("bitcoin:","");
      console.log(wallet2);
        navigator.navigate('RegisterWalletFinal',{wallet});
        setWallet('');
        setScanned(false)
    }

    function Clean(){
      setScanned(false)
    }

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setWallet(data)
    
    alert(`Codigo Copiado:`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && <Button title={'Escanear Novamente'} onPress={() => Clean()} />}
      {scanned && <Button style={styles.send} title={'Seguir'} onPress={() => handleNavigate()} />}
    </View>
  );
}


const styles = StyleSheet.create({
    send:{
        marginTop:5,
        backgroundColor:'red',
    },
  });
  


  /*
  problema no codigo não esta atualizando o qr code
  
  */