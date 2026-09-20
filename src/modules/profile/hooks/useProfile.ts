import { useQuery } from '@tanstack/react-query';

import { ProfileApi } from '../api/profile.api';

export const useProfile = () => {
  return useQuery({
    queryKey: ['profile'],

    queryFn: async () => {
      const response =
        await ProfileApi.me();

      return response.data;
    },
  });
};