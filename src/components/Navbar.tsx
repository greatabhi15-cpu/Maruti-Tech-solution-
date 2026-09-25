import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { MarutiLogo } from './MarutiLogo';
import { COMPANY_DETAILS } from '../data/content';
import { Phone, MessageCircle, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'why-maruti', label: 'Why Maruti' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navigation"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F6F0]/95 backdrop-blur-md shadow-xs border-b border-[#103B28]/10 py-3'
          : 'bg-[#F7F6F0] border-b border-[#103B28]/8 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on Left with enhanced prominence, breathing room, and polished micro-interaction */}
          <button
            id="nav-logo-btn"
            onClick={() => handleLinkClick('home')}
            className="group flex items-center text-left py-1.5 px-2.5 sm:px-3 -ml-2 sm:-ml-3 rounded-xl transition-all duration-300 ease-out hover:bg-[#103B28]/5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#103B28] mr-3 sm:mr-6 lg:mr-8 select-none"
            aria-label="Maruti Tech Solution Home"
          >
            <div className="transition-all duration-300 ease-out group-hover:scale-[1.03] group-active:scale-[0.98] flex items-center">
              <MarutiLogo variant="horizontal" size="md" usePng={true} />
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav
            id="desktop-nav"
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive
                      ? 'bg-[#103B28] text-white shadow-xs'
                      : 'text-[#103B28]/80 hover:text-[#103B28] hover:bg-[#103B28]/6'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              id="nav-phone-link"
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#103B28] hover:text-[#0E3022] hover:bg-[#103B28]/5 rounded-lg transition-colors"
              title="Call Maruti Tech Solution"
            >
              <Phone className="w-3.5 h-3.5 text-[#D92716]" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>

            <button
              id="nav-cta-btn"
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center gap-2 bg-[#103B28] hover:bg-[#0E3022] active:bg-[#091f16] text-white text-xs font-bold tracking-wider uppercase px-5 py-2.5 rounded-full transition-all shadow-xs hover:shadow-md"
            >
              <span>GET SUPPORT</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F7F6F0]" />
            </button>
          </div>

          {/* Mobile Right Controls: WhatsApp + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              id="mobile-nav-whatsapp"
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#103B28] bg-[#103B28]/8 hover:bg-[#103B28]/15 rounded-full transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
            </a>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#103B28] hover:bg-[#103B28]/8 rounded-lg focus:outline-hidden transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden border-t border-[#103B28]/10 bg-[#F7F6F0] px-4 pt-3 pb-6 shadow-xl"
        >
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#103B28] text-white font-semibold'
                      : 'text-[#103B28] hover:bg-[#103B28]/8'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-[#103B28]/10 space-y-3">
            <a
              id="mobile-menu-call-btn"
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="flex items-center justify-center gap-2.5 w-full py-3 rounded-lg border border-[#103B28]/25 text-sm font-semibold text-[#103B28] bg-white"
            >
              <Phone className="w-4 h-4 text-[#D92716]" />
              <span>Call: {COMPANY_DETAILS.phone}</span>
            </a>

            <button
              id="mobile-menu-cta-btn"
              onClick={() => handleLinkClick('contact')}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#103B28] text-white text-sm font-bold uppercase tracking-wider shadow-sm"
            >
              <span>GET SUPPORT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
