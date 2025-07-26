import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  flipArea: {
    marginTop: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  flipText: {
    color: 'white',
    fontSize: 16,
  },
  takePhoto: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 50,
    marginVertical:40,

  },
  takeTextPhoto: {
    color: 'white',
    fontSize: 18,
  },
});