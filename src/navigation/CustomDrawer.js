import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';

export default function CustomDrawer(props) {
  const { navigation } = props;
  const { i18n } = useLanguage();
  const { user, logout } = useAuth();

  const menuItems = [
    { label: i18n('dashboard'), route: 'Dashboard' },
    { label: i18n('clients'), route: 'Clients' },
    { label: i18n('services'), route: 'Services' },
    { label: i18n('appointments'), route: 'Appointments' },
    { label: i18n('language'), route: 'Language' },
    { label: i18n('profile'), route: 'Profile' },
  ];

  const handleNavigate = (routeName) => {
    try {
      navigation.navigate(routeName);
    } catch (error) {
      console.warn('Falha ao navegar para:', routeName, error);
    }
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.appTitle}>{i18n('appName')}</Text>
          <Text style={styles.userName}>{user?.name || 'Usuário'}</Text>
          <Text style={styles.userEmail}>{user?.email || 'admin@vertex.com'}</Text>
        </View>

        <View style={styles.menuList}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.route}
              style={styles.menuItem}
              onPress={() => handleNavigate(item.route)}
            >
              <Text style={styles.menuText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
        <Text style={styles.logoutText}>{i18n('logout')}</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-between', paddingBottom: 20 },
  header: { backgroundColor: '#1E3A8A', padding: 20, marginBottom: 10 },
  appTitle: { color: '#FFFFFF', fontSize: 19, fontWeight: 'bold' },
  userName: { color: '#E2E8F0', fontSize: 14, marginTop: 6, fontWeight: '600' },
  userEmail: { color: '#CBD5E1', fontSize: 12, marginTop: 2 },
  menuList: { paddingHorizontal: 14 },
  menuItem: { paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#E2E8F0' },
  menuText: { fontSize: 16, color: '#0F172A', fontWeight: '500' },
  logoutBtn: {
    marginHorizontal: 16,
    backgroundColor: '#DC2626',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 15 },
});
