import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/login';
import ForgetPassword from './src/pages/forgetPassword'
import Register from './src/pages/register'
import Home from './src/pages/home'
import Filmes from './src/pages/filmes';
import Navegacao from './src/components/barraNavegacao/navegacao';
import FilmesHorizontal from './src/components/filmesHorizontal/filmesHorizontalAcao';
import AdiconarFilmes from './src/pages/adicionarFilmes';





const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Esqueci-senha" 
          component={ForgetPassword} 
          options={{ headerShown: false }} 
        />

         <Stack.Screen 
          name="Cadastro" 
          component={Register} 
          options={{ headerShown: false }} 
         
        />

         <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }} 
         
        />

         <Stack.Screen 
          name="Filmes" 
          component={Filmes} 
          options={{ headerShown: false }} 
         
        />

        <Stack.Screen 
          name="AdicionarFilmes" 
          component={AdiconarFilmes} 
          options={{ headerShown: false }} 
         
        />



      


       
     
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
