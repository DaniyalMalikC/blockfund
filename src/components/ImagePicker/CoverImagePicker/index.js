import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';

// Components
import {launchImageLibrary} from 'react-native-image-picker';
import {IconBtn, ImgBtn} from '../../Buttons';

// Styles
import {colors} from '../../../util/theme';

const CoverImagePicker = ({image, handleImage}) => {
  const [defaultImage, setDefaultImage] = useState(image);

  const handlePicker = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      maxWidth: 500,
      maxHeight: 500,
      quality: 0.5,
    });
    setDefaultImage(result.assets[0].uri);
    handleImage && handleImage(result.assets[0].uri);
  };

  const handleReset = () => {
    setDefaultImage('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <IconBtn
          icon={defaultImage ? 'close' : 'camera'}
          size={30}
          color={colors.secondary}
          onPress={defaultImage ? handleReset : handlePicker}
        />
      </View>
      <View style={styles.imageContainer}>
        {defaultImage && (
          <Image source={{uri: defaultImage}} style={styles.imageContainer} />
        )}
      </View>
    </View>
  );
};

export default CoverImagePicker;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'absolute',
    right: 20,
    top: -15,
    zIndex: 1,
  },
  imageContainer: {
    backgroundColor: colors.placeholder + '50',
    borderRadius: 5,
    height: 100,
    width: '100%',
  },
});
