import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginForm from './src/pages/LoginForm';
import CadastroForm from './src/pages/CadastroForm';
import Main from './src/pages/Main';
import FinancesForm from './src/pages/FinancesForm';

import { UsersProvider } from './src/context/FinancesContext';

const Stack = createNativeStackNavigator();

function App() {
  return (
  <UsersProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          options={{headerShown: false}}
          component={LoginForm} 
        />

        <Stack.Screen 
          name="Cadastro" 
          options={{headerShown: false}}
          component={CadastroForm} 
        />

        <Stack.Screen 
          name="Main" 
          options={{headerShown: false}}
          component={Main} 
        />
        
        <Stack.Screen 
          name="FinancesForm" 
          options={{headerShown: false}}
          component={FinancesForm} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  </UsersProvider>
  );
}

export default App;