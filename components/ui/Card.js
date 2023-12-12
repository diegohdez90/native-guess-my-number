import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/colors';

export default function Card({
  children
}) {
  return (
    <View style={styles.inputContainer}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 128,
    gap: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: Colors.primaryColor,
    borderRadius: 12,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    marginHorizontal: 32,
  }
})
