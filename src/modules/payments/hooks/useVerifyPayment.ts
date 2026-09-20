import { useMutation } from '@tanstack/react-query';

import { PaymentApi } from '../api/payment.api';

export const useVerifyPayment = () => {
  return useMutation({
    mutationFn: (
      transactionId: string,
    ) =>
      PaymentApi.verify(
        transactionId,
      ),
  });
};