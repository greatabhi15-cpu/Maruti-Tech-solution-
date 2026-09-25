import React, { useId } from 'react';

interface MarutiLogoProps {
  variant?: 'full' | 'horizontal' | 'mark-only' | 'compact' | 'image';
  theme?: 'dark' | 'light'; // 'dark' = for light bg (forest green logo), 'light' = for dark bg (white/silver logo)
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  usePng?: boolean;
}

/**
 * MarutiMark renders the exact brand emblem from the official Maruti Tech Solution logo:
 * - Dynamic aerodynamic dual-wing 'M' crest in deep forest green with dimensional lighting
 * - Central vertical needle flame in brilliant vermilion red
 * - Focal bindi dot in vermilion red
 */
export const MarutiMark: React.FC<{
  theme?: 'dark' | 'light';
  className?: string;
  size?: number;
}> = ({ theme = 'dark', className = '', size = 44 }) => {
  const rawId = useId();
  // Sanitize id for SVG url references
  const id = rawId.replace(/[^a-zA-Z0-9_-]/g, '');

  const isLight = theme === 'light';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-label="Maruti Tech Solutions Emblem"
    >
      <defs>
        {/* Left Wing Gradient */}
        <linearGradient
          id={`${id}-left-wing`}
          x1="80"
          y1="50"
          x2="150"
          y2="225"
          gradientUnits="userSpaceOnUse"
        >
          {isLight ? (
            <>
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#E2EBE5" />
              <stop offset="100%" stopColor="#BFD3C7" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#1B633E" />
              <stop offset="35%" stopColor="#10432B" />
              <stop offset="70%" stopColor="#0A2C1C" />
              <stop offset="100%" stopColor="#061F13" />
            </>
          )}
        </linearGradient>

        {/* Right Wing Gradient */}
        <linearGradient
          id={`${id}-right-wing`}
          x1="220"
          y1="50"
          x2="150"
          y2="225"
          gradientUnits="userSpaceOnUse"
        >
          {isLight ? (
            <>
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#E2EBE5" />
              <stop offset="100%" stopColor="#BFD3C7" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#1B633E" />
              <stop offset="35%" stopColor="#10432B" />
              <stop offset="70%" stopColor="#0A2C1C" />
              <stop offset="100%" stopColor="#061F13" />
            </>
          )}
        </linearGradient>

        {/* Left Wing Highlight Facet */}
        <linearGradient
          id={`${id}-left-high`}
          x1="89"
          y1="52"
          x2="130"
          y2="170"
          gradientUnits="userSpaceOnUse"
        >
          {isLight ? (
            <>
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#2D8A58" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#1E6B43" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0A2C1C" stopOpacity="0" />
            </>
          )}
        </linearGradient>

        {/* Right Wing Highlight Facet */}
        <linearGradient
          id={`${id}-right-high`}
          x1="211"
          y1="52"
          x2="170"
          y2="170"
          gradientUnits="userSpaceOnUse"
        >
          {isLight ? (
            <>
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#2D8A58" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#1E6B43" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0A2C1C" stopOpacity="0" />
            </>
          )}
        </linearGradient>

        {/* Vermilion Red Center Flame Gradient */}
        <linearGradient
          id={`${id}-flame`}
          x1="150"
          y1="28"
          x2="150"
          y2="175"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#E52E1D" />
          <stop offset="60%" stopColor="#D92716" />
          <stop offset="100%" stopColor="#B81E10" />
        </linearGradient>
      </defs>

      {/* Emblem centered in 300x300 canvas (scaled 0.75 from 400x400) */}
      <g transform="translate(150, 150) scale(0.72) translate(-400, -302)">
        {/* Left Wing Main Body */}
        <path
          d="M400 450 C382 432 355 408 335 372 C312 330 300 280 278 205 C260 262 250 315 264 365 C278 415 330 445 400 450 Z"
          fill={`url(#${id}-left-wing)`}
        />
        {/* Left Wing Top Highlight */}
        <path
          d="M400 450 C382 410 372 365 352 320 C332 275 304 235 278 205 C295 240 325 285 348 335 C368 380 382 420 400 450 Z"
          fill={`url(#${id}-left-high)`}
        />

        {/* Right Wing Main Body */}
        <path
          d="M400 450 C418 432 445 408 465 372 C488 330 500 280 522 205 C540 262 550 315 536 365 C522 415 470 445 400 450 Z"
          fill={`url(#${id}-right-wing)`}
        />
        {/* Right Wing Top Highlight */}
        <path
          d="M400 450 C418 410 428 365 448 320 C468 275 496 235 522 205 C505 240 475 285 452 335 C432 380 418 420 400 450 Z"
          fill={`url(#${id}-right-high)`}
        />

        {/* Connecting Base Curve */}
        <path
          d="M375 444 C390 452 410 452 425 444 C415 448 385 448 375 444 Z"
          fill={isLight ? '#FFFFFF' : '#0A2C1C'}
        />

        {/* Center Vertical Flame / Tilak */}
        <path
          d="M400 155 C394 220 385 280 384 315 C383 334 390 348 400 348 C410 348 417 334 416 315 C415 280 406 220 400 155 Z"
          fill={`url(#${id}-flame)`}
        />

        {/* Center Focal Dot (Bindi) */}
        <circle cx="400" cy="370" r="18" fill={`url(#${id}-flame)`} />
      </g>
    </svg>
  );
};

export const MarutiLogo: React.FC<MarutiLogoProps> = ({
  variant = 'horizontal',
  theme = 'dark',
  className = '',
  size = 'md',
  usePng = false,
}) => {
  const isLight = theme === 'light';
  const textColor = isLight ? 'text-white' : 'text-[#0A2C1C]';
  const subTextColor = isLight ? 'text-[#F7F6F0]/90' : 'text-[#0E3824]';
  const taglineColor = isLight ? 'text-[#F7F6F0]/75' : 'text-[#1B5E3C]';

  // Standalone Mark
  if (variant === 'mark-only') {
    const markSizes = { sm: 36, md: 50, lg: 68, xl: 96 };
    const currentSize = markSizes[size] || 50;
    if (usePng) {
      return (
        <img
          src="/logo.png"
          alt="Maruti Tech Solutions"
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
          className={`object-contain shrink-0 select-none ${
            isLight ? 'brightness-110 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]' : ''
          } ${className}`}
          style={{
            width: `${currentSize}px`,
            height: `${currentSize}px`,
            imageRendering: 'auto',
          }}
        />
      );
    }
    return <MarutiMark theme={theme} size={currentSize} className={className} />;
  }

  // Full Image Asset (using /logo.png)
  if (variant === 'image') {
    const imgHeights = { sm: 'h-12', md: 'h-16', lg: 'h-24', xl: 'h-32' };
    return (
      <img
        src="/logo.png"
        alt="Maruti Tech Solutions Logo"
        loading="eager"
        decoding="async"
        referrerPolicy="no-referrer"
        className={`${imgHeights[size]} w-auto object-contain select-none ${
          isLight ? 'brightness-110 drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]' : ''
        } ${className}`}
        style={{ imageRendering: 'auto' }}
      />
    );
  }

  // Horizontal Layout (Standard for Header / Navbar)
  if (variant === 'horizontal') {
    const markSize =
      size === 'sm' ? 44 : size === 'md' ? 52 : size === 'lg' ? 62 : 72;
    const titleSize =
      size === 'sm'
        ? 'text-xl sm:text-2xl'
        : size === 'md'
          ? 'text-2xl sm:text-[26px]'
          : 'text-3xl sm:text-4xl';
    const subTitleSize =
      size === 'sm'
        ? 'text-[10px] sm:text-[11px]'
        : size === 'md'
          ? 'text-[10.5px] sm:text-[11.5px]'
          : 'text-xs sm:text-sm';
    const taglineSize =
      size === 'sm'
        ? 'text-[9px] sm:text-[10px]'
        : size === 'md'
          ? 'text-[9.5px] sm:text-[10.5px]'
          : 'text-[11px] sm:text-xs';

    return (
      <div className={`flex items-center gap-3 sm:gap-3.5 select-none text-left ${className}`}>
        {usePng ? (
          <img
            src="/logo.png"
            alt="Maruti Tech Solutions"
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
            className={`w-auto object-contain shrink-0 transition-transform duration-300 ${
              isLight ? 'brightness-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]' : ''
            }`}
            style={{
              height: `${markSize}px`,
              width: 'auto',
              imageRendering: 'auto',
            }}
          />
        ) : (
          <MarutiMark theme={theme} size={markSize} />
        )}
        <div className="flex flex-col justify-center">
          {/* Main Brand Title: MARUTI */}
          <span
            className={`${titleSize} font-bold tracking-wider leading-none ${textColor}`}
            style={{ fontFamily: "'Cinzel', 'Marcellus', 'Times New Roman', serif" }}
          >
            MARUTI
          </span>

          {/* Sub Brand: TECH SOLUTIONS */}
          <span
            className={`${subTitleSize} font-bold tracking-[0.24em] uppercase mt-1 leading-tight ${subTextColor}`}
            style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
          >
            TECH SOLUTIONS
          </span>

          {/* Official Tagline: Solution for Your All IT Issues */}
          <span
            className={`${taglineSize} font-medium tracking-wide mt-0.5 leading-tight ${taglineColor}`}
            style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
          >
            Solution for Your All IT Issues
          </span>
        </div>
      </div>
    );
  }

  // Compact Layout for tight spaces
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 select-none text-left ${className}`}>
        <MarutiMark theme={theme} size={40} />
        <div className="flex flex-col">
          <span
            className={`text-lg sm:text-xl font-bold tracking-wider leading-none ${textColor}`}
            style={{ fontFamily: "'Cinzel', 'Marcellus', serif" }}
          >
            MARUTI
          </span>
          <span
            className={`text-[9px] sm:text-[10px] font-bold tracking-[0.22em] uppercase mt-0.5 leading-tight ${subTextColor}`}
          >
            TECH SOLUTIONS
          </span>
        </div>
      </div>
    );
  }

  // Full Stacked Layout (Identical to uploaded square graphic)
  return (
    <div className={`inline-flex flex-col items-center text-center select-none ${className}`}>
      <MarutiMark
        theme={theme}
        size={size === 'sm' ? 60 : size === 'lg' ? 104 : size === 'xl' ? 128 : 84}
      />

      {/* MARUTI */}
      <div
        className={`text-2xl sm:text-3xl font-bold tracking-[0.08em] mt-2.5 leading-tight ${textColor}`}
        style={{ fontFamily: "'Cinzel', 'Marcellus', serif" }}
      >
        MARUTI
      </div>

      {/* TECH SOLUTIONS */}
      <div
        className={`text-xs sm:text-sm font-bold tracking-[0.26em] uppercase mt-1 leading-tight ${subTextColor}`}
        style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
      >
        TECH SOLUTIONS
      </div>

      {/* Solution for Your All IT Issues */}
      <div
        className={`text-xs sm:text-[13px] font-medium tracking-wide mt-1.5 leading-tight ${taglineColor}`}
        style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
      >
        Solution for Your All IT Issues
      </div>
    </div>
  );
};
