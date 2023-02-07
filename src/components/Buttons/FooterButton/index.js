import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

// Components
import IconBtn from '../IconButton';
import Para from '../../Text/Paragraph';

const FooterButton = props => {
  const {title, onPress, color, style, marginRight = true} = props;
  return (
    <View style={style || styles.iconContainer}>
      <IconBtn {...props} style={title && marginRight && {marginRight: 10}} onPress={onPress} />
      {title && <Para text={title} color={color} />}
    </View>
  );
};
export default FooterButton;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
