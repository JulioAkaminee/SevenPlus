import React, { useState } from 'react';
import { View, Text, StatusBar, TextInput, TouchableOpacity, SafeAreaView, Alert, ImageBackground } from 'react-native';
import { useEffect } from 'react';
import fundoSevenPlus from '../../assets/images/fundoSevenPlus.png';
import styles from '../styles/forgetPasswordStyle'
import Icon from 'react-native-vector-icons/MaterialIcons';
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
    
      <View style={styles.containerForgetPassword}>
        <View style={styles.containerIconeBntCadastrar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-right-alt" size={40} style={styles.setaVoltar} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.BtnCadastrarTop} onPress={()=> navigation.navigate('Login')}>Entrar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerTextCenter}>
              <Text style={{fontFamily:'Epilogue-ExtraBold', fontSize: 32}}>Esqueci a senha</Text>
              <Text style={{fontSize: 18, fontFamily:'Epilogue-Medium'}}>Preencha o campo abaixo para receber o Email de recuperação.</Text>
            </View>
      </View>
      <View style={styles.containerForgetPasswordInput}>
        <TextInput placeholder='Email' style={styles.inputTexto}/>
        <TouchableOpacity style={{width:'100%', display:'flex',alignItems:'center'}}>
          <Text style={styles.btnEnviar}>Enviar</Text>
        </TouchableOpacity>

      </View>
        
  
    </SafeAreaView>
  );
}
