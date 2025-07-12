import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './HomeScreenStyle';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello HomeScreen</Text>
    </View>
  );
}