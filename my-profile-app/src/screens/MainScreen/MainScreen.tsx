import React from 'react';
import { View, Text, Image, Pressable, Linking } from 'react-native';
import { styles } from './MainScreenStyle';
import profile from '../../../assets/pictures/profile.png'; 
import { StatusBar } from 'expo-status-bar';

export function MainScreen() {

  const handleLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      alert(`Não foi possível abrir: ${url}`);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.image} />
      <Text style={styles.name}>Jhonny Guimrães</Text>
      <Text style={styles.subtitle}>Conecte-se comigo:</Text>

      <Pressable style={styles.button} onPress={() => handleLink('https://github.com/codeguima')}>
        <Text style={styles.buttonText}>🐱 GitHub</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => handleLink('https://www.linkedin.com/in/jhonny-guimaraes/')}>
        <Text style={styles.buttonText}>💼 LinkedIn</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => handleLink('mailto:jhonnycodedev@gmail.com')}>
        <Text style={styles.buttonText}>✉️ Email</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => handleLink('https://www.codeguima.com.br')}>
        <Text style={styles.buttonText}>🔗 Site</Text>
      </Pressable>
      <StatusBar style='light'/>
    </View>
  );
}
