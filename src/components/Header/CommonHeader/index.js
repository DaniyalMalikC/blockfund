import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {BckBtn, DrawerBtn, IconBtn} from '../../Buttons';
import {H2, H3} from '../../Text';
import {colors} from '../../../util/theme';
import {width} from '../../../util/globalStyles';

const CommonHeader = ({title, withDrawer, mode}) => {
  return (
    <View style={styles.container}>
      {withDrawer ? (
        <DrawerBtn color={mode === 'dark' && colors.placeholder} />
      ) : (
        <BckBtn color={mode === 'dark' && colors.placeholder} />
      )}
      {mode === 'dark' ? <H3 text={title} /> : <H2 text={title} />}

      <View style={{width: 30}} />
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  logoContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    marginBottom: 50,
  },
  inputContainer: {
    flex: 3,
  },

  logo: {
    width: 65,
    height: 85,
  },
});
