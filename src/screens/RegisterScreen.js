import React from 'react';
import { ScrollView, Text, StyleSheet, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function RegisterScreen({ navigation }) {
  const { i18n } = useLanguage();
  const { registerUser } = useAuth();

  const schema = Yup.object().shape({
    name: Yup.string().required(i18n('requiredField')),
    email: Yup.string().email(i18n('invalidEmail')).required(i18n('requiredField')),
    phone: Yup.string().min(10, i18n('requiredField')).required(i18n('requiredField')),
    password: Yup.string().min(6, i18n('passwordMin')).required(i18n('requiredField')),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], i18n('passwordMatch'))
      .required(i18n('requiredField')),
  });

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      <Text style={styles.title}>{i18n('registerTitle')}</Text>

      <Formik
        initialValues={{ name: '', email: '', phone: '', password: '', confirmPassword: '' }}
        validationSchema={schema}
        onSubmit={(values) => {
          registerUser(values);
          Alert.alert('OK', `${i18n('registerTitle')}!`);
          navigation.goBack();
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <CustomInput
              label={i18n('name')}
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              placeholder="Ex: Maria Oliveira"
              error={touched.name && errors.name}
            />
            <CustomInput
              label={i18n('email')}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholder="maria@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
              error={touched.email && errors.email}
            />
            <CustomInput
              label={i18n('phone')}
              value={values.phone}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              placeholder="(27) 99999-9999"
              keyboardType="phone-pad"
              error={touched.phone && errors.phone}
            />
            <CustomInput
              label={i18n('password')}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              placeholder="******"
              secureTextEntry
              error={touched.password && errors.password}
            />
            <CustomInput
              label={i18n('confirmPassword')}
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              placeholder="******"
              secureTextEntry
              error={touched.confirmPassword && errors.confirmPassword}
            />

            <CustomButton
              title={i18n('registerBtn')}
              onPress={handleSubmit}
              color="#0D9488"
              style={{ marginTop: 20 }}
            />
          </>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#1E3A8A', marginBottom: 8 },
});
