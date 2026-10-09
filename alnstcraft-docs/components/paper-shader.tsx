'use client';

import React from 'react';

export function PaperShaderBackground() {
  return (
    <div className="absolute inset-0 size-full pointer-events-none overflow-hidden bg-[#090a10]">
      {/* Dark Ambient Radial Mesh Glows */}
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#841b50]/60 via-[#e37be1]/30 to-transparent blur-[120px] opacity-70" />
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#85e2de]/30 via-purple-900/40 to-transparent blur-[120px] opacity-60" />

      {/* SVG Grain / Noise Texture Overlay */}
      <svg className="absolute inset-0 size-full opacity-[0.18] mix-blend-overlay pointer-events-none">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Center Dark Vignette for Text Contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(9,10,16,0.2)_0%,rgba(9,10,16,0.85)_100%)]" />
    </div>
  );
}