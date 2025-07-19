import React from 'react';
import { View, Text } from 'react-native';


import { styles } from './style';
import CardView from '../../components/CardView';

export function GarageScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.cameraBox}>
          <CardView />
          <View style={[styles.triangleCorner, styles.topLeft]} />
          <View style={[styles.triangleCorner, styles.topRight]} />
          <View style={[styles.triangleCorner, styles.bottomLeft]} />
        <View style={[styles.triangleCorner, styles.bottomRight]} />
      </View>
    </View>
  );
}