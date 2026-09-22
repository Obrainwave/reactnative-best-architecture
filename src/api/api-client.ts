import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://api.mydomain.com/api/v1',
  timeout: 30000,

  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});