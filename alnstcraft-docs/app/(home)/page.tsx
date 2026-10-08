import Link from 'next/link';
import { BookOpen, Disc as Discord, Shield, Zap, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center p-4 md:p-8">
      {/* Hero Banner Container */}
      <div className="relative flex w-full max-w-5xl flex-col items-center justify-center overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 px-6 py-16 text-center shadow-2xl backdrop-blur-md md:py-24">
        
        {/* Subtle Background Radial Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#e37be1]/30 via-[#85e2de]/20 to-purple-600/30 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 right-10 -z-10 h-[250px] w-[350px] rounded-full bg-[#e37be1]/15 blur-[90px]" />

        {/* Title */}
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#e37be1]">ALNSTCRAFT</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-xl text-base font-medium text-slate-400 sm:text-lg">
          sua dues btw!!!
        </p>

        {/* Quick Feature Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-300">
          <div className="flex items-center gap-1.5">
            <Zap className="h-3.5 w-3.5 text-[#e37be1]" />
            <span>Minecraft 1.8 - 1.21+ Support</span>
          </div>
          <span className="hidden text-slate-600 sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <Shield className="h-3.5 w-3.5 text-[#85e2de]" />
            <span>DiscordSRV Whitelist</span>
          </div>
          <span className="hidden text-slate-600 sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            <span>Java & Bedrock Crossplay</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://discord.gg/vivinos"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#e37be1] px-6 py-2.5 text-sm font-semibold text-slate-950 transition-all hover:bg-[#e37be1]/90 hover:shadow-lg hover:shadow-[#e37be1]/25 active:scale-95"
          >
            <Discord className="h-4 w-4" />
            <span>Join Discord</span>
          </a>

          <Link
            href="/docs/server-info"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/90 px-6 py-2.5 text-sm font-semibold text-slate-200 transition-all hover:border-slate-500 hover:bg-slate-800 hover:text-white active:scale-95"
          >
            <BookOpen className="h-4 w-4 text-slate-400" />
            <span>Documentation</span>
          </Link>
        </div>

      </div>
    </main>
  );
}