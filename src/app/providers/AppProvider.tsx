import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryProvider } from './QueryProvider';

interface AppProviderProps {
  children: React.ReactNode;
  onReady?: () => void;
}

export function AppProvider({ children, onReady }: AppProviderProps) {
  return (
    <QueryProvider>
      <NavigationContainer onReady={onReady}>
        {children}
      </NavigationContainer>
    </QueryProvider>
  );
}