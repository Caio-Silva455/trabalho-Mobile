import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function ClientFormScreen({ route, navigation }) {
  const existing = route.params?.client;
  const { addClient, updateClient } = useData();
  const { i18n } = useLanguage();

  const [name, setName] = useState(existing?.name || '');
  const [phone, setPhone] = useState(existing?.phone || '');
  const [category, setCategory] = useState(existing?.category || 'Novo');

  const handleSave = async () => {
    if (!name.trim() || !phone.trim()) {
      Alert.alert('Atenção', i18n('requiredField'));
      return;
    }
    if (existing) {
      await updateClient(existing.id, { name, phone, category });
    } else {
      await addClient({ name, phone, category });
    }
    navigation.navigate('Clients');
  };

  return (
    <View style={styles.container}>
      <CustomInput label={i18n('name')} value={name} onChangeText={setName} placeholder="Ex: Clínica Sorriso" />
      <CustomInput
        label={i18n('phone')}
        value={phone}
        onChangeText={setPhone}
        placeholder="(27) 99999-8888"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>{i18n('category')}</Text>
      <View style={styles.pickerBox}>
        <Picker selectedValue={category} onValueChange={setCategory}>
          <Picker.Item label="VIP" value="VIP" />
          <Picker.Item label="Recorrente" value="Recorrente" />
          <Picker.Item label="Novo" value="Novo" />
        </Picker>
      </View>

      <CustomButton title={i18n('save')} color="#0D9488" onPress={handleSave} style={{ marginTop: 20 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', padding: 20 },
  label: { fontSize: 13, fontWeight: '600', color: '#0F172A', marginTop: 14, marginBottom: 4 },
  pickerBox: { backgroundColor: '#FFFFFF', borderRadius: 8, borderWidth: 1, borderColor: '#CBD5E1' },
});
