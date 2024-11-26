import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/login';
import ForgetPassword from './src/pages/forgetPassword'
import Register from './src/pages/register'
import Home from './src/pages/home'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
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
     
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
