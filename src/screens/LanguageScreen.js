import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageScreen() {
  const { locale, setLocale, i18n } = useLanguage();

  const options = [
    { code: 'pt', label: 'Português (Brasil)', flag: '🇧🇷' },
    { code: 'en', label: 'English (US)', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{i18n('selectLanguage')}</Text>

      {options.map(({ code, label, flag }) => {
        const selected = locale === code;
        return (
          <TouchableOpacity
            key={code}
            style={[styles.optionCard, selected && styles.optionSelected]}
            onPress={() => setLocale(code)}
          >
            <Text style={styles.flag}>{flag}</Text>
            <Text style={[styles.optionLabel, selected && styles.optionLabelSelected]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          {i18n('currentLang')}: {locale.toUpperCase()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', padding: 20 },
  subtitle: { fontSize: 16, fontWeight: '600', color: '#0F172A', marginBottom: 16 },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
  },
  optionSelected: { borderColor: '#1E3A8A', backgroundColor: '#EFF6FF' },
  flag: { fontSize: 22, marginRight: 12 },
  optionLabel: { fontSize: 16, color: '#0F172A', fontWeight: '500' },
  optionLabelSelected: { color: '#1E3A8A', fontWeight: 'bold' },
  infoBox: { marginTop: 20, padding: 14, backgroundColor: '#E2E8F0', borderRadius: 8 },
  infoText: { textAlign: 'center', fontWeight: 'bold', color: '#0F172A' },
});
