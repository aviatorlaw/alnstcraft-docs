'use client';

import React, { useState } from 'react';
import { Check, Copy, ShieldCheck } from 'lucide-react';

interface DiscordRoleProps {
  name: string;
  roleId: string;
  variant?: 'holographic' | 'default';
  description?: string;
}

export function DiscordRole({
  name,
  roleId,
  variant = 'default',
  description,
}: DiscordRoleProps) {
  const [copied, setCopied] = useState(false);

  const copyRole = () => {
    navigator.clipboard.writeText(`<@&${roleId}>`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isHolo = variant === 'holographic';

  return (
    <span className="group relative inline-flex items-center gap-1.5 my-1 mx-0.5">
      <button
        onClick={copyRole}
        type="button"
        title="Click to copy Role ID mention"
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 border cursor-pointer select-none active:scale-95 ${
          isHolo
            ? 'bg-gradient-to-r from-[#e37be1] via-[#85e2de] to-[#e37be1] bg-[length:200%_auto] animate-gradient text-slate-950 border-white/40 shadow-sm shadow-[#e37be1]/30 hover:shadow-md hover:shadow-[#85e2de]/50 font-bold'
            : 'bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border-slate-700/80 hover:border-slate-500 shadow-sm'
        }`}
      >
        <span className={`w-2 h-2 rounded-full ${isHolo ? 'bg-slate-950' : 'bg-[#e37be1]'}`} />
        <span>@{name}</span>
        {copied ? (
          <Check className="w-3 h-3 text-emerald-400 animate-in zoom-in-50" />
        ) : (
          <Copy className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
        )}
      </button>

      {/* Tooltip */}
      <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[220px] rounded-lg bg-slate-900 border border-slate-700/80 p-2 text-center text-[11px] font-medium text-slate-300 opacity-0 shadow-xl transition-all duration-150 group-hover:opacity-100 z-50 backdrop-blur-md">
        {description || `Role ID: ${roleId}`}
        <span className="block text-[9px] text-slate-400 mt-0.5 font-normal">
          {copied ? '✓ Mention code copied!' : 'Click to copy mention tag'}
        </span>
      </span>
    </span>
  );
}

export function DiscordRoleGroup({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 p-3 my-3 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 mr-1 w-full sm:w-auto">
        <ShieldCheck className="w-4 h-4 text-[#85e2de]" />
        <span>Required Roles:</span>
      </div>
      <div className="flex flex-wrap gap-1.5 items-center">{children}</div>
    </div>
  );
}