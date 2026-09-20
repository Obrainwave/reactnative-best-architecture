import { useQuery } from '@tanstack/react-query';

import { MovieApi } from '../api/movie.api';

export const useFeaturedMovies = () => {
  return useQuery({
    queryKey: ['featured-movies'],

    queryFn: async () => {
      const response =
        await MovieApi.getFeatured();

      return response.data;
    },
  });
};