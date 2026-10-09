'use client';

import Link from 'next/link';
import { BookOpen, Disc as Discord, CloudLightning, ShieldCheck, Ampersands } from 'lucide-react';
import { PaperShaderBackground } from '@/components/paper-shader';

export default function HomePage() {
  return (
    <div className="flex-1 justify-center text-center xl:mx-30 xl:border-x xl:pt-8">
      <div className="relative z-1 overflow-clip rounded-b-3xl border-b bg-background">
        <div className="xl:px-3">
          
          {/* Main Hero Card Container */}
          <div className="relative mx-auto flex h-[87vh] w-full max-w-[1400px] overflow-hidden border border-slate-800/80 bg-[#090a10] bg-origin-border *:text-center max-xl:h-screen xl:max-h-[850px] xl:rounded-2xl">
            
            {/* Native Canvas Shader Background */}
            <PaperShaderBackground />

            <div className="z-2 flex size-full flex-col justify-center px-4 max-xl:!pt-32 md:p-12 max-md:items-center max-md:text-center">
              
              {/* Title */}
              <h1 className="text-balance pb-3 text-center text-3xl font-semibold tracking-tighter text-white md:text-5xl lg:text-6xl">
                Welcome to <span className="text-[#e37be1]">ALNSTCRAFT</span>
              </h1>

              {/* Subtitle */}
              <p className="text-balance pb-4 text-center text-base font-medium leading-relaxed tracking-tight text-slate-400 md:text-lg">
                sua dies btw!!!
              </p>

              {/* Requirements / Info Badges */}
              <span className="flex items-center justify-center gap-4 lg:mb-8 max-lg:hidden *:flex *:items-center *:gap-2 *:text-xs *:justify-center">
                <span className="text-slate-300">
                  <CloudLightning className="h-4 w-4 text-[#e37be1]" />
                  <span>Minecraft 1.8 - 1.21+</span>
                </span>
                <span className="text-slate-300">
                  <ShieldCheck className="h-4 w-4 text-[#e37be1]" />
                  <span>DiscordSRV Access</span>
                </span>
                <span className="text-slate-300">
                  <Ampersands className="h-4 w-4 text-[#e37be1]" />
                  <span>Java & Bedrock Crossplay</span>
                </span>
              </span>

              {/* Action Buttons */}
              <div className="flex w-full flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-[#e37be1] px-6 py-2.5 text-sm font-semibold tracking-tight text-slate-950 transition-all hover:bg-[#e37be1]/90 active:scale-95"
                  href="https://discord.gg/vivinos"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Discord className="h-4 w-4" />
                  <span>Discord</span>
                </a>

                <Link
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/90 px-6 py-2.5 text-sm font-semibold tracking-tight text-slate-200 transition-all hover:border-slate-500 hover:bg-slate-800 hover:text-white active:scale-95"
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