import React from 'react';
import { StyleSheet, Text, View, Image, Platform, TextInput, ActivityIndicator, Keyboard } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Indicator from './Indicator';

export default class LoginComponent extends React.Component {

  state = {
    username: '',
    password: '',
    indicatorToShow: false,
  }

  //conventional way
  updateUsername(username) {
    this.setState({ username: username });
  }

  //arrow function
  updatePassword = (password) => this.setState({ password: password });

  loginPressed = () => {
    this.setState({ indicatorToShow: true })
    Keyboard.dismiss();

    return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({students : responseJson.movies})
      this.setState({ indicatorToShow: false });
    })
    .catch((error) => {
      this.setState({ indicatorToShow: false });
      console.error(error);
    });

    // setTimeout(() => {
    //   this.setState({ indicatorToShow: false })
    // }, 3000)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isSplashToShow: false })
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/react-512.png')}
          style={{ width: 200, height: 200 }} />

        <Text style={styles.splash_text}>User Login</Text>

        <TextInput
          style={styles.username}
          placeholder="Username"
          onChangeText={(text) => this.updateUsername(text)}
          autoCompleteType="username"
          returnKeyType={"next"}
          onSubmitEditing={() => { this.password.focus(); }}
          blurOnSubmit={false} />

        <TextInput
          style={styles.username}
          placeholder="Password"
          onChangeText={(text) => this.updatePassword(text)}
          autoCompleteType="password"
          returnKeyType="done"
          secureTextEntry={true}
          ref={(input) => { this.password = input; }}
          blurOnSubmit={true} />

        <View style={{ alignSelf: 'stretch', marginHorizontal: 15 }}>
          <TouchableOpacity style={styles.button_style} onPress={() => this.loginPressed()}>
            <Text style={{ color: '#000000', fontSize: 20 }}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.signup_text}>Not created account yet?</Text>
          <TouchableOpacity onPress={() => this.props.onSignUpClicked()}>
            <Text style={styles.signup_text_blue}> Signup</Text>
          </TouchableOpacity>
        </View>
        <Indicator indicatorToShow={this.state.indicatorToShow} />
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
  username: {
    borderColor: '#000000',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignSelf: 'stretch',
    marginHorizontal: 15,
    fontSize: 18,
  },
  splash_text: {
    marginStart: 10,
    color: '#000000',
    fontSize: 30
  },
  button_style: {
    backgroundColor: '#00ff00',
    padding: 12,
    borderRadius: 5,
    marginVertical: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    width: '100%',
  },
  signup_text: {
    color: '#000000'
  },
  signup_text_blue: {
    color: '#0000ff'
  },
});