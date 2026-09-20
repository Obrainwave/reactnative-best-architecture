import { create } from 'zustand';

interface AuthState {
  token: string | null;
  authenticated: boolean;

  login: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  authenticated: false,

  login: token =>
    set({
      token,
      authenticated: true,
    }),

  logout: () =>
    set({
      token: null,
      authenticated: false,
    }),
}));