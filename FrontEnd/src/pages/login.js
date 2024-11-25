import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import fundoSevenPlus from '../../assets/images/fundoSevenPlus.png';
import logoSevenPLus from '../../assets/images/logoSevenPlus.png';
import styles from '../styles/loginStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';

export default function Login({ navigation }) {
  // Carregando a fonte MemoirDisplay
  const [fontCarregada, setFontCarregada] = useState(false);
  const [esconderSenha, setEsconderSenha] = useState(true);
  const [textInputSenha, setTextInputSenha] = useState('');
  const [textInputEmail, setTextInputEmail] = useState('');


  // Função para verificar o campo de entrada
  const verificarInputSenha = () => {
    if (textInputSenha === '') {
      alert('O campo de entrada está vazio');
    } 

    if(textInputSenha === '123' && textInputEmail === 'admin@admin.com'){
      alert('login feito com sucesso')
      //Tempo para ir para a página home
      setTimeout(() => {
        navigation.navigate('Cadastro');
      }, 1000);
    }else{
      alert('login ou senha incorretos')
    }
  };

  // Função para atualizar o valor do textInput
  const textoDigitadoSenha = (inputTextSenha) => {
    setTextInputSenha(inputTextSenha);
  };

  const textoDigitadoEmail = (inputTextEmail) => {
    setTextInputEmail(inputTextEmail);
  };

  // instalando a minha fonte personalizada
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
  

        {/* Formulário de login */}
        <View style={styles.formContainer}>
          <Image source={logoSevenPLus} style={styles.logo} />
          <View style={styles.containerInput}>
            <Text style={styles.labelInput}>Email</Text>
            <TextInput 
              style={styles.inputTexto} 
              placeholder="Digite seu email"
              onChangeText={textoDigitadoEmail} 
            />
          </View>

          <View style={styles.containerInput}>
            <Text style={styles.labelInput}>Senha</Text>
            <View style={styles.inputArea}>
              <TextInput 
                secureTextEntry={esconderSenha} 
                style={styles.inputTexto} 
                placeholder="Digite sua senha"
                onChangeText={textoDigitadoSenha} 
              />
              <TouchableOpacity onPress={() => setEsconderSenha(!esconderSenha)}>
                <Icon style={styles.icon} name="visibility" size={30} color="white" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.containerBtnEntrar} onPress={verificarInputSenha}>
              <Text style={styles.btnEntrar}>ENTRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgetPassword} onPress={() => navigation.navigate('Esqueci-senha')}>Esqueci a senha</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <Text style={styles.footerText} onPress={() => navigation.navigate('Cadastro')}>
            Cadastre-se agora!
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
