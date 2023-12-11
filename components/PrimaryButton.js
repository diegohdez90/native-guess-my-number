import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'

export default function PrimaryButton({
  children,
  onPress
}) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{
          color: Colors.rippleColor
        }}
        style={(state) => {
          const elStyle = {...styles.container}
          if (state.pressed) {
            return [
              elStyle,
              styles.pressed
            ]
          }
          return elStyle;
        }}
      >
        <Text style={styles.button}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
    borderRadius: 24,
    overflow: 'hidden'
  },
  container: {
    backgroundColor: Colors.buttonPrimaryColor,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2
  },
  button: {
    color: Colors.buttonPrimaryTextColor,
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.5
  }
})