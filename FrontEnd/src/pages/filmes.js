import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import Navegacao from '../components/barraNavegacao/navegacao';

export default function Filmes({ navigation }) {
  const [fontCarregada, setFontCarregada] = useState(false);
  const [filmes, setFilmes] = useState([]); // Estado para armazenar os filmes
  const [carregamento, setCarregamento] = useState(true);

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
    </>
   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
   
  },
  containerLista:{
    padding: 10,
    marginTop: 45,
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
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    padding: 10,
    shadowColor: '#000',
    
  
  },
  imagem: {
    width: '100%',
    height: 300,
    marginBottom: 10,
    objectFit:'contain'
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'MemoirDisplay',
    color: '#333',
    textAlign:'center'
  },
  categoria: {
    fontSize: 16,
    color: 'black',
    zIndex:9999,
    textAlign:'center'

  },
  descricao:{
    textAlign:'center'
  }
});
