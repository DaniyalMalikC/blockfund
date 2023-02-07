import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Welcome Screens
import Splash from '../../screens/Welcome/Splash';

// Auth Screens
import AuthNavigator from '../AuthNavigator';

// Tab Screens
import TabNavigator from '../TabNavigator';

// Drawer Screens
import DrawerNavigator from '../DrawerNavigator';

// Screens
// import JoinNow from "../../screens/Welcome/JoinNow";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
