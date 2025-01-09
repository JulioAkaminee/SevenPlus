  import React, { useState, useEffect } from 'react';
  import { 
    View, 
    Text, 
    StatusBar, 
    Image, 
    TouchableOpacity, 
    StyleSheet, 
    SafeAreaView, 
    TouchableWithoutFeedback, 
    Keyboard, 
    ScrollView,
    ImageBackground,
    Animated,
    Easing,
    Alert
  } from 'react-native';
  import fundoSevenPlus from '../../assets/images/fundoSevenPlus.png';
  import styles from '../styles/homeStyle';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import logoSevenPlus from '../../assets/images/logoSevenPlusBranca.png';
  import userIcon from '../../assets/images/usuarioIcon.png';
  import Carrossel from '../../src/components/carrossel/carrossel';
  import * as Font from 'expo-font';
  import Navegacao from '../components/barraNavegacao/navegacao';
  import FilmesHorizontal from '../components/filmes/filmes.js';
  import  Header from '../components/header/header.js'
  export default function Home({ navigation }) {
    const [menuVisivel, setMenuVisivel] = useState(false);
    const [menuUsuarioVisivel, setMenuUsuarioVisivel] = useState(false);
    const [animacaoMenu, setAnimacaoMenu] = useState(new Animated.Value(0)); //inicia com opacidade 0
   

 
    //Função para abrir ou fechar o menu do usuario
    const abrirMenuUsuario = () =>{
      setMenuUsuarioVisivel(!menuUsuarioVisivel);

      Animated.timing(animacaoMenu,{
        toValue:menuUsuarioVisivel ? 0 : 1,
        duration: 250,
        easing: Easing.ease,
        useNativeDriver:true,
      }).start();

    };

 
    // Carregando minha fonte personalizada
    const [fontCarregada, setFontCarregada] = useState(false);
    useEffect(() => {
      Font.loadAsync({
        'MemoirDisplay': require('../../assets/fonts/Memoir Display.ttf'),
      }).then(() => setFontCarregada(true));
    }, []);

    // Caso a fonte não seja carregada, exibe a mensagem
    if (!fontCarregada) {
      return <Text>Carregando fonte...</Text>;
    }

    const alertEmDesenvolvimento = () =>{
      Alert.alert('Atenção','Esta funcionalidade esta em desenvolvimento')
    }

    return (
      <SafeAreaView style={styles.container}>
              <Header navigation={navigation}/>
        <View style={styles.background} >
            
              <ScrollView>
              {/* Componente Carrossel */}
              <Carrossel/>
            

              {/* Filmes */}
        
              <FilmesHorizontal/>
                </ScrollView>
      

    </View>
              <Navegacao navigation={navigation}/>
              {/* modal usuario */}
              {menuUsuarioVisivel && (
              <>
              <TouchableWithoutFeedback onPress={abrirMenuUsuario}>
                <View style={styles.fundoMenu} />
              </TouchableWithoutFeedback>

              <View style={styles.menuUsuario}>
                  <TouchableOpacity onPress={alertEmDesenvolvimento} style={styles.containerLogoMenuUser}>
                      <Image  source={userIcon} style={styles.logoMenuUsuario} />
                      <Text style={styles.textNameUsuario}>Júlio Akamine</Text>
               
                  </TouchableOpacity>

                  <TouchableOpacity  onPress={alertEmDesenvolvimento} style={styles.containerTextMenuUsuario}>
                    <Image source={require('../../assets/images/config-icon.png')}/>
                    <Text style={styles.textMenuUsuario}>Configurações</Text>
                  </TouchableOpacity>
              
                  <TouchableOpacity style={styles.containerTextMenuUsuario} onPress={() => navigation.navigate('AdicionarFilmes')}>
                    <Image source={require('../../assets/images/add-icon.png')}/>
                    <Text style={styles.textMenuUsuario}>Adicionar Filme</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.containerTextMenuUsuario} onPress={alertEmDesenvolvimento}>
                    <Image source={require('../../assets/images/favoritos-icon.png')}/>
                    <Text style={styles.textMenuUsuario}>Favoritos</Text>
                  </TouchableOpacity>
                  <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textMenuUsuarioExit}>Sair</Text>
                  </TouchableOpacity>
                  
                 
                  </View>
              </>
              )}

              
      </SafeAreaView>
    );
  }
