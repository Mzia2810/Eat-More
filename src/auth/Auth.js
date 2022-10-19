import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';
import DetailScreen from '../screens/details/DetailScreen';
import Dashboard from '../screens/dashboard/Dashboard';
import Profile from '../screens/profile/Profile';

const Stack = createNativeStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="SignupScreen">
      <Stack.Screen
        name="Sign up"
        options={{
          headerShown: false,
        }}
        component={SignupScreen}
      />

      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={LoginScreen}
      />

      <Stack.Screen
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
      />
    </Stack.Navigator>
  );
};

export default Auth;
