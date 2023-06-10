import 'react-native-gesture-handler';
import './shim';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import ModalizeWrapper from './src/components/Wrapper/ModalizeWrapper';

import ContextProvider from './src/context/ContextProvider';
import StackNavigator from './src/routes/StackNavigator';

// import WalletConnectProvider from '@walletconnect/react-native-dapp';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import {Platform, StatusBar} from 'react-native';
import {colors} from './src/util/theme';

const App = () => {
  return (
    // <WalletConnectProvider
    //   redirectUrl={
    //     Platform.OS === 'web'
    //       ? window.location.origin
    //       : 'http://localhost:8080/'
    //   }
    //   storageOptions={{
    //     asyncStorage: AsyncStorage,
    //   }}>
    <ContextProvider>
      <NavigationContainer>
        <ModalizeWrapper>
          {Platform.OS === 'android' && (
            <StatusBar backgroundColor={colors.primary} />
          )}
          <StackNavigator />
        </ModalizeWrapper>
      </NavigationContainer>
    </ContextProvider>
    // </WalletConnectProvider>
  );
};

export default App;
