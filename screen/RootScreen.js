import { Alert, View, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { TextInput } from 'react-native'

export default function RootScreen({
  onConfirmNumber
}) {
  const [number, setNumber] = useState("");

  const onHandleChangeNumber = (v) => {
    setNumber(v);
  }

  const onResetInput = () => {
    setNumber('')
  }

  const onConfirmNumberInputValue = () => {
    const numberEntered = +number;
    if(isNaN(numberEntered) || numberEntered <= 0 || numberEntered > 99) {
      Alert.alert('Error', 'The input value is not valid', [
        {
          text: 'Close',
          style: 'destructive',
          onPress: onResetInput
        }
      ])
      return;
    }
    onConfirmNumber(numberEntered)
  }

  return (
    <View style={styles.inputContainer}>
      <Text>Welcome</Text>
      <TextInput
        style={styles.input}
        maxLength={2}
        value={number}
        onChangeText={onHandleChangeNumber}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        autoComplete='off'
      />
      <View style={styles.actions}>
        <View style={styles.actionContainer}>
          <PrimaryButton
            onPress={onResetInput}
          >Reset</PrimaryButton>
        </View>
        <View style={styles.actionContainer}>
          <PrimaryButton
            onPress={onConfirmNumberInputValue}
          >Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    gap: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#be0270',
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
  },
  input: {
    padding: 16,
    textAlign: 'center',
    borderBottomColor: '#e6e34c',
    borderBottomWidth: 2,
    color: '#e6e34c',
    marginVertical: 8,
    fontWeight: 'bold'
  },
  actions: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-evenly',
    gap: 12,
  },
  actionContainer: {
    flex: 1
  }
})
