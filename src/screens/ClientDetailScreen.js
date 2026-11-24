import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import CustomButton from '../components/CustomButton';

export default function ClientDetailScreen({ route, navigation }) {
  const { client } = route.params;
  const { deleteClient } = useData();
  const { i18n } = useLanguage();

  const handleDelete = () => {
    Alert.alert(i18n('confirmDelete'), i18n('confirmDeleteMsg'), [
      { text: i18n('cancel'), style: 'cancel' },
      {
        text: i18n('delete'),
        style: 'destructive',
        onPress: async () => {
          await deleteClient(client.id);
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>{i18n('name')}</Text>
        <Text style={styles.value}>{client.name}</Text>

        <Text style={styles.label}>{i18n('phone')}</Text>
        <Text style={styles.value}>{client.phone}</Text>

        <Text style={styles.label}>{i18n('category')}</Text>
        <Text style={styles.badge}>{client.category}</Text>
      </View>

      <CustomButton
        title={i18n('edit')}
        color="#1E3A8A"
        onPress={() => navigation.navigate('ClientForm', { client })}
      />
      <CustomButton title={i18n('delete')} color="#DC2626" onPress={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', padding: 20 },
  card: { backgroundColor: '#FFFFFF', padding: 20, borderRadius: 10, marginBottom: 16, elevation: 2 },
  label: { fontSize: 12, color: '#64748B', marginTop: 10 },
  value: { fontSize: 17, fontWeight: 'bold', color: '#0F172A', marginTop: 2 },
  badge: {
    marginTop: 6,
    alignSelf: 'flex-start',
    backgroundColor: '#DBEAFE',
    color: '#1E3A8A',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    fontWeight: 'bold',
  },
});
