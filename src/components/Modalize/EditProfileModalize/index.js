import {View, Text, StyleSheet} from 'react-native';
import React, {useState, forwardRef} from 'react';

// Components
import {PhoneInput, TextInput} from '../../InputField';
import {H2, H3} from '../../Text';
import {globalStyles} from '../../../util/globalStyles';
import {Modalize} from 'react-native-modalize';
import {ProfilePicker} from '../../ImagePicker';
import {ImgBtn} from '../../Buttons';

const EditProfileModalize = ({onClose}, ref) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [phoneNo, setPhoneNo] = useState('');
  const [formattedPhoneNo, setFormattedPhoneNo] = useState('');

  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');

  const handleUpdateProfile = () => {
    onClose && onClose();
  };

  return (
    <Modalize
      snapPoint={450}
      modalStyle={{borderTopLeftRadius: 30, borderTopRightRadius: 30}}
      ref={ref}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <H2 text="Edit Profile" />
          {/* <IconBtn icon="close" onPress={() => onClose()} /> */}
        </View>

        <ProfilePicker />

        <TextInput
          title="First Name"
          value={firstName}
          onChangeText={setFirstName}
          leftIcon="account-outline"
        />
        <TextInput
          title="Last Name"
          value={lastName}
          onChangeText={setLastName}
          leftIcon="account-outline"
        />

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

        <View style={globalStyles.leftAlignContainer}>
          <H3 text="Address" />
        </View>
        <TextInput
          placeholder="Country"
          value={country}
          onChangeText={setCountry}
          leftIcon="flag-outline"
        />
        <TextInput
          placeholder="State"
          value={state}
          onChangeText={setState}
          leftIcon="sign-real-estate"
        />
        <TextInput
          placeholder="City"
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

        <View style={{marginVertical: 20}}>
          <ImgBtn label="Update" onPress={handleUpdateProfile} width={150} />
        </View>
      </View>
    </Modalize>
  );
};

export default forwardRef(EditProfileModalize);

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  innerContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
