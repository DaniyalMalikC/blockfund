import {Text, StyleSheet} from 'react-native';
import React from 'react';

// Styles
import {colors} from '../../../util/theme';

const Paragraph = props => {
  const {text, children, size, color, containerStyle} = props;
  const paraStyle = {
    fontSize: size || 14,
    color: color || colors.primary,
    fontFamily: 'Montserrat-Light',
  };
  return (
    <Text style={[paraStyle, containerStyle]} {...props}>
      {text || children}
    </Text>
  );
};

export default Paragraph;
