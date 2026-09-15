import React from 'react';
import { PageId } from '../types';
import { APPROACH_STEPS } from '../data/content';
import { TechGraphic } from '../components/TechGraphic';
import {
  ShieldCheck,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Search,
  Wrench,
  Activity,
  Award,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div id="about-page-container" className="flex flex-col min-h-screen">
      {/* ==================================================
          ABOUT — HERO
          ================================================== */}
      <section
        id="about-hero"
        className="relative bg-[#F7F6F0] py-16 md:py-24 border-b border-[#103B28]/10 overflow-hidden"
      >
        <TechGraphic theme="dark" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#103B28]/15 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#D92716]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#103B28]">
                ABOUT MARUTI TECH SOLUTION
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0E2319] tracking-tight leading-[1.1]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              TECHNOLOGY IS ONLY USEFUL
              <br />
              <span className="text-[#103B28]">WHEN IT WORKS FOR YOU.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#0E2319]/80 leading-relaxed font-normal">
              Maruti Tech Solution is a professional IT support and computer solutions company based in Mumbai. We provide dependable, component-level hardware repair, system upgrades, software stabilization, and resilient networking for individuals, professionals, and growing commercial enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          ABOUT — CORE IDENTITY & TRUST PILLARS
          ================================================== */}
      <section
        id="about-pillars"
        className="py-16 md:py-24 bg-white border-b border-[#103B28]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#F7F6F0]/60 border border-[#103B28]/10 text-left space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#103B28] text-white flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#0E2319]">
                Reliability & Trust
              </h3>
              <p className="text-sm text-[#0E2319]/75 leading-relaxed">
                We believe trust is earned through complete transparency. No hidden charges, no unapproved part replacements, and strict privacy protection for all client data.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F7F6F0]/60 border border-[#103B28]/10 text-left space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#103B28] text-white flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#0E2319]">
                Technical Knowledge
              </h3>
              <p className="text-sm text-[#0E2319]/75 leading-relaxed">
                Rather than treating symptoms with superficial resets, our bench technicians understand silicon architectures, power regulation rails, and low-level kernel diagnostics.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F7F6F0]/60 border border-[#103B28]/10 text-left space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#103B28] text-white flex items-center justify-center mb-4">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#0E2319]">
                Practical Solutions
              </h3>
              <p className="text-sm text-[#0E2319]/75 leading-relaxed">
                We recommend the most sensible path for your actual requirement and budget. If a budget-friendly NVMe upgrade solves your performance bottleneck, that is exactly what we advise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          ABOUT — OUR APPROACH (Diagnosis → Solution → Testing → Handover)
          With Premium Technician Imagery
          ================================================== */}
      <section
        id="about-approach"
        className="py-20 md:py-28 bg-[#F7F6F0] border-b border-[#103B28]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual: Technician Working on Hardware */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#103B28]/15 bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=1000&q=80"
                  alt="Professional technician carefully diagnosing and repairing laptop motherboard hardware at Maruti Tech Solution"
                  referrerPolicy="no-referrer"
                  className="w-full h-96 sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E3022]/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <div className="text-xs font-semibold uppercase tracking-widest text-[#F7F6F0]/80 mb-1">
                    Precision Hardware Bench
                  </div>
                  <div className="text-sm font-bold text-white">
                    Component Isolation & Micro-soldering
                  </div>
                  <p className="text-xs text-white/80 mt-1">
                    Inspecting traces and verifying electrical tolerances before reassembly.
                  </p>
                </div>
              </div>
            </div>

            {/* Content: Approach Process */}
            <div className="lg:col-span-7 order-1 lg:order-2 text-left space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[#D92716]">
                METHODICAL REPAIR PROTOCOL
              </div>

              <h2
                className="text-3xl sm:text-4xl font-extrabold text-[#0E2319] tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                OUR APPROACH
              </h2>

              <p className="text-base text-[#0E2319]/80 leading-relaxed font-normal">
                Every machine that enters our workshop goes through a standardized, 4-phase quality lifecycle to guarantee durability and avoid repeat failures.
              </p>

              <div className="space-y-4 pt-2">
                {APPROACH_STEPS.map((step, index) => (
                  <div
                    key={step.title}
                    className="p-4 rounded-xl bg-white border border-[#103B28]/10 flex items-start gap-4 shadow-2xs"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#103B28] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      0{index + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-[#0E2319]">
                          {step.title}
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#103B28]/60 bg-[#103B28]/6 px-2 py-0.5 rounded-sm">
                          {step.phase}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#0E2319]/75 mt-1 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          ABOUT — WHAT WE BELIEVE
          ================================================== */}
      <section
        id="what-we-believe"
        className="py-20 md:py-28 bg-white border-b border-[#103B28]/10 text-center"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#103B28]/8 text-xs font-bold uppercase tracking-widest text-[#103B28]">
            <Sparkles className="w-3.5 h-3.5 text-[#D92716]" />
            <span>Core Philosophy</span>
          </div>

          <h2
            className="text-xs font-bold uppercase tracking-widest text-[#103B28]/70"
          >
            WHAT WE BELIEVE
          </h2>

          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E2319] leading-snug tracking-tight">
            &ldquo;Good IT support isn&rsquo;t about using complicated language.
            <br />
            <span className="text-[#103B28]">
              It&rsquo;s about understanding the problem and solving it properly.&rdquo;
            </span>
          </blockquote>

          <p className="text-sm sm:text-base text-[#0E2319]/75 max-w-xl mx-auto leading-relaxed pt-2">
            Whether you are a student whose laptop will not start before exams, or a business owner whose network connectivity went down, we provide clear answers, practical solutions, and respectful human support.
          </p>

          <div className="pt-6">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-[#103B28] hover:bg-[#0E3022] text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full transition-all shadow-xs hover:shadow-md"
            >
              <span>CONNECT WITH OUR TEAM</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
