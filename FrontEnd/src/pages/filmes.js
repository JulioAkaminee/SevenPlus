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
  FlatList, 
  Modal
} from 'react-native';
import YouTubeIframe from 'react-native-youtube-iframe';
import * as Font from 'expo-font';
import Navegacao from '../components/barraNavegacao/navegacao';
import logoSevenPlus from '../../assets/images/logoSevenPlusPreta.png';
import userIcon from '../../assets/images/usuarioIcon.png';
import  Header from '../components/header/header.js'

export default function Filmes({ navigation }) {
  const [fontCarregada, setFontCarregada] = useState(false);
  const [filmes, setFilmes] = useState([]); // Estado para armazenar os filmes
  const [carregamento, setCarregamento] = useState(true);
  const [menuUsuarioVisivel, setMenuUsuarioVisivel] = useState(false);
  const [animacaoMenu, setAnimacaoMenu] = useState(new Animated.Value(0)); //inicia com opacidade 0
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);
  const [modalVisivel, setModalVisivel] = useState(false);

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

  const abrirModal = (filme) => {
    setFilmeSelecionado(filme);
    setModalVisivel(true);
  };

  const fecharModal = () => {
    setModalVisivel(false);
    setFilmeSelecionado(null);
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
    <Header navigation={navigation}/>
     <SafeAreaView style={styles.container}>
      <View style={styles.containerLista}>
      <FlatList
  data={filmes}
  key={(2).toString()} // Atribui uma chave fixa com base no número de colunas (2 neste caso)
  keyExtractor={(item) => item.id.toString()}
  showsVerticalScrollIndicator={false}
  numColumns={2} // Define o número de colunas (2 por linha)
  columnWrapperStyle={{
    justifyContent: 'space-between', // Espaçamento uniforme entre os itens
    marginBottom: 15, // Espaçamento entre as linhas
  }}
  renderItem={({ item }) => (
    <TouchableOpacity style={styles.filmeContainer} onPress={() => abrirModal(item)}>
      <View  >
        <Image style={styles.imagem} source={{ uri: item.capa }} />
      </View>
    </TouchableOpacity>
  )}
/>
      </View>

      {filmeSelecionado && (
        <Modal
          visible={modalVisivel}
          animationType="slide"
          transparent={true}
          onRequestClose={fecharModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              {/* Exibindo o vídeo com YouTubeIframe */}
              {filmeSelecionado.url_video && (
                <YouTubeIframe
                  videoId={filmeSelecionado.url_video.split('v=')[1]} // Extraindo o ID do vídeo
                  height={200}
                  width="100%"
                  play={true} // Se quiser iniciar o vídeo automaticamente, altere para true
                />
              )}
              <Text style={styles.modalTitulo}>{filmeSelecionado.titulo}</Text>
              
              <Text style={styles.modalDescricao}>{filmeSelecionado.descricao}</Text>
              <Text style={styles.modalCategoria}>Categoria: {filmeSelecionado.categorias}</Text>


              <TouchableOpacity style={styles.fecharModal} onPress={fecharModal}>
                <Text style={styles.fecharModalTexto}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
    <Navegacao navigation={navigation}/>


    
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

  },
  carregandoTexto: {
    fontSize: 18,
    fontFamily: 'MemoirDisplay',
    textAlign: 'center',
    marginTop: 20,
    color: '#555',
  },
  filmeContainer: {
    borderRadius: 8,
    padding: 5,
    flex: 1, // Permite que os itens ocupem igualmente o espaço da coluna
    marginHorizontal: 5, // Espaçamento lateral entre os itens
  },
  
  imagem: {
    width: '100%',
    height: 230,
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
    
   
},
modalOverlay: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
modalContainer: {
  backgroundColor: 'white',
  borderRadius: 5,
  padding: 20,
  width: '80%',
  alignItems: 'center',
},
modalTitulo: {
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
},
modalImagem: {
  width: '100%',
  height: 200,
  marginBottom: 5,
  objectFit: 'contain',
},
modalDescricao: {
  fontSize: 16,
  textAlign: 'center',
  marginBottom: 10,
},
modalCategoria: {
  fontSize: 16,
  textAlign: 'center',
  marginBottom: 20,
},
fecharModal: {
  backgroundColor: '#007bff',
  padding: 10,
  borderRadius: 5,
},
fecharModalTexto: {
  color: 'white',
  fontSize: 16,
},
});
