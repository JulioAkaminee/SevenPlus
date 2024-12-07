import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './navegacaoStyle'; 

export default function Navegacao({ navigation }) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.containerIconFooter}>
        <Icon name="home-outline" size={25} color="white" />
        <Text style={{ color: 'white', fontSize: 12, fontFamily:'Epilogue-Medium' }}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.containerIconFooter}
        onPress={() => navigation.navigate('Filmes')} // Navega para a tela Filmes
      >
        <Icon name="movie-outline"  size={25} color="white" />
        <Text style={{ color: 'white', fontSize: 12, fontFamily:'Epilogue-Medium' }}>Filmes</Text>
      </TouchableOpacity>

     
    </View>
  );
}
