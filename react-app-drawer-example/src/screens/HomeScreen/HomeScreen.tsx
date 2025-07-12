import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './HomeScreenStyle';
import { StatusBar } from 'expo-status-bar';

export function HomeScreen({ navigation} : any) {

  function navToGallery(){
    navigation.navigate('gallery')
  }

  return (
    <View style={styles.container}>
      <Text>Hello HomeScreen 🏠</Text>
      <Button
        title='Go To Gallery'
        onPress={navToGallery}
      />
        <StatusBar style='dark'/>
    </View>
  );
}