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

  function navigateToScrum() {
    navigation.navigate('Scrum');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#86D3F1" />
      <View style={styles.container}>
        <ImageBackground source={Azul} style={styles.planoFundo}>
          <View>
            <Text style={styles.title}>O que é TMB?</Text>
            <Text style={styles.description}>
              Taxa Metabólica basal é uma forma matemática não exata para
              calcular a quantidade calórica que o corpo humano necessita para
              se manter o peso.
            </Text>
          </View>

          <View style={styles.buttonBottom}>
            <TouchableOpacity
              onPress={() => navigateToScrum()}
              style={styles.button}>
              <Text style={styles.buttonText}>Próximo</Text>
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

  buttonBottom: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 100,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 360,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#000',
    paddingHorizontal: 10,
  },

  buttonText: {
    fontSize: 22,
    color: '#000',
  },
});
