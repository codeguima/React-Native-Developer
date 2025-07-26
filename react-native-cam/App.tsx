import { Camera, CameraType, useCameraPermissions } from 'expo-camera';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CustomCameraView from './src/components/CameraView';

export default function App() {
  const [type, setType] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [hasPermission, setHasPermission] = useState<boolean>(false);

  useEffect(()=>{
    (async () =>{
      const {status} = await Camera.requestCameraPermissionsAsync();
      console.log(status);
      setHasPermission(status === 'granted');
    })();
  },[]);


  function toggleCameraFacing() {
    setType(current => (current === 'back' ? 'front' : 'back'));
  }


  if (!hasPermission) return <View />;

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
