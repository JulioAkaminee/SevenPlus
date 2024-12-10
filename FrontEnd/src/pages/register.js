import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ImageBackground, StatusBar, Alert, Image } from 'react-native';
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
      const response = await fetch('http://10.0.0.179:3010/register', {
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
  
      

      <View style={styles.containerRegisterText}>
      <View style={styles.containerIconeBntCadastrar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-right-alt" size={40} style={styles.setaVoltar} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.BtnCadastrarTop} onPress={()=> navigation.navigate('Login')}>Entrar</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.textRegister} >Faça seu Cadastro</Text>
            <Text style={styles.textFacaCadastro}>Junte-se à nossa comunidade e tenha acesso a um mundo de filmes e séries incríveis, sempre que quiser.</Text>

      </View>
      <View style={styles.containerRegister}>

            
            <TextInput
              placeholder="Digite seu nome completo"
              style={styles.inputCadastro}
              value={nome}
              onChangeText={setNome}
            />
       

      
          
            <TextInput
              placeholder="Digite seu email"
              style={styles.inputCadastro}
              value={email}
              onChangeText={setEmail}
            />
      

    
          
              <View>
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
       

            <View style={styles.inputArea}>
              <TextInput
                secureTextEntry={esconderSenhaConfirmacao}
                style={styles.inputCadastro}
                placeholder="Confirme sua senha"
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
              />
              <TouchableOpacity onPress={() => setesconderSenhaConfirmacao(!esconderSenhaConfirmacao)}>
                <Icon style={styles.icon} name="visibility" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.containerBtnCadastrar} onPress={registrarUsuario}>
            <Text style={styles.btnCadastrar}>Cadastrar</Text>
          </TouchableOpacity>

        <View style={styles.containerRedesSociais}>
              <TouchableOpacity style={styles.btnEntrarRedesSociais} onPress={() => Alert.alert('Erro','Ainda em processo de desenvolvimento desta funcionalidade.')}>
                <Image style={styles.iconRedeSocial} source={require('../../assets/images/google.png')} />
                <Text style={styles.textoBotao} >Continuar com Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnEntrarRedesSociais} onPress={() => Alert.alert('Erro','Ainda em processo de desenvolvimento desta funcionalidade.')}  >
              <Image style={styles.iconRedeSocial} source={require('../../assets/images/facebook.png')} />
                <Text style={styles.textoBotao}>Continuar com Facebook</Text>
              </TouchableOpacity>
            </View>
        </View>

  
    </SafeAreaView>
  );
}
