import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext'; 
import AppRoutes from './src/routes/AppRoutes';

export default function App() {
  return (
    <AuthProvider> {/* Provê o contexto de autenticação */}
      <NavigationContainer>
        <AppRoutes /> {/* Usa AppRoutes para decidir entre AuthNavigator ou AppNavigator */}
      </NavigationContainer>
    </AuthProvider>
  );
}