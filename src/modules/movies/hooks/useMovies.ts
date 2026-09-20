import { useQuery } from '@tanstack/react-query';

import { MovieApi } from '../api/movie.api';

export const useMovies = () => {
  return useQuery({
    queryKey: ['movies'],

    queryFn: async () => {
      const response = await MovieApi.getMovies();

      return response.data;
    },
  });
};