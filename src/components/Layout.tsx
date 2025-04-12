import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { Button } from './ui/button';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      
      {/* Floating Button */}
      <Button
        asChild
        className="fixed bottom-20 right-4 z-50 rounded-full shadow-lg bg-blood-600 text-white hover:bg-blood-700"
      >
        <a
          href="https://bobdo.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          English
          <ExternalLink className="h-4 w-4" />
        </a>
      </Button>
    </div>
  );
};

export default Layout;
