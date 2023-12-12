import { Alert, View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../components/ui/Title'
import { generateRandom } from '../utils/functions'
import NumberCard from '../components/game/NumberCard';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import Instructions from '../components/ui/Instructions';

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({
  userNumber,
  onGameOver
}) {
  const initialGuess = generateRandom(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if(currentGuess === userNumber) {
      onGameOver()
    }
  }, [currentGuess, userNumber, onGameOver])

  const onNextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert('Don\'t lie', 'You know that this is wrong...', [{
        text: 'Sorry!',
        style: 'cancel'
      }]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess ;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandom = generateRandom(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRandom);
  }

  return (
    <View style={styles.container}>
      <Title>You guess the number</Title>
      <NumberCard>{currentGuess}</NumberCard>
      <Card>
        <Instructions style={styles.instructions}>Higher or lower</Instructions>
        <View style={styles.actionsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={onNextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={onNextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingTop: 128
  },
  instructions: {
    marginBottom: 12
  },
  actionsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
})
