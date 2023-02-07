import {Text, StyleSheet} from 'react-native';
import React from 'react';

// Styles
import {colors} from '../../../util/theme';

const Heading4 = ({text}) => {
  return <Text style={styles.heading}>{text}</Text>;
};

export default Heading4;

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    color: colors.primary,
    fontFamily: 'Montserrat-Regular',
  },
});
