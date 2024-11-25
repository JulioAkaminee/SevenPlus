import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import fundoSevenPlus from '../../assets/images/fundoSevenPlus.png';
import styles from '../styles/loginStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Font from 'expo-font';


export default function Login({ navigation }) {
  //carregando minha fonte personalizada
  useEffect(() => {
    Font.loadAsync({
      'MemoirDisplay': require('../../assets/fonts/Memoir Display.ttf'),
    }).then(() => setFontCarregada(true));
  }, []);

  // Caso a fonte não seja carregada, exibe a mensagem
  if (!fontCarregada) {
    return <Text>Carregando fonte...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Imagem de fundo */}
      <ImageBackground style={styles.background} source={fundoSevenPlus}>
  


      </ImageBackground>
    </SafeAreaView>
  );
}
