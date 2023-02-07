import {Text, StyleSheet} from 'react-native';
import React from 'react';

// Assets
import {colors} from '../../../util/theme';

const Heading2 = ({text}) => {
  return <Text style={styles.heading}>{text}</Text>;
};

export default Heading2;

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    color: colors.primary,
    fontFamily: 'Montserrat-Medium',
  },
});
