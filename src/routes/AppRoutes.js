import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { useAuth } from "../context/AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "../services/authService";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import { Routes } from "../Routes"; 
import { CardInfo } from "../pages/cardInfo";

import { Anunciar } from '../../src/pages/Anunciar/index';
import { Namebar } from '../../src/pages/NameBar';
import { Description } from '../../src/pages/Description';
import { Selectyourimage } from '../../src/pages/SelectYourImage';
import { ChoiseImage } from '../../src/pages/ChoiseImage';
import { CameraScreen } from '../../src/pages/Camera';
import { Location } from '../../src/pages/Location';


const Stack  = createNativeStackNavigator();


const AppRoutes = () => {
  const { setUser, setToken, user } = useAuth(); // Pega informações do contexto
  const [loading, setLoading] = useState(true); // Controla o estado de carregamento

  const handleLogin = async () => {
    try {
      // Verifica se há um token armazenado no AsyncStorage
      const token = await AsyncStorage.getItem('authToken');
      
      if (token) {
        // O token existe, então o usuário está logado
        setToken(token); // Define o token no contexto
        // Você pode realizar uma chamada à API aqui para validar o token se necessário
        // Exemplo: const userResponse = await api.get("/user", { headers: { Authorization: `Bearer ${token}` } });
        
        setUser({ name: 'Usuário Logado' }); // Exemplo de definição do usuário (substitua com dados reais)
      }
    } catch (error) {
      console.error("Erro ao tentar autenticar automaticamente:", error);
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  useEffect(() => {
    handleLogin(); // Tenta autenticar automaticamente ao iniciar
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Se o usuário está autenticado, redireciona para as rotas principais (com tabs)
  return user ? <Routes /> : <AuthNavigator />;
};

// Navegador de autenticação para Login/Register
const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
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
  );
};

export default AppRoutes;
