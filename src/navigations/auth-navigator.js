/* eslint-disable prettier/prettier */
import React from 'react';
import {useEffect} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';
import SplashScreen from '../screens/SplashScreen';
// import DetailScreen from '../screens/details/DetailScreen';
// import Dashboard from '../screens/dashboard/Dashboard';
// import Profile from '../screens/profile/Profile';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        options={{headerShown: false}}
        component={SplashScreen}
      />

      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={LoginScreen}
      />
      <Stack.Screen
        name="Signup"
        options={{
          headerShown: false,
        }}
        component={SignupScreen}
      />

      {/* <Stack.Screen
        name="Dashboard"
        options={{headerShown: false}}
        component={Dashboard}
      />

      <Stack.Screen
        name="Details"
        options={{headerShown: true}}
        component={DetailScreen}
      />

      <Stack.Screen
        name="Profile"
        options={{headerShown: true}}
        component={Profile}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
