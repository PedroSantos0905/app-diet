import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Amarelo from '../assets/Amarelo.png';

import api from '../services/api';

export default function Perfil() {
  const navigation = useNavigation();

  //const [perfils, setPerfils] = useState([]);

  useEffect(() => {
    async function loadPerfil() {
      const token = await AsyncStorage.getItem('token', token);
      const response = await api.get(
        '/perfil',
        {
          nome: nome,
          email: email,
          idade: idade,
          peso: peso,
          altura: altura,
          sexo: sexo,
          tipo: tipo,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      //setPerfils(response.data);

      const {nome, email, idade, peso, altura, sexo, tipo} = response.data;

      await AsyncStorage.getItem('nome', nome);
      await AsyncStorage.getItem('email', email);
      await AsyncStorage.getItem('idade', idade);
      await AsyncStorage.getItem('peso', peso);
      await AsyncStorage.getItem('altura', altura);
      await AsyncStorage.getItem('sexo', sexo);
      await AsyncStorage.getItem('tipo', tipo);
    }

    loadPerfil();
  }, []);

  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#F4DC6E" />
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

            {/* <FlatList
              data={perfils}
              keyExtractor={perfil => perfil._id}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <View>
                  <Text style={styles.resultadoNome} key={item}>
                    {item.nome}
                  </Text>
                  <Text style={styles.resultado}>{item.email}</Text>
                  <Text style={styles.resultado}>{item.idade}</Text>
                  <Text style={styles.resultado}>{item.peso}</Text>
                  <Text style={styles.resultado}>{item.altura}</Text>
                  <Text style={styles.resultado}>{item.sexo}</Text>
                  <Text style={styles.resultado}>{item.tipo}</Text>
                </View>
              )}
            /> */}

            <View>
              <Text style={styles.resultadoNome}>
                Willian Takeshi Komada Nobrega Takeshi Komada Nobrega
              </Text>
              <Text style={styles.resultado}>willian@gmail.com</Text>
              <Text style={styles.resultado}>22 anos</Text>
              <Text style={styles.resultado}>72 quilos</Text>
              <Text style={styles.resultado}>183 centímetros</Text>
              <Text style={styles.resultado}>masculino</Text>
              <Text style={styles.resultado}>freemium</Text>
            </View>
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
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F0F0F0',
    height: 30,
    marginBottom: 10,
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
