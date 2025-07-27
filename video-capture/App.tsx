import { useEffect, useState, useRef } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { Camera, CameraRecordingOptions, CameraView } from 'expo-camera';
import { Video } from 'expo-av';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';

import CustomCameraView from './src/components/CameraView';
import { VideoPlayer } from './src/components/VideoPlayer';


export default function App() {
  const cameraRef = useRef<CameraView>(null);
  const [ isRecording, setIsRecording ] =  useState(false);
  const [video, setVideo] = useState<any>();


  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [hasMicrophonePermission, setHasMicrofonePermission] = useState(false);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(false);
  
  useEffect(() =>{
    (async() => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission = await Camera.getMicrophonePermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();

      setHasCameraPermission(cameraPermission.status === 'granted');
      setHasMicrofonePermission(microphonePermission.status === 'granted');
      setHasMediaLibraryPermission(mediaLibraryPermission.status === 'granted')
    })();
  },[]);

  if(hasCameraPermission === undefined || hasMicrophonePermission === false){
    return Alert.alert("Não tem permissão de camera ou audio!");
  }
  if(hasMediaLibraryPermission === false){
    return Alert.alert("Não tem acesso a biblioteca!");
  }

  const recordVideo =() =>{
    setIsRecording(true);

    const options : CameraRecordingOptions ={
      maxDuration:60,
    };

    if(cameraRef && cameraRef.current){
      cameraRef.current?.recordAsync(options).then((recordedVideo : any) => {
        setVideo(recordVideo);
        setIsRecording(false);
      });
    }  
  }

  const stopRecordVideo =() =>{
    setIsRecording(false);
    if(cameraRef && cameraRef.current){
      cameraRef.current.stopRecording();
    }
  }

  if(video){
    const shareVideo = () =>{
      
    }

    const saveVideo = () =>{
      
    }

    return (
      <VideoPlayer 
        video={video}
        onShare={shareVideo}
        onSave={saveVideo}
        onDiscard={() => setVideo(undefined)}
      />
  );
  }

  return (
    <CustomCameraView 
      cameraRef={cameraRef} 
      isRecording={isRecording}
      onRecording={onRecording}
      onStopRecording={onStopRecording}
    >
      
    </CustomCameraView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
