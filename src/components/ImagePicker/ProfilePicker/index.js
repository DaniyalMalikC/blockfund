import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {AvatarImagePicker, CoverImagePicker} from '..';

const ProfilePicker = ({avatar, handleAvatar, cover, handleCover}) => {
  return (
    <View style={styles.pickerContainer}>
      <CoverImagePicker image={cover} handleImage={handleCover} />
      <View style={styles.avatarPickerContainer}>
        <AvatarImagePicker image={avatar} handleImage={handleAvatar} />
      </View>
    </View>
  );
};

export default ProfilePicker;

const styles = StyleSheet.create({
  pickerContainer: {
    height: 160,
    marginVertical: 10,
  },
  avatarPickerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 30,
  },
});
