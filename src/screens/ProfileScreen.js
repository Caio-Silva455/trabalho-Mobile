import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import CustomButton from '../components/CustomButton';

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  const { i18n } = useLanguage();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.caption}>{i18n('loggedAs')}</Text>
        <Text style={styles.name}>{user?.name}</Text>
        <Text style={styles.info}>{i18n('email')}: {user?.email}</Text>
        <Text style={styles.info}>{i18n('phone')}: {user?.phone}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.appTitle}>{i18n('appName')} v1.0</Text>
        <Text style={styles.info}>{i18n('groupInfo')}</Text>
      </View>

      <CustomButton title={i18n('logout')} color="#DC2626" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', padding: 20 },
  card: { backgroundColor: '#FFFFFF', padding: 18, borderRadius: 10, marginBottom: 16, elevation: 2 },
  caption: { fontSize: 12, color: '#64748B' },
  name: { fontSize: 20, fontWeight: 'bold', color: '#1E3A8A', marginTop: 4, marginBottom: 8 },
  appTitle: { fontSize: 16, fontWeight: 'bold', color: '#0F172A', marginBottom: 4 },
  info: { fontSize: 14, color: '#334155', marginTop: 4 },
});
