import React from 'react';
import { Outlet } from 'react-router-dom';
import TitleManager from '@/hooks/TitleManager';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { MainSidebarContent } from './MainSidebar';

const DocumentLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <TitleManager />
      <SidebarProvider>
        <Sidebar collapsible="icon">
          <MainSidebarContent />
        </Sidebar>
        <SidebarInset className="pt-16">
          <Outlet />
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default DocumentLayout;