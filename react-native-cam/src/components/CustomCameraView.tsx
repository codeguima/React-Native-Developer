import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CameraViewProps from "../interfaces/CameraViewProps";
import { CameraView } from "expo-camera";


export default function CustomCameraView({type, onFlipCamera }: CameraViewProps) {
  return (
    <CameraView style={styles.camera} facing={type} ratio="4:3">
      <View style={styles.mainView}>
        <TouchableOpacity style={styles.flipArea} onPress={onFlipCamera}>
          <Text style={styles.flipText}>Flip Camera</Text>
        </TouchableOpacity>
      </View>
    </CameraView>
  );
}


const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  flipText: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  flipArea: {
    position: 'absolute',
    bottom: 20,
  },
});
