import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Tmb from '../pages/Tmb';
import Scrum from '../pages/Scrum';

import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';

const Auth = createStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator screenOptions={{headerShown: false}}>
    <Auth.Screen name="Tmb" component={Tmb} />
    <Auth.Screen name="Scrum" component={Scrum} />

    <Auth.Screen name="Page1" component={Page1} />
    <Auth.Screen name="Page2" component={Page2} />
  </Auth.Navigator>
);

export default AuthRoutes;
