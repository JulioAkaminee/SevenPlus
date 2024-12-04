import { Image, View, SafeAreaView, StyleSheet, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

export default function BemVindo({ navigation }) {
  const animacaoEscala = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Função para criar a animação da imagem
    const pulso = Animated.loop(
      Animated.sequence([
        Animated.timing(animacaoEscala, {
          toValue: 1.1,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(animacaoEscala, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
      ])
    );
    pulso.start();
  }, [animacaoEscala]);

  // Navegar para a tela de Login após 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("LoginOuCadastro");
    }, 3000);

    return () => clearTimeout(timer); // Limpar o timer quando o componente for desmontado
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image
        source={require("../../assets/images/logoSevenPlusPreta.png")} // Substitua pela URL da sua imagem
        style={[
          styles.image,
          { transform: [{ scale: animacaoEscala }] }, // Aplica a animação de escala
        ]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200, // Defina o tamanho desejado para a imagem
    height: 200,
    resizeMode: "contain",
  },
});
