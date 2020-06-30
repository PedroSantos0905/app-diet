import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  FlatList,
  AsyncStorage,
  SafeAreaView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Amarelo from '../assets/Amarelo.png';
import Eye from '../assets/Eye.png';

import api from '../services/api';

export default function Refeicao() {
  const navigation = useNavigation();

  const [refeicoes, setRefeicoes] = useState([]);

  useEffect(() => {
    async function loadData() {
      const token = await AsyncStorage.getItem('token', token);
      const response = await api.get('/refeicaoUsuario/refeicoes', {
        params: {},
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setRefeicoes(response.data.refeicoes);
    }

    loadData();
  }, []);

  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <SafeAreaView style={styles.container}>
        <ImageBackground source={Amarelo} style={styles.planoFundo}>
          <View style={styles.containerFlat}>
            <FlatList
              data={refeicoes}
              keyExtractor={refeicao => refeicao.id_usuario}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <View style={styles.refeicaoContainer}>
                  <Text style={styles.nome}>{item.nome}</Text>
                  <Text style={styles.data}>
                    <Text style={styles.bold}>Data:</Text> {item.data}
                  </Text>
                  <Text style={styles.hora}>
                    <Text style={styles.bold}>Horário:</Text> {item.hora}
                  </Text>
                  <Text style={styles.calorias}>
                    <Text style={styles.bold}>Calorias:</Text> {item.calorias}
                  </Text>

                  <TouchableOpacity style={styles.buttonVer}>
                    <Image source={Eye} style={styles.iconEye} />
                  </TouchableOpacity>
                </View>
              )}
            />

            <TouchableOpacity
              onPress={() => navigateToHome()}
              style={styles.button}>
              <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
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

  containerFlat: {
    marginVertical: 10,
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
    marginTop: 10,
  },

  buttonText: {
    fontSize: 22,
    color: '#FFFFFF',
  },

  refeicaoContainer: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
    marginBottom: 20,
    width: 360,
    height: 150,
  },

  bold: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 10,
  },

  data: {
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 20,
    marginTop: 10,
  },

  hora: {
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 20,
  },

  calorias: {
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 20,
  },

  iconEye: {
    width: 30,
    height: 30,
    resizeMode: 'center',
    marginLeft: 320,
  },
});
