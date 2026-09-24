import { useAuthStore } from '../store/auth.store';
import { AuthStorage } from '@/storage/async-storage';

export const useLogout = () => {
  const logout = useAuthStore(state => state.logout);

  return async () => {
    await AuthStorage.clear();
    logout();
  };
};