import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, ImageBackground, TextInput, TouchableOpacity, Alert, AppState } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Font from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';

import fundoSevenPlus from '../../assets/images/fundoSevenPlus.png';
import logoSevenPlus from '../../assets/images/logoSevenPlus.png';
import styles from '../styles/loginStyle';

export default function Login({ navigation }) {
  const [fontCarregada, setFontCarregada] = useState(false);
  const [esconderSenha, setEsconderSenha] = useState(true);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [appState, setAppState] = useState(AppState.currentState);

  // Variáveis para controlar o timeout de inatividade
  let timeout;

  // Função para resetar o timeout de inatividade
  const resetInatividade = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      AsyncStorage.removeItem('@userToken'); // Remove o token de autenticação
      Alert.alert('Sessão Expirada', 'Você ficou inativo por 3 minutos. Você será redirecionado para a tela de login.');
      navigation.navigate('Login'); // Redireciona para a tela de login
    }, 180000); // 3 minutos (180000 ms)
  };

  // Monitorar o estado do app (se está em primeiro plano ou segundo plano)
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'MemoirDisplay': require('../../assets/fonts/Memoir Display.ttf'),
      });
      setFontCarregada(true);
    };

    loadFonts();

    const handleAppStateChange = (nextAppState) => {
      if (appState.match(/inactive|background/) && nextAppState === 'active') {
        resetInatividade(); // Reinicia o timer sempre que o app volta ao primeiro plano
      }
      setAppState(nextAppState);
    };

    // Adicionar listener usando addEventListener
    const appStateListener = AppState.addEventListener('change', handleAppStateChange);

    // Limpeza do listener
    return () => {
      appStateListener.remove(); // Remover o ouvinte de mudança de estado
      clearTimeout(timeout); // Limpar o timeout ao sair da tela
    };
  }, [appState]);

  // Função para realizar o login
  const realizarLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('http://10.0.0.179:3010/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem('@userToken', data.token); // Armazena o token após login
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        
        // Reinicia o timeout de inatividade assim que o usuário loga com sucesso
        resetInatividade();

        setTimeout(() => {
          navigation.navigate('Home'); // Redireciona para a página Home
        }, 1000);
      } else {
        Alert.alert('Erro', data.error || 'Erro ao realizar login.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
    }
  };

  if (!fontCarregada) {
    return <Text>Carregando fonte...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} source={fundoSevenPlus}>
        <View style={styles.formContainer}>
          <Image source={logoSevenPlus} style={styles.logo} />
          
          <View style={styles.containerInput}>
            <Text style={styles.labelInput}>Email</Text>
            <TextInput
              style={styles.inputTexto}
              placeholder="Digite seu email"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </View>

          <View style={styles.containerInput}>
            <Text style={styles.labelInput}>Senha</Text>
            <View style={styles.inputArea}>
              <TextInput
                secureTextEntry={esconderSenha}
                style={styles.inputTexto}
                placeholder="Digite sua senha"
                onChangeText={(text) => setSenha(text)}
                value={senha}
              />
              <TouchableOpacity onPress={() => setEsconderSenha(!esconderSenha)}>
                <Icon style={styles.icon} name={esconderSenha ? "visibility-off" : "visibility"} size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.containerBtnEntrar} onPress={realizarLogin}>
            <Text style={styles.btnEntrar}>ENTRAR</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.forgetPassword}
              onPress={() => navigation.navigate('Esqueci-senha')}
            >
              Esqueci a senha
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText} onPress={() => navigation.navigate('Cadastro')}>
            Cadastre-se agora!
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
