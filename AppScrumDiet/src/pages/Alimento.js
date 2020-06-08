import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Amarelo from '../assets/Amarelo.png';

// import api from '../services/api';

export default function Alimento() {
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#86D3F1" />
      <View style={styles.container}>
        <ImageBackground source={Amarelo} style={styles.planoFundo}>
          <Text style={styles.title}>Tela de alimentos!</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#54c2ea',
    backgroundColor: '#54c2ea',
    elevation: 5,
    height: 50,
    width: 360,
  },
});
