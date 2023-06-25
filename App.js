import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen'; 
import Dashboard from './components/Dashboard';
import InCall from './components/InCall';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
 
import { GlobalStoreContextProvider } from './store'

const Stack = createStackNavigator();

const App = () => {
  return (
      <GlobalStoreContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
              headerShown: false,
              cardStyle: { backgroundColor: '#00a8e0' },
            }}
          >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="Dashboard" component={Dashboard}/>
            <Stack.Screen name="InCall" component={InCall}/>
          </Stack.Navigator>
        </NavigationContainer>
      </GlobalStoreContextProvider>
  );
};

export default App;