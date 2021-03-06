import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Init from '../pages/Init'; // Tela Inicial
import User from '../pages/User'; // Cadastro de usuário
import LoginUser from '../pages/LoginUser'; // Login de usuário
import CalculoTmb from '../pages/CalculoTmb'; // Informações de Idade, Peso, Altura e Sexo
import Home from '../pages/Home'; // Tela principal do usuário
import Tmb from '../pages/Tmb'; // Introdução sobre TMB
import Scrum from '../pages/Scrum'; // Introdução sobre Scrum
import Introduction from '../pages/Introduction'; // Introdução do App
import Perfil from '../pages/Perfil'; // Tela de perfil do usuário
import Alimento from '../pages/Alimento'; // Tela que faz a listagem dos alimentos e cadastro de refeição
import Refeicao from '../pages/Refeicao'; // Tela que lista as refeições

import ScrumList from '../pages/ScrumList'; // Lista os grupos Scrum e botão para criar um
import CreateScrum from '../pages/CreateScrum'; // Cria grupo Scrum
import GroupScrum from '../pages/GroupScrum'; // Group de Scrum
import SprintList from '../pages/SprintList'; // Lista as Sprints (refeições e dias da semana)
import SprintManageList from '../pages/SprintManageList'; // Gerencia as Sprints por dia
import SprintManage from '../pages/SprintManage'; // Gerencia/Cria os alimentos das sprint
import AddUser from '../pages/AddUser'; // Adiciona amigo ao grupo

const Auth = createStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator screenOptions={{headerShown: false}}>
    <Auth.Screen name="Init" component={Init} />
    <Auth.Screen name="User" component={User} />
    <Auth.Screen name="LoginUser" component={LoginUser} />
    <Auth.Screen name="CalculoTmb" component={CalculoTmb} />
    <Auth.Screen name="Home" component={Home} />
    <Auth.Screen name="Tmb" component={Tmb} />
    <Auth.Screen name="Scrum" component={Scrum} />
    <Auth.Screen name="Introduction" component={Introduction} />
    <Auth.Screen name="Perfil" component={Perfil} />
    <Auth.Screen name="Alimento" component={Alimento} />
    <Auth.Screen name="Refeicao" component={Refeicao} />
    <Auth.Screen name="ScrumList" component={ScrumList} />
    <Auth.Screen name="CreateScrum" component={CreateScrum} />
    <Auth.Screen name="GroupScrum" component={GroupScrum} />
    <Auth.Screen name="SprintList" component={SprintList} />
    <Auth.Screen name="SprintManageList" component={SprintManageList} />
    <Auth.Screen name="SprintManage" component={SprintManage} />
    <Auth.Screen name="AddUser" component={AddUser} />
  </Auth.Navigator>
);

export default AuthRoutes;
