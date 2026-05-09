import React from "react";

interface LogoProps {
  isDarkMode?: boolean;
  className?: string;
}

export default function Logo({ isDarkMode = true, className = "" }: LogoProps) {
  const mainColor = isDarkMode ? "white" : "black";

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg 
        width="100" 
        height="50" 
        viewBox="0 0 100 50" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="logo-mask">
            <rect width="100" height="50" fill="white" />
            {/* Thicker, more precise diagonal slash cut matching the visual */}
            <line 
              x1="5" 
              y1="50" 
              x2="95" 
              y2="0" 
              stroke="black" 
              strokeWidth="7" 
            />
          </mask>
        </defs>

        {/* The MR letters - making them bolder and tighter */}
        <g mask="url(#logo-mask)">
          <text 
            x="50" 
            y="43" 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontSize="55" 
            fontWeight="950" 
            textAnchor="middle" 
            fill={mainColor}
            style={{ letterSpacing: "-0.08em", fontStyle: "italic" }}
          >
            MR
          </text>
        </g>
      </svg>
    </div>
  );
}
