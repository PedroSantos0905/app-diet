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
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Laranja from '../assets/Laranja.png';

import api from '../services/api';

export default function CalculoTmb() {
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [sexo, setSexo] = useState(''); // mudar para masculino ou feminino

  const navigation = useNavigation();

  async function navigateToHome() {
    const token = await AsyncStorage.getItem('token', token);
    const response = await api.put(
      '/usuarios/dadosTmb',
      {
        idade,
        peso,
        altura,
        sexo,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const {usuario} = response.data;

    navigation.navigate('Home', {token, usuario});
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FFBD87" />
      <View style={styles.container}>
        <ImageBackground source={Laranja} style={styles.planoFundo}>
          <Text style={styles.title}>Scrum Diet</Text>
          <View style={styles.viewForm}>
            <Text style={styles.text}>Idade:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua idade"
              placeholderTextColor="#8D8E8E"
              keyboardType="numeric"
              autoCapitalize="words"
              autoCorrect={false}
              value={idade}
              onChangeText={setIdade}
            />
          </View>

          <View style={styles.viewForm}>
            <Text style={styles.text}>Peso:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu peso"
              placeholderTextColor="#8D8E8E"
              keyboardType="numeric"
              autoCapitalize="words"
              autoCorrect={false}
              value={peso}
              onChangeText={setPeso}
            />
          </View>

          <View style={styles.viewForm}>
            <Text style={styles.text}>Altura:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua altura"
              placeholderTextColor="#8D8E8E"
              keyboardType="numeric"
              autoCapitalize="words"
              autoCorrect={false}
              value={altura}
              onChangeText={setAltura}
            />
          </View>

          <View style={styles.viewForm}>
            <Text style={styles.text}>Sexo:</Text>
            <TextInput
              style={styles.input}
              placeholder="Qual é o seu sexo?"
              placeholderTextColor="#8D8E8E"
              keyboardType="numeric"
              autoCapitalize="words"
              autoCorrect={false}
              value={sexo}
              onChangeText={setSexo}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigateToHome()}
            style={styles.button}
            activeOpacity={0.5}>
            <Text style={styles.buttonText}>Finalizar</Text>
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
    width: 360,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#000',
    marginTop: 50,
  },

  buttonText: {
    fontSize: 24,
    color: '#000',
  },
});
