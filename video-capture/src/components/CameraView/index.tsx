import React from "react";

import { Text, TouchableOpacity, View } from "react-native";
import { CameraView } from "expo-camera";

import { CameraViewProps } from "./props";
import { styles } from "./style";



export default function CustomCameraView({
    cameraRef,
    isRecording,
    onRecording,
    onStopRecording,
}:CameraViewProps){
    return(
        <CameraView style={styles.container} ref={cameraRef}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={isRecording ? onStopRecording : onRecording}
                    style={styles.buttonRecord}
                    >
                    <Text style={styles.buttonText}>
                        {isRecording ? "Stop Record" : "Start Record"}
                    </Text>
                </TouchableOpacity>
            </View>
        </CameraView>
    );
}