import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import RootScreen from './screen/RootScreen';

export default function App() {
  return (
    <LinearGradient
      colors={['#ee33ff', '#fcff55']}
      style={styles.container}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.container}
        imageStyle={{
          opacity: 0.20
        }}
      >
        <RootScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
