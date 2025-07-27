import { useEffect, useRef, useState } from 'react';
import { Alert } from 'react-native';
import { Camera, CameraRecordingOptions, CameraView } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';

import CustomCameraView from './src/components/CameraView';
import { VideoPlayer } from './src/components/VideoPlayer';

export default function App() {
  const cameraRef = useRef<CameraView | null>(null);

  const [isRecording, setIsRecording] = useState(false);
  const [video, setVideo] = useState<any>();
  const [isCameraReady, setIsCameraReady] = useState(false);

  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState(false);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(false);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const micPermission = await Camera.requestMicrophonePermissionsAsync();
      const mediaPermission = await MediaLibrary.requestPermissionsAsync();

      setHasCameraPermission(cameraPermission.status === 'granted');
      setHasMicrophonePermission(micPermission.status === 'granted');
      setHasMediaLibraryPermission(mediaPermission.status === 'granted');
    })();
  }, []);

  if (!hasCameraPermission || !hasMicrophonePermission) {
    Alert.alert('Erro', 'Sem permissão para usar a câmera ou o microfone.');
    return null;
  }

  if (!hasMediaLibraryPermission) {
    Alert.alert('Erro', 'Sem permissão para acessar a galeria.');
    return null;
  }

  const recordVideo = async () => {
  if (!cameraRef.current || isRecording || !isCameraReady) return;

  try {
    setIsRecording(true);

    const options: CameraRecordingOptions = {
      maxDuration: 60,
    };

    const recordedVideo = await cameraRef.current.recordAsync(options);

    setVideo(recordedVideo);
  } catch (error) {
    console.error('Erro ao gravar vídeo:', error);
  } finally {
    setIsRecording(false);
  }
};

const stopRecordVideo = () => {
  if (cameraRef.current) {
    cameraRef.current.stopRecording(); // só aqui!
  }
};


  const handleShare = async () => {
    if (video) {
      await shareAsync(video.uri);
      setVideo(undefined);
    }
  };

  const handleSave = async () => {
    if (video) {
      await MediaLibrary.saveToLibraryAsync(video.uri);
      setVideo(undefined);
    }
  };

  const handleDiscard = () => {
    setVideo(undefined);
  };

  if (video) {
    return (
      <VideoPlayer
        video={video}
        onShare={handleShare}
        onSave={handleSave}
        onDiscard={handleDiscard}
      />
    );
  }

  return (
    <CustomCameraView
      cameraRef={cameraRef}
      isRecording={isRecording}
      onRecording={recordVideo}
      onStopRecording={stopRecordVideo}
      onCameraReady={() => setIsCameraReady(true)}
    />
  );
}
