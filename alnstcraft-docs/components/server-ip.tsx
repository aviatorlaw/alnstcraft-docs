'use client';

import React, { useState } from 'react';
import { Check, Copy, Monitor, Smartphone } from 'lucide-react';

export function ServerIPWidget() {
  const [copiedIP, setCopiedIP] = useState(false);
  const [copiedPort, setCopiedPort] = useState(false);

  const copy = (text: string, setFn: (v: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setFn(true);
    setTimeout(() => setFn(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
      {/* Java Edition */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-800/60 p-4 border border-slate-800 hover:border-[#e37be1]/50 transition-all duration-300 shadow-lg group">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#e37be1]">
            <Monitor className="w-4 h-4" />
            <span>JAVA EDITION</span>
          </div>
          <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            1.8 - 1.21+
          </span>
        </div>
        <div className="flex items-center justify-between gap-2 bg-slate-950/80 px-3 py-2 rounded-lg border border-slate-800">
          <code className="text-sm font-mono text-slate-200 select-all">mc.alnstcord.xyz</code>
          <button
            onClick={() => copy('mc.alnstcord.xyz', setCopiedIP)}
            className="p-1.5 hover:bg-slate-800 rounded-md text-slate-400 hover:text-white transition-colors"
            title="Copy IP"
          >
            {copiedIP ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Bedrock Edition */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-800/60 p-4 border border-slate-800 hover:border-[#85e2de]/50 transition-all duration-300 shadow-lg group">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#85e2de]">
            <Smartphone className="w-4 h-4" />
            <span>BEDROCK EDITION</span>
          </div>
          <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            Port Required
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 flex items-center justify-between bg-slate-950/80 px-2.5 py-2 rounded-lg border border-slate-800">
            <code className="text-xs font-mono text-slate-200 truncate">mc.alnstcord.xyz</code>
          </div>
          <button
            onClick={() => copy('25599', setCopiedPort)}
            className="flex items-center justify-between bg-slate-950/80 px-2.5 py-2 rounded-lg border border-slate-800 hover:border-[#85e2de]/40 text-left transition-colors"
          >
            <div className="truncate">
              <span className="block text-[9px] text-slate-500 font-sans leading-none">PORT</span>
              <code className="text-xs font-mono text-[#85e2de]">25599</code>
            </div>
            {copiedPort ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
          </button>
        </div>
      </div>
    </div>
  );
}