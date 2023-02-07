import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {ProfileHeader} from '../../../components/Header';
import {ListItem} from '../../../components/List';
import {AuthContext} from '../../../context/AuthContext';

const Profile = () => {
  const {user} = useContext(AuthContext);
  return (
    <View>
      <ProfileHeader
        avatar={user.avatar}
        username={user.name}
        email={user.email}
      />
      <View style={styles.container}>
        <ListItem
          title="Gender"
          desc={user.gender || 'Male'}
          icon={'gender-' + (user.gender?.toLowerCase() || 'male')}
        />
        <ListItem
          title="Phone No"
          desc={user.phoneNumber || '+92 312 1088139'}
          icon="phone"
        />
        <ListItem
          title="Country"
          desc={user.country || 'Pakistan'}
          icon="flag-outline"
        />
        <ListItem
          title="State"
          desc={user.state || 'Sindh'}
          icon="sign-real-estate"
        />
        <ListItem
          title="City"
          desc={user.city || 'Karachi'}
          icon="city-variant-outline"
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    height: 350,
    justifyContent: 'space-between',
  },
});
