/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import Login from './src/Pages/Unauthenticated/login';
import React from 'react';
import RootNavigation from './src/Pages/RootNavigation';
import Home from './src/Pages/Authenticated/Home';

const App = () => {
  return <RootNavigation />;
};

AppRegistry.registerComponent(appName, () => App);
