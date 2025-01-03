import React from 'react';
import { StatusBadge } from './StatusBadge';

export function HeaderTitle() {
  return (
    <div>
      <div className="flex items-center space-x-3">
        <h1 className="text-2xl font-bold text-white font-mono">
          Homelab Dashboard
        </h1>
        <StatusBadge />
      </div>
      <p className="text-emerald-400 font-mono text-sm mt-1">
        $ services status: operational
      </p>
    </div>
  );
}