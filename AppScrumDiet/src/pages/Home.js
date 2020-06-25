import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
  AsyncStorage,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Amarelo from '../assets/Amarelo.png';
import Info from '../assets/Info.png';
import Perfil from '../assets/Perfil.png';
import Plus from '../assets/Plus.png';
import Group from '../assets/Group.png';
import Food from '../assets/Food.png';

import api from '../services/api';

export default function Home() {
  const navigation = useNavigation();

  const [tmbs, setTmbs] = useState([]);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    async function loadTmb() {
      const token = await AsyncStorage.getItem('token', token);
      const response = await api.get('/tmbAtual', {
        params: {},
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTmbs(response.data.tmb);
    }

    loadTmb();
  }, []);

  useEffect(() => {
    async function loadData() {
      const token = await AsyncStorage.getItem('token', token);
      const response = await api.get('/dataAtual', {
        params: {},
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setDatas([response.data.data]);
    }

    loadData();
  }, []);

  async function navigateToPerfil() {
    navigation.navigate('Perfil');
  }

  function navigateToAlimento() {
    navigation.navigate('Alimento');
  }

  function navigateToRefeicao() {
    navigation.navigate('Refeicao');
  }

  function navigateToTmb() {
    navigation.navigate('Tmb');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        <ImageBackground source={Amarelo} style={styles.planoFundo}>
          <View style={styles.dataContainer}>
            <FlatList
              data={datas}
              keyExtractor={data => data.id_usuario}
              showsVerticalScrollIndicator={false}
              renderItem={({item: data}) => (
                <View style={styles.containerImageData}>
                  <Text style={styles.data}>{data.dataAtual}</Text>
                  <TouchableOpacity onPress={() => navigateToTmb()}>
                    <Image source={Info} style={styles.iconInfo} />
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>

          <View style={styles.contadorContainer}>
            <Text style={styles.calorias}>Calorias</Text>

            <FlatList
              data={tmbs}
              keyExtractor={tmb => tmb.id_usuario}
              showsVerticalScrollIndicator={false}
              renderItem={({item: tmb}) => (
                <Text style={styles.valorCalorias}>{tmb.tmb}</Text>
              )}
            />
          </View>

          <View style={styles.foodContainer}>
            <Text style={styles.foodText}>Refeições</Text>
            <TouchableOpacity
              style={styles.buttonFood}
              onPress={() => navigateToAlimento()}>
              <Text style={styles.foodTextButton}>Adicionar</Text>
              <Image source={Plus} style={styles.iconPlus} />
            </TouchableOpacity>
          </View>

          <View style={styles.containerBottom}>
            <TouchableOpacity style={styles.buttonNavigation}>
              <Image source={Group} style={styles.iconImage} />
              <Text style={styles.textNavigation}>Scrum</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateToRefeicao()}
              style={styles.buttonNavigation}>
              <Image source={Food} style={styles.iconImage} />
              <Text style={styles.textNavigation}>Refeições</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateToPerfil()}
              style={styles.buttonNavigation}>
              <Image source={Perfil} style={styles.iconImage} />
              <Text style={styles.textNavigation}>Perfil</Text>
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

  dataContainer: {
    justifyContent: 'center',
    width: '100%',
    height: 40,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
  },

  containerImageData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  data: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    width: 140,
    marginTop: 5,
  },

  iconInfo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginTop: 5,
  },

  contadorContainer: {
    width: 360,
    height: 200,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  calorias: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    marginTop: 10,
  },

  valorCalorias: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 36,
    color: '#FFFFFF',
    width: 120,
    height: 120,
    borderWidth: 1,
    borderRadius: 60,
    borderColor: '#FFFFFF',
  },

  foodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    width: 360,
    height: 120,
    marginTop: 40,
    marginBottom: 40,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
    elevation: 10,
  },

  foodText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  buttonFood: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  foodTextButton: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 80,
    height: 40,
  },

  iconPlus: {
    width: 40,
    height: 40,
    resizeMode: 'center',
  },

  containerBottom: {
    width: 360,
    height: 100,
    marginTop: 140,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
    elevation: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },

  buttonNavigation: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#41aac6',
    backgroundColor: '#5C65CF',
    elevation: 5,
    alignItems: 'center',
  },

  iconImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginTop: 5,
  },

  textNavigation: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    width: 80,
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
