import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/layout/Navbar';
import TitleManager from '@/hooks/TitleManager';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TitleManager />
      <Navbar />
      <main className="pt-16 flex items-center justify-center px-4">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <CardTitle className="text-6xl font-bold text-gray-900">404</CardTitle>
            <CardDescription className="text-xl text-gray-600">
              Page Not Found
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500 mb-6">
              Sorry, the page you are looking for does not exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link to="/">Go to Home</Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default NotFound;