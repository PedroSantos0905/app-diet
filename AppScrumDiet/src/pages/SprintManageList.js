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

export default function SprintManageList() {
  const [refeicoes, setRefeicoes] = useState([]);

  const navigation = useNavigation();

  function navigateToGroupScrum() {
    navigation.navigate('GroupScrum');
  }

  function navigateToSprintManage() {
    navigation.navigate('SprintManage');
  }

  useEffect(() => {
    async function loadAlimento() {
      const token = await AsyncStorage.getItem('token', token);
      const response = await api.get('/sprint/listarRefeicaoSprint', {
        params: {},
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setRefeicoes(response.data.refeicoes);
    }

    loadAlimento();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        <ImageBackground source={Amarelo} style={styles.planoFundo}>
          <View style={styles.containerMaster}>
            <View style={styles.listContainer}>
              <View>
                <Text style={styles.title}>Cadastrar nova Refeição</Text>
              </View>
              <View style={styles.containerManage}>
                <TouchableOpacity
                  onPress={() => navigateToSprintManage()}
                  style={styles.buttonManage}>
                  <Text style={styles.textButtonManage}>Nova</Text>
                </TouchableOpacity>
              </View>
            </View>

            <FlatList
              data={refeicoes}
              keyExtractor={refeicao => refeicao.id_refeicao}
              showsVerticalScrollIndicator={false}
              renderItem={({item: refeicao}) => (
                <View style={styles.viewContainerRefeicao}>
                  <View style={styles.rowContainer}>
                    <Text style={styles.semana}>{refeicao.ds_dia_semana}</Text>
                    <Text style={styles.sprintId}>
                      numeração: {refeicao.id_sprint}
                    </Text>
                  </View>
                  <Text style={styles.titleRefeicao}>
                    {refeicao.nm_refeicao}
                  </Text>
                  <Text style={styles.titleRefeicao}>
                    {refeicao.id_alimentos}
                  </Text>
                  <View style={styles.rowContainer}>
                    <Text style={styles.data}>{refeicao.dt_refeicao}</Text>
                    <Text style={styles.hora}>{refeicao.hr_refeicao}</Text>
                  </View>
                  <Text style={styles.calorias}>
                    Calorias: {refeicao.calorias_refeicao}
                  </Text>
                </View>
              )}
            />
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
    height: 80,
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
    width: 280,
    height: 80,
  },

  containerManage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
  },

  buttonManage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
  },

  textButtonManage: {
    fontSize: 14,
    color: '#fff',
  },

  viewContainerRefeicao: {
    width: 360,
    height: 200,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
    marginBottom: 10,
  },

  rowContainer: {
    flexDirection: 'row',
  },

  semana: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 240,
    height: 40,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#41aac6',
  },

  sprintId: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 120,
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#41aac6',
  },

  titleRefeicao: {
    fontSize: 22,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 360,
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#41aac6',
  },

  data: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 240,
    height: 40,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#41aac6',
  },

  hora: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 120,
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#41aac6',
  },

  calorias: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    width: 360,
    height: 40,
    paddingLeft: 10,
  },
});
