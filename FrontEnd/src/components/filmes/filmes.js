
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import * as Font from 'expo-font';
import YouTubeIframe from 'react-native-youtube-iframe'; // Importando o YouTubeIframe

export default function FilmesHorizontal({ navigation }) {
  const [fontCarregada, setFontCarregada] = useState(false);
  const [filmes, setFilmes] = useState([]);
  const [carregamento, setCarregamento] = useState(true);
  const [modalVisivel, setModalVisivel] = useState(false);
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);

  const abrirModal = (filme) => {
    setFilmeSelecionado(filme);
    setModalVisivel(true);
  };

  const fecharModal = () => {
    setModalVisivel(false);
    setFilmeSelecionado(null);
  };

  const carregarFilmes = async () => {
    try {
      const resposta = await fetch('http://10.0.0.179:3010/api/filmes');
      const dadosRecebidos = await resposta.json();
      console.log('Dados recebidos:', dadosRecebidos);  
      setFilmes(dadosRecebidos);
      setCarregamento(false);
    } catch (err) {
      console.error('Erro ao buscar filmes:', err);
    }
  };

  const carregarFonte = async () => {
    try {
      await Font.loadAsync({
        'MemoirDisplay': require('../../../assets/fonts/Memoir Display.ttf'),
      });
      setFontCarregada(true);
    } catch (error) {
      console.error('Erro ao carregar fonte:', error);
    }
  };

  useEffect(() => {
    carregarFonte();
    carregarFilmes();
  }, []);

  if (!fontCarregada || carregamento) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.carregandoTexto}>Carregando...</Text>
      </SafeAreaView>
    );
  }

  // Verificando se a categoria "acao" existe nas categorias de cada filme
  const filmesPorCategoria = {
    acao: filmes.filter(filme => {
      return Array.isArray(filme.categorias)
        ? filme.categorias.some(categoria => categoria.toLowerCase().includes('acao'))
        : filme.categorias.toLowerCase().includes('ação');
    }),
    drama: filmes.filter(filme =>
      Array.isArray(filme.categorias)
        ? filme.categorias.some(categoria => categoria.toLowerCase().includes('drama'))
        : filme.categorias.toLowerCase().includes('drama')
    ),
    romance: filmes.filter(filme =>
      Array.isArray(filme.categorias)
        ? filme.categorias.some(categoria => categoria.toLowerCase().includes('romance'))
        : filme.categorias.toLowerCase().includes('romance')
    ),
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.categoriasContainer}>
        {/* Exibindo as categorias */}
        {['acao', 'drama', 'romance'].map((categoria) => (
          <View key={categoria} style={styles.categoriaContainer}>
            <Text style={styles.categoriaTitulo}>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</Text>

            {/* FlatList Horizontal para filmes da categoria */}
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={filmesPorCategoria[categoria]}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => abrirModal(item)}>
                  <View style={styles.filmeContainer}>
                    <Image style={styles.imagem} source={{ uri: item.capa }} />
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        ))}
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
            <TouchableOpacity style={styles.fecharModal} onPress={fecharModal}>
                <Text style={styles.fecharModalTexto}>Fechar</Text>
              </TouchableOpacity>
              {filmeSelecionado.url_video && (
                <YouTubeIframe
                  videoId={filmeSelecionado.url_video.split('v=')[1]}
                  height={220}
                  width="100%"
                  play={false}
                />
              )}
              <Text style={styles.modalTitulo}>{filmeSelecionado.titulo}</Text>
              <Text style={styles.modalDescricao}>{filmeSelecionado.descricao}</Text>
              <Text style={styles.modalCategoria}>Categoria: {filmeSelecionado.categorias}</Text>

            
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoriaContainer: {
    marginBottom: 20,
    marginLeft: 15
  },
  categoriaTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'MemoirDisplay',
    color:"white",
    marginVertical: 10
  },
  filmeContainer: {
    borderRadius: 8,
    marginRight: 15,
    shadowColor: '#000',
    width: 170,
  },
  imagem: {
    width: '100%',
    height: 240,
    objectFit: 'cover',
  },
  carregandoTexto: {
    fontSize: 18,
    fontFamily: 'MemoirDisplay',
    textAlign: 'center',
    marginTop: 20,
    color: '#555',
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

    width: '100%',
    height:'100%',
    display: 'flex',
    justifyContent: "center",
    backgroundColor:'#071731'
  },
  modalTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: "white",
    margin:20
  },
  modalDescricao: {
    fontSize: 18,
    marginBottom: 10,
    color: "white",
    marginLeft:20
  },
  modalCategoria: {
    fontSize: 16,
    marginBottom: 20,
    color: "white",
    marginLeft:20
  
  },
  fecharModal: {
    borderRadius: 5,
    display:'flex',
    width:"100%",
    alignItems:'flex-end',

  },
  fecharModalTexto: {
    color: 'black',
    fontSize: 16,
    backgroundColor:'white',
    padding: 10,
    borderRadius: 5,
    marginVertical:10,
    marginHorizontal:5,
    fontWeight:700
  },
});
