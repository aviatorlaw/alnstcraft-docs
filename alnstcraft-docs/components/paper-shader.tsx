'use client';

import React from 'react';
import { MeshGradient } from '@paper-design/shaders-react';

export function PaperShaderBackground() {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      data-paper-shader=""
    >
      <MeshGradient
        colors={['#e37be1', '#85e2de', '#841b50', '#0f172a']}
        speed={0.4}
        distortion={0.8}
        className="w-full h-full object-cover opacity-80"
      />
    </div>
  );
}