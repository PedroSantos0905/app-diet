import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Laranja from '../assets/Laranja.png';

export default function Introduction() {
  const navigation = useNavigation();

  function navigateToScrum() {
    navigation.navigate('Scrum');
  }

  // Navega para tela User (colocar nome, e-mail, senha, id_tipo_cadastro)
  function navigateToUser() {
    navigation.navigate('User');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FFBD87" />
      <View style={styles.container}>
        <ImageBackground source={Laranja} style={styles.planoFundo}>
          <View>
            <Text style={styles.title}>Scrum Diet</Text>
            <Text style={styles.description}>
              Scrum Diet propõe emagrecer utilizando-se da{' '}
              <Text style={styles.bold}>TMB</Text> e a metodologia{' '}
              <Text style={styles.bold}>SCRUM</Text>, a junção desses dois
              fatores proporcionará a você uma experiência e motivação com
              diversas pessoas.
            </Text>
          </View>

          <View style={styles.buttonSpace}>
            <TouchableOpacity
              onPress={() => navigateToScrum()}
              style={styles.button}>
              <Text style={styles.buttonText}>Anterior</Text>
            </TouchableOpacity>

            {/* botão que navega para tela de user */}
            <TouchableOpacity
              onPress={() => navigateToUser()}
              style={styles.button}>
              <Text style={styles.buttonText}>Cadastrar</Text>
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

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },

  description: {
    fontSize: 24,
    color: '#333',
    textAlign: 'center',
    height: 400,
    paddingHorizontal: 20,
    marginTop: 20,
    paddingTop: 50,
  },

  bold: {
    fontWeight: 'bold',
  },

  buttonSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 100,
    width: '100%',
    paddingHorizontal: 10,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#000',
    paddingHorizontal: 10,
    marginTop: 10,
  },

  buttonText: {
    fontSize: 22,
    color: '#000',
  },
});
