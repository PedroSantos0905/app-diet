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

  function navigateToTMB() {
    navigation.navigate('Tmb');
  }

  function navigateToIntroduction() {
    navigation.navigate('Introduction');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#F0F0F0" />
      <View style={styles.container}>
        <ImageBackground source={Cinza} style={styles.planoFundo}>
          <View>
            <Text style={styles.title}>O que é Scrum?</Text>
            <Text style={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </View>

          <View style={styles.buttonSpace}>
            <TouchableOpacity
              onPress={() => navigateToTMB()}
              style={styles.button}>
              <Text style={styles.buttonText}>Voltar para tela TMB</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateToIntroduction()}
              style={styles.button}>
              <Text style={styles.buttonText}>Ir para tela de introdução!</Text>
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
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    height: 400,
    paddingHorizontal: 20,
    marginTop: 20,
  },

  buttonSpace: {
    flexDirection: 'column',
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
    borderRadius: 15,
    borderColor: '#333',
    //backgroundColor: '#86D3F1',
    paddingHorizontal: 10,
    marginTop: 10,
  },

  buttonText: {
    fontSize: 22,
    color: '#000',
  },
});
