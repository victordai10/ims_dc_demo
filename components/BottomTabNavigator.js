import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from './Dashboard';
import LoginScreen from './LoginScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarStyle: { position: 'absolute' },
            tabBarActiveBackgroundColor: '#00a8e0',
            tabBarInactiveBackgroundColor: 'white',
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: '#00a8e0'
          }}
    >
      <Tab.Screen name="Profile" component={Dashboard} />

      <Tab.Screen name="Set Up Call" component={LoginScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({

});

export default BottomTabNavigator;