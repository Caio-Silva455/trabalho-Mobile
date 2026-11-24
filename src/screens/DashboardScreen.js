import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import StatCard from '../components/StatCard';

export default function DashboardScreen() {
  const { users } = useAuth();
  const { clients, services, appointments } = useData();
  const { i18n } = useLanguage();

  const categories = ['VIP', 'Recorrente', 'Novo'];
  const totalClients = clients.length || 1;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <StatCard label={i18n('totalUsers')} value={users.length} accentColor="#1E3A8A" />
        <StatCard label={i18n('totalClients')} value={clients.length} accentColor="#0D9488" />
      </View>

      <View style={styles.row}>
        <StatCard label={i18n('totalServices')} value={services.length} accentColor="#D97706" />
        <StatCard label={i18n('totalAppointments')} value={appointments.length} accentColor="#16A34A" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{i18n('clientsByCategory')}</Text>
        {categories.map((cat) => {
          const count = clients.filter((c) => c.category === cat).length;
          const pct = Math.round((count / totalClients) * 100);
          return (
            <View key={cat} style={styles.barWrapper}>
              <View style={styles.barHeader}>
                <Text style={styles.barLabel}>{cat}</Text>
                <Text style={styles.barValue}>{count} ({pct}%)</Text>
              </View>
              <View style={styles.barBg}>
                <View style={[styles.barFill, { width: `${pct}%` }]} />
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', padding: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    margin: 5,
    marginTop: 12,
    elevation: 2,
  },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#0F172A', marginBottom: 14 },
  barWrapper: { marginBottom: 14 },
  barHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  barLabel: { fontSize: 14, fontWeight: '600', color: '#0F172A' },
  barValue: { fontSize: 13, color: '#64748B' },
  barBg: { height: 10, backgroundColor: '#E2E8F0', borderRadius: 5, overflow: 'hidden' },
  barFill: { height: 10, backgroundColor: '#0D9488', borderRadius: 5 },
});
