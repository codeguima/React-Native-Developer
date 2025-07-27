import { CameraView } from "expo-camera";

export interface CameraViewProps {
  cameraRef: React.RefObject<CameraView | null>;
  isRecording: boolean;
  onRecording: () => void;
  onStopRecording: () => void;
  onCameraReady: () => void;
}
