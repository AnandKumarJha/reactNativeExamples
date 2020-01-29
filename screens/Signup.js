import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpComponent from '../component/SignUpComponent';

export default class MyApp extends React.Component {

  onLoginClicked = () => {
    this.props.navigation.navigate('Login')
  }

  onSignUpClicked = (state) => {
    console.log(state);
    //this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <SignUpComponent
        onLoginClicked={() => this.onLoginClicked()}
        onSignUpClicked={(state) => this.onSignUpClicked(state)} />
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
});
