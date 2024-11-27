import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import fundoSevenPlus from '../../assets/images/fundoSevenPlus.png';
import styles from '../styles/homeStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logoSevenPlus from '../../assets/images/logoSevenPlus.png';
import userIcon from '../../assets/images/usuarioIcon.png';
import * as Font from 'expo-font';



export default function Login({ navigation }) {
  const [menuVisivel, setMenuVisivel] = useState(false);

  const abrirMenu = () => {
    setMenuVisivel(!menuVisivel);
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
      {/* Imagem de fundo */}
      <ImageBackground style={styles.background} source={fundoSevenPlus}>
   

        {/* Header */}
        <View style={styles.header}>
          <Image source={logoSevenPlus} style={styles.logo} />
          <View style={styles.containerUsuario}>
            <Image source={userIcon} style={styles.logo} />
            <TouchableOpacity onPress={abrirMenu}>
              <Icon style={styles.icon} name="menu" size={60} color="white" />
            </TouchableOpacity>

          </View>
        </View>
       
            {/* Renderização condicional do menu */}
            {(() => {
              if (menuVisivel === true) {  // Verifica se o menu deve ser mostrado
                return (
                  
                  <View style={styles.menu}>
                    <TouchableOpacity>
                    <Text style={styles.textItemMenu}>Inicio</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <Text style={styles.textItemMenu}>Filmes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <Text style={styles.textItemMenu}>Series</Text>
                    </TouchableOpacity>
                    
                  
                  </View>
                );
              }
              return null;  
            })()}
      </ImageBackground>
    </SafeAreaView>
  );
}
