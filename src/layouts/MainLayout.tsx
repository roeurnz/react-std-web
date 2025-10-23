import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import TitleManager from '@/hooks/TitleManager';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TitleManager />
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;