import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StatusBar,
  AsyncStorage,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Amarelo from '../assets/Amarelo.png';
import Logo from '../assets/Logo.png';

import api from '../services/api';

export default function LoginUser() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useNavigation();

  async function navigateToCalculoTMB() {
    const response = await api.post('/usuarios/login', {
      senha,
      email,
    });

    const {token, usuario} = response.data;

    await AsyncStorage.setItem('token', response.data.token);

    navigation.navigate('CalculoTmb', {token, usuario});
  }

  function button() {
    navigation.navigate('User');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        <ImageBackground source={Amarelo} style={styles.planoFundo}>
          <Image source={Logo} style={styles.image} />

          <Text style={styles.title}>Scrum Diet</Text>

          <View style={styles.viewForm}>
            <Text style={styles.text}>E-mail:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#8D8E8E"
              keyboardType="email-address"
              autoCapitalize="words"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.viewForm}>
            <Text style={styles.text}>Senha:</Text>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#8D8E8E"
              secureTextEntry={true}
              autoCapitalize="words"
              autoCorrect={false}
              value={senha}
              onChangeText={setSenha}
            />
          </View>

          <View style={styles.buttonView}>
            <TouchableOpacity
              onPress={() => navigateToCalculoTMB()}
              style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={button} style={styles.login}>
              <Text style={styles.buttonTextLogin}>Criar conta!</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  planoFundo: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: 120,
    width: 140,
    resizeMode: 'cover',
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 50,
  },

  viewForm: {
    flexDirection: 'row',
  },

  text: {
    fontSize: 18,
    color: '#5C65CF',
    width: '30%',
    paddingTop: 25,
    paddingLeft: 25,
  },

  input: {
    width: '60%',
    borderBottomWidth: 1,
    borderColor: '#5C65CF',
    marginBottom: 10,
    textAlign: 'center',
    marginRight: 20,
  },

  buttonView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 100,
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 50,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 360,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
  },

  buttonText: {
    fontSize: 24,
    color: '#FFFFFF',
  },

  login: {
    borderBottomWidth: 1,
    width: 80,
    borderColor: '#5C65CF',
    paddingTop: 5,
  },

  buttonTextLogin: {
    textAlign: 'center',
    color: '#5C65CF',
  },
});
