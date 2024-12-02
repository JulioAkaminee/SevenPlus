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
    Easing
  } from 'react-native';
  import fundoSevenPlus from '../../assets/images/fundoSevenPlus.png';
  import styles from '../styles/homeStyle';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import logoSevenPlus from '../../assets/images/logoSevenPlus.png';
  import userIcon from '../../assets/images/usuarioIcon.png';
  import Carrossel from '../../src/components/carrossel/carrossel';
  import * as Font from 'expo-font';
  import Navegacao from '../components/barraNavegacao/navegacao';
  import FilmesHorizontalAcao from '../components/filmesHorizontal/filmesHorizontalAcao';
  import FilmesHorizontalDrama from '../components/filmesHorizontal/filmesHorizontalDrama';
  import FilmesHorizontalRomance from '../components/filmesHorizontal/filmesHorizontalRomance';
  export default function Login({ navigation }) {
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

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.background} >
              {/* Header */}
              <View style={styles.header}>
                <Image source={logoSevenPlus} style={styles.logo} />
                <View style={styles.containerUsuario}>
                  <TouchableOpacity onPress={abrirMenuUsuario}>
                    <Image  source={userIcon} style={styles.logo} />
                  </TouchableOpacity>
                
                </View>
      
      
              </View>
              <ScrollView>
              {/* Componente Carrossel */}
              <Carrossel/>
            

              {/* Filmes */}
        
                <Text style={styles.textCategoriaFilme}>Ação</Text>
                <FilmesHorizontalAcao/>
                <Text style={styles.textCategoriaFilme}>Drama</Text>
                <FilmesHorizontalDrama />
                <Text style={styles.textCategoriaFilme}>Romance</Text>
                <FilmesHorizontalRomance/>
              
                </ScrollView>
      

    </View>
              <Navegacao navigation={navigation}/>
              {/* modal usuario */}
              {menuUsuarioVisivel && (
              <>
              <TouchableWithoutFeedback onPress={abrirMenuUsuario}>
                <View style={styles.fundoMenu} />
              </TouchableWithoutFeedback>
              <Animated.View 
            style={[
              styles.menuUsuario, 
              {
                transform: [
                  {
                    translateY: animacaoMenu.interpolate({
                      inputRange: [0, 1],
                      outputRange: [500, 0], 
                    })
                  }
                ]
              }
            ]}
          >
            
            
                  <TouchableOpacity>
                    <Text style={styles.textMenuUsuario}>Configurações</Text>
                  </TouchableOpacity>
              
                  <TouchableOpacity onPress={() => navigation.navigate('AdicionarFilmes')}>
                    <Text style={styles.textMenuUsuario}>Adicionar Filmes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textMenuUsuarioExit}>Sair</Text>
                  </TouchableOpacity>
                  
                  </Animated.View>
              </>
              )}

              
      </SafeAreaView>
    );
  }
