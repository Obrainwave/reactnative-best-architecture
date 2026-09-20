import { apiClient } from '../../../shared/network/api-client';

import { ENDPOINTS } from '../../../shared/network/endpoints';

export const MovieApi = {
  getMovies() {
    return apiClient.get(
      ENDPOINTS.MOVIES.LIST,
    );
  },

  getMovie(id: string) {
    return apiClient.get(
      ENDPOINTS.MOVIES.DETAILS(id),
    );
  },

  getFeatured() {
    return apiClient.get(
      ENDPOINTS.MOVIES.FEATURED,
    );
  },
};