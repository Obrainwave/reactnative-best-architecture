import { useMutation } from '@tanstack/react-query';

import { AuthApi } from '../api/auth.api';

export const useLogout = () => {
  return useMutation({
    mutationFn: AuthApi.logout,
  });
};