import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function AppointmentsScreen({ navigation }) {
  const { appointments, advanceAppointmentStatus, deleteAppointment } = useData();
  const { i18n } = useLanguage();

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.heading}>{i18n('appointments')}</Text>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigation.navigate('AppointmentForm')}
        >
          <Text style={styles.addBtnText}>+ {i18n('newAppointment')}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.empty}>{i18n('emptyList')}</Text>}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.clientName}</Text>
            <Text style={styles.sub}>{item.serviceTitle} • {item.date}</Text>
            <Text style={styles.status}>{i18n('status')}: {item.status}</Text>

            <View style={styles.row}>
              <TouchableOpacity
                style={styles.statusBtn}
                onPress={() => advanceAppointmentStatus(item.id)}
              >
                <Text style={styles.btnText}>{i18n('advanceStatus')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.delBtn}
                onPress={() => deleteAppointment(item.id)}
              >
                <Text style={styles.btnText}>{i18n('delete')}</Text>
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
  card: { backgroundColor: '#FFFFFF', padding: 14, borderRadius: 10, marginBottom: 10, elevation: 2 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#0F172A' },
  sub: { fontSize: 13, color: '#64748B', marginTop: 4 },
  status: { fontSize: 13, fontWeight: 'bold', color: '#1E3A8A', marginTop: 6 },
  row: { flexDirection: 'row', marginTop: 10 },
  statusBtn: { backgroundColor: '#1E3A8A', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 6, marginRight: 8 },
  delBtn: { backgroundColor: '#DC2626', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 6 },
  btnText: { color: '#FFFFFF', fontSize: 12, fontWeight: 'bold' },
  empty: { textAlign: 'center', color: '#64748B', marginTop: 30 },
});
