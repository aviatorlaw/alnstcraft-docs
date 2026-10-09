'use client';

import React from 'react';

interface MeshGradientProps {
  className?: string;
}

export function MeshGradient({ className = '' }: MeshGradientProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Base Dark Atmosphere */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Primary Animated Pink/Purple Glow Mesh */}
      <div className="absolute -top-[20%] -left-[10%] h-[140%] w-[120%] animate-pulse rounded-full bg-gradient-to-br from-[#e37be1]/30 via-purple-900/20 to-transparent blur-[120px] transition-all duration-1000" />

      {/* Secondary Cyan/Teal Mesh Accent */}
      <div className="absolute -bottom-[20%] -right-[10%] h-[130%] w-[110%] rounded-full bg-gradient-to-tl from-[#85e2de]/20 via-pink-900/15 to-transparent blur-[130px]" />

      {/* Center Subtle Highlight */}
      <div className="absolute top-1/2 left-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(227,123,225,0.15)_0%,rgba(0,0,0,0)_70%)] blur-[90px]" />

      {/* Subtle Noise/Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,15,0.85)_100%)]" />
    </div>
  );
}