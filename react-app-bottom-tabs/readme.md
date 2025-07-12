## PASSO Á PASSO PARA CRIAR UM APP COM NAVEGAÇÃO DO TIPO PILHA

# PARA CRIAR UM PROJETO
npx create-expo-app react-app-bottom-tabs  --template

# INSTALAR CORE OU NUCLEO DE NAVEGAÇÃO DO REACT
npm install @react-navigation/native
Documantação: https://reactnavigation.org/docs

# INSTALAR LIB DE NAVEGAÇÃO APÓ INTALAÇÃO DO CORE
npx expo install react-native-screens react-native-safe-area-context

# INSTALAR METODO DE NAVEGAÇÃO BOTTOM TABS(NAVEGAÇÃO POR MENU INFERIOR)
npm install @react-navigation/bottom-tabs
npm install @react-navigation/stack


# INSTALAR O REACT ICONS PARA O APP
npm install react-native-tab-view


👇 Escolha o estilo de ícones que deseja usar nas abas (tabs)
✅ Usando FontAwesome (Visual mais estilizado)

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";
import { GalleryScreen } from "../screens/GalleryScreen/GalleryScreen";
import { FontAwesome } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomTabsRoutes() {
  return (
    <Navigator>
      <Screen 
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome 
              name="home"
              color={color}
              size={size}
            />
          ),
          title: "Início",
        }}
      />
      <Screen 
        name="gallery"
        component={GalleryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome 
              name="photo"
              color="green"
              size={size}
            />
          ),
          title: "Galeria",
        }}
      />
    </Navigator>
  );
}
🎯 Ou use MaterialCommunityIcons (Mais completo e padrão do Material Design)
tsx
Copiar
Editar
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";
import { GalleryScreen } from "../screens/GalleryScreen/GalleryScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomTabsRoutes() {
  return (
    <Navigator>
      <Screen 
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size}
            />
          ),
          title: "Início",
        }}
      />
      <Screen 
        name="gallery"
        component={GalleryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="view-gallery"
              color="green"
              size={size}
            />
          ),
          title: "Galeria",
        }}
      />
    </Navigator>
  );
}
ℹ️ Dica
Você pode explorar os ícones disponíveis em:

🔗 FontAwesome: https://fontawesome.com/icons

🔗 MaterialCommunityIcons: https://pictogrammers.com/library/mdi/

