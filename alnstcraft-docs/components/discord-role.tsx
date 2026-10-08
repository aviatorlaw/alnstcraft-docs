'use client';

import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface DiscordRoleProps {
  name: string;
  roleId: string;
  variant?: 'holographic' | 'default';
}

export function DiscordRole({ name, roleId, variant = 'default' }: DiscordRoleProps) {
  const [copied, setCopied] = useState(false);

  const copyRole = () => {
    navigator.clipboard.writeText(`<@&${roleId}>`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const isHolo = variant === 'holographic';

  return (
    <button
      onClick={copyRole}
      type="button"
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-xs font-medium border transition-all cursor-pointer active:scale-95 ${
        isHolo
          ? 'bg-gradient-to-r from-[#e37be1]/20 via-[#85e2de]/20 to-[#e37be1]/20 text-slate-100 border-[#e37be1]/40 hover:border-[#85e2de]'
          : 'bg-fd-secondary/50 hover:bg-fd-secondary text-fd-foreground border-fd-border'
      }`}
    >
      <span
        className={`w-2 h-2 rounded-full ${
          isHolo
            ? 'bg-gradient-to-r from-[#e37be1] to-[#85e2de]'
            : 'bg-slate-400'
        }`}
      />
      <span>@{name}</span>
      {copied ? (
        <Check className="w-3 h-3 text-emerald-400" />
      ) : (
        <Copy className="w-3 h-3 opacity-40 hover:opacity-100" />
      )}
    </button>
  );
}

export function DiscordRoleGroup({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap items-center gap-2 my-2">{children}</div>;
}