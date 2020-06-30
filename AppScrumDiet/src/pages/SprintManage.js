import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Amarelo from '../assets/Amarelo.png';
import Search from '../assets/Search.png';

// import api from '../services/api';

export default function SprintManage() {
  const navigation = useNavigation();

  function navigateToSprintManageList() {
    navigation.navigate('SprintManageList');
  }

  function NavigateToSprintManageListConfirm() {
    navigation.navigate('SprintManageList');
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

            <View style={styles.listFood}>
              <View style={styles.containerList}>
                <Text style={styles.textList}>Suco 01</Text>
                <Text style={styles.textList}>Quantidade</Text>
                <Text style={styles.textList}>Calorias</Text>
              </View>

              <View style={styles.containerList}>
                <Text style={styles.textList}>Suco 02</Text>
                <Text style={styles.textList}>Quantidade</Text>
                <Text style={styles.textList}>Calorias</Text>
              </View>

              <View style={styles.containerList}>
                <Text style={styles.textList}>Suco 03</Text>
                <Text style={styles.textList}>Quantidade</Text>
                <Text style={styles.textList}>Calorias</Text>
              </View>

              <View style={styles.containerList}>
                <Text style={styles.textList}>Suco 04</Text>
                <Text style={styles.textList}>Quantidade</Text>
                <Text style={styles.textList}>Calorias</Text>
              </View>

              <View style={styles.containerList}>
                <Text style={styles.textList}>Suco 05</Text>
                <Text style={styles.textList}>Quantidade</Text>
                <Text style={styles.textList}>Calorias</Text>
              </View>

              <View style={styles.containerList}>
                <Text style={styles.textList}>Suco 06</Text>
                <Text style={styles.textList}>Quantidade</Text>
                <Text style={styles.textList}>Calorias</Text>
              </View>

              <View style={styles.containerList}>
                <Text style={styles.textList}>Suco 07</Text>
                <Text style={styles.textList}>Quantidade</Text>
                <Text style={styles.textList}>Calorias</Text>
              </View>

              <View style={styles.containerList}>
                <Text style={styles.textList}>Suco 08</Text>
                <Text style={styles.textList}>Quantidade</Text>
                <Text style={styles.textList}>Calorias</Text>
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
              onPress={() => NavigateToSprintManageListConfirm()}
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
    height: 560,
  },

  listFood: {
    paddingHorizontal: 20,
    height: 480,
    paddingTop: 20,
    marginTop: 20,
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
    height: 40,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
});
