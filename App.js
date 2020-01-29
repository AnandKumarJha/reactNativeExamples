import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import reduxExample from './screens/reduxExample';
import reduxExample2 from './screens/reduxExample2';

const MainNavigator = createStackNavigator({
  reduxExample : {
    screen : reduxExample,
  },
  reduxExample2 : {
    screen : reduxExample2,
  },
  Home:{
    screen : Home,
    navigationOptions : {
      headerTitle : "Home",
      headerShown : true,
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: "Hello",
      headerShown: false
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      headerTintColor: '#ff0000',
      headerTitle: "Signup",
      headerShown: true,
      headerStyle: {
        backgroundColor: '#00ff00'
      }
    },
  },
});

const App = createAppContainer(MainNavigator);

export default App;