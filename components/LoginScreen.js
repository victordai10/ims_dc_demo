import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { useNavigation } from '@react-navigation/native';
import { GlobalStoreContext } from '../store';

const LoginScreen = () => {
 const { store } = useContext(GlobalStoreContext);
 const navigation = useNavigation();
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');

 const handleSubmit = () => {
   console.log("username: " + username + " password: " + password);
   store.setUsername(username);
   store.setPassword(password);
   navigation.navigate('Dashboard');
 };

 return (
    <View style={styles.page} >
        <View style={styles.loginBox}>
          <KeyboardAwareScrollView style={{flex: 1}}>
            <Image
                source={require('../assets/attLogo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Web RTC Demo App</Text>
            <Text style={styles.signInText}>Sign in</Text>
            
            <TextInput
                style={styles.inputs}
                onChangeText={text => setUsername(text)}
                value={username}
                placeholder="Username/ATTUID"
                autoCompleteType="username"
                autoFocus
            />
            <TextInput
                style={styles.inputs}
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder="Password"
                autoCompleteType="password"
                secureTextEntry
            />
           
            <TouchableOpacity
                onPress={handleSubmit}
                style={styles.signInButton}
            >
            <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    </View>
 );
};

const styles = StyleSheet.create({
 page: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#00a8e0'
 },
 loginBox: {
   width: '85%',
   height: '70%',
   borderRadius: 15,
   backgroundColor: 'white',
   justifyContent: 'center',
   alignItems: 'center',
   paddingHorizontal: 10,
   paddingVertical: 30,
 },
 logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
 },
 title: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: 'bold'
 },
 signInText: {
   fontSize: 18,
   fontWeight: 'bold',
   marginBottom: 20,
 },
 inputs: {
   height: 40,
   width: '100%',
   borderColor: 'silver',
   borderWidth: 1,
   marginBottom: 10,
   paddingHorizontal: 10,
 },
 signInButton: {
   padding: 10,
   backgroundColor: '#00a8e0',
   marginTop: 10,
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 5,
 },
 signInButtonText: {
   color: 'white',
   fontSize: 16,
   fontWeight: 'bold',
 },
});

export default LoginScreen;