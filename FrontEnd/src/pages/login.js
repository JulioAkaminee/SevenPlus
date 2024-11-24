import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (email === 'user@streaming.com' && senha === '123456') {
      navigation.replace('Home'); // Redireciona para a tela Home
    } else {
      Alert.alert('Erro', 'Email ou senha incorretos.');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://via.placeholder.com/500x800.png?text=Background+Filmes' }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.logo}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#ccc"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Não tem uma conta?{' '}
          <Text style={styles.textLink} onPress={() => Alert.alert('Cadastro', 'Página de cadastro em breve.')}>
            Cadastre-se
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Escurece o background
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    backgroundColor: '#333',
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    color: '#fff',
    fontSize: 16,
  },
  button: {
    width: '100%',
    backgroundColor: '#E50914', // Vermelho inspirado em serviços de streaming
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    color: '#ccc',
    fontSize: 14,
  },
  textLink: {
    color: '#E50914',
    fontWeight: 'bold',
  },
});
