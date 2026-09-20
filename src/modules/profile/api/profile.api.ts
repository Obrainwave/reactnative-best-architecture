import { apiClient } from '../../../shared/network/api-client';

import { ENDPOINTS } from '../../../shared/network/endpoints';

export const ProfileApi = {
  me() {
    return apiClient.get(
      ENDPOINTS.PROFILE.ME,
    );
  },

  update(data: unknown) {
    return apiClient.put(
      ENDPOINTS.PROFILE.UPDATE,
      data,
    );
  },
};