import {Image, TouchableOpacity} from 'react-native';
import React from 'react';

// Assets
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Styles
import {colors} from '../../../util/theme';

const IconButton = ({
  icon,
  img,
  onPress,
  color,
  size,
  style,
  imgStyle,
  isRound,
}) => {
  const imgIconSizeStyle = {
    width: size || 20,
    height: size || 20,
    borderRadius: isRound && 50,
  };
  return icon && onPress ? (
    <TouchableOpacity onPress={onPress}>
      <Icon
        name={icon}
        size={size || 20}
        color={(icon && color) || colors.primary}
        style={style}
        // onPress={onPress || null}
      />
    </TouchableOpacity>
  ) : icon ? (
    <Icon
      name={icon}
      size={size || 20}
      color={(icon && color) || colors.primary}
      style={style}
    />
  ) : onPress && img ? (
    <TouchableOpacity onPress={onPress} style={style}>
      <Image source={img} style={[onPress && imgStyle, imgIconSizeStyle]} />
    </TouchableOpacity>
  ) : (
    <Image source={img} style={[style, imgIconSizeStyle]} />
  );
};

export default IconButton;
