import { Alert, View, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../components/ui/PrimaryButton'
import { TextInput } from 'react-native'
import { Colors } from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import Instructions from '../components/ui/Instructions';

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
    <View style={styles.container}>
      <Title>Guess my number</Title>
      <Card>
        <Instructions>Enter a number</Instructions>
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
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 128,
    alignItems: 'stretch'
  },
  input: {
    padding: 16,
    textAlign: 'center',
    borderBottomColor: Colors.accentColor,
    borderBottomWidth: 2,
    color: Colors.accentColor,
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
