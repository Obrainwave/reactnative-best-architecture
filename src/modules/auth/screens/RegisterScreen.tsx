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
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useRegister } from '../hooks';

export function RegisterScreen() {
  const navigation = useNavigation();

  const register = useRegister();

  const [name, setName] =
    useState('');

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const [confirmPassword, setConfirmPassword] =
    useState('');

  const handleRegister =
    async () => {
      if (!name.trim()) {
        Alert.alert(
          'Validation Error',
          'Name is required',
        );
        return;
      }

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

      if (password.length < 8) {
        Alert.alert(
          'Validation Error',
          'Password must be at least 8 characters',
        );
        return;
      }

      if (password !== confirmPassword) {
        Alert.alert(
          'Validation Error',
          'Passwords do not match',
        );
        return;
      }

      try {
        await register.mutateAsync({
          name,
          email,
          password,
        });

        Alert.alert(
          'Success',
          'Account created successfully',
        );
      } catch (error: any) {
        const message =
          error?.response?.data?.message ??
          'Registration failed';

        Alert.alert(
          'Registration Error',
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
        placeholder="Full name"
        autoCapitalize="words"
        value={name}
        onChangeText={setName}
      />

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

      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {register.isPending ? (
        <ActivityIndicator />
      ) : (
        <Button
          title="Create account"
          onPress={handleRegister}
        />
      )}

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.link}
      >
        <Text>Already have an account? Login</Text>
      </TouchableOpacity>
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

  link: {
    marginTop: 10,
    alignItems: 'center',
  },
});