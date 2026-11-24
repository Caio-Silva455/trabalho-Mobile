import React from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default function ClientListFilter({ data, selectedCategory, onSelectClient, emptyText }) {
  const filteredData =
    selectedCategory === 'Todos'
      ? data
      : data.filter((item) => item.category === selectedCategory);

  if (filteredData.length === 0) {
    return <Text style={styles.empty}>{emptyText}</Text>;
  }

  return (
    <FlatList
      data={filteredData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        const { name, phone, category } = item;
        return (
          <TouchableOpacity style={styles.card} onPress={() => onSelectClient(item)}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{phone}</Text>
            <Text style={styles.badge}>{category}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}
