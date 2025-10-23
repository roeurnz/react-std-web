import { apiService } from './api';
import type { SignInRequest, SignUpRequest, AuthResponse } from '@/types/auth';

export const authService = {
  async signIn(credentials: SignInRequest): Promise<AuthResponse> {
    return apiService.post<AuthResponse>('/auth/signin', credentials);
  },

  async signUp(userData: SignUpRequest): Promise<AuthResponse> {
    return apiService.post<AuthResponse>('/auth/signup', userData);
  },

  async signOut(): Promise<void> {
    localStorage.removeItem('authToken');
    // Optionally call API to invalidate token
    // return apiService.post('/auth/signout');
  },

  async getCurrentUser(): Promise<AuthResponse['user']> {
    return apiService.get('/auth/me');
  },
};