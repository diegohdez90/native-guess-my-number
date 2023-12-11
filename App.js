import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import RootScreen from './screen/RootScreen';
import GameScreen from './screen/GameScreen';
import { Colors } from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
  }
  let gameScreen = <RootScreen onConfirmNumber={pickedNumberHandler} />

  if (userNumber) {
    gameScreen = <GameScreen userNumber={userNumber} />
  }

  return (
    <LinearGradient
      colors={[
        Colors.primaryGradientColor,
        Colors.secondaryGradientColor
      ]}
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
        <SafeAreaView style={styles.container}>
          {gameScreen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
