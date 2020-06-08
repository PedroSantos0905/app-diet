import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Amarelo from '../assets/Amarelo.png';

// import api from '../services/api';

export default function Page1() {
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate('Page2');
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={Amarelo} style={styles.planoFundo}>
        <Text style={styles.title}>Scrum Diet</Text>
        <View style={styles.viewForm}>
          <Text style={styles.text}>E-mail:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome de usuário"
            placeholderTextColor="#8D8E8E"
            autoCapitalize="words"
            autoCorrect={false}
            //value={name}
            //onChangeText={setName}
          />
        </View>

        <View style={styles.viewForm}>
          <Text style={styles.text}>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome de usuário"
            placeholderTextColor="#8D8E8E"
            autoCapitalize="words"
            autoCorrect={false}
            //value={name}
            //onChangeText={setName}
          />
        </View>

        <View style={styles.viewForm}>
          <Text style={styles.text}>Senha:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome de usuário"
            placeholderTextColor="#8D8E8E"
            autoCapitalize="words"
            autoCorrect={false}
            //value={name}
            //onChangeText={setName}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigateToDetail()}
          style={styles.button}>
          <Text style={styles.buttonText}>Navegar para tela 2</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
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
    width: '20%',
    paddingTop: 15,
    paddingLeft: 10,
  },

  input: {
    width: '60%',
    borderBottomWidth: 1,
    borderColor: '#000',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 50,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#000091',
    //backgroundColor: '#86D3F1',
    marginTop: 50,
  },

  buttonText: {
    fontSize: 24,
    color: '#000',
  },
});
