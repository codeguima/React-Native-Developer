import React from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from './BatButtonStyle';

interface BatButtonProps {
  title: string;
  onPress: () => void;
}

export function BatButton({ title, onPress }: BatButtonProps) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
