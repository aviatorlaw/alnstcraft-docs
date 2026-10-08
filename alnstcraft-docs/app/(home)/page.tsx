import Link from 'next/link';
import { BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-secondary/50 px-3 py-1 text-xs text-fd-muted-foreground mb-6">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
        <span>Official Server Documentation</span>
      </div>

      {/* Hero Title */}
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-fd-foreground mb-4">
        Welcome to <span className="text-fd-primary">ALNSTCRAFT</span>
      </h1>

      {/* Subtitle */}
      <p className="max-w-xl text-base sm:text-lg text-fd-muted-foreground mb-8">
        The complete guide for connection info, DiscordSRV account linking, rules, and server plugin mechanics.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/docs"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-semibold text-fd-primary-foreground shadow transition-colors hover:bg-fd-primary/90"
        >
          <BookOpen className="w-4 h-4" />
          <span>Read Documentation</span>
        </Link>
        <a
          href="https://discord.gg/vivinos"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-fd-border bg-fd-secondary/30 px-5 py-2.5 text-sm font-medium text-fd-foreground transition-colors hover:bg-fd-secondary/80"
        >
          <span>Join Discord</span>
          <ExternalLink className="w-3.5 h-3.5 text-fd-muted-foreground" />
        </a>
      </div>
    </main>
  );
}