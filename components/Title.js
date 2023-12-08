import { Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Title({
  children
}) {
  return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e6e34c',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#e6e34c',
    padding: 12,
    marginHorizontal: 32
  }
})
