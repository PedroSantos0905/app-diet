import React from 'react';
import {View, Text, StyleSheet, ImageBackground, StatusBar} from 'react-native';
//import {useNavigation} from '@react-navigation/native';

import Azul from '../assets/Azul.png';

// import api from '../services/api';

export default function Page1() {
  // const navigation = useNavigation();

  // function navigateToDetail() {
  //   navigation.navigate('Page2');
  // }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#86D3F1" />
      <View style={styles.container}>
        <ImageBackground source={Azul} style={styles.planoFundo}>
          <Text style={styles.title}>Scrum Diet</Text>
          <Text style={styles.description}>
            Depois faço uma baguncinha aqui!
          </Text>
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
    fontSize: 54,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },

  description: {
    fontSize: 24,
    color: '#FFF',
    width: '80%',
    textAlign: 'center',
  },
});
