import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { CameraView } from "expo-camera";

import { CameraViewProps } from "./props";
import { styles } from "./style";

export default function CustomCameraView({
  cameraRef,
  isRecording,
  onRecord,
  onStopRecording,
}: CameraViewProps) {
  return (
    <CameraView style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={isRecording ? onStopRecording : onRecord}
          style={styles.buttonRecord}
        >
          <Text style={styles.buttonText}>
            {isRecording ? "Stop Recording" : "Start Record"}
          </Text>
        </TouchableOpacity>
      </View>
    </CameraView>
  );
}