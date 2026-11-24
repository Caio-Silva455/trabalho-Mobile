import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function StatCard({ label, value, accentColor = '#1E3A8A' }) {
  return (
    <View style={[styles.card, { borderTopColor: accentColor }]}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}
