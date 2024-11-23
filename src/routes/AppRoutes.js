import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { useAuth } from "../context/AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "../services/authService";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import { Routes } from "../Routes"; // Suas rotas com tabs (home e perfil)
import { CardInfo } from "../pages/cardInfo";

const AuthStack = createNativeStackNavigator();


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
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

export default AppRoutes;
