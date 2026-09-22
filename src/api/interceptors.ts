import { apiClient } from './api-client';

import { storage, StorageKeys } from '../storage/mmkv';

apiClient.interceptors.request.use(config => {
  const token = storage.getString(
    StorageKeys.ACCESS_TOKEN,
  );

  if (token) {
    config.headers.Authorization =
      `Bearer ${token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  response => response,

  error => {
    return Promise.reject(error);
  },
);