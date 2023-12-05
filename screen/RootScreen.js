import { View, Text } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { TextInput } from 'react-native'

export default function RootScreen() {
  return (
    <View>
      <Text>Welcome</Text>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}
