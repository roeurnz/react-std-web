import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { routeMetadata } from '@/router/routes/public';
import { authRouteMetadata } from '@/router/routes/auth';

// Title and metadata manager component
const TitleManager: React.FC = () => {
  let location;

  try {
    location = useLocation();
  } catch (error) {
    // If useLocation fails, we're not in a router context
    // Return null to prevent rendering
    return null;
  }

  useEffect(() => {
    // Get metadata for current route from public or auth routes
    let metadata = routeMetadata[location.pathname] || authRouteMetadata[location.pathname];

    // Handle dynamic routes
    if (!metadata && location.pathname.startsWith('/services/')) {
      metadata = routeMetadata['/services/:serviceId'];
    }

    // Fallback for 404 or unmatched routes
    if (!metadata) {
      metadata = routeMetadata['*'] || {
        title: 'KD Documentify - Enterprise Document Management Solutions',
        description: 'Transform your business with our comprehensive enterprise document management, workflow automation, and digital transformation solutions.'
      };
    }

    // Set document title
    document.title = metadata.title;

    // Update or create meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metadata.description);
    }

    // Update Open Graph tags if they exist
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', metadata.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', metadata.description);
    }
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default TitleManager;