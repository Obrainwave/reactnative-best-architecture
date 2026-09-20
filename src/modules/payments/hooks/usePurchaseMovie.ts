import { useMutation } from '@tanstack/react-query';

import { PaymentApi } from '../api/payment.api';

export const usePurchaseMovie = () => {
  return useMutation({
    mutationFn: (movieId: string) =>
      PaymentApi.createOrder(movieId),
  });
};