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

export default function ScrumList() {
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate('Home');
  }

  function NavigateToCreateScrum() {
    navigation.navigate('CreateScrum');
  }

  function NavigateToGroupScrum() {
    navigation.navigate('GroupScrum');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        <ImageBackground source={Amarelo} style={styles.planoFundo}>
          <View style={styles.containerMaster}>
            <View style={styles.listContainer}>
              <View>
                <Text style={styles.title}>Título do grupo</Text>
                <Text style={styles.description}>
                  Descrição breve Descrição breve Descrição breve Descrição
                  breve
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => NavigateToGroupScrum()}
                  style={styles.buttonIn}>
                  <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.listContainer}>
              <View>
                <Text style={styles.title}>Título do grupo</Text>
                <Text style={styles.description}>
                  Descrição breve Descrição breve Descrição breve Descrição
                  breve
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => NavigateToGroupScrum()}
                  style={styles.buttonIn}>
                  <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.listContainer}>
              <View>
                <Text style={styles.title}>Título do grupo</Text>
                <Text style={styles.description}>
                  Descrição breve Descrição breve Descrição breve Descrição
                  breve
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => NavigateToGroupScrum()}
                  style={styles.buttonIn}>
                  <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.listContainer}>
              <View>
                <Text style={styles.title}>Título do grupo</Text>
                <Text style={styles.description}>
                  Descrição breve Descrição breve Descrição breve Descrição
                  breve
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => NavigateToGroupScrum()}
                  style={styles.buttonIn}>
                  <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.listContainer}>
              <View>
                <Text style={styles.title}>Título do grupo</Text>
                <Text style={styles.description}>
                  Descrição breve Descrição breve Descrição breve Descrição
                  breve
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => NavigateToGroupScrum()}
                  style={styles.buttonIn}>
                  <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
              </View>
            </View>
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
    width: 300,
    height: 30,
    paddingLeft: 20,
  },

  description: {
    fontSize: 16,
    color: '#fff',
    textAlignVertical: 'center',
    width: 300,
    height: 50,
    paddingLeft: 20,
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
});
