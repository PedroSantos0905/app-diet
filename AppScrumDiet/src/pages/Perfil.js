import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Laranja from '../assets/Laranja.png';

// import api from '../services/api';

export default function Perfil() {
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FFBD87" />
      <View style={styles.container}>
        <ImageBackground source={Laranja} style={styles.planoFundo}>
          <View style={styles.containerForm}>
            <View>
              <Text style={styles.titleNome}>Nome:</Text>
              <Text style={styles.title}>Email:</Text>
              <Text style={styles.title}>Idade:</Text>
              <Text style={styles.title}>Peso:</Text>
              <Text style={styles.title}>Altura:</Text>
              <Text style={styles.title}>Sexo:</Text>
              <Text style={styles.title}>Tipo:</Text>
            </View>

            <View>
              <Text style={styles.resultadoNome}>
                Willian Takeshi Komada Nobrega
              </Text>
              <Text style={styles.resultado}>willian10komada@hotmail.com</Text>
              <Text style={styles.resultado}>22 Anos</Text>
              <Text style={styles.resultado}>67 Quilos</Text>
              <Text style={styles.resultado}>185 Centímetros</Text>
              <Text style={styles.resultado}>Masculino</Text>
              <Text style={styles.resultado}>Usuário</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigateToHome()}
            style={styles.botao}>
            <Text>Home</Text>
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
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fc9f53',
    backgroundColor: '#fc9f53',
    elevation: 5,
    height: 50,
    width: 360,
  },

  containerForm: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#fc9f53',
    backgroundColor: '#fc9f53',
    elevation: 5,
    width: 340,
    height: 400,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    height: 30,
    marginBottom: 10,
  },

  resultado: {
    fontSize: 18,
    color: '#333',
    width: 260,
    height: 30,
    marginBottom: 10,
  },

  titleNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    height: 80,
    marginBottom: 10,
  },

  resultadoNome: {
    fontSize: 18,
    color: '#333',
    width: 260,
    height: 80,
    marginBottom: 10,
  },
});
