import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import RootScreen from './screen/RootScreen';

export default function App() {
  return (
    <LinearGradient
      colors={['#ee33ff', '#fcff55']}
      style={styles.container}
    >
      <RootScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
});
