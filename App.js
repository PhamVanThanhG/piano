import React, { useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button
} from 'react-native';
import Sound from 'react-native-sound';
import SoundPlayer from 'react-native-sound-player';
import { SIZES } from './src/data';
import Piano from './src/Piano';

const App = () => {
  return (
    <View style={styles.container}>
      <Piano />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#F5FCFF',
    flexDirection: "row",
  },
});
export default App;