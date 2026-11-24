import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default function CustomButton({ title, onPress, color = '#1E3A8A', style }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
