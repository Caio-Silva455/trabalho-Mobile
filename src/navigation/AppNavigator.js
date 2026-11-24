import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import CustomDrawer from './CustomDrawer';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DashboardScreen from '../screens/DashboardScreen';
import LanguageScreen from '../screens/LanguageScreen';
import ClientsScreen from '../screens/ClientsScreen';
import ClientDetailScreen from '../screens/ClientDetailScreen';
import ClientFormScreen from '../screens/ClientFormScreen';
import ServicesScreen from '../screens/ServicesScreen';
import ServiceFormScreen from '../screens/ServiceFormScreen';
import AppointmentsScreen from '../screens/AppointmentsScreen';
import AppointmentFormScreen from '../screens/AppointmentFormScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  const { i18n } = useLanguage();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: '#1E3A8A' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Drawer.Screen name="Dashboard" component={DashboardScreen} options={{ title: i18n('dashboard') }} />
      <Drawer.Screen name="Clients" component={ClientsScreen} options={{ title: i18n('clients') }} />
      <Drawer.Screen name="Services" component={ServicesScreen} options={{ title: i18n('services') }} />
      <Drawer.Screen name="Appointments" component={AppointmentsScreen} options={{ title: i18n('appointments') }} />
      <Drawer.Screen name="Language" component={LanguageScreen} options={{ title: i18n('language') }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: i18n('profile') }} />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  const { user } = useAuth();
  const { i18n } = useLanguage();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#1E3A8A' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      {!user ? (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: i18n('appName') }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ title: i18n('registerTitle') }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="MainDrawer"
            component={DrawerRoutes}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ClientDetail"
            component={ClientDetailScreen}
            options={{ title: i18n('clientDetails') }}
          />
          <Stack.Screen
            name="ClientForm"
            component={ClientFormScreen}
            options={{ title: i18n('newClient') }}
          />
          <Stack.Screen
            name="ServiceForm"
            component={ServiceFormScreen}
            options={{ title: i18n('newService') }}
          />
          <Stack.Screen
            name="AppointmentForm"
            component={AppointmentFormScreen}
            options={{ title: i18n('newAppointment') }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
