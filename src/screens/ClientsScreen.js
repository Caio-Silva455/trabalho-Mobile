import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import ClientListFilter from '../components/ClientListFilter';

export default function ClientsScreen({ navigation }) {
  const { clients } = useData();
  const { i18n } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.heading}>{i18n('clients')}</Text>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigation.navigate('ClientForm')}
        >
          <Text style={styles.addBtnText}>+ {i18n('newClient')}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.pickerBox}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(value) => setSelectedCategory(value)}
        >
          <Picker.Item label={i18n('filterAll')} value="Todos" />
          <Picker.Item label="VIP" value="VIP" />
          <Picker.Item label="Recorrente" value="Recorrente" />
          <Picker.Item label="Novo" value="Novo" />
        </Picker>
      </View>

      <ClientListFilter
        data={clients}
        selectedCategory={selectedCategory}
        emptyText={i18n('emptyList')}
        onSelectClient={(client) => navigation.navigate('ClientDetail', { client })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', padding: 16 },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  heading: { fontSize: 20, fontWeight: 'bold', color: '#0F172A' },
  addBtn: { backgroundColor: '#0D9488', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 },
  addBtnText: { color: '#FFFFFF', fontWeight: 'bold' },
  pickerBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
});
