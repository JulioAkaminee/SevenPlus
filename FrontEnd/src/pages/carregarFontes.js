import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { ActivityIndicator, View } from 'react-native';

const CarregarFontes = ({ children }) => {
  const [fontesCarregadas, setFontesCarregadas] = useState(false);

  useEffect(() => {
    const carregarFontes = async () => {
      try {
        // Carregar as fontes
        await Font.loadAsync({
          'MemoirDisplay': require('../../assets/fonts/Memoir Display.ttf'),
          'Epilogue-Black': require('../../assets/fonts/epilogue/Epilogue-Black.ttf'),
          'Epilogue-ExtraBold': require('../../assets/fonts/epilogue/Epilogue-ExtraBold.ttf'),
          'Epilogue-Bold': require('../../assets/fonts/epilogue/Epilogue-Bold.ttf'),
          'Epilogue-Medium': require('../../assets/fonts/epilogue/Epilogue-Medium.ttf'),
        });
        setFontesCarregadas(true); // Atualiza o estado quando as fontes forem carregadas
      } catch (error) {
        console.error('Erro ao carregar as fontes:', error);
      }
    };

    carregarFontes(); // Chama a função de carregamento das fontes
  }, []); // O array vazio indica que o efeito só será executado uma vez, como componentDidMount

  // Se as fontes não foram carregadas, exibe um carregamento
  if (!fontesCarregadas) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Se as fontes foram carregadas, renderiza os filhos (children)
  return children;
};

export default CarregarFontes;
