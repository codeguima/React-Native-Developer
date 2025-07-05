import React from 'react';
import { TextInputProps, TextInput } from 'react-native';
import { styles } from './BatTextInputStyles';

interface BatTextInputProps extends TextInputProps {}


export function BatTextInput(props: BatTextInputProps) {
  return (
    <TextInput
      style={styles.inputer}
      {...props}
    />
  );
}
