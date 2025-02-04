import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoadingSpinner from '@/components/Loader/LoadingSpinner';
import { initAuth, initFirebase } from '@/clients/firebase';

interface FormValues {
  email: string;
  password: string;
}

interface ILoginScreen {
  onLoginSuccess: (value: boolean) => void;
}

export default function LoginScreen({ onLoginSuccess }: ILoginScreen) {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
  });

  const app = initFirebase();
  const firebaseAuth = initAuth();

  // Handle input changes
  const handleInputChange = (key: keyof FormValues, value: string) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleLogin = async () => {
    onLoginSuccess(true);
    // Your login logic here...
  };

  const handleLoginByGooglePopUp = async () => {
    try {
      setLoading(true);
      // Google sign-in code...
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } catch (error: any) {
      console.error('Google Sign-In Error:', error);
      Alert.alert('Login Error', error.message || 'Failed to sign in with Google.');
    } finally {
      setLoading(false);
    }
  };

  // Clear existing authentication data on mount
  useEffect(() => {
    firebaseAuth.signOut();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading && <LoadingSpinner text="Loading..." />}
      <View style={styles.card}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to your account</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="name@company.com"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            value={formValues.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#aaa"
            secureTextEntry
            autoCapitalize="none"
            autoComplete="password"
            value={formValues.password}
            onChangeText={(text) => handleInputChange('password', text)}
          />
        </View>

        <TouchableOpacity
          style={styles.signinButton}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.signinButtonText}>
            {loading ? 'Signing in...' : 'Sign In'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate('RequestNewPassword' as never)}
        >
          <Text style={styles.forgotButtonText}>Forgot your password?</Text>
        </TouchableOpacity>

        {/* Optionally include Google Sign-In */}
        {/* 
        <TouchableOpacity style={styles.googleButton} onPress={handleLoginByGooglePopUp}>
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </TouchableOpacity> 
        */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9F5E9', // Light green background for a modern look
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // Android shadow
    elevation: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#4B8005', // Primary green tone
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#6FB11A', // Secondary green tone
    textAlign: 'center',
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#F7F7F7',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: Platform.OS === 'ios' ? 14 : 10,
    fontSize: 16,
    color: '#333',
  },
  signinButton: {
    backgroundColor: '#4B8005',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 8,
  },
  signinButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  forgotButton: {
    marginTop: 16,
    alignSelf: 'center',
  },
  forgotButtonText: {
    color: '#4B8005',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  googleButton: {
    backgroundColor: '#DB4437',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 16,
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

