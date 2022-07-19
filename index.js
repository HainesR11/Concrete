/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import Login from './src/Unauthenticated/login';
import React from 'react';

const App = () => {
  return <Login />;
};

AppRegistry.registerComponent(appName, () => App);
