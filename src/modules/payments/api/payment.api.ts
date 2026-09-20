import { apiClient } from '../../../shared/network/api-client';

import { ENDPOINTS } from '../../../shared/network/endpoints';

export const PaymentApi = {
  createOrder(movieId: string) {
    return apiClient.post(
      ENDPOINTS.PAYMENTS.CREATE_ORDER,
      {
        movie_id: movieId,
      },
    );
  },

  verify(transactionId: string) {
    return apiClient.post(
      ENDPOINTS.PAYMENTS.VERIFY,
      {
        transaction_id: transactionId,
      },
    );
  },

  history() {
    return apiClient.get(
      ENDPOINTS.PAYMENTS.HISTORY,
    );
  },
};