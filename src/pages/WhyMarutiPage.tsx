import React from 'react';
import { PageId } from '../types';
import { COMPARISON_POINTS, WHO_WE_HELP } from '../data/content';
import { TechGraphic } from '../components/TechGraphic';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  Users,
  Building2,
  Briefcase,
  Home as HomeIcon,
  Store,
} from 'lucide-react';

interface WhyMarutiPageProps {
  onNavigate: (page: PageId) => void;
}

export const WhyMarutiPage: React.FC<WhyMarutiPageProps> = ({ onNavigate }) => {
  const whoWeHelpIcons = [
    <HomeIcon key="home" className="w-5 h-5" />,
    <Briefcase key="briefcase" className="w-5 h-5" />,
    <Store key="store" className="w-5 h-5" />,
    <Building2 key="building" className="w-5 h-5" />,
    <Users key="users" className="w-5 h-5" />,
  ];

  return (
    <div id="why-maruti-page-container" className="flex flex-col min-h-screen">
      {/* ==================================================
          WHY MARUTI — HERO
          ================================================== */}
      <section
        id="why-hero"
        className="relative bg-[#F7F6F0] py-16 md:py-24 border-b border-[#103B28]/10 overflow-hidden"
      >
        <TechGraphic theme="dark" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#103B28]/15 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#D92716]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#103B28]">
                ENGINEERED FOR INTEGRITY
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0E2319] tracking-tight leading-[1.1]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              NOT JUST A REPAIR.
              <br />
              <span className="text-[#103B28]">A PROPER SOLUTION.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#0E2319]/80 leading-relaxed font-normal">
              Most computer shops survive on quick band-aids and unnecessary component markups. At Maruti Tech Solution, we combine methodical diagnostics with transparent explanations to deliver lasting technical remedies.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          WHY MARUTI — WHY CLIENTS CHOOSE US (5 Core Values)
          ================================================== */}
      <section
        id="why-choose-us"
        className="py-16 md:py-24 bg-white border-b border-[#103B28]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-left mb-14 space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#D92716]">
              CLIENT SATISFACTION
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-[#0E2319] tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              WHY CLIENTS CHOOSE US
            </h2>
            <p className="text-sm sm:text-base text-[#0E2319]/75">
              Five core principles that define how we diagnose, quote, and deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              {
                title: 'Practical Diagnosis',
                desc: 'We trace circuit shorts, corrupt firmware, or faulty sectors before recommending any intervention.',
              },
              {
                title: 'Professional Service',
                desc: 'Clean anti-static workbench standards, precise tooling, and safe data isolation protocols.',
              },
              {
                title: 'Transparent Communication',
                desc: 'Plain explanations of what failed, why it failed, and upfront written estimates with zero surprises.',
              },
              {
                title: 'Reliable Technical Support',
                desc: 'Direct access to experienced hardware technicians who personally worked on your system.',
              },
              {
                title: 'Solutions Based on Actual Requirements',
                desc: 'We never upsell overkill hardware. If an affordable RAM addition resolves your workflow lag, that is our recommendation.',
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="p-7 rounded-2xl bg-[#F7F6F0]/60 border border-[#103B28]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold font-mono text-[#D92716] uppercase tracking-wider mb-3">
                    Principle 0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#0E2319] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#0E2319]/75 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#103B28]/8 flex items-center gap-1.5 text-xs font-semibold text-[#103B28]">
                  <CheckCircle2 className="w-4 h-4 text-[#103B28]" />
                  <span>Verified Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          WHY MARUTI — VISUAL COMPARISON: QUICK FIX vs. PROPER SOLUTION
          ================================================== */}
      <section
        id="quick-fix-vs-proper-solution"
        className="py-20 md:py-28 bg-[#F7F6F0] border-b border-[#103B28]/10"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#103B28]/10 text-xs font-bold uppercase tracking-widest text-[#103B28]">
              Side-by-Side Comparison
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-[#0E2319] tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              QUICK FIX vs. PROPER SOLUTION
            </h2>
            <p className="text-sm sm:text-base text-[#0E2319]/75">
              See the difference between temporary workarounds and our methodical engineering approach.
            </p>
          </div>

          {/* Comparison Cards / Table */}
          <div className="space-y-4">
            {COMPARISON_POINTS.map((item, idx) => (
              <div
                key={item.feature}
                className="grid grid-cols-1 md:grid-cols-12 rounded-2xl overflow-hidden border border-[#103B28]/15 bg-white shadow-xs text-left"
              >
                {/* Feature Label */}
                <div className="md:col-span-4 p-5 sm:p-6 bg-[#F7F6F0]/80 border-b md:border-b-0 md:border-r border-[#103B28]/10 flex flex-col justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#103B28]/60 mb-0.5">
                    Evaluation Point 0{idx + 1}
                  </span>
                  <span className="text-base font-bold text-[#0E2319]">
                    {item.feature}
                  </span>
                </div>

                {/* Quick Fix Column (Red Accent subtle) */}
                <div className="md:col-span-4 p-5 sm:p-6 border-b md:border-b-0 md:border-r border-[#103B28]/10 bg-red-50/30 flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#D92716] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#D92716] mb-1">
                      Quick Fix / Generic Shop
                    </span>
                    <p className="text-xs sm:text-sm text-[#0E2319]/80 font-normal">
                      {item.quickFix}
                    </p>
                  </div>
                </div>

                {/* Proper Solution Column (Deep Green) */}
                <div className="md:col-span-4 p-5 sm:p-6 bg-[#103B28]/5 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#103B28] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#103B28] mb-1">
                      Maruti Proper Solution
                    </span>
                    <p className="text-xs sm:text-sm text-[#0E2319] font-medium">
                      {item.properSolution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          WHY MARUTI — WHO WE HELP
          Home Users, Professionals, Small Businesses, Offices, Local Businesses
          (Strictly adhering to no fabricated corporate clients or statistics)
          ================================================== */}
      <section
        id="who-we-help"
        className="py-20 md:py-28 bg-white border-b border-[#103B28]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#D92716]">
              TAILORED SUPPORT
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-[#0E2319] tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              WHO WE HELP
            </h2>
            <p className="text-sm sm:text-base text-[#0E2319]/75">
              Empowering diverse everyday technology users across Mumbai with reliable local service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
            {WHO_WE_HELP.map((user, idx) => (
              <div
                key={user.title}
                className="p-6 rounded-2xl bg-[#F7F6F0]/60 border border-[#103B28]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#103B28] text-white flex items-center justify-center mb-4">
                    {whoWeHelpIcons[idx]}
                  </div>
                  <h3 className="text-base font-bold text-[#0E2319] mb-2">
                    {user.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0E2319]/75 leading-relaxed font-normal">
                    {user.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#103B28]/8 text-[11px] font-semibold text-[#103B28]">
                  Available On-site &amp; In-Store
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-[#103B28] hover:bg-[#0E3022] text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-xs hover:shadow-md"
            >
              <span>REQUEST TECHNICAL EVALUATION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
