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

export default function SprintList() {
  const navigation = useNavigation();

  const [listRefeicaoParticipantes, setListRefeicaoParticipantes] = useState(
    [],
  );
  const [id_sprint, setId_sprint] = useState('');
  const [id_usuarioParticipante, setId_usuarioParticipante] = useState('');

  function navigateToGroupScrum() {
    navigation.navigate('GroupScrum');
  }

  useEffect(() => {
    async function loadRefeicaoSprint() {
      const id = await AsyncStorage.getItem('id_sprint', id);
      setId_sprint(id);
      const participante = await AsyncStorage.getItem(
        'id_usuarioParticipante',
        participante,
      );
      setId_usuarioParticipante(participante);
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

      setListRefeicaoParticipantes(response.data.refeicoes);

      console.log(response.data);
    }

    loadRefeicaoSprint();
  }, [id_sprint, id_usuarioParticipante]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        <ImageBackground source={Amarelo} style={styles.planoFundo}>
          <View style={styles.containerMaster}>
            <FlatList
              style={styles.list}
              data={listRefeicaoParticipantes}
              keyExtractor={sprint => sprint.id_refeicao_membro_sprint}
              showsVerticalScrollIndicator={false}
              renderItem={({item: sprint}) => (
                <View style={styles.listContainer}>
                  <View>
                    <Text style={styles.title}>{sprint.nm_refeicao}</Text>
                    <Text style={styles.descriptionSemana}>
                      {sprint.ds_dia_semana}
                    </Text>
                    <Text style={styles.descriptionAlimento}>
                      Alimentos: {sprint.id_alimentos}
                    </Text>

                    <View style={styles.containerDataHora}>
                      <Text style={styles.descriptionData}>
                        Data: {sprint.dt_refeicao}
                      </Text>
                      <Text style={styles.descriptionHora}>
                        Hora: {sprint.hr_refeicao}
                      </Text>
                    </View>

                    <View style={styles.containerDataHora}>
                      <Text style={styles.descriptionCalorias}>
                        Calorias: {sprint.calorias_refeicao}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            />

            {/* <View style={styles.listContainer}>
              <View>
                <Text style={styles.title}>Dia da semana*</Text>
                <Text style={styles.description}>
                  Refeição 01, Refei. 02, Refeição 03, Refeição 04, Refeição 05,
                  Refeição 06, Refeição 07
                </Text>
              </View>
            </View>

            <View style={styles.listContainer}>
              <View>
                <Text style={styles.title}>Dia da semana*</Text>
                <Text style={styles.description}>
                  Refeição 01, Refei. 02, Refeição 03, Refeição 04, Refeição 05,
                  Refeição 06, Refeição 07
                </Text>
              </View>
            </View>

            <View style={styles.listContainer}>
              <View>
                <Text style={styles.title}>Dia da semana*</Text>
                <Text style={styles.description}>
                  Refeição 01, Refei. 02, Refeição 03, Refeição 04, Refeição 05,
                  Refeição 06, Refeição 07
                </Text>
              </View>
            </View> */}
          </View>

          <View style={styles.buttonSpace}>
            <TouchableOpacity
              onPress={() => navigateToGroupScrum()}
              style={styles.buttonNavigation}>
              <Text style={styles.textNavigation}>Voltar</Text>
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
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 50,
    width: 360,
  },

  buttonNavigation: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 360,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
    paddingHorizontal: 10,
    marginTop: 40,
  },

  textNavigation: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 360,
    height: 50,
  },

  containerMaster: {
    width: 360,
    height: 560,
  },

  listContainer: {
    flexDirection: 'row',
    width: 360,
    height: 240,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 355,
    height: 40,
    paddingLeft: 20,
    borderBottomWidth: 2,
    borderColor: '#41aac6',
  },

  description: {
    fontSize: 16,
    color: '#fff',
    textAlignVertical: 'center',
    width: 360,
    height: 40,
    paddingHorizontal: 20,
  },

  descriptionAlimento: {
    fontSize: 16,
    color: '#fff',
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 360,
    height: 40,
    paddingHorizontal: 20,
  },

  containerDataHora: {
    flexDirection: 'row',
  },

  descriptionData: {
    fontSize: 16,
    color: '#fff',
    textAlignVertical: 'center',
    width: 200,
    height: 60,
    paddingHorizontal: 20,
  },

  descriptionHora: {
    fontSize: 16,
    color: '#fff',
    textAlignVertical: 'center',
    width: 160,
    height: 60,
    paddingHorizontal: 20,
  },

  descriptionCalorias: {
    fontSize: 16,
    color: '#fff',
    textAlignVertical: 'center',
    width: 360,
    height: 40,
    paddingHorizontal: 20,
  },

  descriptionSemana: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 355,
    height: 40,
    paddingLeft: 20,
    borderBottomWidth: 2,
    borderColor: '#41aac6',
  },
});
