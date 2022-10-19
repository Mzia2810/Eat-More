import * as React from 'react';
import { Text } from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/dashboard/Dashboard';
import Profile from '../screens/profile/Profile';
import DetailScreen from '../screens/details/DetailScreen';
import AddToCart from '../screens/addToCart/AddToCart';
import RestaurantDetail from '../screens/restaurantDetail/RestaurantDetail'
import ViewCart from '../components/restaurantDetail/ViewCart';
import OrderCompleted from '../screens/orderCompleted/OrderCompleted';

import Entypo from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';



const Stack = createNativeStackNavigator();

const AppNavigator = ({navigation}) => {



  return (
    <Stack.Navigator initialRouteName="Dashboard" >
      <Stack.Screen
        name="Dashboard"
        options={{
          headerShown: false}}
        component={Dashboard}
      />
       <Stack.Screen
      name="RestaurantDetail"
      options={{
        headerShown: true, 
        headerTitleAlign: "center",
      }}
      component={RestaurantDetail}
    />
       <Stack.Screen
      name="ViewCart"
      options={{
        headerShown: true, 
        headerTitleAlign: "center",
      }}
      component={ViewCart}
    />
       <Stack.Screen
      name="Details"
      options={{
        headerShown: true, 
        headerTitleAlign: "center",
      }}
      component={DetailScreen}
    />

    <Stack.Screen
      name="Profile"
      options={{headerShown: true, headerTitleAlign: "center",}}
      component={Profile}
    />

    <Stack.Screen
      name="AddToCart"
      options={{headerShown: true, headerTitleAlign: "center",}}
      component={AddToCart}
    />
    <Stack.Screen
      name="OrderCompleted"
      options={{headerShown: true, headerTitleAlign: "center",}}
      component={OrderCompleted}
    />

     
    </Stack.Navigator>
  );
};

export default AppNavigator;
