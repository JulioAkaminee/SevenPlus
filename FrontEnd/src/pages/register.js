import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useEffect } from 'react';
import fundoSevenPlus from '../../assets/images/fundoSevenPlus.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from '../styles/registerStyle'
import * as Font from 'expo-font';

export default function Register({ navigation }) {

 //Carregando a fonte MemoirDisplay
  const [fontCarregada, setFontCarregada] = useState(false);

  //definindo o estado inicial da senha como true para ela ficar escondida
  const [esconderSenha, setesconderSenha] = useState(true);
  const [esconderSenhaConfirmacao, setesconderSenhaConfirmacao] = useState(true);

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
        <Text style={styles.title}>Cadastre-se</Text>
        <View>
            <Text style={styles.textLabelRegister}>Email</Text>
            <TextInput placeholder='Digite seu email' style={styles.inputCadastro}/>
        </View>

        <View>
            <Text style={styles.textLabelRegister}>Senha</Text>
            <View style={styles.inputArea}>
              <TextInput secureTextEntry={esconderSenha} style={styles.inputCadastro} placeholder='Digite sua senha'  />
              <TouchableOpacity onPress={()=> setesconderSenha(!esconderSenha)}>
              <Icon style={styles.icon} name="visibility" size={30} color="white" />
              </TouchableOpacity>
            </View>
            
        </View>

        <View>
            <Text style={styles.textLabelRegister}>Confirmação de Senha</Text>
            
            <View style={styles.inputArea}>
              <TextInput secureTextEntry={esconderSenhaConfirmacao} style={styles.inputCadastro} placeholder='Digite sua senha'  />
              <TouchableOpacity onPress={()=> setesconderSenhaConfirmacao(!esconderSenhaConfirmacao)}>
              <Icon style={styles.icon} name="visibility" size={30} color="white" />
              </TouchableOpacity>
            </View>
        </View>
        <TouchableOpacity style={styles.containerButton}>
            <Text style={styles.buttonCadastrar}>CADASTRAR</Text>
        </TouchableOpacity>



        </View>


        <View style={styles.footerContainer}>
          <Text   style={styles.footerText} onPress={()=> navigation.navigate('Login')}>
           Faça seu Login
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

