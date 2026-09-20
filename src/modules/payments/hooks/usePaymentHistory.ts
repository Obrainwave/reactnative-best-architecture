import { useQuery } from '@tanstack/react-query';

import { PaymentApi } from '../api/payment.api';

export const usePaymentHistory =
  () => {
    return useQuery({
      queryKey: ['payment-history'],

      queryFn: async () => {
        const response =
          await PaymentApi.history();

        return response.data;
      },
    });
  };