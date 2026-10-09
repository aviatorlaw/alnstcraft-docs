'use client';

import Link from 'next/link';
import { BookOpen, Disc as Discord, CloudLightning, ShieldCheck, Ampersands } from 'lucide-react';
import dynamic from 'next/dynamic';

const PaperShaderBackground = dynamic(
  () => import('@/components/paper-shader').then((mod) => mod.PaperShaderBackground),
  { ssr: false }
);

export default function HomePage() {
  return (
    <div className="flex-1 justify-center text-center xl:mx-30 xl:border-x xl:pt-8">
      <div className="relative z-1 overflow-clip rounded-b-3xl border-b bg-background">
        <div className="xl:px-3">
          
          {/* Main Hero Card Container */}
          <div className="relative mx-auto flex h-[87vh] w-full max-w-[1400px] overflow-hidden border bg-origin-border *:text-center max-xl:h-screen xl:max-h-[850px] xl:rounded-2xl">
            
            {/* Native Paper Shader Canvas Background */}
            <PaperShaderBackground />

            <div className="z-2 flex size-full flex-col justify-center px-4 max-xl:!pt-32 md:p-12 max-md:items-center max-md:text-center">
              
              {/* Title */}
              <h1 className="text-balance pb-5 text-center text-3xl font-medium tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl text-white">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-[#e37be1] via-[#85e2de] to-[#e37be1] bg-clip-text text-transparent">
                  ALNSTCRAFT
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-balance pb-3 text-center text-base font-medium leading-relaxed tracking-tight text-slate-300 md:text-lg">
                sua dies btw!!!
              </p>

              {/* Requirements / Info Badges */}
              <span className="flex items-center justify-center gap-3 lg:mb-9 max-lg:hidden *:flex *:items-center *:gap-2 *:text-xs *:justify-center">
                <span className="text-slate-300">
                  <CloudLightning className="h-4 w-4 text-[#e37be1]" />
                  <span>Minecraft 1.8 - 1.21+</span>
                </span>
                <span className="text-slate-300">
                  <ShieldCheck className="h-4 w-4 text-[#85e2de]" />
                  <span>DiscordSRV Access</span>
                </span>
                <span className="text-slate-300">
                  <Ampersands className="h-4 w-4 text-[#e37be1]" />
                  <span>Java & Bedrock Crossplay</span>
                </span>
              </span>

              {/* Action Buttons */}
              <div className="flex w-full flex-wrap items-center justify-center gap-4 pt-4">
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-[#e37be1] px-5 py-3 text-sm font-medium tracking-tight text-slate-950 transition-colors hover:bg-[#e37be1]/90"
                  href="https://discord.gg/vivinos"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Discord className="h-4 w-4" />
                  <span>Discord</span>
                </a>

                <Link
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-medium tracking-tight text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800"
                  href="/docs/server-info"
                >
                  <BookOpen className="h-4 w-4 text-slate-400" />
                  <span>Documentation</span>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}