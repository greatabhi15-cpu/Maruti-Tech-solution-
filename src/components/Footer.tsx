import React, { useState } from 'react';
import { PageId } from '../types';
import { MarutiLogo } from './MarutiLogo';
import { COMPANY_DETAILS } from '../data/content';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';
import { LegalModal } from './LegalModal';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const quickLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'why-maruti', label: 'Why Maruti' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNav = (id: PageId) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer
        id="corporate-footer"
        className="bg-[#0E3022] text-[#F7F6F0] pt-16 pb-12 border-t border-[#103B28]/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
            {/* Left Column (Brand) */}
            <div className="md:col-span-5 flex flex-col items-start text-left">
              <div className="mb-4">
                <MarutiLogo variant="horizontal" theme="light" size="md" />
              </div>

              <p className="text-sm sm:text-base text-[#F7F6F0]/80 leading-relaxed max-w-sm mt-3 font-normal">
                Professional computer, hardware, software and networking solutions for homes and businesses.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F7F6F0]/60">
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                <span>Mumbai Tech Support Center</span>
              </div>
            </div>

            {/* Middle Column (Quick Links) */}
            <div className="md:col-span-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#F7F6F0]/60 mb-5">
                QUICK LINKS
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      id={`footer-link-${link.id}`}
                      onClick={() => handleNav(link.id)}
                      className="text-sm text-[#F7F6F0]/85 hover:text-white hover:translate-x-1 transition-all duration-150 inline-flex items-center gap-1.5 focus:outline-hidden"
                    >
                      <span>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column (Contact & Social) */}
            <div className="md:col-span-4 space-y-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#F7F6F0]/60 mb-4">
                  CONTACT
                </h3>
                <ul className="space-y-3 text-sm text-[#F7F6F0]/85">
                  <li>
                    <a
                      id="footer-phone"
                      href={`tel:${COMPANY_DETAILS.phoneClean}`}
                      className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#D92716] shrink-0" />
                      <span>{COMPANY_DETAILS.phone}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="footer-email"
                      href={`mailto:${COMPANY_DETAILS.email}`}
                      className="inline-flex items-center gap-2.5 hover:text-white transition-colors break-all"
                    >
                      <Mail className="w-4 h-4 text-[#D92716] shrink-0" />
                      <span>{COMPANY_DETAILS.email}</span>
                    </a>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#D92716] shrink-0 mt-0.5" />
                    <span>
                      {COMPANY_DETAILS.address.line1},
                      <br />
                      {COMPANY_DETAILS.address.line2}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Social Media Placeholders */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#F7F6F0]/60 mb-3">
                  SOCIAL MEDIA
                </h4>
                <div className="flex items-center gap-2.5">
                  {[
                    { name: 'Instagram', icon: Instagram, url: '#' },
                    { name: 'Facebook', icon: Facebook, url: '#' },
                    { name: 'LinkedIn', icon: Linkedin, url: '#' },
                    { name: 'YouTube', icon: Youtube, url: '#' },
                  ].map((social) => {
                    const IconComp = social.icon;
                    return (
                      <span
                        key={social.name}
                        title={`${social.name} - Maruti Tech Solution (Official page placeholder)`}
                        className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#F7F6F0]/80 hover:text-white transition-colors cursor-pointer border border-white/5"
                        onClick={() => {
                          alert(`Maruti Tech Solution official ${social.name} link will be connected here upon release.`);
                        }}
                      >
                        <IconComp className="w-4 h-4" />
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Legal & Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F6F0]/60">
            <p>© 2026 Maruti Tech Solution. All Rights Reserved.</p>
            <div className="flex items-center space-x-6">
              <button
                id="footer-privacy-btn"
                onClick={() => setLegalModal('privacy')}
                className="hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>
              <button
                id="footer-terms-btn"
                onClick={() => setLegalModal('terms')}
                className="hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Dialog */}
      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
    </>
  );
};
