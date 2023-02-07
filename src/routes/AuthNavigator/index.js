import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Auth Screens
import JoinNow from '../../screens/Auth/JoinNow';
import Login from '../../screens/Auth/Login';
import Signup from '../../screens/Auth/Signup';
import ForgetPassword from '../../screens/Auth/ForgetPassword';
import ResetPassword from '../../screens/Auth/ResetPassword';
import RequestOTP from '../../screens/Auth/RequestOTP';
import Verification from '../../screens/Auth/Verification';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="JoinNow">
      <Stack.Screen name="JoinNow" component={JoinNow} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="RequestOTP" component={RequestOTP} />
      <Stack.Screen name="Verification" component={Verification} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
