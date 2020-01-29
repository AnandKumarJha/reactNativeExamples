import { AppRegistry, Platform } from 'react-native';
import App from './App';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ACTION_UPDATE from './action/action'

function myReducer(state = { count: 5 }, { type, payload }) {
  switch (type) {
    case ACTION_UPDATE:
      return { ...state, count: payload };
    default:
      return state;
  }
}

const store = createStore(myReducer);
const appToShow = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('testAndroid', () => appToShow);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('testAndroid', { rootTag });
}
