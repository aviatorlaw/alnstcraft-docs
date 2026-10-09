import Link from 'next/link';
import { BookOpen, Disc as Discord } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center p-4 md:p-8">
      {/* PluralBuddy Card Wrapper */}
      <div className="relative flex w-full max-w-5xl flex-col items-center justify-center overflow-hidden rounded-2xl border border-fd-border bg-fd-card px-6 py-16 text-center shadow-lg md:py-24">
        
        {/* Fumadocs Ambient Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-fd-primary/15 blur-[100px]" />

        {/* Hero Title */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-fd-foreground">
          Welcome to <span className="text-fd-primary">ALNSTCRAFT</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-xl text-base font-medium text-fd-muted-foreground sm:text-lg">
          sua dues btw!!!
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://discord.gg/vivinos"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-fd-primary px-6 py-2.5 text-sm font-semibold text-fd-primary-foreground transition-all hover:opacity-90 active:scale-95"
          >
            <Discord className="h-4 w-4" />
            <span>Join Discord</span>
          </a>

          <Link
            href="/docs/server-info"
            className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-secondary px-6 py-2.5 text-sm font-semibold text-fd-secondary-foreground transition-all hover:bg-fd-accent hover:text-fd-accent-foreground active:scale-95"
          >
            <BookOpen className="h-4 w-4 text-fd-muted-foreground" />
            <span>Documentation</span>
          </Link>
        </div>

      </div>
    </main>
  );
}