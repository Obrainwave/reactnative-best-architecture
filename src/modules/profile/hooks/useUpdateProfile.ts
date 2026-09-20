import { useMutation } from '@tanstack/react-query';

import { ProfileApi } from '../api/profile.api';

export const useUpdateProfile = () => {
  return useMutation({
    mutationFn: (data: unknown) =>
      ProfileApi.update(data),
  });
};