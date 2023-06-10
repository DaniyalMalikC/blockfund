import {
  View,
  Image,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import {WebView as WebViewComponent} from 'react-native-webview';

import {BckBtn, IconBtn} from '../Buttons';
import {colors} from '../../util/theme';
import {H2} from '../Text';

// Assets
import logo from '../../assets/logo-dark.png';
import Shade1 from '../../assets/bg/bg-dark.png';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {height, width} from '../../util/globalStyles';
import {useNavigation} from '@react-navigation/native';

const LoadingIndicatorView = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.contianer,
        styles.loaderContainer,
        {height: height - insets.top},
      ]}>
      <H2 text="Please wait... Page is Loading! Thanks for your patience." />
      <ActivityIndicator color={colors.primary} size="large" />
    </View>
  );
};

const Webview = props => {
  const {url, topLeftIcon, handleBackPress} = props;
  const uri = url.replace(/^http:\/\//i, 'https://');
  const webViewRef = useRef(null);

  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const handlePress = () => {
    if (handleBackPress) return handleBackPress;
    navigation.goBack();
  };

  const handleWebViewBack = () => {
    webViewRef.current.goBack();
  };

  const handleWebViewForward = () => {
    webViewRef.current.goForward();
  };

  const injectedScript = `
(function () {
  function createEthereumObject() {
    // Define your Ethereum object here
    var ethereum = {
      // Define Ethereum object properties and methods
    };
    return ethereum;
  }

  // Create the Ethereum object and attach it to the global window object
  window.ethereum = createEthereumObject();
})();
`;

  const onMessage = event => {
    const data = JSON.parse(event.nativeEvent.data);
    console.log('data', data);
    // Handle the received message from the WebView here
    // For example, you could perform actions based on the message data
  };

  return (
    <SafeAreaView edges={['right', 'left']} style={styles.contianer}>
      <View style={styles.contianer}>
        <ImageBackground
          source={Shade1}
          style={[styles.headerStyle, {paddingTop: insets.top}]}>
          <TouchableOpacity onPress={handlePress} style={styles.headerStyle}>
            <IconBtn icon={topLeftIcon || 'chevron-left'} color={colors.dark} />
            <Image source={logo} style={styles.logo} />
          </TouchableOpacity>
          <View style={[styles.forwardBackwardContainer]}>
            <IconBtn
              onPress={handleWebViewBack}
              icon="chevron-left"
              color={colors.dark}
              size={35}
              style={{marginRight: 10}}
            />
            <IconBtn
              onPress={handleWebViewForward}
              icon="chevron-right"
              color={colors.dark}
              size={35}
            />
          </View>
        </ImageBackground>

        <WebViewComponent
          ref={webViewRef}
          style={styles.contianer}
          containerStyle={styles.contianer}
          injectedJavaScript={injectedScript}
          javaScriptEnabled={true}
          onMessage={onMessage}
          renderLoading={() => LoadingIndicatorView()}
          startInLoadingState={true}
          domStorageEnabled={true}
          source={{uri}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Webview;

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    paddingHorizontal: 10,
  },
  forwardBackwardContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    // position: 'absolute',
  },
  logo: {
    width: 50,
    height: 50,
    // justifyContent: 'center',
    // alignSelf: 'center',
  },
  loaderContainer: {
    width: width,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
