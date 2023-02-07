import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useContext} from 'react';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {ImgBtn} from '../../../components/Buttons';
import {height} from '../../../util/globalStyles';
import {colorScheme, theme} from '../../../util/theme';

import Card_dark from '../../../assets/shades/dark.png';
import Card_light from '../../../assets/shades/light.png';
import {AuthAction} from '../../../context/AuthContext';
import {useNavigation} from '@react-navigation/native';

const CustomDrawer = props => {
  const {onSignOut} = useContext(AuthAction);
  const navigation = useNavigation();
  const handleLogout = () => {
    onSignOut(navigation);
  };
  return (
    <View style={{flex: 1, height: '100%'}}>
      <Image
        source={colorScheme === 'dark' ? Card_dark : Card_light}
        style={styles.cover}
      />
      <Image
        source={require('../../../assets/avatar.png')}
        style={styles.avatar}
      />
      <DrawerContentScrollView {...props}>
        <View style={{paddingHorizontal: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={styles.button}>
        <ImgBtn
          icon="power"
          label="LOGOUT"
          width="100%"
          iconSize={24}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  cover: {
    width: '100%',
    height: 100,
  },
  avatar: {
    width: 80,
    height: 80,
    top: -20,
    alignSelf: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: theme.white,
  },
  button: {
    padding: 20,
    paddingBottom: 40,
  },
});
