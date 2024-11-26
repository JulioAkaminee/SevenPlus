import React, { useState } from 'react';
import { View, Text, StatusBar, TextInput, TouchableOpacity, SafeAreaView, Alert, ImageBackground } from 'react-native';
import { useEffect } from 'react';
import fundoSevenPlus from '../../assets/images/fundoSevenPlus.png';
import styles from '../styles/forgetPasswordStyle'
import * as Font from 'expo-font';

export default function ForgetPassword({ navigation }) {

  // Carregando a fonte MemoirDisplay
  const [fontCarregada, setFontCarregada] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    Font.loadAsync({
      'MemoirDisplay': require('../../assets/fonts/Memoir Display.ttf'),
    }).then(() => setFontCarregada(true));
  }, []);

  // Caso a fonte não seja carregada, será exibido um texto que a fonte está sendo carregada
  if (!fontCarregada) {
    return <Text>Carregando fonte...</Text>;
  }

  // Função para enviar o e-mail de recuperação
  const enviarEmailRecuperacao = async () => {
    if (!email) {
      Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
      return;
    }

    try {
      const response = await fetch('http://10.0.0.179:3008/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Sucesso', 'Link de redefinição enviado para o e-mail.');
        navigation.navigate('Login');  // Redireciona para a tela de login após enviar
      } else {
        Alert.alert('Erro', data.error || 'Erro ao enviar o link de redefinição.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Imagem do background */}
      <ImageBackground style={styles.background} source={fundoSevenPlus}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.formContainer}>
          <View>
            <Text style={styles.textForgetPasswordTittle}>Esqueci a senha</Text>
            <Text style={styles.textForgetPassword}>Preencha o campo abaixo para receber o email da recuperação</Text>
            <TextInput
              style={styles.inputForgetPassword}
              placeholder='Digite seu email'
              value={email}
              onChangeText={setEmail}  // Atualiza o estado com o e-mail digitado
            />
          </View>
          <View style={styles.containerButtons}>
            <TouchableOpacity style={styles.containerButtonForm} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonForm}>VOLTAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containerButtonForm} onPress={enviarEmailRecuperacao}>
              <Text style={styles.buttonForm}>ENVIAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
