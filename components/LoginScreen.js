import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { GlobalStoreContext } from '../store'

// import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Checkbox from '@mui/material/Checkbox';
// import CssBaseline from '@mui/material/CssBaseline';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';



const LoginScreen = () => {
    // const { store } = useContext(GlobalStoreContext);
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("username: " + username + " password: " + password);

        // const formData = new FormData(event.currentTarget);
        // store.setUsername(username);
        // store.setPassword(password);
        // ? do you want to actually authenticate the form data (username, password)
        // global store reducer to detect being logged in
        // store.setIsLoggedIn(true);
        // Navigate to dashboard page
        // navigation.navigate('Dashboard');
    }
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Sign in</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={text => setUsername(text)}
                value={username}
                placeholder="Username/ATTUID"
                autoCompleteType="username"
                autoFocus
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder="Password"
                autoCompleteType="password"
                secureTextEntry
            />
            <TouchableOpacity 
                onPress={handleSubmit} 
                style={{ padding: 10, backgroundColor: 'blue', marginTop: 10 }}
            >
                <Text style={{ color: 'white'}}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
}
export default LoginScreen;