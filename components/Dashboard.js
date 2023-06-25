import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { Avatar, Button, TextField } from 'react-native-paper';
import { GlobalStoreContext } from '../store'

import PreCall from './PreCall';


const Profile = () => {
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
      </View>
    );
};

const Tab = createBottomTabNavigator();

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
        name="Profile" 
        component={Profile} 
        options={{tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26}/> )}}
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
   height: '40%',
   flex: 1,
   alignItems: 'center',
   backgroundColor: '#00a8e0',
  //  borderRadius: 15
  
 },
 profileContent: {
  marginTop: '20%',
  display: 'flex',
  justifyContent: 'center',
 },
 avatar: {
   backgroundColor: 'transparent',
   justifyContent: 'center',
   alignItems: 'center',
   resizeMode: 'cover'
 },
 profileImage: {
  // width: '25%',
  // height: '25%',
  alignItems: 'center',
  marginTop: '20%',

 },
 profileField: {
   fontSize: 16,
   marginBottom: 10,
   color: 'black',
   fontWeight: 'bold'
 },
 logoutButton: {
   marginTop: 20,
   marginBottom: 20,
   width: '45%',
   height: 50,
   borderColor: 'white',
   backgroundColor: 'white',
   borderRadius: 10,
   color: 'white',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
  'onPress': {
    backgroundColor: 'black',
    // transform: 'scale(1.05)',
    // transition: 'all 0.3s',
  }
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
  backgroundColor: 'black',
 }
});

export default Dashboard;