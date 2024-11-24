import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/login';
import Home from './src/pages/home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} // Esconde o cabeçalho
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Catálogo de Filmes' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
