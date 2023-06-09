import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import React from 'react';

// Styles
import {globalStyles, width} from '../../../util/globalStyles';
import {Para} from '../../Text';

const TextButton = ({img, label, onPress, size}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        source={{uri: img}}
        style={[styles.image, size && {width: size, height: size}]}
      />
      {label && <Para text={label} size={10} />}
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 3.75,
    height: width / 3.75,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
  },
  image: {
    width: width / 6,
    height: width / 6,
    borderRadius: 5,
    margin: 10,
    resizeMode: 'contain',
  },
});
