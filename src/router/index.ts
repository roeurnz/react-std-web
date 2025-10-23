import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { publicRoutes } from './routes/public';
import { authRoutes } from './routes/auth';
import { documentRoutes } from './routes/documents';
import MainLayout from '@/layouts/MainLayout';
import AuthLayout from '@/layouts/AuthLayout';
import DocumentLayout from '@/layouts/DocumentLayout';


// Main routes wrapped with MainLayout
const mainRoutes = [
  {
    path: '/',
    element: React.createElement(MainLayout),
    children: publicRoutes.map(route => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: React.createElement(route.element),
    }))
  }
];

// Auth routes wrapped with AuthLayout
const authRouteWrapper = authRoutes.map(route => ({
  path: route.path,
  element: React.createElement(AuthLayout),
  children: [
    {
      index: true,
      element: React.createElement(route.element),
    }
  ]
}));

// Document routes wrapped with DocumentLayout
const documentRouteWrapper = documentRoutes.map(route => ({
  path: route.path,
  element: React.createElement(DocumentLayout),
  children: [
    {
      index: true,
      element: React.createElement(route.element),
    }
  ]
}));

const routes = [...mainRoutes, ...authRouteWrapper, ...documentRouteWrapper];

export const router = createBrowserRouter(routes);

export default router;