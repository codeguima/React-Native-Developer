import React from 'react';
import { View } from 'react-native';
import { VideoProps } from 'expo-av';
import { styles } from './style';
import { Text } from 'react-native';


export function VideoPlayer() {
  return (
    <View style={styles.container}>
      <Text>VideoPlayer is Up!</Text>
    </View>
  );
}