import Link from 'next/link';
import { BookOpen, Disc as Discord, CloudLightning, ShieldX, Ampersands } from 'lucide-react';
import { FlickeringGrid } from '@/components/flickering-grid';

export default function HomePage() {
  return (
    <div className="xl:pt-8 justify-center text-center flex-1 xl:mx-30 xl:border-x">
      <div className="overflow-clip z-1 relative bg-background rounded-b-3xl border-b">
        <div className="xl:px-3">
          
          {/* Main Hero Card Container */}
          <div className="relative flex h-[87vh] max-xl:h-screen xl:max-h-[850px] *:text-center border xl:rounded-2xl overflow-hidden mx-auto w-full max-w-[1400px] bg-origin-border">
            
            {/* Ambient Radial Gradient Background */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(227,123,225,0.18),rgba(255,255,255,0))]" />

            <div className="flex flex-col z-2 px-4 size-full max-xl:!pt-32 md:p-12 max-md:items-center max-md:text-center justify-center">
              
              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-balance text-center pb-5">
                <span className="text-[#e37be1]">ALNSTCRAFT</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-lg text-center text-muted-foreground font-medium text-balance leading-relaxed tracking-tight pb-3">
                sua dies btw!!!
              </p>

              {/* Badges */}
              <span className="flex items-center justify-center gap-3 *:flex *:items-center *:text-xs *:justify-center *:gap-2 lg:mb-9 max-lg:hidden">
                <span>
                  <CloudLightning className="w-4 h-4 text-[#e37be1]" />
                  <span>Minecraft 1.8 - 1.21+</span>
                </span>
                <span>
                  <ShieldX className="w-4 h-4 text-[#e37be1]" />
                  <span>DiscordSRV Access</span>
                </span>
                <span>
                  <Ampersands className="w-4 h-4 text-[#e37be1]" />
                  <span>Java & Bedrock Crossplay</span>
                </span>
              </span>

              {/* Action Buttons */}
              <div className="flex w-full items-center justify-center gap-4 flex-wrap pt-4">
                <a
                  className="inline-flex justify-center px-5 py-3 rounded-full font-medium tracking-tight transition-colors bg-[#e37be1] text-slate-950 hover:bg-[#e37be1]/90 max-sm:text-sm items-center gap-2"
                  href="https://discord.gg/vivinos"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Discord className="w-4 h-4" />
                  Discord
                </a>
                <Link
                  className="inline-flex justify-center px-5 py-3 rounded-full font-medium tracking-tight transition-colors border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent max-sm:text-sm items-center gap-2"
                  href="/docs/server-info"
                >
                  <BookOpen className="w-4 h-4" />
                  Documentation
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* Flickering Grid Banner */}
        <div className="relative overflow-hidden w-full h-[200px] my-4 flex items-center justify-center">
          <FlickeringGrid color="#e37be1" squareSize={4} gridGap={6} maxOpacity={0.4} />
        </div>

      </div>
    </div>
  );
}