import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';

// Components
import {BG1} from '../../../components/Backgrounds';
import {ImgBtn, TxtBtn} from '../../../components/Buttons';
import {H3, Para, Highlight} from '../../../components/Text';
import {OTPInput} from '../../../components/InputField';

// Styles
import {globalStyles, height, width} from '../../../util/globalStyles';

const Verification = ({navigation}) => {
  const [code, setCode] = useState('');

  const handleVerification = () => {
    // navigation.navigate('RequestOTP');
    alert('Navigate to Home');
  };

  const handleResendOTP = () => {
    alert('OTP Verification');
  };
  return (
    <BG1 title="Verification">
      <View style={styles.container}>
        <View style={globalStyles.smartContainer}>
          <H3 text="Verify your Account" />
          <View style={globalStyles.leftAlignContainer}>
            <Para>
              Enter the <Highlight text="OTP " /> sent to your number
            </Para>
          </View>
          <View style={{marginVertical: 20}}>
            <OTPInput handleChange={setCode} />
          </View>
          <View style={globalStyles.centeredContainer}>
            <Para text="Didn’t Receive OTP?" />
            <TxtBtn text="Resend OTP" onPress={handleResendOTP} />
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <ImgBtn
            label="Verify OTP"
            onPress={handleVerification}
            width={width - 100}
          />
        </View>
      </View>
    </BG1>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    height: height / 1.75,
  },
});
