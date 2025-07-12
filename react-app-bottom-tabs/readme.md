# 📱 React Native App com Navegação em Pilha e Abas (Stack + Bottom Tabs)

Este projeto usa o **React Navigation** com as navegações **Stack** (pilha) e **Bottom Tabs** (menu inferior), com suporte a ícones usando **FontAwesome** ou **MaterialCommunityIcons**.

---

## 🚀 Passo a Passo para Criar o Projeto

### 1. Criar um novo projeto Expo
```bash
npx create-expo-app react-app-bottom-tabs --template
```

### 2. Instalar o núcleo de navegação
```bash
npm install @react-navigation/native
```
📘 Documentação oficial: https://reactnavigation.org/docs

### 3. Instalar dependências nativas (obrigatórias)
```bash
npx expo install react-native-screens react-native-safe-area-context
```

### 4. Instalar navegação por abas e por pilha
```bash
npm install @react-navigation/bottom-tabs
npm install @react-navigation/stack
```

### 5. Instalar suporte a ícones (opcional, mas recomendado)
```bash
npm install react-native-tab-view
```

### 🧭 Estrutura da Navegação
Você pode usar ícones personalizados nas abas do seu app. Abaixo, dois exemplos completos com diferentes estilos:

✅ Usando FontAwesome (Estilo Clássico e Estilizado)

```bash
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
            <FontAwesome name="home" color={color} size={size} />
          ),
          title: "Início",
        }}
      />
      <Screen 
        name="gallery"
        component={GalleryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="photo" color="green" size={size} />
          ),
          title: "Galeria",
        }}
      />
    </Navigator>
  );
}

```

### 🎯 Usando MaterialCommunityIcons (Padrão Material Design)

```bash
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
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          title: "Início",
        }}
      />
      <Screen 
        name="gallery"
        component={GalleryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-gallery" color="green" size={size} />
          ),
          title: "Galeria",
        }}
      />
    </Navigator>
  );
}

```

### 🔗 Links Úteis
🔸 FontAwesome: https://fontawesome.com/icons

🔸 MaterialCommunityIcons: https://pictogrammers.com/library/mdi/

📘 React Navigation Docs: https://reactnavigation.org/docs

### ✅ Dica Extra: Combinar Stack com Tabs

```bash
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabsRoutes } from './BottomTabsRoutes';
import { GalleryScreen } from './screens/GalleryScreen/GalleryScreen';

const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={BottomTabsRoutes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="gallery-full"
          component={GalleryScreen}
          options={{ title: 'Galeria Completa' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

```
### 📌 Observações
Para ícones mais modernos e variados, use MaterialCommunityIcons.

Para um visual mais clássico e elegante, FontAwesome também é uma excelente escolha.

Pronto! Agora você tem uma base sólida para criar apps com navegação eficiente e visual profissional! 🚀

-