// InAppBrowserScreen.js
import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

export const WebViewScreen = () => {
  const url = 'https://gmcb2cdev.b2clogin.com/GMCB2CDEV.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1A_SIGNIN_NATIVE_LOCALHOST&client_id=f09c70ea-6eb9-4fc0-9890-ea2d651dbce5&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fjwt.ms&scope=openid&response_type=id_token&prompt=login';

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{uri: url}}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        onNavigationStateChange={(navState) => {
          console.log('Navigation State:', navState);
        }}
        onError={(syntheticEvent) => {
          const {nativeEvent} = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
});
