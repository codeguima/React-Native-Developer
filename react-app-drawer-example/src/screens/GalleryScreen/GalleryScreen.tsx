import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './GalleryScreenStyle';

export function GalleryScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello GalleryScreen 🖼️</Text>
    </View>
  );
}