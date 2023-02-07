import {ImageBackground, ScrollView} from 'react-native';
import React from 'react';

// Assets
import BG_Dark from '../../../assets/bg/bg-dark.png';
import BG_Light from '../../../assets/bg/bg-light.png';

// Styles
import {globalStyles, height, width} from '../../../util/globalStyles';
import {colors, colorScheme} from '../../../util/theme';
import {View} from 'react-native-animatable';
import {CommonHeader} from '../../Header';
import {SafeAreaView} from 'react-native-safe-area-context';

const Background2 = ({title, withDrawer, children}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ImageBackground
        source={colorScheme === 'dark' ? BG_Dark : BG_Light}
        resizeMode="cover"
        style={[globalStyles.container]}>
        <SafeAreaView
          edges={['top']}
          style={[{backgroundColor: colors.primary}]}
        />
        {title && <CommonHeader title={title} withDrawer={withDrawer} />}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex: 1}}>{children}</View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Background2;
