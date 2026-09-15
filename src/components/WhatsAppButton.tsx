import React from 'react';
import { COMPANY_DETAILS } from '../data/content';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <aside
      id="floating-whatsapp-container"
      aria-label="WhatsApp Support"
      className="fixed bottom-6 right-5 sm:right-6 z-50 flex items-center"
    >
      <a
        id="floating-whatsapp-cta"
        href={COMPANY_DETAILS.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
        aria-label="Chat with Maruti Tech Solution on WhatsApp"
      >
        {/* Subtle ping aura */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white border-2 border-[#25D366]"></span>
        </span>

        <MessageCircle className="w-5 h-5 fill-white text-[#25D366] shrink-0" />
        <span className="text-xs sm:text-sm font-bold tracking-wide select-none whitespace-nowrap">
          Need IT Help?
        </span>
      </a>
    </aside>
  );
};
