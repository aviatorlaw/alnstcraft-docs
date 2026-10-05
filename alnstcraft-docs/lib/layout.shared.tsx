import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2">
        <img 
          src="https://media.aviatorlaw.eu/alnstcraft-banner.png" 
          alt="ALNSTCRAFT Logo" 
          className="w-6 h-6 object-contain rounded"
        />
        <span className="font-bold">ALNSTCRAFT</span>
      </div>
    ),
  },
  links: [],
};