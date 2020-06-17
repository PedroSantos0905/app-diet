import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  AsyncStorage,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Amarelo from '../assets/Amarelo.png';

import api from '../services/api';

export default function Perfil() {
  const navigation = useNavigation();

  const [perfils, setPerfils] = useState([]);

  useEffect(() => {
    async function loadPerfil() {
      const token = await AsyncStorage.getItem('token', token);
      const response = await api.get('/perfil', {
        params: {},
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPerfils([response.data.perfil]);
    }

    loadPerfil();
  }, []);

  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        <ImageBackground source={Amarelo} style={styles.planoFundo}>
          <View style={styles.containerForm}>
            <View>
              <Text style={styles.titleNome}>Nome:</Text>
              <Text style={styles.title}>Email:</Text>
              <Text style={styles.title}>Idade:</Text>
              <Text style={styles.title}>Peso:</Text>
              <Text style={styles.title}>Altura:</Text>
              <Text style={styles.title}>Sexo:</Text>
              <Text style={styles.title}>Tipo:</Text>
            </View>

            <FlatList
              style={styles.list}
              data={perfils}
              keyExtractor={perfil => perfil.id_usuario}
              showsVerticalScrollIndicator={false}
              renderItem={({item: perfil}) => (
                <View>
                  <Text style={styles.resultadoNome}>{perfil.nome}</Text>
                  <Text style={styles.resultado}>{perfil.email}</Text>
                  <Text style={styles.resultado}>{perfil.idade}</Text>
                  <Text style={styles.resultado}>{perfil.peso}</Text>
                  <Text style={styles.resultado}>{perfil.altura}</Text>
                  <Text style={styles.resultado}>{perfil.sexo}</Text>
                  <Text style={styles.resultado}>{perfil.tipo}</Text>
                </View>
              )}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigateToHome()}
            style={styles.button}>
            <Text style={styles.buttonText}>Home</Text>
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
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  containerForm: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
    elevation: 5,
    width: '94%',
    height: '80%',
    paddingHorizontal: 10,
  },

  titleNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F0F0F0',
    height: 40,
    marginBottom: 10,
    marginLeft: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F0F0F0',
    height: 30,
    marginBottom: 10,
    marginLeft: 10,
  },

  list: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },

  resultadoNome: {
    fontSize: 16,
    color: '#FFFFFF',
    width: 260,
    height: 40,
    marginBottom: 10,
  },

  resultado: {
    fontSize: 16,
    color: '#FFFFFF',
    width: 260,
    height: 30,
    marginBottom: 10,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
    elevation: 5,
    height: 50,
    width: 360,
  },

  buttonText: {
    fontSize: 22,
    color: '#FFFFFF',
  },
});
