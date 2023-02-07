import {View, StyleSheet, Image} from 'react-native';
import React from 'react';

// Components
import {BG1} from '../../../components/Backgrounds';
import {H1, Para} from '../../../components/Text';
import {TxtBtn, ImgBtn} from '../../../components/Buttons';

// Style
import {globalStyles, height, width} from '../../../util/globalStyles';

// Assets
import logoDark from '../../../assets/logo-dark.png';
import logoLight from '../../../assets/logo-light.png';
import {colorScheme} from '../../../util/theme';

const JoinNow = ({navigation}) => {
  const handleLoginNav = () => {
    navigation.navigate('Login');
  };

  const handleSignupNav = () => {
    navigation.navigate('Signup');
  };

  return (
    <BG1>
      <View style={styles.container}>
        <Image
          source={colorScheme === 'dark' ? logoDark : logoLight}
          style={{
            marginVertical: 20,
            width: 200,
            height: 200,
          }}
        />
        <H1 text="Welcome" />
        <H1 text="to BlockFund" />
        <View style={globalStyles.leftAlignContainer}>
          <Para text="A P2P based Funding Platform" />
          <Para text="Where your Transactions stay secure." />
        </View>
        <View style={[globalStyles.leftAlignContainer]}>
          <ImgBtn label="Join Now" width={200} onPress={handleSignupNav} />
        </View>
        <TxtBtn
          text="Already a member? Log In"
          onPress={handleLoginNav}
          isUpperCase={false}
        />
      </View>
    </BG1>
  );
};

export default JoinNow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 40,
    width: width,
    height: height,
  },
  leftAlignContainer: {
    alignItems: 'flex-start',
  },
});
