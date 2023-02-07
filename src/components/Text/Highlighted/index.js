import {Text, StyleSheet} from 'react-native';
import React from 'react';

// Styles
import {colors} from '../../../util/theme';

const Highlighted = ({text, isUpperCase = false}) => {
  return (
    <Text style={[styles.heading, isUpperCase && {textTransform: 'uppercase'}]}>
      {text}
    </Text>
  );
};

export default Highlighted;

const styles = StyleSheet.create({
  heading: {
    fontSize: 14,
    color: colors.placeholder,
    fontFamily: 'Montserrat-Regular',
  },
});
