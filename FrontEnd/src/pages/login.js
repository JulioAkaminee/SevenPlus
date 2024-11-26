import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
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

  // Carrega a fonte personalizada
  useEffect(() => {
    Font.loadAsync({
      'MemoirDisplay': require('../../assets/fonts/Memoir Display.ttf'),
    }).then(() => setFontCarregada(true));
  }, []);

  const realizarLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('http://10.0.0.179:3008/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok) {

        await AsyncStorage.setItem('@userToken', data.token);
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        setTimeout(() => {
          
          navigation.navigate('Cadastro'); // Redireciona para a página Home
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
      {/* Imagem de fundo */}
      <ImageBackground style={styles.background} source={fundoSevenPlus}>
        {/* Formulário de login */}
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
                <Icon style={styles.icon} name="visibility" size={30} color="white" />
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
