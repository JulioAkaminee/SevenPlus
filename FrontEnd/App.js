import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Login from './src/pages/login';
import ForgetPassword from './src/pages/forgetPassword';
import Register from './src/pages/register';
import Home from './src/pages/home';
import Filmes from './src/pages/filmes';
import AdiconarFilmes from './src/pages/adicionarFilmes';
import BemVindo from './src/pages/bemVindo';
import loginOuCadastrar from './src/pages/loginOuCadastrar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BemVindo"
        screenOptions={{
          ...TransitionPresets.ModalSlideFromBottomIOS, 
          transitionSpec: {
            open: {
              animation: 'decay',
              config: {
                duration: 800, 
        
              },
            },
            close: {
              animation: 'decay',
              config: {
                duration: 800,
          
              },
            },
          },
        }}
      >
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Esqueci-senha" component={ForgetPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Filmes" component={Filmes} options={{ headerShown: false }} />
        <Stack.Screen name="AdicionarFilmes" component={AdiconarFilmes} options={{ headerShown: false }} />
        <Stack.Screen name="BemVindo" component={BemVindo} options={{ headerShown: false }} />
        <Stack.Screen name="LoginOuCadastro" component={loginOuCadastrar} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
