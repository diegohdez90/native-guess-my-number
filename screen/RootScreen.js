import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { TextInput } from 'react-native'

export default function RootScreen() {
  return (
    <View style={styles.inputContainer}>
      <Text>Welcome</Text>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        autoComplete={false}
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexBasis: 'auto',
    width: '100%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#be0202',
    borderRadius: 12,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  input: {
    width: '100%',
    padding: 16,
    textAlign: 'center',
    borderBottomColor: '#e6e34c',
    borderBottomWidth: 2,
    color: '#e6e34c',
    marginVertical: 8,
    fontWeight: 'bold'
  }
})
