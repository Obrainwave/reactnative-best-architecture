import React from 'react';

import { AuthNavigator } from './AuthNavigator';
import { MainNavigator } from './MainNavigator';

import { useAuthStore } from '../../modules/auth/store/auth.store';

export function RootNavigator() {
  const authenticated =
    useAuthStore(
      state => state.authenticated,
    );

  return authenticated
    ? <MainNavigator />
    : <AuthNavigator />;
}