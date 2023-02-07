import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

// Components
import {Button} from 'react-native-paper';

// Styles
import {theme, colors} from '../../../util/theme';

const PaperButton = props => {
  const {icon, mode, onPress, label, style, labelStyle, width, height} = props;
  return (
    <Button
      theme={theme}
      icon={icon}
      mode={mode}
      onPress={onPress}
      style={[style || styles.btn, {width: width, height: height || 30}, mode === 'outlined' && styles.outlined]}
      labelStyle={labelStyle || styles.label}
      uppercase={false}
      {...props}>
      {label}
    </Button>
  );
};

export default PaperButton;

const styles = StyleSheet.create({
  outlined: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.primary + '50',
  },
  btn: {
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    marginVertical: 6,
    fontFamily: 'Belgrano-Regular',
  },
});
