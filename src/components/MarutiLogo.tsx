import React from 'react';

interface MarutiLogoProps {
  variant?: 'full' | 'horizontal' | 'mark-only' | 'compact';
  theme?: 'dark' | 'light'; // 'dark' = for light bg (deep forest green logo), 'light' = for dark bg (white/red logo)
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const MarutiMark: React.FC<{
  theme?: 'dark' | 'light';
  className?: string;
  size?: number;
}> = ({ theme = 'dark', className = '', size = 48 }) => {
  const wingColor = theme === 'light' ? '#FFFFFF' : '#103B28';
  const redColor = '#D92716';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Maruti Tech Solution Emblem"
    >
      {/* Left Wing of M */}
      <path
        d="M50 72.5C46.5 68 40.5 56 37 42C34.5 32 37.5 21 43.5 13C41 18 36.5 28 31 36C25.5 44 19 50 14 53C17 45 20 28 27.5 14C23 22 17.5 35 15.5 48C13.5 61 21 69 29.5 70C36 71 43.5 72.5 50 72.5Z"
        fill={wingColor}
      />
      {/* Right Wing of M */}
      <path
        d="M50 72.5C53.5 68 59.5 56 63 42C65.5 32 62.5 21 56.5 13C59 18 63.5 28 69 36C74.5 44 81 50 86 53C83 45 80 28 72.5 14C77 22 82.5 35 84.5 48C86.5 61 79 69 70.5 70C64 71 56.5 72.5 50 72.5Z"
        fill={wingColor}
      />
      {/* Lower Wing Bridge / Base Curve */}
      <path
        d="M28 71C35 74 42.5 75.5 50 75.5C57.5 75.5 65 74 72 71C66 73 58 74 50 74C42 74 34 73 28 71Z"
        fill={wingColor}
      />
      {/* Center Tilak / Flame (Sharp top, teardrop bottom) */}
      <path
        d="M50 8C50 8 53.5 30 53.2 41C53 45 51.8 48 50 48C48.2 48 47 45 46.8 41C46.5 30 50 8 50 8Z"
        fill={redColor}
      />
      {/* Center Dot (Bindi / Focal Point) */}
      <circle cx="50" cy="56" r="3.6" fill={redColor} />
    </svg>
  );
};

export const MarutiLogo: React.FC<MarutiLogoProps> = ({
  variant = 'full',
  theme = 'dark',
  className = '',
  size = 'md',
}) => {
  const isLight = theme === 'light';
  const textColor = isLight ? 'text-white' : 'text-[#103B28]';
  const subTextColor = isLight ? 'text-[#F7F6F0]/85' : 'text-[#103B28]/90';
  const taglineColor = isLight ? 'text-[#F7F6F0]/70' : 'text-[#2C4A38]';
  const ruleColor = isLight ? 'bg-white/40' : 'bg-[#103B28]/40';

  if (variant === 'mark-only') {
    const markSizes = { sm: 32, md: 44, lg: 64, xl: 88 };
    return <MarutiMark theme={theme} size={markSizes[size]} className={className} />;
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3.5 select-none ${className}`}>
        <MarutiMark theme={theme} size={size === 'sm' ? 36 : size === 'lg' ? 52 : 44} />
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span
              className={`text-xl md:text-2xl font-extrabold tracking-tight ${textColor}`}
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              MARUTI
            </span>
            <span className={`text-[11px] md:text-xs font-semibold tracking-widest uppercase ${subTextColor}`}>
              TECH SOLUTION
            </span>
          </div>
          <span className={`text-[10px] md:text-[11px] font-medium tracking-wider -mt-0.5 ${taglineColor}`}>
            Solution for Your IT Issue
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 select-none ${className}`}>
        <MarutiMark theme={theme} size={36} />
        <div className="flex flex-col">
          <span
            className={`text-lg font-bold tracking-tight leading-none ${textColor}`}
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            MARUTI
          </span>
          <span className={`text-[9px] font-semibold tracking-widest uppercase leading-tight ${subTextColor}`}>
            TECH SOLUTION
          </span>
        </div>
      </div>
    );
  }

  // Full Stacked Logo (Exact representation of uploaded brand asset)
  return (
    <div className={`inline-flex flex-col items-center text-center select-none ${className}`}>
      <MarutiMark theme={theme} size={size === 'sm' ? 48 : size === 'lg' ? 80 : size === 'xl' ? 104 : 64} />
      
      {/* MARUTI */}
      <h1
        className={`text-2xl md:text-3xl font-extrabold tracking-wide mt-1.5 ${textColor}`}
        style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.08em' }}
      >
        MARUTI
      </h1>

      {/* — TECH SOLUTION — */}
      <div className="flex items-center justify-center gap-2 mt-1 w-full max-w-[200px]">
        <div className={`h-[1px] flex-1 ${ruleColor}`} />
        <span
          className={`text-[10px] md:text-xs font-bold tracking-[0.22em] uppercase ${subTextColor}`}
        >
          TECH SOLUTION
        </span>
        <div className={`h-[1px] flex-1 ${ruleColor}`} />
      </div>

      {/* Tagline: Solution for Your IT Issue */}
      <p className={`text-[11px] md:text-xs font-medium tracking-wider mt-1 ${taglineColor}`}>
        Solution for Your IT Issue
      </p>
    </div>
  );
};
