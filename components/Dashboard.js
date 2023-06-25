import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { Avatar, Button, TextField } from 'react-native-paper';
import { GlobalStoreContext } from '../store'

import PreCall from './PreCall';


const DashboardScreen = () => {
  const { store } = useContext(GlobalStoreContext);
  const navigation = useNavigation();

  const handleProfileClick = (event) => {
    navigation.navigate('Dashboard/Profile');
  }

  const handleLogout = (event) => {
    event.preventDefault();
    navigation.navigate("LoginScreen");
  }

  return (
      <View style={styles.container}>
          <View style={styles.profileContainer}>
              {store.profilePic ? (
              <Avatar.Image
                source={{ uri: store.profilePic }}
                style={styles.profileImage}
                resizeMode="cover"
              />
              ) : (
              <Avatar.Image
                source={require('../assets/defaultpfp.png')}
                style={styles.profileImage}
                resizeMode="cover"
              />
              )}
              <View style={styles.profileContent}>
              
              <Text style={styles.profileField}>Username: {store.username}</Text>
              <Text style={styles.profileField}>Phone: {store.phone}</Text>
              <Text style={styles.profileField}>Occupation: Real Estate Agent</Text>
              </View>
          </View>
          
          <TouchableOpacity
            onPress={handleLogout}
            style={styles.logoutButton}
          >
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>

          <BottomTabNavigator
        
          />
      </View>
    );
};

const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator
        initialRouteName="Dashboard"
        activeColor="#00a8e0"
        inactiveColor="white"
        shifting={true}
        barStyle={styles.bottomTabNav}
    >
      <Tab.Screen 
        name="Dashboard" 
        component={Dashboard} 
        options={{tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26}/> )}}
      />

      <Tab.Screen 
        name="Set Up Call" 
        component={PreCall}
        options={{tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="phone" color={color} size={26}/> )}}
      />
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
 },
 profileContainer: {
   width: '100%',
   height: '50%',
   flex: 1,
   alignItems: 'center',
   backgroundColor: 'black',
   borderRadius: 15
  
 },
 profileContent: {
  marginTop: '20%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'left',
  'profileImage': {
    alignItems: 'center'
  }
 },
 avatar: {
   backgroundColor: 'transparent',
   justifyContent: 'center',
   alignItems: 'center',
   resizeMode: 'cover'
 },
 profileImage: {
  width: '25%',
  height: '25%',
  alignItems: 'center',
  marginTop: '20%',

 },
 profileField: {
   fontSize: 16,
   marginBottom: 10,
   color: '#00a8e0',
   fontWeight: 'bold'
 },
 formContainer: {
   borderRadius: 4,
   margin: 10,
   justifyContent: 'center',
   alignItems: 'center',
 },
 questionText: {
   fontSize: 16,
   marginBottom: 10,
 },
 textField: {
   width: '100%',
 },
 logoutButton: {
   marginTop: 20,
   width: 175,
   height: 50,
   borderColor: 'white',
   backgroundColor: 'white',
   borderRadius: 10,
   color: 'white',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
  
 },
 logoutText: {
  color: 'red',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold'
 },
 bottomTabNav: {
  display: 'flex',
  bottom: 0,
  
  position: 'absolute',
  backgroundColor: 'black'
 }
});

export default Dashboard;