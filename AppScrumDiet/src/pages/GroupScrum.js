import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  AsyncStorage,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Amarelo from '../assets/Amarelo.png';

import api from '../services/api';

export default function GroupScrum() {
  const navigation = useNavigation();

  const [listParticipantes, setListParticipantes] = useState([]);
  const [id_sprint, setId_sprint] = useState('');
  const [id_usuarioParticipante, setId_usuarioParticipante] = useState('');

  function navigateToAddUser() {
    navigation.navigate('AddUser');
  }

  function navigateToScrumList() {
    navigation.navigate('ScrumList');
  }

  function NavigateToSprintManageList() {
    navigation.navigate('SprintManageList');
  }

  async function NavigateToSprintList(participante) {
    const id = await AsyncStorage.getItem('id_sprint', id);
    setId_sprint(id);
    setId_usuarioParticipante(participante);
    console.log(participante);
    const token = await AsyncStorage.getItem('token', token);
    const response = await api.post(
      '/sprint/listarRefeicaoParticipanteSprint',
      {
        id_sprint: id,
        id_usuarioParticipante: participante,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    console.log(participante);
    await AsyncStorage.setItem(
      'id_usuarioParticipante',
      participante.toString(),
    );

    console.log(participante);

    navigation.navigate('SprintList', {participante});
  }

  useEffect(() => {
    async function loadSprint() {
      const id = await AsyncStorage.getItem('id_sprint', id);
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

      setListParticipantes(response.data.sprint);

      //console.log(response.data);
    }

    loadSprint();
  }, [id_sprint]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        <ImageBackground source={Amarelo} style={styles.planoFundo}>
          <View style={styles.containerTop}>
            <Text style={styles.textIdSprint}>
              Numeração do grupo: {id_sprint}
            </Text>
          </View>
          <View style={styles.containerMaster}>
            <TouchableOpacity
              onPress={() => navigateToAddUser()}
              style={styles.buttomTop}>
              <Text style={styles.textTop}>Adicionar amigo ao grupo!</Text>
            </TouchableOpacity>
            <FlatList
              style={styles.list}
              data={listParticipantes}
              keyExtractor={sprint => sprint.id_sprint}
              showsVerticalScrollIndicator={false}
              renderItem={({item: sprint}) => (
                <View style={styles.listContainer}>
                  <View>
                    <Text style={styles.title}>
                      <Text style={styles.bold}>Nome:</Text> {sprint.nm_usuario}
                    </Text>
                    <Text style={styles.title}>
                      <Text style={styles.bold}>Email:</Text> {sprint.ds_email}
                    </Text>
                  </View>

                  <View>
                    <TouchableOpacity
                      onPress={() => NavigateToSprintList(sprint.id_usuario)}
                      style={styles.buttonIn}>
                      <Text style={styles.textButton}>Ver</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>

          <View style={styles.buttonSpace}>
            <TouchableOpacity
              onPress={() => navigateToScrumList()}
              style={styles.buttonNavigation}>
              <Text style={styles.textNavigation}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => NavigateToSprintManageList()}
              style={styles.buttonNavigation}>
              <Text style={styles.textNavigation}>Gerenciar Sprint</Text>
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

  containerTop: {
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
    width: '100%',
  },

  textIdSprint: {
    fontSize: 14,
    color: '#FFF',
    paddingLeft: 20,
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
    fontSize: 20,
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
    height: 80,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
    marginBottom: 20,
  },

  title: {
    fontSize: 14,
    color: '#fff',
    textAlignVertical: 'center',
    width: 300,
    height: 40,
    paddingLeft: 20,
  },

  bold: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },

  buttonIn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 80,
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

  buttomTop: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 360,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  textTop: {
    fontSize: 16,
    color: '#FFF',
  },
});
