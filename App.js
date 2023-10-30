import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { initializeApp } from 'firebase/app'; // Import initializeApp

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM5cPvTKm78hmKivndsB0g0Ok2DuNjVnk",
  authDomain: "cmpe131proj.firebaseapp.com",
  projectId: "cmpe131proj",
  storageBucket: "cmpe131proj.appspot.com",
  messagingSenderId: "167110044900",
  appId: "1:167110044900:web:ce47fca8d500bc260d10f1",
  measurementId: "G-P78XFVKW6S"
};

const app = initializeApp(firebaseConfig); 

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}