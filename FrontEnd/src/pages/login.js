import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Font from 'expo-font';
import styles from '../styles/loginStyle';
import CarregarFontes from './carregarFontes';

import fundoSevenPlus from '../../assets/images/fundoSevenPlus.png';
import logoSevenPlus from '../../assets/images/logoSevenPlusPreta.png';

export default function Login({ navigation }) {
  const [fontCarregada, setFontCarregada] = useState(false);
  const [esconderSenha, setEsconderSenha] = useState(true);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'MemoirDisplay': require('../../assets/fonts/Memoir Display.ttf'),
      });
      setFontCarregada(true);
    };

    loadFonts();
  }, []);

  // Função para realizar o login
  const realizarLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('http://10.0.2.2:3050/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
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

  const alertEmDesenvolvimento = () =>{
    Alert.alert('Atenção','Esta funcionalidade esta em desenvolvimento')
  }

  return (
    <SafeAreaView style={styles.container}>
 
     
     <CarregarFontes>
       <View style={styles.containerLoginText}>
             {/* Container icone e btn cadastro */}
        <View>
          <View style={styles.containerIconeBntCadastrar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-right-alt" size={40} style={styles.setaVoltar} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.BtnCadastrarTop} onPress={()=> navigation.navigate('Cadastro')}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.textLogin} >Faça seu login</Text>
          <Text style={styles.textWelcomeLogin}>Entre com sua conta e tenha acesso ao melhor catálogo de filmes e séries, criado especialmente para você.</Text>
        </View>
       </View>
       
       <View style={styles.containerLogin}>
    
      
              <TextInput
                style={styles.inputTexto}
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
              />
           
        
              <View style={styles.inputArea}>
                <TextInput
                  secureTextEntry={esconderSenha}
                  style={styles.inputTexto}
                  placeholder="Senha"
                  onChangeText={(text) => setSenha(text)}
                  value={senha}
                />
                <TouchableOpacity onPress={() => setEsconderSenha(!esconderSenha)}>
                  <Icon style={styles.icon} name={esconderSenha ? "visibility-off" : "visibility"} size={30} color="white" />
                </TouchableOpacity>
            
            </View>
            <View style={styles.containerForgetPassword}>
              <TouchableOpacity>
                <Text style={styles.forgetPassword} onPress={() => navigation.navigate('Esqueci-senha')}>Esqueci a senha</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.containerBtnEntrar} onPress={realizarLogin}>
              <Text style={styles.btnEntrar}>Entrar</Text>
            </TouchableOpacity>

            <View style={styles.containerRedesSociais}>
              <TouchableOpacity style={styles.btnEntrarRedesSociais} onPress={alertEmDesenvolvimento}>
                <Image style={styles.iconRedeSocial} source={require('../../assets/images/google.png')} />
                <Text style={styles.textoBotao} >Continuar com Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnEntrarRedesSociais} onPress={alertEmDesenvolvimento} >
              <Image style={styles.iconRedeSocial} source={require('../../assets/images/facebook.png')} />
                <Text style={styles.textoBotao}>Continuar com Facebook</Text>
              </TouchableOpacity>
            </View>
   
       </View>
     </CarregarFontes>
    </SafeAreaView>
  );
}
