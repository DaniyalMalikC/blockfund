import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';

// Components
import {BG1} from '../../../components/Backgrounds';
import {ImgBtn} from '../../../components/Buttons';
import {H3, Para, Highlight} from '../../../components/Text';
import {TextInput} from '../../../components/InputField';

// Styles
import {globalStyles, height, width} from '../../../util/globalStyles';

const ForgetPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  const handleForgetPassword = () => {
    navigation.navigate('ResetPassword');
  };
  return (
    <BG1 title="Forgot Password">
      <View style={styles.container}>
        <View style={globalStyles.smartContainer}>
          <H3 text="Forgot Password" />
          <View style={globalStyles.leftAlignContainer}>
            <Para>
              Please enter the Email address <Highlight text="associated " />{' '}
              with your account.
            </Para>
          </View>
          <View style={{marginVertical: 20}}>
            <TextInput
              placeholder="Email:"
              value={email}
              onChangeText={setEmail}
              leftIcon="email-outline"
            />
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <ImgBtn
            label="Submit"
            onPress={handleForgetPassword}
            width={width - 100}
          />
        </View>
      </View>
    </BG1>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    height: height / 1.75,
  },
});
