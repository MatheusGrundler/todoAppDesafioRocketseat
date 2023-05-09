import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

import Home from './src/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style='light' translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1A',
    flex: 1,
  },
});
