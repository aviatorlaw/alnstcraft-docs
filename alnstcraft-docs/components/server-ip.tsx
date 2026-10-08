'use client';

import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export function ServerIPWidget() {
  const [copiedIP, setCopiedIP] = useState(false);
  const [copiedPort, setCopiedPort] = useState(false);

  const copy = (text: string, setFn: (v: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setFn(true);
    setTimeout(() => setFn(false), 1500);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 my-3">
      {/* Java */}
      <button
        onClick={() => copy('mc.alnstcord.xyz', setCopiedIP)}
        className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg bg-fd-secondary/40 border border-fd-border hover:border-fd-accent text-xs font-mono text-fd-foreground transition-colors group"
      >
        <span className="text-fd-muted-foreground font-sans text-[11px]">Java:</span>
        <code>mc.alnstcord.xyz</code>
        {copiedIP ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-fd-muted-foreground group-hover:text-fd-foreground" />}
      </button>

      {/* Bedrock */}
      <button
        onClick={() => copy('25599', setCopiedPort)}
        className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg bg-fd-secondary/40 border border-fd-border hover:border-fd-accent text-xs font-mono text-fd-foreground transition-colors group"
      >
        <span className="text-fd-muted-foreground font-sans text-[11px]">Bedrock Port:</span>
        <code>25599</code>
        {copiedPort ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-fd-muted-foreground group-hover:text-fd-foreground" />}
      </button>
    </div>
  );
}