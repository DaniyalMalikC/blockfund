import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import React from 'react';

// Assets
import DarkBTN from '../../../assets/shades/dark.png';
import LightBTN from '../../../assets/shades/light.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Styles
import {globalStyles, width} from '../../../util/globalStyles';
import {colors, colorScheme} from '../../../util/theme';

const ImageButton = ({
  label,
  labelSize,
  img,
  onPress,
  width,
  height,
  icon,
  iconColor,
  iconSize,
  iconStyle,
  hide,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[hide && {display: 'none'}, globalStyles.centeredContainer]}>
      <Image
        source={img || colorScheme === 'dark' ? DarkBTN : LightBTN}
        style={[
          hide && {display: 'none'},
          styles.image,
          width && {width: width},
          height && {height: height},
        ]}
      />
      {label && (
        <Text
          style={[
            hide && {display: 'none'},
            styles.label,
            labelSize && {fontSize: labelSize},
          ]}>
          {icon && (
            <Icon
              name={icon}
              size={iconSize || 20}
              color={iconColor || colors.white}
              style={[hide && {display: 'none'}, iconStyle]}
            />
          )}
          {' ' + label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default ImageButton;

const styles = StyleSheet.create({
  image: {
    width: width - 50,
    height: 50,
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
    color: colors.white,
    position: 'absolute',
    fontFamily: 'Belgrano-Regular',
    textAlign: 'center',
  },
});
