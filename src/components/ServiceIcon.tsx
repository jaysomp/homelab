import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceIconProps {
  icon: LucideIcon;
  category: string;
}

const categoryColors: Record<string, string> = {
  infrastructure: 'from-blue-500/10 to-cyan-500/10 text-blue-500',
  ai: 'from-purple-500/10 to-pink-500/10 text-purple-500',
  workspace: 'from-orange-500/10 to-amber-500/10 text-orange-500',
  monitoring: 'from-emerald-500/10 to-green-500/10 text-emerald-500',
};

export function ServiceIcon({ icon: Icon, category }: ServiceIconProps) {
  const colors = categoryColors[category] || categoryColors.infrastructure;
  
  return (
    <div className={`p-2.5 bg-gradient-to-br ${colors} rounded-xl border border-current/20 shadow-lg shadow-current/5`}>
      <Icon className="w-6 h-6" />
    </div>
  );
}