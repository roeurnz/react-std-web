import SignIn from '@/pages/auth/SignIn.tsx';
import SignUp from '@/pages/auth/SignUp.tsx';

// Centralized route metadata for titles and descriptions
export const authRouteMetadata: Record<string, { title: string; description: string }> = {
  '/signin': {
    title: 'Sign In - KD Documentify',
    description: 'Sign in to your KD Documentify account to access enterprise document management solutions.'
  },
  '/signup': {
    title: 'Sign Up - KD Documentify',
    description: 'Create a new account with KD Documentify for enterprise document management and digital workflows.'
  }
};

export const authRoutes = [
  {
    path: '/signin',
    element: SignIn,
    name: 'Sign In',
    ...authRouteMetadata['/signin']
  },
  {
    path: '/signup',
    element: SignUp,
    name: 'Sign Up',
    ...authRouteMetadata['/signup']
  }
];

export default authRoutes;