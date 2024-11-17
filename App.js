import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './src/context/AuthContext'; 
import AppRoutes from './src/routes/AppRoutes'; // Importando AppRoutes corretamente
import Anunciar from './src/pages/Anunciar';
import Namebar from './src/pages/NameBar';
import { Routes } from './src/Routes';
import Description from './src/pages/Description';
import Selectyourimage from './src/pages/SelectYourImage';
import ChoiseImage from './src/pages/ChoiseImage';
import CameraScreen from './src/pages/Camera';
import Location from './src/pages/Location';
import { Home } from './src/pages/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider> {/* Envolva o NavigationContainer com AuthProvider */}
      <NavigationContainer>
        <Stack.Navigator>
         
          {/* <Stack.Screen
            name="appRoutes"
            component={AppRoutes}
            options={{ headerShown: false }}
          />        */}
          <Stack.Screen
            name="routes"
            component={Routes}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name = "Home"
            component={Home}
            options={{ headerShown: false }}          
          />
          <Stack.Screen
            name="anunciar"
            component={Anunciar}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="nomebar"
            component={Namebar}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="description"
            component={Description}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="selectyourimage"
            component={Selectyourimage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="choiseImage"
            component={ChoiseImage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="camerascreen"
            component={CameraScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="location"
            component={Location}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
