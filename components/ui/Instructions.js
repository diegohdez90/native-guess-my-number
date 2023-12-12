import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/colors'

export default function Instructions({
  children,
  style
}) {
  return (
    <Text style={[
      style,
      styles.instructions,
    ]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  instructions: {
    color: Colors.accentColor,
    fontSize: 24,
    textTransform: 'uppercase'
  },
})
