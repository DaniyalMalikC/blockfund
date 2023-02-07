import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';

// Components
import {BG1} from '../../../components/Backgrounds';
import {ImgBtn, TxtBtn} from '../../../components/Buttons';
import {H3, Para, Highlight} from '../../../components/Text';
import {TextInput} from '../../../components/InputField';

// Styles
import {globalStyles, height, width} from '../../../util/globalStyles';

const RequestOTP = ({navigation}) => {
  const [email, setEmail] = useState('');

  const handleVerification = () => {
    alert('Successfully Send!');
  };

  return (
    <BG1 title="Verification">
      <View style={styles.container}>
        <View style={globalStyles.smartContainer}>
          <H3 text="Verify your Account" />
          <View style={globalStyles.leftAlignContainer}>
            <Para>
              We will send you an <Highlight text="Reset password Link " /> On
              this <Highlight text="Email." />
            </Para>
          </View>
          <View style={{marginVertical: 20}}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              leftIcon="email-outline"
            />
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <ImgBtn
            label="Request Link"
            onPress={handleVerification}
            width={width - 100}
          />
        </View>
      </View>
    </BG1>
  );
};

export default RequestOTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    height: height / 1.75,
  },
});
