import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

// Components
import Heading4 from '../../Text/Headings/Heading4';
import PhoneInput from 'react-native-phone-number-input';

// Styles
import {globalStyles, width} from '../../../util/globalStyles';
import {colors} from '../../../util/theme';

const PhoneNumberInput = ({
  ref,
  title,
  value,
  defaultCode,
  onChangeText,
  onChangeFormattedText,
  placeholder,
}) => {
  return (
    <View style={!title && {marginVertical: 5}}>
      {title && (
        <View style={globalStyles.leftAlignContainer}>
          <Heading4 text={title} />
        </View>
      )}
      <PhoneInput
        ref={ref}
        defaultValue={value}
        defaultCode={defaultCode || 'US'}
        onChangeText={text => {
          onChangeText(text);
        }}
        onChangeFormattedText={text => {
          onChangeFormattedText(text);
        }}
        placeholder={placeholder || title || 'Mobile No.'}
        containerStyle={styles.containerStyle}
        flagButtonStyle={styles.flagButtonStyle}
        countryPickerButtonStyle={styles.countryPickerButtonStyle}
        textContainerStyle={styles.textContainerStyle}
        codeTextStyle={styles.codeTextStyle}
        textInputStyle={styles.textInputStyle}
        textInputProps={{
          placeholderTextColor: colors.placeholder,
        }}
        disableArrowIcon
        layout="first"
        withShadow
        // autoFocus
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: width - 50,
    height: 60,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.secondary,
    backgroundColor: colors.placeholder,
    color: colors.primary,
    elevation: 0,
  },
  flagButtonStyle: {
    width: 60,
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  countryPickerButtonStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 40,
    borderRightWidth: 1,
    borderColor: colors.placeholder,
  },
  textContainerStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    backgroundColor: colors.secondary,
  },
  codeTextStyle: {
    height: Platform.OS === 'ios' ? 20 : 50,
    fontSize: 16,
    color: colors.placeholder,
    textAlignVertical: 'center',
  },
  textInputStyle: {
    height: 50,
    fontSize: 16,
    width: 80,
    color: colors.placeholder,
  },
});

export default PhoneNumberInput;
