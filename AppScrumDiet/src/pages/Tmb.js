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

import Azul from '../assets/Azul.png';

export default function Tmb() {
  const navigation = useNavigation();

  function navigateTo() {
    navigation.navigate('Scrum');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#86D3F1" />
      <View style={styles.container}>
        <ImageBackground source={Azul} style={styles.planoFundo}>
          <View>
            <Text>Olá mundo! Vamos Falar de TMB!</Text>
          </View>

          <TouchableOpacity onPress={() => navigateTo()} style={styles.button}>
            <Text style={styles.buttonText}>Navegar para tela SCRUM</Text>
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

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
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
