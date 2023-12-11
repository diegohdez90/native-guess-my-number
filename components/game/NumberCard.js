import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/colors';

export default function NumberCard({
  children
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accentColor,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: Colors.accentColor,
    fontSize: 36,
    fontWeight: 'bold'
  }
});
