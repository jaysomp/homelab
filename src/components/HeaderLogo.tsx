import React from 'react';
import { Terminal } from 'lucide-react';

export function HeaderLogo() {
  return (
    <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/20 shadow-lg shadow-green-500/5">
      <Terminal className="w-8 h-8 text-green-400" />
    </div>
  );
}