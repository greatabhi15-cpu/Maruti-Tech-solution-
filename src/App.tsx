import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { WhyMarutiPage } from './pages/WhyMarutiPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Handle URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'about', 'services', 'why-maruti', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'services':
        return <ServicesPage onNavigate={navigateTo} />;
      case 'why-maruti':
        return <WhyMarutiPage onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F0] text-[#0E2319] selection:bg-[#103B28] selection:text-white font-sans antialiased">
      {/* Sticky Main Navigation */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {renderPage()}
      </main>

      {/* Corporate Dark Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Persistent Floating WhatsApp CTA on every page */}
      <WhatsAppButton />
    </div>
  );
}
