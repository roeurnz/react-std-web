import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import TitleManager from '@/hooks/TitleManager';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { MainSidebarContent } from './MainSidebar';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';

const DashboardLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <TitleManager />
      <Navbar />
      <div className="pt-16 h-[calc(100vh-4rem)]">
        <SidebarProvider>
          <ResizablePanelGroup direction="horizontal" className="h-full">
            <ResizablePanel
              defaultSize={20}
              minSize={5}
              maxSize={40}
              className="min-w-[80px]"
            >
              <Sidebar collapsible="icon">
                <MainSidebarContent />
              </Sidebar>
            </ResizablePanel>

            <ResizableHandle withHandle />

            <ResizablePanel
              defaultSize={80}
              minSize={60}
              className="min-w-[600px]"
            >
              <SidebarInset>
                <Outlet />
              </SidebarInset>
            </ResizablePanel>
          </ResizablePanelGroup>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default DashboardLayout;