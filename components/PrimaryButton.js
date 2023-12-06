import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function PrimaryButton({
  children
}) {
  const onPressHandler = () => {

  }

  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPressHandler}
        android_ripple={{
          color: '#8b2828'
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
    backgroundColor: '#da5252',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2
  },
  button: {
    color: 'white',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.5
  }
})