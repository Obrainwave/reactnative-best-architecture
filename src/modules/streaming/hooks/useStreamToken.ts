import { useMutation } from '@tanstack/react-query';

import { StreamingApi } from '../api/streaming.api';

export const useStreamToken = () => {
  return useMutation({
    mutationFn: (movieId: string) =>
      StreamingApi.getStreamToken(
        movieId,
      ),
  });
};