import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image,
  AsyncStorage,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Amarelo from '../assets/Amarelo.png';
import Search from '../assets/Search.png';

import api from '../services/api';

export default function SprintManage() {
  const [alimentos, setAlimentos] = useState([]);

  const [nm_refeicao, setNm_refeicao] = useState('');
  const [id_alimentos, setId_alimentos] = useState('');
  const [id_sprint, setId_sprint] = useState('');
  const [dt_refeicao, setDt_refeicao] = useState('');
  const [hr_refeicao, setHr_refeicao] = useState('');

  const navigation = useNavigation();

  function navigateToSprintManageList() {
    navigation.navigate('SprintManageList');
  }

  useEffect(() => {
    async function loadAlimento() {
      const token = await AsyncStorage.getItem('token', token);
      const response = await api.get('/alimento/listarAlimento', {
        params: {},
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAlimentos(response.data.alimento);
    }

    loadAlimento();
  }, []);

  async function createRefeicaoSprint() {
    const token = await AsyncStorage.getItem('token', token);
    const response = await api.put(
      '/sprint/cadastrarRefeicaoSprint',
      {
        nm_refeicao,
        id_alimentos,
        id_sprint,
        dt_refeicao,
        hr_refeicao,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const {usuario} = response.data;

    navigation.navigate('SprintManageList', {usuario});
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        <ImageBackground source={Amarelo} style={styles.planoFundo}>
          <View style={styles.containerMaster}>
            <View>
              <View style={styles.pesquisaContainer}>
                <TextInput
                  style={styles.pesquisaText}
                  placeholder="Pesquise os alimentos aqui!"
                  placeholderTextColor="#8D8E8E"
                  autoCapitalize="words"
                  autoCorrect={false}
                  //value={alimento}
                  //onChangeText={setAlimento}
                />
                <TouchableOpacity>
                  <Image source={Search} style={styles.iconSearch} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.rowContainer}>
              <Text style={styles.textTitle}>ID</Text>
              <Text style={styles.textTitle}>Nome</Text>
              <Text style={styles.textTitle}>Quantidade</Text>
              <Text style={styles.textTitle}>Calorias</Text>
            </View>

            <View style={styles.listFood}>
              <SafeAreaView>
                <ScrollView>
                  <FlatList
                    data={alimentos}
                    keyExtractor={alimento => alimento.id_alimento}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item: alimento}) => (
                      <View style={styles.containerList}>
                        <Text style={styles.textList1}>
                          {alimento.id_alimento}
                        </Text>
                        <Text style={styles.textList2}>{alimento.nome}</Text>
                        <Text style={styles.textList3}>
                          {alimento.quantidade}
                        </Text>
                        <Text style={styles.textList4}>{alimento.caloria}</Text>
                      </View>
                    )}
                  />
                </ScrollView>
              </SafeAreaView>
            </View>

            <View style={styles.formContainer}>
              <View style={styles.viewForm}>
                <Text style={styles.title}>Título:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Dê um nome para sua refeição"
                  placeholderTextColor="#8D8E8E"
                  autoCapitalize="words"
                  autoCorrect={false}
                  value={nm_refeicao}
                  onChangeText={setNm_refeicao}
                />
              </View>

              <View style={styles.viewForm}>
                <Text style={styles.title}>Alimentos:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Coloque o ID dos alimentos"
                  placeholderTextColor="#8D8E8E"
                  autoCapitalize="words"
                  autoCorrect={false}
                  value={id_alimentos}
                  onChangeText={setId_alimentos}
                />
              </View>

              <View style={styles.viewForm}>
                <Text style={styles.title}>Numeração da Sprint:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Númeração da Sprint"
                  placeholderTextColor="#8D8E8E"
                  autoCapitalize="words"
                  autoCorrect={false}
                  value={id_sprint}
                  onChangeText={setId_sprint}
                />
              </View>

              <View style={styles.viewForm}>
                <Text style={styles.title}>Data:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Exemplo: aaaa-mm-dd"
                  placeholderTextColor="#8D8E8E"
                  autoCapitalize="words"
                  autoCorrect={false}
                  value={dt_refeicao}
                  onChangeText={setDt_refeicao}
                />
              </View>

              <View style={styles.viewForm}>
                <Text style={styles.title}>Hora:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Exemplo: hh:mm:ss"
                  placeholderTextColor="#8D8E8E"
                  autoCapitalize="words"
                  autoCorrect={false}
                  value={hr_refeicao}
                  onChangeText={setHr_refeicao}
                />
              </View>
            </View>
          </View>

          <View style={styles.buttonSpace}>
            <TouchableOpacity
              onPress={() => navigateToSprintManageList()}
              style={styles.buttonNavigation}>
              <Text style={styles.textNavigation}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => createRefeicaoSprint()}
              style={styles.buttonNavigation}>
              <Text style={styles.textNavigation}>Confirmar</Text>
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
    alignItems: 'center',
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

  pesquisaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 360,
    height: 60,
  },

  pesquisaText: {
    fontSize: 20,
    width: 280,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: '#5C65CF',
  },

  iconSearch: {
    width: 40,
    height: 40,
    resizeMode: 'center',
    marginBottom: 10,
  },

  containerMaster: {
    width: 360,
    height: 600,
  },

  listFood: {
    paddingHorizontal: 20,
    height: 200,
    paddingTop: 10,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
  },

  containerList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 310,
    height: 60,
    marginBottom: 10,
  },

  textList1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 20,
    height: 80,
  },

  textList2: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 100,
    height: 80,
    marginHorizontal: 5,
  },

  textList3: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 100,
    height: 80,
  },

  textList4: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 60,
    height: 80,
  },

  formContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  viewForm: {
    flexDirection: 'row',
  },

  input: {
    width: 240,
    borderBottomWidth: 1,
    borderColor: '#5C65CF',
    marginBottom: 5,
    textAlign: 'center',
  },

  title: {
    fontSize: 16,
    color: '#5C65CF',
    paddingHorizontal: 10,
    width: 120,
    marginTop: 20,
  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 360,
    marginTop: 10,
  },

  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
