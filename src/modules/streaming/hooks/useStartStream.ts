import { useMutation } from '@tanstack/react-query';

import { StreamingApi } from '../api/streaming.api';

export const useStartStream = () => {
  return useMutation({
    mutationFn: (movieId: string) =>
      StreamingApi.startSession(
        movieId,
      ),
  });
};