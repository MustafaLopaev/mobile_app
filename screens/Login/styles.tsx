import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B8005', // Dark main base
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#3A6F04', // Dark main hover
    padding: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    color: '#f4f4f5',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#6FB11A', // Light main hover
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
  },
  signinButton: {
    backgroundColor: '#77B920', // Light main base
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 8,
  },
  signinButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  forgotButton: {
    marginTop: 12,
    alignSelf: 'center',
  },
  forgotButtonText: {
    color: '#888cee',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  googleButton: {
    backgroundColor: '#DB4437',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
