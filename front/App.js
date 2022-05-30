import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './src/pages/Main'; 
import FinancesForm from './src/pages/FinancesForm'; 
import LoginForm from './src/pages/LoginForm'; 
import { UsersProvider } from './src/context/FinancesContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UsersProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
      >
        <Stack.Screen 
          name="Main" 
          component={Main} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="FinanceForm" 
          component={FinancesForm} 
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </UsersProvider>
  );
}