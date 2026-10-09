'use client';

import React, { useEffect, useRef } from 'react';

export function PaperShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 1000);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    let time = 0;

    const render = () => {
      time += 0.005;
      ctx.clearRect(0, 0, width, height);

      // Base dark fill
      ctx.fillStyle = '#090a10';
      ctx.fillRect(0, 0, width, height);

      // Animated Cyan/Teal Blob (Bottom Left)
      const g1 = ctx.createRadialGradient(
        width * 0.1 + Math.sin(time) * 40,
        height * 0.85 + Math.cos(time * 0.8) * 30,
        10,
        width * 0.2,
        height * 0.8,
        width * 0.55
      );
      g1.addColorStop(0, 'rgba(133, 226, 222, 0.35)');
      g1.addColorStop(0.5, 'rgba(132, 27, 80, 0.2)');
      g1.addColorStop(1, 'rgba(9, 10, 16, 0)');

      ctx.fillStyle = g1;
      ctx.beginPath();
      ctx.arc(width * 0.2, height * 0.8, width * 0.6, 0, Math.PI * 2);
      ctx.fill();

      // Animated Pink/Magenta Blob (Top Right / Center Flow)
      const g2 = ctx.createRadialGradient(
        width * 0.75 + Math.cos(time * 1.2) * 50,
        height * 0.25 + Math.sin(time) * 40,
        20,
        width * 0.7,
        height * 0.3,
        width * 0.5
      );
      g2.addColorStop(0, 'rgba(227, 123, 225, 0.45)');
      g2.addColorStop(0.4, 'rgba(132, 27, 80, 0.25)');
      g2.addColorStop(1, 'rgba(9, 10, 16, 0)');

      ctx.fillStyle = g2;
      ctx.beginPath();
      ctx.arc(width * 0.7, height * 0.3, width * 0.55, 0, Math.PI * 2);
      ctx.fill();

      // Dark Center Vignette
      const vignette = ctx.createRadialGradient(
        width / 2,
        height / 2,
        height * 0.2,
        width / 2,
        height / 2,
        width * 0.7
      );
      vignette.addColorStop(0, 'rgba(9, 10, 16, 0.1)');
      vignette.addColorStop(1, 'rgba(9, 10, 16, 0.85)');

      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 size-full pointer-events-none overflow-hidden bg-[#090a10]" data-paper-shader="">
      <canvas ref={canvasRef} className="absolute inset-0 size-full object-cover" />

      {/* Heavy Film Grain Noise Overlay */}
      <svg className="absolute inset-0 size-full opacity-[0.25] mix-blend-overlay pointer-events-none">
        <filter id="canvasNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#canvasNoise)" />
      </svg>
    </div>
  );
}