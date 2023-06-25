import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { useNavigation } from '@react-navigation/native';
import { GlobalStoreContext } from '../store';

const InCall = () => {
    return(
    <View>
        <Text>Hahflsjfk</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    questionContainer: {
        borderRadius: 10,
        width: '80%',
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#00a8e0'
    },
    questionText: {
        fontSize: 20,
        margin: 10,
    },
    textFieldContainer: {
        borderRadius: 10,
        width: '80%',
        margin: 10,
        alignItems: 'center',
        backgroundColor: '#90ee90'
        
    },
    textField: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        fontSize: 20,
        margin: 10,
        color: 'black'
    },
    messageContainer: {
        borderRadius: 10,
        width: '80%',
        margin: 10,
        alignItems: 'center',
        backgroundColor: '#90ee90'
    },
    buttonContainer: {
        margin: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: '45%',
        height: 50,
        backgroundColor: 'gray',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',      
    },
    buttonText: {
        padding: 10,
        fontSize: 20,
        color: 'black'
    }
});

export default InCall;