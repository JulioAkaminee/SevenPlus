import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ImageBackground, StatusBar, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import fundoSevenPlus from '../../assets/images/fundoSevenPlus.png';
import styles from '../styles/registerStyle';
import * as Font from 'expo-font';

export default function Register({ navigation }) {
  const [fontCarregada, setFontCarregada] = useState(false);
  const [esconderSenha, setesconderSenha] = useState(true);
  const [esconderSenhaConfirmacao, setesconderSenhaConfirmacao] = useState(true);

  // Estados para os campos do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  useEffect(() => {
    Font.loadAsync({
      'MemoirDisplay': require('../../assets/fonts/Memoir Display.ttf'),
    }).then(() => setFontCarregada(true));
  }, []);

  if (!fontCarregada) {
    return <Text>Carregando fonte...</Text>;
  }

  const registrarUsuario = async () => {
    if (!nome || !email || !senha || !confirmarSenha) {
      return Alert.alert('Erro', 'Preencha todos os campos.');
    }

    if (senha !== confirmarSenha) {
      return Alert.alert('Erro', 'As senhas não coincidem.');
    }

    try {
      const response = await fetch('http://10.0.0.179:3008/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, senha }),
      });
      

      const data = await response.json();

      if (response.status === 201) {
        Alert.alert('Sucesso', data.message);
        navigation.navigate('Login');
      } else {
        Alert.alert('Erro', data.error);
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível realizar o cadastro.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} source={fundoSevenPlus}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.formContainer}>
          <Text style={styles.title}>Cadastre-se</Text>
          <View>
            <Text style={styles.textLabelRegister}>Nome Completo</Text>
            <TextInput
              placeholder="Digite seu nome completo"
              style={styles.inputCadastro}
              value={nome}
              onChangeText={setNome}
            />
          </View>

          <View>
            <Text style={styles.textLabelRegister}>Email</Text>
            <TextInput
              placeholder="Digite seu email"
              style={styles.inputCadastro}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View>
            <Text style={styles.textLabelRegister}>Senha</Text>
            <View style={styles.inputArea}>
              <TextInput
                secureTextEntry={esconderSenha}
                style={styles.inputCadastro}
                placeholder="Digite sua senha"
                value={senha}
                onChangeText={setSenha}
              />
              <TouchableOpacity onPress={() => setesconderSenha(!esconderSenha)}>
                <Icon style={styles.icon} name="visibility" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.textLabelRegister}>Confirmação de Senha</Text>
            <View style={styles.inputArea}>
              <TextInput
                secureTextEntry={esconderSenhaConfirmacao}
                style={styles.inputCadastro}
                placeholder="Digite sua senha"
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
              />
              <TouchableOpacity onPress={() => setesconderSenhaConfirmacao(!esconderSenhaConfirmacao)}>
                <Icon style={styles.icon} name="visibility" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.containerButton} onPress={registrarUsuario}>
            <Text style={styles.buttonCadastrar}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText} onPress={() => navigation.navigate('Login')}>
            Faça seu Login
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
