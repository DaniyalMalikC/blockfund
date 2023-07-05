import {View} from 'react-native';
import React from 'react';

// Components
import Heading4 from '../../Text/Headings/Heading4';
import IconButton from '../../Buttons/IconButton';
import {TextInput} from 'react-native-paper';

// Styles
import {theme, colors} from '../../../util/theme';
import {globalStyles} from '../../../util/globalStyles';

const InputField = props => {
  const {
    style,
    mode,
    secureTextEntry,
    leftIcon,
    leftImg,
    leftBtnPress,
    rightIcon,
    rightImg,
    rightBtnPress,
    title,
    placeholder,
  } = props;
  return (
    <View style={!title && {marginVertical: 5}}>
      {title && (
        <View style={globalStyles.leftAlignContainer}>
          <Heading4 text={title} />
        </View>
      )}
      <TextInput
        {...props}
        placeholder={placeholder || title}
        theme={theme}
        style={[style || {backgroundColor: colors.placeholder}]}
        mode={mode || 'outlined'}
        secureTextEntry={secureTextEntry || false}
        left={
          (leftIcon || leftImg) && (
            <TextInput.Icon
              name={() => (
                <IconButton
                  icon={leftIcon}
                  img={leftImg}
                  onPress={leftBtnPress}
                />
              )}
            />
          )
        }
        right={
          (rightIcon || rightImg) && (
            <TextInput.Icon
              name={() => (
                <IconButton
                  icon={rightIcon}
                  img={rightImg}
                  onPress={rightBtnPress}
                />
              )}
            />
          )
        }
      />
    </View>
  );
};

export default InputField;
