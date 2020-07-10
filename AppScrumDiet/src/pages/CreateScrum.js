import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Amarelo from '../assets/Amarelo.png';

import api from '../services/api';

export default function CreateScrum() {
  const [goal, setGoal] = useState('');
  const [dt_inicio, setDt_inicio] = useState('');
  const [dt_fim, setDt_fim] = useState('');
  const [hora_inicio, setHora_inicio] = useState('');
  const [hora_fim, setHora_fim] = useState('');

  const navigation = useNavigation();

  function navigateToScrumList() {
    navigation.navigate('ScrumList');
  }

  async function createGrupoScrum() {
    const token = await AsyncStorage.getItem('token', token);
    const response = await api.put(
      '/sprint',
      {
        goal,
        dt_inicio,
        dt_fim,
        hora_inicio,
        hora_fim,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const {usuario} = response.data;
    console.log(response.data);

    navigation.navigate('Home', {usuario});
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        <ImageBackground source={Amarelo} style={styles.planoFundo}>
          <View style={styles.viewForm}>
            <Text style={styles.text}>Objetivo:</Text>
            <TextInput
              style={styles.input}
              placeholder="Objetivo do grupo"
              placeholderTextColor="#8D8E8E"
              autoCapitalize="words"
              autoCorrect={false}
              value={goal}
              onChangeText={setGoal}
            />
          </View>

          <View style={styles.viewForm}>
            <Text style={styles.text}>Data de início:</Text>
            <TextInput
              style={styles.input}
              placeholder="example: aaaa-mm-dd"
              placeholderTextColor="#8D8E8E"
              autoCapitalize="words"
              autoCorrect={false}
              value={dt_inicio}
              onChangeText={setDt_inicio}
            />
          </View>

          <View style={styles.viewForm}>
            <Text style={styles.text}>Data final:</Text>
            <TextInput
              style={styles.input}
              placeholder="example: aaaa-mm-dd"
              placeholderTextColor="#8D8E8E"
              autoCapitalize="words"
              autoCorrect={false}
              value={dt_fim}
              onChangeText={setDt_fim}
            />
          </View>

          <View style={styles.viewForm}>
            <Text style={styles.text}>Hora de início:</Text>
            <TextInput
              style={styles.input}
              placeholder="example: hh:mm:ss"
              placeholderTextColor="#8D8E8E"
              autoCapitalize="words"
              autoCorrect={false}
              value={hora_inicio}
              onChangeText={setHora_inicio}
            />
          </View>

          <View style={styles.viewForm}>
            <Text style={styles.text}>Hora final:</Text>
            <TextInput
              style={styles.input}
              placeholder="example: hh:mm:ss"
              placeholderTextColor="#8D8E8E"
              autoCapitalize="words"
              autoCorrect={false}
              value={hora_fim}
              onChangeText={setHora_fim}
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
