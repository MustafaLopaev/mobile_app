import React, { useState } from 'react';
import { Alert } from 'react-native';
import LoginScreen from 'react-native-login-screen';

const SignInScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Your login logic goes here (e.g., API calls)
    Alert.alert('Login Attempt', `Email: ${username}\nPassword: ${password}`);
  };

  return (
    <LoginScreen
      logoImageSource={require('../../assets/logo/logo-no-background.png')}
      onLoginPress={handleLogin}
      onSignupPress={() => {
        // Handle sign-up logic here
      }}
      onEmailChange={setUsername}
      onPasswordChange={setPassword}
      loginButtonText="Sign In"
      disableSignup
      // style={{ backgroundColor: '#77B920' }} // Set the background color
      loginButtonStyle={{ backgroundColor: '#6FB11A' }} // Set the login button color
      // loginButtonTextStyle={{ color: '#FFFFFF' }} // Set the login button text color
      textInputContainerStyle={{ backgroundColor: '#FFFFFF' }} // Set the text input background color
      // loginTextStyle={{ color: '#000000' }} // Set the text input text color
    />
  );
};

export default SignInScreen;