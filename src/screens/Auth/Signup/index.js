import {View, Text, KeyboardAvoidingView} from 'react-native';
import React, {useContext, useState} from 'react';

// Components
import {BG1} from '../../../components/Backgrounds';
import {TxtBtn, ImgBtn, RadioBtn} from '../../../components/Buttons';
import {H3, Para} from '../../../components/Text';
import {TextInput, PhoneInput} from '../../../components/InputField';

// Styles
import {globalStyles, width} from '../../../util/globalStyles';
import {Checkbox} from 'react-native-paper';
import {DisclaimerModal} from '../../../components/Modal';
import {colors} from '../../../util/theme';
import {AuthAction} from '../../../context/AuthContext';

const SignUp = ({navigation}) => {
  const {onSignUp} = useContext(AuthAction);
  const [userName, setUserName] = useState('');
  // const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');

  const [phoneNo, setPhoneNo] = useState('');
  const [formattedPhoneNo, setFormattedPhoneNo] = useState('');

  const [gender, setGender] = useState('Male');

  const [checked, setChecked] = useState(false);
  const [disclaimerVisibility, setDisclaimerVisibility] = useState(false);

  const handleLoginNav = () => {
    navigation.navigate('Login');
  };

  const handleSignup = () => {
    const obj = {
      email: email,
      password: password,
      username: userName,
      phoneNumber: phoneNo,
      // DOB,
      gender: gender,
      country: country,
      state: state,
      city: city,
      address: address,
    };
    if (email === '' || password === '')
      return alert('Provide email or password!');
    if (password.length < 6)
      return alert('Type at least 6 character in Password Field!');

    onSignUp(obj, navigation);
    handleResetValue();

    // navigation.navigate('Tabs');
  };

  const handleResetValue = () => {
    setUserName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setCountry('');
    setState('');
    setCity('');
    setAddress('');
    setPhoneNo('');
    setFormattedPhoneNo('');
    setGender('Male');
    setChecked(false);
    setSecureText(true);
  };

  const handleDisclaimer = () => {
    setDisclaimerVisibility(true);
  };

  return (
    <BG1 title="Sign Up">
      <View style={globalStyles.smartContainer}>
        <KeyboardAvoidingView>
          <H3 text="Create an Account" />
          <TextInput
            title="User Name"
            value={userName}
            onChangeText={setUserName}
            leftIcon="account-outline"
          />
          {/* <TextInput
            title="Last Name"
            value={lastName}
            onChangeText={setLastName}
            leftIcon="account-outline"
          /> */}

          <View style={globalStyles.leftAlignContainer}>
            <H3 text="Signup Details" />
          </View>

          <TextInput
            title="Email"
            value={email}
            onChangeText={setEmail}
            leftIcon="email-outline"
          />

          <PhoneInput
            title="Phone Number"
            value={phoneNo}
            onChangeText={setPhoneNo}
            onChangeFormattedText={setFormattedPhoneNo}
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
          <TextInput
            title="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            leftIcon="lock-outline"
            rightIcon={secureText ? 'eye' : 'eye-off'}
            rightBtnPress={() => setSecureText(!secureText)}
            secureTextEntry={secureText}
          />

          <View style={globalStyles.leftAlignContainer}>
            <H3 text="Address" />
          </View>
          <TextInput
            placeholder="Select Country"
            value={country}
            onChangeText={setCountry}
            leftIcon="flag-outline"
          />
          <TextInput
            placeholder="Select State"
            value={state}
            onChangeText={setState}
            leftIcon="sign-real-estate"
          />
          <TextInput
            placeholder="Select City"
            value={city}
            onChangeText={setCity}
            leftIcon="city-variant-outline"
          />
          <TextInput
            placeholder="Street Address"
            value={address}
            onChangeText={setAddress}
            leftIcon="map-marker"
          />

          <View style={globalStyles.leftAlignContainer}>
            <H3 text="Gender" />
          </View>

          <View style={globalStyles.centeredRadioContainer}>
            <RadioBtn
              value="Male"
              checked={gender}
              onPress={setGender}
              leftIcon="gender-male"
            />
            <RadioBtn
              value="Female"
              checked={gender}
              onPress={setGender}
              leftIcon="gender-female"
            />
          </View>
        </KeyboardAvoidingView>
        <View style={globalStyles.leftAlignContainer}>
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
          <ImgBtn label="Sign Up" onPress={handleSignup} width={width - 100} />
        </View>
        <View style={[globalStyles.centeredRowContainer]}>
          <Para text="Already a member " />
          <TxtBtn text="LOG IN" onPress={handleLoginNav} />
        </View>
      </View>
      <DisclaimerModal
        visible={disclaimerVisibility}
        setVisible={setDisclaimerVisibility}
      />
    </BG1>
  );
};

export default SignUp;
