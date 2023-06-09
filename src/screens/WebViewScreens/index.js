import {View, Text} from 'react-native';
import React from 'react';
import Webview from '../../components/WebView';

const WebViewScreen = ({route}) => {
  // const {URL} = route.params
  return <Webview url={'https://demonstration-02.web.app/'} />;
};

export default WebViewScreen;
