import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';

// Assets
import logoDark from '../../../assets/logo-dark.png';
import logoLight from '../../../assets/logo-light.png';

import {BG1} from '../../../components/Backgrounds';
import {globalStyles, height} from '../../../util/globalStyles';
import {colorScheme} from '../../../util/theme';

const Splash = ({navigation}) => {
  useEffect(() => {
    registerSplash();
  });

  const registerSplash = async () => {
    const getUser = await AsyncStorage.getItem('User');
    console.log('getUser => ', getUser);
    // const verification = await AsyncStorage.getItem('EmailVerified');
    // const emailCheck = !JSON.parse(verification);

    setTimeout(() => {
      if (getUser === null || getUser === {}) {
        navigation.navigate('Auth');
      }
      // else if (getUser !== null && getUser !== {} && emailCheck) {
      //   navigation.replace('EmailVerification');
      // }
      else {
        navigation.navigate('Tabs');
      }
    }, 2200);
  };

  return (
    <BG1>
      <View style={[{flex: 1, height: height}, globalStyles.centeredContainer]}>
        <Image
          source={colorScheme === 'dark' ? logoDark : logoLight}
          style={styles.logoIMG}
        />
      </View>
    </BG1>
  );
};

export default Splash;

const styles = StyleSheet.create({
  logoIMG: {
    width: 200,
    height: 200,
  },
});
