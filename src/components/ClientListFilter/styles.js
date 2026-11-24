import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#0D9488',
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  subtitle: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 4,
  },
  badge: {
    marginTop: 6,
    alignSelf: 'flex-start',
    backgroundColor: '#DBEAFE',
    color: '#1E3A8A',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    fontSize: 12,
    fontWeight: '600',
  },
  empty: {
    textAlign: 'center',
    color: '#64748B',
    marginTop: 30,
    fontSize: 15,
  },
});
