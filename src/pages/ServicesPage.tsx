import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICE_CATEGORIES } from '../data/content';
import { TechGraphic } from '../components/TechGraphic';
import {
  Laptop,
  Cpu,
  Layers,
  ShieldCheck,
  Network,
  HardDrive,
  ArrowRight,
  Check,
  Phone,
  MessageCircle,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    'computer-repair': <Laptop className="w-5 h-5" />,
    upgrades: <Cpu className="w-5 h-5" />,
    software: <Layers className="w-5 h-5" />,
    security: <ShieldCheck className="w-5 h-5" />,
    networking: <Network className="w-5 h-5" />,
    'it-products': <HardDrive className="w-5 h-5" />,
  };

  const filteredCategories =
    activeCategory === 'all'
      ? SERVICE_CATEGORIES
      : SERVICE_CATEGORIES.filter((c) => c.id === activeCategory);

  return (
    <div id="services-page-container" className="flex flex-col min-h-screen">
      {/* ==================================================
          SERVICES — HERO
          ================================================== */}
      <section
        id="services-hero"
        className="relative bg-[#F7F6F0] py-16 md:py-24 border-b border-[#103B28]/10 overflow-hidden"
      >
        <TechGraphic theme="dark" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#103B28]/15 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#D92716]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#103B28]">
                SERVICE DIRECTORY
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0E2319] tracking-tight leading-[1.1]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              TECHNICAL SERVICES
              <br />
              <span className="text-[#103B28]">&amp; HARDWARE SOLUTIONS</span>
            </h1>

            <p className="text-base sm:text-lg text-[#0E2319]/80 leading-relaxed font-normal">
              Explore our structured service categories. Every service is backed by transparent diagnosis, verified components, and dedicated after-service support.
            </p>

            {/* Quick Category Filter Pills */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-[#103B28] text-white shadow-xs'
                    : 'bg-white text-[#103B28] border border-[#103B28]/15 hover:bg-[#103B28]/6'
                }`}
              >
                All Services
              </button>
              {SERVICE_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                    activeCategory === category.id
                      ? 'bg-[#103B28] text-white shadow-xs'
                      : 'bg-white text-[#103B28] border border-[#103B28]/15 hover:bg-[#103B28]/6'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SERVICES — DIRECTORY CATEGORIES
          ================================================== */}
      <section
        id="services-directory"
        className="py-16 md:py-24 bg-white border-b border-[#103B28]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              id={`category-section-${category.id}`}
              className="p-8 sm:p-10 rounded-3xl bg-[#F7F6F0]/50 border border-[#103B28]/12 scroll-mt-28"
            >
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-[#103B28]/10 gap-4 text-left">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#103B28] text-white flex items-center justify-center shrink-0">
                    {categoryIcons[category.id] || <Cpu className="w-6 h-6" />}
                  </div>
                  <div>
                    <h2
                      className="text-2xl font-extrabold text-[#0E2319] tracking-tight"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {category.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#0E2319]/70 mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 self-start md:self-auto bg-white hover:bg-[#103B28] text-[#103B28] hover:text-white border border-[#103B28]/25 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors shadow-2xs"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {category.items.map((item) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl bg-white border border-[#103B28]/10 shadow-xs hover:border-[#103B28]/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2.5">
                        <h3 className="text-base font-bold text-[#0E2319]">
                          {item.title}
                        </h3>
                        {item.badge && (
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-[#D92716]/10 text-[#D92716] px-2 py-0.5 rounded-sm shrink-0">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-[#0E2319]/75 leading-relaxed font-normal">
                        {item.details}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-[#103B28]/8 flex items-center justify-between text-xs">
                      <span className="inline-flex items-center gap-1 font-semibold text-[#103B28]">
                        <Check className="w-3.5 h-3.5 text-[#103B28]" />
                        <span>Verified Repair</span>
                      </span>

                      <button
                        onClick={() => onNavigate('contact')}
                        className="text-[11px] font-bold uppercase tracking-wider text-[#D92716] hover:underline"
                      >
                        Book Diagnostic →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          SERVICES — BOTTOM CTA (As requested in prompt)
          "NEED HELP WITH SOMETHING ELSE?"
          "CONTACT OUR TEAM →"
          ================================================== */}
      <section
        id="services-bottom-cta"
        className="py-16 md:py-20 bg-[#F7F6F0] border-b border-[#103B28]/10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0E2319] tracking-tight uppercase">
            NEED HELP WITH SOMETHING ELSE?
          </h2>
          <p className="text-sm sm:text-base text-[#0E2319]/75 max-w-lg mx-auto">
            Custom workstation builds, specialized data recovery, or commercial networking? Speak directly with our lead technician.
          </p>
          <div className="pt-3">
            <button
              id="services-contact-our-team-btn"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2.5 bg-[#103B28] hover:bg-[#0E3022] text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              <span>CONTACT OUR TEAM</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
