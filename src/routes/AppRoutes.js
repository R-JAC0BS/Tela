import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "../services/authService";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/Home";


const AppStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Home"
        component={Home}  // Adicione a tela Home ou qualquer outra que seja apropriada
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  );
};

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

export const AppRoutes = () => {
  const { setUser, setToken, user } = useAuth();
  const [loading, setLoading] = useState(true);

  const handleLogin = async () => {
    try {
      const credentials = await AsyncStorage.getItem("@userCredentials");
      if (credentials) {
        const { email, password } = JSON.parse(credentials);
        const userResponse = await login(email, password);

        if (!userResponse.erro) {
          const { name, token } = userResponse.data;
          setUser({ name });
          setToken(token);
        }
      }
    } catch (error) {
      console.error("Erro ao tentar autenticar automaticamente:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return user ? <AppNavigator /> : <AuthNavigator />;
};
export default AppRoutes