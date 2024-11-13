import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import { Perfil } from './pages/Perfil';
import { Anunciar } from './pages/Anunciar';  // Já importado, mas não sendo utilizado aqui.

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 85,
          padding: 5,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          overflow: 'hidden',
          position: 'absolute',
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 15,
          elevation: 10,
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="pesquisar"
        component={Perfil} // Mudar para "Pesquisar" se necessário
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View style={{ alignItems: 'center' }}>
              <Ionicons 
                size={size + 6} 
                color={focused ? '#FFBD2C' : '#000000'}
                name={focused ? 'search' : 'search-outline'}
              />
              <Text style={{
                color: focused ? "#FFBD2C" : "#000000",
                fontSize: 12,
                fontWeight: 'bold',
                marginTop: 7,
              }}>Pesquisar</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen 
        name="perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View style={{ alignItems: 'center' }}>
              <Ionicons 
                size={size + 6} 
                color={focused ? '#FFBD2C' : '#000000'}
                name={focused ? 'person' : 'person-outline'}
              />
              <Text style={{
                color: focused ? "#FFBD2C" : "#000000",
                fontSize: 12,
                fontWeight: 'bold',
                marginTop: 7,
              }}>Perfil</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
