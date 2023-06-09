import {View, Text} from 'react-native';
import React from 'react';
import {height, width} from '../../util/globalStyles';
import {colors, theme} from '../../util/theme';
import {ActivityIndicator} from 'react-native-paper';

const Loader = () => {
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        height: height,
        width: width,
        backgroundColor: colors.overlay,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator theme={theme} size="large" />
    </View>
  );
};

export default Loader;
