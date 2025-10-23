import Home from '@/pages/Home.tsx';
import ServicesIndex from '@/pages/services/Index.tsx';
import Service from '@/pages/services/Service.tsx';
import NotFound from '@/pages/errors/NotFound.tsx';

// Centralized route metadata for titles and descriptions
export const routeMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'KD Documentify - Enterprise Document Management Solutions',
    description: 'Transform your business with our comprehensive enterprise document management, workflow automation, and digital transformation solutions.'
  },
  '/services': {
    title: 'Enterprise Services - Document Management & Digital Workflows | KD Documentify',
    description: 'Explore our enterprise-grade services including document management, digital workflows, data analytics, and custom business solutions.'
  },
  '/services/:serviceId': {
    title: 'Service Details - Enterprise Business Solutions | KD Documentify',
    description: 'Detailed information about our enterprise services, features, integrations, and pricing for digital transformation.'
  },
  '*': {
    title: 'Page Not Found - KD Documentify',
    description: 'The page you are looking for does not exist. Explore our enterprise document management solutions and services.'
  }
};

export const publicRoutes = [
  {
    path: '/',
    element: Home,
    name: 'Home',
    ...routeMetadata['/']
  },
  {
    path: '/services',
    element: ServicesIndex,
    name: 'Services',
    ...routeMetadata['/services']
  },
  {
    path: '/services/:serviceId',
    element: Service,
    name: 'Service',
    ...routeMetadata['/services/:serviceId']
  },
  {
    path: '*',
    element: NotFound,
    name: 'Not Found',
    ...routeMetadata['*']
  }
];

export default publicRoutes;