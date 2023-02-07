import {Text, StyleSheet} from 'react-native';
import React from 'react';

// Assets
import {colors} from '../../../util/theme';

const Heading3 = ({text}) => {
  return <Text style={styles.heading}>{text}</Text>;
};

export default Heading3;

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    color: colors.placeholder,
    fontFamily: 'Montserrat-Regular',
  },
});
