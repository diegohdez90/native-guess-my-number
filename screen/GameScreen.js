import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Title from '../components/ui/Title'
import { generateRandom } from '../utils/functions'
import NumberCard from '../components/game/NumberCard';

export default function GameScreen({
  userNumber
}) {
  const initialGuess = generateRandom(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(userNumber);
  return (
    <View style={styles.container}>
      <Title>You guess the number</Title>
      <NumberCard>{currentGuess}</NumberCard>
      <View>
        <Text>Higher or lower</Text>
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
