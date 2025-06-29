import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './BatTextInputStyles';

export function BatTextInput() {
  return (
        <TextInput
          style={styles.inputer}
          placeholder="pass">
        </TextInput>
  );
}