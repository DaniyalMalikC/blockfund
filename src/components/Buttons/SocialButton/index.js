import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import React from 'react';

// Styles
import {globalStyles} from '../../../util/globalStyles';

const TextButton = ({img, onPress, size}) => {
  return (
    <TouchableOpacity onPress={onPress} style={globalStyles.centeredContainer}>
      <Image source={img} style={[styles.image, size && {width: size, height: size}]} />
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
    margin: 10,
  },
});
