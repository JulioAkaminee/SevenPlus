import styles from './headerStyle';
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  TouchableWithoutFeedback, 
  Animated,
  Easing,
  Alert
} from 'react-native';
import logoSevenPlus from '../../../assets/images/logoSevenPlusBranca.png';
import userIcon from '../../../assets/images/usuarioIcon.png';

export default function Header({ navigation }) {
  const [menuUsuarioVisivel, setMenuUsuarioVisivel] = useState(false);
  const [animacaoMenu] = useState(new Animated.Value(0)); // Inicia com opacidade 0

  const alertEmDesenvolvimento = () => {
    Alert.alert('Atenção', 'Esta funcionalidade está em desenvolvimento');
  };

  const abrirMenuUsuario = () => {
    const visivel = !menuUsuarioVisivel;
    setMenuUsuarioVisivel(visivel);

    Animated.timing(animacaoMenu, {
      toValue: visivel ? 1 : 0,
      duration: 250,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={logoSevenPlus} style={styles.logoSeven} />
        </TouchableOpacity>
        <View style={styles.containerUsuario}>
          <TouchableOpacity onPress={abrirMenuUsuario}>
            <Image source={userIcon} style={styles.logo} />
          </TouchableOpacity>
        </View>
      </View>

      {menuUsuarioVisivel && (
        <>
          <TouchableWithoutFeedback onPress={abrirMenuUsuario}>
            <View style={styles.fundoMenu} />
          </TouchableWithoutFeedback>

          <View style={styles.menuUsuario}>
            <TouchableOpacity onPress={alertEmDesenvolvimento} style={styles.containerLogoMenuUser}>
              <Image source={userIcon} style={styles.logoMenuUsuario} />
              <Text style={styles.textNameUsuario}>Júlio Akamine</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={alertEmDesenvolvimento} style={styles.containerTextMenuUsuario}>
              <Image source={require('../../../assets/images/config-icon.png')} />
              <Text style={styles.textMenuUsuario}>Configurações</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.containerTextMenuUsuario}
              onPress={() => navigation.navigate('AdicionarFilmes')}
            >
              <Image source={require('../../../assets/images/add-icon.png')} />
              <Text style={styles.textMenuUsuario}>Adicionar Filme</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containerTextMenuUsuario} onPress={alertEmDesenvolvimento}>
              <Image source={require('../../../assets/images/favoritos-icon.png')} />
              <Text style={styles.textMenuUsuario}>Favoritos</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.textMenuUsuarioExit}>Sair</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
}
