import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import ModalizeWrapper from './src/components/Wrapper/ModalizeWrapper';

import ContextProvider from './src/context/ContextProvider';
import StackNavigator from './src/routes/StackNavigator';

import {Platform, StatusBar} from 'react-native';
import {colors} from './src/util/theme';

const App = () => {
  return (
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
  );
};

export default App;
