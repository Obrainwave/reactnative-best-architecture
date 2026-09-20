import React from 'react';
import { AppProvider } from './app/providers/AppProvider';
import { RootNavigator } from './app/navigation/RootNavigator';

export default function App() {
  return (
    <AppProvider>
      <RootNavigator />
    </AppProvider>
  );
}