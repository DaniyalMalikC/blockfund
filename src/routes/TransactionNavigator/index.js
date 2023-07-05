import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Welcome Screens
// Transaction Screens
// Transaction Screens
import Transactions from '../../screens/Tabs/Transactions';
import TransactionsView from '../../screens/Tabs/Transactions/TransactionView';

// Screens
// import JoinNow from "../../screens/Welcome/JoinNow";

const Stack = createNativeStackNavigator();

const TransactionNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="TRANSACTION">
      <Stack.Screen name="TRANSACTION" component={Transactions} />
      <Stack.Screen name="TransactionsView" component={TransactionsView} />
    </Stack.Navigator>
  );
};

export default TransactionNavigator;
