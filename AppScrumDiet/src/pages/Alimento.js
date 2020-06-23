import React, {useState} from 'react';
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
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Amarelo from '../assets/Amarelo.png';
import Search from '../assets/Search.png';
import Plus from '../assets/Plus.png';

import api from '../services/api';

export default function Alimento() {
  const navigation = useNavigation();

  const [nm_refeicao, setNm_refeicao] = useState('');
  const [id_alimentos, setId_alimentos] = useState('');
  const [dt_refeicao, setDt_refeicao] = useState('');
  const [hr_refeicao, setHr_refeicao] = useState('');

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
              <View style={styles.viewTest}>
                <Text style={styles.alimentoText}>28</Text>
                <Text style={styles.alimentoText}>Água de coco verde</Text>
                <Text style={styles.alimentoText}>1 copo de 240 ml</Text>
                <Text style={styles.alimentoTextCaloria}>62</Text>
                <TouchableOpacity style={styles.buttonIcon}>
                  <Image source={Plus} style={styles.iconPlus} />
                </TouchableOpacity>
              </View>

              <View style={styles.viewTest}>
                <Text style={styles.alimentoText}>35</Text>
                <Text style={styles.alimentoText}>Água de coco verde</Text>
                <Text style={styles.alimentoText}>1 copo de 240 ml</Text>
                <Text style={styles.alimentoTextCaloria}>62</Text>
                <TouchableOpacity style={styles.buttonIcon}>
                  <Image source={Plus} style={styles.iconPlus} />
                </TouchableOpacity>
              </View>

              <View style={styles.viewTest}>
                <Text style={styles.alimentoText}>42</Text>
                <Text style={styles.alimentoText}>Água de coco verde</Text>
                <Text style={styles.alimentoText}>1 copo de 240 ml</Text>
                <Text style={styles.alimentoTextCaloria}>62</Text>
                <TouchableOpacity style={styles.buttonIcon}>
                  <Image source={Plus} style={styles.iconPlus} />
                </TouchableOpacity>
              </View>

              <View style={styles.viewTest}>
                <Text style={styles.alimentoText}>7</Text>
                <Text style={styles.alimentoText}>Água de coco verde</Text>
                <Text style={styles.alimentoText}>1 copo de 240 ml</Text>
                <Text style={styles.alimentoTextCaloria}>62</Text>
                <TouchableOpacity style={styles.buttonIcon}>
                  <Image source={Plus} style={styles.iconPlus} />
                </TouchableOpacity>
              </View>

              <View style={styles.viewTest}>
                <Text style={styles.alimentoText}>109</Text>
                <Text style={styles.alimentoText}>Água de coco verde</Text>
                <Text style={styles.alimentoText}>1 copo de 240 ml</Text>
                <Text style={styles.alimentoTextCaloria}>62</Text>
                <TouchableOpacity style={styles.buttonIcon}>
                  <Image source={Plus} style={styles.iconPlus} />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </SafeAreaView>

          <View style={styles.formContainer}>
            <View style={styles.viewForm}>
              <Text style={styles.title}>Título:</Text>
              <TextInput
                style={styles.input}
                placeholder="Pesquise os alimentos aqui!"
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
                placeholder="Pesquise os alimentos aqui!"
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
                placeholder="Pesquise os alimentos aqui!"
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
                placeholder="Pesquise os alimentos aqui!"
                placeholderTextColor="#8D8E8E"
                autoCapitalize="words"
                autoCorrect={false}
                value={hr_refeicao}
                onChangeText={setHr_refeicao}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => createRefeicao()}
            style={styles.button}>
            <Text style={styles.buttonText}>Salvar</Text>
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

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
    elevation: 5,
    height: 50,
    width: 360,
    marginTop: 10,
  },

  buttonText: {
    fontSize: 22,
    color: '#FFFFFF',
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

  alimentoText: {
    fontSize: 16,
    width: 100,
    height: 60,
    textAlign: 'center',
    //marginLeft: 25,
    paddingRight: 20,
    color: '#FFFFFF',
  },

  alimentoTextCaloria: {
    fontSize: 16,
    width: 100,
    height: 60,
    textAlign: 'center',
    paddingLeft: 20,
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
