import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext'; 
import AppRoutes from './src/routes/AppRoutes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './src/Routes';
import { Anunciar } from './src/pages/Anunciar';
import { Namebar } from './src/pages/NameBar';
import { Description } from './src/pages/Description';
import { Selectyourimage } from './src/pages/SelectYourImage';
import { ChoiseImage } from './src/pages/ChoiseImage';
import { CameraScreen } from './src/pages/Camera';
import { Location } from './src/pages/Location';
import { SendModal } from './src/components/SendModal';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <AuthProvider> {/* Provê o contexto de autenticação */}
      <NavigationContainer>
        <AppRoutes />
     
      </NavigationContainer>
    </AuthProvider>
  );
}