import { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import RootScreen from './screen/RootScreen';
import GameScreen from './screen/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
  }
  let gameScreen = <RootScreen onConfirmNumber={pickedNumberHandler} />

  if (userNumber) {
    gameScreen = <GameScreen />
  }

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
        {gameScreen}
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
