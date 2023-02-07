import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {colors, colorScheme, theme} from '../../../util/theme';
import {Avatar} from 'react-native-paper';
import {height, width} from '../../../util/globalStyles';
import {Para} from '../../Text';
import {CommonHeader} from '..';

import darkImg from '../../../assets/shades/dark.png';
import lightImg from '../../../assets/shades/light.png';

const ProfileHeader = ({avatar, username, email}) => {
  return (
    <ImageBackground
      source={colorScheme === 'dark' ? darkImg : lightImg}
      style={styles.container}>
      <CommonHeader title="Profile" mode="dark" />
      <View style={styles.innerContainer}>
        <Avatar.Image
          theme={theme}
          style={styles.avatar}
          size={100}
          source={avatar ? avatar : require('../../../assets/avatar.png')}
        />
        <Para text={username || 'username'} size={18} color={colors.white} />
        <Para text={email || 'email'} color={colors.white} />
      </View>
    </ImageBackground>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: height / 3,
    width: width - 40,
    alignSelf: 'center',
    margin: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 6,
  },
  avatar: {
    marginRight: 10,
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
