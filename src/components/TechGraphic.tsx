import React from 'react';

interface TechGraphicProps {
  className?: string;
  theme?: 'dark' | 'light';
}

export const TechGraphic: React.FC<TechGraphicProps> = ({
  className = '',
  theme = 'light',
}) => {
  const strokeColor = theme === 'dark' ? '#103B28' : '#F7F6F0';
  const nodeFill = theme === 'dark' ? '#103B28' : '#ffffff';
  const accentColor = '#D92716';

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full opacity-[0.07]"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="subtle-tech-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke={strokeColor}
              strokeWidth="0.75"
            />
            <circle cx="0" cy="0" r="1.5" fill={strokeColor} />
          </pattern>
        </defs>

        {/* Geometric Grid Background */}
        <rect width="100%" height="100%" fill="url(#subtle-tech-grid)" />

        {/* Clean Motherboard Bus Lines */}
        <g stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Main Data Bus 1 */}
          <path d="M 120 180 L 340 180 L 400 240 L 760 240 L 820 180 L 1050 180" />
          <path d="M 160 210 L 320 210 L 380 270 L 740 270 L 800 210 L 1000 210" />
          
          {/* Trace to Chip Socket */}
          <path d="M 400 240 L 400 480 L 480 560 L 680 560" />
          <path d="M 760 240 L 760 480 L 680 560" />
          
          {/* Vertical Bus & Orthogonal Routing */}
          <path d="M 880 180 L 880 380 L 960 460 L 1120 460" />
          <path d="M 240 180 L 240 380 L 180 440 L 80 440" />
        </g>

        {/* Network & Hardware Nodes */}
        <circle cx="340" cy="180" r="4" fill={nodeFill} stroke={strokeColor} strokeWidth="2" />
        <circle cx="400" cy="240" r="4" fill={nodeFill} stroke={strokeColor} strokeWidth="2" />
        <circle cx="760" cy="240" r="4" fill={nodeFill} stroke={strokeColor} strokeWidth="2" />
        <circle cx="820" cy="180" r="4" fill={nodeFill} stroke={strokeColor} strokeWidth="2" />
        <circle cx="480" cy="560" r="4" fill={nodeFill} stroke={strokeColor} strokeWidth="2" />
        <circle cx="680" cy="560" r="4" fill={nodeFill} stroke={strokeColor} strokeWidth="2" />

        {/* Diagnostic Point with Vermilion Accent */}
        <circle cx="400" cy="480" r="3" fill={accentColor} />
        <circle cx="760" cy="480" r="3" fill={accentColor} />

        {/* Processor Footprint Outline */}
        <rect
          x="500"
          y="320"
          width="160"
          height="160"
          rx="8"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <rect
          x="530"
          y="350"
          width="100"
          height="100"
          rx="4"
          stroke={strokeColor}
          strokeWidth="1.2"
        />
        <text
          x="580"
          y="405"
          textAnchor="middle"
          fill={strokeColor}
          fontSize="10"
          letterSpacing="0.2em"
          fontFamily="monospace"
        >
          MTS-SOC
        </text>
      </svg>
    </div>
  );
};
