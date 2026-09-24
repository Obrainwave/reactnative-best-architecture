import { storage, StorageKeys } from './mmkv';
import { SecureStorage } from './secure-storage';

import type { User } from '../api/auth.types';

const SECURE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
};

interface AuthSession {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export const AuthStorage = {
  async persist(accessToken: string, refreshToken: string, user: User) {
    await SecureStorage.set(SECURE_KEYS.ACCESS_TOKEN, accessToken);
    await SecureStorage.set(SECURE_KEYS.REFRESH_TOKEN, refreshToken);

    storage.set(StorageKeys.USER, JSON.stringify(user));
  },

  async load(): Promise<AuthSession | null> {
    const accessToken = await SecureStorage.get(SECURE_KEYS.ACCESS_TOKEN);
    const refreshToken = await SecureStorage.get(SECURE_KEYS.REFRESH_TOKEN);
    const userRaw = storage.getString(StorageKeys.USER);

    if (!accessToken || !refreshToken || !userRaw) {
      return null;
    }

    return {
      accessToken,
      refreshToken,
      user: JSON.parse(userRaw) as User,
    };
  },

  async clear() {
    await SecureStorage.remove(SECURE_KEYS.ACCESS_TOKEN);
    await SecureStorage.remove(SECURE_KEYS.REFRESH_TOKEN);

    storage.delete(StorageKeys.USER);
  },
};