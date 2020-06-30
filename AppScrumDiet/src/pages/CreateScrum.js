import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Amarelo from '../assets/Amarelo.png';

// import api from '../services/api';

export default function CreateScrum() {
  const navigation = useNavigation();

  function navigateToScrumList() {
    navigation.navigate('ScrumList');
  }

  function createGrupoScrum() {
    navigation.navigate('Home');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        <ImageBackground source={Amarelo} style={styles.planoFundo}>
          <View style={styles.viewForm}>
            <Text style={styles.text}>Título:</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome do grupo"
              placeholderTextColor="#8D8E8E"
              autoCapitalize="words"
              autoCorrect={false}
              //value={nome}
              //onChangeText={setNome}
            />
          </View>

          <View style={styles.viewForm}>
            <Text style={styles.text}>Descrição:</Text>
            <TextInput
              style={styles.input}
              placeholder="Descrição do grupo"
              placeholderTextColor="#8D8E8E"
              autoCapitalize="words"
              autoCorrect={false}
              //value={nome}
              //onChangeText={setNome}
            />
          </View>

          <View style={styles.viewForm}>
            <Text style={styles.text}>Período Sprint:</Text>
            <TextInput
              style={styles.input}
              placeholder="Período da Sprint"
              placeholderTextColor="#8D8E8E"
              autoCapitalize="words"
              autoCorrect={false}
              //value={nome}
              //onChangeText={setNome}
            />
          </View>

          <View style={styles.viewForm}>
            <Text style={styles.text}>Quantidade integrante:</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome do grupo"
              placeholderTextColor="#8D8E8E"
              autoCapitalize="words"
              autoCorrect={false}
              //value={nome}
              //onChangeText={setNome}
            />
          </View>
          <View style={styles.buttonSpace}>
            <TouchableOpacity
              onPress={() => navigateToScrumList()}
              style={styles.buttonNavigation}>
              <Text style={styles.textNavigation}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => createGrupoScrum()}
              style={styles.buttonNavigation}>
              <Text style={styles.textNavigation}>Criar</Text>
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

  buttonSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 100,
    width: '100%',
    paddingHorizontal: 10,
  },

  buttonNavigation: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
    paddingHorizontal: 10,
    marginTop: 10,
  },

  textNavigation: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 360,
    height: 40,
  },

  viewForm: {
    flexDirection: 'row',
  },

  text: {
    fontSize: 18,
    color: '#5C65CF',
    width: '30%',
    paddingTop: 25,
    paddingLeft: 10,
  },

  input: {
    width: '60%',
    borderBottomWidth: 1,
    borderColor: '#5C65CF',
    marginBottom: 10,
    textAlign: 'center',
    marginRight: 20,
  },
});
