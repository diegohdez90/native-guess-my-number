import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Title from '../components/Title'

export default function GameScreen() {
  return (
    <View style={styles.container}>
      <Title>You guess the number</Title>
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
