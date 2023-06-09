import {View, Text} from 'react-native';
import React, {useContext, useState} from 'react';

// Components
import {BG1} from '../../../components/Backgrounds';
import {TxtBtn, ImgBtn} from '../../../components/Buttons';
import {H3, Para} from '../../../components/Text';
import {TextInput} from '../../../components/InputField';

// Styles
import {globalStyles, width} from '../../../util/globalStyles';
import {Checkbox} from 'react-native-paper';
import {colors} from '../../../util/theme';
import {DisclaimerModal} from '../../../components/Modal';
import {AuthAction} from '../../../context/AuthContext';

const Login = ({navigation}) => {
  const {onSignIn} = useContext(AuthAction);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [checked, setChecked] = useState(false);
  const [disclaimerVisibility, setDisclaimerVisibility] = useState(false);

  const handleForgetPassNav = () => {
    navigation.navigate('ForgetPassword');
  };

  const handleSignupNav = () => {
    navigation.navigate('Signup');
  };

  const handleLogin = () => {
    if (email === '' || password === '')
      return alert('Provide email or password!');

    if (!checked) return alert('Please agree terms before procceding!');
    onSignIn(email, password, navigation);
    handleResetValue();
    // navigation.navigate('Tabs');
  };

  const handleResetValue = () => {
    setEmail('');
    setPassword('');
    setChecked(false);
    setDisclaimerVisibility(false);
    setSecureText(true);
  };

  const handleDisclaimer = () => {
    setDisclaimerVisibility(true);
  };

  return (
    <BG1 title="Login">
      <View style={globalStyles.smartContainer}>
        <TextInput
          title="Email"
          value={email}
          onChangeText={setEmail}
          leftIcon="email-outline"
        />
        <TextInput
          title="Password"
          value={password}
          onChangeText={setPassword}
          leftIcon="lock-outline"
          rightIcon={secureText ? 'eye' : 'eye-off'}
          rightBtnPress={() => setSecureText(!secureText)}
          secureTextEntry={secureText}
        />

        <View style={globalStyles.leftAlignContainer}>
          <TxtBtn
            text="Forgot your password?"
            onPress={handleForgetPassNav}
            isUpperCase={false}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: '100%',
              left: -8,
            }}>
            <Checkbox.Android
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => setChecked(!checked)}
              color={colors.primary}
            />
            <Para text="I hereby, accept this  " size={10} />
            <TxtBtn
              text="Terms and Agreement!"
              onPress={handleDisclaimer}
              isUpperCase={false}
            />
          </View>
        </View>

        <View style={{marginVertical: 20}}>
          <ImgBtn label="Log In" onPress={handleLogin} width={width - 100} />
        </View>

        <View style={[globalStyles.centeredRowContainer]}>
          <Para text="Don’t have an account? " />
          <TxtBtn text="CREATE AN ACCOUNT" onPress={handleSignupNav} />
        </View>
      </View>
      <DisclaimerModal
        visible={disclaimerVisibility}
        setVisible={setDisclaimerVisibility}
      />
    </BG1>
  );
};

export default Login;
