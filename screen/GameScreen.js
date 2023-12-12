import { Alert, View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Title from '../components/ui/Title'
import { generateRandom } from '../utils/functions'
import NumberCard from '../components/game/NumberCard';
import PrimaryButton from '../components/ui/PrimaryButton';

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({
  userNumber
}) {
  const initialGuess = generateRandom(minBoundary, maxBoundary, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

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
      <View>
        <Text>Higher or lower</Text>
        <View>
          <PrimaryButton onPress={onNextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
          <PrimaryButton onPress={onNextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingTop: 128
  }
})
