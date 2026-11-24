import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function AppointmentFormScreen({ navigation }) {
  const { clients, services, addAppointment } = useData();
  const { i18n } = useLanguage();

  const [clientName, setClientName] = useState(clients[0]?.name || '');
  const [serviceTitle, setServiceTitle] = useState(services[0]?.title || '');
  const [date, setDate] = useState('30/11/2026 15:00');

  const handleSave = () => {
    if (!clientName || !serviceTitle || !date.trim()) {
      Alert.alert('Atenção', i18n('requiredField'));
      return;
    }
    addAppointment({ clientName, serviceTitle, date });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{i18n('selectClient')}</Text>
      <View style={styles.pickerBox}>
        <Picker selectedValue={clientName} onValueChange={setClientName}>
          {clients.map((c) => (
            <Picker.Item key={c.id} label={c.name} value={c.name} />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>{i18n('selectService')}</Text>
      <View style={styles.pickerBox}>
        <Picker selectedValue={serviceTitle} onValueChange={setServiceTitle}>
          {services.map((s) => (
            <Picker.Item key={s.id} label={s.title} value={s.title} />
          ))}
        </Picker>
      </View>

      <CustomInput label={i18n('dateTime')} value={date} onChangeText={setDate} />

      <CustomButton title={i18n('save')} color="#0D9488" onPress={handleSave} style={{ marginTop: 20 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', padding: 20 },
  label: { fontSize: 13, fontWeight: '600', color: '#0F172A', marginTop: 14, marginBottom: 4 },
  pickerBox: { backgroundColor: '#FFFFFF', borderRadius: 8, borderWidth: 1, borderColor: '#CBD5E1' },
});
