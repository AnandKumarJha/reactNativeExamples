import React from 'react';
import { View, Text } from 'react-native';
import LoginComponent from '../component/LoginComponent';
import SplashComponent from '../component/SplashComponent';

export default class Splash extends React.Component {

  state = {
    isSplashToShow: true,
  }

  componentDidMount() {
    console.log("toShowSplash "+this.props.navigation.getParam('toShowSplash'));
    setTimeout(() => {
      this.setState({ isSplashToShow: false })
    }, 3000);
  }

  navigateToSignUpScreen() {
    this.props.navigation.navigate('Signup');
  }

  render() {
    if (this.state.isSplashToShow) {
      return (
        <SplashComponent />
      );
    } else {
      return (
        <LoginComponent onSignUpClicked={() => this.navigateToSignUpScreen()} />
      );
    }
  }
}