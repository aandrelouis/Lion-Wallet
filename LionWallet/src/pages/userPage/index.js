import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, AsyncStorage, ImageBackground, Alert, FlatList } from 'react-native';
import { Feather } from 'react-native-vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Tabs/Explorar/home';
import Wallet from './Tabs/Perfil/walletLion';


import styles from './styles';


const Tab = createBottomTabNavigator();

const BlankSpace = () => {
  return null;
}

export default function UserPage({ navigation }) {

  return (
    <Tab.Navigator tabBarOptions={{
      inactiveTintColor: '#59595C',
      activeTintColor:'#bf1a2c',
      color:'#bf1a2c',
      labelStyle: {
        fontSize: 12,
        marginBottom: 10,
        marginTop: -5,
      },
      style: { height: 50, justifyContent: "space-between" },
      keyboardHidesTabBar: true,
    }} >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: 'Create Wallet',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pen" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


/*
 <Tab.Screen
        name="Home"
        component={home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="World"
        component={world}
        options={{
          tabBarLabel: 'Create Wallet',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pen" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>

*/