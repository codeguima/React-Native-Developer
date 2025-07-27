import React from 'react';
import { Button, SafeAreaView, View, Text } from 'react-native';
import { Video } from 'expo-av';
import { styles } from './style';
import { VideoPlayerProps } from './props';

export function VideoPlayer({
  video,
  onShare,
  onSave,
  onDiscard,
}: VideoPlayerProps) {
  if (!video?.uri) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ textAlign: 'center', marginTop: 20 }}>
          Nenhum vídeo disponível.
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Video
        style={styles.video}
        source={{ uri: video.uri }}
        useNativeControls
        isLooping
      />

      <View style={styles.menuButtons}>
        <Button title="📤 Share" onPress={onShare} />
        <Button title="💾 Save" onPress={onSave} />
        <Button title="🗑️ Discard" onPress={onDiscard} />
      </View>
    </SafeAreaView>
  );
}
