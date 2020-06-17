import 'react-native-gesture-handler';

import React from 'react';
import {YellowBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';

YellowBox.ignoreWarnings(['AsyncStorage', 'key']);

const App = () => (
  <NavigationContainer>
    <Routes />
  </NavigationContainer>
);

export default App;
