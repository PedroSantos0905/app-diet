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

import Amarelo from '../assets/Amarelo.png';

export default function Tmb() {
  const navigation = useNavigation();

  function navigateToScrum() {
    navigation.navigate('Scrum');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#F4DC6E" />
      <View style={styles.container}>
        <ImageBackground source={Amarelo} style={styles.planoFundo}>
          <View style={styles.viewTitle}>
            <Text style={styles.title}>O que é TMB?</Text>
          </View>
          <View style={styles.vazio} />
          <View style={styles.viewDescription}>
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

  viewTitle: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#DF72A3',
    backgroundColor: '#DF72A3',
    paddingHorizontal: 20,
    width: '90%',
    alignItems: 'center',
  },

  vazio: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#DF72A3',
    backgroundColor: '#DF72A3',
    paddingHorizontal: 20,
    height: 10,
    width: '90%',
    marginTop: 10,
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    width: 260,
  },

  viewDescription: {
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    marginTop: 10,
    borderColor: '#63bacd',
    backgroundColor: '#63bacd',
  },

  description: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    height: 400,
    paddingHorizontal: 20,
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
    borderColor: '#DF72A3',
    backgroundColor: '#DF72A3',
    paddingHorizontal: 10,
  },

  buttonText: {
    fontSize: 22,
    color: '#FFFFFF',
  },
});
