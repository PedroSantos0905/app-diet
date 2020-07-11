import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StatusBar,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import api from '../services/api';

import Amarelo from '../assets/Amarelo.png';
import Logo from '../assets/Logo.png';

export default function User() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useNavigation();

  async function navigateToLogin() {
    const response = await api.post('/usuarios', {
      nome,
      email,
      senha,
      id_tipo_cadastro: 1,
    });

    const {usuario} = response.data;

    navigation.navigate('LoginUser', {usuario});
  }

  function button() {
    navigation.navigate('LoginUser');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        <ImageBackground source={Amarelo} style={styles.planoFundo}>
          <View style={styles.imageContainer}>
            <Image source={Logo} style={styles.image} />
          </View>

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
            <Text style={styles.text}>Nome:</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome de usuário"
              placeholderTextColor="#8D8E8E"
              autoCapitalize="words"
              autoCorrect={false}
              value={nome}
              onChangeText={setNome}
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
            <TouchableOpacity onPress={navigateToLogin} style={styles.button}>
              <Text style={styles.buttonText}>Criar conta</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={button} style={styles.login}>
              <Text style={styles.buttonTextLogin}>Já tenho conta!</Text>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
  },

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 80,
  },

  image: {
    height: 200,
    width: 200,
    resizeMode: 'cover',
  },

  viewForm: {
    flexDirection: 'row',
    width: '100%',
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
    marginTop: 40,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
  },

  buttonText: {
    fontSize: 22,
    color: '#FFFFFF',
  },

  login: {
    borderBottomWidth: 1,
    width: 100,
    borderColor: '#5C65CF',
    paddingTop: 5,
  },

  buttonTextLogin: {
    textAlign: 'center',
    color: '#5C65CF',
  },
});
