import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import Home from '../DrawerNavigator';
import Transactions from '../../screens/Tabs/Transactions';
import Notifications from '../../screens/Tabs/Notifications';
import Profile from '../../screens/Tabs/Profile';
import Empty from '../../screens/Empty';

// Custom Tab View
import CustomTab from './CustomTab';

const Tab = createBottomTabNavigator();

const TabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTab {...props} />}
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Transactions" component={Transactions} />
      <Tab.Screen name="EmptyTab" component={Empty} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
