import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './navegacaoStyle'; 

export default function Navegacao({ navigation }) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.containerIconFooter}>
        <Icon name="home" size={25} color="white" />
        <Text style={{ color: 'white', fontSize: 12 }}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.containerIconFooter}
        onPress={() => navigation.navigate('Filmes')} // Navega para a tela Filmes
      >
        <Icon name="movie" size={25} color="white" />
        <Text style={{ color: 'white', fontSize: 12 }}>Filmes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.containerIconFooter}>
        <Icon name="tv" size={25} color="white" />
        <Text style={{ color: 'white', fontSize: 12 }}>Séries</Text>
      </TouchableOpacity>
    </View>
  );
}
