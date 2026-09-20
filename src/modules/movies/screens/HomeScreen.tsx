import React from 'react';
import { View, Text, Button } from 'react-native';

import { useAuthStore } from '../../auth/store/auth.store';

export function HomeScreen() {
  const logout = useAuthStore(state => state.logout);

  return (
    <View>
      <Text>MuvieLive Home</Text>

      <Button
        title="Logout"
        onPress={logout}
      />
    </View>
  );
}