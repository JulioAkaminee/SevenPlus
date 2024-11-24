import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useEffect } from 'react';
import fundoSevenPlus from '../../assets/images/fundoSevenPlus.png';
import logoSevenPLus from '../../assets/images/logoSevenPlus.png';
import styles from '../styles/loginStyle'
import * as Font from 'expo-font';

export default function Login({ navigation }) {

 //Carregando a fonte MemoirDisplay
  const [fontCarregada, setFontCarregada] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'MemoirDisplay': require('../../assets/fonts/Memoir Display.ttf'),
    }).then(() => setFontCarregada(true));
  }, []);

  //caso a fonte não seja carregada, será exibido um texto que a fonte esta sendo carregada fonte
  if (!fontCarregada) {
    return <Text>Carregando fonte...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
        {/* imagem do background */}
      <ImageBackground style={styles.background} source={fundoSevenPlus}>
        <StatusBar barStyle="dark-content" />

        {/* Formulario de login */}
        <View style={styles.formContainer}>
        <Image source={logoSevenPLus} style={styles.logo} />
          <View style={styles.containerInput}>
            <Text style={styles.labelInput}>Email</Text>
            <TextInput style={styles.inputTexto} />
          </View>

          <View style={styles.containerInput}>
            <Text style={styles.labelInput}>Senha</Text>
            <TextInput style={styles.inputTexto} />
            <TouchableOpacity style={styles.containerBtnEntrar}>
              <Text style={styles.btnEntrar}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>


        {/* Footer */}
        <View style={styles.footerContainer}>
          <Text onPress={() => alert('Tela de cadastro em breve.')} style={styles.footerText}>
            Cadastre-se agora!
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

