import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// import api from '../services/api';

export default function Page2() {
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate('Page1');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá mundo!</Text>
      <TouchableOpacity onPress={() => navigateToDetail()}>
        <Text>Navegar para tela 1</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#312000',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
