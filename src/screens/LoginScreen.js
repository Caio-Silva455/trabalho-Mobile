import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function LoginScreen({ navigation }) {
  const { login } = useAuth();
  const { i18n, locale, setLocale } = useLanguage();
  const [email, setEmail] = useState('admin@vertex.com');
  const [password, setPassword] = useState('123456');

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Atenção', i18n('requiredField'));
      return;
    }
    const result = login(email, password);
    if (!result.ok) {
      Alert.alert('Erro', i18n('invalidCredentials'));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.langRow}>
        {['pt', 'en', 'es'].map((code) => (
          <TouchableOpacity
            key={code}
            style={[styles.langChip, locale === code && styles.langChipActive]}
            onPress={() => setLocale(code)}
          >
            <Text style={[styles.langText, locale === code && styles.langTextActive]}>
              {code.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.title}>{i18n('loginTitle')}</Text>

      <CustomInput
        label={i18n('email')}
        value={email}
        onChangeText={setEmail}
        placeholder="admin@vertex.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <CustomInput
        label={i18n('password')}
        value={password}
        onChangeText={setPassword}
        placeholder="******"
        secureTextEntry
      />

      <CustomButton title={i18n('enter')} onPress={handleLogin} />

      <TouchableOpacity
        style={styles.linkBtn}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.linkText}>{i18n('noAccount')}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', padding: 24, justifyContent: 'center' },
  langRow: { flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 20 },
  langChip: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    marginLeft: 6,
    backgroundColor: '#FFFFFF',
  },
  langChipActive: { backgroundColor: '#1E3A8A', borderColor: '#1E3A8A' },
  langText: { fontSize: 12, fontWeight: 'bold', color: '#0F172A' },
  langTextActive: { color: '#FFFFFF' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#1E3A8A', marginBottom: 16 },
  linkBtn: { marginTop: 18, alignItems: 'center' },
  linkText: { color: '#0D9488', fontWeight: 'bold', fontSize: 14 },
});
