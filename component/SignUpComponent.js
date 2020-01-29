import React from 'react';
import { StyleSheet, Text, View, Image, Platform, TextInput } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import ProfilePic from '../component/ProfilePic';

export default class SignUpComponent extends React.Component {

  state = {
    profile_pic: '',
    username: '',
    email: '',
    password: '',
    mobile_num: '',
    fileUri: ''
  }

  //conventional way
  updateUsername(username) {
    this.setState({ username: username });
  }

  //arrow function
  updatePassword = (password) => this.setState({ password: password });
  updateEmail = (email) => this.setState({ email: email });
  updateMobileNum = (mobile_num) => this.setState({ mobile_num: mobile_num });
  updateProfilePic = (profile_pic) => this.setState({ profile_pic: profile_pic });

  signUpClicked = () => this.props.onSignUpClicked(this.state)

  navigateToLogin = () => {
    this.props.onLoginClicked();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isSplashToShow: false })
    }, 3000);
  }

  chooseFile = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    /**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info in the API Reference)
 */
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          fileUri: response.data
        });
      }
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <ProfilePic fileUri={this.state.fileUri} chooseFileForChild={() => this.chooseFile()} />
          <Text style={styles.splash_text}>User Signup</Text>

          <TextInput
            style={styles.username}
            placeholder="Username"
            onChangeText={(text) => this.updateUsername(text)}
            returnKeyType={"next"}
            ref={(input) => { this.username = input; }}
            onSubmitEditing={() => { this.email.focus(); }}
            blurOnSubmit={false} />

          <TextInput
            style={styles.username}
            placeholder="Email"
            onChangeText={(text) => this.updateEmail(text)}
            returnKeyType={"next"}
            ref={(input) => { this.email = input; }}
            onSubmitEditing={() => { this.password.focus(); }}
            blurOnSubmit={false} />

          <TextInput
            secureTextEntry={true}
            style={styles.username}
            placeholder="Password"
            onChangeText={(text) => this.updatePassword(text)}
            returnKeyType={"next"}
            ref={(input) => { this.password = input; }}
            onSubmitEditing={() => { this.mobile_num.focus(); }}
            blurOnSubmit={false} />

          <TextInput
            style={styles.username}
            placeholder="Mobile Number"
            onChangeText={(text) => this.updateMobileNum(text)}
            ref={(input) => { this.mobile_num = input; }}
            blurOnSubmit={true} />

          <View style={{ alignSelf: 'stretch', marginHorizontal: 15 }}>
            <TouchableOpacity style={styles.button_style} onPress={() => this.signUpClicked()}>
              <Text style={{ color: '#000000', fontSize: 20 }}>Signup</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.signup_text}>Already Signup?</Text>
            <TouchableOpacity onPress={() => this.navigateToLogin()}>
              <Text style={styles.signup_text_blue}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    fontSize: 18
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