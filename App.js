import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


/**
 * import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from "./components/LoginScreen";
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import PreCall from './components/PreCall';
import InCall from './components/InCall';

import { GlobalStoreContextProvider } from './store'
import { Global } from '@emotion/react';

function App() {
  

  return (
    <div class='page'>
        <GlobalStoreContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<LoginScreen/>}/>
              <Route path="/Dashboard" element={<Dashboard/>}/>
              <Route path="/Dashboard/Profile" element={<Profile/>}/>
              <Route path="/PreCall" element={<PreCall/>}/>
              <Route path="/InCall" element={<InCall/>}/>
            </Routes>
          </Router>
        </GlobalStoreContextProvider>
      

      </div>
      )
    }
    
    export default App;
    
 */