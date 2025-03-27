// src/layouts/MainLayout.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-14">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;