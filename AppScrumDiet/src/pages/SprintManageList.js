import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Amarelo from '../assets/Amarelo.png';

// import api from '../services/api';

export default function SprintManageList() {
  const navigation = useNavigation();

  function navigateToGroupScrum() {
    navigation.navigate('GroupScrum');
  }

  function navigateToSprintManage() {
    navigation.navigate('SprintManage');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        <ImageBackground source={Amarelo} style={styles.planoFundo}>
          <View style={styles.containerMaster}>
            <View style={styles.listContainer}>
              <View>
                <Text style={styles.title}>Dia da semana*</Text>
              </View>
              <View style={styles.containerManage}>
                <TouchableOpacity
                  onPress={() => navigateToSprintManage()}
                  style={styles.buttonManage}>
                  <Text style={styles.textButtonManage}>Editar</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.listContainer}>
              <View>
                <Text style={styles.title}>Dia da semana*</Text>
              </View>
              <View style={styles.containerManage}>
                <TouchableOpacity
                  onPress={() => navigateToSprintManage()}
                  style={styles.buttonManage}>
                  <Text style={styles.textButtonManage}>Editar</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.listContainer}>
              <View>
                <Text style={styles.title}>Dia da semana*</Text>
              </View>
              <View style={styles.containerManage}>
                <TouchableOpacity
                  onPress={() => navigateToSprintManage()}
                  style={styles.buttonManage}>
                  <Text style={styles.textButtonManage}>Editar</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.listContainer}>
              <View>
                <Text style={styles.title}>Dia da semana*</Text>
              </View>
              <View style={styles.containerManage}>
                <TouchableOpacity
                  onPress={() => navigateToSprintManage()}
                  style={styles.buttonManage}>
                  <Text style={styles.textButtonManage}>Editar</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.listContainer}>
              <View>
                <Text style={styles.title}>Dia da semana*</Text>
              </View>
              <View style={styles.containerManage}>
                <TouchableOpacity
                  onPress={() => navigateToSprintManage()}
                  style={styles.buttonManage}>
                  <Text style={styles.textButtonManage}>Editar</Text>
                </TouchableOpacity>
              </View>
            </View>
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
    width: 240,
    height: 80,
  },

  containerManage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
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
});
