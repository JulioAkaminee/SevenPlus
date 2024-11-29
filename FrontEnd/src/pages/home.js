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
  ScrollView
} from 'react-native';
import fundoSevenPlus from '../../assets/images/fundoSevenPlus.png';
import styles from '../styles/homeStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logoSevenPlus from '../../assets/images/logoSevenPlus.png';
import userIcon from '../../assets/images/usuarioIcon.png';
import Carrossel from '../../src/components/carrossel/carrossel';
import * as Font from 'expo-font';

export default function Login({ navigation }) {
  const [menuVisivel, setMenuVisivel] = useState(false);
  const [menuUsuarioVisivel, setMenuUsuarioVisivel] = useState(false);

  // Função para abrir ou fechar o menu
  const abrirMenu = () => {
    setMenuVisivel(!menuVisivel);
  };

  //Função para abrir ou fechar o menu do usuario
  const abrirMenuUsuario = () =>{
    setMenuUsuarioVisivel(!menuUsuarioVisivel);
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
    <ScrollView>
     
            {/* Header */}
            <View style={styles.header}>
              <Image source={logoSevenPlus} style={styles.logo} />
              <View style={styles.containerUsuario}>
                <TouchableOpacity onPress={abrirMenuUsuario}>
                  <Image  source={userIcon} style={styles.logo} />
                </TouchableOpacity>
                <TouchableOpacity onPress={abrirMenu}>
                  <Icon style={styles.icon} name="menu" size={60} color="white" />
                </TouchableOpacity>
              </View>
            </View>
            {/* Componente Carrossel */}
            <Carrossel/>
            {/* Renderização condicional do menu */}
            {menuVisivel && (
            <>
            <TouchableWithoutFeedback onPress={abrirMenu}>
              <View style={styles.fundoMenu} />
            </TouchableWithoutFeedback>
            <View style={styles.menu}>
                <TouchableOpacity style={styles.containerMenuText}>
                  <Icon style={styles.iconMenu} name="home" size={40} color="white" />
                  <Text style={styles.textItemMenu}>Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerMenuText}>
                  <Icon style={styles.iconMenu} name="movie" size={40} color="white" />
                  <Text style={styles.textItemMenu}>Filmes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerMenuText}>
                  <Icon style={styles.iconMenu} name="movie" size={40} color="white" />
                  <Text style={styles.textItemMenu}>Series</Text>
                </TouchableOpacity>
            </View>
            </>
            )}

            {/* modal usuario */}
            {menuUsuarioVisivel && (
            <>
            <TouchableWithoutFeedback onPress={abrirMenuUsuario}>
              <View style={styles.fundoMenu} />
            </TouchableWithoutFeedback>
            <View style={styles.menuUsuario}>
            <View style={styles.seta}></View>
                <TouchableOpacity>
                  <Text style={styles.textMenuUsuario}>Configurações</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.textMenuUsuario}>Favoritos</Text>
                </TouchableOpacity>
                
            </View>
            </>
            )}
            {/* Filmes */}
            <View>
              <Text style={styles.textCategoriaFilme}>AÇÃO</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.containerFilmes} >
     
                <Image style={styles.imagemFilme} source={{uri: 'https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABahwZJ8gVl4SVfthSV63P6zHRHPOuXd7sZ_b-cGLf0l7pFFGYf2SPGuLmPulZVvAY70mNOXmP7hkZ0lJHVatjm1qnrfbycrflc-ySmzeo2k7nKPwMWGZ225NcAmW7blAlgaLrQ.jpg?r=93b'}}/>
                <Image style={styles.imagemFilme} source={{uri: 'https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABahwZJ8gVl4SVfthSV63P6zHRHPOuXd7sZ_b-cGLf0l7pFFGYf2SPGuLmPulZVvAY70mNOXmP7hkZ0lJHVatjm1qnrfbycrflc-ySmzeo2k7nKPwMWGZ225NcAmW7blAlgaLrQ.jpg?r=93b'}}/>
                <Image style={styles.imagemFilme} source={{uri: 'https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABahwZJ8gVl4SVfthSV63P6zHRHPOuXd7sZ_b-cGLf0l7pFFGYf2SPGuLmPulZVvAY70mNOXmP7hkZ0lJHVatjm1qnrfbycrflc-ySmzeo2k7nKPwMWGZ225NcAmW7blAlgaLrQ.jpg?r=93b'}}/>
                <Image style={styles.imagemFilme} source={{uri: 'https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABahwZJ8gVl4SVfthSV63P6zHRHPOuXd7sZ_b-cGLf0l7pFFGYf2SPGuLmPulZVvAY70mNOXmP7hkZ0lJHVatjm1qnrfbycrflc-ySmzeo2k7nKPwMWGZ225NcAmW7blAlgaLrQ.jpg?r=93b'}}/>
              </View>
              </ScrollView>
            </View>
            <View>
              <Text style={styles.textCategoriaFilme}>DRAMA</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.containerFilmes} >
     
                <Image style={styles.imagemFilme} source={{uri: 'https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABahwZJ8gVl4SVfthSV63P6zHRHPOuXd7sZ_b-cGLf0l7pFFGYf2SPGuLmPulZVvAY70mNOXmP7hkZ0lJHVatjm1qnrfbycrflc-ySmzeo2k7nKPwMWGZ225NcAmW7blAlgaLrQ.jpg?r=93b'}}/>
                <Image style={styles.imagemFilme} source={{uri: 'https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABahwZJ8gVl4SVfthSV63P6zHRHPOuXd7sZ_b-cGLf0l7pFFGYf2SPGuLmPulZVvAY70mNOXmP7hkZ0lJHVatjm1qnrfbycrflc-ySmzeo2k7nKPwMWGZ225NcAmW7blAlgaLrQ.jpg?r=93b'}}/>
                <Image style={styles.imagemFilme} source={{uri: 'https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABahwZJ8gVl4SVfthSV63P6zHRHPOuXd7sZ_b-cGLf0l7pFFGYf2SPGuLmPulZVvAY70mNOXmP7hkZ0lJHVatjm1qnrfbycrflc-ySmzeo2k7nKPwMWGZ225NcAmW7blAlgaLrQ.jpg?r=93b'}}/>
                <Image style={styles.imagemFilme} source={{uri: 'https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABahwZJ8gVl4SVfthSV63P6zHRHPOuXd7sZ_b-cGLf0l7pFFGYf2SPGuLmPulZVvAY70mNOXmP7hkZ0lJHVatjm1qnrfbycrflc-ySmzeo2k7nKPwMWGZ225NcAmW7blAlgaLrQ.jpg?r=93b'}}/>
              </View>
              </ScrollView>
            </View>
            <View>
              <Text style={styles.textCategoriaFilme}>ROMANCE</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.containerFilmes} >
     
                <Image style={styles.imagemFilme} source={{uri: 'https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABahwZJ8gVl4SVfthSV63P6zHRHPOuXd7sZ_b-cGLf0l7pFFGYf2SPGuLmPulZVvAY70mNOXmP7hkZ0lJHVatjm1qnrfbycrflc-ySmzeo2k7nKPwMWGZ225NcAmW7blAlgaLrQ.jpg?r=93b'}}/>
                <Image style={styles.imagemFilme} source={{uri: 'https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABahwZJ8gVl4SVfthSV63P6zHRHPOuXd7sZ_b-cGLf0l7pFFGYf2SPGuLmPulZVvAY70mNOXmP7hkZ0lJHVatjm1qnrfbycrflc-ySmzeo2k7nKPwMWGZ225NcAmW7blAlgaLrQ.jpg?r=93b'}}/>
                <Image style={styles.imagemFilme} source={{uri: 'https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABahwZJ8gVl4SVfthSV63P6zHRHPOuXd7sZ_b-cGLf0l7pFFGYf2SPGuLmPulZVvAY70mNOXmP7hkZ0lJHVatjm1qnrfbycrflc-ySmzeo2k7nKPwMWGZ225NcAmW7blAlgaLrQ.jpg?r=93b'}}/>
                <Image style={styles.imagemFilme} source={{uri: 'https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABahwZJ8gVl4SVfthSV63P6zHRHPOuXd7sZ_b-cGLf0l7pFFGYf2SPGuLmPulZVvAY70mNOXmP7hkZ0lJHVatjm1qnrfbycrflc-ySmzeo2k7nKPwMWGZ225NcAmW7blAlgaLrQ.jpg?r=93b'}}/>
              </View>
              </ScrollView>
            </View>
     
   </ScrollView>
            <View style={styles.footer}>
            <View style={styles.containerIconFooter}>
              <Icon name="home" size={30} color="white" />
              <Text style={{color:'white'}}>Home</Text>
            </View>

            <View style={styles.containerIconFooter}>
              <Icon name="home" size={30} color="white" />
              <Text style={{color:'white'}}>Filmes</Text>
            </View>

            <View style={styles.containerIconFooter}>
              <Icon name="home" size={30} color="white" />
              <Text style={{color:'white'}}>Series</Text>
            </View>
          </View>
    </SafeAreaView>
  );
}
