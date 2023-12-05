import { StyleSheet, View } from 'react-native';
import RootScreen from './screen/RootScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <RootScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
});
