import React from 'react'; //, {useEffect}
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
  //AsyncStorage,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Amarelo from '../assets/Amarelo.png';
import Logo from '../assets/Logo.png';

export default function Init() {
  const navigation = useNavigation();

  // useEffect(() => {
  //   AsyncStorage.getItem('token').then(user => {
  //     if (user) {
  //       navigation.navigate('Home');
  //     }
  //   });
  // }, [navigation]);

  function navigateToCadastrar() {
    navigation.navigate('User');
  }

  function navigateToLogar() {
    navigation.navigate('LoginUser');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        <ImageBackground source={Amarelo} style={styles.planoFundo}>
          <View style={styles.imageContainer}>
            <Image source={Logo} style={styles.image} />
          </View>

          <View style={styles.buttonSpace}>
            <TouchableOpacity
              onPress={() => navigateToCadastrar()}
              style={styles.buttonNavigation}>
              <Text style={styles.textNavigation}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateToLogar()}
              style={styles.buttonNavigation}>
              <Text style={styles.textNavigation}>Entrar</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
  },

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  image: {
    height: 200,
    width: 200,
    resizeMode: 'cover',
  },

  buttonSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 100,
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 40,
  },

  buttonNavigation: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '46%',
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
    width: '100%',
    height: 40,
  },
});
