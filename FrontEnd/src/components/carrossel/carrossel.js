import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, FlatList } from 'react-native';

const { width, height } = Dimensions.get('window'); // Largura e altura da tela

// Dados do carrossel
const data = [
  {
    title: 'Item 1',
    imageUrl: 'https://cdn.awsli.com.br/600x700/1610/1610163/produto/177685212/poster-os-vingadores-ultimato-a-242769bd.jpg',
  },
  {
    title: 'Item 2',
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_875618-MLB51652225285_092022-O.webp',
  },
  {
    title: 'Item 3',
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_875618-MLB51652225285_092022-O.webp',
  },
];

const Carrossel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Índice do item atual

  useEffect(() => {
    // Define o intervalo de tempo para mudar o índice
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length); // Avança para o próximo item
    }, 3000); // Intervalo de 3 segundos (3000ms)

    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []);

  // Função para renderizar cada item
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Componente FlatList para renderizar os itens do carrossel */}
      <FlatList
        data={data}
        horizontal
        pagingEnabled // Faz o carrossel "pular" de um item para o outro
        showsHorizontalScrollIndicator={false} // Esconde o indicador de rolagem
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        extraData={currentIndex}
        onMomentumScrollEnd={(e) => {
          const contentOffsetX = e.nativeEvent.contentOffset.x;
          const newIndex = Math.floor(contentOffsetX / width);
          setCurrentIndex(newIndex); // Atualiza o índice do item atual
        }}
        initialScrollIndex={currentIndex} // Inicia o carrossel no índice atual
        // Atualiza a posição da rolagem automaticamente
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50, // Ajuste conforme necessário
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: height * 0.5, // Definindo altura do carrossel
    width: width, // Largura igual à largura da tela
    elevation: 5, // Sombra no card
  },
  image: {
    width: '100%',
    height: '60%', // Altura da imagem
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    color: '#333',
  },
});

export default Carrossel;
