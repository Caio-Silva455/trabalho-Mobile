import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    marginTop: 12,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#0F172A',
  },
  inputError: {
    borderColor: '#DC2626',
  },
  errorText: {
    color: '#DC2626',
    fontSize: 12,
    marginTop: 3,
  },
});
