import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {BckBtn, DrawerBtn, IconBtn} from '../../Buttons';
import {H3} from '../../Text';
import {colors, colorScheme} from '../../../util/theme';
import {height, width} from '../../../util/globalStyles';

import darkImg from '../../../assets/shades/dark.png';
import lightImg from '../../../assets/shades/light.png';
import CommonHeader from '../CommonHeader';

const AuthHeader = ({title, withDrawer}) => {
  return (
    <ImageBackground
      source={colorScheme === 'dark' ? darkImg : lightImg}
      style={styles.container}>
      <CommonHeader title={title} withDrawer={withDrawer} mode="dark" />
    </ImageBackground>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    // alignItems: 'center',
    flexDirection: 'row',
    width: width,
    height: height / 4,
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 20,
  },
  logoContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    marginBottom: 50,
  },
  inputContainer: {
    flex: 3,
  },

  logo: {
    width: 65,
    height: 85,
  },
});
