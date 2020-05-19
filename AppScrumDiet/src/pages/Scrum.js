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

import Cinza from '../assets/Cinza.png';

export default function Scrum() {
  const navigation = useNavigation();

  function navigateTo() {
    navigation.navigate('Tmb');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#F0F0F0" />
      <View style={styles.container}>
        <ImageBackground source={Cinza} style={styles.planoFundo}>
          <View>
            <Text>Olá mundo! Vamos Falar de Scrum!</Text>
          </View>

          <View style={styles.buttonSpace}>
            <TouchableOpacity
              onPress={() => navigateTo()}
              style={styles.button}>
              <Text style={styles.buttonText}>Voltar para tela TMB</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateTo()}
              style={styles.button}>
              <Text style={styles.buttonText}>Bora calcular sua TMB!</Text>
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
    flexDirection: 'column',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 360,
    height: 50,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#000091',
    //backgroundColor: '#86D3F1',
    marginTop: 50,
  },

  buttonText: {
    fontSize: 22,
    color: '#000',
  },
});
