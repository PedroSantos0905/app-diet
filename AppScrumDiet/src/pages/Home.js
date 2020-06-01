import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Azul from '../assets/Azul.png';
import Perfil from '../assets/Perfil.png';
import Plus from '../assets/Plus.png';

// import api from '../services/api';

export default function Home() {
  const navigation = useNavigation();

  function navigateToPerfil() {
    navigation.navigate('Perfil');
  }

  function navigateToAlimento() {
    navigation.navigate('Alimento');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#86D3F1" />
      <View style={styles.container}>
        <ImageBackground source={Azul} style={styles.planoFundo}>
          <View style={styles.dataContainer}>
            <Text style={styles.data}>29/05/2020</Text>
          </View>

          <View style={styles.contadorContainer}>
            <Text style={styles.calorias}>Calorias</Text>
            <Text style={styles.valorCalorias}>2500</Text>
          </View>

          <View style={styles.foodContainer}>
            <Text style={styles.foodText}>Refeições</Text>
            <TouchableOpacity
              style={styles.buttonFood}
              onPress={() => navigateToAlimento()}>
              <Text style={styles.foodTextButton}>Adicionar</Text>
              <Image source={Plus} style={styles.iconPlus} />
            </TouchableOpacity>
          </View>

          <View style={styles.containerBottom}>
            <TouchableOpacity style={styles.buttonNavigation}>
              <Image source={Perfil} style={styles.iconImage} />
              <Text style={styles.textNavigation}>Vazio</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonNavigation}>
              <Image source={Perfil} style={styles.iconImage} />
              <Text style={styles.textNavigation}>Vazio</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateToPerfil()}
              style={styles.buttonNavigation}>
              <Image source={Perfil} style={styles.iconImage} />
              <Text style={styles.textNavigation}>Perfil</Text>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  dataContainer: {
    justifyContent: 'center',
    width: '100%',
    height: 80,
    paddingHorizontal: 20,
  },

  data: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    width: 140,
    borderBottomWidth: 1,
    borderColor: '#333',
  },

  contadorContainer: {
    width: 360,
    height: 200,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#54c2ea',
    backgroundColor: '#54c2ea',
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  calorias: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },

  valorCalorias: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 40,
    color: '#333',
    width: 120,
    height: 120,
    borderWidth: 1,
    borderRadius: 60,
    borderColor: '#fff',
  },

  foodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    width: 360,
    height: 120,
    marginTop: 40,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#54c2ea',
    backgroundColor: '#54c2ea',
    elevation: 10,
  },

  foodText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  foodTextButton: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 80,
    height: 40,
  },

  buttonFood: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#54c2ea',
    backgroundColor: '#54c2ea',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerBottom: {
    width: 360,
    height: 100,
    marginTop: 140,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#54c2ea',
    backgroundColor: '#54c2ea',
    elevation: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },

  buttonNavigation: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#54c2ea',
    backgroundColor: '#54c2ea',
    elevation: 5,
    alignItems: 'center',
  },

  textNavigation: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    width: 60,
    height: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  iconImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  iconPlus: {
    width: 40,
    height: 40,
    resizeMode: 'center',
  },
});
