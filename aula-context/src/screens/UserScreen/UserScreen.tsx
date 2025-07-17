import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import { UserContext } from '../../contexts/userContexts';

type UserScreenProps ={
  navigation: RouteProp<RootStackParamList, 'User'>
};

export function UserScreen({navigation} : UserScreenProps) {
  const {username } = navigation.params;

  const UserContextValue = useContext(UserContext);
  const nomeDinamico = UserContextValue?.loginName || 'Nenhum nome salvo';
  const nomeEstatico = UserContextValue?.nome || 'Nenhum nome fornecido';
  return (
    <View>
        <Text style={{fontSize: 32}}>Nome da rota: {username}</Text>
        <Text style={{fontSize: 32}}>Nome estatico: {nomeEstatico}</Text>
        <Text style={{fontSize: 32}}>Nome dinamico: {nomeDinamico}</Text>
    </View>
  );
}