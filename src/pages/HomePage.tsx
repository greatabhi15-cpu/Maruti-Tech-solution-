import React from 'react';
import { PageId } from '../types';
import {
  COMPANY_DETAILS,
  HOME_SERVICES,
  TRUST_PILLARS,
} from '../data/content';
import { MarutiLogo } from '../components/MarutiLogo';
import { TechGraphic } from '../components/TechGraphic';
import {
  Phone,
  MessageCircle,
  ArrowRight,
  Laptop,
  Cpu,
  Layers,
  ShieldAlert,
  Network,
  HardDrive,
  CheckCircle2,
  Clock,
  Sparkles,
  Wrench,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Mapping service icons cleanly
  const renderServiceIcon = (name: string) => {
    switch (name) {
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-[#103B28]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#103B28]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#103B28]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-[#103B28]" />;
      case 'Network':
        return <Network className="w-5 h-5 text-[#103B28]" />;
      case 'HardDrive':
        return <HardDrive className="w-5 h-5 text-[#103B28]" />;
      default:
        return <Wrench className="w-5 h-5 text-[#103B28]" />;
    }
  };

  return (
    <div id="home-page-container" className="flex flex-col min-h-screen">
      {/* ==================================================
          SECTION 1 — HERO SECTION
          ================================================== */}
      <section
        id="hero-section"
        className="relative overflow-hidden bg-[#F7F6F0] pt-10 pb-20 md:pt-16 md:pb-28 border-b border-[#103B28]/10"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-7 text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#103B28]/15 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#D92716]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#103B28]">
                  MARUTI TECH SOLUTION
                </span>
                <span className="text-[#103B28]/30 text-xs">•</span>
                <span className="text-[11px] text-[#0E2319]/70 font-medium">Mumbai, India</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-1">
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0E2319] leading-[1.08]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  TECH ISSUES?
                  <br />
                  <span className="text-[#103B28]">WE SOLVE THEM.</span>
                </h1>
              </div>

              {/* Supporting Line */}
              <p className="text-lg sm:text-xl text-[#0E2319]/80 font-normal max-w-xl leading-relaxed">
                Reliable computer, hardware and IT support for homes and businesses.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  id="hero-primary-cta"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#103B28] hover:bg-[#0E3022] active:bg-[#091f16] text-white font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <span>GET IT SUPPORT</span>
                  <ArrowRight className="w-4 h-4 text-[#F7F6F0]" />
                </button>

                <a
                  id="hero-secondary-cta"
                  href={`tel:${COMPANY_DETAILS.phoneClean}`}
                  className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#F7F6F0] text-[#103B28] font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-full border border-[#103B28]/25 transition-all duration-200 shadow-xs hover:border-[#103B28]/60"
                >
                  <Phone className="w-4 h-4 text-[#D92716]" />
                  <span>CALL US</span>
                </a>
              </div>

              {/* Micro Trust Indicators */}
              <div className="pt-6 border-t border-[#103B28]/10 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#103B28]">
                    Transparent
                  </div>
                  <div className="text-xs text-[#0E2319]/70 mt-0.5">Root-cause diagnosis</div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#103B28]">
                    Prompt Service
                  </div>
                  <div className="text-xs text-[#0E2319]/70 mt-0.5">Quick Mumbai turnaround</div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#103B28]">
                    Genuine Parts
                  </div>
                  <div className="text-xs text-[#0E2319]/70 mt-0.5">100% verified upgrades</div>
                </div>
              </div>
            </div>

            {/* Right Visual Column — Authentic Hardware Environment */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Visual Frame */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-[#103B28]/15 group">
                  <img
                    src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1000&q=80"
                    alt="Precision hardware diagnostics and modern computer components at Maruti Tech Solution"
                    referrerPolicy="no-referrer"
                    className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle technical gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E3022]/90 via-[#0E3022]/30 to-transparent" />

                  {/* Brand Badge Overlay */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-[#103B28]/10 flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#D92716] animate-pulse" />
                    <span className="text-[11px] font-bold tracking-wide uppercase text-[#103B28]">
                      Bench Diagnostics Active
                    </span>
                  </div>

                  {/* Bottom Card Copy */}
                  <div className="absolute bottom-0 inset-x-0 p-6 text-white text-left">
                    <div className="text-xs font-semibold uppercase tracking-widest text-[#F7F6F0]/70 mb-1">
                      Component-Level Precision
                    </div>
                    <div className="text-base font-bold text-white">
                      Laptop, Desktop & Network Hardware Labs
                    </div>
                    <p className="text-xs text-white/80 mt-1">
                      Inspecting circuit tolerances, NVMe busses, and thermal efficiency.
                    </p>
                  </div>
                </div>

                {/* Sub-card floating badge */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-4 rounded-xl shadow-xl border border-[#103B28]/15 max-w-xs text-left hidden sm:flex items-center gap-3.5">
                  <div className="p-2.5 bg-[#103B28]/10 rounded-lg text-[#103B28]">
                    <Clock className="w-5 h-5 text-[#103B28]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#103B28] uppercase tracking-wider">
                      Rapid Turnaround
                    </div>
                    <div className="text-xs text-[#0E2319]/80 font-normal">
                      Most upgrades ready within 1–3 hours
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          HOME — SECTION 2
          WHEN TECHNOLOGY STOPS, BUSINESS SHOULDN'T.
          ================================================== */}
      <section
        id="business-continuity-section"
        className="py-16 md:py-24 bg-white border-b border-[#103B28]/10"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#103B28]/8 text-xs font-bold uppercase tracking-widest text-[#103B28]">
            Business & Home Continuity
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0E2319] tracking-tight leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            WHEN TECHNOLOGY STOPS,
            <br />
            <span className="text-[#103B28]">BUSINESS SHOULDN'T.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#0E2319]/80 max-w-2xl mx-auto leading-relaxed font-normal">
            From everyday computer problems to networking and system upgrades, Maruti Tech Solution helps you get back to work with dependable technical support.
          </p>

          <div className="pt-4">
            <button
              id="explore-services-cta"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 bg-[#103B28] hover:bg-[#0E3022] text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full transition-all shadow-xs hover:shadow-md"
            >
              <span>EXPLORE OUR SERVICES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================
          HOME — SECTION 3
          SERVICES (Clean 2 x 3 Grid)
          ================================================== */}
      <section
        id="services-overview-section"
        className="py-20 md:py-28 bg-[#F7F6F0] border-b border-[#103B28]/10 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="text-left space-y-2">
              <div className="text-xs font-bold uppercase tracking-widest text-[#D92716]">
                CORE TECHNICAL CAPABILITIES
              </div>
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-[#0E2319] tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Comprehensive IT Solutions
              </h2>
              <p className="text-sm sm:text-base text-[#0E2319]/75 max-w-xl">
                Precision hardware benchwork, stable software platforms, and resilient connectivity.
              </p>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#103B28] hover:text-[#0E3022] group"
            >
              <span>View Detailed Catalog</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* 2 x 3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {HOME_SERVICES.map((service) => (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="bg-white rounded-2xl p-7 border border-[#103B28]/12 shadow-xs hover:shadow-lg hover:border-[#103B28]/35 transition-all duration-200 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold text-[#D92716] tracking-widest uppercase">
                      {service.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#F7F6F0] group-hover:bg-[#103B28]/10 transition-colors">
                      {renderServiceIcon(service.iconName)}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0E2319] group-hover:text-[#103B28] transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#0E2319]/75 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#103B28]/8 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#0E2319]/60">
                    Est: {service.turnaround}
                  </span>

                  <button
                    onClick={() => onNavigate('services')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#103B28] group-hover:text-[#D92716] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          HOME — SECTION 4
          WHY MARUTI?
          ================================================== */}
      <section
        id="why-maruti-overview-section"
        className="py-20 md:py-28 bg-white border-b border-[#103B28]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 text-left space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#D92716]">
              OUR COMMITMENT
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0E2319] tracking-tight leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              TECHNICAL PROBLEMS.
              <br />
              <span className="text-[#103B28]">PRACTICAL SOLUTIONS.</span>
            </h2>
            <p className="text-base text-[#0E2319]/75">
              Built on honesty, engineering rigor, and long-term customer trust across Mumbai.
            </p>
          </div>

          {/* 4 Trust Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_PILLARS.map((pillar) => (
              <div
                key={pillar.num}
                id={`trust-pillar-${pillar.num}`}
                className="relative p-6 rounded-2xl bg-[#F7F6F0]/60 border border-[#103B28]/10 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-black text-[#103B28]/25 font-mono mb-4">
                    {pillar.num}
                  </div>
                  <h3 className="text-lg font-bold text-[#0E2319] mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#0E2319]/75 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#103B28]/8 flex items-center gap-1.5 text-xs font-semibold text-[#103B28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#103B28]" />
                  <span>Standard Protocol</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          HOME — SECTION 5
          SERVICE PROMISE
          ================================================== */}
      <section
        id="service-promise-section"
        className="py-20 md:py-28 bg-[#F7F6F0] border-b border-[#103B28]/10"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#103B28]/10 text-xs font-bold uppercase tracking-widest text-[#103B28] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D92716]" />
            <span>Our Service Promise</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0E2319] tracking-tight leading-tight uppercase"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            &ldquo;YOUR DEVICE ISN&rsquo;T JUST A DEVICE.
            <br />
            <span className="text-[#103B28]">IT&rsquo;S PART OF YOUR DAY.&rdquo;</span>
          </h2>

          <p className="text-base sm:text-lg text-[#0E2319]/80 max-w-2xl mx-auto leading-relaxed">
            We focus on solving the actual problem — not simply replacing parts or recommending unnecessary upgrades.
          </p>

          <div className="pt-2">
            <button
              id="promise-consultation-cta"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2.5 bg-[#103B28] hover:bg-[#0E3022] text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <span>GET A QUICK CONSULTATION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================
          HOME — SECTION 6
          FINAL CTA (Dark Green Background)
          ================================================== */}
      <section
        id="final-cta-section"
        className="relative py-20 md:py-24 bg-[#103B28] text-white overflow-hidden"
      >
        <TechGraphic theme="light" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wider uppercase text-[#F7F6F0]">
            <span className="w-2 h-2 rounded-full bg-[#D92716]" />
            <span>Direct Support in Mumbai</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            LET&rsquo;S FIX WHAT&rsquo;S HOLDING YOU BACK.
          </h2>

          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Have a computer issue, networking problem or system that needs attention?
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              id="final-contact-cta"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#F7F6F0] text-[#103B28] font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              <span>CONTACT MARUTI</span>
              <ArrowRight className="w-4 h-4 text-[#103B28]" />
            </button>

            <a
              id="final-whatsapp-cta"
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>WHATSAPP US</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
