import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import * as Font from 'expo-font';
import YouTubeIframe from 'react-native-youtube-iframe'; // Importando o YouTubeIframe

export default function FilmesHorizontalDrama({ navigation }) {
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

  useEffect(() => {
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

    carregarFonte();
  }, []);

  useEffect(() => {
    const pegarFilmes = async () => {
      try {
        const resposta = await fetch('http://10.0.0.179:3010/api/filmes');
        const dadosRecebidos = await resposta.json();
        setFilmes(dadosRecebidos);
        setCarregamento(false);
      } catch (err) {
        console.error('Erro ao buscar filmes:', err);
      }
    };

    pegarFilmes();
  }, []);

  if (!fontCarregada || carregamento) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.carregandoTexto}>Carregando...</Text>
      </SafeAreaView>
    );
  }

  const filmesAcao = filmes.filter(filme =>
    Array.isArray(filme.categorias)
      ? filme.categorias.some(categoria => categoria.toLowerCase().includes('drama'))
      : filme.categorias.toLowerCase().includes('drama')
  );

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.containerLista}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filmesAcao}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => abrirModal(item)}>
                <View style={styles.filmeContainer}>
                  <Image style={styles.imagem} source={{ uri: item.capa }} />
                
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>

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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLista: {
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 15,
    padding: 10,
    shadowColor: '#000',
    width: 170,
  },
  imagem: {
    width: '100%',
    height: 220,
    objectFit: 'contain',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'MemoirDisplay',
    color: 'white',
    textAlign: 'center',
  },
  categoria: {
    fontSize: 16,
    color: 'white',
    zIndex: 9999,
    textAlign: 'center',
  },
  descricao: {
    textAlign: 'center',
    color: 'white',
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
