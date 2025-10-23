import React from 'react';
import { Outlet } from 'react-router-dom';
import TitleManager from '@/hooks/TitleManager';

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TitleManager />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;