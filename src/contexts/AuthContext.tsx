import React, { createContext, useContext, useEffect } from 'react';
import { create } from 'zustand';
import { authService } from '@/services/authService';
import type { AuthState, SignInRequest, SignUpRequest } from '@/types/auth';

interface AuthActions {
  signIn: (credentials: SignInRequest) => Promise<void>;
  signUp: (userData: SignUpRequest) => Promise<void>;
  signOut: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  initialize: () => Promise<void>;
}

type AuthStore = AuthState & AuthActions;

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,

  signIn: async (credentials: SignInRequest) => {
    set({ loading: true, error: null });
    try {
      const response = await authService.signIn(credentials);
      localStorage.setItem('authToken', response.token);
      set({
        user: response.user,
        token: response.token,
        isAuthenticated: true,
        loading: false,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Sign in failed',
        loading: false,
      });
      throw error;
    }
  },

  signUp: async (userData: SignUpRequest) => {
    set({ loading: true, error: null });
    try {
      const response = await authService.signUp(userData);
      localStorage.setItem('authToken', response.token);
      set({
        user: response.user,
        token: response.token,
        isAuthenticated: true,
        loading: false,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Sign up failed',
        loading: false,
      });
      throw error;
    }
  },

  signOut: () => {
    localStorage.removeItem('authToken');
    set({
      user: null,
      token: null,
      isAuthenticated: false,
      error: null,
    });
  },

  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: string | null) => set({ error }),

  initialize: async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      set({ loading: true });
      try {
        const user = await authService.getCurrentUser();
        set({
          user,
          token,
          isAuthenticated: true,
          loading: false,
        });
      } catch (error) {
        localStorage.removeItem('authToken');
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          loading: false,
          error: null,
        });
      }
    }
  },
}));

const AuthContext = createContext<AuthStore | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const store = useAuthStore();

  useEffect(() => {
    store.initialize();
  }, [store]);

  return (
    <AuthContext.Provider value={store}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthProvider;