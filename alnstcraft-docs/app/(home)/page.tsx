import Link from 'next/link';
import { HomeLayout } from 'fumadocs-ui/layouts/home';

export default function HomePage() {
  return (
    <HomeLayout nav={{ title: 'ALNSTCRAFT' }}>
      <div className="relative flex flex-1 flex-col items-center justify-center text-center px-4 py-24 md:py-32">
        {/* Native Fumadocs Radial Glow Background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
        
        {/* Hero Content */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-fd-foreground">
          Welcome to <span className="text-fd-primary">ALNSTCRAFT</span>
        </h1>

        <p className="mt-4 max-w-xl text-base text-fd-muted-foreground sm:text-lg">
          sua dies btw!!!
        </p>

        {/* Hero Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/docs/server-info"
            className="inline-flex h-11 items-center justify-center rounded-md bg-fd-primary px-8 text-sm font-medium text-fd-primary-foreground shadow transition-colors hover:bg-fd-primary/90"
          >
            Documentation
          </Link>

          <a
            href="https://discord.gg/vivinos"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-md border border-fd-border bg-fd-secondary/50 px-8 text-sm font-medium text-fd-secondary-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            Join Discord
          </a>
        </div>
      </div>
    </HomeLayout>
  );
}