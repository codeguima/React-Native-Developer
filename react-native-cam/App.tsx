import { Camera, CameraType, useCameraPermissions } from 'expo-camera';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CustomCameraView from './src/components/CameraView';
import * as MediaLibrary from 'expo-media-library';


export default function App() {
  const [type, setType] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean>(false);
  const [hasMediaPermission, setMediaPermission] = useState<boolean>(false);

  useEffect(()=>{
    (async () =>{
      const {status} = await Camera.requestCameraPermissionsAsync();
      console.log(status);
      setHasCameraPermission(status === 'granted');
    })();

    (async () =>{
      const {} = await MediaLibrary.requestPermissionsAsync();
      setMediaPermission(status ==='granted');
    })();
  },[]);


  function toggleCameraFacing() {
    setType(current => (current === 'back' ? 'front' : 'back'));
  }


  if (hasCameraPermission === null) return <View><Text>Não tem permissão de Camera.</Text></View>;
  if (hasMediaPermission === null) return <View><Text>Não tem permissão de mídia.</Text></View>;


  if (!permission?.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Precisamos da sua permissão para mostrar a câmera</Text>
        <Button onPress={() =>requestPermission} title="Conceder permissão" />
      </View>
    );
  }

  

  return (
    <View style={styles.container}>
      <CustomCameraView type={type} onFlipCamera={toggleCameraFacing} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
});
