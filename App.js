import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LanguageProvider } from './src/contexts/LanguageContext';
import { AuthProvider } from './src/contexts/AuthContext';
import { DataProvider } from './src/contexts/DataContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <DataProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </DataProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}
