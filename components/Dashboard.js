import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { GlobalStoreContext } from '../store'


const Dashboard = () => {
    const { store } = useContext(GlobalStoreContext);
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
            <Text>ooga booga</Text>
        </View>
    );
}

export default Dashboard;