import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useEffect } from 'react';
import fundoSevenPlus from '../../assets/images/fundoSevenPlus.png';
import styles from '../styles/forgetPasswordStyle'
import * as Font from 'expo-font';

export default function ForgetPassword({ navigation }) {

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
        <View style={styles.formContainer}>
            <View>
                <Text style={styles.textForgetPasswordTittle} >Esqueci a senha</Text>
                <Text style={styles.textForgetPassword}>Preencha o campo abaixo para receber o email da recuperação</Text>
                <TextInput style={styles.inputForgetPassword} placeholder='Digite seu email'/>
            </View>
            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.containerButtonForm} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.buttonForm} >VOLTAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.containerButtonForm}>
                    <Text style={styles.buttonForm} >ENVIAR</Text>
                </TouchableOpacity>

            </View>
        </View>
       
      </ImageBackground>
    </SafeAreaView>
  );
}

