import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../../modules/movies/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}