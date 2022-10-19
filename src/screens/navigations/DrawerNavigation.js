import {View, Text} from 'react-native';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from '../dashboard/Dashboard';
import Profile from '../profile/Profile';
// import CustomSidebarMenu from './components/CustomSidebarMenu';
// import NavigationDrawerHeader from './components/NavigationDrawerHeader';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const  DashboardStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Dashboard', //Set Header Title
        //   headerLeft: () => (
        //     <NavigationDrawerHeader navigationProps={navigation} />
        //   ),
          headerStyle: {
            backgroundColor: '#FF0036', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};
const ProfileStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile', //Set Header Title
        //   headerLeft: () => (
        //     <NavigationDrawerHeader navigationProps={navigation} />
        //   ),
          headerStyle: {
            backgroundColor: '#FF0036', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

// Component Drawer navigation Routes
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
    //   drawerContent={CustomSidebarMenu}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen
        name="DashboardStack"
        options={{drawerLabel: 'Dashboard Screen'}}
        component={DashboardStack}
      />
      <Drawer.Screen
        name="ProfileStack"
        options={{drawerLabel: 'Profile Screen'}}
        component={ProfileStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;


