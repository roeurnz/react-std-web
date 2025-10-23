import DocumentList from '@/pages/documents/DocumentList';
import DocumentEditor from '@/pages/documents/DocumentEditor';
import DocumentView from '@/pages/documents/DocumentView';
import DocumentCanvas from '@/pages/documents/DocumentCanvas';
import DashboardHome from '@/pages/dashboard/DashboardHome';
import Analytics from '@/pages/dashboard/Analytics';
import RecentDocuments from '@/pages/dashboard/RecentDocuments';
import UserOverview from '@/pages/dashboard/UserOverview';

// Centralized route metadata for titles and descriptions
export const documentRouteMetadata: Record<string, { title: string; description: string }> = {
  '/documents': {
    title: 'Documents - KD Documentify',
    description: 'Manage and organize your documents with KD Documentify.'
  },
  '/documents/list': {
    title: 'Document List - KD Documentify',
    description: 'View and manage your document list.'
  },
  '/documents/editor': {
    title: 'Document Editor - KD Documentify',
    description: 'Edit and create documents.'
  },
  '/documents/view': {
    title: 'Document View - KD Documentify',
    description: 'View document details.'
  },
  '/documents/canvas': {
    title: 'Document Canvas - KD Documentify',
    description: 'Interactive document canvas.'
  },
  '/dashboard': {
    title: 'Dashboard - KD Documentify',
    description: 'Overview of your dashboard.'
  },
  '/dashboard/analytics': {
    title: 'Analytics - KD Documentify',
    description: 'View analytics and insights.'
  },
  '/dashboard/recent-documents': {
    title: 'Recent Documents - KD Documentify',
    description: 'View your recent documents.'
  },
  '/dashboard/user-overview': {
    title: 'User Overview - KD Documentify',
    description: 'User overview and statistics.'
  }
};

export const documentRoutes = [
  {
    path: '/documents',
    element: DocumentList,
    name: 'Documents',
    ...documentRouteMetadata['/documents']
  },
  {
    path: '/documents/list',
    element: DocumentList,
    name: 'Document List',
    ...documentRouteMetadata['/documents/list']
  },
  {
    path: '/documents/editor',
    element: DocumentEditor,
    name: 'Document Editor',
    ...documentRouteMetadata['/documents/editor']
  },
  {
    path: '/documents/view',
    element: DocumentView,
    name: 'Document View',
    ...documentRouteMetadata['/documents/view']
  },
  {
    path: '/documents/canvas',
    element: DocumentCanvas,
    name: 'Document Canvas',
    ...documentRouteMetadata['/documents/canvas']
  },
  {
    path: '/dashboard',
    element: DashboardHome,
    name: 'Dashboard',
    ...documentRouteMetadata['/dashboard']
  },
  {
    path: '/dashboard/analytics',
    element: Analytics,
    name: 'Analytics',
    ...documentRouteMetadata['/dashboard/analytics']
  },
  {
    path: '/dashboard/recent-documents',
    element: RecentDocuments,
    name: 'Recent Documents',
    ...documentRouteMetadata['/dashboard/recent-documents']
  },
  {
    path: '/dashboard/user-overview',
    element: UserOverview,
    name: 'User Overview',
    ...documentRouteMetadata['/dashboard/user-overview']
  }
];

export default documentRoutes;