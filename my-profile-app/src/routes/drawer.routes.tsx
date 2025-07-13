import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainScreen } from '../screens/MainScreen/MainScreen';
import { SkillScreen } from '../screens/SkillScreen/SkillScreen';

const { Navigator, Screen } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#000', // Drawer preto
        },
        drawerActiveTintColor: '#fff', // item ativo branco
        drawerInactiveTintColor: '#aaa', // item inativo cinza
        headerStyle: {
          backgroundColor: '#000', // header preto
        },
        headerTintColor: '#fff', // texto e ícones brancos
      }}
    >
      <Screen
        name="Main"
        component={MainScreen}
        options={{ title: 'Meu Perfil' }}
      />
      <Screen
        name="Skills"
        component={SkillScreen}
        options={{ title: 'Minhas Skills' }}
      />
    </Navigator>
  );
}
