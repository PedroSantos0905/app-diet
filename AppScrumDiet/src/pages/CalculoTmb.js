import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StatusBar,
  AsyncStorage,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Laranja from '../assets/Laranja.png';

import api from '../services/api';
//import auth from '../services/auth';

export default function CalculoTmb() {
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [sexo, setSexo] = useState('');

  const navigation = useNavigation();

  // useEffect(() => {
  //   AsyncStorage.getItem('usuario').then(usuario => {
  //     if (usuario) {
  //       navigation.navigate('Perfil');
  //     }
  //   });
  // }, [navigation]);

  // async function _retrieveData() {
  //   try {
  //     const token = await AsyncStorage.getItem('token');
  //     if (token !== null) {
  //       // We have data!!
  //       console.log(token);
  //     }
  //   } catch (error) {
  //     // Error retrieving data
  //     console.log(error);
  //   }
  // }

  async function navigateToPerfil() {
    const token = await AsyncStorage.getItem('token', token);
    const response = await api.put(
      '/usuarios/dadosTmb',
      {
        idade,
        peso,
        altura,
        sexo,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          //Authorization: `Bearer ${token}`,
        },
      },
    );

    console.log(response.data);
    const {usuario} = response.data;

    // try {
    //   await AsyncStorage.getItem('token', response.data.token);
    //   console.log(token);
    // } catch (error) {
    //   // Error saving data
    //   console.log(error);
    // }

    //await AsyncStorage.setItem('usuario', token);
    //await AsyncStorage.getItem('token', response.data.token);
    console.log(token);
    //await AsyncStorage.getItem('@AppScrumDiet:usuario', usuario);

    navigation.navigate('Perfil', {token, usuario});
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FFBD87" />
      <View style={styles.container}>
        <ImageBackground source={Laranja} style={styles.planoFundo}>
          <Text style={styles.title}>Scrum Diet</Text>
          <View style={styles.viewForm}>
            <Text style={styles.text}>Idade:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua idade"
              placeholderTextColor="#8D8E8E"
              keyboardType="numeric"
              autoCapitalize="words"
              autoCorrect={false}
              value={idade}
              onChangeText={setIdade}
            />
          </View>

          <View style={styles.viewForm}>
            <Text style={styles.text}>Peso:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu peso"
              placeholderTextColor="#8D8E8E"
              keyboardType="numeric"
              autoCapitalize="words"
              autoCorrect={false}
              value={peso}
              onChangeText={setPeso}
            />
          </View>

          <View style={styles.viewForm}>
            <Text style={styles.text}>Altura:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua altura"
              placeholderTextColor="#8D8E8E"
              keyboardType="numeric"
              autoCapitalize="words"
              autoCorrect={false}
              value={altura}
              onChangeText={setAltura}
            />
          </View>

          <View style={styles.viewForm}>
            <Text style={styles.text}>Sexo:</Text>
            <TextInput
              style={styles.input}
              placeholder="Qual é o seu sexo?"
              placeholderTextColor="#8D8E8E"
              keyboardType="numeric"
              autoCapitalize="words"
              autoCorrect={false}
              value={sexo}
              onChangeText={setSexo}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigateToPerfil()}
            style={styles.button}
            activeOpacity={0.5}>
            <Text style={styles.buttonText}>Finalizar</Text>
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

  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 50,
  },

  viewForm: {
    flexDirection: 'row',
  },

  text: {
    fontSize: 18,
    color: '#000',
    width: '30%',
    paddingTop: 25,
    paddingLeft: 25,
  },

  input: {
    width: '60%',
    borderBottomWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
    textAlign: 'center',
    marginRight: 20,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#fd6b22',
    // borderColor: '#ff9000',
    // backgroundColor: '#ff9000',
    marginTop: 50,
  },

  buttonText: {
    fontSize: 24,
    color: '#000',
  },
});
