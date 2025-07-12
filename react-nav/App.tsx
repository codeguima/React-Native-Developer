import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreens } from './screens/HomeScreen/HomeScreen';
import { GalleryScreen } from './screens/GalleryScreen/GalleryScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreens />
      <GalleryScreen />
      <StatusBar style="auto" />
    </View>
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
