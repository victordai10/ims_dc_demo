import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Button, TextField } from 'react-native-paper';
import { GlobalStoreContext } from '../store'

const Dashboard = () => {
  const { store } = useContext(GlobalStoreContext);
  const navigation = useNavigation();


  const handleProfileClick = (event) => {
    navigation.navigate('Dashboard/Profile');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //set up call
  }

  return (
      <View style={styles.container}>
          <View style={styles.profileContainer}>
            <Avatar style={styles.avatar}>
              {store.profilePic ? (
              <Image
                source={{ uri: store.profilePic }}
                style={styles.profileImage}
                resizeMode="cover"
              />
              ) : (
              <Image
                source={require('../assets/defaultpfp.png')}
                style={styles.profileImage}
                resizeMode="cover"
              />
              )}
            </Avatar>
            <Text style={styles.profileField}>Username: {store.username}</Text>
            <Text style={styles.profileField}>Phone: {store.phone}</Text>
            <Text style={styles.profileField}>Occupation: Real Estate Agent</Text>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.questionText}>Who would you like to set up a call with?</Text>
            <TextField
              style={styles.textField}
              margin="normal"
              required
              fullWidth
              id="callee"
              label="Enter Callee's Username/ATTUID"
              name="callee"
              autoComplete="current-callee"
              autoFocus
            />
            <Button
              style={styles.button}
              type="submit"
              variant="contained"
              onPress={handleSubmit}
            >
              Set Up Call
            </Button>
          </View>
      </View>
    );
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
 },
 profileContainer: {
   alignItems: 'center',
   marginBottom: 20,
 },
 avatar: {
   width: 100,
   height: 100,
   backgroundColor: 'transparent',
   justifyContent: 'center',
   alignItems: 'center',
 },
 profileImage: {
   width: '100%',
   height: '100%',
 },
 profileField: {
   fontSize: 16,
   marginBottom: 10,
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
 button: {
   marginTop: 20,
   width: 175,
   height: 50,
   backgroundColor: 'lightblue',
   color: 'black',
 },
});

export default Dashboard;