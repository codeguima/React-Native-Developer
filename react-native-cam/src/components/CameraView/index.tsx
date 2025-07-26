import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Modal, Image, ToastAndroid, Alert } from "react-native";
import { CameraView, ImageType } from "expo-camera"; // Importando o CameraView corretamente
import { styles } from "./style";
import CameraViewProps from "./props";
import * as MediaLibrary from 'expo-media-library';
import { FontAwesome5 } from '@expo/vector-icons';

export default function CustomCameraView({ type, onFlipCamera }: CameraViewProps) {
  const camRef = useRef<CameraView>(null);

  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);


  // async function convertToPNG(uri: string) {
  // const result = await ImageManipulator.manipulateAsync(
  //   uri,
  //   [],
  //   { format: ImageManipulator.SaveFormat.PNG }
  // );
  // return result.uri;
  // }


  async function takePicture() {

    const options ={quality :1 };

    if (camRef.current) {
      const data = await camRef.current.takePictureAsync(options);
      setCapturedPhoto(data.uri);
      setModalIsOpen(true);
    } else {
      Alert.alert("Camera Indisponivel!");
    }
  }

  async function savePicture(){

    if(capturedPhoto != null){

      try {
      // Salvando a foto no álbum
      await MediaLibrary.saveToLibraryAsync(capturedPhoto);

      // Exibir mensagem de sucesso no Android
      Alert.alert("Sucesso", "Foto salva na galeria!");

      // Fechar o modal após salvar
      setModalIsOpen(false);

    } catch (error) {
      console.error("Erro ao salvar a foto: ", error);
    }

    }
    
  }

  async function saveToAlbum(uri:string, album:string){
    const asset = await MediaLibrary.createAssetAsync(uri)
    await MediaLibrary.createAlbumAsync(album, asset);
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
          <FontAwesome5 name='sync' size={40} color='#fff' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.takePhoto} onPress={takePicture}>
          <FontAwesome5 name='camera' size={40} color='#fff' />
        </TouchableOpacity>
      </View>

      {capturedPhoto && (
        <Modal animationType="slide" transparent={false} visible={modalIsOpen}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
            <View style={{margin:10}}>
            <TouchableOpacity style={{ margin: 10 }} onPress={() => setModalIsOpen(false)}>
              <FontAwesome5 name='times' size={40} color='#000' />
            </TouchableOpacity>
            </View>
            <Image
              style={{ width: '100%', height: 300, borderRadius: 20 }}
              source={{ uri: capturedPhoto }}
            />
            <TouchableOpacity style={{ margin: 40 }} onPress={savePicture}>
              <FontAwesome5 name='sd-card' size={40} color='#000' />
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
}


