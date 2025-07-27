import React from 'react';
import { Button, SafeAreaView, View } from 'react-native';
import { Video, VideoProps } from 'expo-av';
import { styles } from './style';
import { Text } from 'react-native';
import { VideoPlayerProps } from './props';


export function VideoPlayer({
  video,
    onShare,
    onSave,
    onDiscard,
} : VideoPlayerProps) {
  return (
    <SafeAreaView style={styles.container} >
      <Video
        style={styles.video} 
        source={{uri:video.uri}}
        useNativeControls
        isLooping
      />
      <View style={styles.menuButtons} >
        <Button title='Share' onPress={onShare} />
        <Button title='Save' onPress={onSave} />
        <Button title='Discard' onPress={onDiscard} />
      </View>
    </SafeAreaView>
  );
}