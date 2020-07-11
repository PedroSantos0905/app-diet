import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Amarelo from '../assets/Amarelo.png';

import api from '../services/api';

export default function SprintList() {
  const navigation = useNavigation();

  const [id_sprint, setId_sprint] = useState('');
  const [nome, setNome] = useState('');

  function navigateToGroupScrum() {
    navigation.navigate('GroupScrum');
  }

  async function navigateToConfirm() {
    const token = await AsyncStorage.getItem('token', token);
    const response = await api.put(
      '/sprint/adicionarUsuario',
      {
        id_sprint,
        nome,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const {usuario} = response.data;

    navigation.navigate('GroupScrum', {usuario});
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        <ImageBackground source={Amarelo} style={styles.planoFundo}>
          <Text style={styles.text}>Numeração do Grupo:</Text>
          <TextInput
            style={styles.input}
            placeholder="Numeração da sprint"
            placeholderTextColor="#8D8E8E"
            autoCapitalize="words"
            autoCorrect={false}
            value={id_sprint}
            onChangeText={setId_sprint}
          />

          <Text style={styles.text}>Nome de usuário:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome de usuário"
            placeholderTextColor="#8D8E8E"
            autoCapitalize="words"
            autoCorrect={false}
            value={nome}
            onChangeText={setNome}
          />

          <View style={styles.buttonSpace}>
            <TouchableOpacity
              onPress={() => navigateToGroupScrum()}
              style={styles.buttonNavigation}>
              <Text style={styles.textNavigation}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateToConfirm()}
              style={styles.buttonNavigation}>
              <Text style={styles.textNavigation}>Confirmar</Text>
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

  buttonSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 100,
    width: '100%',
    paddingHorizontal: 10,
  },

  buttonNavigation: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
    paddingHorizontal: 10,
    marginTop: 10,
  },

  textNavigation: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 360,
    height: 40,
  },

  text: {
    fontSize: 18,
    color: '#5C65CF',
    width: '98%',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingTop: 25,
    paddingLeft: 25,
  },

  input: {
    width: '90%',
    borderBottomWidth: 1,
    borderColor: '#5C65CF',
    marginBottom: 10,
    textAlign: 'center',
  },
});
