import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import UserPage from './pages/userPage';
import RegisterWallet from './pages/registerWallet'
import RegisterWalletFinal from './pages/registerWalletFinal'
import Login from './pages/Login';
import RegisterUser from './pages/registerUser';
import Create from './pages/Create';
const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
     
      <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="UserPage" component={UserPage} />
        <AppStack.Screen name="RegisterUser" component={RegisterUser} />
        <AppStack.Screen name="RegisterWallet" component={RegisterWallet} />
        <AppStack.Screen name="RegisterWalletFinal" component={RegisterWalletFinal} />
        <AppStack.Screen name="Create" component={Create} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
