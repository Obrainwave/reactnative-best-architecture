import { apiClient } from '../../../shared/network/api-client';

import { ENDPOINTS } from '../../../shared/network/endpoints';

export const StreamingApi = {
  getStreamToken(movieId: string) {
    return apiClient.post(
      ENDPOINTS.STREAMING.TOKEN,
      {
        movie_id: movieId,
      },
    );
  },

  startSession(movieId: string) {
    return apiClient.post(
      ENDPOINTS.STREAMING.START,
      {
        movie_id: movieId,
      },
    );
  },

  heartbeat(sessionId: string) {
    return apiClient.post(
      ENDPOINTS.STREAMING.HEARTBEAT,
      {
        session_id: sessionId,
      },
    );
  },
};