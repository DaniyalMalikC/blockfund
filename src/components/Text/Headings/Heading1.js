import {Text, StyleSheet} from 'react-native';
import React from 'react';

// Assets
import {colors} from '../../../util/theme';

const Heading1 = ({text}) => {
  return <Text style={styles.heading}>{text}</Text>;
};

export default Heading1;

const styles = StyleSheet.create({
  heading: {
    fontSize: 38,
    color: colors.primary,
    fontFamily: 'Montserrat-Bold',
  },
});
