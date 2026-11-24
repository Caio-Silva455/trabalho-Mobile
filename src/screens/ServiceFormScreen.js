import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function ServiceFormScreen({ route, navigation }) {
  const existing = route.params?.service;
  const { addService, updateService } = useData();
  const { i18n } = useLanguage();

  const [title, setTitle] = useState(existing?.title || '');
  const [price, setPrice] = useState(existing?.price || '');
  const [duration, setDuration] = useState(existing?.duration || '');

  const handleSave = () => {
    if (!title.trim() || !price.trim()) {
      Alert.alert('Atenção', i18n('requiredField'));
      return;
    }
    if (existing) {
      updateService(existing.id, { title, price, duration: duration || '7 dias' });
    } else {
      addService({ title, price, duration: duration || '7 dias' });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <CustomInput label={i18n('serviceTitle')} value={title} onChangeText={setTitle} placeholder="Ex: Site Institucional" />
      <CustomInput
        label={i18n('price')}
        value={price}
        onChangeText={setPrice}
        placeholder="1500"
        keyboardType="numeric"
      />
      <CustomInput label={i18n('duration')} value={duration} onChangeText={setDuration} placeholder="Ex: 5 dias" />

      <CustomButton title={i18n('save')} color="#0D9488" onPress={handleSave} style={{ marginTop: 20 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', padding: 20 },
});
