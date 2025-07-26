import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Modal, Image } from "react-native";
import { CameraView } from "expo-camera"; // Importando o CameraView corretamente
import { styles } from "./style";
import CameraViewProps from "./props";

export default function CustomCameraView({ type, onFlipCamera }: CameraViewProps) {
  const camRef = useRef<CameraView>(null);

  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  async function takePicture() {
    if (camRef.current) {
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setModalIsOpen(true);
    } else {
      console.log("Câmera não está disponível!");
    }
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={type}
        ratio="4:3"
        ref={camRef}
      />
      
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.flipArea} onPress={onFlipCamera}>
          <Text style={styles.flipText}>Flip Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.takePhoto} onPress={takePicture}>
          <Text style={styles.takeTextPhoto}>Take Picture</Text>
        </TouchableOpacity>
      </View>

      {capturedPhoto && (
        <Modal animationType="slide" transparent={false} visible={modalIsOpen}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
            <TouchableOpacity style={{ margin: 10 }} onPress={() => setModalIsOpen(false)}>
              <Text style={{fontSize:20}}>Close</Text>
            </TouchableOpacity>
            <Image
              style={{ width: '100%', height: 300, borderRadius: 20 }}
              source={{ uri: capturedPhoto }}
            />
          </View>
        </Modal>
      )}
    </View>
  );
}


