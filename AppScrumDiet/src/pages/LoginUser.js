import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StatusBar,
  AsyncStorage,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Laranja from '../assets/Laranja.png';

import api from '../services/api';

export default function LoginUser() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useNavigation();

  // useEffect(() => {
  //   AsyncStorage.getItem('usuario').then(usuario => {
  //     if (usuario) {
  //       navigation.navigate('Perfil');
  //     }
  //   });
  // }, [navigation]);

  // async function _storeData() {

  // }

  // async function _retrieveData() {
  //   try {
  //     const token = await AsyncStorage.getItem('token');
  //     if (token !== null) {
  //       // We have data!!
  //       console.log(token);
  //     }
  //   } catch (error) {
  //     // Error retrieving data
  //     console.log(error);
  //   }
  // }

  async function navigateToCalculoTMB() {
    const response = await api.post('/usuarios/login', {
      senha,
      email,
    });

    console.log(response.data);

    const {token, usuario} = response.data;

    try {
      await AsyncStorage.setItem('token', response.data.token);
      console.log(token);
    } catch (error) {
      // Error saving data
      console.log(error);
    }

    //await AsyncStorage.setItem('email', email);
    //await AsyncStorage.setItem('senha', senha);
    //await AsyncStorage.setItem('@AppScrumDiet:token', token);
    //await AsyncStorage.setItem('@AppScrumDiet:usuario', usuario);

    console.log(token);

    navigation.navigate('CalculoTmb', {usuario});
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FFBD87" />
      <View style={styles.container}>
        <ImageBackground source={Laranja} style={styles.planoFundo}>
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

          <TouchableOpacity
            onPress={() => navigateToCalculoTMB()}
            style={styles.button}>
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>
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

  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 50,
  },

  viewForm: {
    flexDirection: 'row',
  },

  text: {
    fontSize: 18,
    color: '#000',
    width: '30%',
    paddingTop: 25,
    paddingLeft: 25,
  },

  input: {
    width: '60%',
    borderBottomWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
    textAlign: 'center',
    marginRight: 20,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 50,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#fd6b22',
    //backgroundColor: '#86D3F1',
    marginTop: 50,
  },

  buttonText: {
    fontSize: 24,
    color: '#000',
  },
});
