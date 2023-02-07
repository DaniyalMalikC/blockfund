import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';

// Components
import {BG1} from '../../../components/Backgrounds';
import {ImgBtn, TxtBtn} from '../../../components/Buttons';
import {H3, Para, Highlight} from '../../../components/Text';
import {TextInput} from '../../../components/InputField';

// Styles
import {globalStyles, height, width} from '../../../util/globalStyles';

const ResetPassword = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const handleVerification = () => {
    navigation.navigate('Login');
  };

  return (
    <BG1 title="Reset Password">
      <View style={styles.container}>
        <View style={globalStyles.smartContainer}>
          <H3 text="Reset Password" />
          <View style={{marginVertical: 50}}>
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              leftImg={passwordIcon}
              rightIcon={secureText ? 'eye' : 'eye-off'}
              rightBtnPress={() => setSecureText(!secureText)}
              secureTextEntry={secureText}
            />
            <TextInput
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              leftImg={passwordIcon}
              rightIcon={secureText ? 'eye' : 'eye-off'}
              rightBtnPress={() => setSecureText(!secureText)}
              secureTextEntry={secureText}
            />
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <ImgBtn
            label="Confirm"
            onPress={handleVerification}
            width={width - 100}
          />
        </View>
      </View>
    </BG1>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    height: height / 1.75,
  },
});
