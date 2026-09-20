import { useMutation } from '@tanstack/react-query';

import { StreamingApi } from '../api/streaming.api';

export const useHeartbeat = () => {
  return useMutation({
    mutationFn: (sessionId: string) =>
      StreamingApi.heartbeat(
        sessionId,
      ),
  });
};