import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function ServicesScreen({ navigation }) {
  const { services, deleteService } = useData();
  const { i18n } = useLanguage();

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.heading}>{i18n('services')}</Text>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigation.navigate('ServiceForm')}
        >
          <Text style={styles.addBtnText}>+ {i18n('newService')}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.empty}>{i18n('emptyList')}</Text>}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.sub}>R$ {item.price} • {item.duration}</Text>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.editBtn}
                onPress={() => navigation.navigate('ServiceForm', { service: item })}
              >
                <Text style={styles.actionText}>{i18n('edit')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.delBtn}
                onPress={() => deleteService(item.id)}
              >
                <Text style={styles.actionText}>{i18n('delete')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', padding: 16 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  heading: { fontSize: 20, fontWeight: 'bold', color: '#0F172A' },
  addBtn: { backgroundColor: '#0D9488', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 },
  addBtnText: { color: '#FFFFFF', fontWeight: 'bold' },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  title: { fontSize: 16, fontWeight: 'bold', color: '#0F172A' },
  sub: { fontSize: 13, color: '#64748B', marginTop: 4 },
  actions: { flexDirection: 'row' },
  editBtn: { backgroundColor: '#1E3A8A', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 6, marginRight: 6 },
  delBtn: { backgroundColor: '#DC2626', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 6 },
  actionText: { color: '#FFFFFF', fontSize: 12, fontWeight: 'bold' },
  empty: { textAlign: 'center', color: '#64748B', marginTop: 30 },
});
