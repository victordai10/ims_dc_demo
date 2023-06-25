import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { GlobalStoreContext } from '../store';
{/* <View style={styles.formContainer}>
            <Text style={styles.questionText}>Who would you like to set up a call with?</Text>
            <TextInput
              style={styles.textField}
              placeholder='Username of Callee'
              autoCompleteType='Callee'
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
          </View> */}
const PreCall = () => {
    return (
        <View>
            <Text>Testing PreCall</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({

});

export default PreCall;