import React from 'react';

// Navigation
import {useNavigation} from '@react-navigation/native';

// Assets
import {IconBtn} from '..';

// Style
import {colors} from '../../../util/theme';

const BackButton = ({color, size, style, path}) => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    if (path) navigation.navigate(path);
    navigation.goBack();
  };

  return (
    <IconBtn
      icon="chevron-left"
      color={color || colors.primary}
      size={size || 30}
      style={style}
      onPress={handleBackPress}
    />
  );
};

export default BackButton;
