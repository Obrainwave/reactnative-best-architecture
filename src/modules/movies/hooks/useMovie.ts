import { useQuery } from '@tanstack/react-query';

import { MovieApi } from '../api/movie.api';

export const useMovie = (
  movieId: string,
) => {
  return useQuery({
    queryKey: ['movie', movieId],

    queryFn: async () => {
      const response =
        await MovieApi.getMovie(movieId);

      return response.data;
    },

    enabled: !!movieId,
  });
};