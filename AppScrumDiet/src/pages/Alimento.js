import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
  AsyncStorage,
  TextInput,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Amarelo from '../assets/Amarelo.png';
import Search from '../assets/Search.png';
//import Plus from '../assets/Plus.png';

import api from '../services/api';

export default function Alimento() {
  const navigation = useNavigation();

  const [nm_refeicao, setNm_refeicao] = useState('');
  const [id_alimentos, setId_alimentos] = useState('');
  const [dt_refeicao, setDt_refeicao] = useState('');
  const [hr_refeicao, setHr_refeicao] = useState('');

  const [alimentos, setAlimentos] = useState([]);

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

  async function createRefeicao() {
    const token = await AsyncStorage.getItem('token', token);
    const response = await api.put(
      '/refeicaoUsuario',
      {
        nm_refeicao,
        id_alimentos,
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

    navigation.navigate('Home', {usuario});
  }

  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        <ImageBackground source={Amarelo} style={styles.planoFundo}>
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

          <View style={styles.alimentoContainerTitle}>
            <Text style={styles.alimentoTitle}>ID</Text>
            <Text style={styles.alimentoTitle}>Alimento</Text>
            <Text style={styles.alimentoTitle}>Quantidade</Text>
            <Text style={styles.alimentoTitle}>Calorias</Text>
          </View>

          <SafeAreaView style={styles.alimentoContainerText}>
            <ScrollView style={styles.scrollContainer}>
              <FlatList
                data={alimentos}
                keyExtractor={alimento => alimento.id_alimento}
                showsVerticalScrollIndicator={false}
                renderItem={({item: alimento}) => (
                  <View style={styles.viewTest}>
                    <Text style={styles.alimentoTextId}>
                      {alimento.id_alimento}
                    </Text>
                    <Text style={styles.alimentoTextNome}>{alimento.nome}</Text>
                    <Text style={styles.alimentoTextQuantidade}>
                      {alimento.quantidade}
                    </Text>
                    <Text style={styles.alimentoTextCaloria}>
                      {alimento.caloria}
                    </Text>
                    {/* <TouchableOpacity style={styles.buttonIcon}>
                      <Image source={Plus} style={styles.iconPlus} />
                    </TouchableOpacity> */}
                  </View>
                )}
              />
            </ScrollView>
          </SafeAreaView>

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

          <View style={styles.buttonSpace}>
            <TouchableOpacity
              onPress={() => navigateToHome()}
              style={styles.buttonNavigation}>
              <Text style={styles.textNavigation}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => createRefeicao()}
              style={styles.buttonNavigation}>
              <Text style={styles.textNavigation}>Salvar</Text>
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
    paddingBottom: 20,
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

  alimentoContainerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 360,
    height: 60,
    paddingHorizontal: 20,
  },

  alimentoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  alimentoContainerText: {
    width: 360,
    height: '38%',
    marginBottom: 20,
  },

  viewTest: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },

  alimentoTextId: {
    fontSize: 16,
    width: 40,
    height: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFFFFF',
  },

  alimentoTextNome: {
    fontSize: 16,
    width: 120,
    height: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFFFFF',
  },

  alimentoTextQuantidade: {
    fontSize: 16,
    width: 100,
    height: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFFFFF',
  },

  alimentoTextCaloria: {
    fontSize: 16,
    width: 80,
    height: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFFFFF',
  },

  buttonIcon: {
    width: 20,
    height: 20,
    marginBottom: 25,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#41aac6',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconPlus: {
    width: 20,
    height: 20,
    resizeMode: 'center',
  },

  scrollContainer: {
    borderWidth: 2,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
    borderRadius: 10,
  },

  input: {
    width: 240,
    borderBottomWidth: 1,
    borderColor: '#5C65CF',
    marginBottom: 5,
    textAlign: 'center',
  },

  title: {
    fontSize: 18,
    color: '#5C65CF',
    paddingHorizontal: 10,
    width: 120,
    marginTop: 20,
  },

  formContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  viewForm: {
    flexDirection: 'row',
  },
});
