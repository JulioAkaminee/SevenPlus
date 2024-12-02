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
  FlatList
} from 'react-native';
import * as Font from 'expo-font';
import Navegacao from '../components/barraNavegacao/navegacao';
import logoSevenPlus from '../../assets/images/logoSevenPlus.png';
import userIcon from '../../assets/images/usuarioIcon.png';

export default function Filmes({ navigation }) {
  const [fontCarregada, setFontCarregada] = useState(false);
  const [filmes, setFilmes] = useState([]); // Estado para armazenar os filmes
  const [carregamento, setCarregamento] = useState(true);
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

  // Carregar a fonte personalizada
  useEffect(() => {
    const carregarFonte = async () => {
      try {
        await Font.loadAsync({
          'MemoirDisplay': require('../../assets/fonts/Memoir Display.ttf'),
        });
        setFontCarregada(true);
      } catch (error) {
        console.error('Erro ao carregar fonte:', error);
      }
    };

    carregarFonte();
  }, []);

  // Buscar filmes da API
  useEffect(() => {
    const pegarFilmes = async () => {
      try {
        const resposta = await fetch('http://10.0.0.179:3010/api/filmes'); // URL da API de filmes
        const dadosRecebidos = await resposta.json(); // Converte a resposta em JSON
        setFilmes(dadosRecebidos); // Atualiza o estado dos filmes
        setCarregamento(false); // Finaliza o estado de carregamento
      } catch (err) {
        console.error('Erro ao buscar filmes:', err);
      }
    };

    pegarFilmes();
  }, []);

  // Exibe mensagem enquanto a fonte ou os dados estão carregando
  if (!fontCarregada || carregamento) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.carregandoTexto}>Carregando...</Text>
      </SafeAreaView>
    );
  }

  // Renderiza a lista de filmes
  return (
    <>
     <View style={styles.header}>
                <Image source={logoSevenPlus} style={styles.logo} />
                <View style={styles.containerUsuario}>
                  <TouchableOpacity onPress={abrirMenuUsuario}>
                    <Image  source={userIcon} style={styles.logo} />
                  </TouchableOpacity>
                
                </View>
      
      
              </View>
     <SafeAreaView style={styles.container}>
      <View style={styles.containerLista}>
          <FlatList
            data={filmes} // Dados recebidos para a lista
            keyExtractor={(item) => item.id.toString()} // Usa o id como chave única
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.filmeContainer}>
                <Image style={styles.imagem} source={{ uri: item.capa }} />
                <Text style={styles.titulo}>{item.titulo}</Text>
                <Text style={styles.categoria}>Categoria: {item.categorias}</Text>
                <Text style={styles.descricao}>{item.descricao}</Text>
              </View>
            )}
          />
      </View>
    </SafeAreaView>
    <Navegacao navigation={navigation}/>
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
    </>
   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    paddingTop: 15,

   
  },
  containerLista:{
    paddingLeft: 10,
    paddingRight: 10,
    display:'flex',
    justifyContent: 'center',
    alignItems:'center'
  },
  carregandoTexto: {
    fontSize: 18,
    fontFamily: 'MemoirDisplay',
    textAlign: 'center',
    marginTop: 20,
    color: '#555',
  },
  filmeContainer: {
    backgroundColor: '#1E1E26',
    borderRadius: 8,
    marginBottom: 15,
    padding: 10,

    
  
  },
  imagem: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    objectFit:'contain'
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'MemoirDisplay',
    color: 'white',
    textAlign:'center'
  },
  categoria: {
    fontSize: 16,
    color: 'white',
    zIndex:9999,
    textAlign:'center'

  },
  descricao:{
    textAlign:'center',
    color:'white'
  },
  header:{
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor:'#1E1E26',
  

},
containerUsuario:{
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
   
},
icon:{
    marginLeft: 15,
    color: 'white',
   
},
menuUsuario:{
  backgroundColor: '#1E1E26',
  zIndex: 9999,
  position: 'absolute',
  bottom: 0,
  width: '100%',
  padding: 10,
  display: 'flex',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  height: 150,
  display:'flex',
  alignItems:'center',
  justifyContent:'center'

},
textMenuUsuario:{
  textAlign: 'center',
  margin: 5,
  fontSize: 18,
  color: 'white'
},
textMenuUsuarioExit:{
  textAlign: 'center',
  margin: 5,
  fontSize: 18,
  color: '#FF4C4C'
},
textItemMenu:{
    textAlign: 'center',
    fontSize: 25,
    margin: 10,
    color: 'black'
},
fundoMenu: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semitransparente
    zIndex: 998, // Fica atrás do menu
  },
  logo:{
    width: 70,
    height: 70, 
    
   
}
});
