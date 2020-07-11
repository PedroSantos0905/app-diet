import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  AsyncStorage,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Amarelo from '../assets/Amarelo.png';

import api from '../services/api';

export default function ScrumList() {
  const [sprints, setSprints] = useState([]);
  const [id_sprint, setId_sprint] = useState('');

  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate('Home');
  }

  function NavigateToCreateScrum() {
    navigation.navigate('CreateScrum');
  }

  async function NavigateToGroupScrum(id) {
    setId_sprint(id);
    const token = await AsyncStorage.getItem('token', token);
    const response = await api.post(
      '/sprint/listarParticipantes',
      {
        id_sprint: id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    await AsyncStorage.setItem('id_sprint', id.toString());

    //console.log(response.data);

    navigation.navigate('GroupScrum', {id});
  }

  useEffect(() => {
    async function loadSprint() {
      const token = await AsyncStorage.getItem('token', token);
      const response = await api.get('/sprint/listar', {
        params: {},
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSprints(response.data.sprint);
      //console.log(response.data);
    }

    loadSprint();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        <ImageBackground source={Amarelo} style={styles.planoFundo}>
          <View style={styles.containerMaster}>
            <FlatList
              style={styles.list}
              data={sprints}
              keyExtractor={sprint => sprint.id_sprint}
              showsVerticalScrollIndicator={false}
              renderItem={({item: sprint}) => (
                <View style={styles.listContainer}>
                  <View>
                    <Text style={styles.title}>{sprint.goal}</Text>
                    <View style={styles.rowLine}>
                      <Text style={styles.description}>
                        Início: {sprint.dt_inicio}
                      </Text>
                      <Text style={styles.description}>
                        Fim: {sprint.dt_fim}
                      </Text>
                    </View>
                    <View style={styles.rowLine}>
                      <Text style={styles.description}>
                        Início: {sprint.hora_inicio}
                      </Text>
                      <Text style={styles.description}>
                        Fim: {sprint.hora_fim}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => NavigateToGroupScrum(sprint.id_sprint)}
                      style={styles.buttonIn}>
                      <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>

          <View style={styles.buttonSpace}>
            <TouchableOpacity
              onPress={() => navigateToHome()}
              style={styles.buttonNavigation}>
              <Text style={styles.textNavigation}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => NavigateToCreateScrum()}
              style={styles.buttonNavigation}>
              <Text style={styles.textNavigation}>Criar grupo</Text>
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

  containerMaster: {
    width: 360,
    height: 560,
  },

  listContainer: {
    flexDirection: 'row',
    width: 360,
    height: 140,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
    marginBottom: 20,
    //marginTop: 20,
  },

  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    width: 300,
    height: 40,
    paddingLeft: 20,
    paddingTop: 5,
  },

  rowLine: {
    flexDirection: 'row',
  },

  description: {
    fontSize: 14,
    color: '#fff',
    textAlignVertical: 'center',
    width: 150,
    height: 50,
    paddingHorizontal: 10,
  },

  buttonIn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 140,
  },

  textButton: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 40,
    height: 40,
  },
});
