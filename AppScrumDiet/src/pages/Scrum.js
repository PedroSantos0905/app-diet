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
      <StatusBar barStyle="light-content" backgroundColor="#F4DC6E" />
      <View style={styles.container}>
        <ImageBackground source={Amarelo} style={styles.planoFundo}>
          <View style={styles.viewTitle}>
            <Text style={styles.title}>O que é Scrum?</Text>
          </View>

          <View style={styles.vazio} />

          <View style={styles.viewDescription}>
            <Text style={styles.description}>
              O Scrum é uma metodologia que auxilia no planejamento e
              gerenciamento de projetos de forma ágil. Seu funcionamento inclui
              um integrante como o "líder" de grupo e outros integrantes como a
              "equipe".
            </Text>
          </View>

          <View style={styles.buttonSpace}>
            <TouchableOpacity
              onPress={() => navigateToTMB()}
              style={styles.button}>
              <Text style={styles.buttonText}>Anterior</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateToIntroduction()}
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
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
    paddingHorizontal: 20,
    width: '90%',
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  vazio: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
    paddingHorizontal: 20,
    height: 10,
    width: '90%',
    marginTop: 10,
  },

  viewDescription: {
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    marginTop: 10,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
  },

  description: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    height: 400,
    paddingHorizontal: 20,
    paddingTop: 50,
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
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
    paddingHorizontal: 10,
    marginTop: 10,
  },

  buttonText: {
    fontSize: 22,
    color: '#FFFFFF',
  },
});
