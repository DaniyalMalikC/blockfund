import {View, Text, StyleSheet, Platform} from 'react-native';
import React from 'react';

// Component
import {RadioButton} from 'react-native-paper';
import Heading4 from '../../Text/Headings/Heading4';

// Styles
import {width} from '../../../util/globalStyles';
import {theme, colors} from '../../../util/theme';

const RadioInputButton = ({checked, value, onPress}) => {
  return (
    <View style={styles.container}>
    {Platform.OS === 'ios' ? (
      <View style={styles.radioContainer}>
        <RadioButton
          theme={theme}
          color={colors.primary}
          value={value}
          status={checked === value ? 'checked' : 'unchecked'}
          onPress={() => onPress(value)}
        />
      </View>
      ) : (
      <RadioButton
        theme={theme}
        color={colors.primary}
        value={value}
        status={checked === value ? 'checked' : 'unchecked'}
        onPress={() => onPress(value)}
      />
    )}
      <Heading4 text={value} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    width: width / 2 - 30,
  },
  radioContainer: {
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 50,
    marginRight: 5
  },
});

export default RadioInputButton;
