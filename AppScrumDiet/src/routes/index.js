import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Tmb from '../pages/Tmb'; // Introdução sobre TMB
import Scrum from '../pages/Scrum'; // Introdução sobre Scrum
import Introduction from '../pages/Introduction'; // Introdução do App
import User from '../pages/User'; // Cadastro de usuário
import LoginUser from '../pages/LoginUser'; // Login de usuário
import CalculoTmb from '../pages/CalculoTmb'; // Informações de Idade, Peso, Altura e Sexo
import Perfil from '../pages/Perfil'; // Tela principal do usuário

import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';

const Auth = createStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator screenOptions={{headerShown: false}}>
    <Auth.Screen name="Tmb" component={Tmb} />
    <Auth.Screen name="Scrum" component={Scrum} />
    <Auth.Screen name="Introduction" component={Introduction} />
    <Auth.Screen name="User" component={User} />
    <Auth.Screen name="LoginUser" component={LoginUser} />
    <Auth.Screen name="CalculoTmb" component={CalculoTmb} />
    <Auth.Screen name="Perfil" component={Perfil} />

    <Auth.Screen name="Page1" component={Page1} />
    <Auth.Screen name="Page2" component={Page2} />
  </Auth.Navigator>
);

export default AuthRoutes;
