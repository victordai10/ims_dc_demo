import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { useNavigation } from '@react-navigation/native';
import { GlobalStoreContext } from '../store';

const PreCall = () => {
    const [callee, setCallee] = useState("");
    const [msg, setMsg] = useState("");
    const navigation = useNavigation();
    const { store } = useContext(GlobalStoreContext);

    const handleSetUpCall = (event) => {
        event.preventDefault();
        store.setCallee(callee);
        store.setMsg(msg);
        //EDIT LATER TO SET UP CONNECTION SOCKET using socket io 
        navigation.navigate("InCall");
    }

    return (
        <ScrollView showsVerticalScrollIndicator={true} persistentScrollbar={true}>
        <View style={styles.page}>
            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>Who would you like to set up a call with?</Text>
            </View>
            <View style={styles.textFieldContainer}>
                <TextInput
                    style={styles.textField}
                    placeholder='Username of Callee...'
                    value={callee}
                    onChangeText={text => setCallee(text)}
                    autoCompleteType='Callee'
                    autoFocus
                />
            </View>
            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>Write a brief message describing the agenda of your call...</Text>
            </View>
            <View style={styles.messageContainer}>
                <TextInput
                    style={styles.textField}
                    multiline={true}
                    placeholder="Brief Message..."
                    value={msg}
                    onChangeText={text => setMsg(text)}
                    autoCompleteType='Message'
                    autoFocus
                    returnKeyType="done"
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                style={styles.button}
                onPress={handleSetUpCall}
                >
                    <Text style={styles.buttonText}>Set Up Call</Text>
                </TouchableOpacity>
            </View>
        </View> 
        </ScrollView>
        
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

export default PreCall;