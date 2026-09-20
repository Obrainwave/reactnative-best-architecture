import React, {
  useState,
} from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from 'react-native';

import { useLogin } from '../hooks';

export function LoginScreen() {
  const login = useLogin();

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleLogin =
    async () => {
      if (!email.trim()) {
        Alert.alert(
          'Validation Error',
          'Email is required',
        );
        return;
      }

      if (!password.trim()) {
        Alert.alert(
          'Validation Error',
          'Password is required',
        );
        return;
      }

      try {
        await login.mutateAsync({
          email,
          password,
        });

        Alert.alert(
          'Success',
          'Login successful',
        );
      } catch (error: any) {
        const message =
          error?.response?.data?.message ??
          'Login failed';

        Alert.alert(
          'Login Error',
          message,
        );
      }
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        MuvieLive
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {login.isPending ? (
        <ActivityIndicator />
      ) : (
        <Button
          title="Login"
          onPress={handleLogin}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 50,
  },
});