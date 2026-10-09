'use client';

import React from 'react';
import { MeshGradient } from '@paper-design/shaders-react';

export function PaperShaderBackground() {
  return (
    <div
      className="absolute inset-0 size-full pointer-events-none overflow-hidden bg-[#090a10]"
      data-paper-shader=""
    >
      <MeshGradient
        colors={['#090a10', '#841b50', '#e37be1', '#0f172a', '#85e2de']}
        speed={0.25}
        distortion={0.65}
        swirl={0.4}
        grainMixer={0.75}
        grainOverlay={0.75}
        scale={1.1}
        className="size-full object-cover opacity-90"
      />

      {/* SVG Grain Noise Overlay for Extra Texture */}
      <svg className="absolute inset-0 size-full opacity-40 mix-blend-overlay pointer-events-none">
        <filter id="extraGrainNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#extraGrainNoise)" />
      </svg>

      {/* Dark Vignette Overlay for Center Contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(9,10,16,0.15)_0%,rgba(9,10,16,0.85)_100%)] pointer-events-none" />
    </div>
  );
}