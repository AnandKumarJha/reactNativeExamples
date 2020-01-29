import React from 'react';
import { StyleSheet, Text, View, Image, Platform, TextInput } from 'react-native';

export default class SplashComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={{ width: 200, height: 200 }} source={require('../assets/react-512.png')}></Image>
        <Text style={styles.splash_text}>{platformText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splash_text: {
    color: '#000000',
    fontSize: 25,
  }
});

const platformText = Platform.select({
  ios: "Splash for iOS",
  android: "Splash for Android",
});