import {View, Text} from 'react-native';
import React from 'react';

// Navigation
import {useNavigation, DrawerActions} from '@react-navigation/native';

// Assets
import {IconBtn} from '..';
import {colors} from '../../../util/theme';

const DrawerButton = ({style, color, size}) => {
  const navigation = useNavigation();
  return (
    <IconBtn
      icon="format-list-group"
      color={color || colors.primary}
      size={size || 30}
      style={style}
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    />
  );
};

export default DrawerButton;
