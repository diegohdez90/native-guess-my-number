import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/colors'

export default function Title({
  children
}) {
  return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.accentColor,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.accentColor,
    padding: 12,
    marginHorizontal: 32
  }
})
